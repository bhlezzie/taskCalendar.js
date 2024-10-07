// taskCalendar.js

// Prompt user to input a day of the week
let day = ("Please enter a day of the week (e.g., 'Monday', 'Tuesday'):");

// Convert the input to lowercase for easier matching
day = day.toLowerCase();

// Use a switch statement to map each day to a specific task
switch (day) {
    case 'monday':
        console.log("Task: Team meeting at 10 AM");
        break;
    case 'tuesday':
        console.log("Task: Project development and coding");
        break;
    case 'wednesday':
        console.log("Task: Client presentation preparation");
        break;
    case 'thursday':
        console.log("Task: Code review and debugging");
        break;
    case 'friday':
        console.log("Task: Deploy new features");
        break;
    case 'saturday':
        console.log("Task: Attend workshop or learning sessions");
        break;
    case 'sunday':
        console.log("Task: Rest and recharge for the week ahead");
        break;
    default:
        console.log("Invalid day entered. Please enter a valid day of the week.");
}
