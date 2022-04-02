// React
import { useContext } from 'react';

// Components
import TodoListItem from './TodoListItem';
import CreateTodo from './CreateTodo';
import './TodoList.scss'

// useContext
import { UserContext } from '../contexts/UserContext';


function TodoList() {
   
    const { todos, setTodos } = useContext(UserContext)

    function deleteTodo(todo) {
        const newTodos = todos.filter(f => f.id !== todo.id);
        setTodos(newTodos);
    
    }
    
    function doneTodo(todo){
        todo.done= !todo.done
        setTodos([...todos])
 
    }

    function createTodo(todo) {
        setTodos([...todos, todo]);

    }

    return (

        <div todos ={todos} className="todos">
            <CreateTodo createTodo={createTodo} />
            <ul>
                {todos.map(todo =>
                    <TodoListItem
                        key={todo.id}
                        todo={todo}
                        deleteTodo={deleteTodo}
                        doneTodo={doneTodo}
                    />
                )}
            </ul>
        </div>
    );
}

export default TodoList;