export default function round(number, numberOfDecimals = 2) {
  return (number / 100).toFixed(numberOfDecimals).replace(".", ",");
}
