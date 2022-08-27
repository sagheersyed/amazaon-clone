import React from 'react'
import './expenseItem.css'
function ExpenseDate({date}) {
    const month = date.toLocaleString('en-US' , {month : 'long'})
    const day = date.toLocaleString('en-US' , {day : '2-digit'})
    const year = date.getFullYear();
    // console.log(date.toLocaleString())
  return (
    <div className='expense-date'>
            <h1 style={{color : 'white' , fontSize : 19 , width : 100 , textAlign : 'center'}}>{month}</h1>
            <h1 style={{color : 'white' , fontSize : 17 , width : 100 , textAlign : 'center'}}>{year}</h1>
            <h1 style={{color : 'white' , fontSize : 15 , width : 100 , textAlign : 'center'}}>{day}</h1>
    </div>
  )
}

export default ExpenseDate
