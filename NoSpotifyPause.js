//META{"name":"NoPause","website":"","source":""}*//

const SpotifyAPI = BDV2.WebpackModules.findByUniqueProperties(['openTrack', 'pause']),
oPause = SpotifyAPI.pause;

class NoPause {
    getName() {return "NoPause";}
    getVersion() {return "0.0.1";}
    getAuthor() {return "One";}
    getDescription() {return "Disable pausing";}

    load() {
        console.log('Blocking');
        SpotifyAPI.pause = function() {
            console.log('Blocked');
        };
    }
    
    start() {}

    stop() {
        console.log('Unblocking');
        SpotifyAPI.pause = oPause;
    }
}
