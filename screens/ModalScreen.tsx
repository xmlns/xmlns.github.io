import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Linking } from "react-native";

import { Text, View } from "../components/Themed";
import { TextInput, Button, Avatar } from "@react-native-material/core";
import { useState, useEffect } from "react";

export default function ModalScreen() {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [href, setHref] = useState("");

  const updateAnchorHref = () => {
    const subject = encodeURIComponent(`Hey Amogh, ${name} here`);
    setHref(
      `mailto:amogh4200@gmail.com?subject=${subject}&body=${encodeURIComponent(
        msg
      )}`
    );
  };

  useEffect(() => {
    if (name && msg) {
      updateAnchorHref();
    }
  }, [name, msg]);

  return (
    <View style={styles.container}>
      <Avatar
        image={{
          uri: "https://media-exp1.licdn.com/dms/image/C4E03AQEMEaFrt6meBA/profile-displayphoto-shrink_400_400/0/1577499359514?e=1647475200&v=beta&t=XG3q2WLmYtbQVBCpphvBiAsyg_tMFV7LaNbpn8aR1F8",
        }}
        size={120}
      />
      <Text style={styles.title}>Contact</Text>
      <Text style={styles.marginTop10}>
        <i>
          You can reach me either via email or {}
          <a href="https://www.linkedin.com/in/amogh-jar" target="_blank">
            LinkedIn
          </a>
        </i>
      </Text>

      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      <TextInput label="Your Name" onChangeText={(name) => setName(name)} />

      <TextInput
        label="Brief Message"
        style={styles.marginTop20}
        onChangeText={(msg) => setMsg(msg)}
      />

      <Button
        title="Email"
        style={styles.marginTop20}
        onPress={() => href && Linking.openURL(href)}
      ></Button>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  marginTop10: {
    marginTop: 10,
  },
  marginTop20: {
    marginTop: 20,
  },
  title: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
