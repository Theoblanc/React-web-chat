import React from "react";
import { gql } from "apollo-boost";
import styled, { ThemeProvider } from "styled-components";
import { HashRouter as Router } from "react-router-dom";
import { useQuery } from "react-apollo-hooks";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import Auth from "../Router/Auth"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;


export default () => {
  const {
    data: { isLoggedIn }
  } = useQuery(QUERY);

  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Router>
          <Auth />
        </Router>
        <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />

      </>
    </ThemeProvider>
  );
};