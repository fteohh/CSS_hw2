import React from "react";
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import notes from "../notes";

function App() {
  return (
      <div>
          <Header />
          <Footer />
          <dl>{notes.map(Note)}</dl>
      </div>
  );
}

export default App;