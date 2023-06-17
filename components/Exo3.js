import React from 'react';
import { View, StyleSheet,Image,Text } from 'react-native';

const Exo3 = ()=>{
    
    return(
        <View style={styles.container}>
            <View style={[styles.compo,styles.headersize]}>
                <Image 
                source= {require('../assets/MyImages/jeffrey-dahmer-5.jpg')}
                style={styles.profilePicture}
                />
                <Text>Jeffrey</Text>
            </View>
            <View style={[styles.compo,styles.bodysize]}>

            </View>
        </View>
    );
};

const styles =StyleSheet.create({
    container:{
        flex:1,

    },
    compo:{
        backgroundColor:'blue',
        flex:0.3 ,
        borderColor: 'red', 
        borderWidth: 2,
        //padding:80, 
        margin:10,
        //paddingVertical: 30,
    },
    headersize:{
        flex:0.2,
        flexDirection:'row',

    },
    bodysize:{
        flex:0.65,
    },
    profilePicture:{
        width: 100,
        height: 100,
        borderRadius:20,
        margin:10,
    }
});

export default Exo3;