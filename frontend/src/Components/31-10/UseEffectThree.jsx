import { useEffect ,useState } from "react";


function UseEffectThree (){
    const [counter ,setCounter]= useState(0)

    function incrementCounter(){
        setCounter((prevValue)=> prevValue + 1)
    }

    useEffect(()=>{
        console.log("hii from type 3")
    },[counter])    
    return(
        <div>
            <h1>counter : {counter}</h1>
            <button onClick={incrementCounter}>+</button>
        </div>
    )
}
export default UseEffectThree;
