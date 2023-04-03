chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    sendResponse({data: "Hello from background script!"});
  });
  