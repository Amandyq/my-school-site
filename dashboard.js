// Логинді тексеру
window.onload = function () {
    let userID = localStorage.getItem("userID");
    let role = localStorage.getItem("role");

    if (!userID) {
        alert("Алдымен жүйеге кіріңіз!");
        window.location.href = "index.html"; // Егер пайдаланушы кірмеген болса, басты бетке қайтарады
    }

    document.getElementById("userName").innerText = userID;
    document.getElementById("userRole").innerText = role;
}

// Шығу функциясы
function logout() {
    localStorage.clear();
    alert("Сіз жүйеден шықтыңыз!");
    window.location.href = "index.html";
}
