import { AwardIcon, BadgeIcon } from "lucide-react";
import { TableCell, TableRow } from "./shadcn/ui/table";
import Image from "next/image";
import { Badge } from "./shadcn/ui/badge";
import { formatMMR } from "@/utils/no-format";
import { ptrowBadgeColors, ptrowStyles } from "./player-table-row";
import { Skeleton } from "./shadcn/ui/skeleton";

export interface PlayerTableRowSkeletonProps {
    rank: number;
}

export default function PlayerTableRowSkeleton(
    props: PlayerTableRowSkeletonProps,
) {
    const idx = props.rank;

    const style =
        idx < 3
            ? ptrowStyles.big
            : idx < 10
              ? ptrowStyles.regular
              : ptrowStyles.small;

    return (
        <TableRow className="" key={idx}>
            <TableCell className={`${style.pCN}`}>
                <div className="flex items-center justify-center gap-[2px]">
                    {idx < 3 && (
                        <AwardIcon color={ptrowBadgeColors[idx]} size={20} />
                    )}
                    <p>{idx + 1}</p>
                </div>
            </TableCell>
            <TableCell className={`flex items-center gap-3 ${style.tableCN}`}>
                <Skeleton className={style.skeletonCN}></Skeleton>
                <Skeleton className="w-[180px] h-[22px] rounded-full" />
            </TableCell>
            <TableCell className="">
                <Skeleton className="w-[90px] h-[48px] rounded-full m-auto" />
            </TableCell>
        </TableRow>
    );
}

/*

 return (
        <TableRow className="" key={idx}>
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
                <Skeleton className={`${"w-[32px] h-[32px] rounded-full"}`}></Skeleton>
                
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

    */
