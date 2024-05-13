import React, { useEffect } from 'react';
import Model2 from './Model2';
import Model1 from './Model1';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const localizer = momentLocalizer(moment)

  var lea=[]
  const[data,setData]=useState([])

  const handleData=(e)=>{
    lea.push(e)
    data.push(lea)
    setData(data.flat(1))
    console.log("the val are up: ",data)
  }

  const handleData1=(e0)=>{
    data.push(e0)
    console.log("the 30 are the ",e0.icon)
}

useEffect(()=>{
  
},[data])

  const handleColor=(data)=>{
    
    return{
      style: {
        background: data.style.background,
        color:'black'
        },
        children: (
            <i class='bi bi-pencil' />
        )
      }
  }

  const handleComp = ( data ) => {
    let icon = <i  className={data.icon}></i>
  
    return (
      <div>
        {/* Display icon */}
        {icon}
        {/* Display event title */}
        <strong>{data.title}</strong>
      </div>
    );
  };


  const check=[]
  const[checks,setChecks]=useState([])

  const handleData2=(e1)=>{
      check.push(e1)
       setChecks(check)
       console.log("the style ",e1)

  }
 

  return (

    <>
    <div style={{display:'flex',justifyContent:'space-around'}}>

           <Calendar
            localizer={localizer}
            events={data}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500}}
            eventPropGetter={handleColor}
            eventWrapper={handleComp}
/>
       
      <div style={{display:'flex',flexDirection:'column',gap:2}}>
      <div>
          <Model1 callFunc1={handleData1} callFunc2={handleData2}></Model1>
          <Model2  callFunc={handleData}></Model2>
      </div>
        
        <div style={{display:'flex',flexDirection:'column'}}>
          {
          (checks.length>0)?
                checks[0].map((ele,ind,arr)=>{
                  console.log("the ico ;",arr[ind].icon)
                  return(
                  <Card style={{ width: '30rem' ,border: '1px solid black'}}>
                    <Card.Body><span style={{display:'flex',justifyContent:'center', width: arr[ind].title.length+1+'em',borderRadius:'25px 25px',background:arr[ind].style.background}}>{arr[ind].title}</span></Card.Body>
                    <Card.Footer>{arr[ind].subcheck}</Card.Footer>
                    <i  className={arr[ind].icon}></i>
                  </Card>
                )
                
                }):null
            
              }
          
        </div>
      </div>
      
    </div>
  
    </>
  )
}
export default App;