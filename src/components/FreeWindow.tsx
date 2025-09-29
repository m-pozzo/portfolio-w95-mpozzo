import { type ReactElement, type ReactNode } from "react";
import { Modal, TitleBar, useModal } from "@react95/core";
// import { useWindowsStore } from "../store/windows";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SafeModal = Modal as unknown as React.FC<any>;

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
            className="mymodal"
        >
            <Modal.Content width={`${width}px`} height={`${height}px`}>
                {children}
            </Modal.Content>
        </SafeModal>
    );
};

export default FreeWindow;