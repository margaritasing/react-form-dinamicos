import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import { FormikAbstract, 
         FormikPage, 
         FormikComponents, 
         FormikYupPage, 
         RegisterPage,
         RegisterFormik,
         DynamicForm         
        } from '../form/page'

import '../form/styles/styles.css'

import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/register" activeClassName="nav-active" exact>Register</NavLink>
            </li>
            <li>
              <NavLink to="/formitPage" activeClassName="nav-active" exact>Formik-Form</NavLink>
            </li>
            <li>
              <NavLink to="/formitYupPage" activeClassName="nav-active" exact>Formik-Yup-Page</NavLink>
            </li>
            <li>
              <NavLink to="/formitcomponents" activeClassName="nav-active" exact>Formik-Components</NavLink>
            </li>
            <li>
              <NavLink to="/formitabstract" activeClassName="nav-active" exact>Formik-Abstract</NavLink>
            </li>
            <li>
              <NavLink to="/formikregister" activeClassName="nav-active" exact>Formik-Register</NavLink>
            </li>
            <li>
              <NavLink to="/dynamicform" activeClassName="nav-active" exact>Dynamic Form</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/formitPage">
            <FormikPage/>
          </Route>
          <Route path="/formitYupPage">
            <FormikYupPage />
          </Route>
          <Route path="/register">
            <RegisterPage/>
          </Route>
          <Route path="/formitcomponents">
            <FormikComponents/>
          </Route>
          <Route path="/formitabstract">
            <FormikAbstract/>
          </Route>
          <Route path="/formikregister">
            <RegisterFormik/>
          </Route>
          <Route path="/dynamicform">
            <DynamicForm/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}