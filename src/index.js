import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header'
import SearchPanel from './components/search-panel'
import FoundList from './components/found-list'
import './main.css'

export default class App extends React.Component{

  state ={
    itemsList: [
      {name: "Document 1", description: "Document 1 description", id: 1},
      {name: "Document 2", description: "Document 2 description", id: 2},
      {name: "Document 3", description: "Document 3 description", id: 3},
      {name: "Document 10", description: "Document 10 description", id: 10},
      {name: "Document 20", description: "Document 20 description", id: 20},
    ],
    word: ''
  }

  findItem = (text) => {
    this.setState({
      word: text,
    })
  }

  searchItems=({itemsList, word})=>{
    if (word==='') {return itemsList=[]}
    return itemsList.filter((item)=>{
      return item.name.toLowerCase().indexOf(word.toLowerCase())>-1;
    })
  }

  render(){
    // const foundItems = this.state.itemsList;
    const foundItems = this.searchItems(this.state);
    return(
      <div>
        <AppHeader />
        <SearchPanel findItem={this.findItem} />
        <FoundList itemsList={foundItems}  />
      </div>
    )
  }
}

const element= (<App />);
ReactDOM.render(element, document.querySelector('#root'))
