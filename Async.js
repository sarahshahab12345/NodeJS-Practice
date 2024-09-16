//===================Asynchronous====================
console.log("===================Asynchronous====================");


const sleep = (miliseconds) => {
    setTimeout(() => {
        console.log("In Progress");
    }, miliseconds);
};

console.log("Hello");
sleep(4000);
console.log("bye bye");

