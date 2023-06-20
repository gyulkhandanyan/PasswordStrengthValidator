function togglePasswordVisibility() {
    let password = document.getElementById("password-input");
    let toggle = document.querySelector(".toggle-password");
  
    if (password.getAttribute("type") === "password") {
      password.setAttribute("type", "text");
      toggle.style.color = "rgb(220, 220, 220)";
    } else {
      password.setAttribute("type", "password");
      toggle.style.color = "#000000";
    }
  }
  
  function updateStrengthMeter() {
    const strengthMeter = document.getElementById("strength-meter");
    const reasonsContainer = document.getElementById("reasons-container");
    const password = document.getElementById("password-input").value;
  
    const weaknesses = calculatePasswordStrength(password);
    let strength = 100;
  
    reasonsContainer.innerHTML = "";
  
    weaknesses.forEach((weakness) => {
      if (weakness === null) return;
  
      strength -= weakness.deduction;
      const messageElement = document.createElement("div");
      messageElement.innerText = weakness.message;
      reasonsContainer.appendChild(messageElement);
    });
  
    strengthMeter.style.setProperty("--strength", strength);
  }
  
  function calculatePasswordStrength(password) {
    const weaknesses = [];
  
    weaknesses.push(lengthWeakness(password));
    weaknesses.push(lowercaseWeakness(password));
    weaknesses.push
  