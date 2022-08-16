import { lazy } from "react";
import { Navigate, Route } from "react-router-dom";
import { PrivateRoutes } from "../../models";
import { RoutesWithNotFound } from "../../utilities";

const Dashboard = lazy(() => import('./dashboard/Dashboard'));
const Home = lazy(() => import('./home/Home'));

const Private = () => {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={ <Navigate to={PrivateRoutes.DASHBOARD} />} />
      <Route path={PrivateRoutes.DASHBOARD} element={ <Dashboard />} />
      <Route path={PrivateRoutes.HOME} element={ <Home />} />
    </RoutesWithNotFound>
  )
}
export default Private;