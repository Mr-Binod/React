import React, { useState, useEffect } from 'react'
import Bodycontent from '../molecules/Bodycontent'
import Title from '../molecules/Title'

import { DataStore } from '../Store/Store'




const contentList = [];
const Board = () => {
    const [count, setCount] = useState(0);
    
    const submitHandler = (e) => {
      e.preventDefault();
      setCount((prev) => prev + 1)
      const inputvalue = e.target[0].value
      contentList.push({count, inputvalue})
      console.log(contentList)
    }
  
  
  return (
    <>
        <Title />
        <DataStore.Provider value={{contentList}}>
            <Bodycontent />
        </DataStore.Provider>
        
        <form onSubmit={submitHandler}>
          <label htmlFor="">Content</label>
          <input type="text" name='' />
          <input type="text" name='inputvalue'/>
          <button>추가</button>
        </form>
    </>
  )
}

export default Board
