import React, { useEffect, useState , useMemo, useCallback } from 'react';
import Expense from './components/Expense/Expense';
import './App.css'
import NewExpense from './components/Expense/NewExpense/NewExpense';

function App({children}) {
  // console.log( );
  const memo = useCallback(()=>{
    const originalArray = [[1] , [0]];
    const shallowCopy = JSON.parse(JSON.stringify(originalArray));
    console.log(typeof JSON.stringify(originalArray))
    console.log(typeof shallowCopy)
    const str = 'sagheer';
    console.log(typeof JSON.parse(JSON.stringify(str)))
    shallowCopy[0].push(5);
    console.log(originalArray)
    console.log(shallowCopy) 
  },[])

  
  // useEffect(()=> {
  //   console.log('it will mount everytime when component will be render!')
  // });
  // useEffect(()=> {
  //   console.log('will be mount one time!')
  // },[expenseData])
  // useEffect(()=> {
  //   console.log('will be mount on update of particular state!')
  // },[object])
  // useEffect(()=> {
  //   console.log('counter state changed!')
  // } , [counter])

  const [title , setTitle] = useState()
  const expenseItems = [
    {title : 'Car Insurance' , amount : 300 , date : new Date()},
    {title : 'House Insurance' , amount : 13000 , date : new Date(2019 , 1 , 31)},
    {title : 'Bike Insurance' , amount : 150 , date : new Date(2006 , 1 , 14)}
  ]

  const clickHandler = () => {
    setTitle('syed')
    console.log(title)
  }
  return (
      <div className='app-container'>
      <NewExpense/>
      <h1>{title}</h1>
      <Expense expenseData={expenseItems}/>
      <button  onClickCapture={clickHandler}>Add Data</button>
      </div>
  )
}

export default App;
