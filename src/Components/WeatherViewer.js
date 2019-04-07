import React, { Component } from 'react';
import SearchForm from "./SearchForm";
import List from "./List";
import './WeatherViewer.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      requestFailed: false,
      title: [],
      description: [],
      id: [],
      links: []
    }
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearchChange(e) {
    this.setState({
      searchValue: e.target.value
    })
  }

  handleSubmit(e) {
    let value = this.state.searchValue.trim();

    if(value) {
      this.getDataFromWiki(value);
    }
    e.preventDefault();
  }

  getDataFromWiki(value) {
    console.log("i'm here");
    let url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${value}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const descript = [];
        const title = [];
        const id = [];

        for(let item of data.query.search) {
          descript.push(item.snippet);
          title.push(item.title);
          id.push(item.pageid);
        }

        this.setState({
          description: descript,
          title: title,
          id: id
        })
      }, () => {
        this.setState({
          requestFailed: true
        });
      })
  }


  render() {
    console.log(this.state.id);
    if(this.state.requestFailed) {
      return <div><h1>Unfortunately your request failed</h1></div>
    } else {
      return (
        <div className="weather-app">
          <SearchForm 
            onChange={this.handleSearchChange}
            onSubmit={this.handleSubmit}
            value={this.state.searchValue}/>
          <List 
            title={this.state.title}
            id={this.state.id}
            description={this.state.description}/>
        </div>
      );
    }
  }
}

export default App;
