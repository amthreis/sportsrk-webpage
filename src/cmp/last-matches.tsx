import { useEffect, useState } from "react";
import MatchCard, { MatchCardProps } from "./match-card";
import { Separator } from "./shadcn/ui/separator";
import { LoaderIcon } from "lucide-react";


export default function LastMatches() {
    const [matches, setMatches] = useState<MatchCardProps[] | undefined>(undefined);

    useEffect(() => {
        async function fetchMatches() {
            //console.log("an effect");

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/common/football/latest-matches`,
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
        <>
            <h2 className="font-bold text-3xl">MATCHES</h2>
            <Separator
                orientation="horizontal"
                className="w-[24px] m-auto  visible md:invisible"
            />
            {
                matches === undefined ? (
                    <div className="flex gap-1"><LoaderIcon className=" animate-spin" />Loading...</div>
                ) : (
                    <>
                        {
                            matches?.map((m, idx) => (
                                <MatchCard key={idx} {...m} />
                            ))
                        }

                        <p className="text-sm text-zinc-500">{"You've seen it all."}</p>
                    </>
                )
            }

        </>
        
        
    )
}