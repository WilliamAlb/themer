import { useSelector } from "react-redux";
import { selectTheme } from "../features/slices/currentThemeSlice";
import { ThemeProvider } from "styled-components";

export function CustomThemeProvider(props){
    const {theme} = useSelector(selectTheme);

    return (
      <ThemeProvider theme={theme}>
        {props.children}
      </ThemeProvider>
    )
  }