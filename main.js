const add = (a, b) => {
  return a + b
}

const sub = (a, b) => {
  return a - b
}

function abs(x) {
  if (x >= 0) {
    return x
  } else {
    return -x
  }
}

window.add = add
window.sub = sub
window.abs = abs
