import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Note from "./components/note";
import details from "./details";

//this commented function loops through details.js
//i used the alternate arrow function to loop through it insted
// function createNotes(loopNote){
//   return(
//     <Note
//     id = {loopNote.key}
//     title = {loopNote.title}
//     subtitle= {loopNote.content}/>
//   )
// }




function App() {
  return (
    <div className="App">
        <Header />
          {details.map((loopNote) => 
          <Note
            id = {loopNote.key}
            title = {loopNote.title}
            subtitle= {loopNote.content}/>)}
        <Footer/>
    </div>
  );
}

export default App;
