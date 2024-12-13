import { useState } from 'react'
import s from './style.module.css'

export function MenuListItems(props) {
    const [isHover, setIsHover] = useState(false);

    const activate = () => {
        setIsHover(true);
    }

    const deactivate = () => {
        setIsHover(false);
    }

    function getBackgroundColor() {
      if (isHover) {
        return "#a5e9ff";
      } else if (props.isSelected) {
        return "#26baea";
      } else {
        return "#eff0ef";
      }
    }


    return <div className={s.container} onMouseEnter={activate} onMouseLeave={deactivate}
    style={{ backgroundColor: getBackgroundColor()}}
    onClick={() => props.onClick(props.difficulty)}>
        Set to : {props.difficulty}
    </div>
}