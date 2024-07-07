setTimeout(function () {
    chrome.storage.sync.get('toggleState', function(data) {
        const isChecked = data.toggleState || false;
        if(isChecked){
            const feedElements = document.querySelectorAll('.scaffold-layout__main');
            feedElements.forEach(feed => {
                    feed.style.display = 'none'
            });
        }
    });
}, 10);

// Function to update the text content based on checkbox state
function updateTextContent(isChecked) {
    const textElement = document.querySelector('.text');
    textElement.textContent = isChecked ? 'Your LinkedIn Feed is blocked.' : 'Block your LinkedIn Feed.';
}

// Function to retrieve checkbox state from Chrome storage
function getCheckboxState() {
    chrome.storage.sync.get('toggleState', function(data) {
        const isChecked = data.toggleState || false; // Default to false if not found
        document.getElementById('toggle').checked = isChecked;
        updateTextContent(isChecked);
        return isChecked;
    });
}

// Function to store checkbox state in Chrome storage
async function saveCheckboxState(isChecked) {
    chrome.storage.sync.set({ 'toggleState': isChecked });
}

// Event listener for checkbox change
document.getElementById('toggle').addEventListener('change', async function() {
    const isChecked = this.checked;
    updateTextContent(isChecked);
    saveCheckboxState(isChecked);
});

//Initialize checkbox state on page load
document.addEventListener('DOMContentLoaded', function() {
    getCheckboxState();
});
