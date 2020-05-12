import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { BasicsPagesRoutes, DashboardPageRoutes, ProtectedRoute } from './utlis'
const Login = lazy(() => import("./screens/login"));
const EmployeesList = lazy(() => import("./screens/dashboard/employeesList"));


function AppRouting() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Suspense fallback={<div></div>}>
            {/* Navigation of pages */}
            <Route
              exact
              path={BasicsPagesRoutes.LOGIN}
              component={Login}
            />
            <ProtectedRoute
              exact
              path={DashboardPageRoutes.EMPLOYEES_LIST}
              component={EmployeesList}
            />
          </Suspense>
          {/* End Navigation of pages */}
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  )
}
export default AppRouting