import { createContext, useState } from "react";
import { routeData } from "../utils/routesData";

export const RouteContext = createContext();

const RouteProvider = ({ children }) => {
  const [routes, setRoutes] = useState(routeData);

  return (
    <RouteContext.Provider value={{ routes, setRoutes }}>
      {children}
    </RouteContext.Provider>
  );
};

export default RouteProvider;
