document.addEventListener("DOMContentLoaded", () => {
  /* ---------------- SEARCH INPUT STYLE ---------------- */

  const searchInputs = document.querySelectorAll(".search-item input");

  searchInputs.forEach((input) => {
    input.addEventListener("focus", () => {
      input.parentElement.style.background = "#f7f7f7";
      input.parentElement.style.borderRadius = "20px";
    });

    input.addEventListener("blur", () => {
      input.parentElement.style.background = "transparent";
    });
  });

  /* ---------------- NAV TABS ---------------- */

  const tabs = document.querySelectorAll(".nav-tab");
  const tabPanes = document.querySelectorAll(".tab-pane");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.tab;

      tabs.forEach((t) => t.classList.remove("active"));
      tabPanes.forEach((p) => p.classList.remove("active"));

      tab.classList.add("active");
      const activePane = document.getElementById(target);
      activePane.classList.add("active");

      const slider = activePane.querySelector(".tiles-out");
      const prevBtn = activePane.querySelector(".prev");
      const nextBtn = activePane.querySelector(".next");

      if (slider) {
        if (slider.scrollLeft <= 0) {
          prevBtn.classList.add("disabled");
        } else {
          prevBtn.classList.remove("disabled");
        }

        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 5) {
          nextBtn.classList.add("disabled");
        } else {
          nextBtn.classList.remove("disabled");
        }
      }
    });
  });

  /* ---------------- LOCATION SEARCH ---------------- */

  const locationInputs = document.querySelectorAll(".location-input");
  const dropdown = document.getElementById("locationDropdown");

  locationInputs.forEach((input) => {
    input.addEventListener("focus", () => {
      dropdown.classList.add("active");
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".location-field")) {
      dropdown.classList.remove("active");
    }
  });

  /* ---------------- CALENDAR ---------------- */

 

  /* ---------------- GUEST DROPDOWN ---------------- */

  const guestInput = document.getElementById("guestInput");
  const guestDropdown = document.getElementById("guestDropdown");

  guestInput.addEventListener("click", () => {
    guestDropdown.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".guest-field")) {
      guestDropdown.classList.remove("active");
    }
  });

  const counts = {
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  };

  function updateGuestInput() {
    const totalGuests = counts.adults + counts.children;

    let text = "";

    if (totalGuests > 0) text += `${totalGuests} guests`;
    if (counts.infants > 0) text += `, ${counts.infants} infants`;
    if (counts.pets > 0) text += `, ${counts.pets} pets`;

    guestInput.value = text || "Add guests";
  }

  document.querySelectorAll(".plus").forEach((btn) => {
    btn.addEventListener("click", () => {
      const type = btn.dataset.type;
      counts[type]++;

      document.getElementById(type + "Count").innerText = counts[type];

      updateGuestInput();
    });
  });

  document.querySelectorAll(".minus").forEach((btn) => {
    btn.addEventListener("click", () => {
      const type = btn.dataset.type;

      if (counts[type] > 0) {
        counts[type]--;

        document.getElementById(type + "Count").innerText = counts[type];

        updateGuestInput();
      }
    });
  });

  /* ---------------- SEARCH BUTTON ---------------- */

  const searchFields = document.querySelectorAll(".search-item input");
  const searchBtn = document.getElementById("searchBtn");

  searchFields.forEach((field) => {
    field.addEventListener("focus", () => {
      searchBtn.classList.add("active");
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-bar")) {
      searchBtn.classList.remove("active");
    }
  });

  /* ---------------- MENU DROPDOWN ---------------- */

  const menuBtn = document.querySelector(".menu-btn");
  const menuDropdown = document.getElementById("menuDropdown");

  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    menuDropdown.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".menu-wrapper")) {
      menuDropdown.classList.remove("active");
    }
  });

  /* ---------------- PROPERTY SLIDER ---------------- */

  document.querySelectorAll(".property-slider").forEach((sliderWrap) => {
    const slider = sliderWrap.querySelector(".tiles-out");
    const nextBtn = sliderWrap.querySelector(".next");
    const prevBtn = sliderWrap.querySelector(".prev");

    const scrollAmount = 300;

    function updateArrows() {
      if (slider.scrollLeft <= 0) {
        prevBtn.classList.add("disabled");
      } else {
        prevBtn.classList.remove("disabled");
      }

      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 5) {
        nextBtn.classList.add("disabled");
      } else {
        nextBtn.classList.remove("disabled");
      }
    }

    nextBtn.addEventListener("click", () => {
      slider.scrollLeft += scrollAmount;
    });

    prevBtn.addEventListener("click", () => {
      slider.scrollLeft -= scrollAmount;
    });

    slider.addEventListener("scroll", updateArrows);

    updateArrows();
  });

  /* ---------------- HEADER SCROLL ---------------- */

  /* ---------------- HEADER SCROLL ---------------- */
  /* ---------------- HEADER SCROLL ---------------- */

 /* ---------------- HEADER SCROLL ---------------- */

const header = document.querySelector(".ab-header");
let isScrolled = false;

window.addEventListener("scroll", () => {

  const scrollY = window.scrollY;

  // Only add class once
  if (!isScrolled && scrollY > 100) {
    header.classList.add("scrolled");
    isScrolled = true;
  }

  // Only remove class once
  if (isScrolled && scrollY < 10) {
    header.classList.remove("scrolled");
    isScrolled = false;
  }

});

  /* ---------------- INSPIRATION TABS ---------------- */

  const inspiretabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");

  inspiretabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.tab;

      inspiretabs.forEach((t) => t.classList.remove("active"));
      contents.forEach((c) => c.classList.remove("active"));

      tab.classList.add("active");
      document.getElementById(target).classList.add("active");
    });
  });
});
