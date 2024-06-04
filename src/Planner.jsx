import React, { useEffect, useState } from 'react'
import Data from "./Data"

function Planner() {
  const [name,setName] = useState('');
  const [hour,setHour] = useState(0);

  const [data,setData] =useState([]);

  function handleClick(e){
    e.preventDefault();

    let copyData = [...data];
    copyData.push({
      subject:name,
      hour: parseInt(hour)
    })

    setData(copyData);
    setName("");
    setHour(0);


  }


  function handleClickBtn(check,id){

    let copyData = [...data];
     if(check === true){
      copyData[id]["hour"] +=1
     }else{
      let hourData = copyData[id]["hour"];
      if(hourData > 0){
        copyData[id]["hour"] -=1;
      }
      
     }
     
     setData(copyData)
  }
 
  // for storing in local storage 
  useEffect(()=>{
    if(data.length > 0){
      localStorage.setItem("data",JSON.stringify(data));
    }
  },[data])

  // for getting from local storage
  useEffect(()=>{
   if(localStorage.getItem("data")){
     let copyData = JSON.parse(localStorage.getItem("data"));
     setData(copyData);
   }
  },[])


  return (
   <>
    <div className="planner-container">
        <h2>Geekster Education Planner</h2>
        <form onSubmit={(e)=>{handleClick(e)}} className="input-box">
        <input
          required
          onChange={(e) => setName(e.currentTarget.value)}
          type="text"
          placeholder="Subject"
          className='name'
        />
        <br />
        <input
          required
          onChange={(e) => setHour(e.currentTarget.value)}
          type="number"
          placeholder="Hour"
          className='num'
          min={0}
          max={24}
        />
        <br />
        <input type="submit" value="Add" className='btn'/>
      </form>

        <div className="result-container">
          {data.map((dt,index)=>{
            return <Data key={index} name={dt.subject} hour={dt.hour} handleClickBtn={handleClickBtn} id={index}/>
          })} 
        </div>
    </div>
   </>
  )
}

export default Planner