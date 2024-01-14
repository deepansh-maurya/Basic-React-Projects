import React, { useState } from 'react'
export const Question = (props) => {
  let q = props.question
  console.log(q, "question");
  let [p1,setp1] = useState(0)
  let [p2,setp2] =useState(0)
  let [p3,setp3] =useState(0)
  let [p4,setp4] =useState(0)
  let [p5, setp5] = useState(0)
  
  let [enable,setenable] = useState(1)

  return (
    <div className='flex flex-col bg-slate-200 gap-4 flex-wrap w-[50%] mx-auto my-auto '>
      <div onClick={() => { enable ? setenable(0) : setenable(1) }}  className='bg-slate-400 mb-4 text-center text-lg'>Enable Mulit Section</div>
      <div className='bg-slate-400'>
        <p onClick={() => {
          if (p1) setp1(0)
          else setp1(1)
          
          if (enable) {
          setp2(0)
          setp3(0)
          setp4(0)
          setp5(0)
          }
          
        }} >Q1. {q[0].q}</p>
        {
          p1 ?   <h6>A1.{q[0].a }</h6>  : <h6></h6>
        }
      </div>
      <div className='bg-slate-400'>
        <p onClick={() => {
          if (p2) setp2(0)
          else setp2(1)
          
          if (enable) {
          setp1(0)
          setp3(0)
          setp4(0)
          setp5(0)
          }
        }}>Q2. { q[1].q }</p>
        {
          p2 ?   <h6>A2.{q[1].a }</h6>  : <h6></h6>
        }
      </div>
      <div className='bg-slate-400'>
        <p onClick={() => {
          if (p3) setp3(0)
          else setp3(1)
          
          if (enable) {
          setp2(0)
          setp1(0)
          setp4(0)
          setp5(0)
          }
        }}>Q3. { q[2].q }</p>
         {
          p3 ?   <h6>A3.{q[2].a }</h6>  : <h6></h6>
        }
      </div>
      <div className='bg-slate-400'>
       <p onClick={() => {
          if (p4) setp4(0)
          else setp4(1)
          
         if (enable) {
          setp2(0)
          setp3(0)
          setp1(0)
          setp5(0)
          }
        }}>Q4. { q[3].q }</p>
        {
          p4 ?   <h6>A4.{q[3].a }</h6>  : <h6></h6>
        }
      </div>
      <div className='bg-slate-400'>
        <p onClick={() => {
          if (p5) setp5(0)
          else setp5(1)
          
          if (enable) {
          setp2(0)
          setp3(0)
          setp4(0)
          setp1(0)
          }
        }}>Q5. { q[4].q }</p>
         {
          p5 ?   <h6>A5.{q[4].a }</h6>  : <h6></h6>
        }
      </div>
    </div>
  )
}
