import React, {createContext, useContext, useMemo, useState} from 'react';
import Routes from '../enums/Routes';

const INITIAL_ROUTE = Routes.Splash;

const ActionsContext = createContext(undefined);
const StatesContext = createContext({
  route: INITIAL_ROUTE,
  params: undefined,
});

const useRouteActions = () => {
  const routeActions = useContext(ActionsContext);
  return routeActions;
};

const useRouteStates = () => {
  const routeStates = useContext(StatesContext);
  return routeStates;
};

const previous = [];

export default function RouterProvider({children}) {
  const [route, setRoute] = useState(INITIAL_ROUTE);
  const [params, setParams] = useState(undefined);

  const states = useMemo(() => ({route, params}), [route, params]);
  const actions = useMemo(
    () => ({
      navigate: (newRoute, newParams) => {
        previous.push(route);
        setRoute(newRoute);
        setParams(newParams);
      },
      goBack: () => {
        setRoute(previous.pop() || INITIAL_ROUTE);
      },
    }),
    [route],
  );

  return (
    <ActionsContext.Provider value={actions}>
      <StatesContext.Provider value={states}>{children}</StatesContext.Provider>
    </ActionsContext.Provider>
  );
}

export {useRouteActions, useRouteStates};
