import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Notes from "./../notes";

function createNote(items) {
  return <Note key={items.key} title={items.title} content={items.content} />;
}
function App() {
  return (
    <div>
      <Header />
      <div className="Notes">{Notes.map(createNote)} </div>
      <Footer />
    </div>
  );
}

export default App;
