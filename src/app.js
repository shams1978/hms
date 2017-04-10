// /**
//  | -----------------------------------------------------------------------------
//  | create css styles.css in dist folder
//  | -----------------------------------------------------------------------------
//  */
// require('./app.scss');
// require('./css/index.scss');
//
//
import React from 'react';
import ReactDOM from 'react-dom';

import Reactable from 'reactable';
var Table = Reactable.Table;



const url = 'http://localhost:3000/api/users';


class Square extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: 'Sadik',
            age: 30,
            users: null
        }
    }// constructor

    componentDidMount(){

        fetch(url).then(res => res.json())
        .then(res => {
            this.setState({
                users: res
            })
        })
    }

    render() {
        return (
            <Table className="table" id="table" data={this.state.users}
                itemsPerPage={4}
                pageButtonLimit={5}
                defaultSort={{column: 'name', direction: 'desc'}}
                filterable={['name']}
            />
        )
    }// render


}//class

ReactDOM.render(
    <Square />,
    document.getElementById('table')
);

// import React from 'react';
// import ReactDOM from 'react-dom';
//
//
// import TodoItem from './todoComponent/todoItem';
// import AddItem from './todoComponent/addItem';
//
// import Calculation from './calculation/app';
//
// class TodoComponent extends React.Component {
//
//     constructor(props){
//         super(props);
//
//         this.state = {
//                 todos: ['Wash Up', 'Eat Some Cheese', 'Take a nap']
//         }
//
//         this.onDelete = this.onDelete.bind(this);
//     }//constructor
//
//     // componentDidMount(){
//     //     this.setState({
//     //         todos: ['Hi Wash Up', 'Eat Some Cheese..', 'Take a nap']
//     //     })
//     // }
//
//     render(){
//
//         var todos = this.state.todos;
//
//         todos = todos.map( (item, index) => {
//                 return (
//                     <TodoItem item={item} key={index} onDelete={this.onDelete}/>
//                 );
//         });
//
//
//         return (
//
//         <div>
//             <ul>{todos}</ul>
//
//             <AddItem onAdd={ (e) => this.onAdd(e)}/>
//
//         </div>
//         )//return
//     }//render
//
//     onDelete(item){
//
//         var updateTodos = this.state.todos.filter( (val, index) => {
//             return (
//                 item !== val
//             )
//         })
//
//         this.setState({
//             todos: updateTodos
//         })
//
//     }
//
//     onAdd(item){
//         var updateTodos = this.state.todos;
//
//         updateTodos.push(item);
//
//         this.setState({
//             todos: updateTodos
//         })
//
//
//     }
//
//     componentWillMount(){
//         console.log('componentWillMount')
//     }
//
//     componentDidMount(){
//         console.log('componentDidMount')
//     }
//
//     componentWillUpdate(){
//         console.log('componentWillUpdate')
//     }
// }//Test class
//
// ReactDOM.render(<TodoComponent />, document.getElementById('table'));
