import React from 'react';
import styled from 'styled-components';
import UserHeader from './UserHeader';
import RoomHeader from './RoomHeader';

const WrapHeader = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);

`

const GridUser = styled.div`
  grid-column: 1 / 2;

`

const GridRoom = styled.div`
  grid-column: 2 / 5;

`


export default () => (
    <WrapHeader>
        <GridUser>
            <UserHeader />
        </GridUser>
        <GridRoom>
            <RoomHeader />
        </GridRoom>
    </WrapHeader>
);