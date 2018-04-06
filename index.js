var katzDeli = [];

/* adds a person to the line
appends the person the end of the line if there are already people on it
properly handles multiple people being added */

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return("Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.");
}

function nowServing(x) {
  
}