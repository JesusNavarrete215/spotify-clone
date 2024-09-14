export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null
  // token: "BQA8mrzZ8HfC3MVoYcjOBdpTQaL6akpu37NGDlUOephWnsZQRuICQa3z4DyLaaYxUIzxP86tsnwlgSChWI65FJCJ133BUEk4-tA62Hvzcb6HsaU_jtl0mE70n6oNP9kHwcHpp6DspnlVh8Ww-X-Wq47VMj122Q579PdCpfZNzJwiYWTbvWu-",
}

const reducer = (state, action) => {
console.log(action)
// Action -> type, [payload]

switch(action.type) {
    case 'SET_USER':
        return {
            ...state, 
            user: action.user
        }
    case 'SET_TOKEN':
        return{
            ...state,
            token: action.token
        }
    case 'SET_PLAYLIST':
        return {
            ...state,
            playlists: action.playlists
        }
    case "SET_DISCOVER_WEEKLY":
        return {
            ...state,
            discover_weekly: action.discover_weekly
        }    
    default:
        return state;
}
}

export default reducer;