import { toast } from "react-toastify";
toast.configure();
//****************************************************************************************//
//                              Email Validation
//   **************************************************************************************//
export const validateUsername = (email) => {
  let pattern = new RegExp(
    /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  return pattern.test(email);
};
//****************************************************************************************//
//                              Email Validation
//   **************************************************************************************//
export const validatePassword = (pass) => {
  let pattern = new RegExp(/^(?=.*[a-z])(?=.*[0-9])/);
  return pattern.test(pass);
};
/*************************************************************************************
                            Set success Toast Message
  **************************************************************************************/
export const showSuccessToast = (msg) => {
  toast.success(msg, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};
/*************************************************************************************
                            Set Error Toast Message
  **************************************************************************************/
export const showErrorToast = (msg) => {
  toast.error(msg, {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};
