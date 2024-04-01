import { formatDistanceToNow } from "date-fns";
import MatchCardEvent, { MatchCardEventProps } from "./match-card-event";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./shadcn/ui/card";
import { Separator } from "./shadcn/ui/separator";
import { formatMMR } from "@/utils/no-format";

export interface MatchCardProps {
    id: string;
    state: string;
    time: string;
    avgmmr: number;

    data: {
        teams: {
            matchId: string;
            side: string;
            goals: number;
        }[];
    };

    events: MatchCardEventProps[];
}

export default function MatchCard(props: MatchCardProps) {
    return (
        <>
            <Card className="w-full max-w-[700px]  flex flex-col justify-center invisible md:visible ">
                <CardHeader className="text-center visible">
                    <CardTitle className="flex justify-center gap-2 items-center">
                        <div className="w-[32px] h-[32px] bg-red-400 rounded-full" />
                        {props.data.teams.find(t => t.side === "HOME")?.goals}{" "}-{" "}
                        {props.data.teams.find(t => t.side === "AWAY")?.goals}
                        <div className="w-[32px] h-[32px] bg-purple-400 rounded-full" />
                    </CardTitle>
                    <CardDescription>
                        {new Date(Date.parse(props.time)).toLocaleDateString()},{" "}
                        {formatDistanceToNow(new Date(Date.parse(props.time)), {
                            addSuffix: true,
                        })}
                    </CardDescription>
                </CardHeader>
                <Separator
                    orientation="horizontal"
                    className="w-[80px] m-auto  visible"
                />
                <CardContent className="visible">
                    {props.events.map((ev, idx) => (
                        <MatchCardEvent
                            key={idx}
                            player={ev.player.split("@")[0]}
                            side={ev.side}
                            time={ev.time}
                            type={ev.type}
                            playerpos={ev.playerpos}
                        />
                    ))}
                </CardContent>
                <Separator
                    orientation="horizontal"
                    className="w-[80px] m-auto mb-5 visible"
                />
                <CardFooter className="justify-center flex text-g visible">
                    <CardDescription>
                        Average MMR: {formatMMR(props.avgmmr)}
                    </CardDescription>
                </CardFooter>
            </Card>
            <Separator
                orientation="horizontal"
                className="w-[240px] m-auto  visible md:invisible"
            />
        </>
    );
}
