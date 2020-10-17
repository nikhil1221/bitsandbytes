import React, { useState } from "react";

import { Card, CardImg, CardImgOverlay, Row, Col, Container } from "reactstrap";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import { render } from "node-sass";
import firebase from "../../firebase.js";

// Importing the data of categories


class Categories extends React.Component{
  
  
  constructor(props) {
        
    super(props);
   
    this.state = {Categorylist : [],}
    }
    
  componentDidMount() {
   
      var storage=firebase.storage();
      
      firebase.database().ref("Category").on("value", snapshot => {
        let Categorylist = [];
        snapshot.forEach(snap => {
            var imagelink;
            storage.child(`Category/${snap.val().link}/Card.jpg`).getDownloadURL().then(
                function(url){
                 url=imagelink;
                }
            ).catch(error=>{
              console.log("error");
              console.log(error);

            })
             let object={
                 imageurl:imagelink,
                 link:snap.val().link,
                title:snap.val().title
             };

             Categorylist.push(object);
        });
        this.setState({ Categorylist: Categorylist });
      });}

      
      render()
      {
        return(
          <div
          className="section section-dark text-center"
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Container>
            <Fade top>
              <h1 style={{ color: "#fff", marginBottom: "2rem", marginTop: 0 }}>
                Categories
              </h1>
            </Fade>
    
            <Row className="justify-content-md-center">
              {this.state.Categorylist.map((data, key) => {
                {
                  /* Displaying a single card from the data array */
                }
                return (
                  <Col lg="4" md="6" sm="2" className="ml-auto mr-auto">
                    <div
                      style={{
                        margin: "0.5%",
                        width: "100%",
                        height: "100%",
                        objectFit: "none",
                        alignItems: "center",
                      }}
                    >
                      <Fade left>
                      <div key={key}>
                        <Link to={data.link}>
                          <Card>
                            <CardImg
                              src={data.imageurl}
                              style={{
                                width: "100%",
                                height: 300,
                                borderRadius: 8,
                              }}
                            ></CardImg>
                         
                            <CardImgOverlay
                              style={{
                                color: "#fff",
                                textDecorationStyle: "double",
                                alignContent: "flex-end",
                                objectFit: "cover",
                                margin: 0,
                                backgroundColor: "rgba(0,0,0,0.35)",
                              }}
                            >
                            
                              <h2 style={{ fontWeight: "400" }}>{data.title}</h2>
                            </CardImgOverlay>
                          </Card>
                        </Link>
                      </div>
                      </Fade>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
        )
        }
      
    
};


export default  Categories;