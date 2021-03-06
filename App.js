/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from "react";
import {StyleSheet, View, DatePickerIOS, DatePickerAndroid} from "react-native";

import Topbar from "./components/topbar";
import Login from "./components/login";
import MemberList from "./components/member-list";
import MemberDetails from "./components/member-details";

export default class App extends Component {
    state = {
        loginVisible: true,
        listVisible: false,
        detailsVisible: false,
        titleBarRight: "",
        titleBarTitle: "",
        titleBarLeft: ""
    };

    addNewMember(){
        
        this.goToMemberDetails();
    }

    renderLogin() {
         if(this.state.loginVisible){
             return (
                 <Login
                     visible={this.state.loginVisible}
                     titleBarApi={this.setTitleBar.bind(this)}
                     goToMemberList={this.goToMemberList.bind(this)}
                 />
             );
         }
    }

    renderEmployeeList() {
        if(this.state.listVisible){
            return (
                <MemberList
                    visible={this.state.listVisible}
                    titleBarApi={this.setTitleBar.bind(this)}
                />
            );
        }
    }

    renderEmployeeDetails() {
        if(this.state.detailsVisible){
            return (
                <MemberDetails/>
            );
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Topbar
                    leftText={this.state.titleBarLeft}
                    title={this.state.titleBarTitle}
                    rightText={this.state.titleBarRight}
                    addNewMember = {this.addNewMember.bind(this)}
                />
                {this.renderLogin()}
                {this.renderEmployeeList()}
                {this.renderEmployeeDetails()}
            </View>
        );
    }

    setTitleBar(left, title, right) {
        this.setState({
            titleBarRight: left,
            titleBarTitle: title,
            titleBarLeft: right
        });
    }

    goToMemberList() {
        this.setState({
            loginVisible: false,
            listVisible: true,
            detailsVisible: false
        });
    }

    goToMemberDetails () {
        
        this.setState({
            loginVisible: false,
            listVisible: false,
            detailsVisible: true,
            titleBarTitle: "Add new member",
            titleBarLeft: "",
            titleBarRight: "<"
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5FCFF"
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    }
});
