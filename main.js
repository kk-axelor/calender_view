const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];


const day = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();




//set the current year  and month
const setYearandmonth = () => {
    document.getElementById("month").innerHTML = months[currentMonth]
    document.getElementById("year").innerHTML = currentYear
}
setYearandmonth();




const creationOfRow = (diff, st, end, nod) => {
    const tr = document.createElement('tr');
    for (let i = st; i < end; i++) {
        const td = document.createElement("td");
        let value = i - diff + 1;
        value = (value > 0 && value <= nod ? value : "")

        const textNode = document.createTextNode(value);


        td.append(textNode);
        tr.append(td);
    }
    return tr;
}

const loadCalender = (year, month) => {
    const firstDay = new Date(year, month, 0o1).getDay();
    const numberOfDay = 32 - new Date(year, month, 32).getDate()
    const container = document.getElementById("container")
    const table = document.createElement('table');

    // head creation
    const thead = document.createElement('thead');
    for (let i = 0; i < 7; i++) {
        const th = document.createElement("th");
        const textNode = document.createTextNode(day[i])
        th.append(textNode)
        thead.append(th);
    }
    table.append(thead);



    // filling of date
    let n = numberOfDay + firstDay;
    for (let i = 0; i < n; i = i + 7) {
        const tr = creationOfRow(firstDay, i, i + 7, numberOfDay);
        table.append(tr);
    }

    container.replaceChildren(table)


}

loadCalender(currentYear, currentMonth);




// now add the event listener for next and prev month
const next = document.getElementById("next")

const handleNextCalender = () => {
    if (currentMonth === 11) {
        currentYear += 1;
        currentMonth = 0;
    }
    else {
        currentMonth++;
    }
    loadCalender(currentYear, currentMonth);
    setYearandmonth();


}

next.addEventListener("click", handleNextCalender);




const prev = document.getElementById("prev")

const handlePrevCalender = () => {
    if (currentMonth === 0) {
        currentYear -= 1;
        currentMonth = 11;
    }
    else {
        currentMonth--;
    }
    loadCalender(currentYear, currentMonth);
    setYearandmonth();
}

prev.addEventListener("click", handlePrevCalender);




