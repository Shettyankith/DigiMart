function formatDate(createdAt) {
    // Create a new Date object from the input date string
    const date = new Date(createdAt);
  
    // Define an array of month names
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    // Extract the month, day, and year from the Date object
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
  
    // Return the formatted date string
    return `${month} ${day} ${year}`;
  }
 

 export default formatDate;