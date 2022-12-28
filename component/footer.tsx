import React from "react";
import styled from "styled-components";

export const Footer = ({}) => {
  return (
    <BackgroundRootRootRoot>
      <Image1 src={`https://file.rendit.io/n/GIF32LejnQa5LtJZD6yt.png`} />
      <NewGroup>
        <Text1>Service</Text1>
        <Text2>Domain</Text2>
      </NewGroup>
      <Text3>Hosting</Text3>
      <NewGroup1>
        <Text4>Company</Text4>
        <Text5>About</Text5>
        <Text6>Contact Us</Text6>
      </NewGroup1>
      <NewGroup2>
        <Text4>Help</Text4>
        <Text5>FAQ</Text5>
        <Text6>Help support</Text6>
      </NewGroup2>
    </BackgroundRootRootRoot>
  );
};

const Text4 = styled.div`
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  font-family: Inter;
  line-height: 24px;
  white-space: nowrap;
`;
const Text5 = styled.div`
  color: #e6e6e6;
  font-size: 16px;
  font-family: Inter;
  line-height: 32px;
  white-space: nowrap;
`;
const Text6 = styled.div`
  align-self: center;
  color: #e6e6e6;
  font-size: 16px;
  font-family: Inter;
  line-height: 32px;
  white-space: nowrap;
`;
const BackgroundRootRootRoot = styled.div`
//   width: 1221px;
margin:auto;
width:fit-content;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 80px 115px 320px 104px;
  background-color: #f1bc01;
`;
const Image1 = styled.img`
  width: 81px;
  height: 85px;
  margin: 0px 335px 0px 0px;
`;
const NewGroup = styled.div`
  gap: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 177px 0px 0px;
`;
const Text1 = styled.div`
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  font-family: Inter;
  line-height: 24px;
  white-space: nowrap;
`;
const Text2 = styled.div`
  align-self: flex-start;
  color: #e6e6e6;
  font-size: 16px;
  font-family: Inter;
  line-height: 32px;
  white-space: nowrap;
`;
const Text3 = styled.div`
  margin: 0px 202px 0px 0px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  font-family: Inter;
  line-height: 24px;
  white-space: nowrap;
`;
const NewGroup1 = styled.div`
  height: 136px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
  align-items: flex-start;
  margin: 0px 120px 0px 0px;
`;
const NewGroup2 = styled.div`
  height: 136px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
  align-items: flex-start;
`;
