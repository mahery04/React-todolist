import React, { Component } from 'react'

export default class Todo extends Component {

    state = {
        element:'',
        items:[]
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value //recuperer la valeur entrer dans input et lenregistrer dans [e.target.name]
        })
        //console.log(this.state.element);
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            element : '',
            items : [...this.state.items,{element:this.state.element}] 
            //utilisation de spread operator [...this.state.items]
        })
    }

    deleteItem = (index) => {
        //console.log(index);
        const arr = this.state.items;
        arr.splice(index,1);
        this.setState({
            items:arr
        })
    }

    renderToDo = () =>{
        return this.state.items.map((item,index)=>{
            return (
                <div className="card mb-3" key={index}>
                    <div className="card-body">
                        <h4>{item.element}
                            <i className="fas fa-times"
                            style={{cursor:'pointer',float:'right',color:'red'}}
                            onClick={()=>this.deleteItem(index)} //use arrow function pour passer un parametre
                            >
                            </i>
                        </h4>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <React.Fragment> {/*pour ne pas creer de nouveau <div>*/}
                <div className="card my-3">
                    <div className="card-header">Todo-List</div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="element">Chose a faire</label>
                                <input type="text" className="form-control form-control-lg" 
                                    name="element"
                                    onChange={this.onChange}
                                    value={this.state.element}
                                />
                            </div>
                            <button className="btn btn-primary btn-block">
                                Ajouter une chose a faire!
                            </button>
                        </form>
                    </div>
                </div>
                {this.renderToDo()} {/*afficher la methode renderToDo ici*/}
            </React.Fragment>
        )
    }
}
