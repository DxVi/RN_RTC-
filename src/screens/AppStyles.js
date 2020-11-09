import { Platform, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const SCREEN_WIDTH = width < height ? width : height;
const numColumns = 2;

export const AppStyles = {
  color: {
    title: '#2c455d',
    header: '#4267b2',
    item: '#4267b2',
    desc: '#2c455d',
    textS: '#696969',
    textM: '#696969',
    textL: '#696969',
    
    white: 'white',
    black: '#666666',
    border: '#dae4f3',
  },
  fontSize: {
    title: 20,
    header: 17,
    item: 13,
    desc: 13,
    textS: 10,
    textM: 11,
    textL: 12,
  },
 
  
};
//----------------------------------------
export const rtc = {
  //--- Romblon Transport
  romblon:{
    color: AppStyles.color.header,
    fontSize: AppStyles.fontSize.header,
    fontWeight: 'bold',
    textAlign: 'justify',
  },
  transport:{
    opacity: .85,
  },

  //--- Logo
  logoS:{
    width: 40,
    height:40,
    margin: 5,
  },
  logoM:{
    width: 200,
    height: 261,
    margin: 5,
  },
  logoL:{
    width: 300,
    height: 361,
    margin: 5,
  },

  //--- TEXT
  textTitle:{    
    fontWeight: 'bold',
    color: AppStyles.color.title,
    fontSize: AppStyles.fontSize.title,
  },
  textHeader:{
    marginTop: 10,
    marginBottom: 5,
    fontWeight: 'bold',
    color: AppStyles.color.header,
    fontSize: AppStyles.fontSize.header,
  },
  textItem:{
    fontWeight: 'normal',
    color: AppStyles.color.item,
    fontSize: AppStyles.fontSize.item,
  },
  textDesc:{
    fontWeight: 'normal',
    color: AppStyles.color.desc,
    fontSize: AppStyles.fontSize.desc,
  },
  textS:{
    fontWeight: 'normal',
    color: AppStyles.color.textS,
    fontSize: AppStyles.fontSize.textS,
  },
  textM:{
    fontWeight: 'normal',
    color: AppStyles.color.textM,
    fontSize: AppStyles.fontSize.textM,
  },
  textL:{
    fontWeight: 'normal',
    color: AppStyles.color.textL,
    fontSize: AppStyles.fontSize.textL,
  },

  //--- CONTAINER
  containerMain:{
    flex: 1,
    width: '100%',
    backgroundColor: AppStyles.color.white,
  },
  containerRowLeft:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  containerRowRight:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  containerRowCenter:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerColumnCenter:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }


}