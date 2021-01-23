import React, { Component } from 'react';
import ReactTable from "react-table-6";
import "react-table-6/react-table.css"
import 'bootstrap/dist/css/bootstrap.min.css';

//create App class 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      products: []
    };
  }
  //fetch data from the api using componentDidMount
  componentDidMount() {
    fetch("http://app.getrecall.com:8080/products")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            products: result.products
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  render() {
    const columns = [{
      Header: 'Product ID',
      accessor: '_id'
    }, {
      Header: 'Name',
      accessor: 'name'

    },
    {
      Header: 'Description',
      accessor: 'description'

    },
    {
      Header: 'Category',
      accessor: 'category',
      filterable: true

    },
    ]
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Fetch Data from Products API</h1>
        <h4 style={{ textAlign: 'center' }}>BY THE GREAT LEAD :)</h4>

              <br></br>
        <ReactTable
          data={this.state.products}
          columns={columns}
        />
      </div>
    )
  }
}
export default App;  