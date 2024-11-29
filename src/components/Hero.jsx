import gitLight from "../assets/github-light.svg"
import gitDark from "../assets/github-dark.svg"
import sun from "../assets/sun.svg"
import moon from "../assets/moon.svg"

const Hero = ({dark, toggleDark}) => {
    
     
  return (
    <div className={`${dark && "dark"}  transition-all delay-1000 duration-1000 ease-in-out transform`}>
      <div className="space-y-16 py-16 bg-white dark:bg-zinc-900 md:flex  md:justify-center md:items-center md:gap-52">
        <div className="relative flex justify-center items-start order-1 md:order-2"> 
        <img src="/harris.png" alt="" className="w-96"/>
        <img src={dark ? moon :sun} alt="" className="absolute left-[90%] md:left-full -translate-x-1/2" onClick={toggleDark} />
        </div>
        <div className="flex flex-col  items-center gap-5 gap-y-7 order-2 md:order-1">
            <h1 className="font-extrabold  text-5xl font-rubik text-gray-900 dark-text text-center uppercase tracking-wide">Harris <br />Johnsen</h1>

            <p className="text-2xl font-semibold font-robotoMono dark-text uppercase" >Frontend Developer</p>

            <div className="flex justify-center gap-10 ">
              <img src={dark ? gitDark : gitLight} alt="" className="h-12"/>
              <img src={dark ? gitDark : gitLight} alt=""  className="h-12"/>
              <img src={dark ? gitDark : gitLight} alt=""  className="h-12"/>
            </div>

            <p className="w-[24ch] text-center dark-text font-robotoMono font-light text-2xl">With a passion for developing modern React web apps for commercial businesses.</p>

            <button  className="bg-blue-600 text-white  shadow-inner shadow-white/80 text-2xl font-normal font-rubik px-6 py-3 rounded-2xl hover:scale-105 transition-all ease-in-out">Resume</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
