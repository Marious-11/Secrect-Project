import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { NavigationMenuDemo } from "../Navigate";

const isLogin = [
  { title: "Profile" },
  { title: "Settings" },
  { title: "Logout" },
];
export function DrawerHeaderComponent() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <FiMenu size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <section className="flex items-start mt-5">
          <NavigationMenuDemo isMobile />
        </section>
      </SheetContent>
    </Sheet>
  );
}
