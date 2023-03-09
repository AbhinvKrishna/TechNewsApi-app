import React from 'react'
import './Pagination.css'
import { useGlobalContext } from './Context'

function Pagination() {


  const {nextPage,prevPage , nbPages, page} = useGlobalContext();

  return (
    <>
    <div style={{width:"100%", display:"flex", justifyContent:"center", marginTop:"30px"}}>
      <button disabled={page===0} style={{background:"black", color:"white", cursor:"pointer", height:"30px",border: "3px solid orange",borderRadius:"10px",}} onClick={()=> prevPage()}>&larr; Previous</button>
      <button disabled={page===nbPages-1} className="nextbtn" style={{background:"black", marginLeft:"250px",color:"white", cursor:"pointer",height:"30px",border: "3px solid orange",borderRadius:"10px"}} onClick={()=> nextPage()} >Next &rarr;</button>
    </div>
     <p className='pagedesc'>{page}|{nbPages}</p>
     </>
  )
}

export default Pagination
