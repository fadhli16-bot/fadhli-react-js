import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
  }

  componentDidMount() {
    fetch("https://newsapi.org/v2/everything?q=tesla&from=2022-11-29&sortBy=publishedAt&apiKey=0e9cce5ee7d948ffa28ae81177415a6a")
      .then((respon) => respon.json())
      .then((result) => {
        const dataNews = result.articles;
        console.log(dataNews);
        this.setState({
          news: dataNews,
        });
      });
  }

  // componentWillUnmount() {
  // }

  render() {
    return (
      <div className="d-flex flex-wrap">
        {this.state.news.map((e, index) => {
          return (
            <Card key={index} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={e.urlToImage} />
              <Card.Body>
                <Card.Title>{e.title}</Card.Title>
                <Card.Text>{e.content}</Card.Text>
                <Button variant="white">
                  <a href={e.url}>Go Somewere</a>
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }
}
