console.log("-------------------Callbacks---------------------");


const syncTask = (CB) => {
    console.log("Task Running");
    CB();
}

console.log("Start Task");

syncTask(() => {
    console.log("I am a task");
});

console.log("task End");


console.log("-------------------Callback 1---------------------");
console.log("Callback syncTask1 gives Error");

// const syncTask1 = (CB) => {
//     console.log("Task1 Running");
//     CB();
// }

// console.log("Start Task1");

// syncTask1(() => {
//     console.log(`Hey my name is ${TaskName1}`);
// });

// console.log("End Task1");

// let TaskName1 = "Eshal";


console.log("-------------------Callback 2---------------------");


const syncTask2 = (CB) => {
    console.log("Task2 Running");
    setTimeout(CB, 0);
}

console.log("Start Task2");

syncTask2(() => {
    console.log(`Hey my name is ${TaskName2}`);
});

console.log("End Task2");

let TaskName2 = "Samantha";



console.log("-------------------Callback 3---------------------");


const syncTask3 = (CB) => {
    console.log("Task3 Running");
    setTimeout(CB, 0);
}

console.log("Start Task3");

syncTask3((err, data) => {
    if (err) {
        throw new Error("I am a Error");
    }
    console.log(`Hey my name is ${TaskName3}`);
});

console.log("End Task3");

let TaskName3 = "Leo";


console.log("-------------------Callback 4---------------------");


// const syncTask34 = (CB) => {
//     console.log("Task4 Running");
//     setTimeout(() => CB("Error !"), 0);
// }

// console.log("Start Task4");

// syncTask4((err, data) => {
//     if (err) {
//         throw new Error("I am a Error");
//     }
//     console.log(`Hey my name is ${TaskName4}`);
// });

// console.log("End Task3");

// let TaskName4 = "Leo";


console.log("-------------------Callback Hell---------------------");


const asyncTask = (CD) => {
    console.log("Task Running");
    setTimeout(CD, 0);
}

const makeAPICall = (CD) => {
    console.log("Calling API ASAP...");
    setTimeout(CD, 0);
}

makeAPICall(() => {
    console.log("Fetching User data");
    makeAPICall(() => {
      console.log("Fetching Navbar data");
      makeAPICall(() => {
        console.log("Fetching Hero data");
        makeAPICall(() => {
          console.log("Fetching About data");
          makeAPICall(() => {
            console.log("Fetching Contact data");
            makeAPICall(() => {
              console.log("Fetching Form data");
              makeAPICall(() => {
                console.log("Fetching Services data");
                makeAPICall(() => {
                  console.log("Fetching Movies data");
                  makeAPICall(() => {
                    console.log("Fetching Home data");
                    makeAPICall(() => {
                      console.log("Fetching Client data");
                      makeAPICall(() => {
                        console.log("Fetching AddtoCart data");
                        makeAPICall(() => {
                          console.log("Fetching Footer data");
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
  