import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route } from "react-router-dom";
import { AuthGuard, RoleGuard } from "./guards";
import { PrivateRoutes, PublicRoutes, Roles } from "./models";
import "./App.css";

import store from "./redux/store";
import { RoutesWithNotFound } from "./utilities";
import { Logout } from "./components/logout";
import { Dashboard } from "./pages/private";

const Login = lazy(() => import("./pages/login/Login"));
const Private = lazy(() => import("./pages/private/Private"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<>Cargando ...</>}>
        <Provider store={store}>
          <BrowserRouter>
            <Logout />
            <RoutesWithNotFound>
              <Route
                path="/"
                element={<Navigate to={PrivateRoutes.PRIVATE} />}
              />
              <Route path={PublicRoutes.LOGIN} element={<Login />} />
              <Route element={<AuthGuard privateValidation={true} />}>
                <Route
                  path={`${PrivateRoutes.PRIVATE}/*`}
                  element={<Private />}
                />
              </Route>
              <Route element={<RoleGuard rol={Roles.ADMIN} />}>
                <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
              </Route>
            </RoutesWithNotFound>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </div>
  );
}

export default App;
