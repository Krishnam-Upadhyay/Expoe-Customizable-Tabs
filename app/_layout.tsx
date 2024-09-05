import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import TabComponent from "../components/TabComponent";

const _layout = () => {
  return (
    <Tabs
    tabBar={(props:any)=><TabComponent {...props}/>}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Index",
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
        }}
      />
    </Tabs>
  );
};

export default _layout;
