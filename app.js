function displayInfo(name, age) {
  console.log(`Tên: ${name}`);
  console.log(`Tuổi: ${age}`);
}

function calculateAge(birthYear) {
    const currentYear = 2025
    return currentYear - birthYear
}

const birthYear = 2000
const age = calculateAge(birthYear)

displayInfo("Alice", 30);

console.log(`Với năm sinh ${birthYear}, tuổi của bạn là ${age}`)