var katzDeli = [];
var otherDeli = ["Steven", "Blake", "Avi"];

// adds a person to the line

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return(`Welcome, ${name}. You are number 1 in line.`);
}

// appends the person the end of the line if there are already people on it


