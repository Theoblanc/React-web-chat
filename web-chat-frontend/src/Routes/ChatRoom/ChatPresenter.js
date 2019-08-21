import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Header from "../../Components/Header"
import RoomChat from "../../Components/RoomChat"
import Loader from "../../Components/Loader";
import CreateInput from "../../Components/CreateRoom";

const Wrapper = styled.div`
`;


export default  ({ data, loading }) => {
    console.log(data.seeUser)
    if (loading === true) {
        return (
            <>
            </>

        );
      } else if (!loading && data && data.seeUser) {
        return (
            <>
              <Header username={ data.seeUser.username } email= { data.seeUser.email } avatar={ data.seeUser.avatar} rooms={data.seeUser.rooms} />
              <RoomChat />
              <CreateInput />
            </>
        );
    
      }


}