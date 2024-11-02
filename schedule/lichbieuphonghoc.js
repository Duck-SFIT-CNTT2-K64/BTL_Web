// Lich
const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");

// Lich bieu
const weekDatesRow = document.querySelector(".week-dates-row");

//Ngay thang nam
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

let selectedDate = date; 

// Mang thang
const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];

// Render
const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), 
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), 
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), 
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); 
    
    let liTag = "";

    // Tao ngay cuoi thang truoc
    for (let i = firstDayofMonth; i > 0; i--) { 
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    // Tao ngay trong thang
    for (let i = 1; i <= lastDateofMonth; i++) { 
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";

        // Highlight cai ngay dang chon
        let isSelected = i === selectedDate.getDate() && currMonth === selectedDate.getMonth() 
                        && currYear === selectedDate.getFullYear() ? "highlighted" : "";
        
        liTag += `<li class="${isToday} ${isSelected} day-cell" data-day="${i}">${i}</li>`;
    }
    
    // Tao ngay dau thang sau
    for (let i = lastDayofMonth; i < 6; i++) { 
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;

    // Click de chon
    document.querySelectorAll(".day-cell").forEach(cell => {
        cell.addEventListener("click", () => {
            const selectedDay = cell.dataset.day;
            selectedDate = new Date(currYear, currMonth, selectedDay); // Cap nhat ngay da chon
            renderCalendar(); // Re-render 
            updateSchedule(selectedDate); // Cap nhat tuan trong lich bieu
        });
    });
};

// Cap nhat lich bieu trong khi chon ngay tren cuon lich
const updateSchedule = (selectedDate) => {
    const startOfWeek = new Date(selectedDate);
    startOfWeek.setDate(selectedDate.getDate() - selectedDate.getDay()); // Chu nhat

    //Cot
    weekDatesRow.innerHTML = "<th>------</th>"; 

    // Bo tri 7 ngay trong tuan
    for (let i = 0; i < 7; i++) {
        const date = new Date(startOfWeek);
        date.setDate(startOfWeek.getDate() + i);

        const isSelected = date.toDateString() === selectedDate.toDateString() ? "selected-date" : "";
        const dateCell = document.createElement("th");
        dateCell.className = isSelected;
        dateCell.innerHTML = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}<br>${date.toLocaleDateString('en', { weekday: 'short' })}`;
        weekDatesRow.appendChild(dateCell);
    }
};

// Render
renderCalendar();
updateSchedule(date);  // Lich dua tren ngay da chon

// Chuyen thang
prevNextIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
        if(currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        } else {
            date = new Date();
        }
        renderCalendar();
    });
});

function gotoRegister() {
    window.location.href = "https://www.example.com"; // URL dang ky
};