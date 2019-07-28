import React from 'react';
import styled, { ThemeProvider } from "styled-components";
import Theme from "../Styles/Theme";
import GlobalStyles from "../Styles/GlobalStyles";
import Auth from "../Router/Auth/AuthPresenter"

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <>
      <GlobalStyles/>
      <Auth>
        
      </Auth>

      </>

    
    </ThemeProvider>
  );
}

export default App;
