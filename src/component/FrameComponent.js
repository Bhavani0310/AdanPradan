import styled from "styled-components";
import { Fonts, FontSizes, Colors, Gaps, Paddings, BorderRadiuses } from './Styles.js';

const Adan = styled.span``;
const Pradhan = styled.span`
  color: var(--color-darkslategray);
`;
const Adanpradhan = styled.h1`
  margin: 0;
  position: relative;
  font-size: inherit;
  line-height: 112.5%;
  font-weight: 700;
  font-family: inherit;
  flex-shrink: 0;
  debug_commit: f6aba90;
  @media screen and (max-width: 750px) {
    font-size: var(--font-size-12xl);
    line-height: 35px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-4xl);
    line-height: 26px;
  }
`;

const StyledComponent = styled.div`
  font-family: ${Fonts.poppins};
  font-size: ${FontSizes.xl};
  color: ${Colors.darkSlateGray};
  gap: ${Gaps.xl};
  padding: ${Paddings.x3xl};
  border-radius: ${BorderRadiuses.x5xs};
`;

const AboutUs = styled.div`
  position: relative;
  line-height: 20.4px;
  display: inline-block;
  min-width: 85.1px;
`;
const FAQs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px 11.099999999999907px;
`;
const Faq = styled.div`
  position: relative;
  line-height: 112.5%;
  display: inline-block;
  min-width: 36.1px;
`;
const ElevateMindFuture = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px 11.599999999999907px;
`;
const SignUpin = styled.div`
  position: relative;
  font-size: var(--font-size-lg);
  line-height: 20.5px;
  font-family: var(--font-poppins);
  color: var(--color-darkslategray);
  text-align: left;
  display: inline-block;
  min-width: 92.1px;
`;
const SignUpinWrapper = styled.button`
  cursor: pointer;
  border: 1px solid var(--color-darkslategray);
  padding: 12.099999999999907px var(--padding-3xl) 12.099999999999907px
    24.09999999999991px;
  background-color: transparent;
  border-radius: var(--br-5xs);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  white-space: nowrap;
  &:hover {
    background-color: var(--color-slategray-200);
    border: 1px solid var(--color-slategray-100);
    box-sizing: border-box;
  }
`;
const AboutUs1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px 0px 0.900000000000091px 0.09999999999990904px;
  gap: 31.850000000000136px;
  flex-shrink: 0;
  debug_commit: f6aba90;
  z-index: 1;
  @media screen and (max-width: 450px) {
    gap: 31.9px 16px;
  }
`;
const AboutUsWrapper = styled.div`
  height: 45.4px;
  width: 325.2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px 9.300000000000182px;
  box-sizing: border-box;
  max-width: 100%;
  font-size: var(--font-size-lg);
  color: var(--color-darkslategray);
`;
const AdanpradhanParentRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding: 9.400000000000093px 0px var(--padding-7xs);
  box-sizing: border-box;
  max-width: 100%;
  gap: var(--gap-xl);
  text-align: left;
  font-size: var(--font-size-20xl);
  color: var(--color-steelblue);
  font-family: var(--font-poppins);
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
  }
`;

const FrameComponent = () => {
  return (
    <StyledComponent>
    <AdanpradhanParentRoot>
      <Adanpradhan>
        <Adan>Adan</Adan>
        <Pradhan>Pradhan</Pradhan>
      </Adanpradhan>
      <AboutUsWrapper>
        <AboutUs1>
          <FAQs>
            <AboutUs>About-us</AboutUs>
          </FAQs>
          <ElevateMindFuture>
            <Faq>FAQ</Faq>
          </ElevateMindFuture>
          <SignUpinWrapper>
            <SignUpin>Sign up/in</SignUpin>
          </SignUpinWrapper>
        </AboutUs1>
      </AboutUsWrapper>
    </AdanpradhanParentRoot>
    </StyledComponent>
  );
};

export default FrameComponent;
