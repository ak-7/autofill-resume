chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: main,
        args: []
    });
});

function main() {

    if (window.autofill_manager && window.autofill_manager.popup !== null) {
        window.autofill_manager.popup.show_popup();
    } else {
        console.log("reload the page; in background bundle");
    }
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === "open edit page") {
        chrome.tabs.create({ url: chrome.runtime.getURL('index.html') });
    }
});