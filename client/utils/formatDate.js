function formatDate(inputDate) {
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
  
    const [monthStr, day, year] = inputDate.split("-");
    const month = months[parseInt(monthStr) - 1];
  
    if (!month || isNaN(day) || isNaN(year)) {
      return "Invalid date format";
    }
  
    return `${month} ${day}, ${year}`;
  }

export default formatDate;

  