import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import backArrow from '../../assets/icons/backArrow.png';
import add from '../../assets/icons/vector.png';
import camera from '../../assets/icons/camera.png';
import boyPic from '../../assets/images/boy.png';

export default function Chat({navigation}) {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View
        style={{
          width: '100%',
          backgroundColor: '#2BD1FC',
          paddingTop: 10,
          paddingBottom: 20,
        }}>
        <TouchableOpacity
          style={{marginLeft: 20, padding: 5, marginVertical: 10}}
          onPress={() => navigation.navigate('ChatList')}>
          <Image
            source={backArrow}
            style={{height: 20, width: 40}}
            resizeMode="contain"></Image>
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: '#FBFBFB',
            borderRadius: 20,
            width: '90%',
            alignSelf: 'center',
            flexDirection: 'row',
            paddingVertical: 10,
            paddingHorizontal: 10,
            alignItems: 'center',
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
          <View>
            <Image
              source={boyPic}
              style={{height: 60, width: 60, borderRadius: 30}}></Image>
          </View>
          <View
            style={{
              paddingLeft: 10,
              height: 60,
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Faizan</Text>
            <Text style={{fontSize: 13}}>12.35PM</Text>
            <Text style={{fontSize: 16}}>Hi dear what's happining!</Text>
          </View>
        </View>
      </View>
      <View style={{flex: 1, backgroundColor: 'red'}}></View>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          paddingHorizontal: '10%',
          paddingVertical: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'green',
        }}>
        <View
          style={{
            width: '80%',
            paddingHorizontal: 10,
            alignItems: 'center',
            backgroundColor: 'white',
            height: 50,
            borderRadius: 20,
            flexDirection: 'row',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            elevation: 3,
          }}>
          <View
            style={{
              backgroundColor: '#2BD1FC',
              borderRadius: 100,
              alignItems: 'center',
              justifyContent: 'center',
              padding: 5,
            }}>
            <Image
              source={add}
              style={{height: 15, width: 15, borderRadius: 20}}
              resizeMode={'contain'}></Image>
          </View>
          <View style={{}}></View>
        </View>
        <View
          style={{
            width: '20%',
            alignItems: 'flex-end',
          }}>
          <View
            style={{backgroundColor: '#2BD1FC', padding: 15, borderRadius: 30}}>
            <Image
              style={{
                height: 20,
                width: 20,
                tintColor: 'white',
              }}
              source={camera}></Image>
          </View>
        </View>
      </View>
    </View>
  );
}
