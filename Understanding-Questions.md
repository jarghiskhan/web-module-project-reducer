# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* The onClick calls handleAddOne
* handleAddOne calls the useReducer's dispatch 
* dispatch refrences the action "addOne"
* addOne is looked at in the actions page which is mapped to ADD_ONE type
* this type is part of the switch in reducers index.js
* the switch returns teh state spread and updates the total.
* TotalDisplay shows the total plus 1.
