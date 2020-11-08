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
  textAlign:{
    auto: 'auto',
    left: 'left', 
    right: 'right', 
    center: 'center', 
    justify: 'justify',
  }, 
  fontStyles:{
    normal: 'normal', 
    italic: 'italic',
  },
  fontWeight:{
    normal: 'normal',
    bold: 'bold',
  },
  
};
//----------------------------------------
export const rtc = {
  //--- Romblon Transport
  romblon:{
    color: AppStyles.color.header,
    fontSize: AppStyles.fontSize.desc,
    fontWeight: AppStyles.fontWeight.bold,
    textAlign: AppStyles.textAlign.justify,
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
    color: AppStyles.color.title,
    fontSize: AppStyles.fontSize.title,
    fontWeight: AppStyles.fontWeight.bold,
  },
  textHeader:{
    marginTop: 10,
    marginBottom: 5,
    color: AppStyles.color.header,
    fontSize: AppStyles.fontSize.header,
    fontWeight: AppStyles.fontWeight.bold,
  },
  textItem:{
    color: AppStyles.color.item,
    fontSize: AppStyles.fontSize.item,
    fontWeight: AppStyles.fontWeight.normal,
  },
  textDesc:{
    color: AppStyles.color.desc,
    fontSize: AppStyles.fontSize.desc,
    fontWeight: AppStyles.fontWeight.normal,
  },
  textS:{
    color: AppStyles.color.textS,
    fontSize: AppStyles.fontSize.textS,
    fontWeight: AppStyles.fontWeight.normal,
  },
  textM:{
    color: AppStyles.color.textM,
    fontSize: AppStyles.fontSize.textM,
    fontWeight: AppStyles.fontWeight.normal,
  },
  textL:{
    color: AppStyles.color.textL,
    fontSize: AppStyles.fontSize.textL,
    fontWeight: AppStyles.fontWeight.normal,
  },

  //--- CONTAINER
  containerMain:{
    flex: 1,
    width: '100%',
    backgroundColor: AppStyles.color.border,
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