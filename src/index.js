import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap.css';
import { App } from './modal.js';


class Main extends React.Component {

constructor(props){
    super(props);
    this.state = {
      todoList: [],
      title: 'React TodoList App',
      counter: 0,
      completed: ''
    }
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
}

addTodo(event){
    event.preventDefault();
    let name = this.refs.name.value;
    let completed = this.refs.completed.value;
    let counter = this.state.counter;
    counter+=1;
    let todo = {
        name,
        completed,
        counter
    };
        
    let todos = this.state.todoList;
    todos.push(todo);
    this.setState({
        todoList: todos,
        counter: counter,
        completed: completed
    });

    ReactDOM.findDOMNode(this.refs.name).value = "";
    ReactDOM.findDOMNode(this.refs.completed).value = "";

}

changeCompleted(value){
    if(value === 'yes'){
    return  this.state.completed = 'no'; 
    }
     else{
     return  this.state.completed = 'yes';
     }
}

removeTodo(index,event){
  
    event.preventDefault();
    let todos = this.state.todoList;
    let todo = todos.find(function(todo){
        return todo.counter === index
    });

    let indx = this.state.todoList.findIndex(x => x.name === todo.name);

    todos.splice(indx,1);
    
    this.setState({
        todoList: todos
    });
   
}
    render() {
        let title = this.state.title;       
        return ( 
           <div style={{ marginTop: 100, marginLeft: 260, marginRight: 330 }} className="jumbotron">
            <div className="container fluid"><modal />
            <div style={{ marginLeft:140 }}><h1>{title}</h1></div><br />
            <form>
             <div className="form-group"> 
             <input type="text" className="form-control" ref="name" style={{ width: 600 }} placeholder="what do you need to do?"/>
             </div>
             <div className="form-group">
              <input type="text" className="form-control" ref="completed" style={{ width: 600 }} placeholder="is it done yet?"/>  
              </div>
              <pre style={{ marginLeft: 160 }}>
              <ul className="list-group">
                {this.state.todoList.map((item) => <li key={item.counter} className='list-group-item list-group-item-primary'  style={{ width: 300, fontSize: 20 }}>
                <strong>{this.state.todoList.findIndex(x => x.name === item.name)+1+'. '}{item.name}</strong><span>
                <li className='list-group-item list-group-item-warning' style={{ width: 160 }}><strong>{'Status: '}{this.state.completed}</strong>
                </li></span><button onClick={this.removeTodo.bind(null,item.counter)} className="btn btn-danger" style={{ marginTop: 10 }}>remove</button><App name={item.name} status={item.completed} state={this.state} changeCompleted={this.changeCompleted}/></li>)}
                </ul>
              </pre>
             <div className="form-group">
             <button className="btn btn-info" onClick={this.addTodo}>Add Todo List here</button>
             </div>
             </form>
            </div>
          </div>
        );
    }
}



ReactDOM.render( < Main / > , document.getElementById('root'));
