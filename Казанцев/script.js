function randomDateInYearLeapAware(year) {
    const month = Math.floor(Math.random() * 12);
    let maxDay;
    if (month === 1) {
        maxDay = (new Date(year, 2, 0)).getDate();
    } else {
        maxDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
    }
    const day = Math.floor(Math.random() * maxDay) + 1;
    return new Date(year, month, day);
}

const year = 2024;
const randomDate = randomDateInYearLeapAware(year);
console.log(randomDate);
alert(randomDate);