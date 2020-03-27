import React from 'react';
import './App.css';


//Fetch Hacker news data
//Use class and return form with both selections for author and date searches
//Figure out in docs how to search by date and author
//Then have input that takes in search information
//Will need state for input, as well as output
// Update input state with request, and have an onChange to handle whether they want author or date
//Have an onSubmit that handles the request and passes the appropriate fetch
//return data in div/rows


function ListComponent(props) {
  return(
    <div>
      <h1>Results</h1>
        <ul>
          {props.query.map((result, index) => {
            // let story = props.result[index]
            console.log("wowza", result)
          return (
            <div>
              <li key={index}>{`${result.title} - ${result.author}`}</li>
            </div>
          )
          })}
        </ul>
    </div>
  )
}

class App extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
    input: '',
    selection: 'author',
    query: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onSelect = this.onSelect.bind(this)
  }
  // state = {
  //   input: '',
  //   selection: null,
  //   query: []
  // }

onSelect(event) {
  this.setState({
    selection: event.target.value
  })
  console.log(this.state.selection, "red")
}

handleSubmit(event) {
  event.preventDefault();
  if(this.state.selection === "author") {
  fetch(`https://hn.algolia.com/api/v1/search?query=author_${this.state.input}`)
  .then((res) => {
    return res.json()
  }) 
  .then((data) => {
    this.setState ({
      query: data.hits
    })
  })
  }
  else if (this.state.selection === "date") {
    fetch(`https://hn.algolia.com/api/v1/search_by_date?query=${this.state.input}`)
  .then((res) => {
    return res.json()
  }) 
  .then((data) => {
    this.setState ({
      query: data.hits
    })
  })
  }
  
}

handleChange (event) {
  this.setState({
    input: event.target.value
    
  })
  // console.log(event.target.value, "red")
}

render() {
  console.log(this.state.query, "hi")
  return (
    <div>
      <h1>Search for news</h1>
      <form onSubmit={this.handleSubmit}>
        <input name ="search" type ="text" placeholder ="Enter search here" value={this.state.input} onChange={this.handleChange}/>
        <select value={this.state.selection} onChange={this.onSelect}>
          <option value="author">Author</option>
          <option value="date">Date</option>
        </select>
        <button>Submit</button>
      </form>
      <div>
        <ListComponent query={this.state.query}/>
      </div>
    </div>
  )
}

}

export default App;
