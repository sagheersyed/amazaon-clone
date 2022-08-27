import React from 'react'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import './expenseItem.css'

function Expense({expenseData}) {
    // console.log(children)
  return (
    <Card className='main-container'>
        <ExpenseItem title={expenseData[0].title} amount={expenseData[0].amount} date={expenseData[0].date}/>
        <ExpenseItem title={expenseData[1].title} amount={expenseData[1].amount} date={expenseData[1].date}/>
        <ExpenseItem title={expenseData[2].title} amount={expenseData[2].amount} date={expenseData[2].date}/>
    </Card>
  )
}

export default Expense
