import Todo from './components/Todo/Todo'



function App() {
  return(
    <>
      <Todo></Todo>
    </>
  )
}

export default App

/*
1) we need to create a static webpage version 
2) we need to figure out where to add dynamic nature to webpage i.e, adding state
3) Divide the code you have written into components if possible
4) Check if the logic and code are working with tests 
5) Primary Reason where if we have a component which has a scope to increase its scale
then we need to seperate those components
6) Both Lists and Input Components can be scaled up so thats the reason we are diving them
into different components 
or
that inorder scale we need to focus on these components seperatly, so that the reason we
are dividing them
7) whenever we are actually communicating with child elements we will use props to send the
data from parent to child
8) whenever we want to have communications from child to parent then we need send a function
to the parent , where parent will use the result of the function and update the state variables
that it have.
9) In react we dont have the thing know as child to child communication, which is
here we need to communicate with sibling elements through parent component only
as in react we have a tree structure of representation between child and parent.
*/
