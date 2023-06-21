import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/colors';
import {Pressable} from 'react-native';

export function Section({
  title = 'Microsoft 365 Family',
  description = 'Premiun office apps, OneDrive cloud storage, and more',
  icon = '\uE770',
  ...rest
}) {
  const [onHover, setOnHover] = useState(false);
  const onMouseEnter = () => setOnHover(true);
  const onMouseLeave = () => setOnHover(false);
  return (
    <Pressable {...rest}>
      <View
        style={styles.section}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}>
        <Text style={[styles.icon]}>{icon}</Text>
        <View style={{marginLeft: 12}}>
          <Text style={styles.sectionContentTitle}>{title}</Text>
          <Text style={styles.sectionContentDescription}>{description}</Text>
        </View>
        <Text style={[styles.icon, styles.iconSmall]}>{'\uE76C'}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  section: {
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 21,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.border,
    marginVertical: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontFamily: 'Segoe MDL2 Assets',
    fontSize: 24,
    color: '#333333',
  },
  sectionContentTitle: {
    fontSize: 16,
    color: '#333333',
    fontWeight: '500',
  },
  sectionContentDescription: {
    fontSize: 14,
    color: '#888888',
    fontWeight: '500',
  },
  iconSmall: {
    fontSize: 16,
    fontWeight: '800',
    marginLeft: 'auto',
  },
});
