"use client";

import { TrophyIcon } from "lucide-react";
import { Button } from "./shadcn/ui/button";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTheme } from "next-themes";

const links = [
    {
        name: "TOP 100",
        link: "/",
    },
    {
        name: "MATCHES",
        link: "/matches",
    }
];

export default function Header() {
    const path = usePathname();

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
            </div>
        </div>
    );
}

/*
<Button variant="outline" onClick={ () => { setTheme(theme !== "dark" ? "dark" : "light" ) }}>
{
    <SunMoonSvg width={25} height={25} fill={ theme === "dark" ? "white" : "black"   } /> 
}
</Button>

*/
