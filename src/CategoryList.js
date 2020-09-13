import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  /* constructor(props) {// olmazsa da props çalışır
    super(props);
    this.state = {//state i burada ya da aşağıdaki gibi kullanabiliriz
      Categories: [
        { categoryId: 1, categoryName: "beverages" },
        { categoryId: 2, categoryName: "condiments" },
      ],
    };
  } */

  state = {
    Categories: [],
  };
componentDidMount(){
  this.getCategories();
}

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          Categories: data,
        })
      );
  };

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <ListGroup>
          {this.state.Categories.map((category) => (
            <ListGroupItem 
              active= {category.categoryName===this.props.currentCategory?true:false}
              onClick={() => this.props.changeCategory(category)}
              key={category.categoryId}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>

        <h3>{this.props.currentCategory}</h3>
      </div>
    );
  }
}
