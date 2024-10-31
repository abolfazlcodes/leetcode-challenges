// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

// Example 1:

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"
// Example 2:

// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"

// simplest solution is using replaceAll
// function defangIPaddress(address) {
//   return address.replaceAll(".", "[.]");
// }

// we are assured that it is a vaid IPv4 address ==> length between 7 to 15
function defangIPaddress(address) {
  const updatedAddress = [];

  for (let i = 0; i < address.length; i++) {
    if (address[i] === ".") {
      updatedAddress.push("[.]");
    } else {
      updatedAddress.push(address[i]);
    }
  }

  return updatedAddress.join("");
}

console.log(defangIPaddress("1.1.1.1"));
console.log(defangIPaddress("255.100.50.0"));
