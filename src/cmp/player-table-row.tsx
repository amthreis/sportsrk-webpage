import { AwardIcon, BadgeIcon } from "lucide-react";
import { TableCell, TableRow } from "./shadcn/ui/table";
import Image from "next/image";
import { Badge } from "./shadcn/ui/badge";
import { formatMMR } from "@/utils/no-format";

export const ptrowStyles = {
    big: {
        imageSize: 80,
        pCN: "font-bold text-2xl",
        tableCN: "",
        skeletonCN: "w-[80px] h-[80px] rounded-full"
    },
    regular: {
        imageSize: 64,
        pCN: "font-semibold text-xl",
        tableCN: "translate-x-[8px] ",
        skeletonCN: "w-[64px] h-[64px] rounded-full"
    },
    small: {
        imageSize: 48,
        pCN: "text-sm",
        tableCN: "translate-x-[16px] ",
        skeletonCN: "w-[48px] h-[48px] rounded-full"
    },
};

const posCNs = {
    ["GK"]: "bg-yellow-600 text-yellow-200",

    ["CB"]: "bg-blue-600 text-blue-200",
    ["FB"]: "bg-blue-600 text-blue-200",

    ["DM"]: "bg-green-600 text-green-200",
    ["CM"]: "bg-green-600 text-green-200",
    ["LM"]: "bg-green-600 text-green-200",
    ["AM"]: "bg-green-600 text-green-200",

    ["WG"]: "bg-red-600 text-red-200",
    ["ST"]: "bg-red-600 text-red-200",
};

export const ptrowBadgeColors = ["gold", "darkgray", "peru"];

export interface PlayerTableRowProps {
    user: {
        email: string,
        id: string,
        avatar: string,
        role: string
    },
    pos: "GK" | "FB" | "CB" | "DM" | "CM" | "LM" | "AM" | "WG" | "ST",
    mmr: number,
    mmrIncr: number,
    rank: number
}

export default function PlayerTableRow(ply: PlayerTableRowProps) {
    const idx = ply.rank;

    const style =
                        idx < 3
                            ? ptrowStyles.big
                            : idx < 10
                              ? ptrowStyles.regular
                              : ptrowStyles.small;

    return (
        <TableRow className="" key={ply.user.id}>
            <TableCell className={`${style.pCN}`}>
                <div className="flex items-center justify-center gap-[2px]">
                    {idx < 3 && (
                        <AwardIcon
                            color={ptrowBadgeColors[idx]}
                            size={20}
                        />
                    )}
                    <p>{idx + 1}</p>
                </div>
            </TableCell>
            <TableCell
                className={`flex items-center gap-3 ${style.tableCN}`}
            >
                <Image
                    alt={`${ply.user.email.split("@")[0]}'s avatar'`}
                    className={`rounded-full`}
                    width={style.imageSize}
                    height={style.imageSize}
                    src={ply.user.avatar}
                ></Image>
                <Badge className={`${posCNs[ply.pos]} min-w-[43px] flex justify-center items-center`}>
                    {ply.pos}
                </Badge>
                {ply.user.email.split("@")[0]}
            </TableCell>
            <TableCell className="text-center items-center">
                <h4 className="font-bold text-[18px]">
                    {formatMMR(ply.mmr)}
                </h4>
                <p className={`font-semibold text-[12px] ${ ply.mmrIncr >= 0 ? " text-green-600" : "text-red-500" }`}>
                    ({ply.mmrIncr >= 0 ? "+" : ""}{formatMMR(ply.mmrIncr)})
                </p>
            </TableCell>
        </TableRow>
    );
}
