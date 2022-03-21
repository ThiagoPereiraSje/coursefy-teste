import React from 'react';
import Splash from './src/screens/Splash';
import Home from './src/screens/Home';
import Post from './src/screens/Post';
import {useRouteStates} from './src/features/route-context';

const routes = [<Splash />, <Home />, <Post />];

export default function Navigator() {
  const {route} = useRouteStates();

  return routes[route];
}
