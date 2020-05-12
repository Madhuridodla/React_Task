import React from "react";
import { Route, Redirect } from "react-router-dom";

export const requireAuth = () => {
  return localStorage.getItem("auth") ? true : false;
};
// Authorization for Screens
export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        requireAuth() ? (
          <Component {...props} />
        ) : (
            document.addEventListener("readystatechange", event => {
              if (event.target.readyState === "complete") {
                window.location.href = "/";
              }
            })
          )
      }
    />
  )
}