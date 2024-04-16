"use client";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/cmp/shadcn/ui/table";
import Image from "next/image";
import { Badge } from "../shadcn/ui/badge";
import { AwardIcon, BadgeCentIcon, BadgeIcon, LoaderIcon } from "lucide-react";
import { useEffect, useState } from "react";
import PlayerCell, { PlayerTableRowProps } from "../player-table-row";
import PlayerTableRow from "../player-table-row";
import PlayerTableRowSkeleton from "../player-table-row-sk";

export function TableTop100() {
    const [players, setPlayers] = useState<PlayerTableRowProps[] | undefined>(undefined);

    useEffect(() => {
        //console.log("fUsers eff");
        async function fetchUsers() {
            // console.log(
            //     "fetch from",
            //     `${process.env.NEXT_PUBLIC_API_URL}/common/football/top100`,
            // );

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/common/football/top100`,
                {
                    method: "GET",
                },
            );

            const result = await response.json();

            setPlayers(result);

            //console.log(result);
        }

        fetchUsers();
    }, []);

    function getPlayers() {
        if (players === undefined) {
            return <div></div>
        }

        if (players.length > 0) {
            return players.map((ply, idx) => (
                <PlayerTableRow key={idx} {...ply} rank={idx} />
            ));
        } else {
            return Array.from(Array(100)).map((ply, idx) => (
                <PlayerTableRowSkeleton key={idx} rank={idx} />
            ));
        }
    }

    return (
        <>
        {
            players === undefined ? (
                    <div className="flex gap-1"><LoaderIcon className=" animate-spin" />Loading...</div>
            ) : (
                <Table className=" visible">
                    <TableCaption>You have reached the end of the table.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-center">P</TableHead>
                            <TableHead>Player</TableHead>
                            <TableHead className="text-center">MMR</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>{getPlayers()}</TableBody>
                </Table>
            )
        }
        </>  
    );
}
