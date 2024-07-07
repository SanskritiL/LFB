chrome.runtime.onInstalled.addListener(function() {
    // This event listener can be used to initialize default storage values or perform any setup tasks
    const isChecked = false;
    console.log('Toggle state changed in background:', isChecked);
  });

// Listen for tab updates
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if(tab.url.includes('linkedin.com/feed')){
    chrome.scripting.executeScript(
      {
        target: {tabId: tab.id},
        files: ['popup.js'],
      })
  }
});


