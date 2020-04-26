import React from "react";
import { GiftedChat } from "react-native-gifted-chat";

export default class ChatList extends React.Component {
  state = {
    messages: [],
  };

  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: "Hello developer",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
            avatar: "https://placeimg.com/140/140/any",
          },
        },
      ],
    });
  }

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(messages) => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    );
  }
}

// import React from "react";
// import { View, StyleSheet, Text } from "react-native";

// export const ChatList = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.userName}>
//         <Text>userName</Text>
//       </View>
//       <Text>Chat list here</Text>
//       {/* Flat list or gifted chat */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "column",
//     width: "100%",
//   },
//   userName: {
//     alignSelf: "center",
//     flex: 1,
//   },
//   text: {
//     flex: 1,
//     fontSize: 20,
//   },
// });
