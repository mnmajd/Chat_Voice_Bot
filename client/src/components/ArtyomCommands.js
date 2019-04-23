import {getAllOffers} from "../store/actions/OfferActions";
import {OfferServices} from "../services/OfferServices";

import axios from 'axios';
const API_URL = 'http://localhost:3001';

var ch='';
var ch2='';
export default class ArtyomCommandsManager {


    getOffers(){
        var users = [];
    const url = 'http://localhost:3001/offers';
    axios.get(url).then(response => response.data.data)
        .then(data => {
         data.forEach(function (d) {
        users.push(d.Title)
        })
        })
        return users ;
        }
    // The ArtyomCommandsManager class expects as argument in the constructor
    // an already declared instance of Artyom.js
    constructor (ArtyomInstance){
        this._artyom = ArtyomInstance;
        // this.state = {
        //     users: [],
        // };

        // for (var i = 0; i < this.state.users.length; i++) {
        //     console.log("aaaaaa");
        // }

    }

    // Execute the loadCommands method to inject the methods to the instance of Artyom
    loadCommands(){
        var a = this.getOffers()
        // console.log(a)
        for (var i = 0; i < a.length; i++) {
            console.log(a[i]);
        }
        let Artyom = this._artyom;

        // Here you can load all the commands that you want to Artyom
        return Artyom.addCommands([
            {
                indexes: ["Services", "I want Services"],
                action: () => {
                    Artyom.say("which of services internet or communication ?");
                }
            },
            {
                indexes: ["internet"],
                action: () => {
                    console.log('HEAAAR ITT')
                    Artyom.say("500 Mega octet internet cost 30 dollar per day, 1 gega octet cost 50 dolar per day, you are welcome");
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