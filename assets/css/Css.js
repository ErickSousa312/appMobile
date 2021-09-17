import {StyleSheet} from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";


const css = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    conainer2:{
        flex:1,
        flexDirection:'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textPage:{
        backgroundColor:'black',
        padding:20
    },
    button__home:{
        marginRight:60,
        marginTop:137,
        marginBottom:140
    },
    button__home2:{
        marginBottom:60,
        backgroundColor:"#fff"
    },
    darkbg:{
        backgroundColor:"#333"
    },
    login__logomarca:{
        marginBottom: 10
    },
    login__msg:(text='none')=>({
        fontWeight:"bold",
        fontSize: 22,
        color:"red",
        marginTop:10,
        marginBottom: 15,
        display: text

    }),
    login__form:{
        width: "80%"
    },
    login__input:{
        backgroundColor: "#fff",
        fontSize: 19,
        padding: 7,
        marginBottom: 15,
        borderRadius:10
    },

    //button cadastrar --------------------------------------------------------------
    login__button:{
        width:'80%',
        height:40,
        backgroundColor: "#00c6fe",
        alignSelf:"center",
        borderRadius:10,
        justifyContent:'center'
    },
    login__buttonText:{
        fontWeight:"bold",
        fontSize: 22,
        color:"white",
        alignSelf:"center",
    },
    //-------------------------------------------------------------------------------

    //Icon login --------------------------------------------------------------------
    login__logomarca:{
        marginBottom: 40,
        width:200,
        height:200,
        resizeMode:"center"
    },
    //-------------------------------------------------------------------------------

    area__menu:{
        flexDirection: 'row',
        paddingTop: 35,
        paddingBottom: 10,
        width: '100%',
        backgroundColor:'#111',
        alignItems:'center',
        justifyContent:'center',
        marginTop:0
    },
    button__home2:{
        textAlign:'left',
        marginLeft:15
    },
    area__title:{
        flex:1,
        width: '80%',
        fontWeight:'bold',
        fontSize:22,
        color:'#999',
        textAlign:'center',
    },
    button__logout:{
        textAlign:'right',
        marginRight:15
    },
    containerTop:{
        justifyContent:'flex-start'
    },
    area__tab:{
        backgroundColor:"black",
        paddingBottom:5,
        paddingTop:5
    },

    //buttons pesquisa--------------------------------------------------------------
    login__button__pesquisa:{
        width: '100%',
        height: 40,
        backgroundColor: "#00c6fe",
        alignSelf: 'center',
        borderRadius:10,
        justifyContent: 'center',
        marginTop:40
    },
    login__buttonText__pesquisa:{
        fontWeight:"bold",
        fontSize: 18,
        color:"#fff",
        alignSelf:"center",
        justifyContent: 'center',
        
    },
    login__button__pesquisa2:{
        width: '100%',
        height: 40,
        backgroundColor: "#00c6fe",
        alignSelf: 'center',
        borderRadius:10,
        justifyContent: 'center',
        marginTop:10
    }
   //-------------------------------------------------------------------------------

});

export{css};