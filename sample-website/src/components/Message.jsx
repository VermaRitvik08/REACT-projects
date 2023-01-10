import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 90%;
  background-color: #E4DBC9;
`;
const Wrap = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;`

const Input = styled.input`
  width: 400px;
  padding: 20px;
  margin: 10px;
  border-radius: 20px;
  border: none;
`;
const TextArea = styled.textarea`
  height: 100px;
  width: 400px;
  padding: 20px;
  margin: 10px;
  border-radius: 20px;
  border: none;
`;

const Button = styled.button`
  border: none;
  padding: 20px;
  padding-left: 150px;
  padding-right: 150px;
  background-color: #9C9583;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;
`

const Message = () => {
  return (
  <Container>
    <Wrap>
        <Form>
            <h1>Contact Us</h1>
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <TextArea placeholder="Message" />
            <Button>Send</Button>
        </Form>
    </Wrap>
  </Container>
  )
};

export default Message;
