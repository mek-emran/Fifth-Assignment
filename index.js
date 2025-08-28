// heart iconn
// সব heart-btn গুলোকে ধরার জন্য class ব্যবহার করছি
const heartButtons = document.querySelectorAll('.heart-btn');
const heartCountSpan = document.getElementById('heart-count');
let heartCount = parseInt(heartCountSpan.textContent);
heartButtons.forEach(button => {
    button.addEventListener('click', function () {
        heartCount++; 
        heartCountSpan.textContent = heartCount; 

        button.classList.remove('fa-regular');
        button.classList.add('fa-solid');
        button.style.color = '#FF4141';
    });
});

// copy text
const copyButtons = document.querySelectorAll('.copy-btn');
const copyCountSpan = document.getElementById('copy-count');
let copyCount = parseInt(copyCountSpan.textContent);


copyButtons.forEach(button => {
    button.addEventListener('click', () => {
        // parent card 
        const card = button.closest('.p-3');

        const numberElement = card.querySelectorAll('h3')[1]; // দ্বিতীয় h3
        const numberToCopy = numberElement.textContent.trim();

        navigator.clipboard.writeText(numberToCopy).then(() => {
            copyCount++;
            copyCountSpan.textContent = copyCount;

            // alert
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

// coin count 
let coinCount = parseInt(coinCountSpan.textContent);


callButtons.forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.p-3');
        const serviceName = card.querySelector('h3.font-bold.text-xl').textContent.trim();
        const serviceNumber = card.querySelectorAll('h3')[1].textContent.trim();

        // coin 
        if (coinCount >= 20) {
            coinCount -= 20;
            coinCountSpan.textContent = coinCount;
        } else {
            alert("Not enough coins to make a call.");
            return;
        }

        //time
        const timeNow = new Date().toLocaleTimeString();

        // histry item
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

        // alert
        alert(`📞 Call placed to ${serviceName}`);
    });
});

// Clear Button 
clearBtn.addEventListener('click', function () {
    historyList.innerHTML = ''; 
});
