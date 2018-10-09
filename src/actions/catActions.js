// export function fetchCats() {
//     const cats = fetch('http://localhost:4000/db').then(response => {
//         return response.json()
//       }).then(responseJSON => {
//         return responseJSON.images
//       })
//     return {
//       type: 'FETCH_CATS',
//       cats
//     };
//   };

export function fetchCats() {
    return (dispatch) => {
      dispatch({ type: 'LOADING_CATS' });
      return fetch('http://localhost:4000/db')
        .then(response => response.json())
        .then(cats => dispatch({ type: 'FETCH_CATS', payload: cats.images }));
    };
  }