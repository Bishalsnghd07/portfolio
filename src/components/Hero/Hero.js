import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { RightSection } from './HeroStyles';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        Hi! I'm Bishal Singh Deo, a web developer based in Jamshedpur. I create many Frontend and Backend projects like Myntra Cloner, Restaurant website, Gym website, Personal Portfolio and many more..
        </SectionText>
        <div>

        <Button onClick={() => window.location = 'https://github.com/Bishalsnghd07?tab=repositories'}>Book a call</Button>
        
        <RightSection>
        <Button onClick={() => window.location =  'https://www.canva.com/design/DAFGTPGmi6E/2nAnK6DNHTPokXok7ja9mA/edit?utm_content=DAFGTPGmi6E&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'}>Download CV</Button>
        </RightSection>
        </div>
      
      </LeftSection>
    </Section>
  </>
);

export default Hero;