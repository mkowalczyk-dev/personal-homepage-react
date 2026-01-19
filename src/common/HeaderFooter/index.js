import {
    HeaderWrapper,
    HeaderContainer,
    HeaderImage,
    Title,
    StyledTitle,
    Subtitle,
    Content,
    Button
} from "./styled";

const HeaderFooter = ({ title, subtitle, content, header }) => {

  return (
    <HeaderWrapper>
        {header === true && (
        <HeaderImage $posterUrl={"https://i.postimg.cc/PJ658KhS/profile-picture.jpg"} />)}
        <HeaderContainer>
            <Subtitle>{subtitle}</Subtitle>
            {header === true ? 
            (<Title>{title}</Title>) 
            : (<StyledTitle href={"mailto: michalkowal3k@gmail.com"} title={"michalkowal3k@gmail.com"}>{title}</StyledTitle>)}
            <Content>{content}</Content>
            {header === true && (
            <Button href={"mailto: michalkowal3k@gmail.com"} title={"michalkowal3k@gmail.com"}>
                ✉ Hire me</Button>)}
        </HeaderContainer>
    </HeaderWrapper>
)};

export default HeaderFooter;