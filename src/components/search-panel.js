import React from 'react';


export default class SearchPanel extends React.Component{
  state = {
   word: ''
  };

  onSearchChange = (event) =>{
    // console.log(event.target.value)
    this.setState({
      word: event.target.value
    })
  }

  onSubmitForm= (event)=>{
    event.preventDefault();
    console.log(this.state.word)
    this.props.findItem(this.state.word);
  }


  render(){
    return(
      <form className="searchPanel" onSubmit={this.onSubmitForm}>
        <input placeholder= "search" onChange={this.onSearchChange}/>
        <button className="btn-search" >
          Search
        </button>
      </form>
    )
  }

}
