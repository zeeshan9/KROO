import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { ListItem } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAllKroos } from "../../../actions/kroo";
import { showAlert } from "../../../actions/alert";

const ChatGroups = ({
  navigation,
  kroo: { allKroosGroup, loading },
  showAlert,
  getAllKroos,
}) => {
  useEffect(() => {
    getAllKroos();
  }, [getAllKroos, loading]);

  const list = [
    {
      name: "Kroo Group",
      subtitle: "want to to be Motivational join our group",
    },
    {
      name: "zeeshan Group",
      avatar_url:
        "https://www.google.com/search?q=harry+potter&safe=active&rlz=1C1CHBF_enPK831PK831&sxsrf=ALeKk02x3RBhsAVZBc0BRO1iE7q1dYnWZQ:1587893508847&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj3uaSk5IXpAhWx4YUKHXVqBn4Q_AUoAXoECBkQAw&biw=1366&bih=625#imgrc=4xE0oIbyljrGeM", //IMAGE.ICON_PROFILE, //<Image style={styles.iconLogo} source={IMAGE.ICON_PROFILE} />,
      subtitle: "this is a our freind group",
    },
    // more items
  ];

  const renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      subtitle={item.description}
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
      onPress={() => navigation.navigate("ChatList", { itemId: item.id })}
    />
  );

  const keyExtractor = (item, index) => index.toString();
  return (
    // <View>

    // ! loading && allKroosGroup.length > 0b
    //   ? allKroosGroup.map((kroo) => {
    <FlatList
      keyExtractor={keyExtractor}
      data={allKroosGroup}
      renderItem={renderItem}
    />

    // console.log("all kroo " + kroo.id + "name : " + kroo.name);
    //   })
    // : console.log("empty kroo")

    /* {allKroosGroup.length > 0 ? (
        allKroosGroup.map((kroo) => {
          console.log("all kroo " + kroo.id);
        })
      ) : (
        // <FlatList
        //   keyExtractor={allKroosGroup.id}
        //   data={allKroosGroup}
        //   renderItem={renderItem}
        // />
        <View>
          <Text>Kroo not loaded</Text>
        </View>
      )} */
    // </View>
  );
};

ChatGroups.propTypes = {
  navigation: PropTypes.object.isRequired,
  showAlert: PropTypes.func.isRequired,
  getAllKroos: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  kroo: state.kroo,
});

export default connect(mapStateToProps, { getAllKroos, showAlert })(ChatGroups);
