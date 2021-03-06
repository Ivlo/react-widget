export default function numberToFixed(number, fixed = 2) {
  return (number / 100).toFixed(fixed).replace(".", ",");
}
