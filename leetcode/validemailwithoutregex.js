const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function isValidEmail(email) {
    // Check if the email is not empty
    if (!email || email.trim() === '') {
        return false;
    }

    // Check for the presence of '@'
    const atIndex = email.indexOf('@');
    if (atIndex === -1) {
        return false;
    }

    // Check for the presence of '.' after '@'
    const dotIndex = email.indexOf('.', atIndex);
    if (dotIndex === -1) {
        return false;
    }

    // Check if there is at least one character before '@' and after '@.'
    if (atIndex === 0 || dotIndex - atIndex === 1 || dotIndex === email.length - 1) {
        return false;
    }

    return true;
}

// Example usage:
const email = 'example@example.com';
if (isValidEmail(email)) {
    console.log(`${email} is a valid email address.`);
} else {
    console.log(`${email} is not a valid email address.`);
}
// rl.question('Enter your email address: ', (userInput) => {
//     const userEmail = userInput.trim();

//     if (isValidEmail(userEmail)) {
//         console.log(`Thank you! ${userEmail} is a valid email address.`);
//     } else {
//         console.log(`Invalid email address. Please enter a valid email.`);
//     }

//     rl.close();
// });

function validateEmail(email) {
    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length) {
        console.log(`Please enter a valid e-mail address \n atposition: ${atposition} \n dotposition: ${dotposition}`);
        return false;
    } else {
        return true; // Return true for a valid email
    }
}

const email1 = 'exae@';
if (validateEmail(email1)) {
    console.log(`${email1} is a valid email address.`);
} else {
    console.log(`${email1} is not a valid email address.`);
}
