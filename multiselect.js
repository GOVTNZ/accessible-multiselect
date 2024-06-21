export function setupMultiselect(element) {
  // TODO: 
    // convert to selected items count (yoink from gazette)
    // make count text configurable?

  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
