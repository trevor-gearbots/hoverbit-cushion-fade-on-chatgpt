let duration = 0
let interval = 0
let steps = 0
let increment = 0
// Function to smoothly vary the cushion power
function varyCushionPower () {
    // 10 seconds
    duration = 2000
    // Interval between power adjustments (in milliseconds)
    interval = 50
    steps = Math.floor(duration / interval)
    increment = 100 / steps
    // Increase cushion power gradually
    for (let i = 0; i <= steps - 1; i++) {
        hoverbit.cushion_power(i * increment)
        basic.pause(interval)
    }
    for (let j = 0; j <= steps; j++) {
        hoverbit.cushion_power((steps - j) * increment)
        basic.pause(interval)
    }
}
// Main program
basic.forever(function () {
    // Call the function to vary cushion power
    varyCushionPower()
})
