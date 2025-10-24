import { ToDoListItem } from "./ToDoListItem/ToDoListItem"
// import './ToDoList.scss'
import { ToDo } from "../../models/todo-item"
import { CompletedList, FailedList, TodoContainer } from "./ToDoList.styled";



export const ToDoList = (props: { todos: ToDo[], updateToDo: Function, deleteToDo: Function }) => {
    

    const checkedList = () => {
        return props.todos
            .filter((item) => !item.isDone)
            .map((item, idx) => {
                return (
                    <ToDoListItem toDoItem={item} key={idx} updateToDo={props.updateToDo} deleteToDo={props.deleteToDo}/>
                )
            })
    };
    const unCheckedList = () => {
        return props.todos
            .filter((item) => item.isDone)
            .map((item, idx) => {
                return (
                    <ToDoListItem toDoItem={item} key={idx} updateToDo={props.updateToDo} deleteToDo={props.deleteToDo}/>
                )
            })
    };
    

    return (
        <TodoContainer>
                <FailedList>
                    {checkedList()}
                </FailedList>
                <CompletedList>
                    {unCheckedList()}
                </CompletedList>
        </TodoContainer>
    )
}