import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numbersAllowed, setNumbersAllowed] = useState(false)
  const [charactersAllowed, setCharactersAllowed] = useState(false)
  const [password, setPassword] = useState('')

  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = ()=>{
    let pass = ''
    let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(numbersAllowed) str += '0123456789'
    if(charactersAllowed) str += '[]!@$%*=_{}~^()-+.,/?'
    for(let i=0; i<length; i++)  {
      const rand = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(rand)
    }
    setPassword(pass)
  }

  useEffect(()=> {
    passwordGenerator()
  },
  [length,numbersAllowed,charactersAllowed])

  const copyPasswordToClipboard = () => {
    passwordRef.current?.select() // to select the copied password
    passwordRef.current?.setSelectionRange(0, 3) // selection is shown for 3 characters even though all characters are copied
    window.navigator.clipboard.writeText(password)
  }

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 text-center p-5'>
      <h1 className='text-white text-center mb-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type='text' value={password} className='outline-none py-1 px-3 w-full bg-white'
        placeholder='password'
        readOnly
        ref={passwordRef}
        ></input>
        <button type="button" 
        class="text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5  dark:bg-blue-800 dark:hover:bg-blue-700 dark:focus:ring-blue-700 dark:border-blue-700"
        onClick={copyPasswordToClipboard}
        >
        Copy
        </button>
      </div>
      <div className='flex gap-x-2 text-sm'>
        <div className='flex items-center gap-x-1'>
          <input type='range'
          min={8}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => setLength(e.target.value)}
          >
          </input>
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked={numbersAllowed}
          onChange={(e) => setNumbersAllowed(!numbersAllowed)}
          >
          </input>
          <label>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked={numbersAllowed}
          onChange={(e) => setCharactersAllowed(!charactersAllowed)}
          >
          </input>
          <label>Characters</label>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
