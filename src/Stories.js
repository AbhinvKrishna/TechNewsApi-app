import React from 'react'
import { useGlobalContext } from './Context'



function Stories() {

  const { hits, isLoading } = useGlobalContext()

  if (isLoading) {
    return (
      <>
        <h1>Loading....</h1>
      </>
    )
  }

  return (
    <div>
      <h2>My Tech News Post</h2>
      {hits.map((element) => {


        const deleteditem = () => {
          const info = document.getElementById(element.objectID)
          return info.remove()
        }

        return (

          <div id={element.objectID} key={element.url} style={{ width: "600px" }}>
            <h2 >{element.title}</h2>
            <div className="section" style={{ display: "flex" }}>
              <p>By: {element.author} | </p>
              <p>Total Comments: {element.num_comments}</p>
            </div>
            <div className="btns" style={{ display: "flex", justifyContent: "space-between" }}>
              <a href={element.url} target="_blank" rel="noreferrer"><button style={{ background: " rgb(170, 255, 255)",cursor:"pointer" }}>Read More..</button></a>
              <button style={{ background: " red",cursor:"pointer" }} onClick={deleteditem}>Remove</button>
            </div>
          </div>
        )
      })}

    </div>
  )
}

export default Stories
