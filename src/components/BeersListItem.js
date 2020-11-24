import React from 'react';
import {Table} from 'react-bootstrap'

const BeersListItem = ({ beer, ...props }) => {
  return (
    <div className="col-lg-4 col-md-6 col-12 p-3">
      <div style={styles.container}>
        <div className="row">
          <div className="col">
            
            <img className="img-fluid" style={styles.image} src={beer.image} alt={beer.name} />
          </div>
          <div className="col">
            
          <h5 className="title" style={styles.heading}>{beer.name}</h5>
            <label style={styles.subheading}>{beer.style}</label>
            <div className="d-flex text-center">
            <Table striped bordered hover variant="dark">
            <thead style={styles.thead}>
              <tr>
                <th>ABV</th>
                <th>IBU</th>
                <th>Ounces</th>
              </tr>
            </thead>
            <tbody style={styles.tbody}>
              <tr>
                <td>{beer.abv}</td>
                <td>{beer.ibu === "" ? 'N/A' : beer.ibu}</td>
                <td>{beer.ounces}</td>
              </tr>
            </tbody>
          </Table>
            </div>
           
          </div>
          
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    borderRadius: 20,
    backgroundColor: "#111111",
    padding: 25

  },
  image: {
    height: 150
  },
  heading: {
    marginTop: 10,
    color: 'coral',
    fontWeight: 400
  },
  subheading: {
    color: "#FFFFFF",
    fontWeight: 300,
  },
  thead: {
    backgroundColor: "#0055ff"
  },
  tbody: {
    backgroundColor: "#111111"
  }
}

export default BeersListItem;