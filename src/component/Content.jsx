// import React from 'react'
import styled from "styled-components"
import Counter from "./Counter"

let contentstyle={
  backgroundColor: "red",
  color : "white",
  boxShadow :" 10px 10px 5px black",
  padding:"10px"
}

let Button = styled.button`
background-color: blue;
color : white;
width :100px;
height : 50px;
margin-top : 30px;
`

let NewButton =styled(Button)`
// box-shadow : 10px 10px 3px black;
background-color: red;
margin-top : 5px;
`
let user = "vijay"

function print(){
  // console.log(e.target.innerText);
  // console.log("hello!!!!");
  user = "kumar"
  console.log(user);
} 
  function print1(){
    // console.log(event.target.innerText);
    // console.log("hey hii!!!!");
    user = "kamalesh"
    console.log(user);
    
}





const Content = () => {
  return (
    <main>
      <Counter/>
    </main>
  )
}
export default Content