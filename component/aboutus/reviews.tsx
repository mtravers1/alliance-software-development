import React from "react";
import styled from "styled-components";

export const Reviews = ({}) => {
  return (
    <ReviewsRootRootRoot style={{marginTop:"100px", marginBottom:"100px"}}>
      <Text1>Customer Reviews</Text1>
      <NewGroup>
        <Paragraph>
          Enter your select domain name and choose any extension name in the
          next step (choose between .com, .online, .tech, .site, .net, and more)
        </Paragraph>
        <Group8>
          <Container2>
            <Paragraph1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque sit
              viverra turpis eu. Pellentesque scelerisque
              {"  "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Paragraph1>
            <FlexRow1>
              <Avatar2
                src={`https://file.rendit.io/n/uGLaBWxr2ZH7Q37NcK8t.svg`}
              />
              <FlexColumn1>
                <Text2>Shoo Phar Dhie</Text2>
                <Text3>Kang Masak</Text3>
              </FlexColumn1>
            </FlexRow1>
          </Container2>
          <Container1>
            <Paragraph1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque sit
              viverra turpis eu. Pellentesque scelerisque
              {"  "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Paragraph1>
            <FlexRow1>
              <Avatar2
                src={`https://file.rendit.io/n/uGLaBWxr2ZH7Q37NcK8t.svg`}
              />
              <FlexColumn1>
                <Text2>Shoo Phar Dhie</Text2>
                <Text3>Kang Masak</Text3>
              </FlexColumn1>
            </FlexRow1>
          </Container1>
          <Container1>
            <Paragraph1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque sit
              viverra turpis eu. Pellentesque scelerisque
              {"  "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Paragraph1>
            <FlexRow1>
              <Avatar2
                src={`https://file.rendit.io/n/uGLaBWxr2ZH7Q37NcK8t.svg`}
              />
              <FlexColumn1>
                <Text2>Shoo Phar Dhie</Text2>
                <Text3>Kang Masak</Text3>
              </FlexColumn1>
            </FlexRow1>
          </Container1>
        </Group8>
      </NewGroup>
    </ReviewsRootRootRoot>
  );
};

const Paragraph1 = styled.div`
  width: 352px;
  color: #7f7f7f;
  font-size: 16px;
  font-family: Inter;
  line-height: 32px;
  white-space: pre-wrap;
`;
const FlexRow1 = styled.div`
  gap: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Avatar2 = styled.img`
  width: 48px;
  height: 48px;
  align-self: flex-start;
`;
const FlexColumn1 = styled.div`
  gap: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Text2 = styled.div`
  width: 288px;
  color: #2e2e2e;
  font-size: 16px;
  font-weight: 700;
  font-family: Inter;
  line-height: 24px;
`;
const Text3 = styled.div`
  width: 288px;
  color: #7f7f7f;
  font-size: 16px;
  font-family: Inter;
  line-height: 32px;
`;
const Container1 = styled.div`
  height: 256px;
  gap: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 24px;
  border-radius: 16px;
  background-color: #ffffff;
`;
const ReviewsRootRootRoot = styled.div`
  height: 560px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Text1 = styled.div`
  width: 1024px;
  color: #2e2e2e;
  font-size: 64px;
  font-weight: 700;
  font-family: Inter;
  line-height: 88px;
  text-align: center;
`;
const NewGroup = styled.div`
  gap: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Paragraph = styled.div`
  width: 608px;
  color: #7f7f7f;
  font-size: 16px;
  font-family: Inter;
  line-height: 32px;
  text-align: center;
`;
const Group8 = styled.div`
  width: 1232px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Container2 = styled.div`
  height: 256px;
  gap: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 24px;
  border-radius: 16px;
  background-color: #ffffff;
  box-shadow: 0px 48px 120px 0px rgba(51, 51, 51, 0.25);
`;
