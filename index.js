var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return katzDeliLine.length;
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