function checkTimestemp(arg) {
  const timestamp1 = Date.now();
  const timestamp2 = JSON.parse(arg);

  const timeDifference = timestamp1 - timestamp2;

  if (timeDifference > 24 * 60 * 60 * 1000) {
    return false;
} else {
    return true;
  }
}

export default checkTimestemp;