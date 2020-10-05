import React, { useState } from "react";

import {
  Card,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  Button,
  Row,
  Col,
  CardImgOverlay,
  Badge,
} from "reactstrap";

// Blog Card data
// const input = [
//   {
//     id: 1,
//     title: "Europe Getaway",
//     category: "Travel",
//     text:
//       "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
//     image: require("assets/img/faces/joe-gardner-2.jpg"),
//     represent: "hide",
//     date: "Oct 2020",
//   },
//   {
//     id: 2,
//     title: "Explore with us",
//     category: "Travel",
//     text:
//       "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat",
//     image: require("assets/img/faces/kaci-baum-2.jpg"),
//     represent: "hide",
//     date: "Nov 2020",
//   },
//   {
//     id: 3,
//     title: "Travelling to South",
//     category: "Travel",
//     text:
//       "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains",
//     image: require("assets/img/faces/joe-gardner-2.jpg"),
//     represent: "hide",
//     date: "Sep 2020",
//   },
// ];

function Blogsactivity({ blogsData }) {
  // const [expand, setexpand] = useState(false);

  return (
    <>
      <Row className="justify-content-md-center">
        {blogsData.map((data, key) => {
          return (
            <div key={key}>
              {/* {data.represent=="hide"? */}
              <Col lg="4" md="6" sm="6">
                <Card style={{ width: "20rem" }}>
                  <CardImgOverlay
                    style={{
                      textAlign: "left",
                      // textAlignLast: "end",
                      // textOrientation: "sideways",
                    }}
                  >
                    <Badge
                      style={{
                        backgroundColor: "#fff",
                        color: "#000",
                        borderTopRightRadius: 5,
                      }}
                    >
                      {data.category}
                    </Badge>
                  </CardImgOverlay>
                  <CardImg top src={data.image} alt={data.category} />

                  <CardBody>
                    <CardTitle style={{ fontWeight: 400, fontSize: 16 }}>
                      {data.title}
                    </CardTitle>
                    <CardText style={{ textAlign: "left", marginTop: "12px" }}>
                      {/* {{var obj=JSON.parse(data.text)}} */}
                      {data.text.substr(0, 40)}
                      &nbsp;.....
                    </CardText>
                    <CardText className="text-left">
                      <small className="text-muted">{data.date}</small>
                    </CardText>
                    <Button color="primary">
                      {data.represent === "hide" ? "Read more" : "Read less"}
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </div>
          );
        })}
      </Row>
    </>
  );
}

export default Blogsactivity;
