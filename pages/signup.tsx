import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Signup = ({}) => {
  const ButtonBaseFunction = () => {
    alert(` clicked`);
  };
  return (
    <InputsRootRootRoot>
      <Image1 src={`https://file.rendit.io/n/CKirmeUIsPDUAlDhlS51.png`} />
      <WhiteFlexColumn>
        <Text2>Name</Text2>
        <Name1>
          <Text3>Your full name</Text3>
        </Name1>
        <Text4>Email</Text4>
        <Email1>
          <Text5>Your email address</Text5>
        </Email1>
        <Text6>Password</Text6>
        <Email>
          <Text7>Your password</Text7>
        </Email>
        <FlexRow>
          <SwitchBase>
            <Ellipse
              src={`https://file.rendit.io/n/0T0Hylt3TAYTwUpOYegN.svg`}
            />
          </SwitchBase>
          <RememberMe>Remember me </RememberMe>
        </FlexRow>
        <ButtonBase onClick={() => ButtonBaseFunction()}>
          <Text1>SIGN UP</Text1>
          <Content />
        </ButtonBase>
        <Text8>
          Already have an account?<Text9> </Text9>
          <Text10><Link href="./login">Sign in</Link></Text10>
        </Text8>
      </WhiteFlexColumn>
    </InputsRootRootRoot>
  );
};

export default Signup;

const InputsRootRootRoot = styled.div`
  width: 100%;
  position: relative;
  gap: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const Image1 = styled.img`
  
  height: 450px;
  position: relative;
`;
const WhiteFlexColumn = styled.div`
//   height: 438px;
  left: 484px;
  top: 203px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 78px 51.5px 65px 51px;
  border-radius: 15px;
  background-color: #ffffff;
  box-shadow: 0px 7px 23px 0px rgba(0, 0, 0, 0.05);
`;
const Text2 = styled.div`
  width: 37.5px;
  height: 19.5px;
  align-self: flex-start;
  margin: 0px 0px 7.9px 4.5px;
  color: #2d3748;
  font-size: 14px;
  font-family: Helvetica;
  line-height: 19.59999966621399px;
`;
const Name1 = styled.div`
  height: 48.29296875px;
  gap: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 21.3px 0px;
  padding: 0px 240px 0px 19px;
  border-width: 1px;
  border-radius: 15px;
  border-style: solid;
  border-color: #e2e8f0;
  background-color: #ffffff;
  overflow: hidden;
`;
const Text3 = styled.div`
  width: 89.5px;
  height: 19.5px;
  color: #a0aec0;
  font-size: 14px;
  font-family: Helvetica;
  line-height: 19.59999966621399px;
`;
const Text4 = styled.div`
  width: 35.5px;
  height: 19.5px;
  align-self: flex-start;
  margin: 0px 0px 8.48px 4.5px;
  color: #2d3748;
  font-size: 14px;
  font-family: Helvetica;
  line-height: 19.59999966621399px;
`;
const Email1 = styled.div`
  height: 48.29296875px;
  gap: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 20.7px 0px;
  padding: 0px 210px 0px 19px;
  border-width: 1px;
  border-radius: 15px;
  border-style: solid;
  border-color: #e2e8f0;
  background-color: #ffffff;
  overflow: hidden;
`;
const Text5 = styled.div`
  width: 120px;
  height: 19.5px;
  color: #a0aec0;
  font-size: 14px;
  font-family: Helvetica;
  line-height: 19.59999966621399px;
`;
const Text6 = styled.div`
  width: 61.5px;
  height: 19.5px;
  align-self: flex-start;
  margin: 0px 0px 9.06px 4.5px;
  color: #2d3748;
  font-size: 14px;
  font-family: Helvetica;
  line-height: 19.59999966621399px;
`;
const Email = styled.div`
  height: 48.29296875px;
  gap: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 20.1px 0px;
  padding: 0px 237px 0px 19px;
  border-width: 1px;
  border-radius: 15px;
  border-style: solid;
  border-color: #e2e8f0;
  background-color: #ffffff;
  overflow: hidden;
`;
const Text7 = styled.div`
  width: 92.5px;
  height: 19.5px;
  color: #a0aec0;
  font-size: 14px;
  font-family: Helvetica;
  line-height: 19.59999966621399px;
`;
const FlexRow = styled.div`
  width: 350px;
  height: 22.6px;
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 36.2px 0px;
`;
const SwitchBase = styled.div`
  height: 18.6083984375px;
  gap: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-end;
  align-items: center;
  padding: 0px 2.5px 0px 20px;
  border-radius: 97.7px;
  background-color: #ffba00;
  overflow: hidden;
`;
const Ellipse = styled.img`
  width: 13.5px;
  height: 13.5px;
`;
const RememberMe = styled.div`
  width: 79.5px;
  height: 18px;
  color: #2d3748;
  font-size: 12px;
  font-family: Helvetica;
  line-height: 18px;
  white-space: pre-wrap;
`;
const ButtonBase = styled.button`
  gap: 4.5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0px 0px 17.4px 0px;
  padding: 0px;
  padding-top: 15.1px;
  padding-right: 154px;
  padding-bottom: 10.6px;
  padding-left: 154px;
  border-width: 0px;
  border-radius: 12px;
  box-sizing: content-box;
  background-color: #ffba00;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  } ;
`;
const Text1 = styled.div`
  width: 41.5px;
  height: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 10px;
  font-weight: 700;
  font-family: Helvetica;
  line-height: 15px;
  text-align: center;
`;
const Content = styled.div`
  height: 0px;
  background-color: #c4c4c4;
`;
const Text8 = styled.div`
  width: 213px;
  height: 19.5px;
  color: #a0aec0;
  font-size: 14px;
  font-family: Helvetica;
  line-height: 19.59999966621399px;
  text-align: center;
`;
const Text9 = styled.div`
  display: contents;
  color: #a0aec0;
  font-size: 14px;
  font-weight: 700;
  font-family: Helvetica;
  line-height: 19.59999966621399px;
  white-space: pre-wrap;
`;
const Text10 = styled.div`
  display: contents;
  color: #ffba00;
  font-size: 14px;
  font-weight: 700;
  font-family: Helvetica;
  line-height: 19.59999966621399px;
`;
