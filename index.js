// document.getElementById("Emergency-call").addEventListener("click", function() {
//     alert("Calling Emergency Services...");
// });

// const heartBtn = document.getElementById("heart-btn");
//   const heartCount = document.getElementById("heart-count-btn");

//   heartBtn.addEventListener("click", function () {
//     let count = parseInt(heartCount.textContent) || 0;
//     count++;
//     heartCount.textContent = count;
//   });

let count = 0;
  const heartBtn = document.getElementById("heart-btn");
  const countDisplay = document.getElementById("heart-count");
  
  heartBtn.addEventListener("click", function () {
    count++;
    countDisplay.innerText = count;
  });

  let count2 = 0;
    const copyBtn =document.getElementById("copy-btn");
    const countDisplay2 = document.getElementById("copy-count");
    copyBtn.addEventListener("click", function () {
        alert("National Emergency Num  999");
        count2++;
        countDisplay2.innerText = count2;

    })

//      let coin = 100; // শুরুতে ১০০ কয়েন

//   const coinDisplay = document.getElementById("coin-count");
//   const emergencyBtn = document.getElementById("Emergency-call");

//   emergencyBtn.addEventListener("click", function () {
//     alert("Calling Emergency Services...");
//     if (coin >= 20) {
//       coin -= 20;
//     } else {
//       coin = 0; // যেন নেগেটিভ না হয়
//     }
//     coinDisplay.innerText = coin;
//   });

// let coin = 100;
// const coinDisplay = document.getElementById("coin-count");
// const emergencyBtn = document.getElementById("Emergency-call");
// const historyList = document.getElementById("History-item");

// emergencyBtn.addEventListener("click", function () {
//   if (coin >= 20) {
//     coin -= 20;
//     coinDisplay.innerText = coin;
//     // নতুন ইতিহাস তৈরি
//     const historyItem = document.createElement("div");
//     historyItem.className = "flex justify-between items-center p-3 rounded-xl bg-[#FFF6F6] shadow";
//     historyItem.innerText = `📞 Emergency Call used - 20 coins deducted`;
//     // ইতিহাসে যোগ করো
//     historyList.appendChild(historyItem);
//   } 
//   else {
//     alert("❌ পর্যাপ্ত কয়েন নেই!");
//   }
// });

let coin = 100;

const coinDisplay = document.getElementById("coin-count");
const emergencyBtn = document.getElementById("Emergency-call");
const historyList = document.getElementById("History-list");

emergencyBtn.addEventListener("click", function () {
  if (coin >= 20) {
    coin -= 20;
    coinDisplay.innerText = coin;

    // নতুন History-item তৈরি
    const newHistoryItem = document.createElement("div");
    newHistoryItem.id = "History-item"; // তোমার ডিজাইন অনুযায়ী ID
    newHistoryItem.className = "flex border-1 h-[50px] justify-between rounded-2xl items-center p-3 bg-[#FFF6F6]";

    // ভিতরের HTML বসানো
    newHistoryItem.innerHTML = `
      <h2 class="font-semibold ">Fire Service Number</h2>
      <h3><span>999</span></h3>
    `;

    // ইতিহাসে যোগ করো
    historyList.appendChild(newHistoryItem);
  } else {
    alert("❌ পর্যাপ্ত কয়েন নেই!");
  }
});
