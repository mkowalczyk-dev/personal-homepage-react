import {
    HeaderWrapper,
    HeaderContainer,
    HeaderImage,
    Title,
    Subtitle,
    Content,
    Button
} from "./styled";

const Header = ({ title, subtitle, content }) => {

  const handleClick = () => {
   window.location.href = "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqWhHLxSzDCngBPrvnBMwhVxTPPZBxHhgkvNjDwgrTKzjpWbcQvpbrVXmRKNwXFznBmKsB";
  };

  return (
    <HeaderWrapper>
        <HeaderImage $posterUrl={"https://i.postimg.cc/PJ658KhS/profile-picture.jpg"} />
        <HeaderContainer>
            <Subtitle>{subtitle}</Subtitle>
            <Title>{title}</Title>
            <Content>{content}</Content>
            <Button
                onClick={handleClick}>
                ✉ Hire me</Button>
        </HeaderContainer>
    </HeaderWrapper>
)};

export default Header;