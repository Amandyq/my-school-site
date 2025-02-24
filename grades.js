// Бағаларды сақтау функциясы
function saveGrades(grades) {
    localStorage.setItem("grades", JSON.stringify(grades));
}

// Бағаларды алу функциясы
function loadGrades() {
    let grades = localStorage.getItem("grades");
    return grades ? JSON.parse(grades) : {};
}

// Мұғалім тапсырманы бағалайды
function gradeTask(userID, score) {
    let role = localStorage.getItem("role");
    if (role !== "teacher") {
        alert("Тек мұғалімдер ғана бағалай алады!");
        return;
    }

    let grades = loadGrades();
    if (!grades[userID]) {
        grades[userID] = [];
    }

    grades[userID].push(score);
    saveGrades(grades);
    
    updateRating(userID);
    alert("Баға қойылды!");
}

// Оқушының рейтингін жаңарту
function updateRating(userID) {
    let grades = loadGrades();
    let scores = grades[userID] || [];
    let totalScore = scores.reduce((sum, score) => sum + score, 0);
    let average = scores.length ? (totalScore / scores.length) : 0;
    
    let rank = "Бот";
    if (average >= 90) rank = "Мастер";
    else if (average >= 75) rank = "Алмаз";
    else if (average >= 60) rank = "Алтын";
    else if (average >= 45) rank = "Күміс";
    else if (average >= 30) rank = "Қола";
    
    localStorage.setItem(`rating_${userID}`, rank);
}

// Оқушының рейтингін алу
function getRating(userID) {
    return localStorage.getItem(`rating_${userID}`) || "Бот";
}

// Рейтингті көрсету
function displayRating() {
    let userID = localStorage.getItem("userID");
    document.getElementById("userRating").innerText = getRating(userID);
}

window.onload = function () {
    displayRating();
};
