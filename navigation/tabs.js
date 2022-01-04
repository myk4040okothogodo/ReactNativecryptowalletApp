import React from "react";
import {
    TouchableOpacity,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { TabIcon } from  "../components";
import { Home, Portfolio, Market, Profile } from "../screens"
import { COLORS, icons } from "../constants"

const Tab = createBottomTabNavigator()

const Tabs = () => {

    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    height: 120,
                    backgroundColor: COLORS.primary,
                    borderTopColor: "transparent",
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options ={{
                    tabBarIcon:({focused}) => {
                        return (
                          <TabIcon 
                             focused = {focused}
                             icon = {icons.home}
                             label= "Home"
                          />
                        )
                    } 
                }}
            />
            <Tab.Screen
                name="Portfolio"
                component={Portfolio}
                options ={{
                      tabBarIcon:({focused}) => {
                          return (
                            <TabIcon
                               focused = {focused}
                               icon = {icons.briefcase}
                               label= "Portfolio"                                                                                                                          
                            />
                          )
                      }                                                                                                                                               
                  }}    
            />
            <Tab.Screen
                name="Trade"
                component={Home}
                options ={{
                      tabBarIcon:({focused}) => {
                          return (
                            <TabIcon
                               focused = {focused}
                               icon = {icons.trade}
                               label= "Trade"
                               isTrade = {true}
                            />
                          )
                      }                                                                                                                                               
                  }}          

      />
            <Tab.Screen
                name="Market"
                component={Market}
                options ={{
                      tabBarIcon:({focused}) => {
                          return (
                            <TabIcon
                               focused = {focused}
                               icon = {icons.Market}
                               label= "Market"
                            />
                          )
                      }                                                                                                                                               
                  }}    

      />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options ={{
                      tabBarIcon:({focused}) => {
                          return (
                            <TabIcon
                               focused = {focused}
                               icon = {icons.profile}
                               label= "Profile"                                                                                                                          
                            />
                          )
                      }                                                                                                                                               
                  }}    
      />
        </Tab.Navigator>
    )
}

export default Tabs;
