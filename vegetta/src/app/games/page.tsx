"use client";

import styles from "./page.module.css";
import NavBar from '@/components/NavBar'
import { GameList } from "@/components/gamelist";
import { useEffect, useState } from "react";
import { API } from "@/lib/services/api";
import { json } from "stream/consumers";


type Game = {
    name?: string;
    genre?: string;
    votes: number;
    cover?: string;
    comments: string[]; 
    createdAt: Date;
    updatedAt: Date;
  };
  

export default function Home() {

    const [gamesArray, setGamesArray] = useState<any[]>([]);
    
    const sortItemsByVotes = (items: Game[]): Game[] => {
        return items.sort((a, b) => b.votes - a.votes);
      };
    
      const getGames = async () => {
        try {
          const res = await API.get('games');
          if (res.data.length > 0) {
            const sortedGames = sortItemsByVotes(res.data);
            setGamesArray(sortedGames);
            console.log(gamesArray); 
          } else {
            console.log('array vacio');
          }
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
            <main className="flex flex-col items-center  min-h-screen bg-gray-100 dark:bg-gray-900 gap-20">
                <div className="m-32">
                    <h1>Vota tu juego favorito</h1>
                </div>
                <div >
                        {gamesArray.length > 0 ? (
                            gamesArray.map((game, index) => (
                                <div key = {index}  className="gap-10">
                                    < GameList key = {index} game = {game}/>
                                </div>
                            ))
                        ) : (
                            <p>No hay juegos disponibles.</p>
                        )}
                </div>
            </main>
        </>
    );
}
