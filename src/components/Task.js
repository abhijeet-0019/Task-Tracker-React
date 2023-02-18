import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, setRem }) => {
    return (
        <div className={`task ${task.remainder ? 'reminder': ''}`} onDoubleClick={()=> setRem(task.id) }>
            <h3>
                {task.text}
                {console.log(task.remainder)}
                <FaTimes
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={()=>onDelete(task.id)}
                />
            </h3>
            <p>{task.day}</p>
            <p>{task.remainder}</p>
        </div>
    )
}

export default Task