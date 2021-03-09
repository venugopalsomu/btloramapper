(function(global){

    global.ttnmapper = global.ttnmapper || {};
    global.ttnmapper.config = global.ttnmapper.config || {
        deviceId: 'bt_lora_0001',
        mqtt: {
            host: "m20.cloudmqtt.com",
            port: 39427,
            username: "bridgethings",
            password: "venugopal",
            ssl: true,
            topic: "+/devices/+/up"
        },
        firebase: {
            apiKey: "AIzaSyC9POYvvK16iXTmuWYEipaRpGx2m680pAc",
            authDomain: "ttnmapper.firebaseapp.com",
            databaseURL: "https://ttnmapper.firebaseio.com",
            projectId: "ttnmapper",
            storageBucket: "ttnmapper.appspot.com",
            messagingSenderId: "1057112021730"
        }
    }

})(window);
