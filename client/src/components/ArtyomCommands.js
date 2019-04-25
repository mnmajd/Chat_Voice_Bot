import {getAllOffers} from "../store/actions/OfferActions";
import {OfferServices} from "../services/OfferServices";

import axios from 'axios';
const API_URL = 'http://localhost:3001';
var users = [];
var ch='';
var ch2='';
export default class ArtyomCommandsManager {




    getOffers ()  {

        return axios.get('http://localhost:3001/offers').then(response => response.data.data)
            .then(data => {
                    data.forEach(function (d) {
                        users.push(d.Title)
                        // console.log(d.Title)
                    })
                    ch+=users.join();
                    // console.log(ch);
                    return ch
                });
    }


    constructor (ArtyomInstance){
        this._artyom = ArtyomInstance;
    }

    loadCommands(){
        //  axios.get('http://localhost:3001/offers').then(response => response.data.data)
        //     .then(data => {
        //         data.forEach(function (d) {
        //             users.push(d.Title)
        //             // console.log(d.Title)
        //         })
        //         ch+=users.join();
        //          console.log(ch);
        //         // return ch
        //     });

        let Artyom = this._artyom;

        return Artyom.addCommands([
            {
                indexes: ["Hello"],
                action: () => {
                    Artyom.say("which of services internet or communication ?");
                }
            },
            {
                indexes: ["internet"],
                action: () => {
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
