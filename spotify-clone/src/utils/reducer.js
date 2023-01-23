export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: "BQCpHD3efFd8uqJIavZrdkgKrz49MJSnUxLrF8ktjsZepZLGqvCqGyRsZS98Afy8i8ag2tugLCYhw5tH11LeBFgWtTvksUJ9UeXT1vFuVRBXe7Zr4czT2DE-pNt052BNrZDDyUQ2J2ALzgrRA1Uc8kpPLKJ2nin4VYjPdiE3E0qK3POPXhGF_Kv0rt1jEVOQv8Sr2c9BdbkFIiXs",
    // token: null,
}; 

// Reducer
const reducer = (state, action) => {

    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }

        default:
            return state;
    }
};

export default reducer