import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";

import { Avatar, Chip, ListItem, Surface } from "@react-native-material/core";
import { Text, View } from "../components/Themed";

export default function TabTwoScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>As a Student</Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Surface elevation={6} category="medium" style={styles.utmcCard}>
            <TouchableOpacity>
              <Chip
                style={{
                  width: "fit-content",
                  marginLeft: "auto",
                  marginTop: 10,
                  marginRight: 5,
                }}
                label="2021"
                color="black"
              />
              <Avatar
                image={{
                  uri: "https://raw.githubusercontent.com/stefangabos/zebrajs/master/docs/images/logo.png",
                }}
                style={styles.avatar}
              ></Avatar>
              <Text style={styles.position}>Open Source Contribution</Text>
              <Text style={styles.companyTitle}>Zebra Tooltips</Text>
              <ListItem
                title="JavaScript and jQuery"
                secondaryText="Added accessibility, in the form of keyboard functionality, to an open source lightweight tooltip library to show/hide content when it gains/loses focus"
              />
              <ListItem
                title="Tech"
                secondaryText="Technologies used: JavaScript and jQuery"
              />
            </TouchableOpacity>
          </Surface>

          <Surface elevation={6} category="medium" style={styles.pySQLCard}>
            <TouchableOpacity>
              <Chip
                style={{
                  width: "fit-content",
                  marginLeft: "auto",
                  marginTop: 10,
                  marginRight: 5,
                }}
                label="2021"
                color="black"
              />
              <Avatar
                image={{
                  uri: "https://www.pngitem.com/pimgs/m/31-312064_programming-icon-png-python-logo-512-transparent-png.png",
                }}
                style={styles.avatar}
              ></Avatar>
              <Text style={styles.position}>Open Source Contribution</Text>
              <Text style={styles.pySQLTitle}>PySQL</Text>
              <ListItem
                title="Python"
                secondaryText="Wrote a script to automate SQL Server commands, in my case this was used to regain admin/master privileges on QA environments"
              />
              <ListItem
                title="Tech"
                secondaryText="Technologies used: Python, PyODBC, and SQL Alchemy"
              />
            </TouchableOpacity>
          </Surface>

          <Surface elevation={6} category="medium" style={styles.flightCard}>
            <TouchableOpacity>
              <Chip
                style={{
                  width: "fit-content",
                  marginLeft: "auto",
                  marginTop: 10,
                  marginRight: 5,
                }}
                label="2021"
                color="black"
              />
              <Avatar
                image={{
                  uri: "https://static.vecteezy.com/system/resources/thumbnails/000/620/311/small/aviation_logo-06.jpg",
                }}
                style={styles.avatar}
              ></Avatar>
              <Text style={styles.flightPosition}>Software Engineering</Text>
              <Text style={styles.flightTitle}>Flight Scheduler</Text>
              <ListItem
                title="C#"
                secondaryText="Designed and developed a simple flight scheduling desktop app, lead a team of 3"
              />
              <ListItem
                title="Tech"
                secondaryText="Technologies used: C# (.NET Framework 4.8), Windows Forms, SQL Server, Entity Framework, and Git"
              />
            </TouchableOpacity>
          </Surface>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Surface elevation={6} category="medium" style={styles.recipeCard}>
            <TouchableOpacity>
              <Chip
                style={{
                  width: "fit-content",
                  marginLeft: "auto",
                  marginTop: 10,
                  marginRight: 5,
                }}
                label="2021"
                color="black"
              />
              <Avatar
                image={{
                  uri: "https://spoonacular.com/application/frontend/images/spoonacular-logo-b.svg",
                }}
                style={styles.avatar}
                color="green"
              ></Avatar>
              <Text style={styles.telePosition}>Senior Design</Text>
              <Text style={styles.recipeTitle}>Ingredient Scanner</Text>
              <ListItem
                title="React Native"
                secondaryText="Lead the design and development of a mobile app for scanning and tracking ingredients in a team of 6"
              />
              <ListItem
                title="Tech"
                secondaryText="Technologies used: React Native, AWS Cognito, JavaScript + TypeScript, and Git"
              />
            </TouchableOpacity>
          </Surface>

          <Surface elevation={6} category="medium" style={styles.teleCard}>
            <TouchableOpacity>
              <Chip
                style={{
                  width: "fit-content",
                  marginLeft: "auto",
                  marginTop: 10,
                  marginRight: 5,
                }}
                label="2017"
                color="black"
              />
              <Avatar
                image={{
                  uri: "https://image.flaticon.com/icons/png/512/1533/1533105.png",
                }}
                style={styles.avatar}
              ></Avatar>
              <Text style={styles.telePosition}>Private Project</Text>
              <Text style={styles.teleTitle}>Telegram Bot</Text>
              <ListItem
                title="Java"
                secondaryText="Designed and developed a bot for Telegram (Internet Messaging App) to regulate group chats and entertain members"
              />
              <ListItem title="Tech" secondaryText="Technologies used: Java" />
            </TouchableOpacity>
          </Surface>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  avatar: {
    marginTop: 15,
    marginLeft: 170,
  },
  blackPosition: {
    fontSize: 15,
    marginLeft: 110,
    marginTop: 5,
    color: "black",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginTop: 75,
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  companyTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 130,
    marginRight: "auto",
    marginBottom: 10,
    color: "white",
  },
  flightTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 125,
    marginRight: "auto",
    marginBottom: 10,
    color: "white",
  },
  recipeTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 110,
    marginRight: "auto",
    marginBottom: 10,
    color: "white",
  },
  teleTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 130,
    marginRight: "auto",
    marginBottom: 10,
    color: "white",
  },
  pySQLTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 160,
    marginRight: "auto",
    marginBottom: 10,
    color: "white",
  },
  pySupportTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 130,
    marginRight: "auto",
    marginBottom: 10,
    color: "white",
  },
  position: {
    fontSize: 15,
    marginTop: 5,
    marginLeft: 110,
    color: "white",
  },
  telePosition: {
    fontSize: 15,
    marginTop: 5,
    marginLeft: 150,
    color: "white",
  },
  flightPosition: {
    fontSize: 15,
    marginTop: 5,
    marginLeft: 130,
    color: "white",
  },
  utmcCard: {
    flex: 1,
    height: "fit-content",
    width: 400,
    margin: 20,
    backgroundColor: "#66BB6A",
  },
  teleCard: {
    flex: 1,
    width: 400,
    margin: 20,
    backgroundColor: "#F48FB1",
  },
  pySupportCard: {
    flex: 1,
    height: "fit-content",
    width: 400,
    margin: 20,
    backgroundColor: "#F48FB1",
  },
  pySQLCard: {
    flex: 1,
    width: 400,
    margin: 20,
    backgroundColor: "#EF5350",
    height: "fit-content",
  },
  flightCard: {
    flex: 1,
    width: 400,
    margin: 20,
    backgroundColor: "#81D4FA",
    height: "fit-content",
  },
  recipeCard: {
    flex: 1,
    width: 400,
    margin: 20,
    backgroundColor: "#CE93D8",
    height: "fit-content",
  },
});
