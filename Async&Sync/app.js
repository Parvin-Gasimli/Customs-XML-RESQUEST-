async function myFunc() {
  const promise = new Promise((reslove, rejected) => {
    setTimeout(() => reslove("hello"), 1000);
  });
  const error = true;
  if (!error) {
    return res;
  } else {
    await Promise.reject(new Error("something went wrong"));
  }
  const res = await promise;
  return res;
}

myFunc()
.then((res) => console.log(res))
.catch(err=>console.log(err))

