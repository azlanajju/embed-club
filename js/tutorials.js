// Simple Tutorial Page JavaScript

// Copy code function
function copyCode() {
  const codeElement = document.getElementById("arduino-code");
  const codeText = codeElement.textContent;

  navigator.clipboard
    .writeText(codeText)
    .then(() => {
      showNotification("Code copied to clipboard!", "success");
    })
    .catch(() => {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = codeText;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      showNotification("Code copied to clipboard!", "success");
    });
}

// Download code function
function downloadCode() {
  const codeElement = document.getElementById("arduino-code");
  const codeText = codeElement.textContent;

  const blob = new Blob([codeText], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "arduino_iot_mqtt.ino";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showNotification("Code downloaded as arduino_iot_mqtt.ino", "success");
}

// Notification system
function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.textContent = message;

  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 12px 20px;
        background: ${
          type === "success"
            ? "#28a745"
            : type === "error"
            ? "#dc3545"
            : "#17a2b8"
        };
        color: white;
        border-radius: 8px;
        z-index: 10000;
        font-weight: 500;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
    `;

  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.style.opacity = "1";
    notification.style.transform = "translateX(0)";
  }, 100);

  // Animate out and remove
  setTimeout(() => {
    notification.style.opacity = "0";
    notification.style.transform = "translateX(100%)";
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

// Initialize page
document.addEventListener("DOMContentLoaded", function () {
  console.log("Arduino IoT Tutorial page loaded successfully!");

  // Copy button handler for code snippet blocks
  document.querySelectorAll(".copy-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetSel = btn.getAttribute("data-target");
      const target = document.querySelector(targetSel);
      if (!target) return;
      const text = target.textContent;

      const toast = btn.closest(".code-window")?.querySelector(".copy-toast");

      const doToast = () => {
        if (toast) {
          toast.style.display = "block";
          setTimeout(() => {
            toast.style.display = "none";
          }, 1200);
        } else {
          showNotification("Copied to clipboard", "success");
        }
      };

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard
          .writeText(text)
          .then(doToast)
          .catch(() => {
            // Fallback
            const ta = document.createElement("textarea");
            ta.value = text;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand("copy");
            document.body.removeChild(ta);
            doToast();
          });
      } else {
        // Fallback
        const ta = document.createElement("textarea");
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        doToast();
      }
    });
  });

  // Add smooth scrolling for any anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});
