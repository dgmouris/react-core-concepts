import React from "react";
import { connect } from "react-redux";
 

const mapStateToProps = state => {
  return { articles: state.articles };
}; 

const ConnectedList = ({ articles }) => (
  <ul className="list-group list-group-flush">
    {articles.map(item => (
      <li className="list-group-item" key={item.id}>
        {item.title}
        <button type="button" className="close" ><span aria-hidden="true">&times;</span></button>
      </li>
    ))}
  </ul>
);

const List = connect( mapStateToProps )(ConnectedList);
export default List;