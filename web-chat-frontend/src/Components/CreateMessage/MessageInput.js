import React from 'react'
import styled from 'styled-components';
import Input from '../Input';
import Button from '../Button';

const Form = styled.form`
  flex: none;
  position: relative;
  display: flex;
  align-items: center;
  border-top: 1px solid #e0e0e0;
  height: 3.6rem;
  width: 100%;
    Form > * {
        margin-right: 0.38rem;
    }

`
const MessageInput = styled(Input)`
    padding: 1rem;
    border: 0;
    font-size: 1rem;
    width: 100%;


`

const SendButton = styled(Button)`
  border: 0;
  background: #fff;
  padding: 0;
  cursor: pointer;
  width: 100px;


`
export const CreateMessageForm = ({ submit }) => (
    <Form onSubmit={e => {
        e.preventDefault()
        submit({
            name: e.target[0].value,
            private: e.target.elements[2].checked,
        })
        e.target[0].value = ''
    }}
    >
        <MessageInput placeholder="Send a Message" />
        <SendButton text="전송" type="submit" />


    </Form>
);