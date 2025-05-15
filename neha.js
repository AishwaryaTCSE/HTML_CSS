// Get reference to Item 2
const item2 = document.getElementById('item2');

// Add click event listener
item2.addEventListener('click', function () {
  // Get and alert the parent node's text content
  const parent = item2.parentNode;
  alert(parent.textContent);

  // Log the previous and next sibling's text content
  const prevSibling = item2.previousElementSibling;
  const nextSibling = item2.nextElementSibling;

  if (prevSibling) {
    console.log("Previous Sibling:", prevSibling.textContent);
  }
  if (nextSibling) {
    console.log("Next Sibling:", nextSibling.textContent);
  }
});
