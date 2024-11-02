document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll("#infoList li");
    items.forEach(item => {
      item.addEventListener("click", () => {
        // 发送选中内容给 content.js
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
          chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            func: (text) => {
              // 将内容发送到 content.js
              window.dispatchEvent(new CustomEvent("fillInput", { detail: text }));
            },
            args: [item.textContent]
          });
        });
        window.close(); // 关闭菜单栏
      });
    });
  });
  