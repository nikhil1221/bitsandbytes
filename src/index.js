import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss?v=1.2.0";
import "assets/demo/demo.css?v=1.2.0";
// pages
import Index from "views/examples/LandingPage.js";
// import NucleoIcons from "views/NucleoIcons.js";

import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";

// Category Pages Import
import TravelPage from "views/categories/TravelPage";
import ArtPage from "views/categories/ArtPage";
import FashionPage from "views/categories/FashionPage";
import EntertainmentPage from "views/categories/EntertainmentPage";
import CurrentAffairsPage from "views/categories/CurrentAffairsPage";
import HealthPage from "views/categories/HealthPage";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={(props) => <Index {...props} />} />
      {/* <Route
        path="/nucleo-icons"
        render={(props) => <NucleoIcons {...props} />}
      /> */}

      {/* Path to categories */}
      <Route
        path="/travel-places"
        render={(props) => <TravelPage {...props} />}
      />
      <Route
        path="/fashion-style"
        render={(props) => <FashionPage {...props} />}
      />
      <Route path="/art" render={(props) => <ArtPage {...props} />} />
      <Route
        path="/entertainment"
        render={(props) => <EntertainmentPage {...props} />}
      />
      <Route
        path="/current-affairs"
        render={(props) => <CurrentAffairsPage {...props} />}
      />
      <Route
        path="/health-fitness"
        render={(props) => <HealthPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
