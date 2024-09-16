//===================Synchronous====================
console.log("===================Synchronous====================");


const sleep = (miliseconds) => {
    let currentTime = new Date().getTime();
    while(new Date().getTime() < currentTime + miliseconds) {
        console.log("In Progress");
    }
};

console.log("Hello");
sleep(5000);
console.log("bye bye");
