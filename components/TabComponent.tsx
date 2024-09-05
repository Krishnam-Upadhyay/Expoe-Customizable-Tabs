import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const TabComponent = ({ state, descriptors, navigation }:{state:any,descriptors:any,navigation:any}) => {
    const Icons:any = {
        index:(props:any)=><FontAwesome name="home" size={24} color="black" {...props} />,
        explore:(props:any)=><MaterialIcons name="explore" size={24} color="black"  {...props}/>,
        profile:(props:any)=><FontAwesome name="user" size={24} color="black" {...props}/>, 
        create:(props:any)=><MaterialIcons name="create" size={24} color="black" {...props} />
    }

    const primaryColor="#8803fc";
    const secondaryColor="#9d03fc";
    return (
        <View style={style.tabBar}>
          {state.routes.map((route:any, index:any) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;
               console.log("routeName",route.name);
               if(['_sitemap','[...404]'].includes(route.name)) return null;
            const isFocused = state.index === index;
    
            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });
    
              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name, route.params);
              }
            };
    
            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };
    
            return (
              <TouchableOpacity
              key={route.name}
              style={style.tabItem}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
               
              >
                {Icons[route.name]({
                   color: isFocused?"red":secondaryColor
                })}
                <Text style={{ color: isFocused ? primaryColor : secondaryColor }}>
                  {label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      );
}

export default TabComponent
const style = StyleSheet.create({
    tabBar:{
        position:"absolute",
        bottom:25,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"white",
        marginHorizontal:20,
        paddingVertical:15,
        borderRadius:25,
        borderCurve:"continuous",
        shadowColor:"black",
        shadowOffset:{width:0,height:10},
        shadowRadius:10,
        shadowOpacity:0.5,
    },
    tabItem:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    }
})