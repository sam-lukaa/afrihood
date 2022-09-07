import React from "react";
import { NavBar, Main } from "layouts";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import {Home} from "pages";

function App(): JSX.Element {
  return (
    <>
      <NavBar />
      <Main>
        <Home />      
      </Main>

    </>
  );
}

export default App;
