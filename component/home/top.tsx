import React from "react";
import styled from "styled-components";

export const Top = ({}) => {
  const Button1Function = () => {
    alert(` was clicked`);
  };
  return (
    <HeroRootRootRoot>
      <NewGroup>
        <Group2>
          <Paragraph>
            It’s time to bring <br />
            your concept to <br />
            reality with ASD
          </Paragraph>
          <Paragraph1>
            Anything you can imagine can be built for you by our world class
            team
          </Paragraph1>
        </Group2>
        <Button1 onClick={() => Button1Function()}>
          <ActiveButton>Get Started Today!</ActiveButton>
        </Button1>
      </NewGroup>
      <Illustration />
    </HeroRootRootRoot>
  );
};

const HeroRootRootRoot = styled.div`
  width: 1232px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom:100px;
  margin-top:20px
  margin:auto
`;
const NewGroup = styled.div`
  gap: 72px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Group2 = styled.div`
  gap: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Paragraph = styled.div`
  width: 608px;
  color: #2e2e2e;
  font-size: 64px;
  font-weight: 700;
  font-family: Inter;
  line-height: 88px;
`;
const Paragraph1 = styled.div`
  width: 608px;
  color: #7f7f7f;
  font-size: 16px;
  font-family: Inter;
  line-height: 32px;
`;
const Button1 = styled.button`
  height: 48px;
  gap: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  align-items: center;
  padding: 0px;
  padding-right: 17px;
  padding-left: 17px;
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
const Illustration = styled.div`
  width: 504px;
  height: 520px;
  border-radius: 8px;
  background-color: #ebebeb;
`;
