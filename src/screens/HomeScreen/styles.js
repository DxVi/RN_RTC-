import {StyleSheet} from 'react-native';
import {AppStyles} from '../../../AppStyles';

export default StyleSheet.create({
    home: {
        backgroundColor: AppStyles.color.white,
        width: '100%',
        height: '100%',
        padding: 20,
    },
    officers:{
        flex: 1,
        alignItems: 'center',
    },
    group:{
        width: '100%',
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center,',
        marginBottom: 10,
        borderStyle: 'dotted',
        borderWidth: 1,
        borderColor: AppStyles.color.border,
      },
      officerCard:{
        backgroundColor: AppStyles.color.border,
        width: 150,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        borderRadius: 20,
        opacity: .8,
      },
      chairman:{
        backgroundColor: AppStyles.color.white,
        width: 400,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
      },
      member:{
        backgroundColor: AppStyles.color.white,
        width: 200,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
      }
});