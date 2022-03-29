import React, { useMemo, useRef, useCallback, useState, useEffect, useContext } from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Image, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomSheet from '@gorhom/bottom-sheet';
import colors from '../assets/colors/colors';
import { AppContext } from '../context/App';
import HttpClient from '../services/HttpClient';
import { observer } from 'mobx-react';

const PerfectMatch = () => {
  const {stores: {authStore}} = useContext(AppContext);

  const bottomSheetRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [match, setMatch] = useState('');

  const snapPoints = useMemo(() => [100, 350], []);

  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);

  useEffect(() => {
    if (loaded) {
      bottomSheetRef.current.snapToIndex(1);
      setExpanded(true);
    } else {
      bottomSheetRef.current.close();
    }
  }, [loaded]);

  const expand = () => {
    bottomSheetRef.current.snapToIndex(1);
    setExpanded(true);
  }

  const collapse = () => {
    bottomSheetRef.current.snapToIndex(0);
    setExpanded(false);
  }

  useEffect(() => {
    if (loading) {
      bottomSheetRef.current.snapToIndex(0);

    }
  }, [loading]);

  const search = async () => {
    const client = new HttpClient();
    console.log(authStore.username);
    setLoaded(false);
    setLoading(true);
    const res = await client.client.post('users/match_user/', {username: authStore.username})
    setMatch(res.data.username);
    setLoading(false);
    setLoaded(true);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Идеальный учебный партнер</Text>
      <Text style={styles.subTitle}>Нажмите на кнопку для поиска идеального учебного партнера</Text>
      <TouchableOpacity style={styles.button} onPress={search}>
        <Text style={styles.find}>Найти</Text>
      </TouchableOpacity>
      <Text style={styles.reminder}>Приложение учитывает ваши слабые и сильные предметы, и на этой основе выдает список людей, которые идеально подошли бы вам</Text>
      <BottomSheet
        index={-1}
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enableOverDrag={true}>
        <View style={styles.bottomSheetContentContainer}>
          {
            expanded ? (
              <TouchableOpacity style={styles.sheetClose} onPress={collapse}>
                <Image style={styles.closeIcon} source={require('../assets/icons/close.png')}/>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.sheetExpand} onPress={expand}>
                <Text class={styles.expandIcon}>Open</Text>
              </TouchableOpacity>
            )
          }
          {
            loading ? <ActivityIndicator size="small"/>
            : (
              <View style={styles.viewStyle}>
                <Text style={styles.userName}>{match}</Text>
                <Image source={require('../assets/images/profile.png')} style={styles.avatar}></Image>
              </View>
            )
          }
        </View>
      </BottomSheet>
    </SafeAreaView>
  )
}

export default observer(PerfectMatch);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 16,
  },
  button: {
    height: 150,
    width: 150,
    borderRadius: 20,
    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  find: {
    fontSize: 20,
    color: colors.white,
  },
  reminder: {
    fontSize: 14,
    textAlign: 'center',
  },
  bottomSheetContentContainer: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sheetClose: {
    height: 24,
    width: 24,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  closeIcon: {
    height: 16,
    width: 16,
  },
  sheetExpand: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  expandIcon: {
    fontSize: 36,
  },
  viewStyle: {
    alignItems: 'center',
  },
  userName: {
    fontSize: 34,
    marginBottom: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
  }
})