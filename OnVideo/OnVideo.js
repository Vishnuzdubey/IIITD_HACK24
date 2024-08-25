document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const progressText = document.querySelector('.progress');

    function updateProgress() {
        const totalItems = checkboxes.length;
        const checkedItems = document.querySelectorAll('input[type="checkbox"]:checked').length;
        const progressPercentage = Math.round((checkedItems / totalItems) * 100);
        progressText.textContent = `${progressPercentage}% Complete`;
    }

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateProgress);
    });

    updateProgress();

    const completeButton = document.querySelector('.complete-btn');
    completeButton.addEventListener('click', function() {
        alert('Section completed!');
        // Add functionality to move to the next section here
    });
});