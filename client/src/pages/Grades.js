import React from 'react'
import ErrorMessage from '../components/ErrorMessage'
import Spinner from '../components/Spinner'
import List from '../components/List'
import useAxiosOnMount from '../customHooks/useAxiosOnMount'

const Grades = ()=>{
    // about the useState hook
    const {data,loading,error} = useAxiosOnMount('/api/grades')
    // const {data,loading,error} = useAxiosOnMount('https://rasdfeqres.in/api/users?delay=3')

    if(loading) return <Spinner />
    if(error) return <ErrorMessage error={error}/>
    return (
        <div>
            <List 
               renderData={(g)=>{
                   return(
                   <div>
                       <p>{g.userName} got {g.score} on {g.skillName}</p>
                   </div>
                   )
               }}
               data={data} 
               name='Grades'/>
        </div>
    )
}

export default Grades
