const VISITED_KEY = "hidden-history-visited";

function getVisited() {
  return JSON.parse(localStorage.getItem(VISITED_KEY)) || {};
}

function saveVisited(data) {
  localStorage.setItem(VISITED_KEY, JSON.stringify(data));
}

let notified = new Set();

// Detect Capacitor native runtime
const isNative = typeof Capacitor !== "undefined" && Capacitor.isNativePlatform();

const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

const visitedIcon = L.icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

let notificationsEnabled = false;

/* MAP SETUP */
const map = L.map("map");

L.tileLayer(
  "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
  {
    attribution: "&copy; OpenStreetMap &copy; CARTO",
    subdomains: "abcd",
    maxZoom: 19
  }
).addTo(map);

/* MARKERS */
const markers = {};
const bounds = [];

locations.forEach(loc => {
  if (typeof loc.lat !== "number" || typeof loc.lng !== "number") return;

  const visited = getVisited()[loc.id];

  const marker = L.marker([loc.lat, loc.lng], { icon: visited ? visitedIcon : defaultIcon })
    .addTo(map)
    .bindTooltip(loc.title, { permanent: true, direction: "bottom", offset: [0, 10], className: "pin-label" })
    .on("click", () => openInfo(loc));

  markers[loc.id] = marker;
  bounds.push([loc.lat, loc.lng]);
});

if (bounds.length > 0) {
  map.fitBounds(bounds, { padding: [40, 40] });
} else {
  map.setView([51.505, -0.09], 13);
}

/* OPEN LOCATION FROM NOTIFICATION */
function openLocationById(id) {
  if (!id) return;

  const loc = locations.find(l => l.id === id);
  if (!loc) return;

  // iOS + PWA need a short delay so the map can reflow
  setTimeout(() => {
    map.invalidateSize(true);
    map.setView([loc.lat, loc.lng], 17, { animate: true });
    openInfo(loc);
  }, 300);
}


/* INFO PANEL */
function openInfo(loc) {
  document.getElementById("info-title").textContent = loc.title;
  document.getElementById("info-description").textContent = loc.description;
  const infoImage = document.getElementById("info-image");
  if (loc.image) {
    infoImage.src = loc.image;
    infoImage.style.display = "block";
  } else {
    infoImage.src = "";
    infoImage.style.display = "none";
  }

  const seeMoreBtn = document.getElementById("see-more-btn");
  if (loc.longDescription) {
    seeMoreBtn.classList.remove("hidden");
    seeMoreBtn.onclick = () => openExhibit(loc);
  } else {
    seeMoreBtn.classList.add("hidden");
  }

  document.getElementById("info-panel").classList.remove("hidden");
}

function openExhibit(loc) {
  document.getElementById("exhibit-title").textContent = loc.title;
  document.getElementById("exhibit-description").textContent = loc.longDescription;

  const gallery = document.getElementById("exhibit-gallery");
  gallery.innerHTML = "";

  if (loc.images && loc.images.length > 0) {
    loc.images.forEach(item => {
      const figure = document.createElement("figure");
      const img = document.createElement("img");
      img.src = item.src;
      figure.appendChild(img);
      if (item.caption) {
        const caption = document.createElement("figcaption");
        caption.textContent = item.caption;
        figure.appendChild(caption);
      }
      gallery.appendChild(figure);
    });
  }

  document.getElementById("info-panel").classList.add("hidden");
  document.querySelector(".app-header").classList.add("hidden");
  document.getElementById("map").classList.add("hidden");
  document.getElementById("exhibit-screen").classList.remove("hidden");
}

function closeExhibit() {
  document.getElementById("exhibit-screen").classList.add("hidden");
  document.querySelector(".app-header").classList.remove("hidden");
  document.getElementById("map").classList.remove("hidden");
  document.getElementById("info-panel").classList.remove("hidden");
}

function closeInfo() {
  document.getElementById("info-panel").classList.add("hidden");
}

/* SEARCH */
document.getElementById("search").addEventListener("input", () => {
  applyFilters();
});


/* NOTIFICATIONS */

// Produces a stable 32-bit integer ID from a string (required by LocalNotifications)
function stableNotifId(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash) % 2147483647;
}

async function notify(loc) {
  if (!notificationsEnabled) return;
  if (notified.has(loc.id)) return;
  notified.add(loc.id);

  if (isNative) {
    const { LocalNotifications } = Capacitor.Plugins;
    await LocalNotifications.schedule({
      notifications: [{
        title: "Hidden History Nearby",
        body: loc.title,
        id: stableNotifId(loc.id),
        extra: { locationId: loc.id }
      }]
    });
  } else {
    if (Notification.permission !== "granted") return;
    const reg = await navigator.serviceWorker.ready;
    reg.showNotification("Hidden History Nearby", { body: loc.title, data: loc.id });
  }
}

/* LOCATION */
let userMarker;
let watchId = null;
let bgWatcherId = null;

function handlePosition(lat, lng) {
  const user = [lat, lng];

  if (!userMarker) {
    userMarker = L.circleMarker(user, {
      radius: 6,
      color: "#007aff",
      fillColor: "#007aff",
      fillOpacity: 1
    }).addTo(map);
  } else {
    userMarker.setLatLng(user);
  }

  locations.forEach(loc => {
    const dist = map.distance(user, [loc.lat, loc.lng]);
    if (dist < 50) {
      notify(loc);
      markVisited(loc);
    }
  });
}

async function startLocationTracking() {
  if (isNative) {
    const { BackgroundGeolocation } = Capacitor.Plugins;
    if (BackgroundGeolocation) {
      bgWatcherId = await BackgroundGeolocation.addWatcher(
        {
          backgroundMessage: "Looking for nearby historical sites\u2026",
          backgroundTitle: "Hidden History",
          requestPermissions: true,
          stale: false,
          distanceFilter: 10
        },
        (position, error) => {
          if (error) { console.error("BG geolocation error", error); return; }
          handlePosition(position.latitude, position.longitude);
        }
      );
      return;
    }
    // Fall through to web geolocation if plugin unavailable
  }

  if (!("geolocation" in navigator)) return;

  watchId = navigator.geolocation.watchPosition(
    pos => handlePosition(pos.coords.latitude, pos.coords.longitude),
    err => {
      console.error("Geolocation error", err);
      if (err.code === err.PERMISSION_DENIED) {
        alert("Location access was denied. To use this app, enable location access in your device settings.");
      }
    },
    { enableHighAccuracy: true, maximumAge: 10000, timeout: 10000 }
  );
}

/* NOTIFICATION LISTENERS + SERVICE WORKER */
if (isNative) {
  // In native context, listen for taps on local notifications
  const { LocalNotifications } = Capacitor.Plugins;
  if (LocalNotifications) {
    LocalNotifications.addListener("localNotificationActionPerformed", event => {
      const locationId = event.notification.extra?.locationId;
      if (locationId) openLocationById(locationId);
    });
  }
} else if ("serviceWorker" in navigator) {
  // In PWA/browser context, use service worker
  navigator.serviceWorker.register("./service-worker.js");

  navigator.serviceWorker.addEventListener("message", event => {
    if (event.data?.action === "open-location") {
      openLocationById(event.data.id);
    }
  });
}


/* VISITED FUNCTIONS */
function markVisited(loc) {
  const visited = getVisited();
  if (visited[loc.id]) return;
  visited[loc.id] = new Date().toISOString();
  saveVisited(visited);

  const marker = markers[loc.id];
  if (marker) marker.setIcon(visitedIcon);
}

function openVisited() {
  const list = document.getElementById("visited-list");
  list.innerHTML = "";
  const visited = getVisited();
  const entries = Object.entries(visited).sort((a, b) => new Date(b[1]) - new Date(a[1]));

  if (entries.length === 0) list.innerHTML = "<li>No places visited yet.</li>";
  else {
    entries.forEach(([id, dateString]) => {
      const loc = locations.find(l => l.id === id);
      if (!loc) return;
      const li = document.createElement("li");
      const date = new Date(dateString);
      const formatted = date.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
      li.innerHTML = `<strong>${loc.title}</strong><br><small>Visited ${formatted}</small>`;
      li.addEventListener("click", () => { map.setView([loc.lat, loc.lng], 17); openInfo(loc); closeVisited(); });
      list.appendChild(li);
    });
  }

  document.getElementById("visited-panel").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeVisited() {
  document.getElementById("visited-panel").classList.add("hidden");
  document.body.style.overflow = "";
}

/* FILTER */
const activeFilters = new Set(["duvenecks", "silicon_valley", "pre_silicon_valley", "ohlone"]);

function applyFilters() {
  const q = document.getElementById("search").value.toLowerCase();
  locations.forEach(loc => {
    const marker = markers[loc.id];
    if (!marker) return;
    const cats = Array.isArray(loc.category) ? loc.category : [loc.category];
    const categoryMatch = !loc.category || cats.some(c => activeFilters.has(c));
    const searchMatch = loc.title.toLowerCase().includes(q);
    if (categoryMatch && searchMatch) marker.addTo(map);
    else map.removeLayer(marker);
  });
}

function openFilter() {
  document.getElementById("filter-sidebar").classList.remove("hidden");
}

function closeFilter() {
  document.getElementById("filter-sidebar").classList.add("hidden");
}

/* EVENT LISTENERS */
window.addEventListener("DOMContentLoaded", () => {
  if (location.hash) {
    const id = location.hash.replace("#", "");
    const loc = locations.find(l => l.id === id);
    if (loc) setTimeout(() => openLocationById(id), 500);
  }

  document.getElementById("start-app")?.addEventListener("click", async () => {
    // Request notification permission ‚Äî wrapped in try/catch because iOS PWAs
    // can throw from Notification.requestPermission(), which would otherwise
    // silently prevent geolocation from ever starting
    try {
      if (isNative) {
        const { LocalNotifications } = Capacitor.Plugins;
        if (LocalNotifications) {
          const perm = await LocalNotifications.requestPermissions();
          if (perm.display === "granted") notificationsEnabled = true;
        }
      } else if ("Notification" in window) {
        const permission = await Notification.requestPermission();
        if (permission === "granted") notificationsEnabled = true;
      }
    } catch (e) {
      console.warn("Notification permission unavailable:", e);
    }

    document.getElementById("splash").style.display = "none";
    map.invalidateSize();
    startLocationTracking();
  });

  document.getElementById("open-visited")?.addEventListener("click", openVisited);
  document.getElementById("close-visited")?.addEventListener("click", closeVisited);
  document.getElementById("close-info")?.addEventListener("click", closeInfo);
  document.getElementById("close-exhibit")?.addEventListener("click", closeExhibit);
  document.getElementById("open-filter")?.addEventListener("click", openFilter);
  document.getElementById("close-filter")?.addEventListener("click", closeFilter);
  document.querySelectorAll("#filter-list input[type=checkbox]").forEach(cb => {
    cb.addEventListener("change", () => {
      if (cb.checked) activeFilters.add(cb.dataset.category);
      else activeFilters.delete(cb.dataset.category);
      applyFilters();
    });
  });
});
