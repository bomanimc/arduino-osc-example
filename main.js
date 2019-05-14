const OSC = require('osc-js');

// Configure options with th correct IP address and port for your Madmapper
const options = {
    type: 'udp4',
    open: {
        host: '192.168.1.5',
        port: 8010,
    },
    send: {
        host: '192.168.1.5',
        port: 8010,
    }
}

// This is the OSC address to the playback speed parameter for your video in MadMapper. You can get this by right-clicking on the OSC parameter in MadMapper and clicking 'Copy OSC Address'.
const oscPlaybackSpeedAddress = '/medias/cell.gif/play_speed';

const osc = new OSC({ plugin: new OSC.DatagramPlugin(options)});
osc.open();

// EXAMPLE CODE: This code use a sine function to generate an example values to send to MadMapper OSC. Delete this once you have input from Arduino.
let counter = 0;
setInterval(
    () => {
        const nextValue = Math.sin(counter * 0.1) + 1;
        console.log(nextValue);
        const message = new OSC.Message(oscPlaybackSpeedAddress, nextValue);
        osc.send(message)
        counter++;
    },
    500,
);

