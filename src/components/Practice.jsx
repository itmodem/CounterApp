import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>
        <h1 className='bg-orange-400 text-center text-white font-semibold text-3xl'>COUNTER</h1>
        <h2 className='text-4xl bg-green-500 text-center'>{count}</h2>
        <div className='bg-yellow-700 text-center'>
          <button className=' text-7xl bg-red-700 text-center fond-semibold items-center mt-1 m-2 rounded'  onClick={() => setCount(count - 1)}>-</button>
          <button className=' text-7xl bg-green-500 text-center fond-semibold items-center mt-1 m-2 rounded-sm' onClick={() => setCount(0)}>0</button>
          <button className='text-7xl bg-cyan-500 text-center fond-semibold items-center mt-1 m-2 rounded-sm' onClick={() => setCount(count + 1)}>+</button>
        </div>
      </div>
    </div>
  )
}

export default Counter
