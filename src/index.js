import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter} from "react-router-dom";
import {Switch, Route, Redirect} from "react-router-dom"

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss?v=1.2.0";
import "assets/demo/demo.css?v=1.2.0";

import MagazinePage from "./views/categories/MagazinePage.js";
import RegisterPage from "./views/examples/RegisterPage"
import Index from "./views/examples/LandingPage"

// Category Page Component import
import BlogsMain from "views/categories/BlogsMain";
<<<<<<< HEAD
// Getting all the data about each individual category from firebase
import getCategoryData from "categoryData";
import ScrollToTop from "../src/components/ScrollToTop";

getCategoryData((fetchedData)=>{


  ReactDOM.render(
     

    <BrowserRouter>
   <ScrollToTop/>
      <Switch>
      
        {/* Individual Page Route */}

        {
          fetchedData.map((data, key) =>
            (
              <Route
                key={key}
                path={`/${data.link}`}

                render={(props) => (
                  <BlogsMain
                    input={data.blogs}
                    pagename={data.title}
                    backimage={data.backgroundImage}
                    roundimage={data.iconImage}
                    carouselData={data.carouselImages}
                    {...props}
                  />

                )}
              />


            )
          )
        }
     <Route path="/magazine"  render={(props)=><MagazinePage {...props}/>}/>

        {/* Index Route */}
        <Route path="/index" render={(props) => <Index {...props} />} />

=======
import data from "./categoryData.js";
import Login from"./views/examples/Login";
import LandingPageCarouselData from "./LandingPageCarouselData";

ReactDOM.render(
 
  <BrowserRouter>
    <Switch>
    
    
    <Route path="/login" render={(props)=> <Login {...props}/>} /> 
      
  <Route path="/index" render={(props) => <Index {...props} />} />
    
      {data.map((data, key) => (
>>>>>>> 4b6b7f6c91053dc059910dcd6bd442155bb72e6b
        <Route
          path="/register-page"
          render={(props) => <RegisterPage {...props} />}
        />
<<<<<<< HEAD
        <Redirect to="/index" />

      </Switch>
      
    </BrowserRouter>,
    document.getElementById("root")
  );

})
=======
      ))}

      {/* <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      /> */}
      {/* <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      /> */}
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
 
);
>>>>>>> 4b6b7f6c91053dc059910dcd6bd442155bb72e6b
