const reducer= (state, action)=>{

  switch(action.type){
    case "SET_LOADING":
        return{
            ...state,
            isLoading:true,
        }
    case "GET_STORIES":
        return {
            ...state,
            isLoading: false,
            hits: action.payload.hits,
            page: action.payload.page,
            nbPages:action.payload.nbPages,
        }
    case "SEARCH_QUERY":
        return{
            ...state,
            query:action.searchquery,
        }    
    case "NXT_PAGE":


    let pageNum1 = state.page

    if(pageNum1===state.nbPages){
         pageNum1=1
    }
            return{
                ...state,
               page: state.page+1,
            } 
            
            case "PREV_PAGE":

            let pageNum = state.page

            if(pageNum===0){
                 pageNum=1
            }

                return{
                    ...state,
                   page: state.page-1,
                } 
        default:
  }
return state;
}

export default reducer;