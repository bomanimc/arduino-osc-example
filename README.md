# Arduino & OSC

## Installation
- If you don't have Node.js, run `brew install node@8` (installing Node 8, which is a stable version).
- Clone this repository: `git clone https://github.com/bomanimc/arduino-osc-example.git`
- `cd` into the directory
- Run `npm install`
- Install OSCTestApp from [VDMX freebies](https://vdmx.vidvox.net/blog/freebies)

### Run the Code
- Open MadMapper and load in your video
- In the bottom right corner, find the Speed paramater for the video
- Right-click on the speed parameter and select 'Copy OSC Address'. 
- Copy the address into `oscPlaybackSpeedAddress` variable in the code.
- Open the OSCTestApp.
- Select MadMapper from the 'Detected Destinations' list
- Copy the IP Address and the Port that OSCTestApp detects from MadMapper, and update the corresponding values in the `options` variable in the code.
- In MadMapper, right-click on the Speed parameter and select 'Add OSC Control'.
- Select 'Learn' in the top right corner of the OSC control popup window.
- `cd` into the cloned directory this repo.
- Run `node main.js`

### Next Steps
There are two options:
- Read serial data from your Arduino in JS ([Link](https://hackernoon.com/arduino-serial-data-796c4f7d27ce))
- Control the Arduino and the ultrasonic sensor directly from Arduino ([Link](http://johnny-five.io/examples/proximity-hcsr04/)).