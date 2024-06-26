export function setupMultiselect(element) {

  // Select elements
  const selectedCountElement = element.querySelector('.multiselect__selected-count');
  const checkboxes = element.querySelectorAll('input[type="checkbox"]');

  // Count selected checkboxes
  const updateCount = () => {
    const selectedCount = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
    selectedCountElement.textContent = `${selectedCount} of ${checkboxes.length} selected`;
  }
  
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateCount);
  });

}
