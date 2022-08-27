import React from 'react'
import ExpenseDate from './ExpenseDate';
import './expenseItem.css'

function ExpenseItem({title , amount , date}) {
  return (
    <div className='expense-container'>
        <div className='expense-block'>
            <ExpenseDate date={date}/>
            <h1 className='expense-title f-family'>{title}</h1>
        </div>
        <div className='amount-block'>
            <h1 className='expense-amount'>${amount}</h1>
        </div> 
    </div>
  )
}

export default ExpenseItem;