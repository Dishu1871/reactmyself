import { useCallback, useEffect, useState,useRef } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(8)
  const [numbersAllowed, setNumbersAllowed] = useState(false)
  const [symbolsAllowed, setSymbolsAllowed] = useState(false)

  // useRef hook
  const passwordRef = useRef(null)
  const passwordgenerator=useCallback(() => {
    let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if(numbersAllowed) chars += '0123456789'
    if(symbolsAllowed) chars += '!@#$%^&*()-+'
    let password = ''
    for(let i=1; i<length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length+1))
    }
    setPassword(password)
  }, [length, numbersAllowed, symbolsAllowed,setPassword])
  useEffect(()=>{passwordgenerator()},[length,numbersAllowed,symbolsAllowed,passwordgenerator])
  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 10) //this help to select the range upto how much i need to select suppose i generate 50 length password but i need just 10 length password 
    window.navigator.clipboard.writeText(password)
  },[password])
  return (
    <>
      
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        <h1 className=' text-center  text-white my-3 '>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
          <input type="text" 
          value={password} 
          readOnly 
          className='outline-none w-full py-1 px-3' placeholder='password'
          ref={passwordRef}/>
          <button  
          onClick={copyPasswordToClipboard}
          
          className='outline-none bg-blue-700 hover:bg-blue-500 text-white px-3 py-0.5 shrink-0 transition-colors duration-200'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-2'>
            <input type="range" 
            min={8}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)} />
            <label className='' >Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={numbersAllowed}
            id='numberInput'
            onChange={()=>{
              setNumbersAllowed((prev)=>!prev);
            }} 
            />
            <label htmlFor="numberInput">Include Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={symbolsAllowed}
            id='symbolInput'
            onChange={()=>{
              setSymbolsAllowed((prev)=>!prev);
            }} 
            />
            <label htmlFor="symbolInput">Include Symbols</label>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App
