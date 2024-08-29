"use client";

import { API } from "@/lib/services/api";
import { useEffect, useState } from "react";
import NavBar from '@/components/NavBar'


export default function Game({ searchParams }: {
    searchParams: {
        gameid: string;
    }
}) {
    const GameId :  string =  searchParams.gameid
    
    const [game, setGame] = useState({});
    
    console.log(GameId);
    
    const url: string = 'games/'+ GameId;
    
    const getGames = async () => {
        try {
            const res = await API.get(url);
            console.log(res);
            setGame(res.data.data)

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getGames();
    }, []);
    return (
        <>
                <NavBar />

               
        </>
    );
}