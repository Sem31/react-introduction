import { useState } from "react";
import { DisplayDifficulty } from "./Components/DisplayDifficulty/DisplayDifficulty";
import { MenuList } from "./Components/MenuList/MenuList";
import s from "./style.module.css";

export function App() {
  const [currentItem, setCurrentItem] = useState("");

  const HandleCurrentItem = (value) => {
    setCurrentItem(value);
  };

  return (
    <div>
      <p className={s.p}>Choose Your React Course difficulty</p>
      <div className={s.workspace}>
        <MenuList difficulty={currentItem} onItemSelect={HandleCurrentItem} />
        <DisplayDifficulty difficulty={currentItem} />
      </div>
    </div>
  );
}
