import React from "react";
import { View, Text, FlatList } from "react-native";

export const ChatUi = ({ messages }) => {
  const renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      subtitle={item.description}
      leftAvatar={{
        source: item.avatar_url && { uri: item.avatar_url },
        title: item.name[0],
      }}
      bottomDivider
      chevron
    />
  );
  const keyExtractor = (item, index) => index.toString();

  return (
    <View>
      {console.log(messages + " <=Message")}
      {/* <FlatList
      keyExtractor={keyExtractor}
      data={messages}
      renderItem={renderItem}
    /> */}
      <Text>dfgsf</Text>
    </View>
  );
};

// import React, { Component } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   Image,
//   Alert,
//   ScrollView,
//   TextInput,
//   FlatList,
//   Button,
// } from "react-native";
// import { IMAGE } from "../../../constants/Images";

// export default class ChatUi extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [
//         {
//           id: 1,
//           date: "9:50 am",
//           type: "in",
//           message: "Lorem ipsum dolor sit amet",
//         },
//         {
//           id: 2,
//           date: "9:50 am",
//           type: "out",
//           message: "Lorem ipsum dolor sit amet",
//         },
//         {
//           id: 3,
//           date: "9:50 am",
//           type: "in",
//           message: "Lorem ipsum dolor sit a met",
//         },
//         {
//           id: 4,
//           date: "9:50 am",
//           type: "in",
//           message: "Lorem ipsum dolor sit a met",
//         },
//         {
//           id: 5,
//           date: "9:50 am",
//           type: "out",
//           message: "Lorem ipsum dolor sit a met",
//         },
//         {
//           id: 6,
//           date: "9:50 am",
//           type: "out",
//           message: "Lorem ipsum dolor sit a met",
//         },
//         {
//           id: 7,
//           date: "9:50 am",
//           type: "in",
//           message: "Lorem ipsum dolor sit a met",
//         },
//         {
//           id: 8,
//           date: "9:50 am",
//           type: "in",
//           message: "Lorem ipsum dolor sit a met",
//         },
//         {
//           id: 9,
//           date: "9:50 am",
//           type: "in",
//           message: "Lorem ipsum dolor sit a met",
//         },
//       ],
//     };
//   }

//   renderDate = (date) => {
//     return <Text style={styles.time}>{date}</Text>;
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <FlatList
//           style={styles.list}
//           data={this.state.data}
//           keyExtractor={(item) => {
//             return item.id;
//           }}
//           renderItem={(message) => {
//             console.log(item);
//             const item = message.item;
//             let inMessage = item.type === "in";
//             let itemStyle = inMessage ? styles.itemIn : styles.itemOut;
//             return (
//               <View style={[styles.item, itemStyle]}>
//                 {!inMessage && this.renderDate(item.date)}
//                 <View style={[styles.balloon]}>
//                   <Text>{item.message}</Text>
//                 </View>
//                 {inMessage && this.renderDate(item.date)}
//               </View>
//             );
//           }}
//         />
//         <View style={styles.footer}>
//           <View style={styles.inputContainer}>
//             <TextInput
//               style={styles.inputs}
//               placeholder='Write a message...'
//               underlineColorAndroid='transparent'
//               onChangeText={(name_address) => this.setState({ name_address })}
//             />
//           </View>

//           <TouchableOpacity style={styles.btnSend}>
//             <Image
//               source={{
//                 uri: IMAGE.ICON_MESSAGE, //"https://png.icons8.com/small/75/ffffff/filled-sent.png",
//               }}
//               style={styles.iconSend}
//             />
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   list: {
//     paddingHorizontal: 17,
//   },
//   footer: {
//     flexDirection: "row",
//     height: 60,
//     backgroundColor: "#eeeeee",
//     paddingHorizontal: 10,
//     padding: 5,
//   },
//   btnSend: {
//     backgroundColor: "#00BFFF",
//     width: 40,
//     height: 40,
//     borderRadius: 360,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   iconSend: {
//     width: 30,
//     height: 30,
//     alignSelf: "center",
//   },
//   inputContainer: {
//     borderBottomColor: "#F5FCFF",
//     backgroundColor: "#FFFFFF",
//     borderRadius: 30,
//     borderBottomWidth: 1,
//     height: 40,
//     flexDirection: "row",
//     alignItems: "center",
//     flex: 1,
//     marginRight: 10,
//   },
//   inputs: {
//     height: 40,
//     marginLeft: 16,
//     borderBottomColor: "#FFFFFF",
//     flex: 1,
//   },
//   balloon: {
//     maxWidth: 250,
//     padding: 15,
//     borderRadius: 20,
//   },
//   itemIn: {
//     alignSelf: "flex-start",
//   },
//   itemOut: {
//     alignSelf: "flex-end",
//   },
//   time: {
//     alignSelf: "flex-end",
//     margin: 15,
//     fontSize: 12,
//     color: "#808080",
//   },
//   item: {
//     marginVertical: 14,
//     flex: 1,
//     flexDirection: "row",
//     backgroundColor: "#eeeeee",
//     borderRadius: 300,
//     padding: 5,
//   },
// });

// import React, { Component, useState } from "react";
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View,
//   StatusBar,
//   PermissionsAndroid,
// } from "react-native";
// import { ChatScreen } from "react-native-easy-chat-ui";
// import { IMAGE } from "../../constants/Images";
// //       sendMessage={sendMessage}
// //     />
// //   );
// // };

// // setmessages(
// //   [
// //     {
// //       id: `1`,
// //       type: "text",
// //       content: "hello world",
// //       targetId: "12345678",
// //       chatInfo: {
// //         avatar: IMAGE.ICON_EURO,
// //         id: "12345678",
// //         nickName: "Test",
// //       },
// //       renderTime: true,
// //       sendStatus: 0,
// //       time: "1542006036549",
// //     },
// //     {
// //       id: `2`,
// //       type: "text",
// //       content: "hi/{se}",
// //       targetId: "12345678",
// //       chatInfo: {
// //         avatar: IMAGE.ICON_EURO,
// //         id: "12345678",
// //         nickName: "Test",
// //       },
// //       renderTime: true,
// //       sendStatus: 0,
// //       time: "1542106036549",
// //     },
// //     {
// //       id: `3`,
// //       type: "image",
// //       content: {
// //         uri:
// //           "https://upload-images.jianshu.io/upload_images/11942126-044bd33212dcbfb8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
// //         width: 100,
// //         height: 80,
// //       },
// //       targetId: "12345678",
// //       chatInfo: {
// //         avatar: IMAGE.ICON_EURO,
// //         id: "12345678",
// //         nickName: "Test",
// //       },
// //       renderTime: false,
// //       sendStatus: 0,
// //       time: "1542106037000",
// //     },
// //     {
// //       id: `4`,
// //       type: "text",
// //       content: "你好/{weixiao}",
// //       targetId: "88886666",
// //       chatInfo: {
// //         avatar: require("../../source/avatar.png"),
// //         id: "12345678",
// //       },
// //       renderTime: true,
// //       sendStatus: -2,
// //       time: "1542177036549",
// //     },
// //     {
// //       id: `5`,
// //       type: "voice",
// //       content: {
// //         uri:
// //           "http://m10.music.126.net/20190810141311/78bf2f6e1080052bc0259afa91cf030d/ymusic/d60e/d53a/a031/1578f4093912b3c1f41a0bfd6c10115d.mp3",
// //         length: 10,
// //       },
// //       targetId: "12345678",
// //       chatInfo: {
// //         avatar: IMAGE.ICON_EURO,
// //         id: "12345678",
// //         nickName: "Test",
// //       renderTime: true,
// //       sendStatus: 1,
// //       time: "1542260667161",
// //     },
// //     {
// //       id: `6`,
// //       type: "voice",
// //       content: {
// //         uri:
// //           "http://m10.music.126.net/20190810141311/78bf2f6e1080052bc0259afa91cf030d/ymusic/d60e/d53a/a031/1578f4093912b3c1f41a0bfd6c10115d.mp3",
// //         length: 30,
// //       },
// //       targetId: "88886666",
// //       chatInfo: {
// //         avatar: require("../../source/avatar.png"),
// //         id: "12345678",
// //       },
// //       renderTime: true,
// //       sendStatus: 0,
// //       time: "1542264667161",
// //     },
// //   ],
// //   // chatBg: require('../../source/bg.jpg'),
// //   (inverted: false), // require
// //   (voiceHandle: true),
// //   (currentTime: 0),
// //   (recording: false),
// //   (paused: false),
// //   (stoppedRecording: false),
// //   (finished: false),
// //   (audioPath: ""),
// //   (voicePlaying: false),
// //   (voiceLoading: false)
// // );
