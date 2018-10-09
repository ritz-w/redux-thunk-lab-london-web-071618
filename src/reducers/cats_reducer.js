function catsReducer(state={loading: false, pictures: []}, action) {
    switch (action.type) {
        case "LOADING_CATS":
          return {cats: [...state.pictures], loading: true};
     
        case "FETCH_CATS":
        console.log(action)
          return {loading: false, pictures: action.payload};
     
        default:
          return state;
      }
}

export default catsReducer;
