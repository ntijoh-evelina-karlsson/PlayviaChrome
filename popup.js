
// When the button is clicked, inject setPageBackgroundColor into current page
playVideo.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: clickPlayOrPause,
  });
});

// The body of this function will be execuetd as a content script inside the
// current page
function clickPlayOrPause() {
  chrome.storage.sync.get(() => {
    document.querySelector("#react-mount > div > div.vask-container.Player-player-YFhdD > div > div > div.scene").click();
  });
}
