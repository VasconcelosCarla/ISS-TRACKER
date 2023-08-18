import React, {Component} from 'react';
import { 
        Text, 
        View,
        StyleSheet,
        SafeAreaView,
        TouchableOpacity,
        Platform,
        StatusBar,

} from 'react-native';

export default class HomeScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.doidSafeArea} />
                    <View style = {styles.titleBar}>
                        <Text style={styles.titleText}>App Rastreador EEI</Text>
                    </View>
                    <TouchableOpacity style = {styles.routeCard}>
                        <Text style ={styles.routeText}>Localização da EEI</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.routeCard}>
                        <Text style ={styles.routeText}>Meteoros</Text>
                    </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    doidSafeArea:{
        marginTop: Platform.OS === "android"? StatusBar.currentHeight : 0
    },
    titleBar:{
        flex:0.25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText:{
        color: "White",
        fontSize:40,
        fontWeight:'bold'
    },
    routeCard:{
        flex:0.25,
        marginLeft:20,
        marginRight:50,
        marginTop:50,
        borderRadius:30,
        backgroundColor:"white"
    },
    routeText:{
        fontSize:35,
        fontWeight:"bold",
        color: "black",
        marginTop:75,
        paddingLeft:30
    }

})