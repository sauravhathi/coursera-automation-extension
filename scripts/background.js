chrome.runtime.onInstalled.addListener(function (details) {
    if (details.reason === 'update') {
        chrome.runtime.onUpdateAvailable.addListener(function (updateDetails) {
            console.log("Updating extension to version " + updateDetails.version);
            chrome.runtime.reload();
        });
    }
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.url) {
        chrome.tabs.sendMessage(tabId, {
            message: 'urlChanged',
            url: changeInfo.url
        }, function (response) {
            if (chrome.runtime.lastError) { } else { }
        });
    }
});