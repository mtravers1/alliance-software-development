
import React from "react"
import styled from "styled-components"


const Learn= ()=>{
    const Text2Function = () => {
        alert();
      };
      const ArrowChevronRight2Function = () => {
        alert(``);
      };
    return(
<ValueRootRootRoot style={{paddingTop:"50px"}}>
      <IconPlaceholder2
        src={`https://file.rendit.io/n/9GXiNiatoAlid9X61UMQ.svg`}
      />
      <NewGroup3>
        <Group9>
          <Text1>New Unique Features</Text1>
          <Paragraph>
            Lorem ipsum dolor sit amet, consecte tur adipiscing elit ut aliquam.
          </Paragraph>
        </Group9>
        <Group10>
          <Text2 onClick={() => Text2Function()}>Learn More</Text2>
          <ArrowChevronRight2
            // src={`https://file.rendit.io/n/4Y62m9iPZ48gltaG1Ue6.svg`}
            onClick={() => ArrowChevronRight2Function()}
          />
        </Group10>
      </NewGroup3>
      <IconPlaceholder2
        src={`https://file.rendit.io/n/9GXiNiatoAlid9X61UMQ.svg`}
      />
      <NewGroup3>
        <Group9>
          <Text1>Domain Hosting</Text1>
          <Paragraph>
            Lorem ipsum dolor sit amet, consecte tur adipiscing elit ut aliquam.
          </Paragraph>
        </Group9>
        <Group10>
          <Text2 onClick={(e) => Text2Function()}>Learn More</Text2>
          <ArrowChevronRight2
            onClick={(e) => ArrowChevronRight2Function()}
          />
        </Group10>
      </NewGroup3>
      <IconPlaceholder2
        src={`https://file.rendit.io/n/9GXiNiatoAlid9X61UMQ.svg`}
      />
      <NewGroup3>
        <Group9>
          <Text1>Intergration</Text1>
          <Paragraph>
            Lorem ipsum dolor sit amet, consecte tur adipiscing elit ut aliquam.
          </Paragraph>
        </Group9>
        <Group10>
          <Text2 onClick={(e) => Text2Function()}>Learn More</Text2>
          <ArrowChevronRight2
        // src={`https://file.rendit.io/n/9GXiNiatoAlid9X61UMQ.svg`}
        onClick={(e) => ArrowChevronRight2Function()}
          />
        </Group10>
      </NewGroup3>
    </ValueRootRootRoot>
    )
}
export default Learn;


const IconPlaceholder2 = styled.img`
  width: 80px;
  height: 80px;
  align-self: flex-start;
`;
const NewGroup3 = styled.div`
  gap: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`;
const Group9 = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Text1 = styled.div`
  width: 304px;
  color: #2e2e2e;
  font-size: 24px;
  font-weight: 700;
  font-family: Inter;
  line-height: 32px;
`;
const Paragraph = styled.div`
  width: 304px;
  color: #7f7f7f;
  font-size: 16px;
  font-family: Inter;
  line-height: 32px;
`;
const Group10 = styled.div`
  width: 304px;
  gap: 8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const Text2 = styled.button`
  padding: 0px;
  color: #555555;
  font-size: 16px;
  font-weight: 700;
  font-family: Inter;
  line-height: 24px;
  white-space: nowrap;
  border-width: 0px;
  box-sizing: content-box;
  background: none;
  cursor: pointer;
`;
const ArrowChevronRight2 = styled.button`
  width: 24px;
  height: 24px;
  padding: 0px;
  border-width: 0px;
  box-sizing: content-box;
  background-color: transparent;
  background: none;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/4Y62m9iPZ48gltaG1Ue6.svg");
  cursor: pointer;
  &: hover {
    opacity: 70%;
  } ;
`;
const ValueRootRootRoot = styled.div`
//   width: 1232px;
// width:fit-content;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;