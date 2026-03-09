import {
  AlertCircleIcon,
  Bold,
  ChevronsUpDown,
  Info,
  Italic,
  Underline,
} from "lucide-react-native";
import { useState } from "react";
import { Image, ScrollView, View } from "react-native";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./native/accordion";
import { Alert, AlertDescription, AlertTitle } from "./native/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./native/alert-dialog";
import { AspectRatio } from "./native/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "./native/avatar";
import { Badge } from "./native/badge";
import { Button } from "./native/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./native/card";
import { Checkbox } from "./native/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./native/collapsible";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "./native/context-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./native/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./native/dropdown-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "./native/hover-card";
import { Icon } from "./native/icon";
import { Input } from "./native/input";
import { Label } from "./native/label";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "./native/menubar";
import { Popover, PopoverContent, PopoverTrigger } from "./native/popover";
import { Progress } from "./native/progress";
import { RadioGroup, RadioGroupItem } from "./native/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./native/select";
import { Separator } from "./native/separator";
import { Skeleton } from "./native/skeleton";
import { Switch } from "./native/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./native/tabs";
import { Text } from "./native/text";
import { Textarea } from "./native/textarea";
import { Toggle } from "./native/toggle";
import { ToggleGroup, ToggleGroupItem } from "./native/toggle-group";
import { Tooltip, TooltipContent, TooltipTrigger } from "./native/tooltip";

const ComponentSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <View className="my-10">
    <View className="mb-6">
      <Text className="text-xl font-medium text-foreground tracking-tight">
        {title}
      </Text>
    </View>
    <View className="flex flex-col gap-6">{children}</View>
  </View>
);

export const Home = () => {
  const [checked, setChecked] = useState(false);
  const [switchOn, setSwitchOn] = useState(false);
  const [toggleState, setToggleState] = useState(false);
  const [radioValue, setRadioValue] = useState("all");
  const [tabValue, setTabValue] = useState("account");

  return (
    <ScrollView
      className="flex-1 bg-background"
      contentContainerStyle={{ padding: 20, paddingBottom: 100 }}
    >
      <View className="items-center mt-12 mb-16">
        <Text className="text-3xl font-medium tracking-tight mb-3">
          AstroExpo Showcase
        </Text>
        <Text className="text-muted-foreground text-center max-w-md text-base leading-relaxed">
          A premium collection of React Native components styled with Uniwind,
          building a robust native foundation.
        </Text>
      </View>

      <ComponentSection title="Typography & Elements">
        <View className="flex flex-row flex-wrap gap-4 items-center">
          <Button>
            <Text>Default</Text>
          </Button>
          <Button variant="secondary">
            <Text>Secondary</Text>
          </Button>
          <Button variant="destructive">
            <Text>Destructive</Text>
          </Button>
          <Button variant="outline">
            <Text>Outline</Text>
          </Button>
          <Button variant="ghost">
            <Text>Ghost</Text>
          </Button>
          <Button variant="link">
            <Text>Link</Text>
          </Button>
        </View>

        <View className="flex flex-row flex-wrap gap-2 mt-4">
          <Badge>
            <Text>Default</Text>
          </Badge>
          <Badge variant="secondary">
            <Text>Secondary</Text>
          </Badge>
          <Badge variant="destructive">
            <Text>Destructive</Text>
          </Badge>
          <Badge variant="outline">
            <Text>Outline</Text>
          </Badge>
        </View>

        <View className="mt-4 gap-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </View>
      </ComponentSection>

      <ComponentSection title="Form Controls">
        <View className="gap-6 flex flex-col md:flex-row w-full max-w-sm">
          <View className="gap-2">
            <Label nativeID="email">Email</Label>
            <Input id="email" placeholder="hello@example.com" />
          </View>
          <View className="gap-2">
            <Label nativeID="bio">Bio</Label>
            <Textarea id="bio" placeholder="Tell us about yourself..." />
          </View>

          <View className="flex flex-row items-center gap-2">
            <Checkbox checked={checked} onCheckedChange={setChecked} />
            <Text>Accept terms & conditions</Text>
          </View>

          <View className="flex flex-row items-center justify-between">
            <Label nativeID="airplane-mode" className="flex-1">
              Airplane Mode
            </Label>
            <Switch
              checked={switchOn}
              onCheckedChange={setSwitchOn}
              id="airplane-mode"
            />
          </View>

          <View className="gap-3 mt-2">
            <Label>Notification Preference</Label>
            <RadioGroup value={radioValue} onValueChange={setRadioValue}>
              <View className="flex flex-row items-center gap-2">
                <RadioGroupItem value="all" id="r1" />
                <Label nativeID="r1">All updates</Label>
              </View>
              <View className="flex flex-row items-center gap-2">
                <RadioGroupItem value="mentions" id="r2" />
                <Label nativeID="r2">Mentions only</Label>
              </View>
            </RadioGroup>
          </View>

          <View className="flex-row gap-2">
            <Toggle
              pressed={toggleState}
              onPressedChange={setToggleState}
              aria-label="Toggle italic"
            >
              <Icon as={Bold} size={16} className="text-foreground" />
            </Toggle>

            <ToggleGroup
              type="multiple"
              value={["bold", "italic"]}
              onValueChange={() => {}}
            >
              <ToggleGroupItem value="bold" aria-label="Toggle bold">
                <Icon as={Bold} size={16} className="text-foreground" />
              </ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Toggle italic">
                <Icon as={Italic} size={16} className="text-foreground" />
              </ToggleGroupItem>
              <ToggleGroupItem value="underline" aria-label="Toggle underline">
                <Icon as={Underline} size={16} className="text-foreground" />
              </ToggleGroupItem>
            </ToggleGroup>
          </View>

          <View className="mt-2">
            <Select defaultValue={{ value: "apple", label: "Apple" }}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem label="Apple" value="apple" />
                  <SelectItem label="Banana" value="banana" />
                  <SelectItem label="Blueberry" value="blueberry" />
                  <SelectItem label="Grapes" value="grapes" />
                  <SelectItem label="Pineapple" value="pineapple" />
                </SelectGroup>
              </SelectContent>
            </Select>
          </View>
        </View>
      </ComponentSection>

      <ComponentSection title="Data Display">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Project Activity</CardTitle>
            <CardDescription>
              Recent updates to your repository.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <View className="flex-row items-center gap-4 mb-4">
              <Avatar alt="User avatar">
                <AvatarImage
                  source={{ uri: "https://github.com/shadcn.png" }}
                />
                <AvatarFallback>
                  <Text>CN</Text>
                </AvatarFallback>
              </Avatar>
              <View>
                <Text className="font-semibold">shadcn</Text>
                <Text className="text-xs text-muted-foreground">
                  Pushed 2 commits
                </Text>
              </View>
            </View>
            <Progress value={66} className="w-full" />
            <Text className="text-xs text-muted-foreground mt-2 text-right">
              66% Complete
            </Text>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <Text>View Details</Text>
            </Button>
          </CardFooter>
        </Card>

        <View className="mt-6 w-full max-w-sm">
          <Accordion type="multiple">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <Text>Is it accessible?</Text>
              </AccordionTrigger>
              <AccordionContent>
                <Text>Yes. It adheres to the WAI-ARIA design pattern.</Text>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <Text>Is it styled?</Text>
              </AccordionTrigger>
              <AccordionContent>
                <Text>
                  Yes. It comes with default styles that matches the other
                  components' aesthetic.
                </Text>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </View>
      </ComponentSection>

      <ComponentSection title="Overlays & Feedback">
        <View className="gap-4">
          <Alert variant="default" icon={Info}>
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components to your app using the cli.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive" icon={AlertCircleIcon}>
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Your session has expired. Please log in again.
            </AlertDescription>
          </Alert>

          <View className="flex flex-row flex-wrap gap-4 mt-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <Text>Open Dialog</Text>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you're
                    done.
                  </DialogDescription>
                </DialogHeader>
                <View className="gap-4 py-4">
                  <View className="flex-row items-center gap-4">
                    <Label nativeID="name" className="text-right w-20">
                      Name
                    </Label>
                    <Input
                      id="name"
                      defaultValue="Pedro Duarte"
                      className="flex-1"
                    />
                  </View>
                  <View className="flex-row items-center gap-4">
                    <Label nativeID="username" className="text-right w-20">
                      Username
                    </Label>
                    <Input
                      id="username"
                      defaultValue="@peduarte"
                      className="flex-1"
                    />
                  </View>
                </View>
                <DialogFooter>
                  <Button>
                    <Text>Save changes</Text>
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">
                  <Text>Show Alert Dialog</Text>
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>
                    <Text>Cancel</Text>
                  </AlertDialogCancel>
                  <AlertDialogAction>
                    <Text>Continue</Text>
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  <Text>Open Popover</Text>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <View className="space-y-2">
                  <Text className="font-medium leading-none">Dimensions</Text>
                  <Text className="text-sm text-muted-foreground">
                    Set the dimensions for the layer.
                  </Text>
                </View>
              </PopoverContent>
            </Popover>

            <Tooltip delayDuration={150}>
              <TooltipTrigger>
                <Button variant="outline">
                  <Text>Hover me</Text>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <Text>Add to library</Text>
              </TooltipContent>
            </Tooltip>

            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="link">
                  <Text>@nextjs</Text>
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <View className="flex justify-between space-x-4">
                  <Avatar alt="vercel ">
                    <AvatarImage
                      source={{ uri: "https://github.com/vercel.png" }}
                    />
                    <AvatarFallback>
                      <Text>VC</Text>
                    </AvatarFallback>
                  </Avatar>
                  <View className="space-y-1">
                    <Text className="text-sm font-semibold">@nextjs</Text>
                    <Text className="text-sm">
                      The React Framework – created and maintained by @vercel.
                    </Text>
                    <View className="flex items-center pt-2">
                      <Text className="text-xs text-muted-foreground">
                        Joined December 2021
                      </Text>
                    </View>
                  </View>
                </View>
              </HoverCardContent>
            </HoverCard>
          </View>
        </View>
      </ComponentSection>

      <ComponentSection title="Layout, Menus & Navigation">
        <Tabs
          value={tabValue}
          onValueChange={setTabValue}
          className="w-full max-w-sm"
        >
          <TabsList className="w-full grid grid-cols-2 flex-row">
            <TabsTrigger value="account" className="flex-1">
              <Text>Account</Text>
            </TabsTrigger>
            <TabsTrigger value="password" className="flex-1">
              <Text>Password</Text>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>
                  Make changes to your account here.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <View className="space-y-1">
                  <Label>Name</Label>
                  <Input defaultValue="Pedro Duarte" />
                </View>
              </CardContent>
              <CardFooter>
                <Button>
                  <Text>Save changes</Text>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you'll be logged out.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <View className="space-y-1">
                  <Label>Current password</Label>
                  <Input />
                </View>
              </CardContent>
              <CardFooter>
                <Button>
                  <Text>Save password</Text>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        <View className="mt-8">
          <Collapsible className="w-full max-w-sm space-y-2">
            <View className="flex flex-row items-center justify-between space-x-4 px-4">
              <Text className="text-sm font-semibold">
                @peduarte starred 3 repositories
              </Text>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="icon" className="w-9 p-0">
                  <Icon
                    as={ChevronsUpDown}
                    className="h-4 w-4 text-foreground"
                  />
                  <Text className="sr-only">Toggle</Text>
                </Button>
              </CollapsibleTrigger>
            </View>
            <View className="rounded-md border border-border px-4 py-3 font-mono text-sm">
              <Text>@radix-ui/primitives</Text>
            </View>
            <CollapsibleContent className="space-y-2">
              <View className="rounded-md border border-border px-4 py-3 font-mono text-sm">
                <Text>@radix-ui/colors</Text>
              </View>
              <View className="rounded-md border border-border px-4 py-3 font-mono text-sm">
                <Text>@stitches/react</Text>
              </View>
            </CollapsibleContent>
          </Collapsible>
        </View>

        <View className="mt-6 gap-4">
          <View className="flex-row gap-4 items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <Text>Open Dropdown menu</Text>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <Separator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Text>Profile</Text>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Text>Billing</Text>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Text>Settings</Text>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </View>

          <ContextMenu>
            <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed border-border dark:bg-card">
              <Text className="text-sm text-muted-foreground text-center">
                Right click here
              </Text>
            </ContextMenuTrigger>
            <ContextMenuContent className="w-64">
              <ContextMenuItem>
                <Text>Back</Text>
              </ContextMenuItem>
              <ContextMenuItem>
                <Text>Forward</Text>
              </ContextMenuItem>
              <ContextMenuItem>
                <Text>Reload</Text>
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>

          <Menubar onValueChange={() => {}} value="">
            <MenubarMenu value="">
              <MenubarTrigger>
                <Text>File</Text>
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  <Text>New Tab</Text>
                </MenubarItem>
                <MenubarItem>
                  <Text>New Window</Text>
                </MenubarItem>
                <Separator />
                <MenubarItem>
                  <Text>Share</Text>
                </MenubarItem>
                <Separator />
                <MenubarItem>
                  <Text>Print</Text>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </View>

        <View className="mt-6 max-w-sm w-full">
          <AspectRatio
            ratio={16 / 9}
            className="bg-muted rounded-xl overflow-hidden"
          >
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80",
              }}
              alt="Photo by Drew Beamer"
              className="w-full h-full object-cover"
            />
          </AspectRatio>
        </View>
      </ComponentSection>
    </ScrollView>
  );
};
