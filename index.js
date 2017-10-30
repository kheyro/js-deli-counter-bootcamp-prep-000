var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, Ada. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine[0]) {
    newServing = katzDeliLine[0];
    katzDeliLine.shift();
    return nowServing;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    for (let i = 0; i < katzDeliLine.length ; i++) {
      queue += ` ${i}. ${katzDeliLine[i]},` ;
    }
    return `The line is currently:${queue}`;
  } else {
    return "The line is currently empty."
  }
}
