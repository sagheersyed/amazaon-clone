import React, { useState } from 'react'
import './Teams.css'
import Flag from 'react-world-flags'

import teamsApi from '../../apis/MyApis';

const Teams = ({team}) => {
    // finding specific country flag by country name.
    const [{countryCode} , setCountryApi] = useState(
        teamsApi.find((teams)=> {
            return teams.country === team 
     })
    );
  return (
    <div className='container-flexing'>
        <Flag className='country-flag' code={countryCode} height={15}/>
        <h5>{team.toUpperCase()}</h5>
    </div>
  )
}

export default Teams
