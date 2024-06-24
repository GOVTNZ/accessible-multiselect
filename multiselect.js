export function setupMultiselect(element) {
  // TODO: 
    // convert to selected items count (yoink from gazette)
    // make count text configurable?


    // Select the element with class 'multiselect__selected-count' from within the multiselect element
    const selectedCountElement = element.querySelector('.multiselect__selected-count');

  // count selected checkboxes
  const updateCount = () => {
    const checkboxes = element.querySelectorAll('.multiselect__checkbox');
    const selectedCount = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
    selectedCountElement.textContent = selectedCount;
  }

  // Add event listeners to checkboxes within the multiselect element
  const checkboxes = element.querySelectorAll('.multiselect__checkbox');
  checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', updateCount);
  });

  // TODO: Coding 
    // 

}
