import React from 'react';
import logo from './logo.svg';
import './App.css';

// class ListComponent extends React.Component {
//   const 
// }

function ListComponent(props) {
  // console.log("This is FirstComp Props****", props.todos)

  return(
    <div>
    <h1>To-do list</h1>
    <ul>
    {props.todos.map((todos, index) => {
      let target = props.todos[index]
      // console.log("I'm here", target)
    return <div>
            <li className={props.class[index]} key={index} onClick ={ () => props.changeStyle(index)}>{target}</li>
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
      todos: [],
      class: []
    }
  }
  
  changeStyle = (index) => {
    // let color = [...this.state.todos]
    // console.log("changestyle", this.state)
    let newClass = this.state.class
    if(newClass[index] === 'to-do') {
      newClass[index] = "to-do-yellow"
      this.setState({class: newClass})
    } else if(newClass[index] === 'to-do-yellow') {
      newClass[index] = "to-do-red"
      this.setState({class: newClass}) 
    } else {
      newClass[index] = "to-do"
      this.setState({class: newClass})
    }
  }

  formSubmit = event => {
    event.preventDefault()
    // console.log("This is state", this.state.todos)
    this.setState({
      todos: [...this.state.todos, this.state.input],
      input: '',
      class: [...this.state.class, "to-do"]
    })
  }
  inputUpdate = text => {
    this.setState({input: text.target.value})
  }
  
  buttonDelete = (index) => {
    // alert(event.target.attr('data-name'))
    let newData = [...this.state.todos];
    let newClass = [...this.state.class]
    newData.splice(index, 1)
    newClass.splice(index, 1)
    // console.log(newData, "deleted!")
    this.setState({
      todos: newData,
      class: newClass
    })
  }
  render() {
    // console.log("Hello!!!", this.state.isClicked, this.state.input)
    console.log(this.state.class)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit= {this.formSubmit}>
          <input type ="text" placeholder ="to-do" value= {this.state.input} onChange={this.inputUpdate} />
          <button>Add Item</button>
        </form>
        <div>
        <ListComponent todos={this.state.todos} delete={this.buttonDelete} class={this.state.class} changeStyle={this.changeStyle}/>
        </div>
      </header>
    </div>
  );
  }
}



export default App;
