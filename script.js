// 顯示彈窗
function showModal(message, type, callback) {
    const modal = document.getElementById("modal");
    const text = document.getElementById("modalText");
    const content = document.querySelector(".modal-content");

    text.innerText = message;

    content.classList.remove("modal-success", "modal-error");

    if (type === "success") content.classList.add("modal-success");
    if (type === "error") content.classList.add("modal-error");

    modal.classList.remove("hidden");

    window.modalCallback = callback;
}

// 關閉彈窗
function closeModal() {
    document.getElementById("modal").classList.add("hidden");

    if (window.modalCallback) {
        window.modalCallback();
        window.modalCallback = null;
    }
}

/* ======================
   選擇題
====================== */
function checkMCQ() {
    let answer = document.querySelector('input[name="q1"]:checked');

    if (!answer) {
        showModal("請選擇答案", "error");
        return;
    }

    if (answer.value === "2") {
        showModal("答對了！", "success");
    } else {
        showModal("答錯了！", "error");
    }
}

/* ======================
   是非題
====================== */
function checkTF(ans) {
    if (ans === false) {
        showModal("答對了！", "success");
    } else {
        showModal("答錯了！", "error");
    }
}