import React from "react";

import {
  PrimaryBtn,
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import Link from "next/link";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          <div className="text-3xl uppercase">hello there,</div>I'm Timothy Onyeacholam.<br /> 
          A Frontend Developer.   
        </SectionTitle>
        {/* <SectionText>
          I'm a passionate frontend developer. I'm enthusiastic about crafting
          user-friendly experiences with a strong foundation in frontend
          technologies. I stay updated on latest trends and i'm eager to
          contribute to innovative projects
        </SectionText> */}
        <div style={{ display: 'flex', gap: '1rem'}}>
        <PrimaryBtn>
          <Link href="#about">More about me</Link>
        </PrimaryBtn>
        <PrimaryBtn>
          <Link href="#projects">Latest Projects</Link>
        </PrimaryBtn>
        </div>
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;
