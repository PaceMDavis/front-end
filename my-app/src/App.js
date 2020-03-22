import React from 'react';
import logo from './logo.svg';
import './App.css';



function ListComponent(props) {
  // console.log("This is FirstComp Props****", props.todos)
  return(
    <div>
    <h1>To-do list</h1>
    <ul>
    {props.todos.map((todos, index) => {
      let target = props.todos[index]
      console.log("I'm here", target)
    return <div>
            <li className='to-do' key={index} onClick ={() => props.changeStyle()}>{target}</li>
            <button key={target} onClick = { () => props.delete(index)}>delete</button>
          </div>
    })}
    </ul>
  </div>
  )
}
{/* <button onClick={() => this.delete(index)}>delete</button>  */}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      todos: []
    }
  }
  
  changeStyle = event => {
    // let color = [...this.state.todos]
    if(this.state.class === 'to-do') {
      this.setState({class: 'to-do-one'})
    } else if(this.state.class === 'to-do-one') {
      this.setState({class: 'to-do-two'}) 
    } else {
      this.setState({class: 'to-do'})
    }
  }
  // toggle = () => {
  //   this.setState({isClicked: !this.state.isClicked})
  // }

  formSubmit = event => {
    event.preventDefault()
    // console.log("This is state", this.state.todos)
    this.setState({
      todos: [...this.state.todos, this.state.input],
      input: ''
    })
  }
  inputUpdate = text => {
    this.setState({input: text.target.value})
  }
  
  buttonDelete = (index) => {
    // alert(event.target.attr('data-name'))
    let newData = [...this.state.todos]
    newData.splice(index, 1)
    // console.log(newData, "deleted!")
    this.setState({
      todos: newData
    })
  }
  render() {
    // console.log("Hello!!!", this.state.isClicked, this.state.input)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit= {this.formSubmit}>
          <input value= {this.state.input} onChange={this.inputUpdate} />
          <button>Add Item</button>
        </form>
        <div>
        <ListComponent todos={this.state.todos} delete={this.buttonDelete} style={this.changeStyle}/>
        </div>
      </header>
    </div>
  );
  }
}



export default App;
