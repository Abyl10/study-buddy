import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Dimensions,  TextInput, TouchableOpacity} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MapView, { Marker, Circle } from "react-native-maps";
import * as Location from "expo-location";
import { FontAwesome5 } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");

const MapScreen = (props) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [mapRegion, setMapRegion] = useState(null);
  const [info] = useState([
  {
    subject: "Discrete Math",
    topic: "Quiz Prep",
    data: "22/02/2022",
    locationName: "Coworking DC Lab",
    icon: "dot-circle",
    location: {
      longitude: "68.25",
      latitude: "48.70"
    },
  },  
  {
    subject: "Discrete Math",
    topic: "Quiz Prep",
    data: "22/02/2022",
    locationName: "Coworking DC Lab",
    icon: "dot-circle",
    location: {
      longitude: "71.48",
      latitude: "51.18"
    },
  },
  ]);
  const [friends] = useState([
    {
      username: "Подготовка к квизу",
      description: "Алгебра",
      icon: "dot-circle",
      location: {
        longitude: "68.25",
        latitude: "48.70"
      }
    },
    {
      username: "Подготовка к мидке",
      description: "Химия",
      icon: "dot-circle",
      location: {
        longitude: "71.48",
        latitude: "51.18"
      }
    },
    {
      username: "Разобрать вопросы IELTS",
      description: "Английский язык",
      icon: "dot-circle",
      location: {
        longitude: "71.39",
        latitude: "51.15"
      }
    }
  ]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      setMapRegion({
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
        longitudeDelta: 0.0922,
        latitudeDelta: 0.0421
      });
    })();
  }, []);

  const [isVerified, setIsVerified] = useState(false);

  return (
    <View style={styles.container}>


      <StatusBar style="auto" />
      <MapView
        initialRegion={mapRegion}
        mapType="terrain"
        style={styles.mapView}
      >
        {mapRegion ? (
          <Circle
            center={{
              longitude: mapRegion.longitude,
              latitude: mapRegion.latitude
            }}
            radius={600}
            strokeColor="transparent"
            fillColor="blue"
          ></Circle>
        ) : null}
        {mapRegion ? (
          <Marker 
            coordinate={{
              longitude: mapRegion.longitude,
              latitude: mapRegion.latitude
            }}
            title="Me"
            description="Myself"
          >
            <View style={styles.circle}>
              <View style={styles.core} />
              <View style={styles.stroke} />
            </View>
          </Marker>
        ) : null}

        {friends
          ? friends.map((friend) => (
              <Marker
                coordinate={friend.location}
                title={friend.username}
                description={friend.description}
              >
                <FontAwesome5
                  name={friend.icon}
                  size={26}
                  style={{ color: "blue" }}
                />
              </Marker>
            ))
          : null}
      </MapView>

      <View style={styles.searchBoxHeader}>
        <View style={styles.searchBox}>
          <Ionicons name="ios-search" size={20} style={{marginLeft: 5,}}/>
          <TextInput
            placeholder="Search here"
            placeholderTextColor="#000"
            autoCapitalize="none"
            style={{flex:1,padding:0, marginLeft: 5}}
          />
          <Ionicons name="filter-outline" size={20} style={{marginHorizontal: 10}} />


        </View>
        <View style = {styles.check}>
          <TouchableOpacity style={isVerified ? styles.verified : styles.notverified} onPress={() => setIsVerified(true)}>
            <View styles={styles.verified}>
              <Text style={[{ color: isVerified ? 'black' : 'white' }, styles.verifiedText]}>Верифицированные</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={isVerified ? styles.notverified : styles.verified} onPress={() => setIsVerified(false)}>
            <View styles={styles.notverified}>
              <Text style={[{ color: isVerified ?  'white' : 'black'}, styles.verifiedText]}> Неверифицированные</Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex:1,
  },
  searchBoxHeader: {
    backgroundColor: '#29303E',
    width: '100%',
    height: 170,
    justifyContent: 'space-around',
  },
  searchBox: {
      //position:'absolute',
      marginTop: Platform.OS === 'ios' ? 40 : 20,
      flexDirection:"row",
      backgroundColor: '#fff',
      width: '90%',
      alignSelf:'center',
      borderRadius: 7,
      padding: 10,
      //shadowColor: '#ccc',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: 10,
    },

    check: {
      flexDirection: 'row',
      marginHorizontal: 20,
    },
    verified: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '50%',
      height: 25,
      borderRadius: 20,
      backgroundColor: '#fff',
    },
    notverified: {
      backgroundColor: "#29303E",
      alignItems: 'center',
      justifyContent: 'center',
      width: '50%',
      height: 25,
      borderRadius: 20,
    },
    verifiedText: {
      fontFamily: 'Roboto',
      fontWeight: '400',
      fontSize: 13,
    },
  mapView: {
		//opacity: 0.2,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,

  },

  circle: {
    width: 26,
    height: 26,
    borderRadius: 50,
		opacity:1,

  },
  stroke: {
    backgroundColor: "#ffffff",
    borderRadius: 50,
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
  core: {
    backgroundColor: "blue",
    width: 24,
    position: "absolute",
    top: 1,
    left: 1,
    right: 1,
    bottom: 1,
    height: 24,
    borderRadius: 50,
    zIndex: 2,

  }

});

export default MapScreen;
