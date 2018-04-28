import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Toggle } from './toggleswitch.js';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modal: false,name: ''};

    this.toggle = this.toggle.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  handleChangeName(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    this.toggle();
     }

    

  render() {

var color = this.props.status === 'yes' ? 'green' : 'red';

var status = this.props.status;

var state = this.props.state;

    return (
        
        <div style={{ marginTop: 10 }}>
        <Button color="success" onClick={this.toggle}>Details</Button>
        <Modal isOpen={this.state.modal}>
        <form onSubmit={this.handleSubmit}>
          <ModalHeader></ModalHeader>
          <ModalBody>
              <div className="row">
              <div className="col-lg-12">
             <strong><p style={{ color: 'green' }}>You have selected {this.props.name}</p></strong>
             <strong><p style={{ color: color}}>{this.props.status === 'yes' ? 'You have completed the task!' : 'You have not completed the task yet!'}</p></strong>
            <strong><p>Want to Change status?</p></strong><Toggle status={status} state= {state} changeCompleted={this.props.changeCompleted}/>
             </div>
            </div>
          
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
          </form>
        </Modal>
        </div>
      
    );
  }
}


