import React from "react";

export function CardGaleria({
  name,
  status,
  species,
  type,
  gender,
  image }){

  return (
    <div
      className="flex flex-col justify-between w-full h-full bg-white
         rounded-md shadow-2x1 drop-shadow-md cursor-pointer hover:scale-105 duration-150 transition"
    >
      <section className="flex flex-col justify-between pb-2 items-center bg-slate-200 w-full h-[40%] rounded-md">
        <img src={image} alt={`imagem do ${name}`} className="rounded-md" />
        <div className="grid grid-cols-2 gap-2">
          <h2>Nome:{name}</h2>
          <p>Status: {status}</p>
          <p>Espécie: {species}</p>
          {type ? <p>Tipo: {type}</p> :"" }
          <p>Gênero: {gender}</p>
        </div>
      </section>
    </div>
  );
}
