import React from 'react'
import Card from './components/EspnCard/Card'
import espnData from '../src/apis/matchesSchedules'
import './AppCard.css'
const AppCard = () => {
  
  console.log(espnData)
  // const {id , regionCountryCity}
  return (
    <div className='container'>
        {
          espnData.map((data)=> {
           return  <Card 
           seriesMatch={data.seriesMatch} 
           region={data.regionCountryCity}
           matchType={data.matchType}
           overs={data.overs}
           target={data.target}
           date={data.date}
           matchNo={data.matchNo}
           matchSchedule={data.matchSchedule}
           teams={data.teams}
           key={data.id}
           />
          })
        }
    </div>
  )
}

export default AppCard;
