import { styledIcon } from "./styled";
import { ReactComponent as githubIcon } from "../../../assets/github-icon.svg";
import { ReactComponent as facebookIcon } from "../../../assets/facebook-icon.svg";
import { ReactComponent as linkedinIcon } from "../../../assets/linkedin-icon.svg";
import { ReactComponent as instagramIcon } from "../../../assets/instagram-icon.svg";

export const socials = [
    {
        name: "GitHub",
        url: "https://github.com/Hirazuku",
        Icon: styledIcon(githubIcon),
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/profile.php?id=100008917428069&locale=pl_PL",
        Icon: styledIcon(facebookIcon),
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/Hirazuku",
        Icon: styledIcon(linkedinIcon),
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/wahasaku/",
        Icon: styledIcon(instagramIcon),
    }
];