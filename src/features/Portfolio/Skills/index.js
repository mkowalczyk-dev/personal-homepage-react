import { Item, List, Section, Title, Break } from "./styled";

export const Skills = ({ title, skills }) => (
  <Section>
    <Title>{title}</Title>
    <Break/>
    <List>
      {skills.map((skill) => (
        <Item key={skill}>
          {skill}
        </Item>
      ))}
    </List>
  </Section>
);