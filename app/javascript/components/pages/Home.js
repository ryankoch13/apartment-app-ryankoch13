import React, { Component } from 'react'
import Header from '../components/Header'
import apartment from '../assets/apartment.jpg'
import {
  Container,
  Col,
  Row
} from 'reactstrap'
import { NavLink } from 'react-router-dom'

class Home extends Component{
  render(){
    return(
      <>
        <Container className="main-container" fluid>
          <div className="main-white">
            <h2 className="home-header">Your dream apartment is waiting...</h2>
            <img src={ apartment } id="main-img" alt="picture of an apartment"/>
            <h2 className="home-header">Login or Register Today!</h2>
            <p className="home-text">As a user, you get access to several exciting features. You can add a new apartment listing, view your apartment listings, edit your apartment listings, and more. </p>
          </div>
        </Container>
      </>
    )
  }
}
export default Home