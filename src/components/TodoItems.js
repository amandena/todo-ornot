import React, { Component } from "react"
import FlipMove from "react-flip-move"
 
class TodoItems extends Component {
  createTasks = (item) => {
    return <li key={item.key} onClick={() => this.delete(item.key)}>
      {item.text}
    </li>
  }

  delete = (key) => {
    this.props.delete(key)
  }
 
  render() {
    let todoEntries = this.props.entries
    let listItems = todoEntries.map(this.createTasks)
 
    return (
      <ul className="theList">
        <FlipMove duration={250} easing="ease-out">
          {listItems}
        </FlipMove>
      </ul>
    )
  }
}
 
export default TodoItems