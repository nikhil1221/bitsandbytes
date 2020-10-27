import firebase from "firebase.js";
import React from "react";


class RetrieveData extends React.Component {
    constructor(props) {
        
        super(props);
       
        this.state = {Categorylist : []}
        }
        
      componentDidMount() {
       
          var storage=firebase.storage();
          
          firebase.database().ref("Category").on("value", snapshot => {
            let Categorylist = [];
            snapshot.forEach(snap => {
                var imagelink;
                storage.ref().child(`Category/${snap.val().link}/Card.jpg`).getDownloadURL().then(
                    function(url){
                     url=imagelink;
                    }
                ).catch((error)=>{
                  console.log('====================================');
                  console.log(error);
                  console.log('====================================');  
                })
                 let object={
                     imageurl:imagelink,
                     link:snap.val().link,
                    title:snap.val().title
                 };

                 Categorylist.push(object);
            });
            this.setState({ Categorylist: Categorylist });
          });
        
     }
      render(){
      return (
        <div className="MainDiv">
          <div class="jumbotron text-center bg-sky">
              <h3>How to show firebase data in reactjs?</h3>
          </div>
          
          <div className="container">
              <table id="example" class="display table">
                <thead class="thead-dark">
                    <tr>
                        <th>FirstName</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>Mobile</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.Categorylist.map(data => {
                    
                    {  console.log(data);}
                    return (
                        <tr>     
                        <td>{data.id}</td>
                        <td>{data.link}</td>
                        <td>{data.title}</td>
                        <td>{data.imageurl}</td>
                        </tr>
                        
                    );
                   
                    })}
            
                   
                </tbody>
                
             </table>
              
         </div>
        </div>
      );
    }
    }
    export default RetrieveData;