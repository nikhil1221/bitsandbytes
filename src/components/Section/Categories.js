import React, { useEffect, useState } from "react";

import { Card, CardImg, CardImgOverlay, Row, Col, Container, Button} from "reactstrap";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import { render } from "node-sass";
import firebase from "../../firebase.js";

<<<<<<< HEAD
import firebase from "../../firebase.js";


 function Categories()
{
  const [categorylist,setcategorylist]= useState([]);

  const [expand, setexpand] = useState(false)

  const [primaryCategories, setPrimarycategories] = useState([])
  

    // Function to retreive data from firebase
    const fetchFunction = () => {
      let Categorylist = []
      let primaryList = []
     
        firebase.database().ref("Category").on("value", snapshot => {

          snapshot.forEach((snap) => {
              Categorylist.push({
                link:snap.val().link,
                title:snap.val().title,
                cardImageLink : snap.val().cardImageLink
              });
            })

            for(var i = 0; i<6; i++){
              primaryList.push(Categorylist[i])
            }
            
            setPrimarycategories(primaryList)
            setcategorylist(Categorylist);

            
      });
      
    }
  
   useEffect( ()=>{
     
       fetchFunction()

  },[])


    const handleExpansion = () => {
      setexpand(!expand)
    }


    return (
   
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

          {/* Rendering all the cards */}


            {expand ? 
                <div>
                
                    <Row className="justify-content-md-center">
                      {categorylist.map((data, key) => {
                  
                        return (
                          <Col lg="4" md="6" sm="12" className="ml-auto mr-auto">
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
                                      src = {data.cardImageLink}
                                      style={{
                                        width: "100%",
                                        height: 300,
                                        borderRadius: 8,
                                      }}
                                    >
                                    </CardImg>
                                
                                    <CardImgOverlay
                                      style={{
                                        color: "#fff",
                                        textDecorationStyle: "double",
                                        alignContent: "flex-end",
                                        objectFit: "cover",
                                        margin: 0,
                                        backgroundColor: "rgba(0,0,0,0.35)",
                                        // backgroundImage: `url(${getimage(data.link)})`,

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

                <Button
                  onClick={handleExpansion}
                  className="btn-round"
                  style={{
                    borderRadius: "50%",
                    width: 50,
                    height: 50,
                    alignItems: "center",
                  }}
                  color="neutral"
                  type="button"
                  outline
                >
                  <div>
                    <i className="nc-icon nc-minimal-up" size="4x" />
                  </div>
                </Button>
               </div>
            
            
              : 
              (
                <div>

                <Row className="justify-content-md-center">
                  {primaryCategories.map((data, key) => {
                  
                        return (
                          <Col lg="4" md="6" sm="12" className="ml-auto mr-auto">
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
                                      src = {data.cardImageLink}
                                      style={{
                                        width: "100%",
                                        height: 300,
                                        borderRadius: 8,
                                      }}
                                    >
                                    </CardImg>
                                
                                    <CardImgOverlay
                                      style={{
                                        color: "#fff",
                                        textDecorationStyle: "double",
                                        alignContent: "flex-end",
                                        objectFit: "cover",
                                        margin: 0,
                                        backgroundColor: "rgba(0,0,0,0.35)",
                                        // backgroundImage: `url(${getimage(data.link)})`,

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
                <Button
                className="btn-fill"
                color="danger"
                size="md"
                onClick={handleExpansion}
              >
                See all
                <span>{"   "}</span>
                <i className="nc-icon nc-minimal-down" size="4x" />
              </Button>
              </div>
              )
            
            
            }
               
            
            
         
        </Container>
      </div>
      
      
    
    )
 
}



=======
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


>>>>>>> 4b6b7f6c91053dc059910dcd6bd442155bb72e6b
export default  Categories;