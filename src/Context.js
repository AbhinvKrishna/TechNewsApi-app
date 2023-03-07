import React, {useReducer} from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import reducer from './reducer'


//Context creation
//Provider
//Consumer Lengthy remove
//useContext hook




let API="http://hn.algolia.com/api/v1/search?"

const AppContext= React.createContext()

//to create a provider function
const AppProvider = ({children}) =>{



   
    const initialState={
        isLoading: true,
        query:"CSS",
        nbPages: 0,
        page:0,
        hits:[]
    }

   const [state, dispatch] = useReducer(reducer, initialState)
   



    const fetchApiData= async (url)=>{


        dispatch({type:"SET_LOADING"});       

        try {
            const  response = await fetch(url)
            const data = await response.json()
            console.log(data)
            dispatch({
                type:"GET_STORIES",
                payload:{
                    hits: data.hits,
                    nbPages:data.nbPages,
                    page:data.page,
                }
            })

        } catch (error) {
            console.log(error)
        }
    }

    //to call the Api function//
    const searchPost=(searchQuery)=>{
        dispatch({
            type:"SEARCH_QUERY",
            searchquery: searchQuery,
        })
    }

    //pagination//
    const nextPage=()=>{
        dispatch({
            type:"NXT_PAGE",
        })
    }

    const prevPage=()=>{
        dispatch({
            type:"PREV_PAGE",
        })
    }

    useEffect(()=>{
        fetchApiData(`${API}query=${state.query}&page=${state.page}`)
    },[state.query, state.page]);

    return (
        <AppContext.Provider value={{...state, searchPost, nextPage, prevPage}}>
            {children}
            </AppContext.Provider>
    )
}

//Custom Hook creation
const useGlobalContext = ()=>{
    return  useContext(AppContext)

}

export {AppContext, AppProvider, useGlobalContext};