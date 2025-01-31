import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class Todoitem extends Component {
    // getStyle = ()=>{
    //     if(this.props.todo.complete){
    //         return{ 
    //             textDecoration:'Line-through'
    //         }
    //     }
    //     else{
    //         return{
    //             textDecoration:'none'
    //         }
    //     }
    // }

    getStyle = ()=>{
        return{
            background:'#f4f4f4',
            padding:'10px',
            borderBottom:'1px #ccc dotted',
            textDecoration:this.props.todo.completed ?
            'line-through' : 'none'
        }

    }
   
    render() {
        //destructuring
        const {id,title } = this.props.todo;
        return (
            <div style= {this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />  {''}
                {title}</p>
                <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>x</button>
            </div>
        )
    }
}

Todoitem.propTypes ={
    todo:PropTypes.object.isRequired
  }

  const btnStyle={
      background:'#ff0000',
      color:'#fff',
      border:'none',
      padding:'5px 10px  ',
      borderRadius:'50%',
      cursor:'pointer',
      float:'right',
      
  }
//   const itemStyle = {
//       backgroundColor:'#f4f4f4'
//   }

export default Todoitem 
