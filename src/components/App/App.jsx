import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import MyNest from '../MyNest/MyNest';
import MyCarePreferences from '../MyCarePreferences/MyCarePreferences'
import MyFlights from '../MyFlights/MyFlights';
import AddFlights from '../AddFlights/AddFlights';
import AddToMyFlock from '../AddToMyFlock/AddToMyFlock';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (

    
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:5173 will redirect to localhost:5173/home */}
          <Redirect exact from="/" to="/home" />

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:5173/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:5173/user */}

 {/* Routes for Log-in, Registration, Home */}

          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

 {/* Routes for NavBar */}

          <ProtectedRoute
            // logged in shows My Nest page else shows LoginPage
            exact
            path="/my_nest"
          >
            <MyNest/>
          </ProtectedRoute>


          <ProtectedRoute
            // logged in shows My Care Preferences page else shows LoginPage
            exact
            path="/my_care_preferences"
          >
            <MyCarePreferences/>
          </ProtectedRoute>


          <ProtectedRoute
            // logged in shows My Flights page else shows LoginPage
            exact
            path="/my_flights"
          >
            <MyFlights/>
          </ProtectedRoute>


          <ProtectedRoute
            // logged in shows Add Flights page else shows LoginPage
            exact
            path="/add_flights"
          >
            <AddFlights/>
          </ProtectedRoute>
            

          <ProtectedRoute
            // logged in shows Add to Flock page else shows LoginPage
            exact
            path="/add_to_flock"
          >
            <AddToMyFlock/>
          </ProtectedRoute>

 
          {/* Visiting localhost:5173/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
