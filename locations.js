const locations = [
  {
    id: "duvenecks_arrival",
    title: "Duvencks Part 1: The Duvenecks Arrive in the Bay Area",
    lat: 37.44472,
    lng: -122.15298,
    category: "duvenecks",
    description: "Part 1 in a series of sites celebrating the founders of Hidden Villa and prominent South Bay historical figures and socialites, the Duvenecks. This site follows their arrival in the Bay Area. Click 'See More' to learn about this site.",
    image: "",
    longDescription: "Born into East Coast privilege, the Duvenecks had visited, and, as such, been enchanted by California in their travels around the world. However, it wasn't until a particularly harsh winter in their native Boston that they decided to officially light out for the West. As World War I raged, they settled in temperate Santa Barbara for a short period, only to move to Carmel and later Tacoma, Washington on account of Frank's enlisting as an engineer in the military. Soon, Frank was sent to the European theatre of war, but not before ensuring Josephine learned how to drive a Ford Model T. Eight months pregnant with her third child, Josephine brought the family to Palo Alto in 1918, then and still a university town, albeit then one of under 5,000 residents. Josephine rented a house here, at the crook of Addison and Cowper.",
    images: []
  },
  {
    id: "duvenecks_return",
    title: "Duvenecks Part 2: Frank and Josephine Return",
    lat: 37.44855,
    lng: -122.14005,
    category: "duvenecks",
    description: "Part 2 in a series of sites celebrating the founders of Hidden Villa and prominent South Bay historical figures and socialites, the Duvenecks. This site follows their return to the Bay Area, following the events detailed in 'Duvenecks Part 1'. Click 'See More' to learn about this site.",
    image: "",
    longDescription: "Frank was only away for one year. Much had changed; after giving birth to Hope in Palo Alto, Josephine had also gone away to care for Frank's father in Cincinnati, Ohio, who had developed cancer due to a lifetime of smoking. When Josephine returned, she bought a house here on Newell Road for a sum total of $7,500. What is now South Bay suburban sprawl was once the city's limit. The Duvenecks, standing here, would be perched on the edge of human settlement. The year was 1919; as a member of the occupying force of Germany, Frank remained after the armistice until August. When he returned, he saw his daughter for the first time.",
    images: []
  },
  {
    id: "elizabeth_gamble_garden",
    title: "Elizabeth F. Gamble Garden",
    lat: 37.4400122,
    lng: -122.1482255,
    category: "pre_silicon_valley",
    description: "A beautiful garden established by the son of the co-founder of Procter and Gamble in 1901. Click 'See More' to learn about this site.",
    image: "photos/gamble-garden-1.JPG",
    longDescription: "An estate which would later be a garden established by Edwin P. Gamble, son of the co-founder of Procter and Gamble, James Gamble, in 1901. For a sum total of $6, 039, Gamble constructed a cottage and carriage house for himself on the edge of town; although now the Gamble Garden is surrounded by suburbs, it was once the very edge of Palo Alto. Gamble would have been free to expand into what was once wilderness. His daughter, Elizabeth, would ride her pony around the grounds as a youth, but soon grew into a passionate gardener. Known for her floral print dresses and generosity with garden flowers, she used her wealth to provide loans for young girls to attend college. She inherited the estate in 1939 and devoted her life to beautifying it, adding the Tea House in 1948. When she died at age ninety-two in 1981, her estate was bequeathed to the city of Palo Alto, who converted the plot into a public garden. In collaboration with the Museum of American Heritage.",
    images: [
      { src: "photos/garden-1.JPG", caption: "The Gamble family house, in which Elizabeth was raised. Credit: PAST Palo Alto."},
      { src: "photos/garden-2.JPG", caption: "Credit: PAST Palo Alto." },
      { src: "photos/garden-3.JPG", caption: "A pagoda in Elizabeth's garden. Credit: PAST Palo Alto." },
      { src: "photos/garden-4.JPG", caption: "Credit: PAST Palo Alto." }
    ]
  },
  {
    id: "hp_garage",
    title: "HP Garage",
    lat: 37.44307,
    lng: -122.15481,
    category: "silicon_valley",
    description: "Considered the 'birthplace of Silicon Valley' -- the storied garage from which HP was founded. Click 'See More' to learn about this site.",
    image: "",
    longDescription: "Widely considered the birthplace of Silicon Valley. Constructed at an unknown date behind a house dating to 1905. While searching for rentals which contained both a workshop and ample living space, Bill Hewlett and Dave Packard discovered the Addison Avenue property. Together, they shared the $45 per month rent, and used their garage as a space for research, development, and prototyping, including for the Model 200A audio oscillator, HP's first product. Soon, after having named the company, they outgrew their garage, moving into a Page Mill Road property. HP re-aquired the Garage property in 2000, and has preserved its original 1939 conditions. In collaboration with the Museum of American Heritage.",
    images: [
      { src: "photos/hp-garage-1.JPG", caption: "A photo of the garage prior to its 2005 restoration. Credit: PAST Palo Alto." }
    ]
  },
  {
    id: "roth_building",
    title: "Roth Building (now Palo Alto History Museum)",
    lat: 37.44361,
    lng: -122.15722,
    category: "pre_silicon_valley",
    description: "The site of Palo Alto's first group medical practice, founded in 1932. The building now houses the Palo Alto Museum. Click 'See More' to learn about this site.",
    image: "",
    longDescription: "The original site of The Palo Alto Medical Clinic, the first group medical practice in Palo Alto. Founded by Dr. Russell Lee, a graduate of Berkeley and Stanford Medical School, and Dr. Thomas Williams, who later hired Dr. EB Roth and Dr. Esther B. Clark--now of park fame. After more shifts in staff, they formed the Palo Alto Medical Clinic, Ltd. in the early thirties, often conflated by many at the time with socialised medicine. They outgrew their original quarters on Bryant, and constructed the Spanish Eclectic Roth Building under the guide of architect--and sister of Dr. Clark--Birge Clark. Centred around a courtyard are wings and rooms that once were doctor's offices or examination rooms. In 2026, it became the Palo Alto History Museum. In collaboration with the Museum of American Heritage.",
    images: [
      { src: "photos/roth-1.JPG", caption: "Pay close attention to the Spanish Revival detail of Birge Clark. Credit: PAST Palo Alto." },
      { src: "photos/roth-2.JPG", caption: "The interior is adorned with murals depicting modern medical scenes. Credit: PAST Palo Alto." },
      { src: "photos/roth-3.JPG", caption: "The arches and tiles on the roof add a unique charm. Credit: PAST Palo Alto." }
    ]
  },
  {
    id: "stanford_theatre",
    title: "Stanford Theatre",
    lat: 37.4450694,
    lng: -122.16270,
    category: "pre_silicon_valley",
    description: "The famed Neoclassical cinema on University Avenue, opened in 1925. Click 'See More' to learn about this site.",
    image: "",
    longDescription: "Beloved historical theatre, opened 1925. Constructed in the Neoclassical movie palace style, a trend aiming to dazzle viewers not only through film but through ambience, for only $250,000, the New Stanford Theatre became the Bay Area's expression of the movie craze sweeping the world. For many years, the Theatre thrived; then came the 1960s, wherein the building fell into disrepair as modern cinemas overshadowed it. In 1987, David Woodley Packard, the son of HP's David Packard, purchased and renovated the theatre for over $6,000,000. With much accuracy, the original theatre was revived. Today, it thrives, showing classic, often black-and-white, or even silent films to an audience of Bay Area film enthusiasts. In collaboration with the Museum of American Heritage.",
    images: [
      { src: "photos/theatre-1.JPG", caption: "Credit: PAST Palo Alto." },
      { src: "photos/theatre-2.JPG", caption: "Credit: PAST Palo Alto." },
      { src: "photos/theatre-3.JPG", caption: "Credit: PAST Palo Alto." }
    ]
  },
  {
    id: "kee_house",
    title: "Kee House",
    lat: 37.4245556,
    lng: -122.1474444,
    category: "pre_silicon_valley",
    description: "The oldest surviving building from Mayfield, one of the villages from which Palo Alto was built. One of the Click 'See More' to learn about this site.",
    image: "photos/kee-1.JPG",
    longDescription: "Historical house and barn dating to Palo Alto's predecessor village, Mayfield. Robert Norton Kee purchased this land, and as the proprietor of a transfer business, in 1889, he constructed a barn in which to house his horses, apparently for a sum total of $3, 500. He also purchased a building, once the G. Bracchi grocery, in 1893, which would become the modern Kee House. After shifting owners as a private residence as the village of Mayfield expanded into the City of Palo Alto, the was divided into apartments in the 60s. Unfortunately, the barn was destroyed in 1938, when it was the final surviving 19th century barn of Mayfield and the first barn in the College Terrace neighbourhood. The house remains a residence to this day. In collaboration with the Museum of American Heritage.",
    images: [
      { src: "photos/kee-1.JPG", caption: "Credit: PAST Palo Alto" },
      { src: "photos/kee-2.JPG", caption: "Credit: PAST Palo Alto" },
      { src: "photos/kee-3.JPG", caption: "Credit: PAST Palo Alto" }
    ]
  },
  {
    id: "squire_house",
    title: "Squire House",
    lat: 37.453056,
    lng: -122.153056,
    category: "pre_silicon_valley",
    description: "A striking Roman Revival edifice constructed in 1904 for the heir to the Swift meatpacking empire, part of the Big Four meatpacking monopolies. Click 'See More' to learn about this site.",
    image: "photos/squire-1.JPG",
    longDescription: "Arguably the most characteristic and striking house on University Avenue. As heir to one of the Big Four meatpacking monopolies, In 1904, John Adams Squire and his wife Georgiana commissioned San Francisco architect T. Paterson Ross to build their mansion, which costed $18, 000. Ross was a native of Edinburgh, and emigrated to San Francisco in 1890 as a twelve-year-old. Due to his work in San Francisco, he had become an acclaimed architect. For Squire and his wife, he created a great Roman Revival edifice, complete with a palm-lined drive. The interior is spacious and comfortable, while, in the rear, there is housed a swimming pool. When demolition threatened Squire House in 1973, a citizen's committee raised $90, 000, and in tandem with a $118, 000 contribution from the City, the house was restored. It is listed on the National Register of Historic Places. In collaboration with the Museum of American Heritage.",
    images: [
      { src: "photos/squire-1.JPG", caption: "Credit: PAST Palo Alto" },
      { src: "photos/squire-2.JPG", caption: "Credit: PAST Palo Alto" },
      { src: "photos/squire-3.JPG", caption: "Credit: PAST Palo Alto" }
    ]
  },
  {
    id: "hanna_house",
    title: "Hanna House",
    lat: 37.4160139,
    lng: -122.1635528,
    category: "silicon_valley",
    description: "Frank Lloyd Wright's first work in the Bay Area, where he experimented with many of the techniques he would make famous in later works, such as the Guggenheim. Click 'See More' to learn about this site.",
    image: "photos/hanna-1.JPG",
    longDescription: "Also known as the Honeycomb House: Frank Lloyd Wright's first work in the San Francisco area. One of the most iconic American architects in history, Wright designed the Hanna House for Stanford professor Paul Hanna and his wife Jean in 1936. Hinged on Wright's seminal Usonian reformist ideals: houses that prioritised affordability and spatial flow in design, to ultimately create a more enlightened society. These techniques are evident in the lack of right angles in the House's floor plan, emphasising open space. Ideas experimented with in the Hanna House would later bloom into Wright masterpieces, such as that of the Guggenheim. Hanna reached Wright after being enthralled by Wright's book, Modern Architecture. The house developed over the course of 25 years, and even survived the 1989 Loma Prieta earthquake despite its location on the San Andreas Fault; it incurred significant damage, yet could certainly be repaired. In 1974, the house was donated to Stanford University. In collaboration with the Museum of American Heritage",
    images: [
      { src: "photos/hanna-1.JPG", caption: "Credit: PAST Palo Alto" }
    ]
  },
  {
    id: "palo_alto_tower_well",
    title: "Palo Alto Tower Well",
    lat: 37.4459921,
    lng: -122.1673342,
    category: "pre_silicon_valley",
    description: "A reminder of a time when Palo Alto's entire water supply could be housed in a massive cylindrical tank. Constructed in 1910, featuring electronic mechanisation very advanced for its time. Click 'See More' to learn about this site.",
    image: "photos/tower-well-1.JPG",
    longDescription: "Palo Alto has always been a forward-thinking city, and the Tower Well, which now sits conspicuously in a park of native plants, is a fascinating reminder of this. In 1896, Palo Alto was a town whose chief industry was livestock grazing -- and whose water bill was $1 a month. Still, that year the town became one of America's first settlements to run its own water utility. In 1910, the Well was constructed to store the town's entire water supply, both as potable water for the growing populace and to fight fire. Its walls are built of reinforced concrete, and its tank can hold 155,000 gallons of water. It distributed and regulated water using an electronic mechanism that could control capacity.  In collaboration with the Museum of American Heritage",
    images: [
      { src: "photos/tower-well-1.JPG", caption: "Credit: PAST Palo Alto" },
      { src: "photos/tower-well-2.JPG", caption: "Credit: PAST Palo Alto" },
      { src: "photos/tower-well-3.JPG", caption: "Credit: PAST Palo Alto" }
    ]
  },
  {
    id: "frenchmans_tower",
    title: "Frenchman's Tower",
    lat: 37.396311,
    lng: -122.161784,
    category: "pre_silicon_valley",
    description: "A genuine oddity: a tall, medieval spire jutting out of the side of Old Page Mill Road constructed by a French recluse. Click 'See More' to learn about this site.",
    image: "photos/frenchmans-tower-1.JPG",
    longDescription: "The Frenchman's Tower is starkly out-of-place -- perhaps that's why there are so many stories about the engimatic spire placed awkwardly by the side of Old Page Mill Road. It was built in 1875 by Paulin Caperon, a French refugee who fled his country after the Franco-Prussian War. Earlier that year, he had assumed the name Peter Coutts and moved to Mayfield, one of the villages which would come together to form Palo Alto. Its Gothic windows and crenels, slits traditionally used to shield archers, resemble Medieval fortifications constructed centuries earlier in Caperot's continent of origin. The second floor acted as Caperon's water tank, while the first floor was a study and library. Interestingly, the building lacked doors; Caperon enterred through a window. Suddenly, in 1882, Caperon disappeared without notifying his neighbours. The reclusive man had decided to return to his native France and his properties were liquidated. Still, the tower's many curiosities, not least its tunnels, which were born to provide water to Caperon's farm and his lake, are the subject of Silicon Valley urban myth. Some in Caperon's time believed it harboured the French empress, a charge Caperon never denied, while others suspect it was on the getaway route for the 1974 killer of Arlis Perry. Today Frenchman's Tower survives in its intrigue; it's a curious reminder of the quirks hidden beneath Silicon Valley's surface.",
    images: [
      { src: "photos/frenchmans-tower-1.JPG", caption: "Credit: PAST Palo Alto" },
      { src: "photos/frenchmans-tower-2.JPG", caption: "Credit: PAST Palo Alto" },
      { src: "photos/frenchmans-tower-3.JPG", caption: "Credit: PAST Palo Alto" }
    ]
  },
  {
    id: "okeefe_site",
    title: "O'Keefe Ohlone Settlement",
    lat: 37.36523,
    lng: -122.11725,
    category: ["ohlone", "duvenecks"],
    description: "Once a village constructed by the Ohlone, the Native American tribe that has lived in present-day Silicon Valley for at least 10,000 years. Click 'See More' to learn about this site.",
    image: "",
    longDescription: "Placeholder. In collaboration with Hidden Villa",
    images: []
  },
  {
    id: "russian_ridge_bedrocks",
    title: "Russian Ridge Bedrocks",
    lat: 37.3153,
    lng: -122.1882,
    category: ["ohlone", "duvenecks"],
    description: "Part 2 in a series of sites celebrating the founders of Hidden Villa and prominent South Bay historical figures and socialites, the Duvenecks. This site follows the their purchase of Hidden Villa. Read Duvenecks Part 1 and 2 for more context. Click 'See More' to learn about this site.",
    image: "",
    longDescription: "Placeholder. In collaboration with Hidden Villa",
    images: []
  },
  {
    id: "duveneck_house",
    title: "Duvenecks Part 3: The Duveneck House",
    lat: 37.35011,
    lng: -122.16298,
    category: "duvenecks",
    description: "Part 2 in a series of sites celebrating the founders of Hidden Villa and prominent South Bay historical figures and socialites, the Duvenecks. This site follows the their purchase of Hidden Villa. Read Duvenecks Part 1 and 2 for more context.Click 'See More' to learn about this site.",
    image: "",
    longDescription: "Part 3 in a series of sites celebrating the founders of Hidden Villa, the Duvenecks. Read preceding sites for complete narrative. The Duvenecks spent any spare time that they had outdoors. In their Ford Model T, they would cruise through the then-treacherous Santa Cruz mountains, camping on hillsides and in clearings. They had always dreamed of owning their own open space. In 1924, they found it on a routine drive down Moody Road. Spying the familiar metal flags as well as a 'for sale' sign, they were intrigued: they turned in, and discovered the thousand-acre lot that would serve both as their home and a setting for some of the Bay Area's most significant history: Hidden Villa. Amazed by its pristine, unblemished nature, the Duvenecks purchased the lot. They completed the Duveneck House in 1929, completed in a Spanish colonial style, and laden with intricate ironwork. In collaboration with Hidden Villa",
    images: []
  },
  {
    id: "hv_hostel",
    title: "Hidden Villa Hostel",
    lat: 37.35055,
    lng: -122.16010,
    category: "duvenecks",
    description: "An incredible site nestled unassumedly in Los Altos Hills; the site of the US Pacific Coast's first racially integrated summercamp, refuge for those fleeing WWII, and the United Farm Workers. Click 'See More' to learn about this site.",
    image: "",
    longDescription: "Placeholder. In collaboration with Hidden Villa",
    images: []
  },
  {
    id: "hostess_house",
    title: "Hostess House",
    lat: 37.4430264,
    lng: -122.1655246,
    category: "pre_silicon_valley",
    description: "A relic of the First World War; where soldiers in training would meet their families. Click 'See More' to learn about this site.",
    image: "photos/hostess-1.JPG",
    longDescription: "The Hostess House is a relic of the Great War, a war whose impact would reach even the small township south of San Francisco. Built in 1918, the house was originally located in Menlo Park as part of Camp Fremont, a massive military camp built soon after the US enterred WWI in 1917. Julia Morgan, also the first woman in California to be certified in the field of architecture and architect of Hearst Castle, was commissioned to design the House as a place for soldiers to meet their loved ones. Soon after, the House became a favourite for the soldiers; the same year it was constructed, marriages began to be held in the building. However, as WWI concluded, the entirety of Camp Fremont was dismantled; only two buildings remained, one of which was the Hostess House. The city of Palo Alto purchased the House, moved it to its current University Ave location, and ran it as a community centre under the care of Josephine Duveneck of Hidden Villa fame. Now, it houses the MacArthur Park restaurant, emblematic of a changing city -- but one whose roots are ever-present. In collaboration with the Museum of American Heritage.",
    images: [
      { src: "photos/hostess-1.JPG", caption: "Credit: PAST Palo Alto" },
      { src: "photos/hostess-2.JPG", caption: "Credit: PAST Palo Alto" }
    ]
  },
  {
    id: "downing_house",
    title: "The Downing House",
    lat: 37.44655,
    lng: -122.15673,
    category: "pre_silicon_valley",
    description: "A beautiful Victorian house, one of the most ornate of early Palo Alto, constructed in 1894. Click 'See More' to learn about this site.",
    image: "photos/downing-1.JPG",
    longDescription: "The Downing House is a splendid work of architecture, whose distinctive columns and witch's hat tower assert its long-standing presence amidst Cowper Avenue suburbia. Commissioned by T.B Downing and his wife Margaret Sandford, the house was constructed in 1894 by builder W. Matlock Campbell. Downing was a prominent investor in the burgeoning property market of early Palo Alto, which coincided with the initial growth of the university that had recently opened on Leland Stanford's ranch. As was typical of many American socialites of his time, he participated in local politics; he was an early member of the Palo Alto school board and city council. After Downing's death the house remained for nearly a century until it was restored as an office building in the 1970s. It remains today, a constant reminder of Palo Alto's growth amidst its past. Placeholder. In collaboration with the Museum of American Heritage.",
    images: [
      { src: "photos/downing-1.JPG", caption: "Credit: PAST Palo Alto" },
      { src: "photos/downing-2.JPG", caption: "Credit: PAST Palo Alto" },
      { src: "photos/downing-3.JPG", caption: "Credit: PAST Palo Alto" },
      { src: "photos/downing-4.JPG", caption: "Credit: PAST Palo Alto" }
    ]
  },
  {
    id: "bryant_house",
    title: "440-450 Bryant Street",
    lat: 37.4462943,
    lng: -122.1625154,
    category: "pre_silicon_valley",
    description: "The beautiful Spanish Revival former headquarters of the Palo Alto Fire and Police Station, built in 1927. Click 'See More' to learn about this site.",
    image: "photos/bryant-1.JPG",
    longDescription: "The Bryant House on 440-450 Bryant Street speaks to Palo Alto's early governance. Constructed in 1927, it first served both as the fire station -- and police station. It was designed by well-known Palo Alto architect Birge Clark, who also designed hundreds of buildings that now make up central Palo Alto and its surroundings. His conscious Colonial Revival design references California's Spanish roots, and its ironwork, noticeable in its windows and porches, is elegant and skillful. Eventually, Palo Alto grew too large to be policed by solely the Bryant House, and it was vacated in 1970. Now it serves as Avenidas, a facility providing services to the elderly. Its continued presence crucially reminds us of that from which modern Palo Alto came, a city that once could be policed from one Spanish Colonial building. In collaboration with the Museum of American Heritage.",
    images: [
      { src: "photos/bryant-1.JPG", caption: "Credit: PAST Palo Alto" },
      { src: "photos/bryant-2.JPG", caption: "Credit: PAST Palo Alto" },
      { src: "photos/bryant-3.JPG", caption: "Credit: PAST Palo Alto" }
    ]
  },
  {
    id: "ashby_house",
    title: "Ashby House",
    lat: 37.4530237,
    lng: -122.1480158,
    category: "pre_silicon_valley",
    description: "A modest cottage constructed in 1889 that was moved intact to its present location in 1910. Click 'See More' to learn about this site.",
    image: "photos/ashby-1.JPG",
    longDescription: "The Ashby House at 1145 Forest Avenue is perhaps best characterised by its simplicity. Built in 1889 in the Victorian style, it was originally located down the street, at the end of the Forest Avenue block. In this site, the current site of 1033-1035 Forest, laid a well and pump from which the residents of the plot drew their water. The land was purchased in 1890 by Ella and Delmar Ashby; as the villages of the peninsula remained agrarian, land was ripe for development. Ashby hoped to make his mark by developing a cannery on his plot; however, these plans never materialised. Nonetheless, in 1910, the house would meet a very different fate: it would learn the art of mobility. Likely using a rudimentary system of horses and ropes, the Ashby cottage was moved intact to its present site. In 1919, the city of Palo Alto, which had been steadily expanding, annexed the cottage and the surrounding neighbourhood. It now lies inconspicuously today, a slice of the 19th century in contemporary Palo Alto. In collaboration with the Museum of American Heritage.",
    images: [
      { src: "photos/ashby-1.JPG", caption: "Credit: PAST Palo Alto" },
      { src: "photos/ashby-2.JPG", caption: "Credit: PAST Palo Alto" }
    ]
  },
  {
    id: "pa_post_office",
    title: "Old Palo Alto Post Office",
    lat: 37.4458095,
    lng: -122.1592599,
    category: "pre_silicon_valley",
    description: "A Mission Revival-style building designed by famed architect Birge Clark, constructed in 1932. Click 'See More' to learn about this site.",
    image: "photos/post-office-1.JPG",
    longDescription: "Designated a National Landmark by the US Federal Government, the old post office of Palo Alto was a mark of an early 20th-century city rapidly on the rise. In the 1900s, as towns sprung up throughout the United States, post offices were often seen as the key to legitimacy, offering both contact to the outside world and a stamp of recognition from the federal government. Thus, when Palo Alto began work on its first permanent, purpose-built post office in 1932, there was much fanfare. It had been decided that the architect would be the celebrated Birge Clark, known today as 'Palo Alto's best-loved architect'; likewise, under the approval of President Herbert Hoover, Clark decided that the building would be designed in the Spanish Colonial style, harkening back to California history and the time of Spanish rule -- which was also an overt rejection of the classical design in federal buildings prevalent of the time. When it was completed in 1933, its traditional and deliberate callbacks to California heritage, vested in its tiled roof and arches, instilled a sense of pride and identity in Palo Alto, whose post office was a world apart from the homogenous government buildings of the era. To this day, Clark's iconic building holds much significance for Palo Alto. It was once a portal for the people of Palo Alto to the outside world; now, it helps remind Palo Alto of its own rich heritage. In collaboration with the Museum of American Heritage.",
    images: [
      { src: "photos/post-office-1.JPG", caption: "Credit: PAST Palo Alto" },
      { src: "photos/post-office-2.JPG", caption: "Credit: PAST Palo Alto" },
      { src: "photos/post-office-3.JPG", caption: "Credit: PAST Palo Alto" },
      { src: "photos/post-office-4.JPG", caption: "Credit: PAST Palo Alto" },
      { src: "photos/post-office-5.JPG", caption: "Credit: PAST Palo Alto" }
    ]
  },
  {
    id: "church_residence",
    title: "St. Thomas Aquinas Church",
    lat: 37.4451864,
    lng: -122.1569313,
    category: "pre_silicon_valley",
    description: "The oldest church in Palo Alto, founded in 1901. Click 'See More' to learn about this site.",
    image: "photos/church-1.JPG",
    longDescription: "Founded immediately after the turn of the century, the St. Thomas Aquinas Church and its exquisite spire would have held aloft the growing skyline of the yet-agricultural village it served. A Catholic parish church, its roots lay in the spread of Catholicism with the arrival of white Spanish missionaries and Dominicans in 1769. Over the next century, as the Vatican began to define dioceses over the Spanish, then Mexican territories, the area that is now Palo Alto was incorporated in to the Catholic system. Even after Mexico's 1848 cession of California to the United States, when Protestant settlers flocked to new American territories, Catholic institutions held. Even after Mayfield, California's predecessor village was formed, Catholics were worshipping in a warehouse by the railroad station. Once the village had grown enough to comprise the incorporated town of Palo Alto in 1894, Catholics had grown enough in number to demand a church. In 1901, the land off of Waverley Street was purchased for $1500; the next year, the church was completed in the Carpenter Gothic style for $12,000. For over a century, now it has stood; it's even starred in the classic 1971 film Harold and Maude. Notice its superb stained glass as it remains today not just as a community for Catholic worshippers, but as a quiet place to think on a weekday, or the symbol of a long Spanish colonial legacy. In collaboration with the Museum of American Heritage.",
    images: [
      { src: "photos/church-1.JPG", caption: "Credit: PAST Palo Alto" },
      { src: "photos/church-2.JPG", caption: "Credit: PAST Palo Alto" },
      { src: "photos/church-3.JPG", caption: "Credit: PAST Palo Alto" },
      { src: "photos/church-4.JPG", caption: "Credit: PAST Palo Alto" }
    ]
  },
  {
    id: "harbourmasters_house",
    title: "Harbourmaster's House",
    lat: 37.4575089,
    lng: -122.1075783,
    category: "pre_silicon_valley",
    description: "A small house constructed in 1937 in the Spanish Revival style, right off the San Francisco Bay. Click 'See More' to learn about this site.",
    image: "photos/harbourmaster-1.JPG",
    longDescription: "This quaint, simple building is important as a representation of the era in which it was constructed. By 1937, an America increasingly connected by rail, telegraph, and radio was facing dire straits. Its own connectivity had meant, eight years earlier, that the crash of a stock market in New York could plunge the world into financial ruin in the cataclysmic Great Depression. As unemployment in America neared 25%, president Herbert Hoover's attempts at resolving the Depression proved ineffective. Following the decisive elevtion of 1933, Franklin D. Roosevelt ascended to the US Presidency with a mandate for drastic change; with his New Deal, he rejected the hands-off measures of his predecessor and set standards for US Government intervention into daily Anerican life that today remain unbroken. Through radical investment in the American economy, infrastructure, and welfare, Roosevelt was able to take away the strain from many working Americans, at least until the onset of World War II. One of his most important measures remains the Works Progress Administration; between 1935-1939, it employed over 8.5 million Americans and spent roughly $11 billion on infrastructure, buildings, and arts projects. One such building is the adobe Harbourmaster's House in Palo Alto; Palo Alto, as a young city, envisioned its harbour becoming commercially important and therefore the federal government endowed the harbourmaster with his new building. Built in a Spanish revival style, with a tiled roof, it remains today and harkens to a period of American renewal. In collaboration with the Museum of American Heritage.",
    images: [
      { src: "photos/harbourmaster-1.JPG", caption: "Credit: PAST Palo Alto" }
    ]
  },
  {
    id: "pa_first_hospital",
    title: "Palo Alto's First Hospital",
    lat: 37.449167,
    lng: -122.160783,
    category: "pre_silicon_valley",
    description: "The first hospital in Palo Alto, founded following a typhoid epidemic between 1902-1903. Click 'See More' to learn about this site.",
    image: "photos/hospital-1.JPG",
    longDescription: "Though today the building is largely unidentiable, Palo Alto's first functioning hospital laid at the crook of Lytton and Cowper. It was first conceived of out of a townwide sense of great urgency; Stanford and Palo Alto, then comprised of 3,500 residents, were facing a typhoid epidemic, likely triggered by contaminated milk. By late April that year, over 130 cases had been reported. What ensued was unprecedented; the town, under the leadership of Professor William F. Snow, rallied for improvement in public sanitation and health. As a direct result, the Students Guild Hospital was founded, serving as the first permanent hospital in Palo Alto. Set in a three-story Victorian house, the hospital served Palo Alto for a decade until it was replaced by a larger building elsewhere. Despite its short lifespan, the Students' Guild Hospital was pivotal in keeping the impact of a potentially catastrophic epidemic minimal. In collaboration with the Museum of American Heritage.",
    images: [
      { src: "photos/hospital-1.JPG", caption: "Credit: PAST Palo Alto" },
      { src: "photos/hospital-2.JPG", caption: "Credit: PAST Palo Alto" },
      { src: "photos/hospital-3.JPG", caption: "Credit: PAST Palo Alto" },
      { src: "photos/hospital-4.JPG", caption: "Credit: PAST Palo Alto" }
    ]
  },
  {
    id: "professorville",
    title: "Professorville (geographical center)",
    lat: 37.44161,
    lng: -122.15413,
    category: "pre_silicon_valley",
    description: "An area settled by Stanford faculty in the early 1890s. Many of its buildings date back well over a century and feature unique architecture. Click 'See More' to learn about this site.",
    image: "",
    longDescription: "A historic neighbourhood featuring houses designed by various Stanford professors, opened in 1895. In collaboration with the Museum of American Heritage.",
    images: []
  },
  {
    id: "federal_telegraph_913_emerson",
    title: "Federal Telegraph Co. / Elwell Electronics Research Laboratory",
    lat: 37.441517,
    lng: -122.157419,
    category: "pre_silicon_valley",
    description: "The site of the core contributors to Silicon Valley's development, as early as 1909; it witnessed breakthroughs in wireless technology under Cyril F. Elwell. Click 'See More' to learn about this site.",
    image: "photos/elwell-1.JPG",
    longDescription: "To no the story of Federal Telegraph is to know the roots of Silicon Valley. Long before HP, or venture capital, or any Apple prototype, in an unassuming house on Emerson Street, history was being made. The laboratory on Emerson was founded by the Federal Telegraph Company: under the leadership of Cyril F. Elwell, a Stanford graduate, the Company gave Palo Alto its first taste of large, global industry as it developed naval communication technology in the Great War. But its even greater significance would be less conspicuous; the year was 1912, and early radio researcher Lee De Forest had made a groundbreaking discovery. He planned to exhibit it to the world. In a demonstration that is now famous, De Forest placed a pocketwatch whose ticks were quietly audible and connected it to his own invention: the triode vacuum tube, also known as the Audion. When he connected his Audion to a telephone earpiece -- which then fed into the horn of a record player -- he demoed for his audience his own shocking discovery: everyone in the room could hear the watch's ticks. Out of the tiny house on Emerson, he had made an advancement that had turned electronics from a theoretical field to a tangible one. However, Federal Telegraph's success also meant the end of its tenure in the small Palo Alto house; in 1916, it moved to a much larger facility on El Camino, and remained there until 1931, when operations were shifted to New Jersey to save costs. Still, over a century after De Forest's experiments, when a mobile phone call is second nature, it's important to recognise the significance of a small, plank-lined house that once lied on Emerson Street.",
    images: [
      { src: "photos/elwell-1.JPG", caption: "Credit: PAST Palo Alto" },
      { src: "photos/elwell-2.JPG", caption: "Credit: PAST Palo Alto" }
    ]
  },
  {
    id: "meta_hq",
    title: "Meta (Facebook) HQ",
    lat: 37.485073,
    lng: -122.148282,
    category: "silicon_valley",
    description: "A sprawling, 250-acre campus including more than 30 buildings, housing one of the world's largest companies. Click 'See More' to learn about this site.",
    image: "",
    longDescription: "",
    images: []
  },
  {
    id: "fairchild_semiconductor",
    title: "Site of Fairchild Semiconductor",
    lat: 37.421585,
    lng: -122.103307,
    category: "silicon_valley",
    description: "The laboratory wherein Dr. Robert Noyce invented the first the commercially viable integrated circuit in 1959. Click 'See More' to learn about this site.",
    image: "",
    longDescription: "Lying on old Charleston Road, a thoroughfare far older than the suburbs that now surround it, is a building that looks, at first glance -- exactly like the rest of the office-park Palo Alto suburb it's nestled in. Look closely, and you'll see a bronze plaque, albeit one perhaps too tedious to leave the car to read. But this office block is not like all the others; it is the birthplace of the technology within everything we can conceivably consider an electronic device: the commercial integrated circuit -- or microchip. Fairchild Semiconductor was founded in 1957 by the so-called 'Traitorous Eight' who broke away from nearby Shockley Semiconductor in order to pursue research into silicon semiconducting, which Shockley planned to discontinue. Two years later, Fairchild scientist Jean Hoerni unveiled his planar process, a step which would facilitate mass-production of transistors, once contraptions that required almost artisanal attention. After slightly over a week, Robert Noyce had successfully applied Hoerni's thought to his own discipline: he succeeded in making an integrated circuit that was practical and capable of mass-production. Later, when Noyce founded Intel in 1968, he would diffuse his technology throughout the world. Now, residing in every electronic device -- whether it be a phone, or a car, or a medical tool -- is a descendant of his prototype, born in an unassuming office off of East Charleston.",
    images: []
  },
  {
    id: "hp_hq",
    title: "HP Headquarters (1501 Page Mill Rd)",
    lat: 37.411904,
    lng: -122.149778,
    category: "silicon_valley",
    description: "The headquarters of Hewlett-Packard dating from 1957. Click 'See More' to learn about this site.",
    image: "",
    longDescription: "",
    images: []
  },
  {
    id: "museum_of_american_heritage",
    title: "Williams House (Museum of American Heritage)",
    lat: 37.444527,
    lng: -122.157476,
    category: "pre_silicon_valley",
    description: "Now the quaint Museum of American Heritage, the Bay Area's sole pre-digital era tech museum, the Williams House is a beautiful Tudor Revival house dating to 1907. Click 'See More' to learn about this site.",
    image: "photos/williams-house.PNG",
    longDescription: "Designed by famed Bay Area architect Ernest Coxhead, the Williams House was completed in 1907 -- for a sum total of $6000. It was the property of Dr. Thomas Marion Williams, his wife Dora Moody Williams, and their daughters Betty and Rhona. Throughout their lives, they remained prominent figures in the Peninsula. Dr. Tom was an early Palo Alto physician and Stanford Graduate; in 1904, he started his own medical practice. From 1908 to 1910, he served as Palo Alto's health officer, and he was a member of the city council from 1923 to 1926. He is also known for his series of early travelogues, indicative of a world rapidly globalising for those who could afford it. He travelled as far as India, Sumatra, and Egypt, filming sights as iconic as the Taj Mahal and the Suez Canal on 16mm film. His family house, which features a splendid 20th-century garden cultivated by Dora, was bequeathed to the City of Palo Alto in 1989. Now rented by the Museum of American Heritage, the House showcases the technolgical innovations of the era from which it was a part. In collaboration with the Museum of American Heritage.",
    images: ["photos/williams-house.PNG", "photos/williams-family.PNG", "photos/ernst-coxhead.PNG"]
  },
  {
    id: "shockley_boyhood_house",
    title: "William Shockley's Boyhood House (959 Waverley)",
    lat: 37.443505,
    lng: -122.154159,
    category: "pre_silicon_valley",
    description: "The house in which William Shockley, Nobel Prize winner and co-inventor of the transistor, was raised. Click 'See More' to learn about this site.",
    image: "",
    longDescription: "",
    images: []
  },
  {
    id: "varian_associates",
    title: "Varian Associates Building (Stanford Research Park)",
    lat: 37.417137,
    lng: -122.142911,
    category: "silicon_valley",
    description: "Considered by some to be the birthplace of Silicon Valley. The first tenant of the Stanford Research Park. Click 'See More' to learn about this site.",
    image: "",
    longDescription: "",
    images: []
  },
  {
    id: "xerox_parc",
    title: "Xerox PARC",
    lat: 37.402499,
    lng: -122.147288,
    category: "silicon_valley",
    description: "Considered by many to be the birthplace of modern computing, whose 1970s innovations changed the computing landscape. Click 'See More' to learn about this site.",
    image: "",
    longDescription: "",
    images: []
  },
  {
    id: "museum_of_american_heritage_test",
    title: "Williams House -- Test Location -- (Museum of American Heritage)",
    lat: 37.38323,
    lng: -122.09449,
    category: "pre_silicon_valley",
    description: "Now the quaint Museum of American Heritage, the Bay Area's sole pre-digital era tech museum, the Williams House is a beautiful Tudor Revival house dating to 1907. Click 'See More' to learn about this site.",
    image: "photos/williams-house.PNG",
    longDescription: "Designed by famed Bay Area architect Ernest Coxhead, the Williams House was completed in 1907 -- for a sum total of $6000. It was the property of Dr. Thomas Marion Williams, his wife Dora Moody Williams, and their daughters Betty and Rhona. Throughout their lives, they remained prominent figures in the Peninsula. Dr. Tom was an early Palo Alto physician and Stanford Graduate; in 1904, he started his own medical practice. From 1908 to 1910, he served as Palo Alto's health officer, and he was a member of the city council from 1923 to 1926. He is also known for his series of early travelogues, indicative of a world rapidly globalising for those who could afford it. He travelled as far as India, Sumatra, and Egypt, filming sights as iconic as the Taj Mahal and the Suez Canal on 16mm film. His family house, which features a splendid 20th-century garden cultivated by Dora, was bequeathed to the City of Palo Alto in 1989. Now rented by the Museum of American Heritage, the House showcases the technolgical innovations of the era from which it was a part. In collaboration with the Museum of American Heritage.",
    images: [
      { src: "photos/williams-house.PNG", caption: "The Williams House" },
      { src: "photos/williams-family.PNG", caption: "The Williams Family" },
      { src: "photos/ernst-coxhead.PNG", caption: "Architect Ernst Coxhead" }
    ]
  },

];
