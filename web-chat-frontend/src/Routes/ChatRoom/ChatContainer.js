import React from "react";
import {  useQuery } from "react-apollo-hooks";
import { SEE_USER } from "./ChatQueries";
import ChatPresenter from "./ChatPresenter";

export default () => {
    const { data, loading} = useQuery(SEE_USER);
    return <ChatPresenter data= {data} loading={loading}/>
}