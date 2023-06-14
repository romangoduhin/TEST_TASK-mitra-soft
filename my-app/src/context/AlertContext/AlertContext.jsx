import React, {createContext, useState} from 'react';
import {Alert} from "react-bootstrap";

export const AlertContext = createContext();

export function AlertProvider({children}) {
  const [alertMessage, setAlertMessage] = useState('');
  const [show, setShow] = useState(true);

  const showAlert = (message) => {
    setAlertMessage(message);
  };

  return (
    <AlertContext.Provider value={showAlert}>
      {alertMessage && show &&
        <Alert dismissible variant="danger" onClose={() => setShow(false)}>{alertMessage}</Alert>}
      {children}
    </AlertContext.Provider>
  );
}