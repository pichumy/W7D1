import React from 'react';
import {uniqueId} from '../../util/util';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    let title = this.state.title;
    let body = this.state.body;
    let todo = {id: uniqueId(),title: title, body:body};
    this.props.receiveTodo(todo);
    this.setState({
      body: "",
      title: ""
    });
  }

  handleChange(event){
    const target = event.target;
    if (target.type === "text"){
      this.setState({
        title: event.target.value
      });
    }else{
      this.setState({
        body: event.target.value
      });
    }
  }

  render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Title
            <input type="text" value={this.state.title} onChange={this.handleChange}/>
          </label>
          <br />
          <label>
            Body
            <textarea type="textarea" value={this.state.body} onChange={this.handleChange}> </textarea>
          </label>
          <input type="submit" value = "Submit" />
        </form>
      );
    }
  }



export default TodoForm;
