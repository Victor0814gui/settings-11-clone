import {useEffect, useRef, useState} from 'react';
import {View, Text, StyleSheet, Pressable, Image, Animated} from 'react-native';

export const NavbarItem = ({active = false, icon, item, index, ...rest}) => {
  const [onHover, setOnHover] = useState(false);
  const animatedSquare = useRef(new Animated.Value(0)).current;
  const [animationInit, setAnimationInit] = useState(false);

  const onPressIn = async () => {
    await Animated.spring(animatedSquare, {
      useNativeDriver: false,
      duration: 0,
      toValue: 0,
    }).start(async ({finished}) => {
      if (finished) {
        await Animated.spring(animatedSquare, {
          useNativeDriver: false,
          duration: 100,
          toValue: 1,
        }).start();
      }
    });
  };

  const onPressOut = async () => {
    Animated.spring(animatedSquare, {
      useNativeDriver: false,
      duration: 300,
      toValue: 0,
    }).start();
  };

  const onMouseEnter = () => setOnHover(true);
  const onMouseLeave = () => setOnHover(false);

  useEffect(() => {
    onPressIn();
    // return () => onPressOut();
  }, []);

  return (
    <Pressable {...rest} onPressIn={onPressIn}>
      <View
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={[
          styles.item,
          onHover && styles.itemHovered,
          active && styles.itemSelected,
        ]}>
        <Animated.View
          style={[
            styles.square,
            !active && {backgroundColor: 'transparent'},
            {
              transform: [{scaleY: animatedSquare}],
            },
          ]}
        />
        <View style={styles.itemContent}>
          <Image resizeMode="contain" style={styles.icon} source={icon} />
          <Text numberOfLines={1} style={styles.itemTitle}>
            {item.routeName}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const iconSize = 22;

const styles = StyleSheet.create({
  item: {
    height: 38,
    borderRadius: 5,
    marginVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemHovered: {
    backgroundColor: '#e3ebef',
  },
  itemSelected: {
    backgroundColor: '#e3ebef',
  },
  itemPressed: {
    // backgroundColor: '#cedce3',
  },
  square: {
    height: 18,
    width: 4,
    // borderRadius: 2,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
    backgroundColor: '#05acff',
    marginRight: 7,
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: iconSize,
    width: iconSize,
    marginRight: 12,
  },
  itemId: {
    fontWeight: '500',
    color: '#333333',
  },
  itemTitle: {
    fontWeight: '500',
    color: '#333333',
  },
  itemDescription: {
    fontWeight: '400',
    color: '#333333',
  },
});
