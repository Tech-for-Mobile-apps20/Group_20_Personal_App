import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#1691b2',
    },
    header: {
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: 10,
    },
    logo: {
      width: 180, 
      height: 60,
      marginTop:20,
      marginRight: 10,
      marginBottom: 40,
    },
    dropdown: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 10,
        backgroundColor: 'white',
        width: '80%', 
      },      
    dropdownText: {
      fontSize: 16,
      color: '#1691b2',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modal: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
    },
    modalItem: {
      paddingVertical: 10,
    },
    card: {
      width: '80%',
      aspectRatio: 1.25, 
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 10,
      overflow: 'hidden',
    },
    flipCard: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backfaceVisibility: 'hidden',
    },
    flipCardBack: {
      position: 'absolute',
      top: 0,
      left: 0,
    },
    question: {
        fontSize: 20,
        marginBottom: 10,
        color: '#1691b2', 
        fontWeight: 'bold', 
        textAlign: 'center', 
        padding: 10, 
        borderRadius: 5,
      },
    answer: {
        fontSize: 20,
        marginBottom: 10,
        color: '#1691b2', 
        fontWeight: 'bold', 
        textAlign: 'center', 
        padding: 10, 
        borderRadius: 5,
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        color: '#1691b2',
    },
    nextButton: {
      marginTop: 10,
      padding: 10,
      backgroundColor: 'white',
      borderRadius: 5,
    },
    restartButton: {
      marginTop: 10,
      padding: 10,
      backgroundColor: 'white',
      borderRadius: 5,
    },
    buttonText: {
      color: '#1691b2',
      fontWeight: 'bold', 
      fontSize: 16,
    },
    finishedContainer: {
      alignItems: 'center',
    },
    finishedScore: {
      color: '#1691b2',
      fontWeight: 'bold', 
      fontSize: 18,
      marginBottom: 20,
    },
  });

  export default styles;
