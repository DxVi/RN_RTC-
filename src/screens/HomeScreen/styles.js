import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
    },
    header: {
        backgroundColor: "white",
        width: '100%',
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#888',
        justifyContent: "center",
        paddingLeft: 10,
    },
    headerText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'dodgerblue',
    },
    nav:{
        backgroundColor: 'white',
        width: '100%',
        height: 25,
        flexDirection: 'row',

    },
    navItem:{
        backgroundColor: 'cyan',
        borderRightColor: 'gray',
        borderRightWidth: 1,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    scrollView:{
        height: 150,
        backgroundColor: 'yellow',
    },
    scrollItem:{
        height: 100,
        width: 100,
        backgroundColor: 'brown',
        padding: 10,
        margin: 10,
    },
    body: {
        backgroundColor: "lightgreen",
        width: '100%',
        height: '100%',
    },
    scrollItemx:{
        height: 150,
        width: '90%',
        backgroundColor: 'purple',
        padding: 10,
        margin: 10,      
        alignSelf: "center",  
    },
    row: {
        padding: 15,
        marginBottom: 5,
        backgroundColor: 'skyblue',
      },
    footer: {
        backgroundColor: "green",
        width: 150,
        height: 150,
    },



    formContainer: {
        flexDirection: 'row',
        height: 80,
        marginTop: 40,
        marginBottom: 20,
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        paddingLeft: 16,
        flex: 1,
        marginRight: 5
    },
    button: {
        height: 47,
        borderRadius: 5,
        backgroundColor: '#788eec',
        width: 80,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 16
    },
    listContainer: {
        marginTop: 20,
        padding: 20,
    },
    entityContainer: {
        marginTop: 16,
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1,
        paddingBottom: 16
    },
    entityText: {
        fontSize: 20,
        color: '#333333'
    }
})