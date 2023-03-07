import React from 'react'
import { useGlobalContext } from './Context'

function Search() {


const {query , searchPost}= useGlobalContext()
   
  return (
    <div>
      Searching 
      <form action="">
      <input type="text" placeholder='search here' value={query} onChange={(e)=>searchPost(e.target.value)} />
      </form>
      
    </div>
  )
}

export default Search
