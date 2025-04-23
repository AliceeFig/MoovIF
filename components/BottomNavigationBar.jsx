import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from '@mdi/react';
import { mdiHome, mdiBusMarker, mdiMicrosoftXboxControllerMenu } from '@mdi/js';

export default function BottomNavigationBar({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Icon path={mdiHome} size={1.5} color={"white"} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Onibus')}>
      <Icon path={mdiBusMarker} size={1.5} color={"white"} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.openDrawer?.()}>
        <Icon path={mdiMicrosoftXboxControllerMenu} size={1.5} color={"white"} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: "#FF6429",
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 20,
  },
  menuButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuCircle: {
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 8,
  },
});
