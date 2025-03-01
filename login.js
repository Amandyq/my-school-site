// Автоматты түрде ID мен пароль жасау
function generateID(name) {
    return name.toLowerCase().replace(/\s/g, '') + Math.floor(1000 + Math.random() * 9000);
}

function registerUser() {
    let name = prompt("Аты-жөніңізді енгізіңіз:");
    
    if (name) {
        let userID = generateID(name);
        let password = Math.random().toString(36).slice(-8);
        
        let role = prompt("Рөліңізді таңдаңыз: student (оқушы), teacher (мұғалім), admin (админ)").toLowerCase();
        if (role !== "student" && role !== "teacher" && role !== "admin") {
            alert("Қате! Тек 'student', 'teacher' немесе 'admin' деп жазыңыз.");
            return;
        }
        
        localStorage.setItem("userID", userID);
        localStorage.setItem("password", password);
        localStorage.setItem("role", role); // Рөлді сақтау
        
        alert(`Сіздің ID: ${userID}\nПароль: ${password}\nРөліңіз: ${role}`);
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
