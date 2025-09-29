import { AGENTS, ClippyProvider } from "@react95/clippy";
// import Login from "./components/Login";
import WindowBar from "./components/WindowBar";
// import { useAuth } from "./store/auth";
import DesktopIcon from "./components/DesktopIcon";
import Contact from "./components/Contact";
import { Joy102, Mail, Settings, ComputerFind, Mshtml32553, Wordpad, Cdplayer107 } from "@react95/icons";
import Resume from "./components/Resume";
import Game from "./components/Game";
import Config from "./components/Config";
import WebampPlayer from "./components/WebampPlayer";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useWindowsStore } from "./store/windows";
import { FreeWindow } from './components/FreeWindow';
import "./App.css"
import "./crtEffect.css"

function App() {
  const { openWindow, isWindowOpen, closeWindow } = useWindowsStore();

  const handleOpen = (id: string) => {
    openWindow(id);
  }

  const bgArr = ['bg0', 'bg1', 'bg2', 'bg3', 'bg4']
  const [index, setIndex] = useState(0);

  const cambiarFondo = () => {
    setIndex((index + 1) % bgArr.length);
  }



  const [crt, setCrt] = useState(true);
  const handleCrt = () => {
    setCrt(!crt);
  }


  const { t, i18n } = useTranslation();

  return (
    <div style={{ width: "100%", minHeight: "100vh", position: "relative" }} className={`${bgArr[index]} ${crt ? "crt-brightness" : null}`}>
      {/* <img src="/img/logo.png" width={400} style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-70%)" }} /> */}
      {/* {!authinicated && <Login />} */}

      {/* {authinicated && ( */}
      <ClippyProvider agentName={AGENTS.ROVER}>
        <div className="fixed">

          <DesktopIcon id="about" width={650} icon={<ComputerFind variant="32x32_4" />} name={t("sobreMi.p1")}>
            <Resume handleOpen={handleOpen} />
          </DesktopIcon>

          {
            isWindowOpen("Certificado-WebDev") && (
              <FreeWindow
                title={t("sobreMi.p40")}
                icon={<Mshtml32553 variant="32x32_4" />}
                onClose={() => closeWindow("Certificado-WebDev")}
                width={625}
              >
                <img src="./img/desarrolloweb-certificado.jpg" alt="Certificado del curso de desarrollo web" loading="lazy" />
              </FreeWindow>
            )
          }

          {
            isWindowOpen("CertificadoJS") && (
              <FreeWindow
                title={t("sobreMi.p41")}
                icon={<Mshtml32553 variant="32x32_4" />}
                onClose={() => closeWindow("CertificadoJS")}
                width={625}
              >
                <img src="./img/javascript-certificado.jpg" alt="Certificado del curso de Javascript" loading="lazy" />
              </FreeWindow>
            )
          }


          {/* <DesktopIcon width={400} height={400} icon={<Joy102 variant="32x32_4" />} name="Reproductor">
            <Reproductor />
          </DesktopIcon> */}
          {/* 
          <div id="app" style={{ height: "100vh" }}>

          </div> */}

          <DesktopIcon id="resume" width={550} height={550} icon={<Wordpad variant="32x32_4" />} name="Resume">
            <div style={{ width: "100%", height: "100%" }}>
              {
                i18n.language == "en" ?
                  <iframe src="./PDF/CV_MartínPozzo_Ingles.pdf" style={{ width: "100%", height: "100%" }}></iframe>
                  : <iframe src="./PDF/CV_MartínPozzo_Español.pdf" style={{ width: "100%", height: "100%" }}></iframe>
              }

            </div>
          </DesktopIcon>

          <DesktopIcon id="config" icon={<Settings variant="32x32_4" />} name={t("conf.p6")}>
            <Config cambiarFondo={cambiarFondo} activarCrt={handleCrt} crt={crt} />
          </DesktopIcon>

          <DesktopIcon id="contact" width={400} icon={<Mail variant="32x32_4" />} name={t("contact.p1")}>
            <Contact />
          </DesktopIcon>

          <DesktopIcon id="game" width={400} height={400} icon={<Joy102 variant="32x32_4" />} name="Game">
            <Game />
          </DesktopIcon>

          <DesktopIcon id="reproductor" width={400} height={400} icon={<Cdplayer107 variant="32x32_4" />} name={t("webamp")}/>

        </div>
        <WindowBar />
      </ClippyProvider>
      <div className={`${crt ? "crt" : null}`}></div>
      <div className={`${crt ? "crt-scanline" : null}`}></div>

    </div>

  );
}

export default App;
