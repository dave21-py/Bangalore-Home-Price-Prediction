$(document).ready(function () {
  console.log("Document is ready. Initializing application...");

  /* =================================================================================
       I. INITIALIZE ML MODEL DATA (Load Locations)
       ================================================================================= */

  function onPageLoad() {
    console.log("Fetching locations...");
    var url = "/get_location_names";

    $.get(url, function (data, status) {
      console.log("Successfully received location data.");
      if (data) {
        var locations = data.locations;
        $("#uiLocations").empty();
        var defaultOption = new Option("Choose a Location", "", true, true);
        $(defaultOption).prop("disabled", true);
        $("#uiLocations").append(defaultOption);
        for (var i in locations) {
          $("#uiLocations").append(new Option(locations[i]));
        }
      }
    });
  }
  onPageLoad();

  /* =================================================================================
       II. INITIALIZE UI ANIMATIONS AND INTERACTIONS
       ================================================================================= */

  console.log("Initializing animations...");

  gsap.registerPlugin(ScrollTrigger);

  // --- THE DEFINITIVE FIX ---
  // STEP 1: Use JS to hide all sections except the hero. This avoids CSS conflicts.
  gsap.set("section:not(.hero)", { opacity: 0, y: 50 });

  // STEP 2: Animate the header and hero text on page load
  const pageLoadTl = gsap.timeline({ defaults: { ease: "power3.out" } });
  pageLoadTl.from("header", { y: -50, opacity: 0, duration: 1, delay: 0.2 });

  // STEP 3: Animate all other sections TO a visible state ON SCROLL
  gsap.utils.toArray("section:not(.hero)").forEach((section) => {
    gsap.to(section, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });

  gsap.from(".project-item", {
    scrollTrigger: { trigger: "#projects", start: "top 80%" },
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
  });

  console.log("Animations initialized.");
});

/* =================================================================================
   III. ML PRICE ESTIMATOR FUNCTIONS (Global Scope)
   ================================================================================= */

function getBathValue() {
  /* ... function code ... */
}
function getBHKValue() {
  /* ... function code ... */
}
function onClickedEstimatePrice() {
  /* ... function code ... */
}

// (The full function bodies for these three are correct from the previous version)

function getBathValue() {
  var uiBathrooms = document.getElementsByName("uiBathrooms");
  for (var i in uiBathrooms) {
    if (uiBathrooms[i].checked) {
      return parseInt(i) + 1;
    }
  }
  return -1;
}

function getBHKValue() {
  var uiBHK = document.getElementsByName("uiBHK");
  for (var i in uiBHK) {
    if (uiBHK[i].checked) {
      return parseInt(i) + 1;
    }
  }
  return -1;
}

function onClickedEstimatePrice() {
  console.log("Estimate price button clicked");
  var sqft = document.getElementById("uiSqft");
  var bhk = getBHKValue();
  var bathrooms = getBathValue();
  var location = document.getElementById("uiLocations");
  var estPrice = document.getElementById("uiEstimatedPrice");
  var submitBtn = document.querySelector(".submit");

  submitBtn.textContent = "Estimating...";
  estPrice.innerHTML = "<h2></h2>";

  var url = "/predict_home_price";

  $.post(
    url,
    {
      total_sqft: parseFloat(sqft.value),
      bhk: bhk,
      bath: bathrooms,
      location: location.value,
    },
    function (data, status) {
      estPrice.innerHTML =
        "<h2>" + data.estimated_price.toString() + " Lakh</h2>";
      submitBtn.textContent = "Estimate Price";
    },
  );
}
