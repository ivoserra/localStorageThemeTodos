import { useContext } from 'react';

// file
import { UserContext } from '../contexts/UserContext'



function TodoListItem({ todo, deleteTodo, doneTodo }) {

    const { user, theme } = useContext(UserContext);
    // console.log(user)
    // console.log(theme)

    // Charles is not the user from  the post Make website
    const mine = todo.user === user.id;
    //console.log(todo.user, user.id)


    return(
        <li className={mine ? `${theme} my-todo`: ''} >
            {todo.done ? "✓ " : "○ "}
            {todo.text}
            {mine && <>
                <button onClick={() => deleteTodo(todo)}>
                    delete
                </button>
               
                <button onClick={()=> doneTodo(todo)}>
                    done
                </button>
                </>
            }
        </li>
    );
}

export default TodoListItem;