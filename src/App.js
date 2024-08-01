import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/partials/Navbar";
import Footer from "./components/partials/Footer";
import Login from "./components/forms/Login";
import Register from "./components/forms/Register";
import Show from "./components/show";
import Edit from "./components/Edit";
import Editphoto from "./components/Editphoto";
import Create from "./components/Create";
import Main from "./components/Main";

import { Provider } from "react-redux";
import store from "./store";
import Notfound from "./components/partials/Notfound";
import api from "./utils/api";

function App() {
  const [locals, setlocals] = useState("");
  const [isvalue, setvalue] = useState(false);

  useEffect(() => {
    const Token = localStorage.getItem("token");
    async function fetchMyApi() {
      const localres = await api.get("/api/locals");
      setlocals(localres.data);
    }
    if (Token) fetchMyApi();
    else setlocals("");
  }, [isvalue]);

  function getlocals() {
    setvalue(!isvalue);
  }

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Main currentUser={locals.currentUser} getlocals={getlocals} />
              )}
            />

            <Switch>
              <Route
                exact
                path="/login"
                render={() => (
                  <Fragment>
                    <Navbar
                      currentUser={locals.currentUser}
                      getlocals={getlocals}
                    />
                    <Login getlocals={getlocals} />
                    <Footer />
                  </Fragment>
                )}
              />

              <Route
                exact
                path="/register"
                render={() => (
                  <Fragment>
                    <Navbar
                      currentUser={locals.currentUser}
                      getlocals={getlocals}
                    />
                    <Register getlocals={getlocals} />
                    <Footer />
                  </Fragment>
                )}
              />

              <Route
                exact
                path="/campground"
                render={() => (
                  <Fragment>
                    <Navbar
                      currentUser={locals.currentUser}
                      getlocals={getlocals}
                    />
                    <Home />
                    <Footer />
                  </Fragment>
                )}
              />

              <Route
                exact
                path="/campground/new"
                render={() => (
                  <Fragment>
                    <Navbar
                      currentUser={locals.currentUser}
                      getlocals={getlocals}
                    />
                    <Create />
                    <Footer />
                  </Fragment>
                )}
              />

              <Route
                exact
                path="/campground/:id"
                render={() => (
                  <Fragment>
                    <Navbar
                      currentUser={locals.currentUser}
                      getlocals={getlocals}
                    />
                    <Show currentUser={locals.currentUser} />
                    <Footer />
                  </Fragment>
                )}
              />

              <Route
                exact
                path="/campground/:id/edit"
                render={() => (
                  <Fragment>
                    <Navbar
                      currentUser={locals.currentUser}
                      getlocals={getlocals}
                    />
                    <Edit />
                    <Footer />
                  </Fragment>
                )}
              />

              <Route
                exact
                path="/campground/:id/editphoto"
                render={() => (
                  <Fragment>
                    <Navbar
                      currentUser={locals.currentUser}
                      getlocals={getlocals}
                    />
                    <Editphoto />
                    <Footer />
                  </Fragment>
                )}
              />

              <Route component={Notfound} />
            </Switch>
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
