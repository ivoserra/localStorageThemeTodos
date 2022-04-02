import { useState, useEffect } from 'react';
import Heading from './components/Heading';
import Login from './components/Login';
import TodoList from './components/TodoList';

import { UserContext } from './contexts/UserContext';


import './App.scss';



function App() {

 // Here we are defining where the "user" state actually exists


  const [user, setUser] = useState( null )
  const [theme, setTheme ] = useState('');

  const [todos, setTodos ]= useState([
        { id: 58477, user: 1, text: "WashDishes", done: false },
        { id: 64851, user: 1, text: "Bake a cake", done: true },
        { id: 59858, user: 2, text: "Make a website", done: true },
    ] );

  console.log('im local ' ,localStorage)
  useEffect(()=>{
    const currentUser = JSON.parse(localStorage.getItem('user'))
    if(currentUser){setUser(currentUser)}

    const currentTheme = JSON.parse(localStorage.getItem('theme'))
    if(currentTheme){setTheme(currentTheme)}

    const currentTodo = JSON.parse(localStorage.getItem('todos'))
    if(currentTodo){setTodos(currentTodo)}
    console.log('load once')

  },[])


  useEffect(()=>{ 
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('theme',JSON.stringify(theme))
    localStorage.setItem('todos',JSON.stringify(todos))
    // console.log(user) 
    // console.log(theme)
    // console.log(todos)
    
  },[user, theme, todos])

  
  const contextUser = { user, setUser, theme, setTheme, todos, setTodos}
 



  return (
   <UserContext.Provider value={contextUser}>
  
      <div className={ theme === 'dark' ? 'App lightgreen': 'App lightblue'}>
          <h1>TODO</h1>

          { user && <Heading />}
          { user && <TodoList />}
          {!user && <Login />}

      </div>
    
  </UserContext.Provider> 
   
  );
}

export default App;
