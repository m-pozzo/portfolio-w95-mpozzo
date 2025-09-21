import React, { type ReactElement, type ReactNode } from "react";
import { Modal, TitleBar, useModal } from "@react95/core";
// import { useWindowsStore } from "../store/windows";

interface WindowProps {
    icon: ReactElement<{ variant?: string }>;
    title: string;
    children: ReactNode;
    width?: number;
    height?: number;
    onClose: () => void;
}

export const FreeWindow = ({ title, children, onClose, icon, width, height }: WindowProps) => {
    const { minimize } = useModal();
    // const { closeWindow } = useWindowsStore();

    // const handleCloseWindow = () => {
    //     closeWindow(title);
    // };

    return (
        <Modal
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
            className="mymodal"
        >
            <Modal.Content width={`${width}px`} height={`${height}px`}>
                {children}
            </Modal.Content>
        </Modal>
    );
};

export default FreeWindow;