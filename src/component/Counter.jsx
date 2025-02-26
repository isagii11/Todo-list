// import { useState } from "react";
// import styled from "styled-components";
// const Button = styled.button`
//   width: 150px;
//   height: 50px;
//   background-color: blue;
//   color: white;
// `;

// const Counter = () => {
//   // let count =0;

//   let [count, setcount] = useState(0);
//   let [data,setdata] =useState("Error")

//   let Message;

//   // let remainingclick = 10-count

//   if (count < 10) {
//     Message = (
//       <div>
//         <h3>you clicked {count} times</h3>
//         <p> Still {10 - count} more times to reach a 10% discount</p>
//       </div>
//     );
//   } else if (count == 10) {
//     Message = (
//       <div>
//         <h3> you clicked {count} times</h3>
//         <p>You unlocked the 10% discount</p>
//       </div>
//     );
//   }


//   let display=()=>{
//     switch (data) {
//       case "loading": return <Loading/>;
//       break;

//       case "success": return <Success/>
//       break;

//       case "Error": return <Error/>
//       break;
//     }
//   }

//   function hincrease() {
//     // count +=1
//     setcount((prevcount) => prevcount + 1);
//     // console.log(count);
//   }

//   return (
//     <div>
//       <h1> click to unlock rewards 💕</h1>
//       <Button onClick={hincrease}>Click Me!!!!</Button>
      
//       {/* {count >= 10 ? (
//         <p> you unlocked a 10% discount </p>
//       ) : (
//         <p> click 10 times to unlock rewards </p>
//       )}
      
//       {
//         count >= 20 && <p> You're a click master</p>
//       } */}
//       {Message}


//       {display()}



//     </div>
//   );
// };

// export default Counter;


// function Loading() {
//   return(
//     <h6>
//       Loading.......
//     </h6>
//   )  
// }
// function Success() {
//   return(
//     <h6>
//       Successss❤️❤️❤️
//     </h6>
//   )  
// }
// function Error() {
//   return(
//     <h6>
//       Error🤦‍♂️🤦‍♂️🤦‍♂️
//     </h6>
//   )  
// }


