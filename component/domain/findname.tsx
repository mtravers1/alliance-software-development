import React from "react";
import styled from "styled-components";

export const Findname = ({}) => {
  return (
    <StepRootRootRoot style={{marginTop:"100px"}}>
      <Text1>How to Find the Ideal Name for a Domain</Text1>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus vene
      </Paragraph>
      <NewGroup>
        <Container3>
          <Text2>01</Text2>
          <Text3>Know Your Audience</Text3>
        </Container3>
        <Container2>
          <Text4>02</Text4>
          <Text3>Research Keywords</Text3>
        </Container2>
        <Container2>
          <Text6>03</Text6>
          <Text3>Less and Simple</Text3>
        </Container2>
        <Container2>
          <Text8>04</Text8>
          <Text3>Be the First</Text3>
        </Container2>
      </NewGroup>
      <Illustration />
    </StepRootRootRoot>
  );
};

const Text3 = styled.div`
  width: 248px;
  color: #e6e6e6;
  font-size: 16px;
  font-family: Inter;
  line-height: 32px;
  text-align: center;
`;
const Container2 = styled.div`
  height: 168px;
  gap: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 24px;
  border-radius: 16px;
  background-color: #ffffff;
`;
const StepRootRootRoot = styled.div`
  height: 992px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Text1 = styled.div`
  width: 1024px;
  margin: 0px 0px 24px 0px;
  color: #2e2e2e;
  font-size: 64px;
  font-weight: 700;
  font-family: Inter;
  line-height: 88px;
  text-align: center;
`;
const Paragraph = styled.div`
  width: 608px;
  margin: 0px 0px 40px 0px;
  color: #7f7f7f;
  font-size: 16px;
  font-family: Inter;
  line-height: 32px;
  text-align: center;
`;
const NewGroup = styled.div`
  width: 1232px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0px 0px 40px 0px;
`;
const Container3 = styled.div`
  height: 168px;
  gap: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 24px;
  border-radius: 16px;
  background-color: #555555;
`;
const Text2 = styled.div`
  color: #ffffff;
  font-size: 64px;
  font-weight: 700;
  font-family: Inter;
  line-height: 88px;
  text-align: center;
  white-space: nowrap;
`;
const Text4 = styled.div`
  align-self: flex-end;
  margin: 0px 81px 0px 0px;
  color: #7f7f7f;
  font-size: 64px;
  font-weight: 700;
  font-family: Inter;
  line-height: 88px;
  text-align: center;
  white-space: nowrap;
`;
const Text6 = styled.div`
  align-self: flex-end;
  margin: 0px 80px 0px 0px;
  color: #7f7f7f;
  font-size: 64px;
  font-weight: 700;
  font-family: Inter;
  line-height: 88px;
  text-align: center;
  white-space: nowrap;
`;
const Text8 = styled.div`
  color: #7f7f7f;
  font-size: 64px;
  font-weight: 700;
  font-family: Inter;
  line-height: 88px;
  text-align: center;
  white-space: nowrap;
`;
const Illustration = styled.div`
  width: 1232px;
  height: 480px;
  border-radius: 8px;
  background-color: #ebebeb;
`;
