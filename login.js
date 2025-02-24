// Автоматты түрде ID мен пароль жасау
function generateID(name) {
    return name.toLowerCase().replace(/\s/g, '') + Math.floor(1000 + Math.random() * 9000);
}

function registerUser() {
    let name = prompt("Аты-жөніңізді енгізіңіз:");
    
    if (name) {
        let userID = generateID(name);
        let password = Math.random().toString(36).slice(-8);
        
        localStorage.setItem("userID", userID);
        localStorage.setItem("password", password);
        localStorage.setItem("role", "student"); // Әзірге барлық қолданушылар оқушы болады
        
        alert(`Сіздің ID: ${userID}\nПароль: ${password}`);
    }
}

function loginUser() {
    let userID = localStorage.getItem("userID");
    let password = localStorage.getItem("password");

    if (userID && password) {
        alert(`Сіз жүйеге кірдіңіз! ID: ${userID}`);
        window.location.href = "dashboard.html"; // Басты бетке бағыттау
    } else {
        alert("Алдымен тіркеліңіз!");
    }
}
