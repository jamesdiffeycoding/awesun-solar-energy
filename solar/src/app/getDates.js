export function getEndDate() {
    console.log("GetEndDate called")

    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate
}

export function getEndTime() {
    console.log("GetEndTime called")

    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    return formattedTime
}


export function getEndDateAndTime() {
    console.log("GetEndDateAndTime called")
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const formattedDateTime = `${year}-${month}-${day}-${hours}-${minutes}-${seconds}`;

    return formattedDateTime;
}


export function getStartingDate(numberOfDays) {
    console.log("GetStartingDate called")
    let EndDate = getEndDate();
    // Convert the input string to a Date object
    const dateObject = new Date(EndDate);
    // Subtract 35 days from the date
    dateObject.setDate(dateObject.getDate() - numberOfDays);
    // Get the year, month, and day components from the date
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, '0');
    const day = String(dateObject.getDate()).padStart(2, '0');
    // Format the result as YYYY-MM-DD
    const previousDate = `${year}-${month}-${day}`;
    return previousDate;
}