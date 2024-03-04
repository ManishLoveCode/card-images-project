import React, { useState } from 'react'
// import Api from './components/Api'
import Api from './Api'

function Card() {
    // const [data, setData] = useState([])
    // Api.map((item) => {
    // })

  return (
    <div>
    <div className='rounded-xl mx-auto p-4 border-2 bg-cyan shadow-lg shadow-cyan-500/50 sm:max-w-56 w-full'>
      <img className='rounded w-62' src="https://images.pexels.com/photos/127428/pexels-photo-127428.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
    <h2 className='text-pink-600 font-bold mt-2'>Natural image</h2>
    <p>This is a awsome image so hit the download image button and download</p>
    <button className='bg-blue-400 p-2 rounded-xl text-white font-semibold mt-4 mx-auto grid'>Download image</button>
    </div>
    </div>
  )
}

export default Card
