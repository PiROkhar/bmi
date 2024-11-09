import './App.css'
import React,{useState} from "react";
function App() {
  const [Weight,setWeight]=useState('');
  const [Height,setHeight]=useState('');
  const [bmi,setBmi]=useState('');
  const [message,setMsg]=useState('');
 
  let calBmi=(e)=>{
    e.preventDefault();
    if( Weight===0 || Height===0){
      alert('Enter valid height and weight')
    }
    else{
      let bmi=(Weight/(Height*Height)*703)
      setBmi(bmi.toFixed(1))

      if(bmi<25){
        setMsg('You are underweight')
      }
      else if(bmi>25 && bmi<30){
        setMsg('You are healthy')
      }
      else{
        setMsg('You are overweight')
      }
      
    }
  }

  let reload=()=>{
    window.location.reload()
  }
  return (
    <>
      <div className='App'>
        <div className='flex items-center justify-center h-screen flex-col '>
          <p className='font-semibold text-[30px]'>BMI calculator</p>
          <form onSubmit={calBmi}>
          <div className='mt-10 space-x-7 '>
            <label className='font-semibold '>Weight (ibs)</label>
            <input className='bg-transparent rounded-md p-1 text-zinc-900 border-2 border-black' text="text" placeholder='Enter Weight' value={Weight} onChange={(e)=> setWeight(e.target.value)}/>
          </div>
          <div className='space-x-[38px]'>
            <label  className='font-semibold '>Height (in)</label>
            <input className='bg-transparent rounded-md p-1 text-zinc-900 border-2 border-black mt-3' text="text" placeholder='Enter Height' value={Height} onChange={(e)=> setHeight(e.target.value)}/>
          </div>
          <div className='space-x-7 mt-6 flex'>
            <button className='btn bg-slate-800 text-white p-1 pl-3 pr-3 rounded-md hover:bg-slate-600' type='submit'>Submit</button>
            <button className='btn bg-slate-950 text-white p-1 pl-3 pr-3 rounded-md hover:bg-slate-600' onClick={reload} type='submit'>Reload</button>
          </div>
          <div className='center flex-col flex mt-6 font-bold'>
            <h3>Your BMI is : {bmi}</h3>
            <p>{message}</p>
          </div>
          </form>

        </div>
      </div>
    </>
  )
}

export default App
