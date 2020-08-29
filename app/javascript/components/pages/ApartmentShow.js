import React, { Component } from 'react'
import Header from '../components/Header'
import { Button, Card, CardTitle, Col, Row , Container} from 'reactstrap'
import { NavLink, Redirect } from 'react-router-dom'
import showimg from '../assets/show-ap.jpg'

class ApartmentShow extends Component{
  constructor(props) {
    super(props)
    this.state = {
      // Is switched if delete button is pressed, rendering redirect to index
      isDeleted : false
    }
  }
  handleClick = () => {
    // Calls method from App.js, passing ID of current apartment
    this.props.deleteApartment(this.props.apartment.id);
    // Switches state variable
    this.setState( {isDeleted: true} );
    console.log("Apartment deleted")
  }
  render(){
    // Destructuring the variable apartment received through the route
    let { apartment } = this.props
    return(
      <React.Fragment>
        <h3 className="show-header">Apartment Info</h3>
        <Container fluid>
        <Row className="apartment">
            <Col md="6">
              <Card className="info-card" body>
                <CardTitle className="info-title">
                  <h5>Street Address:</h5>
                  <p>{ apartment.street }</p>
                  <p>{ apartment.city }, { apartment.state }</p>
                  <h5>Manager name:</h5><p>{ apartment.manager }</p>
                  <h5>Manager email:</h5><p>{ apartment.email }</p>
                  <h5>Monthly rent:</h5><p>${ apartment.price }</p>
                  <h5>Bedrooms:</h5><p>{ apartment.bedrooms }</p>
                  <h5>Bathrooms:</h5><p>{ apartment.bathrooms }</p>
                  <h5>Pets Allowed:</h5><p>{ apartment.pets }</p>
                  <NavLink
                        to={"/index"}
                      >
                      <Button className="s-button">
                        Back to All Apartments
                      </Button>
                      </NavLink>
                  { !this.props.logged_in ?
                    <p>Login to see more options</p>
                    : this.props.current_user.id === apartment.user_id &&
                        <>
                          <NavLink to = {`/apartmentedit/${this.props.apartment.id}`}>
                            <Button className="s-button">Edit Apartment</Button>
                          </NavLink>

                          <Button className="r-button" onClick = {this.handleClick}>
                            Delete Apartment
                          </Button>
                        </>
                      }
                      {this.state.isDeleted && <Redirect to = "/index" />
                  }
                  
                </CardTitle>
              </Card>
            </Col>
            <Col md="6">
              <img src={ showimg } id="show-img" alt="picture of an apartment"/>
            </Col>
        </Row>
        </Container>
      </React.Fragment>
    )
  }
}
export default ApartmentShow