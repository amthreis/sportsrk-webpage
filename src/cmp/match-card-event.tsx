"use client"

import BallSvg from "@/svg/ball-svg";
import FootballCard from "./football-card";

const ballColor = {
    ["dark"]: "white",
    ["light"]: "black"
}

const eventIcon = {
    ["GOAL"]: <BallSvg width={20} height={20} fill="darkgray"/>,
    ["REDCARD"]: <FootballCard color="RED" />,
    ["YELLOWCARD"]: <FootballCard color="YELLOW" />,
    ["YELLOWREDCARD"]: <FootballCard color="YELLOWRED" />
};

export interface MatchCardEventProps {
    time: number,
    player: string,
    side: "HOME" | "AWAY",
    type: "GOAL" | "REDCARD" | "YELLOWCARD" | "YELLOWREDCARD",
    playerpos: string
}

export default function MatchCardEvent(props: MatchCardEventProps) {
    return (
        <div className="m-4 flex">
            <div className=" flex-1 flex items-center gap-2 justify-end">
                {props.side === "HOME" && (
                    <>
                        {props.player}
                        {eventIcon[props.type]}
                    </>
                )}
            </div>

            <div className=" w-[80px] text-center font-bold">
                {props.time}''
            </div>

            <div className="flex-1 text-left flex items-center gap-2">
                {props.side === "AWAY" && (
                    <>
                        {eventIcon[props.type]}
                        {props.player}
                    </>
                )}
            </div>
        </div>
    );
}
