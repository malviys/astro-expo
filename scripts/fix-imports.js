import fs from 'fs';
import path from 'path';

const dir = '/Users/malviys/Workspace/malviys-oss/astor-expo/src/components/native';
fs.readdirSync(dir).forEach(file => {
    if (file.endsWith('.tsx')) {
        const filePath = path.join(dir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        let changed = false;
        if (content.includes('~/lib/utils')) {
            content = content.replaceAll('~/lib/utils', '../../lib/utils');
            changed = true;
        }
        if (content.includes('~/components/native/')) {
            content = content.replaceAll('~/components/native/', './');
            changed = true;
        }
        if (changed) {
            fs.writeFileSync(filePath, content);
            console.log(`Updated imports in ${file}`);
        }
    }
});
