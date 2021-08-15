import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import girlPic from '../assets/images/girl.png';
import boyPic from '../assets/images/boy.png';
import randomePic from '../assets/images/pic3.png';
const FlatListAnimation = ({navigation}) => {
  const topImageRef = useRef();
  const thumbRef = useRef();

  const [activeIndex, setIndex] = useState(0);

  const setActiveIndex = index => {
    setIndex(index);
    console.log(index, 'index');
    topImageRef?.current?.scrollToOffset({
      animated: true,
      offset: index * windowWidth,
    });
    if (index * (70 + 5) - 70 / 2 > windowWidth / 2) {
      thumbRef?.current?.scrollToOffset({
        animated: true,
        offset: index * (70 + 5) - windowWidth / 2 + 70 / 2,
      });
    }
  };
  return (
    <View style={{backgroundColor: 'white', height: windowHeight}}>
      <FlatList
        ref={topImageRef}
        style={{}}
        onMomentumScrollEnd={ev => {
          setActiveIndex(
            Math.round(ev.nativeEvent.contentOffset.x / windowWidth),
          );
        }}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        horizontal
        pagingEnabled
        keyExtractor={item => item?.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <View
              // onPress={() => alert(index)}
              style={{
                height: windowHeight,
                width: windowWidth,
              }}>
              <Image
                source={girlPic}
                style={{height: '100%', width: '100%'}}
                // resizeMode="contain"
              />
            </View>
          );
        }}></FlatList>
      <FlatList
        ref={thumbRef}
        style={{
          position: 'absolute',
          bottom: 30,
        }}
        contentContainerStyle={{}}
        onMomentumScrollEnd={ev => {
          setActiveIndex(
            Math.floor(ev.nativeEvent.contentOffset.x / windowWidth),
          );
        }}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        horizontal
        keyExtractor={item => item?.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity onPress={() => setActiveIndex(index)}>
              <Image
                source={girlPic}
                style={{
                  height: 70,
                  width: 70,
                  borderRadius: 10,
                  borderWidth: 2,
                  borderColor: activeIndex === index ? '#fff' : 'red',
                  marginRight: 5,
                }}
              />
            </TouchableOpacity>
          );
        }}></FlatList>
    </View>
  );
};

export default FlatListAnimation;
