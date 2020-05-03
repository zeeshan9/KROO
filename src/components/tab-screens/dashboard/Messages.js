import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  RefreshControl,
  StyleSheet,
} from "react-native";
import { ListItem, ButtonGroup } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAllUsers, createRoomforUsers } from "../../../actions/kroo";
const Messages = ({
  navigation,
  user: { allUsersLoaded, loading },
  showAlert,
  getAllUsers,
  createRoomforUsers,
  // addMember,
  auth,
}) => {
  useEffect(() => {
    getAllUsers();
  }, [getAllUsers, loading]);

  const onPress = (item) => {
    const authid = "yMu2KPzlvyZNkK3jsneSuzJuRCV2";
    // console.log("auth id " + auth.user.id);
    createRoomforUsers(item.id, authid, navigation);
    // navigation.navigate("ChatUi", { itemId: item.id });
    // if (true) {
    //   Alert.alert("JOIN ROOM", "DO you want to join the room", [
    //     {
    //       text: "Join",
    //       onPress: () => {
    //         addMember(item.id, auth.user.id);
    //         navigation.navigate("ChatList", { itemId: item.id });
    //       },
    //     },
    //     {
    //       text: "closed",
    //     },
    //   ]);
    // } else {
    //   navigation.navigate("ChatList", { itemId: item.id });
    // }
  };

  const renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      // subtitle={item.name}
      leftAvatar={{
        source: item.avatar_url && { uri: item.avatar_url },
        title: item.name[0],
      }}
      bottomDivider
      chevron={{ color: "white" }}
      friction={90}
      activeScale={0.95}
      tension={100}
      titleStyle={{ color: "#F5F5F5", fontWeight: "bold" }}
      subtitleStyle={{ color: "#F5F5F5" }}
      linearGradientProps={{
        colors: ["#787878", "#909090"],
        start: { x: 1, y: 0 },
        end: { x: 0.2, y: 0 },
      }}
      onPress={() => onPress(item)}
    />
  );
  const handlerResfresh = () => {
    setisRefreshing(true);
    getAllUsers();
    setisRefreshing(false);
  };
  const [isRefreshing, setisRefreshing] = useState(false);
  const keyExtractor = (item, index) => index.toString();
  return (
    <View style={{ width: "100%", height: "100%" }}>
      {/* <Text>{allUsersLoaded}</Text> */}
      {console.log(allUsersLoaded + " users")}
      <FlatList
        keyExtractor={keyExtractor}
        data={allUsersLoaded}
        renderItem={renderItem}
        onRefresh={handlerResfresh}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={handlerResfresh.bind(this)}
          />
        }
      />
    </View>
  );
};

Messages.propTypes = {
  navigation: PropTypes.object.isRequired,
  showAlert: PropTypes.func.isRequired,
  createRoomforUsers: PropTypes.func.isRequired,
  // addMember: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  auth: state.auth,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});

export default connect(mapStateToProps, { getAllUsers, createRoomforUsers })(
  Messages
);
