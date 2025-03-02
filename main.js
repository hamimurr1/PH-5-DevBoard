document.getElementById("data").innerText = dateFormatter();
document
  .getElementById("color-change-box")
  .addEventListener("click", function () {
    const hexCode = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hexCode[Math.floor(Math.random() * hexCode.length)];
    }
    document.body.style.backgroundColor = hexColor;
  });

const completedButtons = document.getElementsByClassName("completed-btn");

for (const button of completedButtons) {
  button.addEventListener("click", function (e) {
    alert("Task Completed");
    e.target.disabled = true;
    const totalCompleteElement = document.getElementById("total-complete");
    totalCompleteElement.innerText =
      parseInt(totalCompleteElement.innerText) + 1;
    const taskAssignedElement = document.getElementById("task-assigned");
    if (parseInt(taskAssignedElement.innerText) === 1) {
      alert("All tasks are completed");
    }
    taskAssignedElement.innerText = parseInt(taskAssignedElement.innerText) - 1;
    const taskName =
      e.target.parentElement.parentElement.querySelector(".card h2").innerText;
    const notificationsElement = document.getElementById("notifications");
    const currentTime = new Date().toLocaleTimeString("en-US", {
      hour12: true,
    });
    notificationsElement.innerHTML += `
            <div class="text-sm bg-bgMain shadow-sm rounded-lg p-2 mt-2">
                You have Complete The Task Add ${taskName} at ${currentTime}
              </div>
    `;
  });
}

document.getElementById("histories-btn").addEventListener("click", function () {
  document.getElementById("notifications").innerHTML = "";
});

function dateFormatter() {
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return new Date().toLocaleDateString("en-US", options);
}

document.getElementById("new-today").addEventListener("click", function () {
  window.location.href = "blog.html";
});
