const audio = document.getElementById('alarm');
const input = document.getElementById('timeInput');
const btn = document.getElementById('setAlarm');
let position = 0;

let setAlarm = (alarmTime) => {
    let checkAlarm = setInterval(() => {
        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        if (currentTime === alarmTime) {
            audio.play();
            
            clearInterval(checkAlarm);
        }
    }, 100);
};

const loadAlarms = () => {
    const alarms = JSON.parse(localStorage.getItem('alarms')) || [];
    alarms.forEach(alarmTime => addCard(alarmTime));
};

btn.addEventListener('click', () => {
    const alarmTime = input.value;
    
    if (alarmTime) {
        if (position === 0) {
            position += 30; 
            btn.classList.add('active');
            addCard(alarmTime);

            const alarms = JSON.parse(localStorage.getItem('alarms')) || [];
            alarms.push(alarmTime);
            localStorage.setItem('alarms', JSON.stringify(alarms));
        } else {
            position = 0;
            btn.classList.remove('active');
            
        }
        
        btn.style.transform = `translateX(${position}px)`;
        setAlarm(alarmTime);
    }
});

let wrapper = document.querySelector('.wrapper');

let addCard = (alarmTime) => {
    let card = document.createElement('div');
    card.classList.add('card');
    
    card.innerHTML = `
        <div><p>${alarmTime}то</p></div>
        <div class="btnn">
            <button class="setAlarm"></button>
        </div>
    `;
    
    wrapper.appendChild(card);
 
    const setAlarmButton = card.querySelector('.setAlarm');
    setAlarmButton.addEventListener('click', () => {
        if (position === 0) {
            position += 30; 
            setAlarmButton.classList.add('active');
        } else {
            position = 0;
            setAlarmButton.classList.remove('active');
        }
        
        setAlarmButton.style.transform = `translateX(${position}px)`;
        setAlarm(alarmTime);
    });
};

loadAlarms();
