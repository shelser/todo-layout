
import { ToDo } from "../../models/todo-item"
// import classes from './ListItem.module.scss'
import { Link } from "./ListItem.styled"

export const ListItem = ({ todo }: { todo: ToDo }) => {
    return (
        <Link
            // className={`${classes.link} ${todo.isDone ? classes.done : classes.notDone}`}
            done={todo.isDone}
            target="_blank"
            rel="noreferrer"
            href={`/list/${todo.id}`}>
            {todo.text}
        </Link>
    )
}