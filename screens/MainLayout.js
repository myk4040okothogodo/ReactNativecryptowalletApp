import React, {useRef} from 'react';
import {
    View,
    Animated
} from 'react-native';
import {COLORS, SIZES, icons} from "../constants";
import {IconTextButton} from "../components";
import { connect } from "react-redux";


const MainLayout = ({ children, isTradeModalVisible }) => {

  const modalAnimatedValue = useRef(new Animated.value(0)).current; 
  return (
    <View
      style ={{
        flex: 1       
      }}
    >
     {children}      

      {/* Modal */}
      <Animated.View
        style={{
          position: 'absolute',
          left: 0,
          //top
          width: "100%",
          padding: SIZES.padding,
          backgroundColor: COLORS.primary  
        }}
      >
       <IconTextButton
         label ="Transfer"
         icon = {icons.send}
         onPress = {() => console.log("Transfer")}
       />
       <IconTextButton
         label="Withdraw"
          icon = {icons.withdraw}
          containerStyle={{
            marginTop: SIZES.base

          }}
          onPress = {() => console.log("withdraw")}
      
       />
         
      </Animated.View>
    </View>
  )
}

function mapStateToProps(state) {
  return {
    isTradeModalVisible: state.tabReducer.isTradeModalVisible;
    
  }

}

function mapDispatchToProps(dispatch){
  return {
    
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout)
