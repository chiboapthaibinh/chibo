document.addEventListener("DOMContentLoaded", () => {
    // --- 1. TỰ ĐỘNG BƠM STYLE CSS VÀO TRANG ---
    const style = document.createElement('style');
    style.textContent = `
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: sans-serif; }
        body { background-color: #f4f6f9; padding: 40px 20px; display: flex; justify-content: center; }
        .container { width: 100%; max-width: 600px; background: #fff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); overflow: hidden; }
        .tabs { display: flex; background-color: #e2e8f0; }
        .tab-btn { flex: 1; padding: 15px; border: none; background: none; font-size: 16px; font-weight: 600; color: #4a5568; cursor: pointer; transition: all 0.3s; }
        .tab-btn:hover { background-color: #cbd5e1; }
        .tab-btn.active { background-color: #3182ce; color: white; }
        .content-wrapper { padding: 30px; min-height: 200px; }
        .content-item { display: none; }
        .content-item.active { display: block; animation: fadeIn 0.5s ease; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    `;
    document.head.appendChild(style);

    // --- 2. XỬ LÝ LOGIC BẤM ĐỔI NỘI DUNG ---
    const buttons = document.querySelectorAll(".tab-btn");
    const contents = document.querySelectorAll(".content-item");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            // Xóa trạng thái kích hoạt cũ
            buttons.forEach(btn => btn.classList.remove("active"));
            contents.forEach(content => content.classList.remove("active"));

            // Kích hoạt mục mới được bấm
            button.classList.add("active");
            const targetId = button.getAttribute("data-target");
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add("active");
            }
        });
    });
});