import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';

const perspectiveSquareStyles = {
  width: "100%",
  height: "40%",
  backgroundColor: "hsl(195deg, 20%, 86%)",
  position: "fixed",
  bottom: 0,
};

function App() {
  return (
    <>
      <div style={perspectiveSquareStyles}></div>
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;
