// ========================================
// Zambian Heritage - JavaScript
// Historical data and filtering functionality
// ========================================

// Historical Events Database
const historicalEvents = [
    // Prehistoric Era
    {
        id: 1,
        title: "Kabwe Skull Discovery",
        era: "prehistoric",
        location: "central",
        date: "3+ Million Years Ago",
        description: "One of the most significant paleoanthropological finds in Africa. The Broken Hill skull (Homo rhodesiensis) represents early human ancestors who inhabited the region.",
        image: "https://images.unsplash.com/photo-1584799235813-aaf50775698c?w=600&q=80",
        tag: "Archaeological"
    },
    {
        id: 2,
        title: "Kalambo Falls Stone Tools",
        era: "stone-age",
        location: "northern",
        date: "300,000 Years Ago",
        description: "Evidence of early human tool-making discovered at Kalambo Falls, including some of the earliest wooden artifacts preserved due to waterlogged conditions.",
        image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80",
        tag: "Archaeological"
    },
    {
        id: 3,
        title: "Rock Art of Nsalu Cave",
        era: "stone-age",
        location: "central",
        date: "20,000 - 2,000 BCE",
        description: "Ancient rock paintings at Nsalu Cave depicting geometric patterns and figures, offering insights into the spiritual beliefs of early inhabitants.",
        image: "https://images.unsplash.com/photo-1533669955142-6a73332af4db?w=600&q=80",
        tag: "Cultural"
    },

    // Iron Age
    {
        id: 4,
        title: "Bantu Migration Arrives",
        era: "iron-age",
        location: "all",
        date: "300 - 500 CE",
        description: "Bantu-speaking peoples migrate into Zambia, bringing iron-working technology, agriculture, and new social structures that would shape the region's future.",
        image: "https://images.unsplash.com/photo-1590845947670-c009801ffa74?w=600&q=80",
        tag: "Migration"
    },
    {
        id: 5,
        title: "Ingombe Ilede Trading Settlement",
        era: "iron-age",
        location: "southern",
        date: "700 - 1500 CE",
        description: "A major trading center near the Zambezi-Kafue confluence. Archaeological finds include gold, copper, and glass beads, indicating extensive trade networks.",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80",
        tag: "Trade"
    },
    {
        id: 6,
        title: "Iron Smelting Technology",
        era: "iron-age",
        location: "copperbelt",
        date: "800 - 1200 CE",
        description: "Advanced iron and copper smelting techniques develop across the region, enabling the creation of tools, weapons, and trade goods.",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
        tag: "Technology"
    },

    // Kingdom Era
    {
        id: 7,
        title: "Rise of the Lozi Kingdom",
        era: "kingdoms",
        location: "western",
        date: "17th Century",
        description: "The Lozi Kingdom (Barotseland) emerges as a powerful state in the Zambezi floodplains, developing sophisticated flood-management and governance systems.",
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80",
        tag: "Kingdom"
    },
    {
        id: 8,
        title: "Bemba Kingdom Establishment",
        era: "kingdoms",
        location: "northern",
        date: "Late 17th Century",
        description: "The Bemba people establish a powerful chieftaincy system under the Chitimukulu, building a society based on agriculture and tribute.",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&q=80",
        tag: "Kingdom"
    },
    {
        id: 9,
        title: "Lunda Empire Influence",
        era: "kingdoms",
        location: "northwestern",
        date: "18th Century",
        description: "The Lunda Empire extends its influence into northwestern Zambia, establishing the Kazembe Kingdom and long-distance trade routes.",
        image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80",
        tag: "Kingdom"
    },
    {
        id: 10,
        title: "Kuomboka Ceremony Origins",
        era: "kingdoms",
        location: "western",
        date: "18th Century",
        description: "The annual Kuomboka ceremony, marking the Lozi king's movement from the floodplain to higher ground, becomes an important cultural tradition.",
        image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600&q=80",
        tag: "Cultural"
    },

    // Colonial Period
    {
        id: 11,
        title: "David Livingstone's Expeditions",
        era: "colonial",
        location: "southern",
        date: "1851 - 1873",
        description: "Scottish explorer David Livingstone travels extensively through Zambia, reaching Victoria Falls in 1855 and mapping the Zambezi River.",
        image: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=600&q=80",
        tag: "Exploration"
    },
    {
        id: 12,
        title: "British South Africa Company Rule",
        era: "colonial",
        location: "all",
        date: "1889 - 1924",
        description: "Cecil Rhodes' BSAC gains control of the region through treaties with local chiefs, beginning the colonial administration of Northern Rhodesia.",
        image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&q=80",
        tag: "Colonial"
    },
    {
        id: 13,
        title: "Copper Mining Begins",
        era: "colonial",
        location: "copperbelt",
        date: "1920s",
        description: "Large-scale copper mining transforms the Copperbelt region, attracting workers from across Central Africa and creating new urban centers.",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80",
        tag: "Industry"
    },
    {
        id: 14,
        title: "Federation of Rhodesia and Nyasaland",
        era: "colonial",
        location: "all",
        date: "1953 - 1963",
        description: "Northern Rhodesia joins the controversial Central African Federation, sparking nationalist movements and demands for independence.",
        image: "https://images.unsplash.com/photo-1569587112025-0d460e81a126?w=600&q=80",
        tag: "Political"
    },
    {
        id: 15,
        title: "Cha Cha Cha Campaign",
        era: "colonial",
        location: "all",
        date: "1961",
        description: "UNIP launches the civil disobedience campaign against colonial rule, accelerating the path to independence under Kenneth Kaunda's leadership.",
        image: "https://images.unsplash.com/photo-1590845947670-c009801ffa74?w=600&q=80",
        tag: "Independence"
    },

    // Independence Era
    {
        id: 16,
        title: "Independence Day",
        era: "independence",
        location: "lusaka",
        date: "October 24, 1964",
        description: "Northern Rhodesia becomes the Republic of Zambia with Kenneth Kaunda as its first President, marking the end of colonial rule.",
        image: "https://images.unsplash.com/photo-1590845947698-8924d7409b56?w=600&q=80",
        tag: "Independence"
    },
    {
        id: 17,
        title: "Nationalization of Copper Mines",
        era: "independence",
        location: "copperbelt",
        date: "1969",
        description: "The government takes majority control of the copper mining industry, forming ZCCM and using revenues to fund national development.",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
        tag: "Economic"
    },
    {
        id: 18,
        title: "One-Party State Declared",
        era: "independence",
        location: "all",
        date: "1972",
        description: "Zambia becomes a one-party state under UNIP, with President Kaunda's philosophy of Zambian Humanism guiding national policy.",
        image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&q=80",
        tag: "Political"
    },
    {
        id: 19,
        title: "Support for Liberation Movements",
        era: "independence",
        location: "lusaka",
        date: "1964 - 1990",
        description: "Zambia hosts freedom fighters from Rhodesia, South Africa, Namibia, and Mozambique, despite economic and military costs.",
        image: "https://images.unsplash.com/photo-1569587112025-0d460e81a126?w=600&q=80",
        tag: "Political"
    },
    {
        id: 20,
        title: "Kariba Dam Completion",
        era: "independence",
        location: "southern",
        date: "1959 - 1977",
        description: "The massive Kariba Dam project, shared with Zimbabwe, provides hydroelectric power but displaces the Tonga people from their ancestral lands.",
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80",
        tag: "Infrastructure"
    },

    // Modern Era
    {
        id: 21,
        title: "Return to Multi-Party Democracy",
        era: "modern",
        location: "all",
        date: "1991",
        description: "Frederick Chiluba and the MMD win elections, ending 27 years of one-party rule and beginning economic liberalization reforms.",
        image: "https://images.unsplash.com/photo-1590845947670-c009801ffa74?w=600&q=80",
        tag: "Political"
    },
    {
        id: 22,
        title: "Economic Liberalization",
        era: "modern",
        location: "all",
        date: "1991 - 2000",
        description: "Privatization of state enterprises and economic reforms transform Zambia's economy, with mixed results for workers and communities.",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80",
        tag: "Economic"
    },
    {
        id: 23,
        title: "Victoria Falls Bridge Centenary",
        era: "modern",
        location: "southern",
        date: "2005",
        description: "Celebration of 100 years of the historic bridge spanning the Zambezi, a symbol of the region's colonial and modern heritage.",
        image: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=600&q=80",
        tag: "Heritage"
    },
    {
        id: 24,
        title: "UNESCO World Heritage Sites",
        era: "modern",
        location: "southern",
        date: "1989 - Present",
        description: "Victoria Falls/Mosi-oa-Tunya becomes a UNESCO World Heritage Site, recognizing its outstanding natural and cultural value.",
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80",
        tag: "Heritage"
    },
    {
        id: 25,
        title: "Peaceful Transfer of Power",
        era: "modern",
        location: "lusaka",
        date: "2021",
        description: "Hakainde Hichilema becomes President after peaceful elections, continuing Zambia's tradition of democratic transitions.",
        image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&q=80",
        tag: "Political"
    },
    {
        id: 26,
        title: "Cultural Heritage Preservation",
        era: "modern",
        location: "all",
        date: "Present Day",
        description: "Ongoing efforts to document, preserve, and celebrate Zambia's 73 ethnic groups and their traditions, languages, and ceremonies.",
        image: "https://images.unsplash.com/photo-1590845947698-8924d7409b56?w=600&q=80",
        tag: "Cultural"
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

// Era display names
const eraNames = {
    all: "All Periods",
    prehistoric: "Prehistoric Era",
    "stone-age": "Stone Age",
    "iron-age": "Iron Age",
    kingdoms: "Kingdom Era",
    colonial: "Colonial Period",
    independence: "Independence Era",
    modern: "Modern Zambia"
};

// DOM Elements
const eraSelect = document.getElementById('era-select');
const locationSelect = document.getElementById('location-select');
const filterBtn = document.getElementById('filter-btn');
const resultsContainer = document.getElementById('results-container');

// Create a history card HTML
function createHistoryCard(event) {
    return `
        <article class="history-card" data-era="${event.era}" data-location="${event.location}">
            <div class="history-card-image">
                <img src="${event.image}" alt="${event.title}" loading="lazy" />
                <span class="history-card-tag">${event.tag}</span>
            </div>
            <div class="history-card-content">
                <div class="history-card-meta">
                    <span>${event.date}</span>
                    <span>•</span>
                    <span>${provinceNames[event.location] || event.location}</span>
                </div>
                <h3>${event.title}</h3>
                <p>${event.description}</p>
                <a href="#" class="link-arrow">Read more</a>
            </div>
        </article>
    `;
}

// Filter and display results
function filterAndDisplay() {
    const selectedEra = eraSelect.value;
    const selectedLocation = locationSelect.value;

    // Filter events
    let filteredEvents = historicalEvents.filter(event => {
        const eraMatch = selectedEra === 'all' || event.era === selectedEra;
        const locationMatch = selectedLocation === 'all' ||
                             event.location === selectedLocation ||
                             event.location === 'all';
        return eraMatch && locationMatch;
    });

    // Sort by era (oldest first)
    const eraOrder = ['prehistoric', 'stone-age', 'iron-age', 'kingdoms', 'colonial', 'independence', 'modern'];
    filteredEvents.sort((a, b) => eraOrder.indexOf(a.era) - eraOrder.indexOf(b.era));

    // Display results
    if (filteredEvents.length === 0) {
        resultsContainer.innerHTML = `
            <div class="no-results">
                <h3>No results found</h3>
                <p>Try adjusting your filters to explore more of Zambian history.</p>
            </div>
        `;
    } else {
        resultsContainer.innerHTML = filteredEvents.map(createHistoryCard).join('');
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
eraSelect.addEventListener('change', filterAndDisplay);
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

// Search functionality placeholder
const searchBtn = document.querySelector('.search-btn');
if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        const query = prompt('Search Zambian history:');
        if (query && query.trim()) {
            // Filter events by search query
            const searchResults = historicalEvents.filter(event =>
                event.title.toLowerCase().includes(query.toLowerCase()) ||
                event.description.toLowerCase().includes(query.toLowerCase())
            );

            if (searchResults.length > 0) {
                // Reset dropdowns and show search results
                eraSelect.value = 'all';
                locationSelect.value = 'all';
                resultsContainer.innerHTML = searchResults.map(createHistoryCard).join('');

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

console.log('Zambian Heritage website loaded successfully!');
console.log(`Loaded ${historicalEvents.length} historical events.`);
