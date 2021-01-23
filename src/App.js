import React, { Component } from 'react';
import ReactTable from "react-table-6";
import "react-table-6/react-table.css"
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      products: []
    };
  }
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
        <h4 style={{ textAlign: 'center' }}>BY CHAYMAE SADEQ :)</h4>

        <Form.Control as="select" name="data"
          value={this.state.subtype}
          onChange={(event) =>
            this.setState({ subtype: event.target.value })}>
          <option value='Embedded Flash Storage'> Embedded Flash Storage </option>
          <option value='GPU & Edge AI'>GPU & Edge AI</option>

        </Form.Control>
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