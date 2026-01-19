import { useDispatch, useSelector } from "react-redux";
import { selectIsDarkTheme, toggleTheme } from "../themeSlice";
import { Button, IconWrapper, Icon } from "./styled";

export const ThemeSwitch = () => {
    const isDarkTheme = useSelector(selectIsDarkTheme);
    const dispatch = useDispatch();

    return (
        <IconWrapper>Dark mode {isDarkTheme ? "on" : "off"}
            <Button onClick={() => dispatch(toggleTheme())}>
                <Icon moveToRight={isDarkTheme} />
            </Button>
        </IconWrapper>
    )
}