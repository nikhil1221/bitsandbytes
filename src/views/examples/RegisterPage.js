import React, { useContext } from "react";

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";
import {Link} from "react-router-dom";
// core components



import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";

function RegisterPage(props) {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });
  
  // const {handleSignup,inputs,setInputs,errors}=useContext(firebaseAuth);
  // // console.log(handleSignup);

  // const handleSubmit = async (e) => {
    
  //   console.log('handleSubmit')
  //  await handleSignup();
  
   
   
  // }
  // const handleChange = e => {
  //   const {name, value} = e.target
  //   // console.log(inputs)
  //   setInputs(prev => ({...prev, [name]: value}))
  // }


  return (
    <>
      <ExamplesNavbar />
      <div
        className="page-header"
        style={{
          backgroundImage: "url(" + require("assets/img/login-image.jpg") + ")",
        }}
      >
        <div className="filter" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto">
                <h3 className="title mx-auto">Welcome</h3>

                <Form className="register-form" >
{/*                  
                      <label>Name</label>
                      <Input onChange={handleChange} placeholder="Name" type="text" /> */}
                   
                  <label>Email</label>
                  <Input placeholder="Email" type="email" name="email" 
                   />
                  <label>Password</label>
                  <Input  placeholder="Password" type="password" name="password" />
                  <Button
                    block
                    className="btn-round"
                    color="danger"
                    
                  >
                    Register
                  </Button>
                 
                </Form>
                {/* {errors.length > 0 ? errors.map(error =>
                     <div class="alert alert-danger" role="alert">
                      {error}
                     </div> ) 
                     : null} */}
                <Link to="/login">
                  <Button
                    block
                    className="btn-round"
                    color="danger"
                    
                  >
                    Login
                  </Button>
                  </Link>
                <div className="forgot">
                  <Button
                    className="btn-link"
                    color="danger"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Forgot password?
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="footer register-footer text-center">
          <h6>
            © {new Date().getFullYear()},Made by Bits & Bytes{" "}
            <i className="fa fa-heart heart" /> for You.
          </h6>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
