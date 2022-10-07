import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Note from "./components/note";
import details from "./details";

function createNotes(loopNote){
  return(
    <Note
    id = {loopNote.key}
    title = {loopNote.title}
    subtitle= {loopNote.content}/>
  )
}




function App() {
  return (
    <div className="App">
      <Header />
     {details.map(createNotes)}
      <Footer/>
    </div>
  );
}

export default App;
