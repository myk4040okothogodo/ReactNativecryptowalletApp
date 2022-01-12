import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { MainLayout} from "./";
import { connect } from 'react-redux';
import { getHoldings , getCoinMarket } from '../stores/market/marketActions';
import { useFocusEffect} from "@react-navigation/native";
import {SIZES, COLORS, FONTS, icons, dummyData} from "../constants";
import { BalanceInfo } from "../components"


const Home = ({getHoldings, getCoinMarket, myHoldings, coins}) => {
    
    useFocusEffect(
      React.useCallback(() => {
          getHoldings(holdings = dummyData.holdings)
          getCoinMarket()
      }, [])
    )
    
    let totalWallet = myHoldings.reduce((a,b) => a + (b.total || 0),  0)
    
    let valueChange = myHoldings.reduce((a, b) => a + (b.holding_value_change_7d || 0), 0)
    let percChange = valueChange / (totalWallet - ValueChange) * 100
    
    function renderWalletINfoSection() {
      return (
        <View
          style ={{
            paddingHorizontal: SIZES.padding,
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
            backgroundColor: COLORS.gray
          }}
        
        >
          {/* Balance Info*/}
          <BalanceInfo 
            title="Wallet"
            displayAmount="45,000"
            changePct ={percChange}
            containerStyle={{
              marginTop: 50
            
            }}
          
          />
          {/* Buttons */}
        </View>
      
      )
    
    }
    return (
      <MainLayout>
        <View
         style ={{
           flex:1,
           backgroundColor: COLORS.black
         
         }}
        >
        {/* Header-Wallet Info*/}
        {renderWalletInfoSection()}
            
        </View>
      </MainLayout>
    )
}

function mapStateToProps(state) {
  return {
     myHoldings: state.marketReducer.myHoldings,
     coins: state.marketReducer.coins
  }
}
function mapDispatchToProps(dispatch){
  return {
    getHoldings: (holdings, currency, coinList, orderBy, sparkline, priceChangePerc, perPage, page) => {
      return dispatch(getHoldings(holdings, currency, coinList, orderBy, sparkline, priceChangePerc, perPage, page))
    },
    
    getCoinMarket: (currency, coinList, orderBy, sparkline, priceChangePerc, perPage, page) => {
      return dispatch(getCoinMarket(currency, coinList, orderBy, sparkline, priceChangePerc, perPage, page))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
