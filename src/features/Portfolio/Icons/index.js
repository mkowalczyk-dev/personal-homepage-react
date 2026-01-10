import { socials } from "./socials";
import { IconItem, IconLink, IconWrapper } from "./styled";

export const SocialMediaIcons = () => (
  <IconWrapper>
    {socials.map(({ name, url, Icon }) => (
      <IconItem key={name}>
        <IconLink href={url} title={name} target="_blank" rel="noreferrer">
          <Icon />
        </IconLink>
      </IconItem>
    ))}
  </IconWrapper>
);