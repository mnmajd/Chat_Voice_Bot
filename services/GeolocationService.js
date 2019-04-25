var express = require('express');
var router = express.Router();
var geoip = require('geoip-lite');
const iplocation = require("iplocation").default;
const Geo = require('geo-nearby');
var testAgency = 'tunise';
var data = [];
var NodeGeocoder = require('node-geocoder');
var options = {
    provider: 'mapquest',
    // Optional depending on the providers
    httpAdapter: 'https', // Default
    apiKey: 'g5Uv50EiohIsPLr1qVLKuNcFaeimdfRA', // for Mapquest, OpenCage, Google Premier
    formatter: null         // 'gpx', 'string', ...
};
var places = [];
var geocoder = NodeGeocoder(options);
const publicIp = require('public-ip');
var hash = require('geo-hash');
var final = [];

router.get('/test', function (req, res, next) {
});

router.get('/', function (req, res, next) {
    // geocoder.geocode({address: 'Tunisie Telecom' , countryCode:'TN'}, function(err, ress) {
    //     data = Object.keys(ress).map((key) => [[ress[key].latitude],[ress[key].longitude],[ress[key].streetName]]);
    const data = [
        [36.889939, 10.172342, 'Telecom'],
        [36.890253, 10.173046, 'Mosquée'],
        [36.847385, 10.165819, 'Manzahhhhhhh'],
        [-34.93333, 138.58333, 'Adelaide'],
        [-27.46778, 153.02778, 'Brisbane'],
        [-31.95306, 115.85889, 'Perth']
    ];
    const dataSet = Geo.createCompactSet(data);
    const geoo = new Geo(dataSet, {sorted: true});
    (async () => {
        ipv4 = await publicIp.v4();
        var geo  = geoip.lookup(ipv4);
        var result = geoo.nearBy(geo.ll[0], geo.ll[1], [0,5000000]);
        const hashs = result.map( o => o.i );
        for (i in data){
            if (data[i][2]==='Manzahhhhhhh'){
                final.push({latitude:data[i][0],longitude:data[i][1],name:data[i][2]});
            }
        }
        console.log(final)
        res.send(final);
    })();


    // });

});

module.exports = router;