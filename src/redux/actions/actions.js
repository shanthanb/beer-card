import axios from 'axios'
import { TOGGLE_IS_LOADING, SET_ALL_BEERS,SET_BEER_IMAGES, GET_PAGE_BEERS, SEARCH_BEER_BY_NAME } from './actionTypes'

const corsAnywhere = "https://cors-anywhere.herokuapp.com/"
const endpoint = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/beercraft5bac38c.json'
const images_endpoint = "https://s3-ap-southeast-1.amazonaws.com/he-public-data/beerimages7e0480d.json"

export const getAllBeers = () => dispatch => {
  dispatch(toggleIsLoading(true))
  axios.get(`${corsAnywhere}${endpoint}`)
    .then(res => dispatch(setAllBeers(res.data)))
    .catch(err => console.log(err))
    .finally(() => {
      dispatch(toggleIsLoading(false))
    })
}

export const searchBeerByName = (name) => {
  return {
    type: SEARCH_BEER_BY_NAME,
    payload: name
  }
}

export const getPageBeers = (pageNo) => {
  return {
    type: GET_PAGE_BEERS,
    payload: pageNo
  }
}

export const getBeerImages = () => dispatch => {
  dispatch(toggleIsLoading(true))
  axios.get(`${corsAnywhere}${images_endpoint}`)
  .then(res => dispatch(setBeerImages(res.data)))
  .catch(err => console.log(err))
  .finally(() => {
    dispatch(toggleIsLoading(false))
  })
}

export const toggleIsLoading = () => ({
  type: TOGGLE_IS_LOADING
})

export const setAllBeers = (beers) => ({
  type: SET_ALL_BEERS,
  payload: beers
})

export const setBeerImages = (images) => ({
  type: SET_BEER_IMAGES,
  payload: images
})