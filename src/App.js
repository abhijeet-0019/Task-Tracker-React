import { useState } from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks';
import Addtask from './components/Addtask';

function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: '5451',
      reminder: true, 
    },
    {
      id: 2,
      text: 'Ello there mate',
      day: '5787v m d1',
      reminder: true, 
    },
    {
      id: 3,
      text: 'going to theatere',
      day: '5dd1',
      reminder: true, 
    }
  ])


  //add Task
  const addTask=(task)=>{
    const id = Math.floor(Math.random()*10000)+1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
    console.log(tasks)
  }

  // show form, commmented because i am changing the state inline at the header componnet itself
  // const showForm = ()=> {
  //   console.log("ello there mate")
  //   setShowAddTask(!showAddTask)
  // }


  //delete task
  const deleteTask=(id)=>{
    // console.log('delete', id)
    setTasks(tasks.filter((task)=>task.id !==id))
  }

  const setRem = (id) => {
    setTasks(tasks.map((task)=> (task.id  === id)?{...task, reminder: !task.reminder}: task))
  }
  return (
    <div className="container">
      <Header title={"Task Tracker"} showForm={(e)=>setShowAddTask(!showAddTask)} showAddTask={showAddTask}/>
      {showAddTask && <Addtask onAdd={addTask}/>}
      {tasks.length>0?(<Tasks tasks={tasks} onDelete={deleteTask} setRem={setRem}/>):'No tasks to show'}
    </div>
  );
}
export default App;


// class App extends React.Component{
//   render(){
//     return <h1>hello there mate</h1>
//   }
// }
// export default App