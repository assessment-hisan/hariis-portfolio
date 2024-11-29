const Card = ({img, main , sub}) =>{
    return(
        <div className="inline-flex flex-col justify-center items-center">
            <img src={img} alt="" className="dark:bg-white bg-zinc-300 rounded-xl "/>
            <h1 className="font-rubik text-2xl font-medium dark-text text-center mt-2 tracking-wider">{main}</h1>
            <p className="font-robotoMono font-normal  dark-text text-center ">{sub}</p>
        </div>
    )
}

const Projects = ({dark}) => {
    const details = [
        {id : 1,
         img : "/pro.png",
         main : "Viberr",
        sub : "Streaming App"
        },
        {id : 2,
            img : "/pro1.png",
            main : "Fresh Burger",
           sub : "Resturant Shop"
           },
           {id : 3,
            img : "/pro2.png",
            main : "Hipsster",
           sub : "Glass Shop"
           },
           {id : 3,
            img : "/pro2.png",
            main : "FitLift",
           sub : "Fitness App"
           }
    
    
    ]
  return (
    <div className={`${dark && "dark"}`}>
      <div className="dark:bg-zinc-900 flex flex-wrap justify-center items-center  gap-10 py-16 md:px-10 px-5">
      {
        details.map((item)=>(
            <Card key={item.id} img={item.img} main={item.main} sub={item.sub} />
        ))
      }
      </div>
    </div>
  )
}

export default Projects
