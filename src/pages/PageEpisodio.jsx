import { useState, useEffect } from 'react'
import { Loading } from '../Components/Loading'
import { useParams } from 'react-router-dom';
import { CardGaleria } from '../Components/Card';
import display from "../images/display.jpg";



export function PageEpisodio(){
    const { slug } = useParams()
    const [episodio, setEpisodio] = useState ({})
    const [loading, setLoading] = useState (true);
    const [character, setCharacter] = useState([])

    const charactersLink = episodio?.characters?.map((item)=>item.replace(/\D/g,''));

    async function fetchCharacters(){
        const data = await fetch(`https://rickandmortyapi.com/api/character/${charactersLink}`).then((response)=>
         response.json()).finally(() => setLoading(false))

        setCharacter(data)

    }

    async function GetEps(){
        const data = await fetch(`https://rickandmortyapi.com/api/episode/${slug}`).then((response)=>
         response.json()).finally(() => setLoading(false))

        setEpisodio(data)

    }

    useEffect(()=>{
        GetEps();
    },[])

    
    useEffect(()=>{
        if (charactersLink){
            fetchCharacters();
        }
    }, [episodio])
    console.log(character)
    
    if (!episodio) return <Loading/>
   
    return(
    <>
    <div className='flex flex-col justify-center w-full h-screen overflow-y-scroll bg-[#000]
    rounded-md shadow-2x1 drop-shadow-md text-white items-center' >
        <img className='w-[640px]' src={display} alt="" />
        <h2 className='pt-12' >
        <p>
        {episodio.name} 
        </p>
        <p>
         {episodio.air_date}
        </p>
        <p>
         {episodio.episode}
        </p>
        </h2>
    </div>
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 pt-12 gap-3 mx-16  '>
      
    {character.map(item => (
      <CardGaleria 
      key={item.name} 
      gender={item.gender} 
      name={item.name} 
      image={item.image} 
      status={item.status}
      type={item.type} 
      species={item.species}/>
      
    ))}
    </div>
        </>

   )
    
}