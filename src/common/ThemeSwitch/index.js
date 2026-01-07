import { useDispatch, useSelector } from "react-redux";
import { selectIsDarkTheme, toggleTheme } from "../../features/themeSlice";
import { Button } from "./styled";

export const ThemeSwitch = () => {
    const isDarkTheme = useSelector(selectIsDarkTheme);
    const dispatch = useDispatch();

    return (
        <Button onClick={() => dispatch(toggleTheme())}>Dark mode {isDarkTheme ? "on" : "off"}</Button>
    )
}