import React from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import RoomChat from "../Components/RoomChat";

const Wrap = styled.div`

`

export default() => (
    <Wrap>
      <Header />
      <RoomChat />
    </Wrap>

);