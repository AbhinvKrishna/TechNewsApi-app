import React from 'react'
import { useGlobalContext } from './Context'

function Pagination() {


  const {nextPage,prevPage , nbPages, page} = useGlobalContext();

  return (
    <>
    <div style={{width:"500px", display:"flex", justifyContent:"space-between",marginLeft:"500px", marginTop:"30px"}}>
      <button disabled={page===0} style={{background:"black", color:"white", cursor:"pointer", height:"30px",border: "3px solid orange",borderRadius:"10px",}} onClick={()=> prevPage()}>&larr; Previous</button>
      <button disabled={page===nbPages-1}  style={{background:"black", color:"white", cursor:"pointer",height:"30px",border: "3px solid orange",borderRadius:"10px"}}onClick={()=> nextPage()} >Next &rarr;</button>
    </div>
     <p className='pagedesc'>{page}|{nbPages}</p>
     </>
  )
}

export default Pagination
