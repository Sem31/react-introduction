import { useState } from "react";
import { AgeDisplay } from "./AgeDisplay";


export function AgeCounter(props) {
    const [age, setAge] = useState(30);

    function incrementAge() {
        setAge(age + 1);
    }

    function decrementAge() {
        setAge(age - 1);
    }

    return (
        <div>
            <button onClick={incrementAge}>Increment Age</button>
            <button onClick={decrementAge}>Decrement Age</button>
            <AgeDisplay age={age} />
        </div>
    )
}