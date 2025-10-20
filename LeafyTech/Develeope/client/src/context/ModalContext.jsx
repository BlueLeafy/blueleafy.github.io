// context/ModalContext.jsx - Manage multiple modals
import { createContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [modals, setModals] = useState([]);

    const openModal = (modalType, modalProps = {}) => {
        const id = Date.now();
        setModals(prev => [...prev, { id, type: modalType, props: modalProps }]);
        return id;
    };

    const closeModal = (id) => {
        setModals(prev => prev.filter(modal => modal.id !== id));
    };

    const closeAllModals = () => {
        setModals([]);
    };


    const value = {
        modals,
        openModal,
        closeModal,
        closeAllModals
    };

    return (
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalContext;