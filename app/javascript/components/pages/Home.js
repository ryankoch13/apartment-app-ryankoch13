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
          <div>
            <h2 className="home-header">Your dream apartment is waiting...</h2>
            <img src={ apartment } id="main-img" alt="picture of an apartment"/>
          </div>
        </Container>
      </>
    )
  }
}
export default Home