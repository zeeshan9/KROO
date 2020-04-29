import React, { useEffect, useState } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import socketIOClient from "socket.io-client";
import { View, Text } from "react-native";
import { SERVER_URL } from "../../actions/types";
import { showAlert } from "../../actions/alert";
import { ChatUi } from "./ChatUi";

const ChatList = ({ route, navigation, auth: { loading, user } }) => {
  const [socket, setSocket] = useState(null);

  const [messageBoxRef, setMessageBoxRef] = useState(null);

  useEffect(() => {
    // socketIOClient(SERVER_URL);
    // Only get the conversation once not more that once
    // if (socket === null && auth.user === null) {
    //   // getConversationById(match.params.id);
    // }
    if (socket === null) {
      // If the socket is not initalized then create a new socket connection
      setSocket(socketIOClient(SERVER_URL));
    } else {
      const { itemId } = route.params;

      console.log("idhr aaya ha " + itemId + " <=item");
      // If the socket is initilaized and  the user is loaded then add the user to the current room
      socket.emit("joinRoom", {
        user: user.displayName,
        room: itemId,
      });

      // Display message that the other user has joined the chat
      socket.on("joinRoom", (message) => showAlert("sdfss" + message));

      // When a message is received display it in the message box
      // socket.on("message", (conversation) => {
      // addMessage(conversation);
      // Auto scroll to bottom of message box when a new message is entered
      // messageBoxRef.scrollTop = messageBoxRef.scrollHeight;
      // });

      // Auto scroll to bottom of message box when all messages are loaded
      // messageBoxRef.scrollTop = messageBoxRef.scrollHeight;
    }
  }, [socket]);

  return (
    <View>
      <Text>testing</Text>
    </View>
  );
};

ChatList.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(ChatList);

// import React from "react";
// import { GiftedChat } from "react-native-gifted-chat";

// export default class ChatList extends React.Component {
//   state = {
//     messages: [],
//   };

//   componentDidMount() {
//     this.setState({
//       messages: [
//         {
//           _id: 1,
//           text: "Hello developer",
//           createdAt: new Date(),
//           user: {
//             _id: 2,
//             name: "React Native",
//             avatar: "https://placeimg.com/140/140/any",
//           },
//         },
//       ],
//     });
//   }

//   onSend(messages = []) {
//     this.setState((previousState) => ({
//       messages: GiftedChat.append(previousState.messages, messages),
//     }));
//   }

//   render() {
//     return (
//       <GiftedChat
//         messages={this.state.messages}
//         onSend={(messages) => this.onSend(messages)}
//         user={{
//           _id: 1,
//         }}
//       />
//     );
//   }
// }
