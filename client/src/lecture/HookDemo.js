import axios from 'axios'
import React, {useState, useEffect} from 'react'



const HookDemo = (props) => {
    const [count, setCount] = useState(0)
    const [people, setPeople] = useState([])
    const [count1, setCount1] = useState(0)

    useEffect(()=>{
      console.log('useEffect getPeople')
       getPeople()

       // componentWillUnmount
       return () => {
         // remove eventlistener, timers, animations
         // real life example
         // polling, clear a setInterval
         console.log('unmounted')
       }
    },[])

    useEffect(()=>{
        console.log('useEffect setCount')
        if(count >10){
            setCount(0)
        }
    },[count])

    const getPeople = async () => {
        console.log('getting people')
        try{
           let res = await axios.get('https://reqres.in/api/users')
           setPeople(res.data.data)
         
        } catch (err){
           console.log(err)
           alert(err)
        }
    }
    
    return (
        <div>
            <h1>HookDemo</h1>
            <p>people count: {people.length}</p>
            <p onClick={() => setCount(count + 1)}>click to inc count: {count}</p>
            <p onClick={() => setCount1(count1 + 1)}>click to inc count1: {count1}</p>
        </div>
    )
}

export default HookDemo
