import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import Message from '../../components/message';
import {RefreshPage} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();
// 1648057844661
type TNavigation = {
  navigate: (str: string) => void;
};

type THomeScreen = {
  navigation: Partial<TNavigation>;
};

const HomeScreen = ({navigation}: THomeScreen) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response: any = await fetch('http://localhost:3001/messages', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
      },
    });

    if (response.status === 200 && response?._bodyInit) {
      const dataResponse = JSON.parse(response._bodyInit);
      setData(
        dataResponse.map((item: any) => {
          return {
            id: item.Id,
            subject: item.Subject,
            marked: item.Marked,
            detail: item.Detail,
            timestamp: item.Timestamp,
          };
        }),
      );
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const onPress = useCallback(() => {
    getData();
  }, []);

  return (
    <SafeAreaView>
      <RefreshPage>
        <Icon.Button
          name="refresh"
          backgroundColor="#3b5998"
          onPress={onPress}
        />
      </RefreshPage>
      <FlatList
        initialScrollIndex={0}
        initialNumToRender={0}
        data={data.sort((a: any, b: any) => b.timestamp - a.timestamp)}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <Message navigation={navigation} {...item} />}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
