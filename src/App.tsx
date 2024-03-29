import Layout from "./components/layout/Layout";
import Detail from "./pages/\bDetail";
import Home from "./pages/Home";
import { GlobalStyle } from "./style/global";
import { ThemeProvider } from "styled-components";
import { ThemeName, getTheme } from "./style/theme";
import ThemeSwitcher from "./components/header/ThemeSwitcher";
import { useContext, useState } from "react";
import { BookStoreThemeProvider, ThemeContext } from "./\bcontext/themeContext";

function App() {
  


  return (
    <BookStoreThemeProvider>
  
    <ThemeSwitcher/>
    <Layout>
      <Home/>
    </Layout>

  </BookStoreThemeProvider>
    );

}

export default App;
