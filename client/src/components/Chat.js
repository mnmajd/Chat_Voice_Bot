import React, { Component } from 'react';
import {withRouter} from 'react-router';
import Artyom from 'artyom.js';
import ArtyomCommandsManager from './ArtyomCommands.js';
import axios from '../axios';
const Jarvis = new Artyom();
class Chat extends Component {
    constructor (props, context){
        super(props, context);

        // Add `this` context to the handler functions
        this.startAssistant = this.startAssistant.bind(this);
        this.stopAssistant = this.stopAssistant.bind(this);
        this.speakText = this.speakText.bind(this);
        this.handleTextareaChange = this.handleTextareaChange.bind(this);

        // Prepare simple state
        this.state = {
            artyomActive: false,
            textareaValue: "",
            artyomIsReading: false,
            posts:[]
        };

        // Load some commands to Artyom using the commands manager
        let CommandsManager = new ArtyomCommandsManager(Jarvis);
        CommandsManager.loadCommands();
    }



    startAssistant() {
        let _this = this;

        console.log("Artyom succesfully started !");

        Jarvis.initialize({
            lang: "en-GB",
            debug: true,
            continuous: true,
            soundex: true,
            listen: true
        }).then(() => {
            // Display loaded commands in the console
            console.log(Jarvis.getAvailableCommands());

            Jarvis.say("Hello there, how are you?");

            _this.setState({
                artyomActive: true
            });
        }).catch((err) => {
            console.error("Oopsy daisy, this shouldn't happen !", err);
        });
    }
    stopAssistant() {
        let _this = this;

        Jarvis.fatality().then(() => {
            console.log("Jarvis has been succesfully stopped");

            _this.setState({
                artyomActive: false
            });

        }).catch((err) => {
            console.error("Oopsy daisy, this shouldn't happen neither!", err);

            _this.setState({
                artyomActive: false
            });
        });
    }
    speakText() {
        let _this = this;

        _this.setState({
            artyomIsReading: true
        });

        // Speak text with Artyom
        Jarvis.say( _this.state.textareaValue, {
            onEnd() {
                _this.setState({
                    artyomIsReading: false
                });
            }
        });
    }

    handleTextareaChange(event) {
        this.setState({
            textareaValue: event.target.value
        });
    }

    render() {
        return (
            /*<React.Fragment>
                <div className="container">
                <div className="botui-app-container" id="api-bot">
                    <bot-ui></bot-ui>
                </div>
                </div>
            </React.Fragment>*/
            <div>
                <div style={{display:"flex",justifyContent: 'space-around',paddingLeft:"120px",
                    alignContent: "center"}}>

                <img src={require('../assets/img/logo-voicebot.png')}
                     disabled={this.state.artyomActive} onClick={this.startAssistant}
                     width="250px" height="250px" ></img>


                    <div className="botui-app-container" id="api-bot" style={{marginLeft:"300px"}}>
                        <bot-ui></bot-ui>
                    </div>
                </div>
            </div>
        );
    }
}
export default Chat;