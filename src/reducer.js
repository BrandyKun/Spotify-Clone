export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: 'BQCvbpk5K3PfqTFOE-lXUCzbvyA-ptpZINMqqy7mnwvkyjltphVq87UPeole_Sw8Uubk6P5Pl79KmjigvxFV5MQdEQAjZyHOYrxWr_Ozh4xo0BYmuuoBKxxz5T8zGD1ov3uRNlOSfnoDRYHcKZjUuXSnTRhpEsIAzGdehl7VKAI_W2mRQ934'
}

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user:action.user
            }
        case 'SET_TOKEN':
            return { 
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists
            }
        default:
            return state;
    }
}
export default reducer;