const initialState = {
    countries: [],
    country:null
}

export function countriesReducer(state = initialState, action) {
    var newState = state
    switch (action.type) {
        case 'SET_COUNTRIES':
            newState = { ...state, countries: action.countries }
            break
            case 'SET_COUNTRY':
            newState = { ...state, country: action.country }
            break
        default:
    }
    return newState

}