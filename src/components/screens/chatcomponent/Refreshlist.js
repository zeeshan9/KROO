import React from "react";
import {
  View,
  Hello,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { ListItem, ButtonGroup } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import { getAllKroos, addMember } from "../../../actions/kroo";

export default class Refreshlist extends React.Component {
  constructor(props) {
    super(props);
    this.page = 1;
    this.state = {
      loading: false, // user list loading
      isRefreshing: false, //for pull to refresh
      data: [], //user list
      error: "",
    };
  }

  componentWillMount() {
    this.setState({ loading: true });
    getAllKroos();
    this.setState({ loading: false });
    // this.props.getAllKroos();
    // this.fetchUser(this.page); //Method for API call
  }
  //  flatlist function  starts here
  onPress = (item) => {
    if (true) {
      Alert.alert("JOIN ROOM", "DO you want to join the room", [
        {
          text: "Join",
          onPress: () => {
            this.props.addMember(item.id, this.props.auth.user.id);
            this.props.navigation.navigate("ChatList", { itemId: item.id });
          },
        },
        {
          text: "closed",
        },
      ]);
    } else {
      this.props.navigation.navigate("ChatList", { itemId: item.id });
    }
  };

  renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      subtitle={item.description}
      leftAvatar={{
        source: item.avatar_url && { uri: item.avatar_url },
        title: item.name[0],
      }}
      bottomDivider
      // rightComponent={
      //   <ButtonGroup
      //     onPress={updateIndex}
      //     selectedIndex={selectedIndex}
      //     buttons={buttons}
      //     containerStyle={{ height: 100 }}
      //   />
      // }
      // badge={{
      //   value: "Join",
      //   textStyle: {
      //     color: "white",
      //     fontSize: 20,
      //     borderRadius: 10,
      //     backgroundColor: "silver",
      //     elevation: 10,
      //   },
      //   containerStyle: { margin: 5, padding: 5 },
      // }}
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
      onPress={() => this.onPress(item)}
    />
  );
  handlerResfresh = () => {
    this.props.navigation.navigate("Chat");
    // getAllKroos();
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 2,
          width: "100%",
          backgroundColor: "#CED0CE",
        }}
      />
    );
  };
  renderFooter = () => {
    //it will show indicator at the bottom of the list when data is loading otherwise it returns null
    if (!this.state.loading) return null;
    return <ActivityIndicator style={{ color: "#000" }} />;
  };
  handleLoadMore = () => {
    if (!this.state.loading) {
      this.page = this.page + 1; // increase page by 1
      getAllKroos();
      //   this.fetchUser(this.page); // method for API call
    }
  };

  onRefresh() {
    this.setState({ isRefreshing: true }); // true isRefreshing flag for enable pull to refresh indicator
    getAllKroos();
    this.componentWillMount();
    this.setState({ isRefreshing: true });
    // const url = `https://api.stackexchange.com/2.2/users?page=1&order=desc&sort=reputation&site=stackoverflow`;
    // axios.get(url)
    //   .then(res => {
    //     let data = res.data.items
    //     this.setState({ isRefreshing: false, data: data }) // false isRefreshing flag for disable pull to refresh indicator, and clear all data and store only first page data
    //   })
    //   .catch(error => {
    //     this.setState({ isRefreshing: false, error: 'Something just went wrong' }) // false isRefreshing flag for disable pull to refresh
    //   });
  }

  keyExtractor = (item, index) => index.toString();
  render() {
    return (
      <View style={{ width: "100%", height: "100%" }}>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.allKroosGroup}
          renderItem={this.renderItem}
          // onRefresh={this.handlerResfresh}

          extraData={this.props.allKroosGroup}
          refreshControl={
            <RefreshControl
              //   refreshing={this.state.isRefreshing}
              onRefresh={this.onRefresh.bind(this)}
            />
          }
          ItemSeparatorComponent={this.renderSeparator}
          //   ListFooterComponent={this.renderFooter.bind(this)}
          onEndReachedThreshold={0.4}
          onEndReached={this.handleLoadMore.bind(this)}
        />
      </View>
    );
  }
}
