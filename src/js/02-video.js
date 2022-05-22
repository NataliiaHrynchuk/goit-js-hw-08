import Player from "@vimeo/player";
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');

    const player = new Player(iframe);
    let pausedTime = 0;
    let resultTime = 0;
    
    const onPlay = function(data) {
        pausedTime = data.seconds;
        localStorage.setItem('videoplayer-current-time', pausedTime);
     };

    player.on('timeupdate', throttle(onPlay, 1000));

    resultTime = localStorage.getItem('videoplayer-current-time');
    
               
    player.setCurrentTime(resultTime).then(function() {
                
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                // час був меншим за 0 або більше, ніж тривалість відео
                resultTime < 0;
                break;
    
            default:
                // сталася інша помилка
                break;
        }
    });
    
