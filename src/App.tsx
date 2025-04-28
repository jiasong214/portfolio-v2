import React, { useEffect, useState } from "react";
import "./App.scss";

import Header from "./components/Header/Header";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
import Intro from "./components/Intro/Intro";
import Loading from "./components/Loading/Loading";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";

const lsTheme = localStorage.getItem("jia-page-theme") as
  | "light"
  | "dark"
  | null;

const userTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";

function App() {
  const [loading, setLoading] = useState(true);
  const [stagedTheme, setStagedTheme] = useState<"light" | "dark">();

  const currentTheme = stagedTheme ?? lsTheme ?? userTheme ?? "light";

  // first time theme setup
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("jia-page-theme", currentTheme);
  }, []);

  const handleUpdateTheme = (theme: "light" | "dark"): void => {
    setStagedTheme(theme);
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("jia-page-theme", theme);
  };

  return (
    <Loading loading={loading} setLoading={setLoading}>
      <SmoothScroll disabled={loading}>
        <main className="root">
          <Header
            loading={loading}
            theme={currentTheme}
            onUpdateTheme={handleUpdateTheme}
          />
          <Intro loading={loading} />
          <About />
          <p className="subText">
            Over the past three years, I have worked with:
          </p>
          <Skills />
          <p className="subText">
            Here’s where I've applied and expanded my skills:
          </p>
          <Experience />
          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </Loading>
  );
}

export default App;
