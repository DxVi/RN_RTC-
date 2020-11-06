import { Platform, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const SCREEN_WIDTH = width < height ? width : height;
const numColumns = 2;

export const AppStyles = {
  color: {
    title: '#2c455d',
    header: '#4267b2',
    item: '#4267b2',
    description: '#2c455d',
    text: "#696969",
    
    white: '#FFFFFF',
    black: '#666666',
    border: '#dae4f3',
  },
  fontSize: {
    title: 25,
    header: 20,
    item: 15,
    description: 15,
    text: 12,
  },
  buttonWidth: {
    main: "70%"
  },
  textInputWidth: {
    main: "80%"
  },
  fontName: {
    main: "Noto Sans",
    bold: "Noto Sans"
  },
  borderRadius: {
    main: 25,
    small: 5
  }
};
//-----------------------------------------------------------------------------------------------
export const RTC = {
  romblon:{
    fontSize: AppStyles.fontSize.description,
    fontWeight: 'bold',
    color: AppStyles.color.header,
    fontFamily: 'sans-serif',
  },
  transport:{
    opacity: .85,
  },
  logoS:{
    width: 40,
    height:40,
    margin: 5,
  },
  logoM:{
    width: 250,
    height: 311,
    margin: 5,
  },
  title:{
    fontWeight: 'bold',
    color: AppStyles.color.title,
    fontSize: AppStyles.fontSize.title,
  },
  header:{
    fontWeight: 'bold',
    color: AppStyles.color.header,
    fontSize: AppStyles.fontSize.header,
  },
  item:{
    fontWeight: 'normal',
    color: AppStyles.color.item,
    fontSize: AppStyles.fontSize.description,
  },
  description:{
    // lineHeight: 20,
    fontWeight: 'normal',
    color: AppStyles.color.description,
    fontSize: AppStyles.fontSize.description,
  },
  text:{
    fontWeight: 'normal',
    color: AppStyles.color.text,
    fontSize: AppStyles.fontSize.text,
    // lineHeight: 20,
  },
}


//-----------------------------------------------------------------------------------------------
export const AppIcon = {
  container: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 8,
    marginRight: 10
  },
  style: {
    tintColor: AppStyles.color.tint,
    width: 25,
    height: 25
  },
};

export const HeaderButtonStyle = StyleSheet.create({
  multi: {
    flexDirection: "row"
  },
  container: {
    padding: 10
  },
  image: {
    justifyContent: "center",
    width: 35,
    height: 35,
    margin: 6
  },
  rightButton: {
    color: AppStyles.color.tint,
    marginRight: 10,
    fontWeight: "normal",
    fontFamily: AppStyles.fontName.main
  }
});

export const ListStyle = StyleSheet.create({
  title: {
    fontSize: 16,
    color: AppStyles.color.subtitle,
    fontFamily: AppStyles.fontName.bold,
    fontWeight: "bold"
  },
  subtitleView: {
    minHeight: 55,
    flexDirection: "row",
    paddingTop: 5,
    marginLeft: 10
  },
  leftSubtitle: {
    flex: 2
  },
  avatarStyle: {
    height: 80,
    width: 80
  }
});

// -------------------------------------------------------------------------------------------
 
export const Container = StyleSheet.create({
  main:{
    flex: 1,
    backgroundColor: AppStyles.color.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: AppStyles.color.white,
    width: '100%',
    height: 43,
    borderBottomWidth: 1,
    borderBottomColor: AppStyles.color.border,
  },
  menuIcons:{
    backgroundColor: AppStyles.color.white,
    width: '100%',
    height: 25,
    flexDirection: 'row',
  },
  menuImages:{
    backgroundColor: AppStyles.color.white,
    width: '100%',
    height: 130,
    flexDirection: 'row',
  },
  home: {
    backgroundColor: AppStyles.color.white,
    width: '100%',
    height: '100%',
    padding: 20,
  },
  normal:{
    margin: 10,
  },
  basic:{
    backgroundColor: AppStyles.color.white,
    width: '100%',
    flex: 1,
    alignItems: 'center',
  },
  officers:{
    width: '100%',
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: "center",
  },
  officerCard:{
    backgroundColor: AppStyles.color.white,
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dotted',
    borderWidth: .5,
    borderColor: AppStyles.color.border,
    margin: 5,
  },
  chairman:{
    backgroundColor: AppStyles.color.white,
    width: 350,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dotted',
    borderWidth: .5,
    borderColor: AppStyles.color.border,
    margin: 5,
  }
});
 
