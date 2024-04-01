"use client"

import { useWindowSize } from "@/cmp/hook/use-window-size";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/cmp/shadcn/ui/card";
import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow } from "@/cmp/shadcn/ui/table";
import { TableTop100 } from "@/cmp/table/table-top100";
import TableTop100Portrait from "@/cmp/table/table-top100-pt";
import { Loader2Icon, LoaderIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
    const ws = useWindowSize();

    //console.log(ws);

    if (ws?.width === undefined) {
        return <></>
    }

    return (
        <main className="flex flex-col items-center px-[0px] sm:px-[80px] lg:px-[240px]  py-8 w-full">
            <Card className="w-full max-w-[900px] invisible sm:visible">
                <CardHeader className="visible">
                    <CardTitle>TOP 100 BY MMR</CardTitle>
                    <CardDescription>
                        MMR is defined by many factors and is meant to determine
                        how good a player is.
                    </CardDescription>
                </CardHeader>
                <CardContent className="justify-center flex">
                    {
                        ws?.width > 500 ? <TableTop100 /> : <TableTop100Portrait/>
                    }
                    
                </CardContent>
            </Card>
        </main>
    );
}
