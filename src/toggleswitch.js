import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export class Toggle extends React.Component{
   constructor(props){
       super(props);
       
   }

   isChecked(e){
       e.preventDefault();
       console.log(this.props.state);
       if(document.getElementById('myonoffswitch').checked){
        
            if(this.props.state.completed === 'yes'){
                this.props.changeCompleted('yes');
            } 
            else {
               this.props.changeCompleted('no');
            }

            console.log(this.props.state);
       }

   }
 
    render(){
        return (
             <div class="onoffswitch">
              <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch"/>
                 <label class="onoffswitch-label" for="myonoffswitch">
                    <span class="onoffswitch-inner"></span>
                    <span class="onoffswitch-switch"></span>
                </label>
                <button onClick={this.isChecked.bind(this)}>Save</button>
            </div>
        );
    }
} 