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
import { AwardIcon, BadgeCentIcon, BadgeIcon } from "lucide-react";
import { useEffect, useState } from "react";
import PlayerCell, { PlayerTableRowProps } from "../player-table-row";
import PlayerTableRow from "../player-table-row";
import PlayerTableRowSkeleton from "../player-table-row-sk";

// type Player = {
//     id: string;
//     name: string;
//     pos: "GK" | "FB" | "CB" | "DM" | "CM" | "AM" | "WG" | "ST";
//     mmr: string;
//     mmrIncr: string;
// };

// const players: Player[] = [
//     {
//         id: "x0",
//         name: "Endrick",
//         pos: "ST",
//         mmr: "164.5k",
//         mmrIncr: "+1.34k",
//     },
//     {
//         id: "x1",
//         name: "Endrick",
//         pos: "CB",
//         mmr: "144k",
//         mmrIncr: "-2k",
//     },
//     {
//         id: "x2",
//         name: "Endrick",
//         pos: "CM",
//         mmr: "71k",
//         mmrIncr: "+1k",
//     },
//     {
//         id: "x3",
//         name: "Endrick",
//         pos: "GK",
//         mmr: "1.5k",
//         mmrIncr: "+0",
//     },
//     {
//         id: "x1",
//         name: "Endrick",
//         pos: "CB",
//         mmr: "144k",
//         mmrIncr: "-2k",
//     },
//     {
//         id: "x2",
//         name: "Endrick",
//         pos: "CM",
//         mmr: "71k",
//         mmrIncr: "+1k",
//     },
//     {
//         id: "x3",
//         name: "Endrick",
//         pos: "GK",
//         mmr: "1.5k",
//         mmrIncr: "+0",
//     },
//     {
//         id: "x1",
//         name: "Endrick",
//         pos: "CB",
//         mmr: "144k",
//         mmrIncr: "-2k",
//     },
//     {
//         id: "x2",
//         name: "Endrick",
//         pos: "CM",
//         mmr: "71k",
//         mmrIncr: "+1k",
//     },
//     {
//         id: "x3",
//         name: "Endrick",
//         pos: "GK",
//         mmr: "1.5k",
//         mmrIncr: "+0",
//     },
//     {
//         id: "x1",
//         name: "Endrick",
//         pos: "CB",
//         mmr: "144k",
//         mmrIncr: "-2k",
//     },
//     {
//         id: "x2",
//         name: "Endrick",
//         pos: "CM",
//         mmr: "71k",
//         mmrIncr: "+1k",
//     },
//     {
//         id: "x3",
//         name: "Endrick",
//         pos: "GK",
//         mmr: "1.5k",
//         mmrIncr: "+0",
//     },
//     {
//         id: "x1",
//         name: "Endrick",
//         pos: "CB",
//         mmr: "144k",
//         mmrIncr: "-2k",
//     },
//     {
//         id: "x2",
//         name: "Endrick",
//         pos: "CM",
//         mmr: "71k",
//         mmrIncr: "+1k",
//     },
//     {
//         id: "x3",
//         name: "Endrick",
//         pos: "GK",
//         mmr: "1.5k",
//         mmrIncr: "+0",
//     },
//     {
//         id: "x1",
//         name: "Endrick",
//         pos: "CB",
//         mmr: "144k",
//         mmrIncr: "-2k",
//     },
//     {
//         id: "x2",
//         name: "Endrick",
//         pos: "CM",
//         mmr: "71k",
//         mmrIncr: "+1k",
//     },
//     {
//         id: "x3",
//         name: "Endrick",
//         pos: "GK",
//         mmr: "1.5k",
//         mmrIncr: "+0",
//     },
//     {
//         id: "x1",
//         name: "Endrick",
//         pos: "CB",
//         mmr: "144k",
//         mmrIncr: "-2k",
//     },
//     {
//         id: "x2",
//         name: "Endrick",
//         pos: "CM",
//         mmr: "71k",
//         mmrIncr: "+1k",
//     },
//     {
//         id: "x3",
//         name: "Endrick",
//         pos: "GK",
//         mmr: "1.5k",
//         mmrIncr: "+0",
//     },
//     {
//         id: "x1",
//         name: "Endrick",
//         pos: "CB",
//         mmr: "144k",
//         mmrIncr: "-2k",
//     },
//     {
//         id: "x2",
//         name: "Endrick",
//         pos: "CM",
//         mmr: "71k",
//         mmrIncr: "+1k",
//     },
//     {
//         id: "x3",
//         name: "Endrick",
//         pos: "GK",
//         mmr: "1.5k",
//         mmrIncr: "+0",
//     },
//     {
//         id: "x1",
//         name: "Endrick",
//         pos: "CB",
//         mmr: "144k",
//         mmrIncr: "-2k",
//     },
//     {
//         id: "x2",
//         name: "Endrick",
//         pos: "CM",
//         mmr: "71k",
//         mmrIncr: "+1k",
//     },
//     {
//         id: "x3",
//         name: "Endrick",
//         pos: "GK",
//         mmr: "1.5k",
//         mmrIncr: "+0",
//     },
// ];

export function TableTop100() {
    const [players, setPlayers] = useState<PlayerTableRowProps[]>([]);

    useEffect(() => {
        async function fetchUsers() {
            // console.log("an effect");

            console.log(
                "fetch from",
                `http://localhost:5757/common/football/top100`,
            );

            const response = await fetch(
                `http://localhost:5757/common/football/top100`,
                {
                    method: "GET",
                },
            );

            const result = await response.json();

            setPlayers(result);

            console.log(result);
        }

        fetchUsers();
    }, []);

    function getPlayers() {
        if (players.length > 0) {
            return players.map((ply, idx) => (
                <PlayerTableRow key={idx} {...ply} rank={idx} />
            ));
        } else {
            console.log(Array(100).length);
            return Array.from(Array(100)).map((ply, idx) => (
                <PlayerTableRowSkeleton key={idx} rank={idx} />
            ));
        }
    }

    return (
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
    );
}
