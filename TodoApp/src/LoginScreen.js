import React, { Component } from 'react'
import { Dimensions, View, Image, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import {Card, Container, Content, Form, Input, Item, Label, Right} from 'native-base'

//import {connect} from 'react-redux';
//import {Card, Container, Content, Form, Input, Item, Text} from 'native-base'
//import md5 from 'md5';

// import {action_LoadingIndicator, action_UserLogin} from '../../redux/action';
// import * as globals from '../../globals/globals';
// import CustomButton from "../../components/views/CustomButton";
// import AppMessages from "../../globals/MessageConstants";
// import AppConstants from "../../globals/AppConstants";
// import AppColor from "../../globals/ColorConstants";
// import Validation from "../../todoapp/src/reusableComponents/ValidationManager";
// import HeliconiaView from "./HeliconiaView";

const {height, width} = Dimensions.get("window");

 export class LoginScreen extends Component {

    state = {
        id: '',
        password: ''
     }

     signInTap = () => {

         if(this.state.id=="" || this.state.password==""){
            alert('input id or password');
         }else if(this.state.password.length<6){
            alert("password length over than 6 characters. ");
         }else{
            if(this.state.id=="admin" && this.state.password=="123456"){
               
               this.login(this.state.id, this.state.password);
            } else{
               alert("Invalid id and password");
            }
            
         }
         // if (!Validation.emptyTextInput(this.state.id, AppMessages.PROMPT_MOBILE) ||
         //    !Validation.emptyTextInput(this.state.password, AppMessages.PROMPT_PWD)) {
         //    return;
         // }

         
   }

     handleId = (text) => {
        this.setState({ id: text })
     }
     handlePassword = (text) => {
        this.setState({ password: text })
     }
     register = () => {
      alert('dsfaasddf')
     } 
     login = (id, pass) => {
        //alert('id: ' + id + ' password: ' + pass)
        this.props.navigation.navigate("mainScreen")
     }
     render() {
        return (
            <Container>
               <Content contentContainerStyle={{flex: 1}}>
                  
                  <View style = {styles.container}>
                     <Image source={require('../../todoapp/assets/img/login.png')}
                           style={{
                              width: width,
                              height: height/2,
                              marginBottom:10,
                              alignSelf: 'center',
                              resizeMode: 'contain'
                           }}/>
                     <Form>
                           <Item
            
                                 style={{
                                    marginLeft: 0,
                                    borderBottomWidth: 0,
                                    borderRadius: 3,
                                    marginBottom: 20,
                                    backgroundColor: "rgba(0, 0, 0, 0.07)"
                                 }}>
                                 <Input
                                    placeholder='ID'
                                    style={{paddingLeft: 20, paddingRight: 20}}
                                    returnKeyType={"next"}
                                    maxLength={10}
                                    blurOnSubmit={true}
                                    onChangeText={(text) => {
                                       this.setState({id: text})
                                    }}
                                 />
                           </Item>
                           <Item
                                 style={{
                                    marginLeft: 0, borderBottomWidth: 0, borderRadius: 3,
                                    backgroundColor: "rgba(0, 0, 0, 0.07)"
                                 }}>
                                 <Input
                                    placeholder='Password'
                                    style={{paddingLeft: 20, paddingRight: 20}}
                                    value={this.state.password}
                                    onChangeText={(text) => {
                                       this.setState({password: text})
                                    }}
                                    returnKeyType={"next"}
                                    secureTextEntry={true}
                                    maxLength={50}
                                 />
                           </Item>
                        </Form>
                       
                        <View style={styles.forgot}>
                           
                           <TouchableOpacity
                              style = {styles.forgottext}>
                              <Text> Forgot Password </Text>
                           </TouchableOpacity>

                           <TouchableOpacity
                              style = {styles.login}
                              onPress = {
                                 () => this.signInTap()
                              }>
                              <Text style = {styles.submitButtonText}> Login </Text>
                           </TouchableOpacity>
                        </View>

                        <View style={styles.register}>
                           <TouchableOpacity
                              style = {styles.submitButton}
                              onPress = {
                                 () => this.register()
                              }>
                              <Text> Register </Text>
                           </TouchableOpacity>

                           <TouchableOpacity
                              style = {styles.submitButton}
                              onPress = {
                                 () => this.login(this.state.id, this.state.password)
                              }>
                              <Text> Login with </Text>
                           </TouchableOpacity>
                           <Image source={require('../../todoapp/assets/img/g.png')}
                           style={{
                              width: 40,
                              height: 40,
                              alignSelf: 'center',
                              marginLeft: 20,
                              resizeMode: 'contain'
                           }}/>
                        <Image source={require('../../todoapp/assets/img/f.png')}
                           style={{
                              width: 40,
                              height: 40,
                              marginLeft: 20,
                              alignSelf: 'center',
                              resizeMode: 'contain'
                           }}/>
                        </View>
                        
                  </View>
               </Content>
               
            </Container>
        )
     }
  }
 
  
  const styles = StyleSheet.create({
     container: {
        paddingTop: 23
     },
     submitButton: {
        width:110,
        padding: 10,
        margin: 15,
        height: 40,
     },

     forgottext: {
         width: width/2,
         padding: 10,
         margin: 15,
         height: 40,
     },
     login: {
         width:100,
         padding: 10,
         margin: 15,
         height: 40,
         marginLeft: width/5
     },
     submitButtonText:{
        color: 'red',
        fontSize: 24
        
     },

     forgot: {
      width: width,
      height:100,
      marginHorizontal: 20,
      backgroundColor: "rgba(0, 0, 0, 0.07)",
      flexDirection: 'row',
      alignSelf: 'center',
      marginTop: 10
     },

     register: {
      width: width,
      marginTop: 10,
      flexDirection: 'row', 
      alignSelf: 'center'
     }
  })