// Importing react and component
import React, { Component } from 'react'
// Importing our components and pages
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentShow from './pages/ApartmentShow'
import ApartmentNew from './pages/ApartmentNew'
import ApartmentEdit from './pages/ApartmentEdit'
import MyApartment from './pages/MyApartment'
import NotFound from './pages/NotFound'

// Importing our router components
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props)
    // State will be determined by componentDidMount fetch call
    this.state = {
      apartments: []
    }
  }
  
  // Assigns state to result of GET request on apartment table
  componentDidMount(){
    fetch("/apartments")
    .then(response => {
      if(response.status === 200){
        return(response.json())
      }
    })
    .then(apartmentArray => {
      this.setState({ apartments: apartmentArray })
    })
    .catch(errors => {
      console.log("index errors:", errors)
    })
  }

// Uses the info received from ApartmentNew page and gives the post http verb
// to create a new entry in the apartment table
  createNewApartment = (newApartment) => {
    fetch('/apartments', {
      body: JSON.stringify(newApartment),
      headers: { "Content-Type": "application/json"},
      method: "POST"
    })
    .then(response => {
      if (response.status === 200) {
        this.componentDidMount();
      } else {
        alert ("Please retry filling out form with new inputs")
      }
      return response;
      })
    .catch (errors => {
      console.log(errors);
    })
  }

// Uses the info received from ApartmentEdit page and gives the patch http verb
// to edit the apartment that matches the ID of the ID recieved from the show page
  editApartment = (editapartment, id) => {
    return fetch(`../apartments/${id}`, {
      body: JSON.stringify(editapartment),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then(response => {
      if (response.status === 200) {
        this.componentDidMount()
      } else {
        alert ("Update Unsuccessful")
      }
      return response
    })
    .catch(errors => {
      console.log("edit errors", errors)
    })
  }

  // Uses the ID provided by the delete button on the
  // Show page to send a delete http verb to the database
  deleteApartment = (id) => {
    return fetch (`../apartments/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then(response => {
      if(response.status === 200) {
        this.componentDidMount()
      }
      return response
    })
    .catch(errors => {
      console.log("delete errors:", errors)
    })
  }

  render () {
    // Destructuring our devise variables for use in our pages
    const {
      logged_in,
      sign_in_route,
      current_user,
      sign_up_route,
      sign_out_route
    } = this.props
    console.log("logged_in", logged_in)
    return (
      <Router>
        <Header
          logged_in={ this.props.logged_in }
          sign_in_route={ this.props.sign_in_route }
          sign_up_route={ this.props.sign_up_route }
          sign_out_route={ this.props.sign_out_route }
        />
        <Switch>
          {/* Home path */}
          <Route
            exact path="/"
            render={ (prop) =>
              <Home
                logged_in={ logged_in }
                sign_in_route={ sign_in_route }
                sign_out_route={ sign_out_route }
              />
            }
          />
          {/* Index path */}
          <Route
            path="/index"
            render={ (props) =>
              <ApartmentIndex
                logged_in={ logged_in }
                sign_in_route={ sign_in_route }
                sign_out_route={ sign_out_route }
                apartments={ this.state.apartments }
              />
            }
          />
          {/* Show path */}
          <Route
            path={"/show/:id"}
            render={ (props) => {
              let id = props.match.params.id
              let apartment = this.state.apartments.find(apartment => apartment.id === parseInt(id))
              return (
                <ApartmentShow 
                logged_in={ logged_in }
                apartment={ apartment } 
                current_user= { current_user } 
                deleteApartment = { this.deleteApartment }
                />
              )
            }}
          />
          {/* New path */}
          <Route 
            path = "/apartmentnew" 
            render = { (props) => 
              <ApartmentNew 
              createNewApartment= { this.createNewApartment }
              current_user= { current_user } 
              /> 
            }
          />
          {/* Edit path */}
          <Route 
              path = "/apartmentedit/:id" 
              render = { (props) => {
                let id = props.match.params.id
                let apartment = this.state.apartments.find(apartment => apartment.id === parseInt(id))
                return (
                  <ApartmentEdit 
                  apartment={ apartment }
                  current_user= {current_user }
                  editApartment = { this.editApartment }/>
                  )
                } 
              }
            />
          {/* Delete Path */}
          <Route path={"/catdelete/:id"}/>
          {/* My Apartments path */}
          <Route
            path="/myapartments"
            render={ (props) => {
              let myApartments = this.state.apartments.filter(apartment => apartment.user_id === current_user.id)
              return (
              <MyApartment
                logged_in={ logged_in }
                sign_in_route={ sign_in_route }
                sign_out_route={ sign_out_route }
                myApartments={ myApartments }
                current_user ={ current_user }
            />)}
          }
          />
          {/* Not Found Path */}
          <Route component= { NotFound }/>
        </Switch>
        <Footer
          logged_in={ this.props.logged_in }
          sign_in_route={ this.props.sign_in_route }
          sign_up_route={ this.props.sign_up_route }
          sign_out_route={ this.props.sign_out_route }
        />
      </Router>
    );
  }
}

export default App