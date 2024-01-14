import { useState } from 'react'
import './App.css'
import { Question } from './Question'
import { Data } from './Data'
function App() {
  let qna = Data
  console.log(qna,"app");
  return (
    <div className='w-[100vw] h-[100vh] bg-slate-200 flex flex-col '>
     <Question question={qna} ></Question>
    </div>
  )
}

export default App
