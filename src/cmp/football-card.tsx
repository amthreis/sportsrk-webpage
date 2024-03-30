interface FootballCardProps {
    color: "YELLOW" | "RED" | "YELLOWRED";
}

const cardColor = {
    ["YELLOW"]: "bg-yellow-400",
    ["RED"]: "bg-red-400",
    ["YELLOWRED"]: "bg-orange-400",
};

export default function FootballCard(props: FootballCardProps) {
    if (props.color === "YELLOWRED") {
        return (
            <div
                className={`w-[16px] h-[24px] rounded-[4px] ${cardColor["YELLOW"]}  -translate-x-[2px] -translate-y-[2px]`}
            >
                <div
                    className={`w-[16px] h-[24px] rounded-[4px] ${cardColor["RED"]} translate-x-[5px] translate-y-[5px]`}
                ></div>
            </div>
        );
    } else {
        return (
            <div
                className={`w-[16px] h-[24px] rounded-[4px] ${cardColor[props.color]}`}
            />
        );
    }
}
