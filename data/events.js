const eventsData = {
    "events": [
      {
        "name": "Summer Music Festival",
        "dates": {
          "start": "2025-06-12",
          "end": "2025-06-14"
        },
        "owner": "Harmony Productions",
        "location": {
          "latitude": 34.0522,
          "longitude": -118.2437
        },
        "description": "Annual three-day music festival featuring top artists across multiple genres with food vendors and art installations.",
        "image": "/images/event.png",
        "tickets": [
          {
            "type": "General Admission",
            "price": 150.0,
            "available": 5000
          },
          {
            "type": "VIP Pass",
            "price": 350.0,
            "available": 1000
          },
          {
            "type": "Single Day Pass",
            "price": 75.0,
            "available": 2000
          }
        ],
        "id": 1
      },
      {
        "name": "Tech Innovation Conference",
        "dates": {
          "start": "2025-07-15",
          "end": "2025-07-17"
        },
        "owner": "Future Tech Inc.",
        "location": {
          "latitude": 37.7749,
          "longitude": -122.4194
        },
        "description": "Leading conference for tech professionals featuring keynotes from industry leaders, workshops, and networking opportunities.",
        "image": "/images/event.png",
        "tickets": [
          {
            "type": "Standard Pass",
            "price": 599.0,
            "available": 2000
          },
          {
            "type": "Premium Pass",
            "price": 999.0,
            "available": 500
          },
          {
            "type": "Virtual Attendance",
            "price": 199.0,
            "available": 5000
          }
        ],
        "id": 2
      },
      {
        "name": "International Food Festival",
        "dates": {
          "start": "2025-08-01",
          "end": "2025-08-03"
        },
        "owner": "Global Tastes Organization",
        "location": {
          "latitude": 40.7128,
          "longitude": -74.006
        },
        "description": "Celebration of global cuisine with food stalls, cooking demonstrations, and cultural performances from over 30 countries.",
        "image": "/images/event.png",
        "tickets": [
          {
            "type": "Weekend Pass",
            "price": 45.0,
            "available": 10000
          },
          {
            "type": "Single Day",
            "price": 20.0,
            "available": 5000
          },
          {
            "type": "VIP Tasting Pass",
            "price": 85.0,
            "available": 1000
          }
        ],
        "id": 3
      },
      {
        "name": "Marathon for Charity",
        "dates": {
          "start": "2025-09-05",
          "end": "2025-09-05"
        },
        "owner": "Health First Foundation",
        "location": {
          "latitude": 41.8781,
          "longitude": -87.6298
        },
        "description": "Annual charity marathon raising funds for children's hospitals with 5K, 10K, and full marathon options.",
        "image": "/images/event.png",
        "tickets": [
          {
            "type": "5K Registration",
            "price": 35.0,
            "available": 3000
          },
          {
            "type": "10K Registration",
            "price": 45.0,
            "available": 2000
          },
          {
            "type": "Full Marathon",
            "price": 65.0,
            "available": 1000
          }
        ],
        "id": 4
      },
      {
        "name": "Comic & Pop Culture Expo",
        "dates": {
          "start": "2025-10-10",
          "end": "2025-10-12"
        },
        "owner": "Fandom Events LLC",
        "location": {
          "latitude": 32.7157,
          "longitude": -117.1611
        },
        "description": "Celebration of comics, movies, TV shows and games with celebrity guests, panels, cosplay contests, and exclusive merchandise.",
        "image": "/images/event.png",
        "tickets": [
          {
            "type": "3-Day Pass",
            "price": 90.0,
            "available": 15000
          },
          {
            "type": "Single Day",
            "price": 40.0,
            "available": 10000
          },
          {
            "type": "Premium Experience",
            "price": 250.0,
            "available": 500
          }
        ],
        "id": 5
      },
      {
        "name": "Business Leadership Summit",
        "dates": {
          "start": "2025-05-20",
          "end": "2025-05-21"
        },
        "owner": "Executive Growth Network",
        "location": {
          "latitude": 51.5074,
          "longitude": -0.1278
        },
        "description": "Exclusive summit for business leaders featuring strategy sessions, keynotes from Fortune 500 CEOs, and executive networking.",
        "image": "/images/event.png",
        "tickets": [
          {
            "type": "Executive Pass",
            "price": 1299.0,
            "available": 500
          },
          {
            "type": "Corporate Team (5 people)",
            "price": 5000.0,
            "available": 50
          },
          {
            "type": "Virtual Attendance",
            "price": 499.0,
            "available": 1000
          }
        ],
        "id": 6
      },
      {
        "name": "Wellness & Yoga Retreat",
        "dates": {
          "start": "2025-06-25",
          "end": "2025-06-30"
        },
        "owner": "Mindful Living Co.",
        "location": {
          "latitude": 20.7984,
          "longitude": -156.3319
        },
        "description": "Five-day wellness retreat featuring yoga sessions, meditation workshops, healthy cuisine, and spa treatments in a tropical paradise.",
        "image": "/images/event.png",
        "tickets": [
          {
            "type": "Full Retreat Package",
            "price": 1899.0,
            "available": 100
          },
          {
            "type": "Retreat + Private Villa",
            "price": 2499.0,
            "available": 20
          },
          {
            "type": "Day Pass",
            "price": 199.0,
            "available": 50
          }
        ],
        "id": 7
      },
      {
        "name": "Indie Film Festival",
        "dates": {
          "start": "2025-07-08",
          "end": "2025-07-14"
        },
        "owner": "Independent Cinema Alliance",
        "location": {
          "latitude": 43.6532,
          "longitude": -79.3832
        },
        "description": "Showcase of independent films from around the world with director Q&As, workshops, and premiere screenings.",
        "image": "/images/event.png",
        "tickets": [
          {
            "type": "Festival Pass",
            "price": 175.0,
            "available": 2000
          },
          {
            "type": "Single Screening",
            "price": 15.0,
            "available": 5000
          },
          {
            "type": "Industry Pass",
            "price": 300.0,
            "available": 500
          }
        ],
        "id": 8
      },
      {
        "name": "Classic Car Show",
        "dates": {
          "start": "2025-08-15",
          "end": "2025-08-16"
        },
        "owner": "Vintage Automobile Club",
        "location": {
          "latitude": 33.4484,
          "longitude": -112.074
        },
        "description": "Exhibition of rare and restored classic cars from 1920-1970 with awards, auctions, and memorabilia.",
        "image": "/images/event.png",
        "tickets": [
          {
            "type": "General Admission",
            "price": 25.0,
            "available": 5000
          },
          {
            "type": "VIP Preview (includes dinner)",
            "price": 85.0,
            "available": 300
          },
          {
            "type": "Family Pass (4 people)",
            "price": 70.0,
            "available": 1000
          }
        ],
        "id": 9
      },
      {
        "name": "Wine & Culinary Festival",
        "dates": {
          "start": "2025-09-18",
          "end": "2025-09-20"
        },
        "owner": "Gourmet Events International",
        "location": {
          "latitude": 38.2919,
          "longitude": -122.458
        },
        "description": "Celebration of fine wines and gourmet cuisine featuring tastings from top wineries and chefs, with masterclasses and pairings.",
        "image": "/images/event.png",
        "tickets": [
          {
            "type": "Weekend Tasting Pass",
            "price": 120.0,
            "available": 3000
          },
          {
            "type": "Single Day Pass",
            "price": 65.0,
            "available": 2000
          },
          {
            "type": "Master Class Bundle",
            "price": 200.0,
            "available": 500
          }
        ],
        "id": 10
      },
      {
        "name": "Science & Innovation Expo",
        "dates": {
          "start": "2025-05-05",
          "end": "2025-05-07"
        },
        "owner": "Future Horizons Foundation",
        "location": {
          "latitude": 47.6062,
          "longitude": -122.3321
        },
        "description": "Interactive showcase of cutting-edge science and technology with demonstrations, hands-on exhibits, and talks from leading researchers.",
        "image": "/images/event.png",
        "tickets": [
          {
            "type": "Adult Pass",
            "price": 30.0,
            "available": 5000
          },
          {
            "type": "Student/Senior Pass",
            "price": 20.0,
            "available": 3000
          },
          {
            "type": "Family Pack (4 tickets)",
            "price": 85.0,
            "available": 1000
          }
        ],
        "id": 11
      },
      {
        "name": "Home & Garden Show",
        "dates": {
          "start": "2025-04-25",
          "end": "2025-04-27"
        },
        "owner": "Modern Living Exhibitions",
        "location": {
          "latitude": 39.9526,
          "longitude": -75.1652
        },
        "description": "Exhibition featuring the latest in home decor, landscaping, and renovation with expert talks, demonstrations, and product showcases.",
        "image": "/images/event.png",
        "tickets": [
          {
            "type": "Weekend Pass",
            "price": 18.0,
            "available": 10000
          },
          {
            "type": "Single Day",
            "price": 12.0,
            "available": 5000
          },
          {
            "type": "VIP Preview Night",
            "price": 35.0,
            "available": 1000
          }
        ],
        "id": 12
      },
      {
        "name": "Craft Beer Festival",
        "dates": {
          "start": "2025-06-05",
          "end": "2025-06-07"
        },
        "owner": "Brewers Association",
        "location": {
          "latitude": 45.5231,
          "longitude": -122.6765
        },
        "description": "Celebration of craft breweries featuring tastings from over 100 producers, food pairings, live music, and brewing workshops.",
        "image": "/images/event.png",
        "tickets": [
          {
            "type": "Tasting Pass",
            "price": 55.0,
            "available": 5000
          },
          {
            "type": "VIP Experience",
            "price": 95.0,
            "available": 500
          },
          {
            "type": "Designated Driver",
            "price": 20.0,
            "available": 1000
          }
        ],
        "id": 13
      },
      {
        "name": "Book & Literary Festival",
        "dates": {
          "start": "2025-09-25",
          "end": "2025-09-28"
        },
        "owner": "Page Turner Society",
        "location": {
          "latitude": 42.3601,
          "longitude": -71.0589
        },
        "description": "Celebration of literature with author readings, book signings, panel discussions, and writing workshops across multiple venues.",
        "image": "/images/event.png",
        "tickets": [
          {
            "type": "Festival Pass",
            "price": 40.0,
            "available": 3000
          },
          {
            "type": "Single Event",
            "price": 12.0,
            "available": 5000
          },
          {
            "type": "Workshop Pass",
            "price": 75.0,
            "available": 500
          }
        ],
        "id": 14
      },
      {
        "name": "Digital Marketing Conference",
        "dates": {
          "start": "2025-10-01",
          "end": "2025-10-03"
        },
        "owner": "Marketing Innovation Group",
        "location": {
          "latitude": 25.7617,
          "longitude": -80.1918
        },
        "description": "Professional conference focusing on the latest digital marketing trends, tools, and strategies with industry leaders and networking events.",
        "image": "/images/event.png",
        "tickets": [
          {
            "type": "Full Conference",
            "price": 499.0,
            "available": 1000
          },
          {
            "type": "Workshop Day",
            "price": 299.0,
            "available": 500
          },
          {
            "type": "Virtual Attendance",
            "price": 199.0,
            "available": 2000
          }
        ],
        "id": 15
      },
      {
        "name": "Photography Exhibition",
        "dates": {
          "start": "2025-07-01",
          "end": "2025-07-31"
        },
        "owner": "Visual Arts Foundation",
        "location": {
          "latitude": 48.8566,
          "longitude": 2.3522
        },
        "description": "Month-long exhibition showcasing works from emerging and established photographers exploring themes of nature, urban life, and human connection.",
        "image": "/images/event.png",
        "tickets": [
          {
            "type": "General Admission",
            "price": 15.0,
            "available": 10000
          },
          {
            "type": "Guided Tour",
            "price": 25.0,
            "available": 2000
          },
          {
            "type": "Opening Night Gala",
            "price": 75.0,
            "available": 300
          }
        ],
        "id": 16
      },
      {
        "name": "Startup Pitch Competition",
        "dates": {
          "start": "2025-08-18",
          "end": "2025-08-19"
        },
        "owner": "Venture Capital Connect",
        "location": {
          "latitude": 37.3382,
          "longitude": -121.8863
        },
        "description": "Competition where emerging startups pitch to investors and industry experts for funding opportunities and mentorship.",
        "image": "/images/event.png",
        "tickets": [
          {
            "type": "Attendee Pass",
            "price": 149.0,
            "available": 500
          },
          {
            "type": "Investor Pass",
            "price": 399.0,
            "available": 100
          },
          {
            "type": "Startup Application",
            "price": 299.0,
            "available": 50
          }
        ],
        "id": 17
      },
      {
        "name": "Fashion Week",
        "dates": {
          "start": "2025-09-10",
          "end": "2025-09-16"
        },
        "owner": "Style Collective International",
        "location": {
          "latitude": 40.7128,
          "longitude": -74.006
        },
        "description": "Premiere fashion event featuring runway shows from top designers, emerging talent showcases, and industry networking events.",
        "image": "/images/event.png",
        "tickets": [
          {
            "type": "Industry Pass",
            "price": 799.0,
            "available": 2000
          },
          {
            "type": "Single Show Ticket",
            "price": 150.0,
            "available": 5000
          },
          {
            "type": "VIP All Access",
            "price": 1999.0,
            "available": 300
          }
        ],
        "id": 18
      },
      {
        "name": "Sustainable Living Expo",
        "dates": {
          "start": "2025-05-15",
          "end": "2025-05-17"
        },
        "owner": "Green Future Alliance",
        "location": {
          "latitude": 59.3293,
          "longitude": 18.0686
        },
        "description": "Exhibition promoting sustainable living practices with showcases of eco-friendly products, renewable energy solutions, and educational workshops.",
        "image": "/images/event.png",
        "tickets": [
          {
            "type": "Weekend Pass",
            "price": 25.0,
            "available": 5000
          },
          {
            "type": "Single Day",
            "price": 15.0,
            "available": 3000
          },
          {
            "type": "Family Pack (4 people)",
            "price": 60.0,
            "available": 1000
          }
        ],
        "id": 19
      },
      {
        "name": "Classical Music Symphony",
        "dates": {
          "start": "2025-11-12",
          "end": "2025-11-12"
        },
        "owner": "Metropolitan Orchestra",
        "location": {
          "latitude": 52.3676,
          "longitude": 4.9041
        },
        "description": "Evening of classical masterpieces performed by the renowned Metropolitan Orchestra featuring guest soloists and premiering a new composition.",
        "image": "/images/event.png",
        "tickets": [
          {
            "type": "Orchestra Seating",
            "price": 85.0,
            "available": 1000
          },
          {
            "type": "Balcony Seating",
            "price": 55.0,
            "available": 800
          },
          {
            "type": "Premium Package (includes reception)",
            "price": 150.0,
            "available": 200
          }
        ],
        "id": 20
      },
      {
        "name": "Gaming Convention",
        "dates": {
          "start": "2025-08-22",
          "end": "2025-08-24"
        },
        "owner": "Interactive Entertainment Association",
        "location": {
          "latitude": 34.0522,
          "longitude": -118.2437
        },
        "description": "Celebration of video games and gaming culture with demos, tournaments, developer panels, and exclusive merchandise.",
        "image": "/images/event.png",
        "tickets": [
          {
            "type": "Weekend Pass",
            "price": 70.0,
            "available": 15000
          },
          {
            "type": "Single Day",
            "price": 35.0,
            "available": 10000
          },
          {
            "type": "Pro Gamer Package",
            "price": 150.0,
            "available": 1000
          }
        ],
        "id": 21
      },
      {
        "name": "Dance Festival",
        "dates": {
          "start": "2025-07-25",
          "end": "2025-07-27"
        },
        "owner": "Movement Arts Collective",
        "location": {
          "latitude": 29.7604,
          "longitude": -95.3698
        },
        "description": "Celebration of dance featuring performances across ballet, contemporary, hip-hop, and cultural styles with workshops and competitions.",
        "image": "/images/event.png",
        "tickets": [
          {
            "type": "Festival Pass",
            "price": 60.0,
            "available": 3000
          },
          {
            "type": "Single Performance",
            "price": 25.0,
            "available": 5000
          },
          {
            "type": "Workshop Package",
            "price": 120.0,
            "available": 500
          }
        ],
        "id": 22
      },
      {
        "name": "Holiday Market",
        "dates": {
          "start": "2025-12-05",
          "end": "2025-12-24"
        },
        "owner": "Festive Traditions Inc.",
        "location": {
          "latitude": 50.1109,
          "longitude": 8.6821
        },
        "description": "Traditional holiday market featuring artisan crafts, seasonal food and drinks, live entertainment, and festive decorations.",
        "image": "/images/event.png",
        "tickets": [
          {
            "type": "General Admission",
            "price": 5.0,
            "available": 50000
          },
          {
            "type": "Season Pass",
            "price": 25.0,
            "available": 5000
          },
          {
            "type": "VIP Evening (includes tastings)",
            "price": 40.0,
            "available": 1000
          }
        ],
        "id": 23
      },
      {
        "name": "Agricultural & Livestock Fair",
        "dates": {
          "start": "2025-09-01",
          "end": "2025-09-07"
        },
        "owner": "Rural Development Association",
        "location": {
          "latitude": 38.9072,
          "longitude": -77.0369
        },
        "description": "Annual fair showcasing agricultural achievements, livestock competitions, farm-to-table food, carnival rides, and live entertainment.",
        "image": "/images/event.png",
        "tickets": [
          {
            "type": "Adult Admission",
            "price": 15.0,
            "available": 20000
          },
          {
            "type": "Child Admission",
            "price": 8.0,
            "available": 10000
          },
          {
            "type": "Family Pass (4 people)",
            "price": 40.0,
            "available": 5000
          }
        ],
        "id": 24
      },
      {
        "name": "Space & Astronomy Expo",
        "dates": {
          "start": "2025-10-15",
          "end": "2025-10-17"
        },
        "owner": "Cosmic Exploration Society",
        "location": {
          "latitude": 29.7604,
          "longitude": -95.3698
        },
        "description": "Interactive exhibition dedicated to space science and astronomy featuring telescopes, planetarium shows, astronaut talks, and space technology demonstrations.",
        "image": "//images/event.png",
        "tickets": [
          {
            "type": "General Admission",
            "price": 22.0,
            "available": 8000
          },
          {
            "type": "Student/Senior",
            "price": 15.0,
            "available": 4000
          },
          {
            "type": "Full Experience (includes planetarium)",
            "price": 35.0,
            "available": 2000
          }
        ],
        "id": 25
      }
    ]
  };
  
  export default eventsData;