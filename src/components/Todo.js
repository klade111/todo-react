import React, { Component } from 'react'

class Todo extends Component {
    state = {
        input: '',
        todolist: [
            {
                text: 'item1',
                isComplite:false
            },
            {
                text: 'item2',
                isComplite:false
            },
        ],
    }
    hundleChange = (e) => {
        this.setState({
            input: e.target.value
        })

    }
    hundelAdd = () => {
        this.state.todolist.push({ text: this.state.input })
        this.setState({
            todolist: this.state.todolist,
            input:""
        })
    }
    handleDelete=(i)=>{
        this.setState({
            todolist:this.state.todolist.filter((el,index)=> index!==i)
        })
    
    };
    handleComplite=(i)=>{
        const newObject={...this.state.todolist[i],isComplite:!this.state.todolist[i].isComplite}
        console.log('newObject', newObject)
        this.state.todolist.splice(i,1,newObject)
        this.setState({list:this.state.todolist})
    }


    render() {
        
        return (

            <div className='container'>
                <div className='task-input'>
                    <h1 className='title'>TO-DO APP</h1>
                    <span style={{ float: 'right' }}>Add New Todo</span>
                    <input className='input-inner' type='text' value={this.state.input} onChange={this.hundleChange} />
                    <button onClick={this.hundelAdd} className="btn btn-primary">ADD</button>
                </div>
                <div>
                    <ul>
                        {this.state.todolist.map((el,i)=> {
                            return <li> <p className='text' style={{ textDecoration: el.isComplite ?"line-through":"none" }} >{el.text}</p>
                                <button onClick={()=>this.handleComplite(i)}>{el.isComplite ? "undo":"complete"}</button>
                                <button onClick={()=>this.handleDelete(i)}>delete</button>
                            </li>
                        })}
                    </ul>

                </div>


            </div>

        )
    }
}
export default Todo