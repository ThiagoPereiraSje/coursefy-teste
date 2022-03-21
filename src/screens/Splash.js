import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {useRouteActions} from '../features/route-context';
import Routes from '../enums/Routes';

export default function Splash() {
  const {navigate} = useRouteActions();

  useEffect(() => {
    setTimeout(() => {
      navigate(Routes.Home);
    }, 2000);
  }, [navigate]);

  return (
    <View style={Styles.container}>
      <Image style={Styles.logo} source={require('../assets/logo-2.png')} />
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {},
});
