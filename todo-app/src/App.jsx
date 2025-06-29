import Header from "./components/Header"
import Tabs from "./components/Tabs"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {

  const todos = [
    {input: 'Hello! Add your first to-do!', complete: true},
    {input: 'Get groceries', complete: false},
    {input: 'Study React.js', complete: false},
    {input: 'Read a book', complete: true},
  ]

  return (
    <>

      <Header todos={todos}/>
      <Tabs todos={todos}/>
      <TodoInput todos={todos}/>
      <TodoList todos={todos}/>

    </>
  )
}

export default App
