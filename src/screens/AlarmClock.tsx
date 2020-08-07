import React from 'react'

import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Animated,
  Easing,
  TouchableWithoutFeedback,

} from 'react-native';
import global_styles from "../assets/styles/global_styles"
import { calcFontSize, calcHeight, calcWidth } from "../assets/styles/dimensions"
import Header from "../components/Header"
import Search from "../components/Search"
import { IMenuProps } from "../Interface"
import { changeMenuType } from '../store/actions/menuActions'
import HeaderByBack from "../components/HeaderByBack"
import PlaySvG from "../assets/icons/play.svg"
import RadioMenuElement from "../components/RadioMenuElement"
import { storeData, getData } from "../utils/local_storage"
import SimpleImage from "../components/SimpleImage"
import { connect } from "react-redux"
import ConnectSvg from "../assets/icons/connect.svg"
import ArrowLeft from "../assets/icons/arrow_right.svg"
import AlarmClockSvg from "../assets/icons/alarmClock.svg"
import DateTimePicker from '@react-native-community/datetimepicker';
import RepeatSvg from "../assets/icons/repeat.svg"
import { Switch } from 'react-native-switch';
import SimpleSwitch from '../components/SimpleSwitch';

interface IState {
  data: any,
  isEnabled: boolean
}

class AlarmClock extends React.Component<IMenuProps, IState> {
  constructor(props: IMenuProps) {

    super(props)
    this.state = {
      // radioList: [
      //   'Новое радио',
      //   'Радио Energy',
      //   'Русское радио',
      //   'Европа Плюс',
      //   'Новое радио',
      //   'Радио Energy',
      //   'Русское радио',
      //   'Европа Плюс',
      //   'Европа Плюс',
      //   'Европа Плюс',
      //   'Европа Плюс',
      //   'Радио Energy',
      //   'Русское радио',
      //   'Европа Плюс',
      //   'Радио Energy',
      //   'Русское радио',
      //   'Европа Плюс',

      // ],
      data: new Date(1598051730000),
      isEnabled: true

    }
    // const unsubscribe = props.navigation.addListener('focus', () => {
    //     this.setData()
    //   });

  }
  onChange() {
    return<View>

    </View>
   }

  render() {

    return (

      <View style={styles.container}>
        <HeaderByBack title='Будильник' onNavigate={() => { this.props.navigation.goBack() }} />
        <View style={styles.radiostation}>
          <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
            <ConnectSvg height={calcHeight(20)} width={calcHeight(20)} fill='#B3BACE' />
            <View style={{ marginLeft: calcWidth(17) }}>

              <Text style={global_styles.stationTexttitle}>
                Радиостанция
            </Text>
              <Text style={global_styles.stationComment}>Новое радио</Text>
            </View>
          </View>
          <ArrowLeft height={calcHeight(12)} width={calcWidth(6.84)} fill='#B3BACE' />
        </View>
        <View>

        </View>
        <View style={styles.radiostation}>
          <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
            <RepeatSvg height={calcHeight(21)} width={calcHeight(21)} fill='#B3BACE' />
            <View style={{ marginLeft: calcWidth(17) }}>

              <Text style={global_styles.stationTexttitle}>Повтор</Text>
            </View>
          </View>
          <View>
            <SimpleSwitch/>
          </View>
        </View>
        <View style={styles.radiostation}>
          <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
            <AlarmClockSvg height={calcHeight(26.88)} width={calcHeight(28)} fill='#B3BACE' />
            <View style={{ marginLeft: calcWidth(17) }}>

              <Text style={global_styles.stationTexttitle}>
                Частота повторений
            </Text>
              <Text style={global_styles.stationComment}>10 мин</Text>
            </View>
          </View>
          <ArrowLeft height={calcHeight(12)} width={calcWidth(6.84)} fill='#B3BACE' />
        </View>
      </View>
    );
  }
};
const mapStateToProps = (state: any) => {
  return state
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    onChangeMenuType: (payload: any) => {
      dispatch(changeMenuType(payload))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AlarmClock);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  radiostation: {
    height: calcHeight(74),
    marginTop: calcFontSize(21),
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#F3F4F5',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: calcWidth(24),
    paddingRight: calcWidth(26.58)

  },

})
