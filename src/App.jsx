import { useState, useEffect } from 'react'
import { Loading } from './Components/Loading'
import {Alien, InstagramLogo, GithubLogo} from "phosphor-react"
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Galeria } from './pages/Galeria';
import { Episodio } from './pages/Episodio';
import { PageEpisodio } from './pages/PageEpisodio';
import Logo from './images/Logo.png'



 function App() {
  const [loading, setLoading] = useState (true);
  


  useEffect(() => {             //useEffect só abre uma unica vez, no começo da aplicação 
    setTimeout(() => {
      setLoading(false);
    },500)
  },[])

  if (loading) return <Loading/>

  return (
    <>
    <BrowserRouter>
      <header className='flex flex-col w-full h-[25%] bg-[#242424] relative items-start px-6 py-4 
      drop-shadow-lg '>

        <div className='flex flex-row text-white font-bold items-center text-3xl justify-between w-full'>
        <Link to={'/'} ><img className='w-52' src={Logo} alt=""/></Link>
        <div className='flex flex-row gap-52'>
          <Link to={'/'} >Inicio</Link>
          <Link to={'galeria'}>Galeria</Link>
          <Link to={'episodio'}>Episódios</Link>
        </div>
          <Alien/>
        </div>
      </header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='galeria' element={<Galeria/>}/>
        <Route path='episodio' element={<Episodio/>}/>
        <Route path='episodio/:slug' element={<PageEpisodio/>}/>

      </Routes>
    <footer className='flex w-full h-[20%] bg-[#242424]  px-6 py-4 
      drop-shadow-lg justify-between  text-white relative'>
      <div className='flex flex-col items-start text-white'>
          
        <div className='flex flex-row  text-white '>
          <p>
            <a href="https://www.instagram.com/hugobp51/" target='blank'>
            <InstagramLogo className='text-white w-9 h-9'/> 
            </a>
          </p>
          <p>
              <a href="https://www.instagram.com/hugobp51/" target='blank' >Instagram</a>  
            
          </p>
          <br/>
          </div>

          <div className='flex flex-row  text-white '> 
            <p>
          <a href="https://github.com/hugobp51" target='blank'>
          <GithubLogo className='text-white w-9 h-9'/>
          </a> 
            </p>
            <p>
              <a href="https://www.github.com/hugobp51/"target='blank'>Github</a>  
          </p>
          </div>
      </div>
          <div className='flex flex-row text-white font-bold' >
            <p>Feito por Hugo Porto</p>
          </div>
 
    </footer>

      </BrowserRouter>


    </>
  )
}

export default App
