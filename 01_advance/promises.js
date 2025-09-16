//           +-------------------+
//           |   Promise তৈরি     |
//           |   new Promise()   |
//           +-------------------+
//                     |
//                     v
//                [pending]
//           (কাজ এখনও চলছে)
//                     |
//        -----------------------------
//        |                           |
//        v                           v
//    [fulfilled]                  [rejected]
//  (কাজ সফল হয়েছে)           (কাজ ব্যর্থ হয়েছে)
//        |                           |
//        v                           v
//    then() method                catch() method
//  (সফল হলে রান হবে)            (ব্যর্থ হলে রান হবে)
//        |                           |
//        v                           v
//               finally() method
//         (যেকোনো পরিস্থিতিতেই রান হবে)


// ছোট কাজ → Callback

// Multiple async chain → Promise

// Clean modern code → Async/Await


// const myPromise = new Promise((resolve, reject) => {
//   let success = true; // কাজ সফল বা ব্যর্থ কিনা simulate করা

//   if (success) {
//     resolve("Work has been Done!");
//   } else {
//     reject("Work Faild!");
//   }
// });

// myPromise
//   .then((result) => {
//     console.log("Success:", result);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
// });




// ----------------------------------------------------------------

const fetchData = new Promise((resolve, reject) => {
  const dataFetched = true; // ডেটা সফলভাবে ফেচ হয়েছে কিনা simulate করা

  setTimeout(() => {
    if (dataFetched) {
      resolve({ id: 1, name: "John Doe" });
    } else {
      reject("Data fetch failed!");
    }
  }, 2000);
});

fetchData
  .then((data) => {
    console.log("Data fetched successfully:", data);
    return data.id; // RETURN ID for next .then()
  })
  .then((id) => {
    console.log("User ID:", id);
    // we can do more async here if needed
  })
  .catch((error) => {
    console.log("Error:", error);
  })
  .finally(() => {
    console.log("Fetch attempt finished.");
  });