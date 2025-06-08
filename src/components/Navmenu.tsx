"use client";
import { Button } from "./ui/button";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import { usePathname } from "next/navigation";

type NavItems = {
  title: string;
  link: Url;
};

export default function Navmenu({
  navItems,

}: {
  navItems: NavItems[];
}) {
  let path = usePathname();
  if(path.includes("projects")){
    path = "/projects";
  }
  return (
    <div className="bg-[#282829] rounded-bl-xl rounded-tr-xl p-2 absolute w-full max-w-[400px] right-0 border border-t-0 border-r-0 border-gray-100/10 flex items-center justify-between gap-4 ">
      {navItems.map((item, idx) => (
        <Link href={item.link} key={idx} className="cursor-pointer">
          <Button
            variant={path == item.link ? "active" : "ghost"}
            className="cursor-pointer"
            size={"sm"}
          >
            {item.title}
          </Button>
        </Link>
      ))}
    </div>
  );
}
