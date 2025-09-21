import { List, TaskBar } from "@react95/core";
import {
  Computer3,
  Settings,
  Amovie2,
  Joy102,
  Inetcpl1313,
  Wordpad,
  Mail
} from "@react95/icons";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useEffect, useState } from "react";
import Shutdown from "./Shutdown";
import { useWindowsStore } from "../store/windows";
import { useTranslation } from "react-i18next";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ padding: "0 10px", alignSelf: "center" }}>
      {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
    </div>
  );
}

function WindowBar() {
  const [showShutdown, setShowShutdown] = useState(false);
  const { openWindow } = useWindowsStore();

  const { t } = useTranslation();

  return (
    <>
      <TaskBar className="mi-taskbar"
        list={
          <List width={"200px"}>
            <List.Item icon={<Mail variant="32x32_4" />}>
              <List width={"200px"}>
                <List.Item icon={<FaGithub size={16} />}>
                  <a href="https://github.com/m-pozzo" target="_blank" style={{ textDecoration: 'none', color: '#222' }}>GitHub</a>
                </List.Item>
                <List.Item icon={<FaLinkedin size={16} />}>
                  <a href="https://www.linkedin.com/in/martin-p-563544276/" target="_blank" style={{ textDecoration: 'none', color: '#222' }}>LinkedIn</a>
                </List.Item>
                <List.Item icon={<Mail variant="16x16_4" />}>
                  <a href="mailto:martinpozzo.tin@gmail.com" style={{ textDecoration: 'none', color: '#222' }}>Gmail</a>
                </List.Item>
              </List>
              Contact
            </List.Item>
            <List.Item
              onClick={() => openWindow("Game")}
              icon={<Joy102 variant="32x32_4" />}
            >
              Game
            </List.Item>
            <List.Item
              onClick={() => openWindow("Configuración")}
              icon={<Settings variant="32x32_4" />}>
              Configuración
            </List.Item>
            {/* <List.Item
              onClick={() => openWindow("Browser")}
              icon={<Inetcpl1313 variant="32x32_4" />}
            >
              Browser
            </List.Item>
            <List.Item
              onClick={() => openWindow("Video")}
              icon={<Amovie2 variant="32x32_4" />}
            >
              Video
            </List.Item> */}
            <List.Item
              onClick={() => openWindow(t("sobreMi.p1"))}
              icon={<Wordpad variant="32x32_4" />}
            >
              {t("sobreMi.p1")}
            </List.Item>
            <List.Divider />
            <List.Item
              onClick={() => setShowShutdown(true)}
              icon={<Computer3 variant="32x32_4" />}
            >
              {t("wBar.p1")}
            </List.Item>

          </List>
        }
      >
        <Clock  />
      </TaskBar>
      {showShutdown && <Shutdown close={() => setShowShutdown(false)} />}
    </>
  );
}

export default WindowBar;
