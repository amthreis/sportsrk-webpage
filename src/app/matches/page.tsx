"use client";
import MatchCard, { MatchCardProps } from "@/cmp/match-card";

import { Separator } from "@/cmp/shadcn/ui/separator";
import { useEffect, useState } from "react";

export default function Home() {
    const [matches, setMatches] = useState<MatchCardProps[]>([]);

    useEffect(() => {
        async function fetchMatches() {
            //console.log("an effect");

            const response = await fetch(
                `http://localhost:5757/common/football/latest-matches`,
                {
                    method: "GET",
                },
            );

            const result = await response.json();

            setMatches(result);

            //console.log(result);
        }

        fetchMatches();
    }, []);

    return (
        <main className="flex flex-col items-center px-[0px] py-8 w-full gap-3">
            <h2 className="font-bold text-3xl">MATCHES</h2>
            <Separator
                orientation="horizontal"
                className="w-[24px] m-auto  visible md:invisible"
            />
            {matches.map((m, idx) => (
                <MatchCard key={idx} {...m} />
            ))}

            <p className="text-sm text-zinc-500">You've seen it all.</p>
        </main>
    );
}
