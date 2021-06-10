import React from 'react'
import ErrorMessage from '../components/ErrorMessage'
import Spinner from '../components/Spinner'
import List from '../components/List'
import useAxiosOnMount from '../customHooks/useAxiosOnMount'
import { Link } from 'react-router-dom'

const Users = ()=>{
    // about the useState hook
    const {data,loading,error} = useAxiosOnMount('/api/users')
    // const {data,loading,error} = useAxiosOnMount('https://rasdfeqres.in/api/users?delay=3')

    if(loading) return <Spinner />
    if(error) return <ErrorMessage error={error}/>
    return (
        <div>
            <List 
               renderData={(user)=>{
                   return(
                   <Link to={`/users/${user.id}`}>
                       <h1>{user.name}</h1>
                   </Link>
                   )
               }}
               data={data} 
               name='Users'/>
        </div>
    )
}

export default Users

