// Логинді тексеру
window.onload = function () {
    let userID = localStorage.getItem("userID");
    let role = localStorage.getItem("role");

    if (!userID) {
        alert("Алдымен жүйеге кіріңіз!");
        window.location.href = "index.html";
    }

    document.getElementById("userName").innerText = userID;
    document.getElementById("userRole").innerText = role;

    // Әр рөлге өз панелін көрсету
    if (role === "student") {
        document.getElementById("studentPanel").style.display = "block";
    } else if (role === "teacher") {
        document.getElementById("teacherPanel").style.display = "block";
    } else if (role === "admin") {
        document.getElementById("adminPanel").style.display = "block";
    }
}

// Шығу функциясы
function logout() {
    localStorage.clear();
    alert("Сіз жүйеден шықтыңыз!");
    window.location.href = "index.html";
}
