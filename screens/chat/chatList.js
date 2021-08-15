import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import boyPic from '../../assets/images/boy.png';
export default function ChatList({navigation}) {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={{width: '100%', alignItems: 'center', marginVertical: 10}}>
        <Text style={{color: 'black', fontSize: 20}}>This is ChatList</Text>
      </View>
      <View style={{}}>
        <FlatList
          style={{}}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 50}}
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          renderItem={({index, item}) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('Chat')}
                style={{
                  flexDirection: 'row',
                  marginVertical: 10,
                  alignItems: 'center',
                  paddingHorizontal: 10,
                  paddingVertical: 4,
                  backgroundColor: '#FBFBFB',
                  borderRadius: 10,
                  marginHorizontal: 5,
                  //shadow
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,

                  elevation: 5,
                }}>
                <View style={{padding: 5}}>
                  <Image
                    style={{height: 50, width: 50, borderRadius: 30}}
                    source={boyPic}></Image>
                </View>
                <View
                  style={{
                    flex: 1,
                    paddingLeft: 10,
                  }}>
                  <Text style={{fontSize: 19}}>Name</Text>
                  <Text>{`last message by ${index}`}</Text>
                </View>
                <View style={{padding: 5}}>
                  <Text>12.30PM</Text>
                </View>
              </TouchableOpacity>
            );
          }}></FlatList>
      </View>
    </View>
  );
}
