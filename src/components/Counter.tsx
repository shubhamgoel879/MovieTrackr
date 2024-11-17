import { useEffect, useState } from "react";

const Counter=():JSX.Element=>{
    const [count, setCount] = useState(0);

    useEffect(()=> {
        console.log('Hello')
      }, [])

    return <>
        <h1> Counter = {count}</h1>
        <button onClick={() => setCount(count+1)}>Increment</button>
        <button onClick={() => setCount(count-1)}>Decrement</button>
    </>;
} 

export default Counter