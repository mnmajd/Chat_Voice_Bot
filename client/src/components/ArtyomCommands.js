/**
 * Created by Emir on 22/04/2019.
 */
// ArtyomCommands.js
import axios from 'axios';
const API_URL = 'http://localhost:3001';
var users=[]
var ch1="bbb"
const url = 'http://localhost:3001/offers';

export default class ArtyomCommandsManager {
    // The ArtyomCommandsManager class expects as argument in the constructor
    // an already declared instance of Artyom.js
    constructor (ArtyomInstance,props){
        this._artyom = ArtyomInstance;
        this.ch="";
    }



    // Execute the loadCommands method to inject the methods to the instance of Artyom
    loadCommands(){

        var enfin= axios.get('http://localhost:3001/offers').then(response => response.data.data)
            .then(data => {
                    data.forEach(function (d) {
                        users.push(d.Title)
                        console.log(d.Title)
                    })
                    this.ch+=users.join();
                    console.log(this.ch);
                    return users.join();
                }
            );
        console.log(enfin);
        let internets=""
        internets= enfin.then(function(value) {
            console.log(value);
        });
        //console.log(Promise.resolve(enfin));
        //console.log(JSON.stringify(users));
        let Artyom = this._artyom;
        let TypesOfServices="which of services internet or communication ?";
        let InternetOffers="500 Mega octet internet cost 30 dollar per day, 1 gega octet cost 50 dolar per day, you are welcome";
        let communicationOffers="24 hour cost 50 dollar ,1 hour cost 10 dollar, you are welcome";
        // Here you can load all the commands that you want to Artyom
        return Artyom.addCommands([
            {
                indexes: ["Offers", "I want Offers"],
                action: () => {
                    Artyom.say(TypesOfServices);
                }
            },
            {
                indexes: ["internet","i want internet offers"],
                action: () => {
                    Artyom.say(InternetOffers);
                }
            },
            {
                indexes: ["communication","i want communication offers"],
                action: () => {
                    Artyom.say(communicationOffers);
                }
            },
            {
                indexes: ["what is your name","name"],
                action: () => {
                    Artyom.say("I am SFM boot nice to meet you");
                }
            },
            {
                indexes: [/How are you/, /Regular expressions supported/],
                smart: true,
                action: () => {
                    Artyom.say("I'm fine, thanks for asking !");
                }
            },
            {
                indexes: ["Generate reports of * of this year"],
                smart: true,
                action: (i, month) => {
                    let year = new Date().getFullYear();

                    Artyom.say(`Generating reports of ${month} ${year} `);

                    Artyom.say("Ready ! What were you expecting? write some code you lazy bear !");
                }
            },
        ]);
    }
}