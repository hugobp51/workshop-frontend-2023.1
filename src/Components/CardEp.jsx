import React from "react";
import imgEp from "../images/generica.jpg"
import { Link } from "react-router-dom";


export function CardEp({
name,
air_date,
episode,
id
}){
    return (
        <>
        <Link to={`/episodio/${id}`}
      className="flex flex-col justify-between w-full h-full bg-[#242424]
         rounded-md shadow-2x1 drop-shadow-md cursor-pointer hover:scale-105 duration-150 transition text-white"
    >
      <section className="flex flex-col justify-between pb-2 items-center bg-slate-200 w-full h-[40%] rounded-md">
        <img src={imgEp} alt="" />
        <div className="flex flex-col gap-2">
          <h2>Episódio:{name}</h2>
          <p>Número: {episode}</p>
          <p>Lançado em: {air_date}</p>
        </div>
      </section>
    </Link>
        </>
    )
}