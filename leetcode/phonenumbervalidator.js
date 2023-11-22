function validatePhoneNumber(phoneNumber) {
    // Remove all spaces from the phone number
    phoneNumber = phoneNumber.replace(" ", "");
  
    // Check if the phone number starts with a '+' or '0'
    if (!phoneNumber.startsWith('+') && !phoneNumber.startsWith('0')) {
      return false;
    }
  
    // Check if the phone number contains only digits
    if (!/^\d+$/.test(phoneNumber)) {
      return false;
    }
  
    // Check if the phone number has a valid length
    if (phoneNumber.length < 10 || phoneNumber.length > 15) {
      return false;
    }
  
    return true;
  }
  
  // Read the input
  const input = [
    "8147326014",
    "+918147326014",
    "08147326014",
    "+91 81473 26014",
    " 081473 26014",
    "81473 26014",
    "8147abcd 123",
    "814-732-6014",
    " 814 7326014",
  ];
  
  // Validate each phone number
  for (const phoneNumber of input) {
    if (validatePhoneNumber(phoneNumber)) {
      console.log("True");
    } else {
      console.log("False");
    }
  }
  