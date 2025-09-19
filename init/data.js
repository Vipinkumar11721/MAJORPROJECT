const titles = [
  "Cozy Beachfront Cottage", "Modern Loft in Downtown", "Mountain Retreat", "Historic Villa in Tuscany",
  "Secluded Treehouse Getaway", "Beachfront Paradise", "Rustic Cabin by the Lake", "Luxury Penthouse with City Views",
  "Ski-In/Ski-Out Chalet", "Safari Lodge in the Serengeti"
  // ...add more titles as needed
];

const descriptions = [
  "Escape to this charming place for a relaxing getaway.",
  "Enjoy stunning views and easy access to attractions.",
  "Perfect for urban explorers and nature lovers alike.",
  "Unplug and unwind in this peaceful retreat.",
  "Experience the charm of the local area."
  // ...add more descriptions as needed
];

const images = [
  "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60"
  // ...add more image URLs as needed
];

const locations = [
  "Malibu", "New York City", "Aspen", "Florence", "Portland", "Cancun", "Lake Tahoe", "Los Angeles", "Verbier", "Serengeti National Park"
  // ...add more locations as needed
];

const countries = [
  "United States", "Italy", "Mexico", "Switzerland", "Tanzania", "Netherlands", "Fiji", "United Kingdom", "Indonesia", "Canada"
  // ...add more countries as needed
];

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const sampleListings = [];
for (let i = 1; i <= 200; i++) {
  sampleListings.push({
    title: getRandom(titles),
    description: getRandom(descriptions),
    image: getRandom(images),
    price: Math.floor(Math.random() * 9000) + 500, // price between 500 and 9500
    location: getRandom(locations),
    country: getRandom(countries),
  });
}

module.exports = { data: sampleListings };

