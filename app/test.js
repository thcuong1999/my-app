const feature = (a, b) => {
  console.log(a + b)
  return a + b
}

const subFeature = () => {
  const a = 1
  const b = 2
  console.log(a / b)
  return a +  b
}

const subfeature2 = (b, c) => {

  return b % c;
}

module.exports = subFeature
