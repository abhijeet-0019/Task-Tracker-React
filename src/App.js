import { useState } from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks';
import Addtask from './components/Addtask';

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: '5451',
      remainder: true, 
    },
    {
      id: 2,
      text: 'Ello there mate',
      day: '5787v m d1',
      remainder: true, 
    },
    {
      id: 3,
      text: 'going to theatere',
      day: '5dd1',
      remainder: true, 
    }
  ])

  //delete task
  const deleteTask=(id)=>{
    // console.log('delete', id)
    setTasks(tasks.filter((task)=>task.id !==id))
  }

  const setRem = (id) => {
    setTasks(tasks.map((task)=> (task.id  === id)?{...task, remainder: !task.remainder}: task))
    console.log("")
  }
  return (
    <div className="container">
      <Header title={"Task Tracker"} />
      <Addtask />
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