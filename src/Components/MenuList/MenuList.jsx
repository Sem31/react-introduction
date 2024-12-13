
import { MenuListItems } from '../MenuListItem/MenuListItems'
import s from './style.module.css'
import { DIFFICUTLIES } from "./constant";

export function MenuList(props) {

    return <div className={s.container}>
        {DIFFICUTLIES.map((item) =>
            <MenuListItems isSelected={props.difficulty === item} difficulty={item} onClick={props.onItemSelect}/>
        )}
    </div>
}
