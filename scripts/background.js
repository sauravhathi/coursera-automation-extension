chrome.runtime.onInstalled.addListener(function (details) {
    if (details.reason === 'update') {
        chrome.runtime.onUpdateAvailable.addListener(function (updateDetails) {
            console.log("Updating extension to version " + updateDetails.version);
            chrome.runtime.reload();
        });
    }
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (tab.url && tab.status === 'complete') {
        chrome.tabs.sendMessage(tabId, {
            message: 'urlChanged',
            url: tab.url
        }, function (response) {
            if (chrome.runtime.lastError) { } else { }
        });
    }
});

chrome.commands.onCommand.addListener((command) => {
    if (command === "open_popup_1" || command === "open_popup_2") {
        chrome.action.openPopup();
    }
});