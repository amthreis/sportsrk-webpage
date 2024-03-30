"use client";

import { TrophyIcon } from "lucide-react";
import { Button } from "./shadcn/ui/button";

import { MoonIcon, SunIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTheme } from "next-themes";
import BallSvg from "@/svg/ball-svg";
import SunSvg from "@/svg/sun-svg";
import MoonSvg from "@/svg/moon-svg";

const links = [
    {
        name: "MATCHES",
        link: "/matches",
    },
    {
        name: "TOP 100",
        link: "/",
    },
];

export default function Header() {
    const path = usePathname();
    const { theme, setTheme } = useTheme();

    return (
        <div className="py-3 px-4 flex items-center justify-between border-b">
            <Link href="/" className="flex items-center gap-1">
                <TrophyIcon height={20} />
                <h1 className="font-bold text-xl">SPORTSRK</h1>
            </Link>
            <div className="flex justify-end gap-1">
                {links.map((l, idx) => (
                    <Link key={idx} href={l.link}>
                        <Button
                            key={l.link}
                            variant={path === l.link ? "secondary" : "ghost"}
                            className="font-bold"
                        >
                            {l.name}
                        </Button>
                    </Link>
                ))}
                <Button variant="outline" size="icon" onClick={() => {setTheme(theme != "dark" ? "dark" : "light"); console.log("change")}}>
                    {
                        theme == "dark" ? <MoonSvg width={24} /> : <SunSvg width={24} stroke="black"/>
                    }
                    
                </Button>
            </div>
        </div>
    );
}
