import React from 'react'
import ErrorMessage from '../components/ErrorMessage'
import Spinner from '../components/Spinner'
import List from '../components/List'
import useAxiosOnMount from '../customHooks/useAxiosOnMount'
import Skill from './Skill'

const Skills = ()=>{
    // about the useState hook
    const {data,loading,error} = useAxiosOnMount('/api/skills')
    // const {data,loading,error} = useAxiosOnMount('https://rasdfeqres.in/api/users?delay=3')

    if(loading) return <Spinner />
    if(error) return <ErrorMessage error={error}/>
    return (
        <div>
            <List 
               renderData={(skill) => <Skill {...skill}/>}
               data={data} 
               name='Skills'/>
        </div>
    )
}

export default Skills
