$(document).ready(function () {
  console.log("Document is ready. Initializing application...");

  /* =================================================================================
       I. INITIALIZE ML MODEL DATA (Load Locations)
       ================================================================================= */

  function onPageLoad() {
    console.log("Fetching locations from server...");

    // --- THE DEFINITIVE FIX ---
    // We are switching to the more robust $.ajax method to explicitly
    // tell the browser to expect JSON data. This prevents silent parsing errors.
    $.ajax({
      url: "/get_location_names",
      type: "GET",
      dataType: "json", // This is the critical line
      success: function (data) {
        console.log("Successfully parsed location data.");
        if (data && Array.isArray(data.locations)) {
          var locations = data.locations;
          var uiLocations = $("#uiLocations");

          uiLocations.empty();
          uiLocations.append(new Option("Choose a Location", "", true, true));
          uiLocations.find('option[value=""]').prop("disabled", true);

          locations.forEach(function (location) {
            uiLocations.append(new Option(location));
          });
          console.log(locations.length + " locations have been loaded.");
        } else {
          console.error(
            "Data received, but it is not in the expected format.",
            data,
          );
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.error(
          "Failed to fetch locations. Status: " +
            textStatus +
            ", Error: " +
            errorThrown,
        );
      },
    });
  }

  onPageLoad();

  /* =================================================================================
       II. INITIALIZE UI ANIMATIONS AND INTERACTIONS
       ================================================================================= */

  console.log("Initializing animations...");
  gsap.registerPlugin(ScrollTrigger);

  gsap.set("section:not(.hero)", { opacity: 0, y: 50 });
  const pageLoadTl = gsap.timeline({ defaults: { ease: "power3.out" } });
  pageLoadTl.from("header", { y: -50, opacity: 0, duration: 1, delay: 0.2 });

  let heroTl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  heroTl.fromTo(
    ".hero-title-anim span:first-child",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
  );
  heroTl.to(
    ".hero-title-anim span:first-child",
    { opacity: 0, y: -30, duration: 1, ease: "power3.in" },
    "+=2",
  );
  heroTl.fromTo(
    ".hero-title-anim span:last-child",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
  );
  heroTl.to(
    ".hero-title-anim span:last-child",
    { opacity: 0, y: -30, duration: 1, ease: "power3.in" },
    "+=2",
  );

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
