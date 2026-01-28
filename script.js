const input = document.getElementById("commandInput");
const output = document.getElementById("output");

function print(text) {
  output.innerHTML += text + "<br>";
  output.scrollTop = output.scrollHeight;
}

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const cmd = input.value.trim().toLowerCase();
    print("&gt; " + cmd);
    handleCommand(cmd);
    input.value = "";
  }
});

function handleCommand(cmd) {
  switch (cmd) {
    case "help":
      print(`
Available Commands:
- help
- status
- quote
- focus
- whoami
- clear
`);
      break;

    case "status":
      fakeScan();
      break;

    case "quote":
      hackerQuote();
      break;

    case "focus":
      focusMode();
      break;

    case "whoami":
      print("USER // Consciousness Online");
      break;

    case "clear":
      output.innerHTML = "";
      break;

    default:
      print("Command not recognized. Type 'help'");
  }
}

function fakeScan() {
  print("Scanning system...");
  let percent = 0;
  const interval = setInterval(() => {
    percent += 10;
    print("Scan progress: " + percent + "%");
    if (percent >= 100) {
      clearInterval(interval);
      print("No threats detected. System stable.");
    }
  }, 200);
}

function hackerQuote() {
  const quotes = [
    "The quieter you become, the more you can hear.",
    "Control the code, control the reality.",
    "Privacy is power.",
    "Your mind is the real system."
  ];
  const q = quotes[Math.floor(Math.random() * quotes.length)];
  print(q);
}

function focusMode() {
  print("Entering focus mode for 25 minutes...");
  document.body.classList.add("glitch");
  setTimeout(() => {
    document.body.classList.remove("glitch");
    print("Focus session complete. Welcome back.");
  }, 5000); // demo time (5s instead of 25min)
}
