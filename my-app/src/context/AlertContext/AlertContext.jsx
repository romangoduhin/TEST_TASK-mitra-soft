import React, {createContext, useState} from "react";
import {Alert} from "react-bootstrap";

export const AlertContext = createContext();

export function AlertProvider({children}) {
  const [alertMessage, setAlertMessage] = useState("");
  const [show, setShow] = useState(true);

  function showAlert(message) {
    setAlertMessage(message);
  }

  function handleClose() {
    setShow(false)
  }

  return (
    <AlertContext.Provider value={showAlert}>
      {alertMessage && show &&
        <Alert dismissible variant="danger" onClose={handleClose}>{alertMessage}</Alert>}
      {children}
    </AlertContext.Provider>
  );
}