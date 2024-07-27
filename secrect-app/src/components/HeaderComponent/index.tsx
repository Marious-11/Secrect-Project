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

const isLogin = [
  { title: "Profile" },
  { title: "Settings" },
  { title: "Logout" },
];
function HeaderComponent() {
  return (
    <section className="fixed top-0 w-full bg-white backdrop-blur-sm shadow-md">
      <header className="container flex justify-between items-center">
        <Image src={logo.src} alt="" width={75} height={50} />
        <section className="flex justify-center gap-5">
          <NavigationMenuDemo />
        </section>
        <section className="flex justify-end gap-2">
          <Button variant={"ghost"}>
            <FaSearch size={24} />
          </Button>
          <Button variant={"ghost"}>
            <Link href={"/cart"}>
              <FaCartShopping size={24} />
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
