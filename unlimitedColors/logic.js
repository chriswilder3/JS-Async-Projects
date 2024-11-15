const start = document.getElementById('start')
const stop = document.getElementById('stop')

let startTimer = null; // We need this to be global since both start and stop
                // events will use it.

// start.addEventListener('click', function(){
//     startTimer = setInterval(function(){
//         let color = '#'
//         for(let i=0;i<6;i++){
//             color += Math.floor(Math.random()*10)
//         }
//         document.querySelector('body').style.backgroundColor = color;
//     }, 1000)
//     console.log(' Started! ');
// })

// stop.addEventListener( 'click', function(){
//     clearInterval(startTimer);
//     console.log(' Stopped! ');
// })

// But above code has issues :

// Problem:
    // When the "Start" button is clicked multiple times, 
    // multiple timers are created. Clicking "Stop" only clears the latest timer,
    // so earlier ones keep running, causing the background to continue 
    // changing colors.

// Cause: 
    // Each setInterval call creates a new interval with a unique ID.
    // Since startTimer is overwritten with each click, only the most recent 
    // interval ID is stored, so only the last timer can be stopped by
    // clearInterval(startTimer).

// Solution: 
    // Use a flag (isRunning) to track if a timer is active. 
    // Prevent multiple intervals by setting isRunning to true after starting 
    // the timer, and reset it to false when stopping, ensuring only one 
    // interval runs at a time

    // We can also further improve the color generator, Currently
    // It cant generate hexachars beyond 10,
    // Instead of generating hexachar, we can store all hexachars in a string
    // and access random hexachar eachtime by generating random access for
    // it, now since string will be 16 length, the index must also
    // be in the range 0-15

// let isRunning = false

// start.addEventListener('click', function(){

//     if(isRunning == false)
//     {
//         startTimer = setInterval(function(){
//             let color = '#'
//             let hexachars = '0123456789ABCDEF'

//             for(let i=0;i<6;i++){
//                 const index = Math.floor(Math.random()* 16)
//                 color += hexachars[ index]
//             }
//             document.querySelector('body').style.backgroundColor = color;
//         }, 1000)
//         console.log(' Started! ');
//         isRunning = true;
//     }
//     else{
//         console.log( ' Already running ');
//     }
// })

// stop.addEventListener( 'click', function(){
//     clearInterval(startTimer);
//     console.log(' Stopped! ');
//     isRunning = false;
// })

// Alternative to isRunning : 

    // it’s a good practice to set startTimer to null after clearing 
    // it in the stop callback. This helps ensure that you don’t mistakenly
    // reference an old interval ID later in the code, especially if you want
    // to check whether a timer is currently running by testing startTimer's
    // value.

    // But this startTimer's NULLITY check can be used to ensure
    // we start event only when its value is null (), ie, clearInterval 
    // is cleared, thus avoiding initializing new interval timers
    // when one is already running.



start.addEventListener('click', function() {
    if (!startTimer) {  // Only start if startTimer is null or undefined
        startTimer = setInterval(function() {
            let color = '#';
            const hexChars = '0123456789ABCDEF';

            for (let i = 0; i < 6; i++) {
                color += hexChars[Math.floor(Math.random() * 16)];
            }
            document.querySelector('body').style.backgroundColor = color;
        }, 1000);
        console.log('Started!');
    } else {
        console.log('Already running');
    }
});

stop.addEventListener('click', function() {
    clearInterval(startTimer);
    startTimer = null; // Set to null after stopping
    console.log('Stopped!');
});