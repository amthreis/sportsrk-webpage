import { Button } from "@/cmp/shadcn/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/cmp/shadcn/ui/card";
import { TableTop100 } from "@/cmp/table/table-top100";
import { Loader2Icon, LoaderIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
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
                    <TableTop100 />
                </CardContent>
            </Card>
        </main>
    );
}
