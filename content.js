document.addEventListener("click", (event) => {
    if (event.target.tagName === "INPUT" && event.target.type === "text") {
      const inputField = event.target;
      
      // 移除之前的菜单栏（如果存在）
      const existingMenu = document.getElementById("autoFillMenu");
      if (existingMenu) existingMenu.remove();
  
      // 创建菜单栏
      const menu = document.createElement("div");
      menu.id = "autoFillMenu";
      menu.style.position = "absolute";
      menu.style.top = `${inputField.getBoundingClientRect().bottom + window.scrollY}px`;
      menu.style.left = `${inputField.getBoundingClientRect().left + window.scrollX}px`;
      menu.style.border = "1px solid #ccc";
      menu.style.backgroundColor = "#fff";
      menu.style.padding = "5px";
      menu.style.zIndex = "1000";
  
      // 添加菜单项
      const infoItems = [
        "姓名：张三",
        "邮箱：zhangsan@example.com",
        "电话：123-456-7890",
        "地址：中国北京市"
      ];
  
      infoItems.forEach(info => {
        const item = document.createElement("div");
        item.textContent = info;
        item.style.cursor = "pointer";
        item.style.padding = "5px";
        item.addEventListener("click", () => {
          inputField.value = info.split("：")[1]; // 填充内容
          menu.remove(); // 点击后移除菜单栏
        });
        menu.appendChild(item);
      });
  
      // 点击页面其他地方时移除菜单栏
      document.addEventListener("click", (e) => {
        if (!menu.contains(e.target) && e.target !== inputField) {
          menu.remove();
        }
      }, { once: true });
  
      document.body.appendChild(menu);
    }
  });
  