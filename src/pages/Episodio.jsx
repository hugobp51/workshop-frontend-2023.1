import { useState, useEffect } from 'react'
import { CardEp } from '../Components/CardEp'
import { Loading } from '../Components/Loading'
import { MagnifyingGlass } from 'phosphor-react';
import dedo from '../images/dedo.jpg'



export function Episodio(){
    const [episodio, setEpisodio] = useState ([])
    const [loading, setLoading] = useState (true);
    const [input, setInput] = useState("");
    
    async function GetEps(){
      
        const data = await fetch(`https://rickandmortyapi.com/api/episode/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28`)
        .then((response)=> response.json())
        .finally(() => setLoading(false))

        setEpisodio(data) 
        
      
      
      

    }

    useEffect(()=>{
        GetEps();
    },[])

    if (loading) return <Loading/>
    const filteredEpisodesLength = episodio?.filter((filteredItem)=>filteredItem.name.
    toLowerCase().includes(input.toLowerCase())).length


    return(
        <>
        <div className='flex flex-col justify-center items-center py-12'>

        <div className="flex w-[80%] border bg-[#CACFD2] rounded-full items-center">
            <span className="flex pl-4">
              <MagnifyingGlass
                size={25}
                weight="bold"
                className="text text-black"
              />
            </span>

            <input
              type="text"
              value={input}
              onChange ={(Event) => setInput(Event.target.value)}
              placeholder="insira um episódio"
              className="flex flex-1 py-3 px-16 bg-[#CACFD2] rounded-full text-black placeholder:text-black 
              focus:outline-none items-center justify-center text-center"
            />
          </div>

        <div  >
        {filteredEpisodesLength == 0 ? (
          <div className='flex flex-col flex-1 items-center justify-center gap-6 py-12 text-white'>
            <h1>Digite um nome de episódio válido</h1>
          <img className='w-[580px]' src={dedo} alt="morty estirando dedo" />
          </div>
        ) : (
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 pt-12 gap-6 mx-16'>
            {episodio?.filter((filteredItem) => filteredItem.name.toLowerCase().includes
            (input.toLowerCase())).map((item) => (
              <CardEp
                key={item.id}
                id={item.id}
                name={item.name}
                air_date={item.air_date}
                episode={item.episode}
              />
            ))}
          </div>
        )}
        
        </div>
      </div>
        </>
    )
}