
//initiate an array that will hold the sayings in both languages
const sayings = [
    { 
        ru: "Век живи — век учись.", 
        en: "Live and learn." 
    },
    { 
        ru: "Волков бояться — в лес не ходить.", 
        en: "If you fear wolves, don't go into the forest." 
    },
    { 
        ru: "Тише едешь — дальше будешь.", 
        en: "Slow and steady wins the race." 
    },
    { 
        ru: "Семь раз отмерь, один раз отрежь.", 
        en: "Measure seven times, cut once." 
    },
    { 
        ru: "Делу время, потехе час.", 
        en: "Time for work, an hour for play." 
    },
    { 
        ru: "Без труда не вытащишь и рыбку из пруда.", 
        en: "Without effort, you can't even pull a fish from the pond." 
    }
];

// grab HTML elements
const bearSVG = document.querySelector('.image-container svg');
const russianElement = document.getElementById('russian-text');
const englishElement = document.getElementById('english-text');


let currentIndex = 0;
bearSVG.addEventListener('click', () => {
    russianElement.textContent = sayings[currentIndex].ru;
    englishElement.textContent = sayings[currentIndex].en;
    // move to the next saying in the list
    currentIndex = currentIndex + 1;
    
    // loop back to the beginning when reach the end
    if (currentIndex >= sayings.length) {
        currentIndex = 0;
    }
});

