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
import { FaHeart } from "react-icons/fa";
import { Separator, } from "@/components/ui/separator";

import Link from "next/link";
import { API } from "@/lib/services/api";
import { useState } from "react";

export function GameList({ game }: { game: any }) {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const sendVote = async () => {
        const token: any = localStorage.getItem('Token')
        if (token == null) {
            console.log('Token Vacio');
            setIsAuthenticated(false)
            return false;
        }
        try {
            const res = await API.get('users/checksession', {
                headers: {
                    Authorization: `Bearer ${token}`,  // Asegúrate de que el token esté correctamente formateado
                },
            });
            console.log('Respuesta:', res.data);
            setIsAuthenticated(true)
            console.log(isAuthenticated);

        } catch (error) {
            console.error('Error en la petición:', error);
            setIsAuthenticated(false)
            return false;
        }



        if (isAuthenticated === true) {
            console.log("mandandoVoto");
            const newVote :number=  game.votes+1
      
            const url:string = 'games'+game.id

            API.put(url).then((res)=>{

            })
            
        }

    }
    console.log(game); // Verifica que el objeto `game` se esté recibiendo correctamente

    return (
        <>
            <div className="mb-5" >
                <Card className="flex flex-row items-center justify-center  gap-10 p-5" >
                    <Link href={{
                        pathname: "/game",
                        query: {
                            gameid: game._id
                        }
                    }}>
                        <div className="flex flex-row items-center justify-center  gap-10 p-5">
                            <Image
                                src={game.cover}
                                height={50}
                                width={50}
                                alt="Vegetta777 youtube logo"
                                priority />

                            <Separator orientation="vertical" />

                            <CardTitle className="text-3xl font-bold">{game.name}</CardTitle>

                            <Separator orientation="vertical" />

                            <CardTitle className="text-3xl font-bold">{game.genre}</CardTitle>
                        </div>
                    </Link>
                    <Separator orientation="vertical" />
                    <div className="flex flex-col justify-center items-center" onClick={sendVote}>
                        <span><FaHeart /></span>
                        <span>{game.votes}</span>
                    </div>
                    <p> </p>

                </Card>

            </div >
        </>
    );
}