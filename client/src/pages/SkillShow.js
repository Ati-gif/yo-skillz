import React from 'react'
import { useParams } from 'react-router-dom'
import { Card } from 'semantic-ui-react'
import ErrorMessage from '../components/ErrorMessage'
import List from '../components/List'
import Spinner from '../components/Spinner'
import StringifyJSON from '../components/StringifyJSON'
import useAxiosOnMount from '../customHooks/useAxiosOnMount'


const SkillShow = ()=>{
    const {id} = useParams()
    const {data, loading, error} = useAxiosOnMount(`/api/skills/${id}`)

    if(loading) return <Spinner />
    if(error) return <ErrorMessage error={error}/>

    console.log(data)
    return (
        <div>
            <List 
            data = {data.scores}
            name={`Scores for ${data.skill.name}`}
            renderData ={(userScore) => (
                <Card>
                <Card.Content>
                  <Card.Header>{userScore.user}</Card.Header>
                  <Card.Meta>{userScore.score}</Card.Meta>
                </Card.Content>
              </Card>
            )}
            />
        </div>
    )
}

export default SkillShow
