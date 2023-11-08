import { useEffect, useState } from "react";

function UseEffect(){
    const [counter,setCounter] = useState(0);
    function incrementsetcounter(){
        setCounter((prevValue)=> prevValue + 2)
    }

    useEffect(()=>{
        console.log("hii from use effect hook")
    })


    return (
        <div>
            <h1>Counter : {counter}</h1>
            <button onClick={incrementsetcounter}>+</button>
        </div>
    )
}
export default UseEffect;
