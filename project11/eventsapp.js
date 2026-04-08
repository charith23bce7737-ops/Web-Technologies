// Import events module
const EventEmitter = require('events');

// Create an event emitter object
const eventEmitter = new EventEmitter();

// 1. Register first listener
eventEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}! Welcome to Node.js events.`);
});

// 2. Register second listener (multiple listeners for same event)
eventEmitter.on('greet', (name) => {
    console.log(`How are you today, ${name}?`);
});

// 3. Register another custom event
eventEmitter.on('status', (statusCode, message) => {
    console.log(`Status Code: ${statusCode}, Message: ${message}`);
});

// 4. Trigger events using emit()

// Simulating async behavior using setTimeout
setTimeout(() => {
    console.log("\nTriggering 'greet' event...");
    eventEmitter.emit('greet', 'Alice');
}, 1000);

setTimeout(() => {
    console.log("\nTriggering 'status' event...");
    eventEmitter.emit('status', 200, 'Success');
}, 2000);

// Another async trigger
setTimeout(() => {
    console.log("\nTriggering 'greet' event again...");
    eventEmitter.emit('greet', 'Bob');
}, 3000);