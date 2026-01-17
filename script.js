// ========================================
// Museum of Living Heritage - JavaScript
// Real heritage sites data from National Heritage Monuments Project
// ========================================

// Heritage Sites Database - Real Zambian Sites
const heritageSites = [
    // Museums
    {
        id: 1,
        title: "Livingstone Museum",
        category: "museum",
        location: "southern",
        description: "Zambia's oldest and largest museum, established in 1934. Houses extensive collections on archaeology, ethnography, history, and natural history, including artifacts from David Livingstone's expeditions.",
        image: "https://drive.google.com/uc?export=view&id=1KKb47AotJL6J_m6b9Tv60p7cjXsgiGy3",
        tag: "Museum"
    },
    {
        id: 2,
        title: "Railway Museum, Livingstone",
        category: "museum",
        location: "southern",
        description: "A fascinating museum showcasing Zambia's railway heritage with vintage locomotives, coaches, and memorabilia from the colonial era when railways transformed the region.",
        image: "https://drive.google.com/uc?export=view&id=1xAtJs2daPR5EuAWc9Bkm1Tz4hH-usuK2",
        tag: "Museum"
    },
    {
        id: 3,
        title: "Nayuma Museum",
        category: "museum",
        location: "western",
        description: "Located in Mongu, this museum preserves the cultural heritage of the Lozi people and the Barotseland kingdom, featuring traditional artifacts and royal regalia.",
        image: "images/nayuma-museum/main.jpg",
        tag: "Museum",
        link: "nayuma-museum.html"
    },

    // Waterfalls
    {
        id: 4,
        title: "Chishimba Falls",
        category: "waterfall",
        location: "northern",
        description: "A sacred series of three waterfalls on the Luombe River near Kasama. The falls hold spiritual significance for local communities and feature a natural power station built in colonial times.",
        image: "images/chishimba-falls/main.jpg",
        tag: "Waterfall",
        link: "chishimba-falls.html"
    },
    {
        id: 5,
        title: "Kundalila Falls",
        category: "waterfall",
        location: "central",
        description: "A stunning 75-meter waterfall near Serenje, whose name means 'Crying Dove' in Bemba. The falls cascade into a crystal-clear pool surrounded by pristine miombo woodland.",
        image: "images/kundalila-falls/main.jpg",
        tag: "Waterfall",
        link: "kundalila-falls.html"
    },

    // Historic Buildings
    {
        id: 6,
        title: "Shiwa Ng'andu House",
        category: "historic-building",
        location: "muchinga",
        description: "A grand English-style manor house built in the 1920s by Stewart Gore-Browne in the remote bush. Features a chapel, extensive grounds, and hot springs - a remarkable piece of colonial history.",
        image: "images/shiwa-ngandu/main.jpg",
        tag: "Historic Building",
        link: "shiwa-ngandu.html"
    },
    {
        id: 7,
        title: "Chilenje House 394",
        category: "historic-building",
        location: "lusaka",
        description: "Kenneth Kaunda's independence home where Zambia's founding father lived during the struggle for independence. Now a national monument preserving the history of Zambia's liberation movement.",
        image: "images/chilenje-house/main.jpg",
        tag: "Historic Building",
        link: "chilenje-house.html"
    },
    {
        id: 8,
        title: "Njanji Commuter Building",
        category: "historic-building",
        location: "lusaka",
        description: "A historic building in Lusaka that served as an important gathering place during the independence movement, witnessing key moments in Zambia's path to freedom.",
        image: "images/njanji-commuter-building/main.jpg",
        tag: "Historic Building",
        link: "njanji-commuter-building.html"
    },

    // Monuments
    {
        id: 9,
        title: "Chambeshi Monument",
        category: "monument",
        location: "northern",
        description: "Marks the spot where German General von Lettow-Vorbeck surrendered on November 14, 1918 - three days after the WWI Armistice. The last German forces in Africa laid down arms here.",
        image: "images/chambeshi/main.jpg",
        tag: "Monument",
        link: "chambeshi.html"
    },
    {
        id: 10,
        title: "Zambezi Source",
        category: "monument",
        location: "northwestern",
        description: "The sacred spring in Kalene Hills where the mighty Zambezi River begins its 2,574km journey to the Indian Ocean. A pilgrimage site marked by a national monument.",
        image: "images/zambezi-source/main.jpg",
        tag: "Monument",
        link: "zambezi-source.html"
    },
    {
        id: 11,
        title: "Old Drift Cemetery",
        category: "monument",
        location: "southern",
        description: "The haunting colonial-era cemetery near Victoria Falls, final resting place of early European settlers who succumbed to malaria and other diseases in the late 1800s.",
        image: "images/old-drift/main.jpg",
        tag: "Monument",
        link: "old-drift.html"
    },

    // Rock Art
    {
        id: 12,
        title: "Mwela Rocks",
        category: "rock-art",
        location: "northern",
        description: "One of the most significant rock art sites in Zambia, featuring over 1,000 ancient paintings including human figures, animals, and geometric designs spanning thousands of years.",
        image: "images/mwela-rocks/main.jpg",
        tag: "Rock Art",
        link: "mwela-rocks.html"
    },
    {
        id: 13,
        title: "Nsalu Cave",
        category: "rock-art",
        location: "central",
        description: "Ancient rock art site in Mkushi featuring geometric patterns and symbolic figures dating back thousands of years, offering insights into the spiritual beliefs of early inhabitants.",
        image: "https://drive.google.com/uc?export=view&id=1wAv5zt9zp8wn6JTvF8JyvsSRxoDWcgpP",
        tag: "Rock Art"
    },
    {
        id: 14,
        title: "Katolola Rock Art Site",
        category: "rock-art",
        location: "eastern",
        description: "A remarkable collection of prehistoric rock paintings in Eastern Province, showcasing the artistic traditions of ancient hunter-gatherer communities.",
        image: "images/katolola-rock-art/main.jpg",
        tag: "Rock Art",
        link: "katolola-rock-art.html"
    },

    // Archaeological Sites
    {
        id: 15,
        title: "Nachikufu Cave",
        category: "archaeological-site",
        location: "muchinga",
        description: "A national monument containing rock paintings and archaeological deposits spanning over 15,000 years of human occupation. Evidence of the 'Nachikufan' stone tool industry was first identified here.",
        image: "images/nachikufu-cave/main.jpg",
        tag: "Archaeological Site",
        link: "nachikufu-cave.html"
    },
    {
        id: 16,
        title: "Leopards Hill Cave",
        category: "archaeological-site",
        location: "lusaka",
        description: "An important archaeological site near Lusaka containing evidence of Stone Age occupation and rich deposits that help tell the story of human prehistory in Zambia.",
        image: "https://drive.google.com/uc?export=view&id=130kR1hyFZPUBOeM_cJT0lNcLuERmoefI",
        tag: "Archaeological Site"
    },
    {
        id: 17,
        title: "Kifubwa Rock Shelter",
        category: "archaeological-site",
        location: "northwestern",
        description: "A significant rock shelter site containing ancient rock engravings and archaeological evidence of early human habitation in northwestern Zambia.",
        image: "images/kifubwa/main.jpg",
        tag: "Archaeological Site",
        link: "kifubwa.html"
    },
    {
        id: 18,
        title: "Chirundu Fossil Forest",
        category: "archaeological-site",
        location: "southern",
        description: "A remarkable site containing petrified tree trunks millions of years old, providing evidence of ancient forests and climate conditions in the Zambezi Valley.",
        image: "images/chirundu-fossil-forest/main.jpg",
        tag: "Archaeological Site",
        link: "chirundu-fossil-forest.html"
    }
];

// Province display names
const provinceNames = {
    all: "All Provinces",
    lusaka: "Lusaka Province",
    copperbelt: "Copperbelt Province",
    southern: "Southern Province",
    northern: "Northern Province",
    eastern: "Eastern Province",
    western: "Western Province",
    northwestern: "North-Western Province",
    luapula: "Luapula Province",
    central: "Central Province",
    muchinga: "Muchinga Province"
};

// Category display names
const categoryNames = {
    all: "All Categories",
    museum: "Museum",
    waterfall: "Waterfall",
    "historic-building": "Historic Building",
    monument: "Monument",
    "rock-art": "Rock Art",
    "archaeological-site": "Archaeological Site"
};

// DOM Elements
const categorySelect = document.getElementById('category-select');
const locationSelect = document.getElementById('location-select');
const filterBtn = document.getElementById('filter-btn');
const resultsContainer = document.getElementById('results-container');

// Create a heritage site card HTML
function createSiteCard(site) {
    const linkHref = site.link || '#';
    return `
        <article class="history-card" data-category="${site.category}" data-location="${site.location}">
            <div class="history-card-image">
                <img src="${site.image}" alt="${site.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80'" />
                <span class="history-card-tag">${site.tag}</span>
            </div>
            <div class="history-card-content">
                <div class="history-card-meta">
                    <span>${categoryNames[site.category]}</span>
                    <span>•</span>
                    <span>${provinceNames[site.location] || site.location}</span>
                </div>
                <h3>${site.title}</h3>
                <p>${site.description}</p>
                <a href="${linkHref}" class="link-arrow">Learn more</a>
            </div>
        </article>
    `;
}

// Filter and display results
function filterAndDisplay() {
    const selectedCategory = categorySelect.value;
    const selectedLocation = locationSelect.value;

    // Filter sites
    let filteredSites = heritageSites.filter(site => {
        const categoryMatch = selectedCategory === 'all' || site.category === selectedCategory;
        const locationMatch = selectedLocation === 'all' || site.location === selectedLocation;
        return categoryMatch && locationMatch;
    });

    // Sort alphabetically by title
    filteredSites.sort((a, b) => a.title.localeCompare(b.title));

    // Display results
    if (filteredSites.length === 0) {
        resultsContainer.innerHTML = `
            <div class="no-results">
                <h3>No results found</h3>
                <p>Try adjusting your filters to explore more heritage sites.</p>
            </div>
        `;
    } else {
        resultsContainer.innerHTML = filteredSites.map(createSiteCard).join('');
    }

    // Add animation to cards
    const cards = resultsContainer.querySelectorAll('.history-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Event Listeners
filterBtn.addEventListener('click', filterAndDisplay);

// Also filter when dropdowns change (for better UX)
categorySelect.addEventListener('change', filterAndDisplay);
locationSelect.addEventListener('change', filterAndDisplay);

// Initialize with all results on page load
document.addEventListener('DOMContentLoaded', () => {
    filterAndDisplay();

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerOffset = 100;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// Mobile menu toggle (basic implementation)
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mainNav = document.querySelector('.main-nav');

if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
}

// Search functionality
const searchBtn = document.querySelector('.search-btn');
if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        const query = prompt('Search heritage sites:');
        if (query && query.trim()) {
            // Filter sites by search query
            const searchResults = heritageSites.filter(site =>
                site.title.toLowerCase().includes(query.toLowerCase()) ||
                site.description.toLowerCase().includes(query.toLowerCase())
            );

            if (searchResults.length > 0) {
                // Reset dropdowns and show search results
                categorySelect.value = 'all';
                locationSelect.value = 'all';
                resultsContainer.innerHTML = searchResults.map(createSiteCard).join('');

                // Scroll to results
                document.querySelector('#explore').scrollIntoView({ behavior: 'smooth' });
            } else {
                alert('No results found for "' + query + '"');
            }
        }
    });
}

// Newsletter form handling
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        if (email) {
            alert('Thank you for subscribing! You will receive updates at: ' + email);
            newsletterForm.reset();
        }
    });
}

console.log('Museum of Living Heritage loaded successfully!');
console.log(`Loaded ${heritageSites.length} real Zambian heritage sites.`);
