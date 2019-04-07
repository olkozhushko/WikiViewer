import React from "react";

const List = ({title, description, id}) => {
  let items = [];
  for (let i = 0; i < id.length; i++) {
    items.push(<ListItem key={id[i]} title={title[i]} description={description[i]}/>);
  }
  
  return (
    <ul className="list">
      {items}
    </ul>
  )

}

const ListItem = ({title, description}) => {
  console.log(title);
  return (
    <li className="list__item">
      <h3 className="list__title">{title}</h3>
      <p className="list__text">{description.replace(/<.*?>/ig, "")}</p>
    </li>
  )
}

export default List;