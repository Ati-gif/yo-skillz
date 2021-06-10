import React from 'react'
import { Link } from 'react-router-dom'
import useAxiosOnMount from '../customHooks/useAxiosOnMount'

const Skill = ({name, id})=>{
    
    const {data, loading, error} = useAxiosOnMount(`/api/skills/${id}`)
    
    return (
        <Link to={`/skills/${id}`}>
            <h1>{name}</h1>
        </Link>
    )
}

export default Skill