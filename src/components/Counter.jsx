import React from 'react'
import { useState } from 'react'
const Counter = () => {
const [count,setCount] = useState(0);
  return (
    <div>
      <div>
        <h1 className='bg-amber-500 text-center'>COUNTER</h1>
        <h2 className='bg-orange-500 text-center text-white '>{count}</h2>
        <div className='items-center justify-center'>
          <button className='bg-green-500 text-center p-2 py-1 px-1 mt-2 rounded' onClick={()=> setCount(count + 1)}>Increment</button>
          <button className='bg-yellow-500 text-center py-1  p-2 px-1 m-2 rounded' onClick={() => setCount(0)}>Reset</button>
          <button className='bg-red-500 text-center m-2 py-1 px-1 rounded' onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
      </div>
    </div>
  )
}

export default Counter
