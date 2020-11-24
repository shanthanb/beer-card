import { TOGGLE_IS_LOADING, SET_ALL_BEERS, SET_BEER_IMAGES, GET_PAGE_BEERS , SEARCH_BEER_BY_NAME} from '../actions/actionTypes'
const pageSize = 20

const reducer = (state = {}, action) => {
  const { type, payload } = action
  switch (type) {
    case SEARCH_BEER_BY_NAME: 
      const filtered = state.originalBeers ? state.originalBeers.filter((beer) => beer.name.toLowerCase().includes(payload.toLowerCase())) : []
      return {
        ...state,
        beers: [...filtered],
        pageCount: Math.ceil(filtered.length / 20)
      }
    case GET_PAGE_BEERS: 
      const updated = state.beers.slice(pageSize*(payload-1), pageSize*payload)
      return {
        ...state,
        pageBeers: [...updated]
      }
    case SET_BEER_IMAGES:
      const numImages = payload.length
      const updatedBeers = state.beersWithoutImages.map((beer, index) => ({ ...beer, image: payload[index % numImages].image }))
      return {
        ...state,
        originalImages: [...payload],
        originalBeers: [...updatedBeers],
        beers: [...updatedBeers],
        images: [...payload],
        pageCount: Math.ceil(updatedBeers.length / 20)
      }
    case SET_ALL_BEERS: 
    return {
      ...state,
      beersWithoutImages: [...payload]
    }
    case TOGGLE_IS_LOADING: return {
      ...state,
      isLoading: !state.isLoading
    }
    default: return state
  }
}

export default reducer