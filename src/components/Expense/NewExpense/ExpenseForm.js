import React from 'react'
import { useState } from 'react'
import './NewExpense.css'

const ExpenseForm = () => {
    // const [title , setInputTitle] = useState('');
    // const [amount , setInputAmount] = useState('');
    // const [date , setInputDate] = useState('');
  const [userInputs , setUserInputs] = useState({
    title : '' , 
    amount : '',
    date : ''
  })

  // userInputs.date.toLocaleDateString()

  const titleChangeHandler = (event) => {
    // setInputTitle(()=> event.target.value)
    setUserInputs((previousState) => {
      return {...previousState , title : event.target.value } 
    })
    }

  const amountChangeHandler = (event) => {
    // setInputAmount(()=> event.target.value)
    setUserInputs((previousState)=> {
      return { ...previousState , amount : event.target.value}
    })
  }
  const dateChangeHandler = (event) => {
    // setInputDate(()=> event.target.value)
    setUserInputs((previousState)=> {
      return { ...previousState , date : new Date(event.target.value)}
    })
  }
  const {title , amount , date} = userInputs;
  console.log(title , amount , date)
  const submitHandler = (e) => {
      e.preventDefault();
      const expenseFormData = {
        title : userInputs.title ,
        amount : userInputs.amount ,
        date : userInputs.date.toLocaleDateString() 
      }
      console.log(expenseFormData)
  }
  return (
    <form onSubmit={submitHandler}>
        <div className='expense-form-container'>
          <div className='input'>
            <label>Title</label><br/>
            <input placeholder='type title' type={'text'} title='Expense Title' onChange={titleChangeHandler}/>
          </div>
          <div className='input'>
            <label>Amount</label><br/>
            <input placeholder='0.0' type={'number'} title='amount' min='0.1' step='0.1' onChange={amountChangeHandler}/>
          </div>
          </div>
          <div className='expense-form-container'>
            <div className='input'>
              <label>Date</label><br/>
              <input type={'date'} min='2010-01-01' max='2021-01-01' onChange={dateChangeHandler}/>
            </div>
          </div>
          <div className='button-container'>
            <button className='button' type={'submit'}>Submit</button>
          </div>
    </form>
  )
}

export default ExpenseForm
