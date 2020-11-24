import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { getAllBeers, getBeerImages, getPageBeers } from '../redux/actions/actions'
import BeersListItem from './BeersListItem'
import CustomPagination from './CustomPagination'
import SearchBeer from './SearchBeer'

const logo = "https://s3-ap-southeast-1.amazonaws.com/he-public-data/csm_01_02-2019_Beer_Brewing_53ef2818e58285158.png"

const BeersList = (props) => {
  const [pageNo, setPageNo] = useState(1)

  useEffect(() => {
    props.getAllBeers()
  }, [])

  useEffect(() => {
    if (props.beersWithoutImages) {
      props.getBeerImages()
    }
  }, [props.beersWithoutImages])

  useEffect(() => {
    if (props.beers && props.beers.length) {
      props.getPageBeers(pageNo)
    }
  }, [pageNo, props.beers])

  return (
    <div className="container-fluid p-5">
      <div className="d-flex pb-5 justify-content-center align-items-center">
        <img src={logo} alt="beercraft" style={{ height: 100, marginRight: 10 }} />
        <div>
          <h2 style={{ color: "white", fontWeight: 400 }}>Beer Craft</h2>
        </div>

      </div>
      <SearchBeer />
      <div className="pt-4 row justify-content-around">
        {props.pageBeers && props.pageBeers.map((beer, index) =>
          <BeersListItem beer={beer} key={index} />
        )}
      </div>
      <div className="row justify-content-center">
        {props.pageBeers && props.pageCount && <CustomPagination onPageSelect={(page) => setPageNo(page)} currentPage={pageNo} lastPage={props.pageCount} />}
      </div>
    </div>
  );
};

const mapStateToProps = storeState => {
  return {
    beersWithoutImages: storeState.beersWithoutImages, 
    beers: storeState.beers,
    images: storeState.images,
    pageBeers: storeState.pageBeers,
    pageCount: storeState.pageCount,
    originalBeers: storeState.originalBeers,
    isLoading: storeState.isLoading
  }
}

export default connect(mapStateToProps, { getAllBeers, getBeerImages, getPageBeers })(BeersList)