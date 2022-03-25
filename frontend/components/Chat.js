import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import {
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
} from '../messageStyles';

const Messages = [
  {
    id: '1',
    userName: 'Yerbol Daniarov',
    userImg: require('../assets/images/profile.png'),
    messageTime: '4 минуты назад',
    messageText:
      'Давай соберемся в этом месте:',
  },
  {
    id: '2',
    userName: 'Guldariga Daureneva',
    userImg: require('../assets/images/profile.png'),
    messageTime: '2 часа назад',
    messageText:
      'Будем изучать следующие темы',
  },
  {
    id: '3',
    userName: 'Farida Taraseva',
    userImg: require('../assets/images/profile.png'),
    messageTime: '1 час назад',
    messageText:
      'время встречи обновилось?',
  },
  {
    id: '4',
    userName: 'Amanet Alenov',
    userImg: require('../assets/images/profile.png'),
    messageTime: '1 день назад',
    messageText:
      'Hey there',
  },
  {
    id: '5',
    userName: 'Akhmet Batyrkhanev',
    userImg: require('../assets/images/profile.png'),
    messageTime: '2 дня назад',
    messageText:
      'this is my test for a post of my social app in React Native',
  },
];


const MessagesScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <FlatList
          data={Messages}
          keyExtractor={item=>item.id}
          renderItem={({item}) => (
            <Card onPress={() => navigation.navigate('Messages', {userName: item.userName})}>
              <UserInfo>
                <UserImgWrapper>
                  <UserImg source={item.userImg} />
                </UserImgWrapper>
                <TextSection>
                  <UserInfoText>
                    <UserName>{item.userName}</UserName>
                    <PostTime>{item.messageTime}</PostTime>
                  </UserInfoText>
                  <MessageText>{item.messageText}</MessageText>
                </TextSection>
              </UserInfo>
            </Card>
          )}
        />
      </View>
    );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
