import {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Routes} from '.';
import {Image} from 'react-native';
import LottieView from 'lottie-react-native';

export function SplashScreen() {
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loaded) {
    return (
      <View style={styles.containerWrapper}>
        {/* <Image
          style={styles.logo}
          resizeMode="contain"
          source={require('../assets/logo.png')}
        /> */}
        <LottieView
          autoPlay
          loop
          style={styles.animation}
          source={'Gift Box'}
        />
      </View>
    );
  } else {
    return <Routes />;
  }
}

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    backgroundColor: '#f0f3f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  animation: {
    height: 340,
    width: 340,
  },
  logo: {
    width: 620,
    height: 300,
  },
});
