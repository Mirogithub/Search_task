import React from 'react';


export default class SearchPanel extends React.Component{
  state = {
   word: ''
  };

  onSearchChange = (event) =>{
    console.log(event.target.value)
    this.setState({
      word: event.target.value
    })
  }

  onSubmitForm= (event)=>{
    event.preventDefault();
    // console.log('TEXT:', this.state.word)
    this.setState({
      word: event.target.value
    })
    this.props.findItem(this.state.word);
  }


  render(){
    // console.log(this.props)
    return(
      <form className="searchPanel" onSubmit={this.onSubmitForm}>
        <input placeholder= "search" onChange={this.onSearchChange} value={this.state.label} />
        <button className="btn-search" >
          Search
        </button>
      </form>
    )
  }
}


// const SearchPanel2 = ()=>{
//   return(
//     <div className="searchPanel">
//       <input placeholder= "search" />
//       <button type="button" className="btn-search" onClick={()=>console.log('DDD')} >
//         Search
//       </button>
//     </div>
//   )
// }
//
// export default SearchPanel;
