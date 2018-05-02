const daysMap = {
  "0": "Sunday",
  "1": "Monday",
  "2": "Tuesday",
  "3": "Wednesday",
  "4": "Thursday",
  "5": "Friday",
  "6": "Saturday",
}

const monthsMap = {
  "0": "January",
  "1": "Februrary",
  "2": "March",
  "3": "April",
  "4": "May",
  "5": "June",
  "6": "July",
  "7": "August",
  "8": "September",
  "9": "October",
  "10": "November",
  "11": "December",
}

export function getDate (unixTimestamp) {
  const date = new Date(unixTimestamp * 1000);
  console.log('date', date);
  const day = daysMap[date.getDay()];
  console.log('day', day);
  const month = monthsMap[date.getMonth()] + ' ' + date.getDate();
  console.log('month', month);
  return `${day}, ${month}`;
}