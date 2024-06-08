
interface taskType{
    taskName: string;
  }
interface props{
    task: taskType;
    completeTask(taskNameToDelete:string): void;
}

const Container = ({ task,completeTask}:props) => {
  
    return (
        <div className="  p-6 max-w-md mx-auto h-16 bg-[#15101C] text-[#9E78CF] transition-all rounded-md duration-1000 shadow-lg flex items-center space-x-4 my-10 justify-between ">
            {task.taskName}
            <button className="text-xl flex ml-auto" onClick={() => { completeTask(task.taskName) }}>x</button>
            
        </div>
    )
}

export default Container