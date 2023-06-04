import { toast, ToastContainer } from "react-toastify";
import { AlertType } from "../constants/enums";
import React, { createContext, useState } from "react";

// const { createContext, useState } = require("react");

export const AppContext = createContext({
  isLoading: false,
  setLoading: () => {},
  showAlert: () => {},
  applicant: {},
  setApplicant: () => {},
});

const AppContextProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(false);
  const [applicant, setApplicant] = useState({});
  const showAlert = (message, alertType) => {
    switch (alertType) {
      case AlertType.ERROR:
        toast.error(message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        break;
      case AlertType.SUCCESS:
        toast.success(message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        break;
      case AlertType.INFO:
        toast.info(message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        break;
      case AlertType.WARNING:
        toast.warn(message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        break;
      default:
        toast({
          message,
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        break;
    }
  };
  const values = {
    showAlert,
    setLoading,
    isLoading,
    applicant,
    setApplicant,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
export default AppContextProvider;
