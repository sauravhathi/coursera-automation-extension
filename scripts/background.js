chrome.runtime.onInstalled.addListener(function (details) {
    if (details.reason === 'update') {
        chrome.runtime.onUpdateAvailable.addListener(function (updateDetails) {
            console.log("Updating extension to version " + updateDetails.version);
            chrome.runtime.reload();
        });
    }
});