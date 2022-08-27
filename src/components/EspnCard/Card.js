import React from 'react'
import './Card.css'
import Teams from './Teams';
function Card({matchSchedule , date , seriesMatch , region , teams : {teamOne , teamTwo} }) {
    const [hour , minute , second] = date.toLocaleTimeString("en-US").split(/:| /);
    // const data = React.createElement('h1' , {} , date.toLocaleTimeString())
  return (
    <div className='card-container'>
        <h5> 
            <span className='details weight'>{matchSchedule}</span>
            <span className='details'>{hour}:{minute}</span>
            <span className='details'>{seriesMatch}</span>
            <span className='details'>{region}</span>
        </h5>
        <Teams team={teamOne}/>
        <Teams team={teamTwo}/>
        <h6 className='details'>Match Start in 2 hrs 5 mins</h6>
        <hr />
        <h5>Schedule   Videos</h5>
    </div>
  )
}

export default Card
