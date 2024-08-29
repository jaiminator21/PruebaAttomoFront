"use client";

import Image from "next/image";
import {
    CardTitle,
    CardDescription,
    CardHeader,
    CardContent,
    CardFooter,
    Card,
} from "@/components/ui/card";

import { Separator, } from "@/components/ui/separator";

export function GameList({ game }: { game: any }) {

    console.log(game); // Verifica que el objeto `game` se esté recibiendo correctamente

    return (
        <>
        <div className="mb-5">
            <Card className="flex flex-row items-center justify-center  gap-10 p-5">
                <Image
                    src={game.cover}
                    height={50}
                    width={50}
                    alt="Vegetta777 youtube logo"
                    priority />
                <Separator orientation="vertical" />
                <h1 >{game.name}</h1> {/* Asegúrate de que `game` tiene la propiedad `name` */}
                <Separator orientation="vertical" />
                <p>{game.genre}</p>
                <Separator orientation="vertical" />
                <p>Votos: {game.votes}</p>

            </Card>
        </div>
        </>
    );
}