import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  Img
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      These are some of the technologies i've worked with.
    </SectionText>
    <List>
      <ListItem>
        <Img src='/images/html.png' />
        <ListParagraph>
          HTML
          </ListParagraph>
      </ListItem>
      <ListItem>
      <Img src='/images/css.png' />
        <ListParagraph>
          CSS
          </ListParagraph>
      </ListItem>
      <ListItem>
      <Img src='/images/javascript.png' />
        <ListParagraph>
          JAVASCRIPT
          </ListParagraph>
      </ListItem>
      <ListItem>
      <Img src='/images/react.png' />
        <ListParagraph>
          REACT
          </ListParagraph>
      </ListItem>
      <ListItem>
      <Img src='/images/next.svg' />
        <ListParagraph>
          NEXT
          </ListParagraph>
      </ListItem>
      <ListItem>
      <Img src='/images/sass-1.svg' className='!w-[60%] !object-contain' />
        <ListParagraph>
          SASS
          </ListParagraph>
      </ListItem>
      <ListItem>
      <Img src='/images/tailwind.png' />
        <ListParagraph>
          TAILWIND
          </ListParagraph>
      </ListItem>
      <ListItem>
      <Img src='/images/Git.png' />
        <ListParagraph>
          GIT
          </ListParagraph>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
