import React from "react";
import styled from "styled-components";

export const Story = ({}) => {
  return (
    <StoryRootRootRoot>
      <Text1>Story of ASD</Text1>
      <Paragraph>
        This is our story and how we became the go to for sites and software
      </Paragraph>
      <Illustration />
      <NewGroup>
        <Paragraph1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque sit
          viverra turpis eu. Pellentesque scelerisque nec enim tempus netus mi
          proin viverra eu. Auctor neque, amet, eget elit. Libero nascetur
          porttitor mattis urna et consectetur. Placerat vulputate eget nam
          habitasse. Faucibus tristique nisl, libero quis cursus eu faucibus
          vel. Lobortis est, vel rutrum dictumst sagittis, rhoncus egestas quis
          orci. Ultricies scelerisque donec sagittis ante tristique cursus
          elementum. Mauris, congue eget pretium facilisi quam elit quam.
          Suspendisse dolor feugiat enim lorem diam diam in pharetra. Odio
          vulputate dolor sociis
        </Paragraph1>
        <Paragraph1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque sit
          viverra turpis eu. Pellentesque scelerisque nec enim tempus netus mi
          proin viverra eu. Auctor neque, amet, eget elit. Libero nascetur
          porttitor mattis urna et consectetur. Placerat vulputate eget nam
          habitasse. Faucibus tristique nisl, libero quis cursus eu faucibus
          vel. Lobortis est, vel rutrum dictumst sagittis, rhoncus egestas quis
          orci. Ultricies scelerisque donec sagittis ante tristique cursus
          elementum. Mauris, congue eget pretium facilisi quam elit quam.
          Suspendisse dolor feugiat enim lorem diam diam in pharetra. Odio
          vulputate dolor sociis
        </Paragraph1>
      </NewGroup>
    </StoryRootRootRoot>
  );
};

const Paragraph1 = styled.div`
  width: 608px;
  color: #7f7f7f;
  font-size: 16px;
  font-family: Inter;
  line-height: 32px;
`;
const StoryRootRootRoot = styled.div`
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
  margin: 0px 0px 72px 0px;
  color: #7f7f7f;
  font-size: 16px;
  font-family: Inter;
  line-height: 32px;
  text-align: center;
`;
const Illustration = styled.div`
  width: 1232px;
  height: 480px;
  margin: 0px 0px 40px 0px;
  border-radius: 8px;
  background-color: #ebebeb;
`;
const NewGroup = styled.div`
  gap: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
