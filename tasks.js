// Локалды жадта тапсырмаларды сақтау
function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Локалды жадтан тапсырмаларды алу
function loadTasks() {
    let tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
}

// Мұғалім тапсырма қосады
function addTask() {
    let role = localStorage.getItem("role");
    if (role !== "teacher") {
        alert("Тек мұғалімдер ғана тапсырма қоса алады!");
        return;
    }

    let taskTitle = prompt("Тапсырманың атауын енгізіңіз:");
    if (!taskTitle) return;

    let tasks = loadTasks();
    tasks.push({ title: taskTitle, submissions: [] });
    saveTasks(tasks);
    
    alert("Тапсырма қосылды!");
    displayTasks();
}

// Оқушы тапсырма жібереді
function submitTask(index) {
    let role = localStorage.getItem("role");
    if (role !== "student") {
        alert("Тек оқушылар ғана тапсырма жібере алады!");
        return;
    }

    let imageUrl = prompt("Тапсырмаңыздың сурет сілтемесін енгізіңіз (Google Drive немесе басқа):");
    if (!imageUrl) return;

    let tasks = loadTasks();
    tasks[index].submissions.push({ user: localStorage.getItem("userID"), image: imageUrl });
    saveTasks(tasks);
    
    alert("Тапсырма жіберілді!");
    displayTasks();
}

// Тапсырмаларды көрсету
function displayTasks() {
    let tasks = loadTasks();
    let taskList = document.getElementById("taskList");
    if (!taskList) return;

    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        let taskElement = document.createElement("div");
        taskElement.innerHTML = `<h3>${task.title}</h3>`;

        let submitButton = document.createElement("button");
        submitButton.innerText = "Тапсырманы жіберу";
        submitButton.onclick = function () { submitTask(index); };
        taskElement.appendChild(submitButton);

        // Егер мұғалім болса, тапсырмаға кімнің жауап жібергенін көреді
        if (localStorage.getItem("role") === "teacher") {
            taskElement.innerHTML += "<h4>Жіберілген жауаптар:</h4>";
            task.submissions.forEach(submission => {
                taskElement.innerHTML += `<p>${submission.user}: <a href="${submission.image}" target="_blank">Суретті қарау</a></p>`;
            });
        }

        taskList.appendChild(taskElement);
    });
}

window.onload = function () {
    displayTasks();
};
