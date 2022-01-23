import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";

import { Avatar, Chip, ListItem, Surface } from "@react-native-material/core";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Experience</Text>
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
          <Surface elevation={6} category="medium" style={styles.card}>
            <TouchableOpacity>
              <Chip
                style={{
                  width: "fit-content",
                  marginLeft: "auto",
                  marginTop: 10,
                  marginRight: 10,
                }}
                label="May 2020 - Present"
                color="black"
              />
              <Avatar
                image={{
                  uri: "https://media.glassdoor.com/sqll/1953205/medsys-software-solutions-squarelogo-1527595058646.png",
                }}
                style={styles.avatar}
              ></Avatar>

              <Text style={styles.position}>Software Engineering Co-Op</Text>
              <Text style={styles.companyTitle}>MEDsys Software Solutions</Text>

              <ListItem
                title="C#"
                secondaryText="Designed and developed keyboard functionality for various active
            server pages of a web app using jQuery, JS, and C#"
              />
              <ListItem
                title="SQL Server"
                secondaryText="Designed and developed various SQL scripts to clean and manage
            existing patient and staff data on our SQL Servers"
              />
              <ListItem
                title="Work, Work, Work"
                secondaryText="Debugged, resolved, and tested various production issues across
            the stack with over 165 approved pull requests"
              />
              <ListItem
                title="Tech"
                secondaryText="C#, JavaScript, jQuery, SQL Server, and Git"
              />
            </TouchableOpacity>
          </Surface>
          <Surface elevation={6} category="medium" style={styles.crownCard}>
            <TouchableOpacity>
              <Chip
                style={{
                  width: "fit-content",
                  marginLeft: "auto",
                  marginTop: 10,
                  marginRight: 10,
                }}
                label="Aug 2019 - Dec 2019"
                color="black"
              />
              <Avatar
                image={{
                  uri: "https://i.forbesimg.com/media/lists/companies/crown-equipment_416x416.jpg",
                }}
                style={styles.avatar}
              ></Avatar>
              <Text style={styles.blackPosition}>
                Software Engineering Co-Op
              </Text>
              <Text style={styles.blackCompanyTitle}>
                Crown Equipment Corporation
              </Text>
              <ListItem
                title="Java (SpringBoot)"
                secondaryText="Mostly worked on SpringBoot microservices, designed and developed a solution to fix a
              prod issue when migrating a rental truck's software to a newer
              version"
              />
              <ListItem
                title="Angular, Node.js"
                secondaryText="Developed new versions of deprecated front-end Angular
                components in TypeScript"
              />
              <ListItem
                title="Tech"
                secondaryText="Angular, Java (SpringBoot MVC), AWS Aurora, MySQL, Kibana, and Git"
              />
            </TouchableOpacity>
          </Surface>
          <Surface elevation={6} category="medium" style={styles.utmcCard}>
            <TouchableOpacity>
              <Chip
                style={{
                  width: "fit-content",
                  marginLeft: "auto",
                  marginTop: 10,
                  marginRight: 5,
                }}
                label="Aug 2019 - Dec 2019"
                color="black"
              />
              <Avatar
                image={{
                  uri: "https://www.toledoblade.com/image/2011/07/02/800x_b1_cCM_z/ut-logo-utmc-heart-transplants.jpg",
                }}
                style={styles.avatar}
              ></Avatar>
              <Text style={styles.utmcPosition}>Student IT Technician</Text>
              <Text style={styles.companyTitle}>
                University of Toledo (UTMC)
              </Text>
              <ListItem
                title="Python"
                secondaryText="Designed and developed a python script for the desktop
              support team at the UTMC (Medical Center), to help mass-register
              hundreds of new computers on the iSupport portal in seconds"
              />
              <ListItem
                title="Tech"
                secondaryText="Technologies used: Nexpose, Python, and Selenium (web driver)"
              />
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
  blackCompanyTitle: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 50,
    marginRight: "auto",
    marginBottom: 10,
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
  companyTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 70,
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
  utmcPosition: {
    fontSize: 15,
    marginTop: 5,
    marginLeft: 130,
    color: "white",
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
  crownCard: {
    flex: 1,
    width: 400,
    height: "fit-content",
    margin: 20,
    backgroundColor: "#FBC02D",
    color: "black",
  },
  utmcCard: {
    flex: 1,
    width: 400,
    height: "fit-content",
    margin: 20,
    backgroundColor: "#1E88E5",
    color: "black",
  },
  card: {
    flex: 1,
    width: 400,
    height: "fit-content",
    margin: 20,
    backgroundColor: "purple",
  },
});
