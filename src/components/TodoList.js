import React from "react"
import TodoItems from "./TodoItems"
 
class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  addItem = e => {
    if (this._inputElement.value !== "") {
      let newItem = {
        text: this._inputElement.value,
        key: Date.now()
      }
   
      this.setState((prevState) => {
        return { 
          items: prevState.items.concat(newItem) 
        }
      })
     
      this._inputElement.value = ""
    }
    e.preventDefault()
  }

  deleteItem = key => {
    let filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key)
    })
   
    this.setState({
      items: filteredItems
    })
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a} 
              placeholder="enter task">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items} delete={this.deleteItem}/>
      </div>
    )
  }
}
 
export default TodoList