// DesktopIcon.js
import React, { type ReactElement, type ReactNode, type ComponentType, useState } from "react";
import { Modal, TitleBar, useModal } from "@react95/core";
import { useWindowsStore } from "../store/windows";
import WebampPlayer from "./WebampPlayer";

// Centralized style objects for maintainability and clarity
const styles = {
  desktopIcon: {
    alignItems: "center",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    borderRadius: "8px",
    textAlign: "center",
    width: "100px",
    gap: "10px",
  },
  iconImage: {
    height: "64px",
    marginBottom: "8px",
    width: "64px",
  },
  iconName: {
    color: "#ffffff",
    fontSize: "14px",
    margin: "0",
    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)",
    userSelect: "none",
  },
  window: {
    background: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
    display: "flex",
    flexDirection: "column",
  },
  titleBar: {
    alignItems: "center",
    background: "#f0f0f0",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
    cursor: "move",
    display: "flex",
    fontWeight: "bold",
    justifyContent: "space-between",
    padding: "8px",
  },
  closeButton: {
    alignItems: "center",
    background: "#ff5f56",
    border: "1px solid #e04440",
    borderRadius: "50%",
    color: "#9a0000",
    cursor: "pointer",
    display: "flex",
    fontSize: "10px",
    height: "15px",
    justifyContent: "center",
    lineHeight: "10px",
    width: "15px",
  },
  windowContent: {
    flex: "1",
    overflow: "auto",
    padding: "20px",
  },
} as const;

interface WindowProps {
  icon: ReactElement<{ variant?: string }>;
  title: string;
  children: ReactNode;
  width?: number;
  height?: number;
  onClose: () => void;
}
const Window = ({ title, onClose, children, icon, width, height }: WindowProps) => {
  const { minimize } = useModal();
  return (
    <SafeModal
      id={title}
      icon={icon}
      title={title}
      titleBarOptions={[
        <TitleBar.Minimize
          style={{ marginBlock: "auto" }}
          key="maximize"
          onClick={() => minimize(title)}
        />,
        <TitleBar.Close
          style={{ marginBlock: "auto" }}
          key="close"
          onClick={onClose}
        />,
      ]}
      className="desktopModal"
    >
      <Modal.Content width={`${width}px`} height={`${height}px`}>
        {children}
      </Modal.Content>
    </SafeModal>
  );
};

/**
 * A desktop icon that opens a window on double-click.
 */

interface DesktopIconProps {
  id: string,
  icon: ReactElement<{ variant?: string }>;
  name: string;
  children: ReactNode;
  width?: number;
  height?: number;
}




const DesktopIcon = ({
  id,
  icon,
  name,
  children,
  width,
  height,
}: DesktopIconProps) => {
  const [isWebampOpen, setIsWebampOpen] = useState(false);
  const { openWindow, closeWindow, isWindowOpen } = useWindowsStore();
  const isOpen = isWindowOpen(id);

  const handleClick = () => {
    openWindow(id);
    if (id === "reproductor") {
      setIsWebampOpen(prev => !prev); // toggle
    }
  };

  const handleCloseWindow = () => {
    closeWindow(id);
  };

  return (
    <>
      <div style={styles.desktopIcon} onClick={handleClick}>
        {React.cloneElement(icon, { variant: "32x32_4" })}
        <p style={styles.iconName}>{name}</p>
      </div>
      {isOpen && id !== "reproductor" && (
        <Window
          width={width}
          height={height}
          icon={React.cloneElement(icon, { variant: "16x16_4" })}
          title={name}
          onClose={handleCloseWindow}
        >
          {children}
        </Window>
      )}
      {id === "reproductor" && isWebampOpen && (
        <WebampPlayer onClose={() => setIsWebampOpen(false)} />
      )}
    </>
  );
};


export default DesktopIcon;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SafeModal = Modal as unknown as ComponentType<any>;
