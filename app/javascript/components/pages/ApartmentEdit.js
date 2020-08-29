import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Form, FormGroup, Input, Label, Button} from 'reactstrap';
import {Redirect, NavLink} from 'react-router-dom'

class ApartmentEdit extends Component {
    constructor(props){
        super(props)
        this.state = {
            form : {
                street: this.props.apartment.street,
                city: this.props.apartment.city,
                state: this.props.apartment.state,
                manager: this.props.apartment.manager,
                email: this.props.apartment.email,
                price: this.props.apartment.price,
                bedrooms: this.props.apartment.bedrooms,
                bathrooms: this.props.apartment.bathrooms,
                pets: this.props.apartment.pets,
                user_id: this.props.current_user.id
            },
            success : false
        }
    }

    handleChange = (e) => {
        let {form} = this.state
        form[e.target.name] = e.target.value
        this.setState({ form: form })
    }



    handleSubmit = (e) => {
        e.preventDefault()
        this.props.editApartment(this.state.form, this.props.current_user.id)
        this.setState({ success: true })
    }

    render() {
        return (
            <div>
                <Form className="form">
                <FormGroup className="form-item">
                        <Label className="form-title">Street</Label>
                        <Input 
                            type = "text"
                            name = "street"
                            value = {this.state.form.street} 
                            onChange = {this.handleChange}
                            className="form-input"
                        />
                    </FormGroup>
                    <FormGroup className="form-item">
                        <Label className="form-title">City</Label>
                        <Input
                            type = "text"
                            name = "city"
                            value = {this.state.form.city}
                            onChange = {this.handleChange} 
                            className="form-input"
                        />
                    </FormGroup>
                    <FormGroup className="form-item">
                        <Label className="form-title">State</Label>
                        <Input
                            type = "text"
                            name = "state"
                            value = {this.state.form.state} 
                            onChange = {this.handleChange}
                            className="form-input"
                        />
                    </FormGroup>
                    <FormGroup className="form-item">
                        <Label className="form-title">Manager</Label>
                        <Input
                            type = "text"
                            name = "manager"
                            value = {this.state.form.manager} 
                            onChange = {this.handleChange}
                            className="form-input"
                        />
                    </FormGroup>
                    <FormGroup className="form-item">
                        <Label className="form-title">Email</Label>
                        <Input
                            type = "text"
                            name = "email"
                            value = {this.state.form.email} 
                            onChange = {this.handleChange}
                            className="form-input"
                        />
                    </FormGroup>
                    <FormGroup className="form-item">
                        <Label className="form-title">Price</Label>
                        <Input
                            type = "text"
                            name = "price"
                            value = {this.state.form.price} 
                            onChange = {this.handleChange}
                            className="form-input"
                        />
                    </FormGroup>
                    <FormGroup className="form-item">
                        <Label className="form-title">Bedrooms</Label>
                        <Input
                            type = "number"
                            name = "bedrooms"
                            value = {this.state.form.bedrooms} 
                            onChange = {this.handleChange}
                            className="form-input"
                        />
                    </FormGroup>
                    <FormGroup className="form-item">
                        <Label className="form-title">Bathrooms</Label>
                        <Input
                            type = "number"
                            name = "bathrooms"
                            value = {this.state.form.bathrooms} 
                            onChange = {this.handleChange}
                            className="form-input"
                        />
                    </FormGroup>
                    <FormGroup className="form-item">
                        <Label className="form-title">Pets</Label>
                        <Input
                            type = "text"
                            name = "pets"
                            value = {this.state.form.pets} 
                            onChange = {this.handleChange}
                            className="form-input"
                        />
                    </FormGroup>
                    <Button name="submit" className="s-button"
                    onClick = { this.handleSubmit }>
                        Submit
                    </Button>
                    <NavLink to={"/index"}>
                        <Button className="r-button">
                            Cancel
                        </Button>
                    </NavLink>
                </Form>
                { this.state.success && <Redirect to = "/index" />}
            </div>
        )
    }
}

export default ApartmentEdit