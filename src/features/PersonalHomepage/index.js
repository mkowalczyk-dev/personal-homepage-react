import { Container } from "../../common/Container/styled";
import Section from "../../common/Section";
import HeaderFooter from "../../common/HeaderFooter/index";
import { ThemeSwitch } from "../../common/ThemeSwitch/index";
import { Skills } from "../../features/PersonalHomepage/Portfolio/Skills/index";
import { skills, nextSkills } from "../../features/PersonalHomepage/Portfolio/skillsData";
import { GithubIcon } from "../../features/PersonalHomepage/Portfolio/Icons/styled";
import { SocialMediaIcons } from "../../features/PersonalHomepage/Portfolio/Icons/index";
import { Portfolio } from "../../features/PersonalHomepage/Portfolio/index";

export const PersonalHomepage = () => (
    <Container>
        <Section content={<ThemeSwitch />} />
        <HeaderFooter
            header={true}
            subtitle="This is "
            title="Michał Kowalczyk"
            content="I've discovered, that coding is not only useful 🖥️, but also very exciting for me 🤩"
        />
        <Section
            content={
                <Skills title="🥷🏻 My skillset includes:" skills={skills} />}
        />
        <Section
            content={
                <Skills title="💡📗What I want to learn next:" skills={nextSkills} />}
        />
        <GithubIcon />
        <Section
            title="Portfolio"
            subtitle="My recent projects"
            content={<>
                <Portfolio />
            </>
            }
        />
        <HeaderFooter
            header={false}
            subtitle="Let's talk! "
            title="michal97kowalczyk@gmail.com"
            content="I'm ready for new job opportunities as soon as possible, I'm waiting for new challenges and endless improvement, so you can contact me anytime!"
        />
        <Section content={
            <SocialMediaIcons />
        }
        />
    </Container>
)