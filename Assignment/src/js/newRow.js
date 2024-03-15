window.addEventListener('scroll', function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) { // set to generate new rows when 100 px from bottom of the screen
      loadMoreRows();
    }
  });
  
  function loadMoreRows() {
    const container = document.getElementById('container');
    const existingRows = document.querySelectorAll('.row');
    const randomRowIndex = Math.floor(Math.random() * Math.min(existingRows.length, 5)); // Generate a random index within the range of 0 to 4 since thats my preset rows
    const randomRow = existingRows[randomRowIndex];
    const newRow = randomRow.cloneNode(true); // Clone random existing row
    
    // Adjust IDs and "for" attributes of checkboxes and labels in the cloned row
    const checkboxes = newRow.querySelectorAll('input[type="checkbox"]');
    const labels = newRow.querySelectorAll('label');
    
    checkboxes.forEach((checkbox, index) => {
      const newCheckboxId = `checkbox${Math.random().toString(36).substring(7)}`; // Generate a random ID for the checkbox
      checkbox.id = newCheckboxId;
      labels[index].setAttribute('for', newCheckboxId); // Set "for" attribute of the label to the new checkbox ID
    });
  
    container.appendChild(newRow); // Append the new row to the container
  }
  