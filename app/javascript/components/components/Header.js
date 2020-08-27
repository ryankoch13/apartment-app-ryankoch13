import React, { Component } from 'react'
import {
  Row,
  Container,
  Nav,
  NavItem,
  Col
} from 'reactstrap'
import { NavLink } from 'react-router-dom'

class Header extends Component{
  constructor(props){
    super(props)
    this.state = {
      show: false
    }
  }
  toggleNavbar = () => {
    this.state.show === false ?
    this.setState({ show: true }) : 
    this.setState({ show: false })
  }
  render(){
    return (
      <React.Fragment>
        <Container className="hero" fluid>
          <Row className="hero-row">
            <Col md="6" className="header-lead">
              <Container fluid>
                <a href="/">
                  <h1 className="display-3">Lofty</h1>
                  <p className="lead">Your place to find <i>your</i> place.</p>
                </a>
              </Container>
            </Col>
            <Col md="6" className="header-icons">
              <Nav fill={true}>
                <NavItem md="3" className="home-icon">
                  <NavLink to="/index" className="home-link">View All</NavLink>
                </NavItem>
                { this.props.logged_in && 
                <>
                  <NavItem md="3" className="home-icon">
                    <NavLink to="/apartmentnew" className="home-link">Add New Apartment</NavLink>
                  </NavItem>
                  <NavItem md="3" className="home-icon">
                    <a href={ this.props.sign_out_route } className="home-link">Sign Out</a>
                  </NavItem>
                  <NavItem md="3" className="home-icon">
                    <NavLink to="/myapartments" className="home-link">My Apartments</NavLink>
                  </NavItem>
                </>
                }
                { !this.props.logged_in && 
                <NavItem md="3" className="home-icon">
                  <a href={ this.props.sign_in_route } className="home-link">Sign In</a>
                </NavItem>
                }
              </Nav>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    )
  }
}

export default Header