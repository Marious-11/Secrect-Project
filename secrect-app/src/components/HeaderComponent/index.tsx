import Image from "next/image";
import React from "react";
import logo from "@/assets/img/logo.png";
import { NavigationMenuDemo } from "../Navigate";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import { DrawerHeaderComponent } from "./DrawerHeader";

const isLogin = [
  { title: "Profile" },
  { title: "Settings" },
  { title: "Logout" },
];
function HeaderComponent() {
  return (
    <section className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-[9999] py-2">
      <header className="container flex justify-between items-center">
        <div className="flex  items-center ">
          {/* <Image src={logo.src} alt="" width={200} height={100} className="w-[200px] h-[50px] object-cover"  /> */}
          <Link
            href={"/"}
            className="text-3xl  font-semibold  hover:transition-all duration-500 ease-linear text-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500"
          >
            Marious
          </Link>
          <section className="lg:hidden">
            <DrawerHeaderComponent />
          </section>
        </div>
        <section className="lg:flex justify-center w-full gap-5 hidden ">
          <NavigationMenuDemo />
        </section>

        <section className="flex justify-end gap-2">
          <Button variant={"ghost"}>
            <FaSearch size={24} color="black" />
          </Button>
          <Button variant={"ghost"}>
            <Link href={"/cart"}>
              <FaCartShopping size={24} color="black" />
            </Link>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="w-[56px] flex justify-center">
                <Avatar className="cursor-pointer ">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-44 ">
              {isLogin.map((item) => (
                <DropdownMenuItem key={item.title} className="cursor-pointer">
                  {item.title}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </section>
      </header>
    </section>
  );
}

export default HeaderComponent;
