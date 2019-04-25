var express = require('express');
var router = express.Router();
var redis = require('redis');
var geoip = require('geoip-lite');
const iplocation = require("iplocation").default;
const publicIp = require('public-ip');

client = redis.createClient()
client.on("error", function (err) {
    console.log("Error " + err);
});

var proximity = require('geo-proximity').initialize(client)
var places = proximity.addSet('places')

var placeLocations = [
    [36.845529, 10.165651, 'Rue Tahar Memmi, Ariana'],
    [36.858183, 10.186026, 'Avenue Charles Nicolle, Ariana'],
    [36.864749, 10.200551, '3 Avenue Mustapha Mohsen, Ariana'],
    [36.889903, 10.172345, 'Avenue Habib Bourguiba, Ghazela'],
    [36.838973, 10.240613, 'Rue Lac Tchad - 1053 Berges du Lac - Tunis، Tunis'],
    [36.858014, 10.191588, '2 Avenue Taieb Mhiri, Ariana 2080']

]


router.get('/', function (req, res, next) {
    // places.delete()
    // places.addLocations(placeLocations, function(err, reply){
    //     if(err) console.error(err)
    //     else console.log('added places:', reply)
    //
    // })

     // 142.113.44.122
    //"207.97.227.239"
    // '56.70.97.8'

    (async () => {
        ipv4 = await publicIp.v4();
        iplocation('102.156.142.6', [], (error, res) => {
            console.log(res)
        });
        var tab = [];
        var final = [];
        places.nearby(36.886083, 10.174247, 5000, function (err, places) {
            if (err) console.error(err)
            else
                for (var p in places) {
                    for (var j in placeLocations) {
                        if (placeLocations[j][2] === places[p]) {
                            tab.push({
                                latitude: placeLocations[j][0],
                                longitude: placeLocations[j][1],
                                name: places[p],
                                latitudeUser: 36.886083,
                                longitudeUser: 10.174247
                            });
                        }
                    }
                }
                // tab.push({latitudeUser: 36.886083,
                //     longitudeUser: 10.174247})
                console.log(ipv4)
            // console.log(geo)
            console.log(places)
            final.push(tab)
            // final.push({latitudeUser: 36.886083,
            //     longitudeUser: 10.174247})
            res.send(tab)


        })
    })();


    });


    module.exports = router;