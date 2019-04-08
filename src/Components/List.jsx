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
      <a href={encodeURI(`https://en.wikipedia.org/wiki/${title}`)} target="_blank" rel="noopener noreferrer" className="list__link">
        <h3 className="list__title">{title}</h3>
        <p className="list__text">{description.replace(/<.*?>/ig, "").replace(/&quot;/ig, '"')}</p>
      </a>
    </li>
  )
}

export default List;