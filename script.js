// Animate section on scroll
const sections = document.querySelectorAll(".product-section");

const revealSection = () => {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (sectionTop < windowHeight - 100) {
      section.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealSection);
window.addEventListener("load", revealSection);

// Sidebar toggle logic
const sidebar = document.getElementById("sidebar");
const menuButton = document.querySelector(".menu-button");
const body = document.body;

function toggleSidebar() {
  sidebar.classList.toggle("show");
  body.classList.toggle("sidebar-active");
}

// Hover/leave detection
let isHoveringSidebar = false;
let isHoveringButton = false;

sidebar.addEventListener("mouseenter", () => isHoveringSidebar = true);
sidebar.addEventListener("mouseleave", () => {
  isHoveringSidebar = false;
  hideSidebarIfNotHovering();
});

menuButton.addEventListener("mouseenter", () => isHoveringButton = true);
menuButton.addEventListener("mouseleave", () => {
  isHoveringButton = false;
  hideSidebarIfNotHovering();
});

function hideSidebarIfNotHovering() {
  setTimeout(() => {
    if (!isHoveringSidebar && !isHoveringButton) {
      sidebar.classList.remove("show");
      body.classList.remove("sidebar-active");
    }
  }, 300);
}
document.querySelectorAll(".color-dot").forEach(dot => {
  dot.addEventListener("click", () => {
    const index = dot.getAttribute("data-index");
    document.getElementById("crop-front").src = `Merchandise Products/Crop Hoodies/front${index}.jpg`;
    document.getElementById("crop-back").src = `Merchandise Products/Crop Hoodies/back${index}.jpg`;
  });
});
function changeCropTopImage(index) {
  const front = document.getElementById('cropTopFront');
  const back = document.getElementById('cropTopBack');

  front.style.opacity = 0;
  back.style.opacity = 0;

  setTimeout(() => {
    front.src = `Merchandise Products/Crop top/front${index}.jpg`;
    back.src = `Merchandise Products/Crop top/back${index}.jpg`;

    front.onload = () => { front.style.opacity = 1; };
    back.onload = () => { back.style.opacity = 1; };
  }, 200);
}
function changeFullSleevesImage(index) {
  const front = document.getElementById('fullSleevesFront');
  const back = document.getElementById('fullSleevesBack');

  front.style.opacity = 0;
  back.style.opacity = 0;

  setTimeout(() => {
    front.src = `Merchandise Products/full sleeves/front${index}.jpg`;
    back.src = `Merchandise Products/full sleeves/back${index}.jpg`;

    front.onload = () => { front.style.opacity = 1; };
    back.onload = () => { back.style.opacity = 1; };
  }, 200);
}
function changeHoodieImage(index) {
  const front = document.getElementById('hoodiesFront');
  const back = document.getElementById('hoodiesBack');

  front.style.opacity = 0;
  back.style.opacity = 0;

  setTimeout(() => {
    front.src = `Merchandise Products/Hoodies/front${index}.jpg`;
    back.src = `Merchandise Products/Hoodies/back${index}.jpg`;

    front.onload = () => { front.style.opacity = 1; };
    back.onload = () => { back.style.opacity = 1; };
  }, 200);
}
function changeMugImage(index) {
  const mug = document.getElementById('mugImage');
  mug.style.opacity = 0;

  setTimeout(() => {
    mug.src = `Merchandise Products/Inner Colored Mugs/${index}.jpg`;
    mug.onload = () => {
      mug.style.opacity = 1;
    };
  }, 200);
}
function changeJoggersImage(index) {
  const joggers = document.getElementById('joggersImage');
  joggers.style.opacity = 0;

  setTimeout(() => {
    joggers.src = `Merchandise Products/Joggers/${index}.jpg`;
    joggers.onload = () => {
      joggers.style.opacity = 1;
    };
  }, 200);
}
function changeOversizedImage(index) {
  const front = document.getElementById('oversizedFront');
  const back = document.getElementById('oversizedBack');

  front.style.opacity = 0;
  back.style.opacity = 0;

  setTimeout(() => {
    front.src = `Merchandise Products/Oversized tshirt/front${index}.jpg`;
    back.src = `Merchandise Products/Oversized tshirt/back${index}.jpg`;

    front.onload = () => { front.style.opacity = 1; };
    back.onload = () => { back.style.opacity = 1; };
  }, 200);
}
function changePoloImage(index) {
  const front = document.getElementById('poloFront');
  const back = document.getElementById('poloBack');

  front.style.opacity = 0;
  back.style.opacity = 0;

  setTimeout(() => {
    front.src = `Merchandise Products/Polo tshirt/front${index}.jpg`;
    back.src = `Merchandise Products/Polo tshirt/back${index}.jpg`;

    front.onload = () => { front.style.opacity = 1; };
    back.onload = () => { back.style.opacity = 1; };
  }, 200);
}
function changePremiumOversizedImage(index) {
  const front = document.getElementById('premiumOversizedFront');
  const back = document.getElementById('premiumOversizedBack');

  front.style.opacity = 0;
  back.style.opacity = 0;

  setTimeout(() => {
    front.src = `Merchandise Products/Premium Oversized tshirt/front${index}.jpg`;
    back.src = `Merchandise Products/Premium Oversized tshirt/back${index}.jpg`;

    front.onload = () => { front.style.opacity = 1; };
    back.onload = () => { back.style.opacity = 1; };
  }, 200);
}
function changeRoundMenImage(index) {
  const front = document.getElementById('roundMenFront');
  const back = document.getElementById('roundMenBack');

  front.style.opacity = 0;
  back.style.opacity = 0;

  setTimeout(() => {
    front.src = `Merchandise Products/round neck tshirt for men/front${index}.jpg`;
    back.src = `Merchandise Products/round neck tshirt for men/back${index}.jpg`;

    front.onload = () => { front.style.opacity = 1; };
    back.onload = () => { back.style.opacity = 1; };
  }, 200);
}
function changeRoundWomenImage(index) {
  const front = document.getElementById('roundWomenFront');
  const back = document.getElementById('roundWomenBack');

  front.style.opacity = 0;
  back.style.opacity = 0;

  setTimeout(() => {
    front.src = `Merchandise Products/round neck tshirt for women/front${index}.jpg`;
    back.src = `Merchandise Products/round neck tshirt for women/back${index}.jpg`;

    front.onload = () => { front.style.opacity = 1; };
    back.onload = () => { back.style.opacity = 1; };
  }, 200);
}
function changeShortsImage(color) {
  const shortsImg = document.getElementById('shortsImage');
  shortsImg.style.opacity = 0;
  setTimeout(() => {
    shortsImg.src = `Merchandise Products/shorts/${color}.jpg`;
    shortsImg.onload = () => { shortsImg.style.opacity = 1; };
  }, 200);
}
function changeSweatshirtImage(index) {
  const front = document.getElementById('sweatshirtFront');
  const back = document.getElementById('sweatshirtBack');

  front.style.opacity = 0;
  back.style.opacity = 0;

  setTimeout(() => {
    front.src = `Merchandise Products/sweatshirt/front${index}.jpg`;
    back.src = `Merchandise Products/sweatshirt/back${index}.jpg`;

    front.onload = () => { front.style.opacity = 1; };
    back.onload = () => { back.style.opacity = 1; };
  }, 200);
}
function changeTotebagImage(index) {
  const totebagImg = document.getElementById('totebagImage');
  totebagImg.style.opacity = 0;

  setTimeout(() => {
    totebagImg.src = `Merchandise Products/Totebags/${index}.jpg`;
    totebagImg.onload = () => { totebagImg.style.opacity = 1; };
  }, 200);
}
// Delegate zoom-in to all product images
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".product-section img").forEach(img => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", function () {
      openImageViewer(this.getAttribute("src"));
    });
  });
});

function openImageViewer(src) {
  const viewer = document.getElementById('imageViewer');
  const viewerImg = document.getElementById('viewerImage');
  viewerImg.src = src;
  viewer.style.display = 'flex';
}

function closeImageViewer() {
  document.getElementById('imageViewer').style.display = 'none';
}
