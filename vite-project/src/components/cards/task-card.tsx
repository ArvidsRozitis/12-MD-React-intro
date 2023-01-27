import { ButtonAddTask } from "../buttons/button-add-task";
import { ButtonDelete } from "../buttons/button-delete";
import './card.css';

export function TaskCard () {
    return (
        <div className='card card__container'>
            <h3>List heading</h3>
            <ul>
            <li>task1<button>done</button></li>
            <li>task1<button>done</button></li>
            <li>task1<button>done</button></li>
            <li>task1<button>done</button></li>
            </ul>
            <div className="card__button-wraper">
                <ButtonAddTask />
                <ButtonDelete />
            </div>
        </div>
    )
}

