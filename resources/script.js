// Function to display the modal dialog
function openModalDialog() {
    const modal = document.getElementById('modal-dialog');
    modal.classList.add('visible');
}

// Function to hide the modal dialog
function hideModalDialog() {
    const modal = document.getElementById('modal-dialog');
    modal.classList.remove('visible');
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('details-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        openModalDialog();
    });

    const closeBtn = document.getElementById('btn-close-modal');
    closeBtn.addEventListener('click', hideModalDialog);
});