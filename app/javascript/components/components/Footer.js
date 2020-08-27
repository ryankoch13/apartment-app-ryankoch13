import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <Nav fill={true}>
                    <NavItem md="3" className="footer-icon">
                        <NavLink to="/" className="footer-link">Home</NavLink>
                    </NavItem>
                    <NavItem md="3" className="footer-icon">
                    <NavLink to="/index" className="footer-link">View All</NavLink>
                    </NavItem>
                    { this.props.logged_in && 
                    <>
                    <NavItem md="3" className="footer-icon">
                        <NavLink to="/apartmentnew" className="footer-link">Add New Apartment</NavLink>
                    </NavItem>
                    <NavItem md="3" className="footer-icon">
                        <a href={ this.props.sign_out_route } className="footer-link">Sign Out</a>
                    </NavItem>
                    <NavItem md="3" className="footer-icon">
                        <NavLink to="/myapartments" className="footer-link">My Apartments</NavLink>
                    </NavItem>
                    </>
                    }
                    { !this.props.logged_in && 
                    <NavItem md="3" className="footer-icon">
                    <a href={ this.props.sign_in_route } className="footer-link">Sign In</a>
                    </NavItem>
                    }
                </Nav>
            </div>
        )
    }
}

