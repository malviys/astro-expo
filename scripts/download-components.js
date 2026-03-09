import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const components = [
    'accordion', 'alert-dialog', 'alert', 'aspect-ratio', 'avatar', 'badge', 'button', 'card',
    'checkbox', 'collapsible', 'context-menu', 'dialog', 'dropdown-menu', 'hover-card', 'input',
    'label', 'menubar', 'popover', 'progress', 'radio-group', 'select', 'separator', 'skeleton',
    'switch', 'tabs', 'text', 'textarea', 'toggle-group', 'toggle', 'tooltip'
];

const basePath = path.join(__dirname, 'src', 'components', 'native');
const baseUtilsPath = path.join(__dirname, 'src', 'lib');

const allDependencies = new Set();
const allRegistryDeps = new Set();

const fetchJson = (url) => new Promise((resolve, reject) => {
    https.get(url, (res) => {
        let body = '';
        res.on('data', chunk => body += chunk);
        res.on('end', () => {
            try {
                if (res.statusCode !== 200) resolve(null);
                else resolve(JSON.parse(body));
            } catch (e) {
                resolve(null);
            }
        });
    }).on('error', reject);
});

async function run() {
    if (!fs.existsSync(basePath)) fs.mkdirSync(basePath, { recursive: true });

    for (const comp of components) {
        const json = await fetchJson(`https://raw.githubusercontent.com/founded-labs/react-native-reusables/main/apps/docs/public/r/uniwind/${comp}.json`);
        if (!json) {
            console.log(`Failed to fetch ${comp}`);
            continue;
        }

        if (json.dependencies) json.dependencies.forEach(d => allDependencies.add(d));
        if (json.registryDependencies) json.registryDependencies.forEach(d => {
            const depName = d.split('/').pop().replace('.json', '');
            allRegistryDeps.add(depName);
        });

        if (json.files && json.files.length > 0) {
            const file = json.files.find(f => f.path.endsWith('.tsx'));
            if (file) {
                let content = file.content;
                // Fix imports
                content = content.replace(/@\/registry\/uniwind\/lib\/utils/g, '~/lib/utils');
                content = content.replace(/@\/registry\/uniwind\/components\/ui\//g, '~/components/native/');

                const filePath = path.join(basePath, `${comp}.tsx`);
                if (!fs.existsSync(filePath)) {
                    fs.writeFileSync(filePath, content, 'utf8');
                    console.log(`Downloaded ${comp}.tsx`);
                } else {
                    console.log(`Skipped ${comp}.tsx (already exists)`);
                }
            }
        }
    }

    // Also fetch any registry dependencies not in the list (like 'icon'!)
    const addedDeps = Array.from(allRegistryDeps).filter(d => !components.includes(d));
    for (const comp of addedDeps) {
        const json = await fetchJson(`https://raw.githubusercontent.com/founded-labs/react-native-reusables/main/apps/docs/public/r/uniwind/${comp}.json`);
        if (json && json.files) {
            let content = json.files[0].content;
            content = content.replace(/@\/registry\/uniwind\/lib\/utils/g, '~/lib/utils');
            content = content.replace(/@\/registry\/uniwind\/components\/ui\//g, '~/components/native/');
            fs.writeFileSync(path.join(basePath, `${comp}.tsx`), content, 'utf8');
            console.log(`Downloaded dependency ${comp}.tsx`);
        }
    }

    console.log("All required dependencies to install:", Array.from(allDependencies));
    fs.writeFileSync(path.join(__dirname, 'deps.json'), JSON.stringify(Array.from(allDependencies)));
}

run();
