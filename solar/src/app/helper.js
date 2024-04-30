export function formatDateForSolarData(dateString) {
  const date = new Date(dateString);
  const options = { 
    weekday: 'short', 
    day: 'numeric', 
    month: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false //shows the AM or PM, 15:00 instead of 3:00 PM
  };
  
  const formattedDate = date.toLocaleString('en-US', options);
  return ` ${formattedDate}`;
}

function getDaySuffix(day) {
  if (day >= 11 && day <= 13) {
    return 'th';
  }
  
  const lastDigit = day % 10;
  
  switch (lastDigit) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

// Example usage
// const dateString = "2024-02-26T12:30:00Z";
// const formattedDate = formatDate(dateString);
// console.log(formattedDate);

export function getTimeHalfHourLater(dateString) {
  const date = new Date(dateString);
  date.setMinutes(date.getMinutes() + 30);

  const options = { 
    hour: 'numeric',
    minute: 'numeric',
    hour12: false //shows the AM or PM, 15:00 instead of 3:00 PM
  };

  return date.toLocaleString('en-US', options);
}


export function formatDateToGetDayOnly(dateString) {
  const date = new Date(dateString);
  
  const options = { 
    weekday: 'short', 
    hour12: false //shows the AM or PM, 15:00 instead of 3:00 PM
  };
  const formattedDate = date.toLocaleString('en-US', options);
  return ` ${formattedDate}`;
}

export function formatDateToGetNumberAndMonthOnly(dateString) {
  const date = new Date(dateString);
  
  const options = { 
    // weekday: 'short', 
    day: 'numeric', 
    month: 'numeric',
    hour12: false //shows the AM or PM, 15:00 instead of 3:00 PM
  };

  const formattedDate = date.toLocaleString('en-US', options);
  return ` ${formattedDate}`;
}



export function formatDateToGetMonthOnly(dateString) {
  const date = new Date(dateString);
  
  const options = { 
    // weekday: 'short', 
    month: 'short',
    hour12: false //shows the AM or PM, 15:00 instead of 3:00 PM
  };

  const formattedDate = date.toLocaleString('en-US', options);
  return ` ${formattedDate}`;
}
