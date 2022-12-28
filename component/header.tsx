import React from "react";
import styled from 'styled-components';
import Link from "next/link";
export const Header = ({}) => {
  const Button1Function = () => {
    alert(`was clicked`);
  };
  return (
    <NewRootRootRootRoot>
      <Container>
        <Link href="./"><Image1 src={`https://file.rendit.io/n/LWKypLKsROHg9A8UFfGE.png`} /></Link>
        <Text1>
            <option>Hosting
                </option></Text1>
        
        <ArrowChevronDown
          src={`https://file.rendit.io/n/b4AmT9sRKKNjCNguc5XR.svg`}
        />
        <Text1>
            <option>Domain</option></Text1>
        <ArrowChevronDown
          src={`https://file.rendit.io/n/b4AmT9sRKKNjCNguc5XR.svg`}
        />
        <Text3>Email</Text3>
        <Text3>Website Builder</Text3>
        <Text5>Pricing</Text5>
        <Button1 >
          <Link href="./login"><ActiveButton>Login</ActiveButton></Link>
        </Button1>
      </Container>
    </NewRootRootRootRoot>
  );
};

const Text1 = styled.select`
  margin: 12px 8px 0px 0px;
  color: #2e2e2e;
  font-size: 16px;
  font-family: Inter;
  line-height: 24px;
  white-space: nowrap;
`;
const ArrowChevronDown = styled.img`
  width: 24px;
  height: 24px;
  margin: 12px 48px 0px 0px;
`;
const Text3 = styled.button`
    border:none;
    cursor:pointer;
    background:none;
  margin: 12px 48px 0px 0px;
  color: #2e2e2e;
  font-size: 16px;
  font-family: Inter;
  line-height: 24px;
  white-space: nowrap;
`;
const NewRootRootRootRoot = styled.div`
    
  gap: 0px;
  display: flex;
  flex-direction: column;
//   justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  align-items:center;

  
`;
const Container = styled.div`
  width: 1440px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 32px 0px 3px 0px;
  background-color: #ffffff;
`;
const Image1 = styled.img`
  width: 81px;
  height: 85px;
  align-self: center;
  margin: 0px 243px 0px 0px;
`;
const Text5 = styled.button`
    background:none;
    border:none;
  margin: 12px 204px 0px 0px;
  color: #2e2e2e;
  font-size: 16px;
  font-family: Inter;
  line-height: 24px;
  white-space: nowrap;
  cursor:pointer
`;
const Button1 = styled.button`
  height: 48px;
  gap: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4px 0px 0px 0px;
  padding: 0px;
  padding-right: 41.5px;
  padding-left: 41.5px;
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
