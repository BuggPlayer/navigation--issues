import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import Topcategorylist from "../screen/TopCategorylist";
// import CategoryDetails from "../components/CategoryDetails";
import MaineFiles from "../screen/MaineFiles";
import CategoryDetails from "../components/CategoryDetails";
import Category from "../screen/category";
import Topcategorylist from "../screen/TopCategorylist";

const Stack = createStackNavigator();

const MaineStckaNavigatior = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={MaineFiles}
          options={{ title: " home Category" }}
        />
        <Stack.Screen
          // initialParams="CategoryDetaisl"
          name="CategoryDetails"
          component={CategoryDetails}
          options={{ title: "CategoryDetails" }}
        />

        <Stack.Screen
          // initialParams="CategoryDetaisl"
          name="Category"
          component={Category}
          options={{ title: "Category" }}
        />

        <Stack.Screen
          // initialParams="CategoryDetaisl"
          name="Topcategorylist"
          component={Topcategorylist}
          options={{ title: "Topcategorylist" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MaineStckaNavigatior;
