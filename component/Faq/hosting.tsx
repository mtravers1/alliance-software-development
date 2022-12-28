import React from "react";
import styled from "styled-components";

export const Hosting = ({}) => {
  return (
    <AccordionRootRootRoot>
      <NewGroup>
        <Accordion>
          <Paragraph>How long is the active period of a domain?</Paragraph>
          <ArrowChevronDown
            src={`https://file.rendit.io/n/qyFRuvot3LGOZKgG4jMB.svg`}
          />
        </Accordion>
        <AccordionDetailed>
          <Paragraph1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
            dui eu sit interdum. Ut pellentesque tincidunt justo eu quam nisl
            etiam. Integer eget enim, pulvinar sit turpis in. Tortor morbi
            tempus amet in volutpat amet convallis.{" "}
          </Paragraph1>
        </AccordionDetailed>
      </NewGroup>
      <Accordion>
        <Paragraph>What exactly is web hosting?</Paragraph>
        <ArrowChevronDown
          src={`https://file.rendit.io/n/qyFRuvot3LGOZKgG4jMB.svg`}
        />
      </Accordion>
      <Accordion>
        <Paragraph>
          Why do professional web hosting services come at a cost?
        </Paragraph>
        <ArrowChevronDown
          src={`https://file.rendit.io/n/qyFRuvot3LGOZKgG4jMB.svg`}
        />
      </Accordion>
      <Accordion>
        <Paragraph>
          What are the special features of the Hostingan web hosting plan?
        </Paragraph>
        <ArrowChevronDown
          src={`https://file.rendit.io/n/qyFRuvot3LGOZKgG4jMB.svg`}
        />
      </Accordion>
      <Accordion>
        <Paragraph>Why do I need a domain name?</Paragraph>
        <ArrowChevronDown
          src={`https://file.rendit.io/n/qyFRuvot3LGOZKgG4jMB.svg`}
        />
      </Accordion>
      <Accordion>
        <Paragraph>Is shared hosting the only type of web hosting?</Paragraph>
        <ArrowChevronDown
          src={`https://file.rendit.io/n/qyFRuvot3LGOZKgG4jMB.svg`}
        />
      </Accordion>
      <Accordion>
        <Paragraph>
          How do I know which web hosting service provider is best for me?
        </Paragraph>
        <ArrowChevronDown
          src={`https://file.rendit.io/n/qyFRuvot3LGOZKgG4jMB.svg`}
        />
      </Accordion>
      <Accordion>
        <Paragraph>
          Any other basic tips or information I need to keep in mind?
        </Paragraph>
        <ArrowChevronDown
          src={`https://file.rendit.io/n/qyFRuvot3LGOZKgG4jMB.svg`}
        />
      </Accordion>
      <Accordion>
        <Paragraph>How do I check the domain name I want?</Paragraph>
        <ArrowChevronDown
          src={`https://file.rendit.io/n/qyFRuvot3LGOZKgG4jMB.svg`}
        />
      </Accordion>
    </AccordionRootRootRoot>
  );
};

const Accordion = styled.div`
  width: 814px;
  gap: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 39px 0px;
  border-width: 1px;
  border-style: solid;
  border-color: #7f7f7f;
`;
const Paragraph = styled.div`
  width: 696px;
  color: #2e2e2e;
  font-size: 16px;
  font-weight: 700;
  font-family: Inter;
  line-height: 24px;
`;
const ArrowChevronDown = styled.img`
  width: 24px;
  height: 24px;
`;
const AccordionRootRootRoot = styled.div`
  height: 1240px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const NewGroup = styled.div`
  gap: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const AccordionDetailed = styled.div`
  height: 176px;
  gap: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 40px;
  background-color: #f7fafe;
`;
const Paragraph1 = styled.div`
  width: 736px;
  color: #2e2e2e;
  font-size: 16px;
  font-family: Inter;
  line-height: 32px;
  white-space: pre-wrap;
`;
