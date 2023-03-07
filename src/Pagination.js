import React from 'react'
import { useGlobalContext } from './Context'

function Pagination() {


  const {nextPage,prevPage , nbPages, page} = useGlobalContext();

  return (
    <div style={{width:"400px", display:"flex", justifyContent:"space-between"}}>
      <p>{page}|{nbPages}</p>
      <button  style={{background:"black", color:"white", cursor:"pointer"}} onClick={()=> prevPage()}>&larr; Previous</button>
      <button  style={{background:"black", color:"white", cursor:"pointer"}}onClick={()=> nextPage()} >Next &rarr;</button>
    </div>
  )
}

export default Pagination
