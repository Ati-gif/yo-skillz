import React from 'react'
import ErrorMessage from '../components/ErrorMessage'
import Spinner from '../components/Spinner'
import List from '../components/List'
import useAxiosOnMount from '../customHooks/useAxiosOnMount'

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
                   <div>
                       <h1>{user.name}</h1>
                   </div>
                   )
               }}
               data={data} 
               name='Users'/>
        </div>
    )
}

export default Users

