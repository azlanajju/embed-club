(function () {
  const NAV_GROUPS = [
    {
      title: "Main",
      items: [{ id: "home", label: "Home", icon: "fas fa-home" }],
    },
    {
      title: "Club",
      items: [
        { id: "about", label: "About", icon: "fas fa-info-circle", file: "about.html" },
        { id: "members", label: "Members", icon: "fas fa-users", file: "members.html" },
      ],
    },
    {
      title: "Activities",
      items: [
        { id: "events", label: "Events", icon: "fas fa-calendar-alt", file: "events.html" },
        {
          id: "achievements",
          label: "Achievements",
          icon: "fas fa-trophy",
          file: "achievements.html",
        },
        { id: "gallery", label: "Gallery", icon: "fas fa-image", file: "gallery.html" },
      ],
    },
    {
      title: "Resources",
      items: [
        { id: "resource", label: "Resource", icon: "fas fa-book", file: "resource.html" },
        { id: "project", label: "Project", icon: "fas fa-lightbulb", file: "project.html" },
        {
          id: "simulator",
          label: "Simulator",
          icon: "fas fa-microchip",
          file: "simulator.html",
        },
      ],
    },
    {
      title: "Programs",
      items: [
        {
          id: "salesforce",
          label: "Agent Blazer Club",
          icon: "fas fa-rocket",
          file: "salesforce.html",
        },
      ],
    },
    {
      title: "Connect",
      items: [
        { id: "contact", label: "Contact", icon: "fas fa-envelope", file: "contact.html" },
        { id: "feedback", label: "Feedback", icon: "fas fa-comments", file: "feedback.html" },
      ],
    },
  ];

  function getNavContext() {
    const path = window.location.pathname.replace(/\\/g, "/").toLowerCase();
    if (path.includes("/content/")) {
      return { home: "../index.html", pages: "../pages/" };
    }
    if (path.includes("/pages/")) {
      return { home: "../index.html", pages: "./" };
    }
    return { home: "./index.html", pages: "./pages/" };
  }

  function getCurrentPageId() {
    const path = window.location.pathname.replace(/\\/g, "/").toLowerCase();
    const segments = path.split("/").filter(Boolean);
    const file = segments.pop() || "index.html";

    if (!file.endsWith(".html")) {
      return "home";
    }

    if (file === "index.html") {
      return "home";
    }

    return file.replace(".html", "");
  }

  function resolveHref(item, ctx, currentId) {
    if (item.id === "home") {
      return currentId === "home" ? "#" : ctx.home;
    }
    return ctx.pages + item.file;
  }

  function buildSideNav() {
    const sideNav = document.getElementById("sideNav");
    if (!sideNav) return;

    const ctx = getNavContext();
    const currentId = getCurrentPageId();

    const groupsHtml = NAV_GROUPS.map((group) => {
      const links = group.items
        .map((item) => {
          const href = resolveHref(item, ctx, currentId);
          const isActive = item.id === currentId;
          const activeClass = isActive ? " active" : "";
          return `<a href="${href}" class="nav-link${activeClass}"><i class="${item.icon}"></i> ${item.label}</a>`;
        })
        .join("");

      return `<div class="nav-group">
        <p class="nav-group-title">${group.title}</p>
        ${links}
      </div>`;
    }).join("");

    sideNav.innerHTML = `
      <i id="closeBtn" class="fas fa-times closeIcon" aria-label="Close menu"></i>
      <div class="nav-spacer" aria-hidden="true"></div>
      <nav class="nav-groups" aria-label="Site navigation">${groupsHtml}</nav>
    `;
  }

  buildSideNav();
})();
