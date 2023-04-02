import banner from "../images/banner.jpg";
import rick from "../images/rick.jpg";
import evil from "../images/evil.jpg";
import meme from "../images/meme.jpg";

export function Home() {
  return (
    <div className="grid grid-cols-2 bg-[#cbd5e1] h-full px-32 items-center py-4
     justify-between relative  ">
      <div className="flex flex-col gap-6">
        <img className="rounded-lg" src={banner} alt="" />
        <h3>
          <p>
            "Rick and Morty" é uma série de animação adulta criada por Justin
            Roiland e Dan Harmon. A história segue as aventuras
            interdimensionais de Rick Sanchez, um cientista excêntrico e
            alcoólatra, e seu neto Morty Smith, um adolescente inseguro e
            ingênuo. Juntos, eles viajam para outras dimensões, planetas e
            universos, encontrando criaturas estranhas, alienígenas, robôs e
            outros seres bizarros.
          </p>
          <br />A série combina elementos de ficção científica com humor ácido e
          satírico, além de explorar temas filosóficos e existenciais, como
          livre-arbítrio, identidade, moralidade e realidade. "Rick and Morty" é
          conhecida por sua criatividade, irreverência e originalidade, e tem
          uma legião de fãs ao redor do mundo.
        </h3>
      </div>
      <div className="flex flex-col gap-6 px-16 items-center pt-16">
        <br></br>
        <p>
          Uma curiosidade interessante sobre a série "Rick and Morty" é que ela
          foi originalmente concebida como uma paródia de "De Volta para o
          Futuro", com Marty McFly como um adolescente que viaja no tempo com
          seu avô, Doc Brown. No entanto, depois que a Universal Studios ameaçou
          processar a equipe de produção por violação de direitos autorais, a
          ideia original foi transformada em uma história original com
          personagens novos e únicos, o que resultou em "Rick and Morty". Ainda
          assim, alguns elementos da série original ainda permanecem, como o
          nome de Morty, que é uma referência a Marty.
        </p>
        <img className=" w-[40%] items-center  " src={rick} alt="" />
      </div>
      <div className="flex flex-col gap-4 py-24 "> 
      <p>
      Uma curiosidade sobre a dublagem de "Rick and Morty" é que o co-criador da série,
      Justin Roiland, é o dublador original de ambos os personagens principais, Rick e Morty.
      Roiland improvisa muitas das falas dos personagens durante as gravações, o que dá um tom único e
      autêntico à série.
     </p>
     <img className="w-[65%]" src={evil} alt="" />
     Evil morty
      </div>
    <div className="flex flex-col gap- py-24">
    <img className="w-[75%] pl-24 mt-72" src={meme} alt="" />
    <p className="flex flex-row items-center justify-center" >por favor não levem o meme a sério</p>
    </div>
    
    </div>
  );
}
