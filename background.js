chrome.contextMenus.create({
  id: "Reverse Light",
  title: "Reverse Light",
  contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "openArchive") {
    const selectedText = info.selectionText;
    for (let i = 1; i <= 255; i += 10){
        const archiveUrl = `https://www.google.com/search?q=%28site:***${i} %7C site:***${i+1} %7C site:***${i+2} %7C site:***${i+3} %7C site:***${i+4} %7C site:***${i+5} %7C site:***${i+6} %7C site:***${i+7} %7C site:***${i+8} %7C site:***${i+9}%29 %26 ${selectedText}`
        chrome.tabs.create({ url: archiveUrl });
    }
  }
});
