import { useEffect,useState } from "react";
import { Loading } from "../Components/Loading";
import { CardGaleria } from '../Components/Card'
import { MagnifyingGlass } from "phosphor-react";
import Logo from '../images/Logo.png'
import dedo from '../images/dedo.jpg'



 export function Galeria() {
  const [Character, setCharacter] = useState([]);
  const [loading, setLoading] = useState (true);
  const [input, setInput] = useState("");

  async function fetchData() {
    const data = await fetch(
      `https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36`)
      .then((response) => response.json())
    .finally(() => setLoading(false))

    setCharacter(data)
  }

  useEffect(() => {
    fetchData();
  }, []);


  if (loading) return <Loading/>
  const filteredCharacterLength = Character?.filter((filteredItem)=>filteredItem.name.toLowerCase().
  includes(input.toLowerCase())).length

  return (
    <>
   <div className="flex flex-col justify-center items-center py-12" >
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
              placeholder="insira um personagem"
              className="flex flex-1 py-3 px-16 bg-[#CACFD2] rounded-full text-black placeholder:text-black 
              focus:outline-none items-center justify-center text-center"
              />
        </div>
        <div  >
        {filteredCharacterLength == 0 ? (
          <div className='flex flex-col flex-1 items-center justify-center gap-6 py-12 text-white'>
            <h1>Digite um nome de personagem válido</h1>
          <img className='w-[580px]' src={dedo} alt="morty estirando dedo" />
          </div>
        ) : (
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 pt-12 gap-6 mx-16'>
            {Character?.filter((filteredItem) => filteredItem.name.toLowerCase().includes
            (input.toLowerCase())).map((item) => (
              <CardGaleria
              key={item.name} 
              gender={item.gender} 
              name={item.name} 
              image={item.image} 
              status={item.status}
              type={item.type} 
              species={item.species}
              />
            ))}
          </div>
        )}
        
        </div>
              
      </div>
    </>
  )
}


