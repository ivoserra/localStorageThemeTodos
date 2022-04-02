import React from "react"

// createContext takes in the default value
// The real values will be provided later, by our context Provider
export const UserContext = React.createContext({
    user: null,
    theme:'lightblue',
    todos:[
        { id: 58477, user: 1, text: "WashDishes", done: false },
        { id: 64851, user: 1, text: "Bake a cake", done: true },
        { id: 59858, user: 2, text: "Make a website", done: true },
    ],
    
});
