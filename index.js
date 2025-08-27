// heart iconn
// সব heart-btn গুলোকে ধরার জন্য class ব্যবহার করছি
const heartButtons = document.querySelectorAll('.heart-btn');
const heartCountSpan = document.getElementById('heart-count');
let heartCount = parseInt(heartCountSpan.textContent);
heartButtons.forEach(button => {
    button.addEventListener('click', function () {
        heartCount++; 
        heartCountSpan.textContent = heartCount; // UI তে দেখাই

        
        button.classList.remove('fa-regular');
        button.classList.add('fa-solid');
        button.style.color = '#FF4141'; // চাইলে রঙও দিতে পারেন
    });
});

// copy text
// Copy বাটনগুলো ধরছি
const copyButtons = document.querySelectorAll('.copy-btn');
const copyCountSpan = document.getElementById('copy-count');
let copyCount = parseInt(copyCountSpan.textContent);

// প্রতিটি Copy বাটনে ইভেন্ট লিসেনার যোগ করছি
copyButtons.forEach(button => {
    button.addEventListener('click', () => {
        // parent card খুঁজে বের করি
        const card = button.closest('.p-3');

        // card এর ভিতরের দ্বিতীয় h3 থেকে নাম্বার নিই
        const numberElement = card.querySelectorAll('h3')[1]; // দ্বিতীয় h3
        const numberToCopy = numberElement.textContent.trim();

        // ক্লিপবোর্ডে কপি করি
        navigator.clipboard.writeText(numberToCopy).then(() => {
            // কপি সফল হলে count বাড়াই
            copyCount++;
            copyCountSpan.textContent = copyCount;

            // alert দেখাই
            alert(`National Emergency Num (${numberToCopy})`);
        }).catch(err => {
            alert('Copy failed ❌');
            console.error('Clipboard error:', err);
        });
    });
});


// Emergency Call 
const callButtons = document.querySelectorAll('.Emergency-call');
const coinCountSpan = document.getElementById('coin-count');
const historyList = document.getElementById('History-list');
const clearBtn = document.getElementById('clear-btn');

// coin count শুরু
let coinCount = parseInt(coinCountSpan.textContent);

// প্রতিটি Call বাটনে ইভেন্ট লিসেনার
callButtons.forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.p-3');
        const serviceName = card.querySelector('h3.font-bold.text-xl').textContent.trim();
        const serviceNumber = card.querySelectorAll('h3')[1].textContent.trim();

        // coin কমানো
        if (coinCount >= 20) {
            coinCount -= 20;
            coinCountSpan.textContent = coinCount;
        } else {
            alert("Not enough coins to make a call.");
            return;
        }

        // সময় বের করা
        const timeNow = new Date().toLocaleTimeString();

        // হিস্ট্রি আইটেম তৈরি
        const historyItem = document.createElement('div');
        historyItem.className = "grid grid-cols-1 mt-5 bg-white p-3 rounded-xl shadow-sm";

        historyItem.innerHTML = `
            <div class="flex justify-between">
                <h2 class="font-semibold">${serviceName}</h2>
                <h3><span>${serviceNumber}</span></h3>
            </div>
            <div class="text-right text-sm text-gray-500 mt-2">
                <span>${timeNow}</span>
            </div>
        `;

        historyList.appendChild(historyItem);

        // alert দেখানো
        alert(`📞 Call placed to ${serviceName}`);
    });
});

// Clear Button 
clearBtn.addEventListener('click', function () {
    historyList.innerHTML = ''; 
});
