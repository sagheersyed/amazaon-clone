import React from 'react'
import '../Expense/expenseItem.css'
function Card({children , className}) {
    const classes = className;
  return (
    <>
    <div className={classes}>
        {children}
    </div>
    </>
  )
}

export default Card
