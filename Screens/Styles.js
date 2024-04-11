import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollViewContent: {
        paddingVertical: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
    },
    column: {
        flex: 1,
        paddingVertical: 10,
    },
    headerColumn: {
        borderBottomColor: 'black',
    },
    dataColumn: {
        borderBottomColor: '#CBC9D0',
    },
    columnHeader: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black',
    },
    TimeAlign: {
        textAlign: 'center',
        fontSize: 16,
        color: 'black',
    },
    LevelAlign: {
        textAlign: 'left',
        fontSize: 16,
        color: '#3E95F1',
        paddingHorizontal: 10,
    },
    BlindAlign: {
        textAlign: 'right',
        fontSize: 16,
        color: 'black',
        paddingHorizontal: 10,
    },
    backgroundWhite: {
        backgroundColor: 'white',
    },

    //Homescreen.js Styles
    containerHome: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonHome: {
        marginTop: 20, 
        backgroundColor: 'blue',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
      },
      inputHome: {
        height: 40,
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
      },
});

export default styles;
