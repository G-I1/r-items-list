import React from 'react'

function Footer({lenght}) {
  const today = new Date(); 
  return (
    <>
    <p>List of {lenght} {lenght===1?'item':'items'} </p>
    <footer>Copyright &copy; {today.getFullYear()} </footer>
    </>
  )
}

export default Footer