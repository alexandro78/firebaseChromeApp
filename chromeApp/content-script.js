chrome.runtime.sendMessage({data: "Hello from content script!"}, function(response) {
  console.log(response.data);
});
