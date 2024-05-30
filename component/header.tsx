import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";

export const Profile = () => {
  const userName = " 田中太郎";
  const profileText = "私はフロントエンドエンジニアです\n趣味は将棋です。昔大会に出たことあります笑";

  return (
    <SafeAreaView>
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.leftContainer}>
        <Image
            style={styles.profImage}
            source={{
              uri: "https://picsum.photos/id/10/300/300",
            }}
          />
        </View>
        <View style={styles.rightContainer}>
            <Text style={styles.userName}>{userName}</Text>
            <Text style={styles.profileText}>{profileText}</Text>
        </View>
      </View>
    </View>
    </SafeAreaView>
  );
}

// CSS in JSのようなスタイルの書き方
const styles = StyleSheet.create({
    // CSSの class="container" に相当する 
    container: {
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 120,
      flex: 1,
      backgroundColor: "#eee",
      alignItems: "center",
    },
    itemContainer: {
      height: 100,
      width: "100%",
      flexDirection: "row",
    },
    leftContainer: {
      width: 100,
      borderRadius: 50,
    },
    rightContainer: {
      flex: 1,
      backgroundColor: "white",
    },
    profImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
      },
      userName: {
        paddingLeft: 10,
        fontSize: 18,
      },
      profileText: {
        paddingTop: 5,
        paddingLeft: 10,
        fontSize: 14,
        color: "gray",
      },
  });