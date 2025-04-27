const myPromise = new Promise((resolve, reject) => {
  
  let a = 1;
  setTimeout(() => {
    let a = 2;
    return resolve(a);
  }, 500);
 
});

myPromise.then(a => console.log(a))