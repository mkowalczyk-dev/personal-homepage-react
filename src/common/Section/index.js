import { SectionWrapper, Title, Subtitle, Content } from "./styled";

const Section = ({ title, subtitle, content }) => (
  <SectionWrapper>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
    <Content>{content}</Content>
  </SectionWrapper>
);

export default Section;
