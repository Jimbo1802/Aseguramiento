import React, { Component, Fragment } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


export class FormUserDetail extends Component {
    state = {
        step:1,
        firstName:'',
        lastName:'',
        phoneNumber:'',
        mail:'',
        addres:'',
        birthDate:'',
    }
    render() {
        return (
            <MuiThemeProvider>
                <Fragment>
                    <AppBar title="Enter User Details"/>
                    <TextField 
                        hintText="Enter your FIrst Name"
                        floatingLabelText="First Name"
                    />
                    <br/>
                    <TextField 
                        hintText="Enter your Last Name"
                        floatingLabelText="Last Name"
                    />
                    <br/>
                    <TextField 
                        hintText="Enter your Phone Number"
                        floatingLabelText="Phone Number"
                    />
                    
                </Fragment>
            </MuiThemeProvider>
        )
    }
}


export default FormUserDetail
