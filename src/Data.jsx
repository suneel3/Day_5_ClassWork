import React from 'react'

function Data({name,hour,handleClickBtn,id}) {
  return (
    <> 
     <div className="data-container" id={id}>
         <p>{name +" - " + hour} hours </p>
         <button className='plus'  onClick={()=>{handleClickBtn(true,id)}}>+</button>
         <button className='minus' onClick={()=>{handleClickBtn(false,id)}}>-</button>
     </div>
    </>
  )
}

export default Data