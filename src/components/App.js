import react from "react"
import {useEffect, useState} from "react"
function App (){
    const[randomDog, setRandomDog]=useState([])
        const[loadDog, setLoadDog]=useState(false)

        useEffect(()=>{
            fetch("https://dog.ceo/api/breeds/image/random")
            .then((res)=> res.json())
            .then(data=>{
                setRandomDog(data)
                setLoadDog(true)
            })
        },[])
   if(!loadDog){return <p>Loading...</p>}
    return(
<img src={randomDog.message} alt="A Random Dog" />
    )
}
export default App