/**
 * Custom Async/Await Chaining to get banking data from pin
 * - Create 2 async functions:
 *  1. Function to validate the pin inputted by the user (resolve boolean)
 *   - Create several pin options for validation (can accept 3 different pins with 3 different users)
 *  2. Get User Banking Data if the validation is successful (resolve user data)
 *    - If the validation fails, reject with an error message
 * 3. Main Function will accept pin inputted by the user
 * 
 * NOTE:
 * - Function validate the pin will take around 1 second to resolve
 * - Function getUserBankingData will take around 2 seconds to resolve
 * - Use setTimeout to simulate the delay
 */
const validatePin = async(pin) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const validPins = ["1234", "5678", "91011"];
      if (validPins.includes(pin)) {
        resolve(true);
      } else {
        reject("Invalid PIN");
      }
    }, 1000);
  });
}

const getUserBankingData = async(pin) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userData = {
        "1234": { name: "User 1", balance: 1000 },
        "5678": { name: "User 2", balance: 2000 },
        "91011": { name: "User 3", balance: 3000 }
      };
      if (userData[pin]) {
        resolve(userData[pin]);
      } else {
        reject("User not found");
      }
    }, 2000);
  });
}

const main = async(pin) => {
  try {
    const isValid = await validatePin(pin);
    if (isValid) {
      const userData = await getUserBankingData(pin);
      console.log("User Banking Data:", userData);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

main("1234"); // Example usage with a valid pin
main("0000"); // Example usage with an invalid pin