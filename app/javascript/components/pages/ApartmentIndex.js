import React, { Component } from 'react'
import Header from '../components/Header'
import { Button, Card, CardTitle, Col, Row } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class ApartmentIndex extends Component{
  render(){
    return(
      <React.Fragment>
      <h3 className="show-header">All the Apartments</h3>
      <Row className="apartments-row">
          { this.props.apartments.map((apartment, index) => {
            return (
              <Col sm="4" key={ index }>
                <Card className="apartment-tile" body>
                  <CardTitle className="apartment-info">
                    <h5>Price: { apartment.price }</h5>
                    <h5>City: { apartment.city }</h5>
                    <h5>State: { apartment.state }</h5>
                    <p>
                      <NavLink to={`/show/${apartment.id}`}>
                        <Button className="s-button">
                          More Info
                        </Button>
                      </NavLink>
                    </p>
                  </CardTitle>
                </Card>
              </Col>
            )
          })}
      </Row>
      </React.Fragment>
    )
  }
}
export default ApartmentIndex