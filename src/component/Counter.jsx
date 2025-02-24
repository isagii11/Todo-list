import { useState } from 'react'

const Counter = () => {

    // let count =0;

    let [count,setcount]=useState(0)

    
    let [sample,setSample] =useState(()=>{return returnState()})
    
    function returnState(){
        console.log(100);
        
        return 100
    }
    
    function hincrease(){
        // count +=1
         setcount((prevcount)=>prevcount +1)
        // console.log(count);
        
    }

    function hdecrease(){
        // count -=1
        setcount((prevcount)=>prevcount -1)
        // console.log(count);
        
    }

  return (
    <div>
        <h1>Counter Application-{count}-{sample}</h1>
        <button onClick={hincrease}>Increase</button>
        <button onClick={hdecrease}>Decrease</button>
    </div>
  )
}

export default Counter