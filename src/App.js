// import { AgeCounter } from "./AgeCounter";

// export function App() {
//   return (
//     // <div>
//     //   <h1>Welcome to the React world</h1>
//     //   <Greetings
//     //     firstName={"Rachel"}
//     //     lastName={"Green"}
//     //     age={30}
//     //     car={{ brand: "Viper", color: "red", speed: 200 }}
//     //     doSomething={function () {
//     //       console.log("BBLABAEALZKELAZKE");
//     //     }}
//     //   >
//     //     <img src="https://picsum.photos/200/300" />
//     //   </Greetings>
//     // </div>
//     <div>
//       {/* <input
//         type="checkbox"
//         checked
//         onChange={function () {
//           console.log("You clicked");
//         }}
//       />
//       <h1>Welcome to the React world</h1>
//       <Greetings
//         firstName="Rachel"
//         lastName={"Green"}
//         age={101}
//         car={{ brand: "Viper", color: "red", speed: 200 }}
//         doSomething={function () {
//           console.log("GLAHEA GLAEAZ");
//         }}
//       >
//         <img src="https://picsum/200/300" />
//       </Greetings> */}

//       <AgeCounter />
//     </div>
//   );
// }

import "./global.css";
import { Car } from "./Components/Car/Car";
import { Greetings } from "./Components/Greetings/Greetings";
export function App() {
  return (
    <div>
      <Car />
      <Greetings />
    </div>
  );
}
