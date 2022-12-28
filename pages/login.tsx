import React from "react";
import styled from "styled-components";
import Link from "next/link";
const LogIn= ({}) => {
  const ButtonBaseFunction = () => {
    alert(` was clicked`);
  };
  return (
    <LogInScreenRootRootRoot>
      <NewGroup>
        <Text2>Welcome Back</Text2>
        <Text3>Enter your email and password to sign in</Text3>
        <Text4>Email</Text4>
        <Email1>
          <Text5>Your email address</Text5>
        </Email1>
        <Text6>Password</Text6>
        <Email>
          <Text7>Your password</Text7>
        </Email>
        <Group2>
          <SwitchBase>
            <Ellipse
              src={`https://file.rendit.io/n/XCfJNhKZKT2i11uZ88JB.svg`}
            />
          </SwitchBase>
          <RememberMe>Remember me </RememberMe>
        </Group2>
        <ButtonBase >
          <Text1><Link href="./">SIGN IN</Link></Text1>
          <Content />
        </ButtonBase>
        <Text8>
          Don't have an account?<Text9> </Text9>
         <Text10> <Link href="./signup">Sign up</Link></Text10>
        </Text8>
      </NewGroup>
      <Image1 src={`https://file.rendit.io/n/WHnDR97mZU4e7WHxc8AE.png`} />
    </LogInScreenRootRootRoot>
  );
};

export default LogIn;

const LogInScreenRootRootRoot = styled.div`
//   width: 1196px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 0px 202px 244px;
  background-color: #ffffff;
  overflow: hidden;
`;
const NewGroup = styled.div`
  height: 445px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  align-items: flex-start;
  margin: 188px 0px 0px 0px;
`;
const Text2 = styled.div`
  width: 226px;
  height: 42px;
  margin: 0px 0px 8.5px 0px;
  color: #ffba00;
  font-size: 32px;
  font-weight: 700;
  font-family: Helvetica;
  line-height: 41.599998474121094px;
  text-align: center;
`;
const Text3 = styled.div`
  width: 275px;
  height: 19.5px;
  margin: 0px 0px 36px 4.5px;
  color: #a0aec0;
  font-size: 14px;
  font-weight: 700;
  font-family: Helvetica;
  line-height: 19.60000100135801px;
  text-align: center;
`;
const Text4 = styled.div`
  width: 35.5px;
  height: 19.5px;
  margin: 0px 0px 5.5px 7.5px;
  color: #2d3748;
  font-size: 14px;
  font-family: Helvetica;
  line-height: 19.60000100135801px;
`;
const Email1 = styled.div`
  height: 48px;
  gap: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-end;
  align-items: center;
  margin: 0px 0px 24px 0px;
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
  line-height: 19.60000100135801px;
`;
const Text6 = styled.div`
  width: 61.5px;
  height: 19.5px;
  margin: 0px 0px 5.5px 7.5px;
  color: #2d3748;
  font-size: 14px;
  font-family: Helvetica;
  line-height: 19.60000100135801px;
`;
const Email = styled.div`
  height: 48px;
  gap: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-end;
  align-items: center;
  margin: 0px 0px 24px 0px;
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
  line-height: 19.60000100135801px;
`;
const Group2 = styled.div`
  width: 347px;
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: center;
  align-items: center;
  margin: 0px 0px 36px 0px;
  padding: 0px 3px;
`;
const SwitchBase = styled.div`
  height: 18.5px;
  gap: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  align-self: flex-start;
  color: #2d3748;
  font-size: 12px;
  font-family: Helvetica;
  line-height: 18.000001430511475px;
  white-space: pre-wrap;
`;
const ButtonBase = styled.button`
  gap: 4.5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-end;
  align-items: center;
  margin: 0px 0px 22px 0px;
  padding: 0px;
  padding-top: 15px;
  padding-right: 156px;
  padding-bottom: 10.5px;
  padding-left: 156px;
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
  width: 37.5px;
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
  width: 203px;
  height: 19.5px;
  align-self: flex-end;
  margin: 0px 73.5px 0px 0px;
  color: #a0aec0;
  font-size: 14px;
  font-family: Helvetica;
  line-height: 19.60000100135801px;
  text-align: center;
`;
const Text9 = styled.div`
  display: contents;
  color: #a0aec0;
  font-size: 14px;
  font-weight: 700;
  font-family: Helvetica;
  line-height: 19.60000100135801px;
  white-space: pre-wrap;
`;
const Text10 = styled.button`
  display: contents;
  color: #ffba00;
  font-size: 14px;
  font-weight: 700;
  font-family: Helvetica;
  line-height: 19.60000100135801px;
`;
const Image1 = styled.img`
  width: 720px;
  height: 822px;
  margin-left:200px;
`;
