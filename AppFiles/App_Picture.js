import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";
import logo from "./assets/logo.png";
import * as ImagePicker from "expo-image-picker";
import * as Sharing from "expo-sharing";

export default function App() {
  const [localUri, setLocalUri] = useState("");
  // 异步获取图片
  let openImagePickerAsync = async () => {
    // 首先获取权限
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    // 如果权限获取失败
    if (permissionResult.granted === false) {
      alert("需要文件媒体读写的权限！");
      return;
    }

    // 没有进入上面的 if，说明权限获取成功
    // 异步打开图片选择器，并且返回用户的图片选择结果
    let pickerResult = await ImagePicker.launchImageLibraryAsync();


    // 如果用户没有选择图片
    if (pickerResult.canceled === true) {
      // 进入此 if，说明用户没有选择图片
      return;
    }

    // 没有进入上面的 if，说明用户选择了图片
    setLocalUri(pickerResult.assets[0].uri);
  };

  // 分享图片
  let openShareDialogAsync = async () => {
    if (Platform.OS === "web") {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }

    await Sharing.shareAsync(localUri);
  };

  // 返回首页
  let goBack = () => {
    setLocalUri("");
  };

  // 如果 selectedImage 里面有内容，就显示图片
  if (localUri) {
    return (
      <View style={styles.container}>
        <Image source={{ uri: localUri }} style={styles.thumbnail} />

        <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
          <Text style={styles.buttonText}>分享照片</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={goBack} style={styles.button}>
          <Text style={styles.buttonText}>重新选择</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />

      <Text style={styles.instructions}>
        按下按钮，与朋友分享手机中的照片！
      </Text>

      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>选择照片</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 10,
  },
  instructions: {
    color: "#888",
    fontSize: 18,
    marginHorizontal: 15,
    textAlign: "center",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "blue",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
});
