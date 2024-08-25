document.getElementById('tech-stack-btn').addEventListener('click', function() {
    const dropdown = document.getElementById('tech-stack-options');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  });
  
  document.addEventListener('click', function(event) {
    const isClickInside = document.querySelector('.dropdown').contains(event.target);
  
    if (!isClickInside) {
        document.getElementById('tech-stack-options').style.display = 'none';
    }
  });
  
  // Function to update the tech stack input based on selected checkboxes
  const checkboxes = document.querySelectorAll('#tech-stack-options input[type="checkbox"]');
  const techStackInput = document.getElementById('tech-stack');
  
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const selectedValues = Array.from(checkboxes)
            .filter(i => i.checked)
            .map(i => i.value)
            .join(', ');
        techStackInput.placeholder = selectedValues || 'Select Tech Stack';  // Set the placeholder to selected values
    });
  });