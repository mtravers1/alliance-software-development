import React from "react";
import styled from "styled-components";

export const Questions = ({}) => {
  const Button1Function = () => {
    alert(` `);
  };
  return (
    <BackgroundRootRootRoot>
      <NewGroup>
        <Text1>Frequently Asked Question</Text1>
        <Paragraph>
          Enter your select domain name and choose any extension name in the
          next step (choose between .com, .online, .tech, .site, .net, and more)
        </Paragraph>
      </NewGroup>
      <Container>
        <Text2>Search your question</Text2>
        <Button1 onClick={() => Button1Function()}>
          <ActiveButton>Search</ActiveButton>
        </Button1>
      </Container>
    </BackgroundRootRootRoot>
  );
};

const BackgroundRootRootRoot = styled.div`
  height: 432px;
  gap: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 104px;
  border-radius: 16px;
  background-color: #555555;
`;
const NewGroup = styled.div`
  gap: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Text1 = styled.div`
  width: 1024px;
  color: #ffffff;
  font-size: 64px;
  font-weight: 700;
  font-family: Inter;
  line-height: 88px;
  text-align: center;
`;
const Paragraph = styled.div`
  width: 608px;
  color: #e6e6e6;
  font-size: 16px;
  font-family: Inter;
  line-height: 32px;
  text-align: center;
`;
const Container = styled.div`
  width: 784px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 7px 7px 7px 23px;
  border-width: 1px;
  border-radius: 8px;
  border-style: solid;
  border-color: #cccccc;
  background-color: #ffffff;
`;
const Text2 = styled.div`
  color: #7f7f7f;
  font-size: 16px;
  font-family: Inter;
  line-height: 32px;
  white-space: nowrap;
`;
const Button1 = styled.button`
  height: 48px;
  gap: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  padding-right: 36.5px;
  padding-left: 36.5px;
  border-width: 0px;
  border-radius: 8px;
  box-sizing: content-box;
  background-color: #555555;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  } ;
`;
const ActiveButton = styled.div`
  color: #ffffff;
  font-size: 14px;
  font-family: Inter;
  line-height: 24px;
  white-space: nowrap;
`;
