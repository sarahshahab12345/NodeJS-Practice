//=========================Promise P1===============================
console.log(
  "=========================Promise P1==============================="
);

const p1 = new Promise((res, rej) => {
  rej("...bye");
});

p1.then((e) => {
  console.log(e);
}).catch((err) => {
  console.log(err);
});



//=========================Promise P2===============================
console.log(
  "=========================Promise P2==============================="
);

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(["Mango", "Apple", "Kiwi"]);
  }, 5000);
});

console.log(p2);

console.log("Fetching Fruits");

p2.then((val) => {
  console.log(val);
}).catch((err) => {
  console.log(err);
});

console.log("Done Fetching Fruits");


//=========================Promise P3===============================
console.log(
  "=========================Promise P3==============================="
);

const p3 = new Promise((res, rej) => {
  setTimeout(() => {
    res("Promise 101 is resolved");
  }, 3000);
});

const p4 = new Promise((res, rej) => {
  setTimeout(() => {
    res("Promise 102 is resolved");
  }, 3000);
});

const p5 = new Promise((res, rej) => {
  setTimeout(() => {
    res("Promise 103 is resolved");
  }, 3000);
});

console.log("Before handling promises");

p3.then((e) => {
  console.log(e);
}).catch((err) => {
  console.log(err);
});
p4.then((e) => {
  console.log(e);
}).catch((err) => {
  console.log(err);
});
p5.then((e) => {
  console.log(e);
}).catch((err) => {
  console.log(err);
});

console.log("after handling promises");



//============================async await============================
console.log(
  "=========================async await==============================="
);

const p6 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("Promise 6 reject");
  }, 1000);
});

const handlePromise = async () => {
  try {
    let data = await p6;
    console.log(data);
  } catch (ex) {
    console.log(ex);
  }
};

handlePromise();


//============================Handling Promises with then and catch============================
console.log(
  "=========================Handling Promises with then and catch==============================="
);

let PromiseNew = new Promise((res, rej) => {
  setTimeout(() => {
    res("Hello PromiseNew");
  }, 5000);
});

console.log("before PromiseNew");

PromiseNew.then((e) => {
  console.log(e);
}).catch((err) => {
  console.log(err);
});

console.log("after PromiseNew");



//===================Handling Promises with Async Await===================
console.log(
  "=========================Handling Promises with Async Await==============================="
);

const handlePromiseNew = async () => {
  try {
    let data = await OnePromise;
    console.log(data);
  } catch (ex) {
    console.log(ex);
  }
};



//===================Promise API===================
// Promise API
// Promise.race()
// Promise.all()
// Promise.allSettled()
// Promise.reject()
// Promise.resolve()

const p22 = new Promise((res, rej) => {
  setTimeout(() => {
    res("Promise 22 resolved");
  }, 6000);
});
const p33 = new Promise((res, rej) => {
  setTimeout(() => {
    res("Promise 33 resolved");
  }, 4000);
});
const p44 = new Promise((res, rej) => {
  setTimeout(() => {
    res("Promise 44 resolved");
  }, 2000);
});



//========================// Promise.race()========================
console.log(
  "=========================Promise.race()==============================="
);

Promise.race([p22, p33, p44])
  .then((e) => {
    console.log(e);
  })
  .catch((err) => {
    console.log(err);
  });



// ========================Promise.all()========================
console.log(
  "=========================Promise.all()==============================="
);

Promise.all([p22, p33, p44])
  .then((e) => {
    console.log(e);
  })
  .catch((err) => {
    console.log(err);
  });

//Output
["Promise 22 resolved", "Promise 33 resolved", "Promise 44 resolved"];



//================== Promise.allSettled()==================
console.log(
  "=========================Promise.allSettled()==============================="
);

Promise.allSettled([p2, p3, p4])
  .then((e) => {
    console.log(e);
  })
  .catch((err) => {
    console.log(err);
  });

//Output
// [
//   { status: 'fulfilled', value: [ 'Mango', 'Apple', 'Kiwi' ] },
//   { status: 'fulfilled', value: 'Promise 101 is resolved' },
//   { status: 'fulfilled', value: 'Promise 102 is resolved' }
// ]



//====================== Promise.reject()======================
console.log(
  "=========================Promise.reject()==============================="
);

//output
// Promise Rejected For Some Reason
Promise.reject("Promise Rejected For Some Reason").catch((err) => {
  console.log(err);
});

//====================== Promise.resolve()======================

//output
// Promise resolved For Some Reason
Promise.resolve("Promise resolved For Some Reason").then((e) => {
  console.log(err);
});
