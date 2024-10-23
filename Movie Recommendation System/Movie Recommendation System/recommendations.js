// Script for recommendations.html
document.addEventListener('DOMContentLoaded', function() {
    const moviesList = document.getElementById('carouselExampleIndicators');
    const getAnotherBtn = document.getElementById('get-another-btn');

    function getQueryParams() {
        const params = new URLSearchParams(window.location.search);
        return {
            genre: params.get('genre'),
            year: params.get('year'),
            industry: params.get('industry'),
            rating: params.get('rating')
        };
    }

    function recommendMovies(genre, year, industry,rating) {
        let recommended = [];

        if (movieDatabase[industry] && movieDatabase[industry][genre]) {
            recommended = movieDatabase[industry][genre];
        } else {
            console.error("No movies found for the selected industry and genre.");
            return [];
        }

        if (year && year !== "all") {
            if (year.includes('-')) {
                const [startYear, endYear] = year.split('-').map(Number);
                recommended = recommended.filter(movie => movie.year >= startYear && movie.year <= endYear);
            } else {
                recommended = recommended.filter(movie => movie.year == year);
            }
        }

        if (rating && rating !== "all") {
            recommended = recommended.filter(movie => movie.rating.toLowerCase() === rating.toLowerCase());
        }

        return recommended;
    }

    const { genre, year, industry,rating } = getQueryParams();

    let recommendedMovies = recommendMovies(genre, year, industry,rating);
    let currentIndex = 0;

    function displayMovies(startIndex, count) {
        moviesList.innerHTML = '';

        const moviesToDisplay = recommendedMovies.slice(startIndex, startIndex + count);
        var i = 1;
        moviesToDisplay.forEach(movie => {
            if(i==3){
                return;
            }
            i++;
            i=String(i)
            const movieDiv = document.getElementById(i);
            movieDiv.className = 'movie';
            movieDiv.innerHTML = `
                <img src="${movie.image}" alt="${movie.title}">
                <h3>${movie.title}</h3>
                <p><strong>Year: </strong> ${movie.year}</p>
                <p><strong>Genre: </strong>${movie.genre}</p>
                <p><strong>Rating: </strong>${movie.rating}</p>
                <p><strong>Synopsis: </strong>${movie.synopsis}</p>
            `;
            moviesList.appendChild(movieDiv);
        });
    }

    displayMovies(currentIndex, 2);

    getAnotherBtn.addEventListener('click', function() {
        currentIndex += 2;
        if (currentIndex >= recommendedMovies.length) {
            currentIndex = 0;
        }
        displayMovies(currentIndex, 2);
    });
});


// Sample movie database
const movieDatabase = {
    hollywood: {
        romance: [
            {
                "title": "Anyone but You",
                "genre": "Romance",
                "year": 2023,
                "rating":"3Star",
                "image": "images/anyone_but_you.jpg",
                "synopsis": "When former college enemies find themselves reunited on the beaches of Australia for a destination wedding, old grievances are reignited. Despite their initial reluctance, their mutual disdain gives way to a surprising, and passionate, romantic connection."
            },
            {
            "title": "La La Land",
                "genre": "Romance",
                "year": 2016,
                "rating":"4Star",
                "image": "images/la la land.jpeg",
                "synopsis": "In modern-day Los Angeles, aspiring actress Mia and dedicated jazz musician Sebastian are struggling to make ends meet. As they pursue their dreams, they meet and fall in love, navigating the highs and lows of their careers and relationship, each inspiring the other to chase their ambitions."
            },
            {
                "title": "Pride & Prejudice",
                "genre": "Romance",
                "rating":"3Star",
                "year": 2005,
                "image": "images/pride and prejudice.jpeg",
                "synopsis": "Elizabeth Bennet, a spirited and independent young woman, meets the wealthy and reserved Mr. Darcy. Despite their initial misjudgments, they grow to understand each other, discovering a love that transcends societal expectations and personal prejudices."
            },
            {
                "title": "Pretty Woman",
                "genre": "Romance",
                "rating":"3Star",
                "year": 1990,
                "image": "images/pretty woman.jpeg",
                "synopsis": "In this modern-day Cinderella story, a wealthy businessman, Edward Lewis, hires a prostitute, Vivian Ward, to accompany him to social events. Over the course of their arrangement, they develop a deep connection, challenging societal norms and transforming their lives."
            },
            {
                "title": "To All the Boys: Always and Forever",
                "genre": "Romance",
                "rating":"3Star",
                "year": 2021,
                "image": "images/to all the boys i loved_always and forever.png",
                "synopsis": "Lara Jean Covey's senior year of high school takes center stage as she contemplates her future and the changes that come with it. With her boyfriend, Peter, by her side, she navigates the challenges of growing up and making life-altering decisions about college and her relationships."
            },
            {
                "title": "The Fault in Our Stars",
                "genre": "Romance",
                "rating":"4Star",
                "year": 2014,
                "image": "images/the fault in our stars.jpeg",
                "synopsis": "Hazel Grace Lancaster, a teenager with cancer, meets and falls in love with Augustus Waters, a fellow cancer patient. Their shared journey of love, illness, and exploration of life’s deep questions unfolds with poignant beauty and heartbreaking reality."
            },
            {
                "title": "The Notebook",
                "genre": "Romance",
                "year": 2004,
                "rating":"4Star",
                "image": "images/the notebook.jpeg",
                "synopsis": "In the 1940s, wealthy young Allie Hamilton and poor boy Noah Calhoun fall deeply in love. However, societal expectations and family pressures pull them apart. Years later, their love story is rediscovered as Noah reads their tale to Allie, who is suffering from Alzheimer's disease."
            },
            {
                "title": "Sleepless in Seattle",
                "genre": "Romance",
                "year": 1993,
                "rating":"4Star",
                "image": "images/sleepless in seattle.jpeg",
                "synopsis": "After losing his wife, Sam Baldwin moves to Seattle with his young son, Jonah. Jonah calls a radio show to find a new wife for his dad, leading Sam to reluctantly share his story on air. This heartfelt plea captures the attention of Annie Reed, a reporter across the country, and sets them on a path towards love."
            },
            {
                "title": "Purple Hearts",
                "genre": "Romance",
                "year": 2022,
                "rating":"4Star",
                "image": "images/purple hearts.jpeg",
                "synopsis": "An aspiring singer-songwriter agrees to a marriage of convenience with a troubled Marine, despite their stark differences. As they navigate the challenges of military life and their personal struggles, they discover an unexpected bond and deep affection for each other."
            },
            {
                "title": "Me Before You",
                "genre": "Romance",
                "year": 2016,
                "rating":"3Star",
                "image": "images/me before you.jpeg",
                "synopsis": "Louisa Clark, a quirky and spirited young woman, becomes the caregiver for Will Traynor, a wealthy banker left paralyzed after an accident. Despite their differences, their relationship blossoms into a profound and life-changing connection that challenges both to live more fully."
            },
            {
                "title": "The Princess Diaries 2: Royal Engagement",
                "genre": "Romance",
                "year": 2004,
                "rating":"5Star",
                "image": "images/princess diaries 2.jpeg",
                "synopsis": "Mia Thermopolis, the young princess of Genovia, faces a new royal challenge when she is told she must marry before she can ascend to the throne. With a parade of suitors and unexpected romance, she navigates the complexities of love, duty, and her future as queen."
            },
            {
                "title": "Titanic",
                "genre": "Romance",
                "year": 1997,
                "rating":"5Star",
                "image": "images/titanic.jpeg",
                "synopsis": "A young aristocrat, Rose, and a struggling artist, Jack, find themselves on the ill-fated maiden voyage of the RMS Titanic. Their forbidden love story unfolds amidst the grandeur and impending disaster of the sinking ship, creating a timeless and tragic romance."
            },
            {
                "title": "Marry Me",
                "genre": "Romance",
                "year": 2022,
                "rating":"3Star",
                "image": "images/marry me.jpeg",
                "synopsis": "Pop superstar Kat Valdez plans to marry her fiancé on stage during a live concert. When she discovers his betrayal moments before the ceremony, she impulsively marries a stranger from the audience. This unexpected twist leads to a charming journey of love and self-discovery."
            },
            {
                "title": "Crazy Rich Asians",
                "genre": "Romance",
                "year": 2018,
                "rating":"3Star",
                "image": "images/crazy rich asians.jpeg",
                "synopsis": "Rachel Chu, an economics professor, accompanies her boyfriend, Nick Young, to his best friend's wedding in Singapore. She discovers that Nick comes from one of the wealthiest families in Asia, facing both the opulence and the disapproval of his formidable mother. Their love is tested amidst cultural expectations and societal pressures."
            },
            {
                "title": "A Walk to Remember",
                "genre": "Romance",
                "year": 2002,
                "rating":"4Star",
                "image": "images/a walk to remember.jpeg",
                "synopsis": "Rebellious high school student Landon Carter is forced to participate in the school play, where he meets the quiet and devout Jamie Sullivan. As they spend time together, Landon learns valuable lessons about love, faith, and the importance of being true to oneself."
            },
            {
                "title": "Jerry Maguire",
                "genre": "Romance",
                "year": 1996,
                "rating":"4Star",
                "image": "images/jerry maguire.jpeg",
                "synopsis": "Sports agent Jerry Maguire experiences a moral epiphany, leading to his dismissal from his prestigious firm. Striking out on his own with just one client and the support of a single mother, Dorothy Boyd, Jerry embarks on a journey of personal and professional redemption, discovering the true value of relationships and integrity."
            },
        ],
        comedy: [
            {
                "title": "Palm Springs",
                "genre": "Comedy",
                "year": 2020,
                "rating":"3Star",
                "image": "H-comedy/palm springs.jpeg",
                "synopsis": "Stuck in a time loop, carefree Nyles and reluctant maid of honor Sarah meet at a wedding in Palm Springs. As they relive the same day over and over, they develop a budding romance while discovering ways to break free from their repetitive reality."
            },
            {
                "title": "Pitch Perfect",
                "genre": "Comedy",
                "year": 2012,
                "rating":"4Star",
                "image": "H-comedy/pitch perfect.jpeg",
                "synopsis": "Beca, a college freshman, reluctantly joins The Barden Bellas, her university's all-girls a cappella group. Infusing the group with her unique style, they compete to reach the national championships, discovering friendship and the joy of music along the way."
            },
            {
                "title": "Legally Blonde",
                "genre": "Comedy",
                "year": 2001,
                "rating":"4Star",
                "image": "H-comedy/legally blonde.jpeg",
                "synopsis": "When fashion-savvy sorority girl Elle Woods is dumped by her boyfriend, she follows him to Harvard Law School to win him back. Surprising everyone, Elle discovers her own intelligence and legal prowess, proving that she's more than just a pretty face."
            },
            {
                "title": "Clueless",
                "genre": "Comedy",
                "year": 1995,
                "rating":"4Star",
                "image": "H-comedy/clueless.jpeg",
                "synopsis": "Cher Horowitz, a wealthy and popular high school student in Beverly Hills, navigates teenage life with style and flair. With her friend Dionne, Cher plays matchmaker and makeover artist, while learning valuable lessons about love, friendship, and self-awareness."
            },
            {
                "title": "Free Guy",
                "genre": "Comedy",
                "year": 2021,
                "rating":"5Star",
                "image": "H-comedy/free guy.jpeg",
                "synopsis": "Guy, a bank teller, discovers he's a non-playable character in a massively multiplayer online game. With the help of a mysterious woman named Molotov Girl, he becomes the hero of his own story, determined to save his virtual world from destruction."
            },  
            {
                "title": "Booksmart",
                "genre": "Comedy",
                "year": 2019,
                "rating":"4Star",
                "image": "H-comedy/booksmart.jpeg",
                "synopsis": "On the eve of their high school graduation, academic overachievers Amy and Molly realize they've missed out on the fun. Determined to make up for lost time, they embark on a wild adventure to cram four years of high school partying into one night."
            },
            {
                "title": "Wedding Crashers",
                "genre": "Comedy",
                "year": 2005,
                "rating":"3Star",
                "image": "H-comedy/wedding crashers.jpeg",
                "synopsis": "John and Jeremy, lifelong friends and divorce mediators, have a hobby of crashing weddings to meet women. Their plans go awry when John falls for Claire, the daughter of a wealthy politician, leading to a series of comedic and romantic complications."
            },
            {
                "title": "There’s Something About Mary",
                "genre": "Comedy",
                "year": 1998,
                "rating":"3Star",
                "image": "H-comedy/there's something about mary.jpeg",
                "synopsis": "Ted still pines for his high school crush, Mary, whom he never had a chance with after a disastrous prom night. Years later, he hires a private detective to track her down, only to find that everyone he meets is equally infatuated with her."
            },
            {
                "title": "Don’t Look Up",
                "genre": "Comedy",
                "year": 2021,
                "rating":"5Star",
                "image": "H-comedy/don't look up.jpeg",
                "synopsis": "Two low-level astronomers discover a comet on a collision course with Earth, threatening to destroy the planet. As they embark on a media tour to warn humanity, they encounter a world more interested in pop culture and politics than their dire prediction."
            },
            {
                "title": "Crazy Rich Asians",
                "genre": "Comedy",
                "year": 2018,
                "rating":"5Star",
                "image": "H-comedy/crazy rich asians.jpeg",
                "synopsis": "Rachel Chu accompanies her boyfriend, Nick Young, to his best friend's wedding in Singapore, only to discover he's from one of the wealthiest families in Asia. Navigating the opulence and disapproval of Nick's mother, Rachel must prove she's more than just an outsider."
            },
            {
                "title": "Knocked Up",
                "genre": "Comedy",
                "year": 2007,
                "rating":"5Star",
                "image": "H-comedy/knocked up.jpeg",
                "synopsis": "A one-night stand between carefree Ben and ambitious Alison leads to an unexpected pregnancy. As they try to navigate the challenges of impending parenthood, their clashing lifestyles and personalities create a comedic yet heartfelt journey towards understanding and commitment."
            },
            {
                "title": "Dumb and Dumber",
                "genre": "Comedy",
                "year": 1994,
                "rating":"5Star",
                "image": "H-comedy/dumb and dumber.jpeg",
                "synopsis": "Dim-witted best friends Lloyd and Harry embark on a cross-country road trip to return a briefcase full of money to its rightful owner, unaware it's intended as ransom. Their journey is filled with hilarious mishaps and misunderstandings, showcasing their profound, if misguided, loyalty."
            },
            {
                "title": "The Lovebirds",
                "genre": "Comedy",
                "year": 2020,
                "rating":"3Star",
                "image": "H-comedy/the lovebirds.jpeg",
                "synopsis": "A couple on the verge of breaking up accidentally become embroiled in a murder mystery. As they try to clear their names and solve the case, they rediscover why they fell in love in the first place, blending romance and comedy with thrilling escapades."
            },
            {
                "title": "21 Jump Street",
                "genre": "Comedy",
                "year": 2012,
                "rating":"4Star",
                "image": "H-comedy/21 jump street.jpeg",
                "synopsis": "Schmidt and Jenko, two underachieving cops, are sent back to high school to infiltrate a drug ring. Posing as students, they relive their teenage years with hilarious consequences, discovering the differences between their past and present selves."
            },
            {
                "title": "The 40-Year-Old Virgin",
                "genre": "Comedy",
                "year": 2005,
                "rating":"4Star",
                "image": "H-comedy/the 40 year old virgin.jpeg",
                "synopsis": "Shy electronics store employee Andy Stitzer reveals he's never had sex at age 40. His well-meaning friends embark on a mission to help him lose his virginity, leading to a series of humorous and awkward situations, while Andy learns about love and self-acceptance."
            },
            {
                "title": "The Mask",
                "genre": "Comedy",
                "year": 1994,
                "rating":"4Star",
                "image": "H-comedy/the mask.jpeg",
                "synopsis": "Bank clerk Stanley Ipkiss discovers a magical mask that transforms him into a zany, green-faced superhero with extraordinary powers. As The Mask, he attracts the attention of gangster Dorian Tyrell and the beautiful singer Tina Carlyle, leading to a whirlwind of comic adventures."
            }                                                                                          
        ],
        rocketscience:[
            {
            "title":"Dune",
            "genre":"Rocket-Science",
            "year": 2021,
            "rating":"5Star",
            "image":"H-drama/dune.jpeg",
            "synopsis":"Dune, science fiction novel by American author Frank Herbert, serialized in Analog from 1963 to 1965 and then published in book form later in 1965. Dune follows young nobleman Paul Atreides through adversity to his destiny as a messianic leader on the arid desert planet Arrakis."
            },
            {
                "title":"Stowaway",
                "genre":"Rocket-Science",
                "year": 2021,
                "rating":"3Star",
                "image":"H-drama/Stowaway.jpeg",
                "synopsis":"Stowaway is a 2021 sci-fi drama thriller film directed by Joe Penna, who co-wrote the screenplay with Ryan Morrison. It stars Anna Kendrick, Daniel Dae Kim, Shamier Anderson and Toni Collette. A co-production of the United States and Germany, it premiered on Netflix in select countries on April 22, 2021."   
            },
            {
                "title":"The Midnight Sky",
                "genre":"Rocket-Science",
                "year": 2020,
                "rating":"3Star",
                "image":"H-drama/The_midnight_sky.jpg",
                "synopsis":"The Midnight Sky is a 2020 American science fiction film directed by George Clooney based on the 2016 novel Good Morning, Midnight by Lily Brooks-Dalton. The script was written by Mark L. Smith. Clooney plays a leading role in his film, as an aging scientist who must venture across the frigid Arctic Circle to warn off a returning interplanetary spaceship following a global catastrophe on Earth. Felicity Jones, David Oyelowo, Tiffany Boone, Demián Bichir, Kyle Chandler, and Caoilinn Springall also star."
            },
            {
                "title":" Lucy In The Sky",
                "genre":"Rocket-Science",
                "year": 2019,
                "rating":"5Star",
                "image":"H-drama/Lucky_in_the_sky.jpg",
                "synopsis":"Natalie Portman stars in a drama that is loosely based on the case of Lisa Nowak, the Nasa astronaut who was disgraced after attacking the girlfriend of her ex-lover. The feature debut from Noah Hawley pushes the idea that, once someone has ventured into space, readjusting to life back on Earth can be a struggle."
            },
            {
                "title":"MoonFall",
                "genre":"Rocket-Science",
                "year": 2022,
                "rating":"4Star",
                "image":"H-comedy/Moonfall.jpg",
                "synopsis":"Moonfall is, without a doubt, one of the stupidest movies ever made. Yet, it so gloriously 100% commits to its whirlwind of logic-defying hokey conspiracy theory-inspired nonsense that it sucks the audience into its vortex for a vastly entertaining ride"
            },
            {
                "title":"Proximity",
                "genre":"Rocket-Science",
                "year": 2020,
                "rating":"4Star",
                "image":"H-horror/Proximity.jpg",
                "synopsis":"Proximity is a 2020 American science fiction drama film written and directed by Eric Demeusy in his directorial debut.[1] The film stars Ryan Masson, Highdee Kuan, Christian Prentice, and Shaw Jones. Proximity was released on demand on May 15, 2020, and received mixed reviews from critics."
            },
            {
                "title":"Life",
                "genre":"Rocket-Science",
                "year": 2017,
                "rating":"3Star",
                "image":"H-horror/Life.jpg",
                "synopsis":"As astronauts discover the first evidence of extra-terrestrial life on Mars, they begin realising that the life form is extremely intelligent and hostile." 
            },
            {
                "title":"Apollo18",
                "genre":"Rocket-Science",
                "year": 2011,
                "rating":"3Star",
                "image":"H-horror/Apollo18.jpg",
                "synopsis":"Three astronauts are sent by the US for lunar explorations. While collecting moon rock samples, the astronauts encounter eerie happenings, which prevents their return journey to Earth."
            },
            { 
                "title":"The Space Between Us",
                "genre":"Rocket-Science",
                "year": 2017,
                "rating":"4Star",
                "image":"H-comedy/The_space_between_us.jpg",
                "synopsis":"Sarah Elliot, an astronaut, dies on Mars while giving birth to her son. The boy visits Earth and starts searching for his father with the help of a clever girl"   
            },
            {
                "title":"Gravity",
                "genre":"Rocket-Science",
                "year": 2013,
                "rating":"4Star",
                "image":"H-drama/Gravity.jpg",
                "synopsis":"Dr Ryan Stone, an engineer on her first time on a space mission, and Matt Kowalski, an astronaut on his final expedition, have to survive in space after they are hit by debris while spacewalking."
            },
            {
                "title":"The Martian",
                "genre":"Rocket-Science",
                "year": 2015,
                "rating":"5Star",
                "image":"H-drama/The_martian.jpg",
                "synopsis":"Mark Watney, an astronaut, strives to survive in Mars when a space mission goes wrong. While he undergoes different challenges, his colleagues in NASA exhaust all options to bring him home. "
            },
            {
                "title":"Alita:Battle Angel",
                "genre":"Rocket-Science",
                "year": 2019,
                "rating":"5Star",
                "image":"H-action/Alita.webp",
                "synopsis":"Alita, a battle cyborg, is revived by Ido, a doctor, who realises that she actually has the soul of a teenager. Alita then sets out to learn about her past and find her true identity."
            },
            {
                "title":"The Day After Tommorrow",
                "genre":"Rocket-Science",
                "year": 2004,
                "rating":"5Star",
                "image":"H-action/The_day_after.jpg",
                "synopsis":"When a sudden worldwide storm begins to plunge the entire planet into a new ice age, paleoclimatologist Jack Hall undertakes a dangerous trek to New York City to save his son from the disaster."
            },
            {
                "title":"Transformers",
                "genre":"Rocket-Science",
                "year": 2007,
                "rating":"5Star",
                "image":"H-action/Transformes.jpg",
                "synopsis":"Autobots and Decepticons, races from outer space, engage in a humongous and fierce battle on planet Earth. The Autobots enlist the help of a teenager, Sam, to win the battle against the Decepticons. "
            },
            {
                "title":"The Core",
                "genre":"Rocket-Science",
                "year": 2003,
                "rating":"3Star",
                "image":"H-action/The_core.jpeg",
                "synopsis":"Geophysicist Dr. Josh Keyes gets shocked when he realises that an unidentified force has caused the Earth's inner core to stop rotating. To save the Earth from ruin, he needs to reactivate the core."
            },
            {
                "title":"Pandorum",
                "genre":"Rocket-Science",
                "year": 2009,
                "rating":"4Star",
                "image":"H-horror/Pandorum.webp",
                "synopsis":"Two astronauts wake up in what seems like a pitch-black spacecraft. Disorientated and unable to remember who they are or what their mission was, they discover that they are not alone."
            },
            {
                "title":"Pitch Black",
                "genre":"Rocket-Science",
                "year": 2000,
                "rating":"4Star",
                "image":"H-horror/Pitch_black.jpeg",
                "synopsis":"A spaceship full of passengers find themselves stranded on a planet inhabited by nocturnal monsters during an eclipse. The only person they can rely on is a dangerous convict named Richard B Riddick."
            },
            {
                "title":"Space CowBoys",
                "genre":"Rocket-Science",
                "year": 2000,
                "rating":"3Star",
                "image":"H-comedy/Space_cowboys.jpg",
                "synopsis":"When a retired engineer is called upon to rescue a failing satellite, he insists that his equally old teammates accompany him into space."
            },
            {
                "title":"Total Recall",
                "genre":"Rocket-Science",
                "year": 1990,
                "rating":"3Star",
                "image":"H-action/Total_recall.jpeg",
                "synopsis":" Douglas Quaid tries to find the reason behind his recurring dream about Mars. He soon learns that a false memory has been planted into his brain and the people responsible for this want him dead. "
            },
            {
                "title":"Independence Day",
                "genre":"Rocket-Science",
                "year": 1996,
                "rating":"4Star",
                "image":"H-action/Independence_day.jpg",
                "synopsis":"An alien race destroys major cities of the world with their advanced weaponry. However, a geek, a pilot, the US President and a group of ragtag survivors unite to save mankind from annihilation."

            },
            {
                
                "title":"Species",
                "genre":"Rocket-Science",
                "year": 1995,
                "rating":"3Star",
                "image":"H-horror/Species.jpeg",
                "synopsis":"A team of scientists must track down Sil, an alien seductress, before she can mate with a human and resultingly cause the destruction of all humanity."
            },
            {
                "title":"The Right Stuff",
                "genre":"Rocket-Science",
                "year": 1990,
                "rating":"5Star",
                "image":"H-drama/The_right_stuff.jpg",
                "synopsis":"As the Space Race ensues, seven pilots set off on a path to become the first American astronauts to enter space. However, the road to making history brings forth momentous challenges."
            },
            {
                "title":"Deep Impact",
                "genre":"Rocket-Science",
                "year": 1998,
                "rating":"4Star",
                "image":"H-drama/Deep_impact.webp",
                "synopsis":"According to predictions, a deadly comet will strike earth and destroy humanity. US President Beck comes up with a plan and starts building a network of caves to accommodate one million Americans"
            },
            {
                "title":"Galaxy Quest",
                "genre":"Rocket-Science",
                "year": 1999,
                "rating":"5Star",
                "image":"H-comedy/Galaxy_quest.jpg",
                "synopsis":"Jason Nesmith, the star of a television series receives a call for help from a group of aliens. Now, he and his co-stars have to defend the aliens against an alien warlord."
            },
        
        ],
        drama: [
            {
                "title": "Promising Young Woman",
                "genre": "Drama",
                "year": 2020,
                "rating":"5Star",
                "image": "H-drama/promising young woman.jpeg",
                "synopsis": "Cassie Thomas leads a double life by night, confronting wrongdoers in bars. Traumatized by a tragic event from her past, she seeks revenge against those responsible. As she embarks on a quest for justice, Cassie's actions blur the lines between vengeance and redemption."
            },
            {
                "title": "12 Years a Slave",
                "genre": "Drama",
                "year": 2013,
                "rating":"5Star",
                "image": "H-drama/12 years a slave.jpeg",
                "synopsis": "In pre-Civil War America, Solomon Northup, a free black man from New York, is abducted and sold into slavery. Enduring unimaginable hardships, Solomon fights to retain his dignity and freedom in a struggle that lasts twelve years, until he finally reunites with his family."
            },
            {
                "title": "Million Dollar Baby",
                "genre": "Drama",
                "year": 2004,
                "rating":"5Star",
                "image": "H-drama/million dollar baby.jpeg",
                "synopsis": "Under the mentorship of veteran trainer Frankie Dunn, Maggie Fitzgerald, a determined amateur boxer, rises through the ranks. Their deepening bond is tested as they face challenges both in and out of the ring, leading to a profound and heartrending journey."
            },
            {
                "title": "Goodfellas",
                "genre": "Drama",
                "year": 1990,
                "rating":"4Star",
                "image": "H-drama/goodfellas.jpeg",
                "synopsis": "Henry Hill's life in the mob unfolds over three decades, showcasing the glamour and violence of organized crime. Starting as a young errand boy, Henry rises through the ranks, but the allure of power and wealth comes at a steep price."
            },
            {
                "title": "The Father",
                "genre": "Drama",
                "year": 2020,
                "rating":"5Star",
                "image": "H-drama/the father.jpeg",
                "synopsis": "Anthony, an elderly man grappling with dementia, struggles to make sense of his changing environment. As his daughter Anne tries to care for him, the film portrays Anthony's disorienting reality, where time, memory, and identity blur in a poignant exploration of aging and family."
            },
            {
                "title": "Room",
                "genre": "Drama",
                "year": 2015,
                "rating":"4Star",
                "image": "H-drama/room.jpeg",
                "synopsis": "After years of captivity in a small, confined space, Ma and her young son Jack escape from their prison. As they navigate the outside world, both struggle to adjust to freedom and rebuild their lives, while finding hope and resilience in each other."
            },
            {
                "title": "No Country for Old Men",
                "genre": "Drama",
                "year": 2007,
                "rating":"5Star",
                "image": "H-drama/no country for old men.jpeg",
                "synopsis": "When Llewelyn Moss stumbles upon a drug deal gone wrong and a suitcase of cash, he sets off a deadly chain of events. Pursued by relentless hitman Anton Chigurh and aging sheriff Ed Tom Bell, the ensuing cat-and-mouse game tests the limits of fate and morality."
            },
            {
                "title": "Schindler’s List",
                "genre": "Drama",
                "year": 1993,
                "rating":"5Star",
                "image": "H-drama/schindler's list.jpeg",
                "synopsis": "Oskar Schindler, a German businessman, saves the lives of over a thousand Jewish refugees during the Holocaust by employing them in his factories. This powerful true story depicts his transformation from opportunist to hero, amidst the horrors of World War II."
            },
            {
                "title": "Dune",
                "genre": "Drama",
                "year": 2021,
                "rating":"4Star",
                "image": "H-drama/dune.jpeg",
                "synopsis": "Paul Atreides, a young noble, faces danger and destiny on the desert planet Arrakis. As his family battles for control of the spice-rich world, Paul discovers his own extraordinary potential, intertwined with the fate of the planet and its inhabitants."
            },
            {
                "title": "The Descendants",
                "genre": "Drama",
                "year": 2011,
                "rating":"4Star",
                "image": "H-drama/the descendents.jpeg",
                "synopsis": "Matt King, a Honolulu-based lawyer, grapples with his wife’s coma and impending death. As he reconnects with his daughters and uncovers a family secret, Matt embarks on a journey of reconciliation and self-discovery, amidst the beauty and complexity of Hawaiian life."
            },
            {
                "title": "There Will Be Blood",
                "genre": "Drama",
                "year": 2007,
                "rating":"5Star",
                "image": "H-drama/there will be blood.jpeg",
                "synopsis": "In early 20th-century California, ruthless oilman Daniel Plainview pursues wealth at any cost. His obsessive quest for power and dominance, coupled with his strained relationships, lead to a dramatic and destructive clash with a young preacher and his own morality."
            },
            {
                "title": "Forrest Gump",
                "genre": "Drama",
                "year": 1994,
                "rating":"5Star",
                "image": "H-drama/forrest gump.jpeg",
                "synopsis": "Forrest Gump, a kind-hearted man with a low IQ, recounts his extraordinary life journey, from running across America to fighting in Vietnam. Despite his simplicity, Forrest's unwavering love for his childhood sweetheart, Jenny, and his impact on history create a heartwarming tale."
            },
            {
                "title": "King Richard",
                "genre": "Drama",
                "year": 2021,
                "rating":"4Star",
                "image": "H-drama/king richard.jpeg",
                "synopsis": "Richard Williams, the father of tennis prodigies Venus and Serena Williams, develops a plan to turn his daughters into champions. Despite facing adversity, his unwavering belief and unconventional methods propel the girls from Compton to international stardom."
            },
            {
                "title": "The Help",
                "genre": "Drama",
                "year": 2011,
                "rating":"5Star",
                "image": "H-drama/the help.jpeg",
                "synopsis": "In 1960s Mississippi, aspiring writer Skeeter Phelan interviews African American maids, exposing the racism and hardships they endure. As she compiles their stories, the maids and Skeeter confront societal norms and foster change in their segregated community."
            },
            {
                "title": "The Curious Case of Benjamin Button",
                "genre": "Drama",
                "year": 2008,
                "rating":"4Star",
                "image": "H-drama/benjamin button.jpeg",
                "synopsis": "Benjamin Button ages backward, born as an elderly man and growing younger with time. His extraordinary life story intertwines with Daisy, the love of his life, as they navigate the challenges and joys of living in opposite directions."
            },
            {
                "title": "The Truman Show",
                "genre": "Drama",
                "year": 1998,
                "rating":"4Star",
                "image": "H-drama/truman show.jpeg",
                "synopsis": "Truman Burbank leads an ordinary life, unaware that his every move is broadcasted to millions. As he starts to question his reality, Truman embarks on a quest for truth and freedom, defying the carefully constructed world of his televised existence."
            }             
        ],
        horror: [
                {
                    "title": "The Lodge",
                    "genre": "Horror",
                    "year": 2020,
                    "rating":"3Star",
                    "image": "H-horror/the lodge.jpeg",
                    "synopsis": "Isolated in a remote winter cabin, a soon-to-be stepmother is trapped with her fiancé's two children. As strange occurrences unfold, buried secrets emerge, leading them into a terrifying psychological spiral where reality and nightmare blur."
                },
                {
                    "title": "Get Out",
                    "genre": "Horror",
                    "year": 2017,
                    "rating":"5Star",
                    "image": "H-horror/get out.jpeg",
                    "synopsis": "Chris visits his girlfriend's family estate, where unsettling discoveries lead to a shocking truth. This thrilling social commentary on racism and exploitation delves into the sinister underbelly of seemingly idyllic suburban life."
                },
                {
                    "title": "Saw",
                    "genre": "Horror",
                    "year": 2004,
                    "rating":"4Star",
                    "image": "H-horror/saw.jpeg",
                    "synopsis": "Two men awaken chained in a dilapidated bathroom, victims of the sadistic serial killer Jigsaw. Faced with gruesome choices and puzzles, they must find a way to escape his deadly game or face a horrifying fate."
                },
                {
                    "title": "Sleepy Hollow",
                    "genre": "Horror",
                    "year": 1999,
                    "rating":"4Star",
                    "image": "H-horror/sleepy hollow.jpeg",
                    "synopsis": "In 1799, New York constable Ichabod Crane is sent to the village of Sleepy Hollow to investigate a series of gruesome beheadings. He confronts the legend of the Headless Horseman and uncovers dark secrets lurking in the town."
                },
                {
                    "title": "The Conjuring: The Devil Made Me Do It",
                    "genre": "Horror",
                    "year": 2021,
                    "rating":"3Star",
                    "image": "H-horror/the conjuring 3.jpeg",
                    "synopsis": "Paranormal investigators Ed and Lorraine Warren tackle one of their most sensational cases involving a murder suspect who claims demonic possession. As they delve deeper, they confront dark forces threatening their own lives."
                },
                {
                    "title": "A Quiet Place",
                    "genre": "Horror",
                    "year": 2018,
                    "rating":"4Star",
                    "image": "H-horror/the quiet place.jpeg",
                    "synopsis": "In a post-apocalyptic world, a family must live in silence to avoid being hunted by blind creatures with acute hearing. Their survival hinges on their ability to communicate without sound, navigating a world where the slightest noise can be deadly."
                },
                {
                    "title": "Final Destination",
                    "genre": "Horror",
                    "year": 2000,
                    "rating":"4Star",
                    "image": "H-horror/final destination.jpeg",
                    "synopsis": "After narrowly escaping a fatal plane crash, a group of teenagers realizes they are being hunted by Death itself. One by one, they succumb to bizarre and terrifying accidents, as they try to cheat their fates."
                },
                {
                    "title": "The Sixth Sense",
                    "genre": "Horror",
                    "year": 1999,
                    "rating":"5Star",
                    "image": "H-horror/the sixth sense.jpeg",
                    "synopsis": "Child psychologist Dr. Malcolm Crowe helps a young boy who claims to see and communicate with the dead. As their relationship deepens, startling revelations unfold, leading to a shocking twist that changes everything."
                },
                {
                    "title": "Candyman",
                    "genre": "Horror",
                    "year": 2021,
                    "rating":"3Star",
                    "image": "H-horror/candyman.jpeg",
                    "synopsis": "Visual artist Anthony McCoy explores the legend of Candyman, a vengeful spirit summoned by saying his name five times in a mirror. As Anthony delves deeper, he uncovers a terrifying connection to the urban myth and his own past."
                },
                {
                    "title": "The Conjuring",
                    "genre": "Horror",
                    "year": 2013,
                    "rating":"4Star",
                    "image": "H-horror/the conjuring.jpeg",
                    "synopsis": "Paranormal investigators Ed and Lorraine Warren assist the Perron family, who are terrorized by dark forces in their Rhode Island farmhouse. The Warrens confront a powerful entity, testing their faith and courage in this chilling supernatural thriller."
                },
                {
                    "title": "The Hills Have Eyes",
                    "genre": "Horror",
                    "year": 2006,
                    "rating":"3Star",
                    "image": "H-horror/the hills have eyes.jpeg",
                    "synopsis": "A family on a road trip becomes stranded in the desert, where they are hunted by a clan of mutated cannibals. Fighting for their lives, they must outwit their relentless attackers in a brutal struggle for survival."
                },
                {
                    "title": "The Faculty",
                    "genre": "Horror",
                    "year": 1998,
                    "rating":"3Star",
                    "image": "H-horror/the faculty.jpeg",
                    "synopsis": "Students at Herrington High discover their teachers are being taken over by parasitic aliens. As they uncover the invasion, they band together to fight the extraterrestrial threat before it's too late."
                },
                {
                    "title": "Antlers",
                    "genre": "Horror",
                    "year": 2021,
                    "rating":"3Star",
                    "image": "H-horror/antlers.jpeg",
                    "synopsis": "In a small Oregon town, a teacher and her sheriff brother uncover a mysterious and sinister entity connected to a young boy's disturbing behavior. They must confront ancient folklore to protect the boy and their community."
                },
                {
                    "title": "Insidious",
                    "genre": "Horror",
                    "year": 2010,
                    "rating":"4Star",
                    "image": "H-horror/insidious.jpeg",
                    "synopsis": "When their son falls into a mysterious coma, the Lambert family discovers that his spirit is trapped in a realm called The Further. They must delve into the supernatural to bring him back and confront the malevolent forces that threaten their family."
                },
                {
                    "title": "The Ring",
                    "genre": "Horror",
                    "year": 2002,
                    "rating":"3Star",
                    "image": "H-horror/the ring.jpeg",
                    "synopsis": "Journalist Rachel Keller investigates a mysterious videotape that causes viewers to die seven days after watching it. Racing against time, she uncovers the tape's dark origins and the vengeful spirit behind it."
                },
                {
                    "title": "Scream",
                    "genre": "Horror",
                    "year": 1996,
                    "rating":"5Star",
                    "image": "H-horror/scream.jpeg",
                    "synopsis": "In the small town of Woodsboro, a masked killer targets high school students, following horror movie rules. Sidney Prescott and her friends become the latest victims, trying to survive while unraveling the killer's identity."
                }
            ],
        action: [
                {
                    "title": "Godzilla vs. Kong",
                    "genre": "Action",
                    "year": 2021,
                    "rating":"4Star",
                    "image": "H-action/godzilla vs kong.jpeg",
                    "synopsis": "In a battle of epic proportions, Godzilla and Kong clash as ancient adversaries. Humanity's fate hangs in the balance as the two legendary titans embark on a fierce face-off, revealing secrets about their origins and a sinister conspiracy threatening to destroy them both."
                },
                {
                    "title": "Mad Max: Fury Road",
                    "genre": "Action",
                    "year": 2015,
                    "rating":"4Star",
                    "image": "H-action/mad max.jpeg",
                    "synopsis": "In a post-apocalyptic wasteland, Imperator Furiosa joins forces with Max Rockatansky to escape a tyrannical warlord and his army. Together, they embark on a high-octane road battle to liberate a group of enslaved women in a daring chase across the desert."
                },
                {
                    "title": "Avatar",
                    "genre": "Action",
                    "year": 2009,
                    "rating":"5Star",
                    "image": "H-action/avatar.jpeg",
                    "synopsis": "Jake Sully, a paraplegic marine, becomes part of the Avatar Program on Pandora, a lush, distant moon inhabited by the Na'vi. As he infiltrates the indigenous culture, Jake falls in love with Neytiri and must choose between following orders and protecting his new world."
                },
                {
                    "title": "The Rock",
                    "genre": "Action",
                    "year": 1996,
                    "rating":"4Star",
                    "image": "H-action/the rock.jpeg",
                    "synopsis": "When rogue soldiers seize Alcatraz and threaten San Francisco with chemical weapons, the FBI enlists a chemical weapons specialist and a former British spy to thwart the terrorists' deadly plot. They must navigate treacherous terrain and defuse the situation before it's too late."
                },
                {
                    "title": "Spider-Man: No Way Home",
                    "genre": "Action",
                    "year": 2021,
                    "rating":"5Star",
                    "image": "H-action/spiderman NWH.jpeg",
                    "synopsis": "Peter Parker's life is turned upside down when his identity as Spider-Man is revealed, bringing chaos and danger to his world. With the help of Doctor Strange, he embarks on a perilous journey across the multiverse, confronting powerful foes and facing a destiny that alters reality."
                },
                {
                    "title": "John Wick",
                    "genre": "Action",
                    "year": 2014,
                    "rating":"4Star",
                    "image": "H-action/john wick.jpeg",
                    "synopsis": "Legendary hitman John Wick comes out of retirement to seek vengeance against those who wronged him. With a hefty bounty on his head, he battles relentless adversaries in a thrilling game of survival and revenge, leaving a trail of bloodshed in his wake."
                },
                {
                    "title": "Spider-Man",
                    "genre": "Action",
                    "year": 2002,
                    "rating":"5Star",
                    "image": "H-action/spider man.jpeg",
                    "synopsis": "High school student Peter Parker gains spider-like abilities and transforms into Spider-Man after being bitten by a genetically altered spider. As he grapples with newfound powers, he faces the responsibility of protecting New York City from the menacing Green Goblin."
                },
                {
                    "title": "The Matrix",
                    "genre": "Action",
                    "year": 1999,
                    "rating":"4Star",
                    "image": "H-action/the matrix.jpeg",
                    "synopsis": "Computer hacker Neo discovers the truth about his reality as a slave to sentient machines. Recruited by rebels Morpheus and Trinity, Neo embarks on a mind-bending journey to liberate humanity from the simulated reality of the Matrix, where nothing is as it seems."
                },
                {
                    "title": "No Time To Die",
                    "genre": "Action",
                    "year": 2021,
                    "rating":"4Star",
                    "image": "H-action/no time to die.jpeg",
                    "synopsis": "Retired MI6 agent James Bond returns to active duty when a scientist is abducted, unleashing a perilous chain of events. As Bond confronts a ruthless adversary, he faces betrayal and must navigate a web of deceit while risking everything to save the world from a catastrophic threat."
                },
                {
                    "title": "Mission: Impossible - Ghost Protocol",
                    "genre": "Action",
                    "year": 2011,
                    "rating":"4Star",
                    "image": "H-action/mission impossible.jpeg",
                    "synopsis": "Ethan Hunt and his team are disavowed after a terrorist bombing implicates the IMF. Pursuing the mastermind behind the attack, they embark on a global mission to clear their names and prevent a nuclear catastrophe, navigating high-stakes espionage and death-defying exploits."
                },
                {
                    "title": "The Fast and The Furious",
                    "genre": "Action",
                    "year": 2001,
                    "rating":"3Star",
                    "image": "H-action/the fast and the furious.jpeg",
                    "synopsis": "Undercover cop Brian O'Conner infiltrates the street racing scene to apprehend a gang suspected of hijacking trucks. Immersed in the world of illegal racing, he forms an unlikely bond with charismatic racer Dominic Toretto, blurring the lines between duty and loyalty."
                },
                {
                    "title": "Shang-Chi and the Legend of the Ten Rings",
                    "genre": "Action",
                    "year": 2021,
                    "rating":"5Star",
                    "image": "H-action/shang chi.jpeg",
                    "synopsis": "Shang-Chi confronts his past when he is drawn into the clandestine Ten Rings organization, controlled by his father Wenwu. With the fate of the world at stake, he must embrace his true identity as he battles powerful forces and unravels the secrets of his family's legacy."
                },
                {
                    "title": "The Dark Knight Rises",
                    "genre": "Action",
                    "year": 2012,
                    "rating":"4Star",
                    "image": "H-action/the dark knight rises.jpeg",
                    "synopsis": "Eight years after the Joker's reign of anarchy, Batman resurfaces to protect Gotham City from a new threat. Facing the enigmatic Bane and ally Catwoman, Batman must confront his own demons and make the ultimate sacrifice to save the city he swore to protect."
                },
                {
                    "title": "The Dark Knight",
                    "genre": "Action",
                    "year": 2008,
                    "rating":"5Star",
                    "image": "H-action/the dark knight.jpeg",
                    "synopsis": "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice."
                },
                {
                    "title": "Die Hard 2: Die Harder",
                    "genre": "Action",
                    "year": 1990,
                    "rating":"4Star",
                    "image": "H-action/die hard 2.jpeg",
                    "synopsis": "Off-duty cop John McClane faces another Christmas crisis when terrorists seize Washington Dulles International Airport. McClane battles a rogue military commander and his mercenaries, racing against time to prevent disaster and save his wife and fellow hostages."
                }
            ]
        },
    bollywood: {
        romance: [
                {
                    "title": "Atrangi Re",
                    "genre": "Romance",
                    "year": 2021,
                    "rating":"4Star",
                    "image": "B-romance/atrangi re.jpeg",
                    "synopsis": "A quirky love story unfolds when a married woman falls in love with a young man, and they embark on an unusual journey of love, heartbreak, and self-discovery."
                },
                {
                    "title": "Dear Zindagi",
                    "genre": "Romance",
                    "year": 2016,
                    "rating":"4Star",
                    "image": "B-romance/dear zindagi.jpeg",
                    "synopsis": "A young cinematographer struggles with complex relationships in her life, seeking guidance from a free-spirited therapist who helps her unravel life's challenges and find inner peace."
                },
                {
                    "title": "Veer-Zaara",
                    "genre": "Romance",
                    "year": 2004,
                    "rating":"5Star",
                    "image": "B-romance/veer-zaara.jpeg",
                    "synopsis": "An epic love story unfolds when an Indian Air Force pilot and a Pakistani woman fall in love, defying borders and societal norms, only to be separated by a tragic twist of fate."
                },
                {
                    "title": "Hum Dil De Chuke Sanam",
                    "genre": "Romance",
                    "year": 1999,
                    "rating":"3Star",
                    "image": "B-romance/hum dil de chuke sanam.jpeg",
                    "synopsis": "A passionate love triangle ensues when a young woman is torn between her arranged marriage and her love for another man, leading to emotional turmoil and heart-wrenching decisions."
                },
                {
                    "title": "Dil Bechara",
                    "genre": "Romance",
                    "year": 2020,
                    "rating":"5Star",
                    "image": "B-romance/dil bechara.jpeg",
                    "synopsis": "Two terminally ill teenagers form a deep bond as they embark on an emotional journey of love, friendship, and hope, inspired by their favorite movie and a shared zest for life."
                },
                {
                    "title": "2 States",
                    "genre": "Romance",
                    "year": 2014,
                    "rating":"3Star",
                    "image": "B-romance/2 states.jpeg",
                    "synopsis": "A cross-cultural love story unfolds when a North Indian boy and a South Indian girl fall in love, navigating cultural differences and family expectations in their quest for happiness."
                },
                {
                    "title": "Jab We Met",
                    "genre": "Romance",
                    "year": 2007,
                    "rating":"5Star",
                    "image": "B-romance/jab we met.jpeg",
                    "synopsis": "A chance encounter leads to a whirlwind romance between a vivacious girl and a despondent businessman, as they embark on a transformative journey of self-discovery and true love."
                },
                {
                    "title": "Dil",
                    "genre": "Romance",
                    "year": 1990,
                    "rating":"4Star",
                    "image": "B-romance/dil.jpeg",
                    "synopsis": "A young man's life takes an unexpected turn when he falls in love with a woman from a different background, challenging societal norms and testing the boundaries of love and loyalty."
                },
                {
                    "title": "Love Aaj Kal",
                    "genre": "Romance",
                    "year": 2020,
                    "rating":"3Star",
                    "image": "B-romance/love aaj kal.jpeg",
                    "synopsis": "A modern-day love story intertwines with a past romance, exploring the complexities of relationships and the evolution of love over time in a fast-paced world full of uncertainties."
                },
                {
                    "title": "Yeh Jawaani Hai Deewani",
                    "genre": "Romance",
                    "year": 2013,
                    "rating":"5Star",
                    "image": "B-romance/yeh jaawani hai deewani.jpeg",
                    "synopsis": "A spirited girl rekindles a bond with her carefree former classmate during a trekking trip, reawakening feelings of love and longing as they navigate their ambitions and relationships."
                },
                {
                    "title": "Kal Ho Naa Ho",
                    "genre": "Romance",
                    "year": 2003,
                    "rating":"4Star",
                    "image": "B-romance/kal ho na ho.jpeg",
                    "synopsis": "A vibrant love story unfolds when a spirited young woman discovers a heartfelt letter, sparking an emotional journey of love, friendship, and self-discovery amidst life's trials and tribulations."
                },
                {
                    "title": "Dilwale Dulhania Le Jayenge",
                    "genre": "Romance",
                    "year": 1995,
                    "rating":"5Star",
                    "image": "B-romance/ddlj.jpeg",
                    "synopsis": "A young couple's love story takes an unexpected turn when they must confront traditional family values and cultural expectations, testing their commitment and resilience in pursuit of happiness."
                },
                {
                    "title": "Roohi",
                    "genre": "Romance",
                    "year": 2021,
                    "rating":"3Star",
                    "image": "B-romance/roohi.jpeg",
                    "synopsis": "A comedic horror tale unfolds when a ghost abducts brides on their honeymoon night, leading to a quirky love triangle and unexpected revelations that challenge societal norms and beliefs."
                },
                {
                    "title": "Dilwale",
                    "genre": "Romance",
                    "year": 2015,
                    "rating":"4Star",
                    "image": "B-romance/dilwale.jpeg",
                    "synopsis": "Two star-crossed lovers find their romance threatened by their families' bitter rivalry, forcing them to confront past secrets and reconcile their love amidst challenging circumstances."
                },
                {
                    "title": "Kabhie Khushi Kabhie Gham",
                    "genre": "Romance",
                    "year": 2001,
                    "rating":"4Star",
                    "image": "B-romance/k3g.jpeg",
                    "synopsis": "A grand family saga unfolds when a wealthy businessman's adopted son rebels against tradition, leading to a rift that threatens to tear apart the family's legacy and test the bonds of love and loyalty."
                },
                {
                    "title": "Kuch Kuch Hota Hai",
                    "genre": "Romance",
                    "year": 1998,
                    "rating":"4Star",
                    "image": "B-romance/k2h2.jpeg",
                    "synopsis": "Childhood friends reunite years later, uncovering buried emotions and unspoken love as they navigate life's challenges and embrace a second chance at love amidst friendship, romance, and heartache."
                }
            ],
            rocketscience:[
                {
                    "title": "Rocketry: The Nambi Effect",
                    "genre": "Rocket-Science",
                    "year": 2022,
                    "rating":"5Star",
                    "image": "B-rocket/rocketry.webp",
                    "synopsis": "The life of Nambi Narayanan is full of struggles and accomplishments as an aerospace engineer. However, he faces his biggest challenge while working at ISRO when the world accuses him of treason."
                },
                {
                    "title": "Mission Mangal",
                    "genre": "Rocket-Science",
                    "year": 2020,
                    "rating":"4Star",
                    "image": "B-rocket/mission-mangal.jpeg",
                    "synopsis":"A group of scientists at ISRO battle in their personal and professional lives and work tirelessly towards their only motive, the Mars Orbiter Mission. "
                },
                {
                    "title": "Parallel",
                    "genre": "Rocket-Science",
                    "year": 2024,
                    "rating":"3Star",
                    "image": "B-rocket/parallel.jpeg",
                    "synopsis":"Following the journey of Vanessa, a grief-stricken woman who mysteriously finds herself navigating between parallel spaces "
                },
                {
                    "title": "Mission Mangal",
                    "genre": "Rocket-Science",
                    "year": 2019,
                    "rating":"3Star",
                    "image": "B-rocket/mission-mangal.jpeg",
                    "synopsis":"A group of scientists at ISRO battle in their personal and professional lives and work tirelessly towards their only motive, the Mars Orbiter Mission. " 
                },
                {
                    "title": "Tumbbad",
                    "genre": "Rocket-Science",
                    "year": 2018,
                    "rating":"4Star",
                    "image": "B-rocket/tumbbad.avif",
                    "synopsis":"When a family builds a shrine for Hastar, a monster who is never to be worshipped, and attempts to get their hands on his cursed wealth, they face catastrophic consequences. "
                },
                {
                    "title": "The Sky Is Pink",
                    "genre": "Rocket-Science",
                    "year": 2019,
                    "rating":"5Star",
                    "image": "B-rocket/The_sky_is_pink.jpg",
                    "synopsis":"Based on the life of motivational speaker Aisha Chaudhary, who died in 2015 when she was 18. Aisha tells the love story of her parents over a period of 25 years."
                },
                {
                    "title": "Swades",
                    "genre": "Rocket-Science",
                    "year": 2004,
                    "rating":"4Star",
                    "image": "B-rocket/swades.avif",
                    "synopsis":"Swades: We, the People (transl. Homeland) is a 2004 Indian Hindi-language drama film co-written, directed and produced by Ashutosh Gowariker.[3] The film stars Shah Rukh Khan, Gayatri Joshi and Kishori Ballal while Daya Shankar Pandey, Rajesh Vivek, Lekh Tandon appear in supporting roles."
                },
                {
                    "title": "Koi....Mil Gaya",
                    "genre": "Rocket-Science",
                    "year": 2003,
                    "rating":"3Star",
                    "image": "B-rocket/koi-milgaya.jpg",
                    "synopsis":" Rohit, a youth with a mental disability, befriends an alien. When the police learn about the alien, they try to capture it while Rohit tries his best to protect his new friend."
                },
                {
                    "title": "Mission Kashmir",
                    "genre": "Rocket-Science",
                    "year": 2000,
                    "rating":"3Star",
                    "image": "B-rocket/mission-kashmir.cms",
                    "synopsis":"When Altaaf's parents are murdered, the policeman responsible for the deaths adopts him. Later, when Altaaf realises this, he sets out to seek revenge against him."
                },
                {
                    "title": "3Idiots",
                    "genre": "Rocket-Science",
                    "year": 2007,
                    "rating":"5Star",
                    "image": "B-rocket/3idiots.jpg",
                    "synopsis": "In college, Farhan and Raju form a great bond with Rancho due to his refreshing outlook. Years later, a bet gives them a chance to look for their long-lost friend whose existence seems rather elusive." 
                },
                {
                    "title": "Mr.India",
                    "genre": "Rocket-Science",
                    "year": 1987,
                    "rating":"5Star",
                    "image": "B-rocket/mr-india.jpg",
                    "synopsis":"Arun, who lives with orphaned children, is harassed by a gangster who is after his house. After one of the children dies, he uses his father's invention, an invisibility watch, to fight back."
                },
                {
                    "title": "Mission Kashmir",
                    "genre": "Rocket-Science",
                    "year": 1999,
                    "rating":"3Star",
                    "image": "B-rocket/mission-kashmir.cms",
                    "synopsis":"When Altaaf's parents are murdered, the policeman responsible for the deaths adopts him. Later, when Altaaf realises this, he sets out to seek revenge against him."

                },
                {
                    "title": "Ajooba",
                    "genre": "Rocket-Science",
                    "year": 1991,
                    "rating":"4Star",
                    "image": "B-rocket/ajooba.cms",
                    "synopsis":"Disguised as Ajooba, Ali is always willing to help the people of the kingdom of Baharistan. Years ago, the evil Vazir wrested control from the king and now it is up to Ali to end the tyrant's reign. "
                },
                {
                    "title": "Electric Moon",
                    "genre": "Rocket-Science",
                    "year": 1992,
                    "rating":"4Star",
                    "image": "B-rocket/Electric-moon.jpg",
                    "synopsis":"Electric Moon is a 1992 Indian film directed by Pradip Krishen and written by Arundhati Roy.[2] The film was produced by Grapevine Media for Channel 4 Television and Bobby Bedi's Kaleidoscope Entertainment and was reviewed at the International Film Festival of India (IFFI) and the 36th London Film Festival (1992).["
                },
            ],
        comedy: [
                {
                    "title": "Bunty Aur Babli 2",
                    "genre": "Comedy",
                    "year": 2022,
                    "rating":"3Star",
                    "image": "B-comedy/bunty aur babli 2.jpeg",
                    "synopsis": "A young couple cons their way through various escapades, leaving behind a trail of chaos and laughter as they outsmart authorities and revel in their newfound notoriety."
                },
                {
                    "title": "Golmaal 3",
                    "genre": "Comedy",
                    "year": 2010,
                    "rating":"3Star",
                    "image": "B-comedy/golmaal 3.jpeg",
                    "synopsis": "A dysfunctional family and their mischievous friends find themselves embroiled in hilarious misunderstandings and zany antics during a reunion, testing their bonds and sense of humor."
                },
                {
                    "title": "Hera Pheri",
                    "genre": "Comedy",
                    "year": 2000,
                    "rating":"5Star",
                    "image": "B-comedy/hera pheri.jpeg",
                    "synopsis": "A trio of hapless individuals stumble upon a ransom call, setting off a chain of comedic events as they navigate schemes, misunderstandings, and outrageous situations in their quest for wealth."
                },
                {
                    "title": "Andaz Apna Apna",
                    "genre": "Comedy",
                    "year": 1994,
                    "rating":"5Star",
                    "image": "B-comedy/andaz apna apna.jpeg",
                    "synopsis": "Two bumbling slackers vie for the affections of a wealthy heiress, embarking on a series of harebrained schemes and comedic misadventures in their quest for love and fortune."
                },
                {
                    "title": "Bachchan Pandey",
                    "genre": "Comedy",
                    "year": 2022,
                    "rating":"3Star",
                    "image": "B-comedy/bachchan pandey.jpeg",
                    "synopsis": "A quirky gangster and his motley crew of friends find themselves embroiled in a hilarious escapade, navigating rivalries, romance, and unexpected twists in pursuit of their eccentric goals."
                },
                {
                    "title": "Delhi Belly",
                    "genre": "Comedy",
                    "year": 2011,
                    "rating":"4Star",
                    "image": "B-comedy/delhi belly.jpeg",
                    "synopsis": "Three hapless roommates unwittingly stumble upon a deadly conspiracy, triggering a whirlwind of chaos, mishaps, and comedic misunderstandings as they race against time to save themselves."
                },
                {
                    "title": "Welcome",
                    "genre": "Comedy",
                    "year": 2007,
                    "rating":"5Star",
                    "image": "B-comedy/welcome.jpeg",
                    "synopsis": "A pair of bumbling gangsters navigate family feuds, mistaken identities, and romantic entanglements in their chaotic quest to marry off their sister, leading to hilarious misunderstandings and unexpected alliances."
                },
                {
                    "title": "Biwi No. 1",
                    "genre": "Comedy",
                    "year": 1999,
                    "rating":"3Star",
                    "image": "B-comedy/biwi no 1.jpeg",
                    "synopsis": "A philandering husband's life takes an unexpected turn when his wife sets out to reclaim her independence, leading to comedic chaos and poignant revelations about love, marriage, and fidelity."
                },
                {
                    "title": "Bhool Bhulaiyaa 2",
                    "genre": "Comedy",
                    "year": 2022,
                    "rating":"4Star",
                    "image": "B-comedy/bhool bhulaiyaa 2.jpeg",
                    "synopsis": "A skeptical psychologist delves into the mysteries surrounding a haunted mansion, uncovering eerie secrets and unsettling truths that challenge his beliefs and sanity in this quirky comedy."
                },
                {
                    "title": "Housefull 2",
                    "genre": "Comedy",
                    "year": 2012,
                    "rating":"4Star",
                    "image": "B-comedy/house full 2.jpeg",
                    "synopsis": "A quirky family reunion turns chaotic when mistaken identities and hilarious misunderstandings lead to a series of comical confrontations, testing relationships and sparking unexpected romances."
                },
                {
                    "title": "Heyy Babyy",
                    "genre": "Comedy",
                    "year": 2007,
                    "rating":"4Star",
                    "image": "B-comedy/heyy babyy.jpeg",
                    "synopsis": "Three carefree bachelors are left to raise an infant unexpectedly dropped on their doorstep, leading to uproarious escapades, heartfelt moments, and lessons in parenthood amidst their chaotic lifestyles."
                },
                {
                    "title": "Coolie No. 1",
                    "genre": "Comedy",
                    "year": 1995,
                    "rating":"3Star",
                    "image": "B-comedy/coolie no 1.jpeg",
                    "synopsis": "A quirky matchmaker's attempts to arrange a perfect marriage spiral into comedic chaos when mistaken identities and hilarious misunderstandings complicate his plans, testing his wit and patience."
                },
                {
                    "title": "Cirkus",
                    "genre": "Comedy",
                    "year": 2022,
                    "rating":"3Star",
                    "image": "B-comedy/cirkus.jpeg",
                    "synopsis": "A mischievous con artist and his motley crew embark on a series of outrageous escapades, ensnaring unsuspecting targets in their web of deceit and comedy as they chase their eccentric dreams."
                },
                {
                    "title": "Fukrey",
                    "genre": "Comedy",
                    "year": 2013,
                    "rating":"4Star",
                    "image": "B-comedy/fukrey.jpeg",
                    "synopsis": "Four ambitious friends stumble upon a get-rich-quick scheme, leading to a chaotic adventure filled with quirky characters, hilarious mishaps, and unexpected twists as they navigate their way to fortune."
                },
                {
                    "title": "3 Idiots",
                    "genre": "Comedy",
                    "year": 2009,
                    "rating":"5Star",
                    "image": "B-comedy/3 idiots.jpeg",
                    "synopsis": "A rebellious student reunites with his college friends to search for a missing comrade, reflecting on their formative years and challenging the rigid educational system with their unconventional approach to life."
                },
                {
                    "title": "Dulhe Raja",
                    "genre": "Comedy",
                    "year": 1998,
                    "rating":"5Star",
                    "image": "B-comedy/dulhe raja.jpeg",
                    "synopsis": "A brash hotel owner's life turns upside down when a cunning con man sets his sights on his establishment, leading to a hilarious battle of wits and antics that redefine friendship, love, and laughter."
                }
            ],        
        drama: [
                {
                    "title": "Thappad",
                    "genre": "Drama",
                    "year": 2020,
                    "rating":"4Star",
                    "image": "B-drama/thappad.jpeg",
                    "synopsis": "A woman reevaluates her life and relationships after an incident challenges her beliefs about marriage and respect, igniting a journey of empowerment and self-discovery amidst societal expectations and personal boundaries."
                },
                {
                    "title": "English Vinglish",
                    "genre": "Drama",
                    "year": 2012,
                    "rating":"5Star",
                    "image": "B-drama/english vinglish.jpeg",
                    "synopsis": "A housewife's self-esteem undergoes a transformative journey when she enrolls in an English-speaking course, challenging stereotypes and rediscovering her self-worth amidst familial dynamics and cultural clashes."
                },
                {
                    "title": "Mission Kashmir",
                    "genre": "Drama",
                    "year": 2000,
                    "rating":"4Star",
                    "image": "B-drama/mission kashmir.jpeg",
                    "synopsis": "A young boy's life becomes entangled in political unrest and personal tragedy, as he navigates conflicting loyalties, identity crises, and a quest for redemption amidst the volatile landscape of Kashmir."
                },
                {
                    "title": "Jeet",
                    "genre": "Drama",
                    "year": 1996,
                    "rating":"4Star",
                    "image": "B-drama/jeet.jpeg",
                    "synopsis": "A streetwise man finds himself entangled in a complex web of love, betrayal, and revenge, as he confronts his past and strives to forge a new future amidst challenging circumstances and personal conflicts."
                },
                {
                    "title": "Shershaah",
                    "genre": "Drama",
                    "year": 2021,
                    "rating":"5Star",
                    "image": "B-drama/shershaah.jpeg",
                    "synopsis": "Based on the life of Captain Vikram Batra, this film chronicles his journey from a fearless soldier to a national hero, highlighting his courage, sacrifices, and unwavering commitment to duty during the Kargil War."
                },
                {
                    "title": "Barfi!",
                    "genre": "Drama",
                    "year": 2012,
                    "rating":"5Star",
                    "image": "B-drama/barfi.jpeg",
                    "synopsis": "A charming deaf-mute man embarks on a heartwarming journey of love and friendship, navigating life's challenges with resilience and joy amidst the complexities of human emotions and societal expectations."
                },
                {
                    "title": "Kaho Naa… Pyaar Hai",
                    "genre": "Drama",
                    "year": 2000,
                    "rating":"5Star",
                    "image": "B-drama/Kaho Naa Pyaar Hai.jpeg",
                    "synopsis": "A young man's life takes an unexpected turn when he encounters his doppelgänger and uncovers a web of mysteries, romance, and danger, leading to a gripping tale of love, identity, and destiny."
                },
                {
                    "title": "Rangeela",
                    "genre": "Drama",
                    "year": 1995,
                    "rating":"4Star",
                    "image": "B-drama/rangeela.jpeg",
                    "synopsis": "A vivacious young woman aspires to become a Bollywood star, navigating the glitz and glamour of the industry alongside her supportive friend and a charismatic filmmaker, amidst love, ambition, and artistic dreams."
                },
                {
                    "title": "83",
                    "genre": "Drama",
                    "year": 2021,
                    "rating":"4Star",
                    "image": "B-drama/83.jpeg",
                    "synopsis": "Based on the true story of India's iconic cricket victory in the 1983 World Cup, this film celebrates the triumphs and struggles of the team, capturing the spirit of unity, determination, and national pride."
                },
                {
                    "title": "Zindagi Na Milegi Dobara",
                    "genre": "Drama",
                    "year": 2011,
                    "rating":"5Star",
                    "image": "B-drama/zindagi na milega dobara.jpeg",
                    "synopsis": "Three adventurous friends embark on a transformative journey across Spain, confronting their fears and insecurities while rediscovering the true meaning of friendship, love, and life's fleeting moments."
                },
                {
                    "title": "Devdas",
                    "genre": "Drama",
                    "year": 2002,
                    "rating":"Star",
                    "image": "B-drama/devdas.jpeg",
                    "synopsis": "A passionate love story unfolds amidst societal constraints and personal turmoil, as a self-destructive man spirals into despair and addiction while pining for his childhood sweetheart, leading to tragic consequences."
                },
                {
                    "title": "Darr",
                    "genre": "Drama",
                    "year": 1993,
                    "rating":"5Star",
                    "image": "B-drama/darr.jpeg",
                    "synopsis": "Obsessive love and jealousy drive a man to dangerous extremes as he pursues the woman of his dreams, sparking a chilling game of cat and mouse that threatens to shatter lives and unravel sanity."
                },
                {
                    "title": "Gehraiyaan",
                    "genre": "Drama",
                    "year": 2022,
                    "rating":"3Star",
                    "image": "B-drama/gehraiyyan.jpeg",
                    "synopsis": "Four individuals navigate love, lust, and betrayal amidst personal aspirations and societal expectations, challenging their relationships and identities in the face of emotional complexities and unforeseen revelations."
                },
                {
                    "title": "My Name is Khan",
                    "genre": "Drama",
                    "year": 2010,
                    "rating":"5Star",
                    "image": "B-drama/my name is khan.jpeg",
                    "synopsis": "A man with Asperger's embarks on an epic journey across America to clear his name and spread a message of love and humanity, confronting prejudice and injustice while reaffirming the power of hope and resilience."
                },
                {
                    "title": "Swades",
                    "genre": "Drama",
                    "year": 2004,
                    "rating":"5Star",
                    "image": "B-drama/swades.jpeg",
                    "synopsis": "A successful scientist returns to his roots in rural India, discovering profound truths about community, identity, and purpose as he strives to uplift a neglected village, transforming lives with innovation and compassion."
                },
                {
                    "title": "Dil Hai Ke Manta Nahin",
                    "genre": "Drama",
                    "year": 1991,
                    "rating":"4Star",
                    "image": "B-drama/Dil Hai Ke Manta Nahin.jpeg",
                    "synopsis": "A headstrong woman embarks on a cross-country journey alongside a spirited journalist, encountering comedic mishaps and romantic entanglements as they navigate their conflicting personalities and unpredictable adventures."
                }
            ],
        horror: [
            {
                "title": "Bulbbul",
                "genre": "Horror",
                "year": 2020,
                "rating":"4Star",
                "image": "B-horror/bulbbul.jpeg",
                "synopsis": "In a rural village, a child bride grows up to be an enigmatic woman haunted by supernatural forces and a tale of betrayal, awakening dark secrets that unravel a gripping saga of love, revenge, and the price of liberation."
            },
            {
                "title": "Stree",
                "genre": "Horror",
                "year": 2018,
                "rating":"4Star",
                "image": "B-horror/stree.jpeg",
                "synopsis": "A quaint town is haunted by the spirit of a mysterious woman who abducts men during festivals, sparking humor, fear, and unexpected alliances as a group of friends confronts the legend, revealing truths about society and human nature."
            },
            {
                "title": "Raaz",
                "genre": "Horror",
                "year": 2002,
                "rating":"5Star",
                "image": "B-horror/raaz.jpeg",
                "synopsis": "A newlywed couple moves to a remote mansion haunted by chilling secrets and malevolent spirits, leading to a terrifying battle of sanity and survival amidst paranormal occurrences and a history of unspoken horrors."
            },
            {
                "title": "Khooni Murdaa",
                "genre": "Horror",
                "year": 1990,
                "rating":"3Star",
                "image": "B-horror/khooni murdaa.jpeg",
                "synopsis": "An abandoned mansion becomes the setting for supernatural encounters and chilling mysteries as a group of friends encounter vengeful spirits and unravel the sinister truth behind a series of gruesome murders."
            },
            {
                "title": "Bhoot- Part One: Haunted Ship",
                "genre": "Horror",
                "year": 2020,
                "rating":"3Star",
                "image": "B-horror/Bhoot- Part One Haunted Ship.jpeg",
                "synopsis": "A haunted ship becomes a deadly mystery for a shipping officer, uncovering a disturbing past and confronting malevolent forces aboard, leading to a relentless battle against supernatural terror and personal demons."
            },
            {
                "title": "Bhoot and Friends",
                "genre": "Horror",
                "year": 2010,
                "rating":"4Star",
                "image": "B-horror/bhoot and friends.jpeg",
                "synopsis": "A group of young friends embarks on a thrilling adventure to unravel the mystery behind a haunted house, encountering ghosts, secrets, and unexpected friendships amidst a spine-chilling quest for truth and courage."
            },
            {
                "title": "Naina",
                "genre": "Horror",
                "year": 2005,
                "rating":"4Star",
                "image": "B-horror/naina.jpeg",
                "synopsis": "A woman undergoes a harrowing experience after receiving a corneal transplant, unveiling a world of paranormal visions and terrifying truths that threaten her sanity and survival, plunging her into a chilling battle for her life."
            },
            {
                "title": "Khooni Raat",
                "genre": "Horror",
                "year": 1991,
                "rating":"3Star",
                "image": "B-horror/khooni raat.jpeg",
                "synopsis": "A night of terror unfolds as a group of travelers takes refuge in an eerie mansion, confronting supernatural forces and uncovering sinister secrets that threaten to consume them in a spine-chilling battle against the unknown."
            },
            {
                "title": "Chhorii",
                "genre": "Horror",
                "year": 2021,
                "rating":"4Star",
                "image": "B-horror/chhorii.jpeg",
                "synopsis": "In a secluded village, a pregnant Sakshi is haunted by sinister spirits. As she uncovers dark secrets, she must protect her unborn child from an ancient evil, leading to a fierce struggle for her life and soul."
            },
            {
                "title": "1920: Evil Returns",
                "genre": "Horror",
                "year": 2012,
                "rating":"5Star",
                "image": "B-horror/1920 Evil Returns.jpeg",
                "synopsis": "A haunted mansion becomes the setting for a tale of love, possession, and revenge, as a young woman confronts malevolent spirits and her own dark past, leading to a chilling battle of wills and a fight for her soul."
            },
            {
                "title": "Rog",
                "genre": "Horror",
                "year": 2005,
                "rating":"4Star",
                "image": "B-horror/rog.jpeg",
                "synopsis": "A young woman's life takes a terrifying turn when she encounters supernatural occurrences and uncovers haunting truths about her lover's dark secrets, plunging her into a perilous journey of fear, betrayal, and desperate survival."
            },
            {
                "title": "Raat",
                "genre": "Horror",
                "year": 1992,
                "rating":"4Star",
                "image": "B-horror/raat.jpeg",
                "synopsis": "A family moves into a haunted house, where their lives become entangled in a web of eerie happenings and ghostly apparitions, as they confront a night of terror and struggle to survive against malevolent forces from the past."
            },
            {
                "title": "Bhoot Police",
                "genre": "Horror",
                "year": 2021,
                "rating":"3Star",
                "image": "B-horror/bhoot police.jpeg",
                "synopsis": "Two ghost hunters embark on a hilarious yet perilous adventure to exorcise haunted locales, confronting supernatural entities and personal demons amidst a backdrop of humor, horror, and unexpected revelations."
            },
            {
                "title": "Tumbbad",
                "genre": "Horror",
                "year": 2018,
                "rating":"5Star",
                "image": "B-horror/tumbbad.jpeg",
                "synopsis": "In the village of Tumbbad, Vinayak Rao's quest for a mythical treasure hidden in a cursed mansion leads him into a dark and eerie world dominated by the vengeful goddess Hastar. As he digs deeper, he faces terrifying supernatural consequences."
            },            
            {
                "title": "13B: Fear Has a New Address",
                "genre": "Horror",
                "year": 2009,
                "rating":"5Star",
                "image": "B-horror/13B Fear Has a New Address.jpeg",
                "synopsis": "A family moves into a new apartment, only to discover a mysterious television show that predicts their future, unraveling a sinister conspiracy and plunging them into a terrifying reality where fear has a chilling new address."
            },
            {
                "title": "Purani Haveli",
                "genre": "Horror",
                "year": 1994,
                "rating":"3Star",
                "image": "B-horror/purani haveli.jpeg",
                "synopsis": "A group of friends visits a haunted mansion for a night of thrills, uncovering dark secrets and encountering vengeful spirits as they confront their worst fears and fight for survival in a chilling tale of horror and suspense."
            }
        ],
    action: [
        {
            "title": "Sooryavanshi",
            "genre": "Action",
            "year": 2021,
            "rating":"3Star",
            "image": "B-action/Sooryavanshi.jpeg",
            "synopsis": "An anti-terrorist squad chief faces his most challenging mission yet as he races against time to thwart a terrorist attack, navigating through intense action, suspense, and personal dilemmas in a high-stakes battle for justice."
        },
        {
            "title": "War",
            "genre": "Action",
            "year": 2019,
            "rating":"4Star",
            "image": "B-action/war.jpeg",
            "synopsis": "An elite soldier is pitted against his mentor in a high-octane clash of loyalties and betrayals, unleashing a relentless pursuit across borders and battling personal demons amidst jaw-dropping action and suspense."
        },
        {
            "title": "Main Hoon Na",
            "genre": "Action",
            "year": 2004,
            "rating":"5Star",
            "image": "B-action/main hoon na.jpeg",
            "synopsis": "A military officer goes undercover as a college student to protect the daughter of a general, uncovering deep-seated conspiracies and navigating through laughter, drama, and romance in a mission to safeguard the nation."
        },
        {
            "title": "Aaj Ka Arjun",
            "genre": "Action",
            "year": 1990,
            "rating":"5Star",
            "image": "B-action/aaj ka arjun.jpeg",
            "synopsis": "A righteous young man takes on crime and corruption, battling ruthless enemies and confronting personal demons, in a relentless quest for justice and redemption amidst intense action and emotional turmoil."
        },
        {
            "title": "Satyameva Jayate 2",
            "genre": "Action",
            "year": 2021,
            "rating":"3Star",
            "image": "B-action/Satyameva Jayate 2.jpeg",
            "synopsis": "An honest police officer wages a relentless war against corruption and injustice, facing off against a formidable adversary in a high-voltage battle for truth and justice amidst explosive action and dramatic revelations."
        },
        {
            "title": "Brothers",
            "genre": "Action",
            "year": 2015,
            "rating":"4Star",
            "image": "B-action/brothers.jpeg",
            "synopsis": "Two estranged brothers confront their painful past and personal demons as they enter the brutal world of mixed martial arts, fighting for redemption, forgiveness, and the ultimate championship amidst intense emotional turmoil."
        },
        {
            "title": "Gadar: Ek Prem Katha",
            "genre": "Action",
            "year": 2001,
            "rating":"5Star",
            "image": "B-action/gadar.jpeg",
            "synopsis": "A love story unfolds against the backdrop of India's tumultuous partition, as a devout Sikh man risks everything to reunite with his Muslim wife amidst the chaos of war, testing their love, courage, and resilience."
        },
        {
            "title": "Ghayal",
            "genre": "Action",
            "year": 1990,
            "rating":"5Star",
            "image": "B-action/ghayal.jpeg",
            "synopsis": "A young man seeks justice for his murdered brother, embarking on a relentless quest for vengeance against a powerful crime lord and corrupt system, leading to a gripping battle of wills and a fight for truth and redemption."
        },
        {
            "title": "Pathaan",
            "genre": "Action",
            "year": 2022,
            "rating":"4Star",
            "image": "B-action/pathaan.jpeg",
            "synopsis": "Details for this movie are not available."
        },
        {
            "title": "Bodyguard",
            "genre": "Action",
            "year": 2011,
            "rating":"5Star",
            "image": "B-action/bodyguard.jpeg",
            "synopsis": "A dedicated bodyguard is assigned to protect a high-profile client, navigating through danger, deceit, and emotional turmoil as their relationship evolves amidst escalating threats and a web of secrets."
        },
        {
            "title": "Khakee",
            "genre": "Action",
            "year": 2004,
            "rating":"5Star",
            "image": "B-action/khakee.jpeg",
            "synopsis": "An elite police officer leads a team on a perilous mission to transport a dangerous criminal, facing treachery, conspiracy, and unforeseen challenges that test their loyalty, courage, and determination."
        },
        {
            "title": "Baazigar",
            "genre": "Action",
            "year": 1993,
            "rating":"5Star",
            "image": "B-action/baazigar.jpeg",
            "synopsis": "A young man seeks revenge against those who destroyed his family, weaving a web of deception and romance as he manipulates those around him, leading to a gripping tale of ambition, betrayal, and a quest for justice."
        },
        {
            "title": "Jawan",
            "genre": "Action",
            "year": 2023,
            "rating":"4Star",
            "image": "B-action/jawan.jpeg",
            "synopsis": "A prison warden recruits inmates to commit outrageous crimes that shed light on corruption and injustice - and that lead him to an unexpected reunion."
        },
        {
            "title": "Dabangg",
            "genre": "Action",
            "year": 2010,
            "rating":"3Star",
            "image": "B-action/dabangg.jpeg",
            "synopsis": "A fearless cop takes on corruption and crime in his small town, employing unorthodox methods and larger-than-life antics to maintain justice, family honor, and his own brand of justice amidst action-packed confrontations."
        },
        {
            "title": "Dhoom",
            "genre": "Action",
            "year": 2004,
            "rating":"4Star",
            "image": "B-action/dhoom.jpeg",
            "synopsis": "A talented thief and his crew engage in high-stakes heists, pursued by a relentless police officer and his team, leading to thrilling chases, daring escapes, and a battle of wits in a fast-paced game of cat and mouse."
        },
        {
            "title": "Karan Arjun",
            "genre": "Action",
            "year": 1995,
            "rating":"5Star",
            "image": "B-action/karan arjun.jpeg",
            "synopsis": "Two brothers return from the dead to avenge their murders and reunite with their grieving mother, battling destiny, enemies, and a legacy of betrayal in a gripping saga of reincarnation, revenge, and the power of undying love."
        }
    ]
},
    tollywood: {
        romance: [
            {
                "title": "Bheeshma",
                "genre": "Romance",
                "year": 2020,
                "rating":"5Star",
                "image": "T-romance/bheeshma.jpeg",
                "synopsis": "A carefree man's life takes a serious turn when he meets a strong-willed woman. As they navigate through humorous and romantic moments, they discover unexpected challenges and opportunities that redefine their perspectives on life and love."
            },
            {
                "title": "Oka Laila Kosam",
                "genre": "Romance",
                "year": 2014,
                "rating":"4Star",
                "image": "T-romance/oka laila kosam.jpeg",
                "synopsis": "A young man's life takes an unexpected turn when he falls for a spirited young woman. As they embark on a journey of love and companionship, they face trials, triumphs, and poignant moments that shape their bond and future."
            },
            {
                "title": "Magadheera",
                "genre": "Romance",
                "year": 2009,
                "rating":"4Star",
                "image": "T-romance/magadheera.jpeg",
                "synopsis": "A brave warrior from the past reincarnates in the present to fulfill his destiny and reunite with his beloved. As he navigates through time and fate, he discovers love, sacrifice, and the enduring power of their love across centuries."
            },
            {
                "title": "Geethanjali",
                "genre": "Romance",
                "year": 1990,
                "rating":"5Star",
                "image": "T-romance/geethanjali.jpeg",
                "synopsis": "A terminally ill woman finds solace and joy in her final days when she encounters a cheerful and caring man. As they share moments of laughter, tears, and love, their bond transcends illness and time, leaving a lasting legacy of hope and inspiration."
            },
            {
                "title": "Radhe Shyam",
                "genre": "Romance",
                "year": 2022,
                "rating":"5Star",
                "image": "T-romance/radhe shyam.jpeg",
                "synopsis": "A passionate love story unfolds against the backdrop of breathtaking landscapes and historical intrigue. As they embark on a journey of love and discovery, they face trials, mysteries, and revelations that challenge their bond and future."
            },
            {
                "title": "Darling",
                "genre": "Romance",
                "year": 2010,
                "rating":"4Star",
                "image": "T-romance/darling.jpeg",
                "synopsis": "A carefree young man's life takes a serious turn when he meets a spirited young woman. As they navigate through humorous and romantic moments, they discover unexpected challenges and opportunities that redefine their perspectives on life and love."
            },
            {
                "title": "Nuvvu Naaku Nachav",
                "genre": "Romance",
                "year": 2000,
                "rating":"5Star",
                "image": "T-romance/nuvvu naaku nachav.jpeg",
                "synopsis": "A playful young man's life takes an unexpected turn when he falls for a feisty young woman. As they embark on a journey of love and companionship, they face trials, triumphs, and poignant moments that shape their bond and future."
            },
            {
                "title": "Preminchukundham Raa",
                "genre": "Romance",
                "year": 1997,
                "rating":"5Star",
                "image": "T-romance/Preminchukundham Raa.jpeg",
                "synopsis": "A young man's life takes a dramatic turn when he encounters a charming and independent young woman. As they navigate through the complexities of love and relationships, they discover the true meaning of commitment, sacrifice, and enduring love."
            },
            {
                "title": "Love Story",
                "genre": "Romance",
                "year": 2021,
                "rating":"5Star",
                "image": "T-romance/love story.jpeg",
                "synopsis": "A young couple's love story unfolds amidst societal expectations and personal challenges. As they strive to uphold their love against all odds, they face heartbreak, sacrifice, and the transformative power of love in a poignant journey of self-discovery."
            },
            {
                "title": "Ye Maaya Chesave",
                "genre": "Romance",
                "year": 2010,
                "rating":"5Star",
                "image": "T-romance/ye maaya chesave.jpeg",
                "synopsis": "A young filmmaker's life takes an unexpected turn when he falls for a spirited young woman. As they navigate through the highs and lows of love and life, they discover the true meaning of companionship, passion, and the pursuit of dreams."
            },
            {
                "title": "Manmadhudu",
                "genre": "Romance",
                "year": 2002,
                "rating":"5Star",
                "image": "T-romance/manmadhudu.jpeg",
                "synopsis": "A charming man's life takes an unexpected turn when he encounters a strong-willed young woman. As they embark on a journey of love and self-discovery, they face humorous, romantic, and poignant moments that redefine their perspectives on life."
            },
            {
                "title": "Hello Brother",
                "genre": "Romance",
                "year": 1994,
                "rating":"3Star",
                "image": "T-romance/hello brother.jpeg",
                "synopsis": "A playful young man's life takes a dramatic turn when he discovers a shocking truth about his identity. As he navigates through love, laughter, and family ties, he learns the true meaning of brotherhood, sacrifice, and the power of unconditional love."
            },
            {
                "title": "Ala Vaikunthapurramuloo",
                "genre": "Romance",
                "year": 2020,
                "rating":"5Star",
                "image": "T-romance/Ala Vaikunthapurramuloo.jpeg",
                "synopsis": "A man's life takes an unexpected turn when he discovers his true identity and heritage, setting him on a path of self-discovery and love. As he navigates through family dynamics and romantic entanglements, he confronts truths that redefine his relationships and future."
            },
            {
                "title": "Fidaa",
                "genre": "Romance",
                "year": 2017,
                "rating":"5Star",
                "image": "T-romance/fidaa.jpeg",
                "synopsis": "A spirited young woman's life takes a dramatic turn when she falls for a charming and independent man. As they navigate through cultural differences and family expectations, they discover the transformative power of love and the courage to follow their hearts."
            },
            {
                "title": "Bommarillu",
                "genre": "Romance",
                "year": 2005,
                "rating":"5Star",
                "image": "T-romance/bommarillu.jpeg",
                "synopsis": "A young man's life takes a dramatic turn when he encounters a free-spirited young woman. As they navigate through family dynamics and personal ambitions, they discover the true meaning of happiness, freedom, and the pursuit of true love."
            },
            {
                "title": "Ninne Pelladatha",
                "genre": "Romance",
                "year": 1991,
                "rating":"4Star",
                "image": "T-romance/ninne pelladatha.jpeg",
                "synopsis": "A young woman's life takes an unexpected turn when she discovers a startling truth about her family. As she navigates through love, loyalty, and self-discovery, she finds herself entangled in a web of secrets, emotions, and the power of enduring love."
            }
        ],
        rocketscience:[
            {
                "title": "Hanu-Man",
                "genre": "Rocket-Science",
                "year": 2024,
                "rating":"5Star",
                "image": "T-rocket/hanuman.avif",
                "synopsis":"In the tranquil village of Anjanadri, a petty thief stumbles upon Hanuman-like abilities. With the impending threats, he rises to become the hero they need."
            },
            {
                "title": "Ayalaan",
                "genre": "Rocket-Science",
                "year": 2024,
                "rating":"4Star",
                "image": "T-rocket/Ayalaan.jpg",
                "synopsis":"A lost alien seeks help from four friends to get back to his home planet, while a group of hostile scientists tries to capture it."
            },
            {
                
                "title": "Adbhutham",
                "genre": "Rocket-Science",
                "year": 2021,
                "rating":"5Star",
                "image": "T-rocket/adbhutham.jpg",
                "synopsis":"Adbhutham ( transl. Wonder) is a 2021 Indian Telugu-language science-fiction romance film directed by Mallik Ram from the screenplay of Lakshmi Bhupala with a story by Prasanth Varma. The film stars Teja Sajja and Shivani Rajashekar. It was premiered on Disney+ Hotstar on November 19, 2021."
            },
            {
                "title": "Gaami",
                "genre": "Rocket-Science",
                "year": 2024,
                "rating":"3Star",
                "image": "T-rocket/gaami.jpeg",
                "synopsis":"Gaami frames itself as an occult thriller, before blending into science fiction, body horror, and a social issue drama, all with quite a bit of technical finesse. The film begins in Haridwar, with the story of a trainee aghora (a Hindu Shaivite ascetic) called Shankar (Vishwak Sen). "
            },
            {
                "title": "Yashoda",
                "genre": "Rocket-Science",
                "year": 2022,
                "rating":"5Star",
                "image": "T-rocket/Yashoda.jpeg",
                "synopsis":"An innocent woman agrees to be a surrogate mother at a highly plush facility to find her missing sister. However, she uncovers the shocking truth about the centre. " 
            },
            {
                "title": "Operation Valentine",
                "genre": "Rocket-Science",
                "year": 2024,
                "rating":"4Star",
                "image": "T-rocket/operation-valentine.webp",
                "synopsis":"Pilots from the Indian Air Force embark on a courageous mission, facing one of the biggest and deadliest aerial attacks that the country has ever witnessed."
            },
            {
                "title": "Awe",
                "genre": "Rocket-Science",
                "year": 2018,
                "rating":"3Star",
                "image": "T-rocket/Awe.jpg",
                "synopsis":"A woman suffering from multiple personality disorder experiences a lot of problems as she ends up playing the role of various characters which are nothing but the reflections of her life."
            },
            {
                "title": "Okka Kshanam",
                "genre": "Rocket-Science",
                "year": 2017,
                "rating":"5Star",
                "image": "T-rocket/okka-kshanam.jpg",
                "synopsis":"eeva and Joshna realise that they are living a life parallel to that of Srinivas and Swathi, just one year behind. When Swathi gets murdered, Jeeva must prevent Joshna from meeting the same fate. "
            },
            {
                "title": "24",
                "genre": "Rocket-Science",
                "year": 2016,
                "rating":"4Star",
                "image": "T-rocket/24.jpeg",
                "synopsis":"A scientist invents a time-travelling watch, which his evil twin brother wants to get hold of. Years later, the scientist's son battles his uncle, who is still desperately in search of the watch."
            },
            {
                "title": "7th Sense",
                "genre": "Rocket-Science",
                "year": 2016,
                "rating":"5Star",
                "image": "T-rocket/7thsense.jpg",
                "synopsis":"Dong Lee from China arrives in India to start a biological war. However, a genetic engineering student tries to revive the skills of Bodhidharma with the help of his descendant to defeat Dong Lee."
            },
            {
                "title": "Anthariksham 9000KMPH",
                "genre": "Rocket-Science",
                "year": 2018,
                "rating":"4Star",
                "image": "T-rocket/anthariksham.jpg",
                "synopsis":"Dev, a retired astronaut, is approached to repair a satellite that has stopped communicating. If he is unable to fix the problem, it can lead to a chain reaction creating a worldwide blackout. "
            },
            {
                "title": "Dhasavathaaram",
                "genre": "Rocket-Science",
                "year": 2008,
                "rating":"4Star",
                "image": "T-rocket/Dhasavathaaram.jpg",
                "synopsis":"After realising the danger of a bioweapon, a scientist strives to protect it from being misused. When the vial accidentally reaches India, he races against time to prevent a potential disaster. "
            },
            {
                "title": "Aparichitudu",
                "genre": "Rocket-Science",
                "year": 2005,
                "rating":"5Star",
                "image": "T-rocket/aparichitudu.jpeg",
                "synopsis":" Ramanujam, who suffers from multiple personality disorder, works as a lawyer by day and a vigilante at night. He uses tips from the 'Garuda Purana' as his tools to expose various antisocial elements."
            },
            {
                "title": "Naani",
                "genre": "Rocket-Science",
                "year": 2004,
                "rating":"4Star",
                "image": "T-rocket/naani.jpg",
                "synopsis":"Naani, a child who is turned into a 28-year-old man by a scientist, gets a job in a company and falls in love with the owner's daughter. But when he misses his mother, he is transformed into a kid."
            },
            {
                "title": "Aithe",
                "genre": "Rocket-Science",
                "year": 2003,
                "rating":"3Star",
                "image": "T-rocket/aithe.jpeg",
                "synopsis":" A gangster, who wants to spread terror across the world, hijacks a plane using four men without any criminal records to carry out the operation."
            },
            {
                "title": "Aditya 369",
                "genre": "Rocket-Science",
                "year": 1991,
                "rating":"5Star",
                "image": "T-rocket/Aditya369.jpg",
                "synopsis":"When an absent-minded professor successfully invents a time machine, Krishna, Hema and a smuggler Raja go to great lengths to procure the machine for their own reasons"
            },
        ],
        comedy: [
            {
                "title": "Krack",
                "genre": "Action",
                "year": 2021,
                "rating":"4Star",
                "image": "T-comedy/krack.jpeg",
                "synopsis": "An intense and principled police officer takes on a notorious criminal and his gang, unraveling a series of events that challenge his morals and courage. As he navigates through danger and deception, he discovers the true meaning of justice and sacrifice."
            },
            {
                "title": "Dookudu",
                "genre": "Action",
                "year": 2011,
                "rating":"4Star",
                "image": "T-comedy/dookudu.jpeg",
                "synopsis": "A charismatic police officer embarks on a mission to expose corruption and uphold justice in his own unique and humorous style. As he confronts powerful adversaries and personal challenges, he discovers unexpected allies and the power of determination."
            },
            {
                "title": "Venky",
                "genre": "Comedy",
                "year": 2004,
                "rating":"5Star",
                "image": "T-comedy/venky.jpeg",
                "synopsis": "A carefree young man's life takes a dramatic turn when he gets entangled in a series of comedic misadventures. As he navigates through chaos and confusion, he discovers the true meaning of responsibility, friendship, and love."
            },
            {
                "title": "Alluda Majaka",
                "genre": "Comedy",
                "year": 1995,
                "rating":"3Star",
                "image": "T-comedy/Alluda Majaka.jpeg",
                "synopsis": "A playful and mischievous young man's life takes an unexpected turn when he becomes entangled in royal intrigue and comic misunderstandings. As he navigates through hilarious situations, he discovers the true meaning of courage, honor, and love."
            },
            {
                "title": "F2: Fun and Frustration",
                "genre": "Comedy",
                "year": 2019,
                "rating":"4Star",
                "image": "T-comedy/f2.jpeg",
                "synopsis": "Two frustrated husbands seek refuge in a friend's household to escape their nagging wives, leading to a series of hilarious and chaotic situations. As they navigate through misunderstandings and mishaps, they learn valuable lessons about love, friendship, and marriage."
            },
            {
                "title": "Maryada Ramanna",
                "genre": "Comedy",
                "year": 2010,
                "rating":"5Star",
                "image": "T-comedy/maryada ramanna.jpeg",
                "synopsis": "A man seeking revenge unwittingly finds himself in the midst of a quirky family's chaotic household. As he navigates through humorous and heartfelt moments, he discovers the true meaning of forgiveness, acceptance, and finding unexpected happiness."
            },
            {
                "title": "Dhee",
                "genre": "Comedy",
                "year": 2007,
                "rating":"4Star",
                "image": "T-comedy/dhee.jpeg",
                "synopsis": "A charming and resourceful man's life takes an unexpected turn when he becomes entangled in a young woman's mission to expose a corrupt politician. As they navigate through humorous and action-packed situations, they uncover hidden truths and discover the power of unity."
            },
            {
                "title": "Hello Brother",
                "genre": "Comedy",
                "year": 1994,
                "rating":"3Star",
                "image": "T-comedy/hello brother.jpeg",
                "synopsis": "A playful young man's life takes a dramatic turn when he discovers a shocking truth about his identity. As he navigates through love, laughter, and family ties, he learns the true meaning of brotherhood, sacrifice, and the power of unconditional love."
            },
            {
                "title": "Jathi Ratnalu",
                "genre": "Comedy",
                "year": 2021,
                "rating":"5Star",
                "image": "T-comedy/jaathi ratnalu.jpeg",
                "synopsis": "Three naive individuals dream of making it big in the city, leading to a series of hilarious and unexpected situations. As they navigate through fame, fortune, and friendship, they learn valuable lessons about life, identity, and the pursuit of happiness."
            },
            {
                "title": "Adhurs",
                "genre": "Comedy",
                "year": 2010,
                "rating":"5Star",
                "image": "T-comedy/adhurs.jpeg",
                "synopsis": "A charismatic young man's life takes a hilarious turn when he becomes entangled in a series of comic misunderstandings and adventures. As he navigates through chaos and confusion, he discovers the true meaning of family, friendship, and the power of laughter."
            },
            {
                "title": "Ready",
                "genre": "Comedy",
                "year": 2008,
                "rating":"4Star",
                "image": "T-comedy/ready.jpeg",
                "synopsis": "A carefree and adventurous man's life takes a whimsical turn when he meets a spirited young woman. As they navigate through humorous and romantic escapades, they discover unexpected challenges and opportunities that redefine their perspectives on life and love."
            },
            {
                "title": "Appula Appa Rao",
                "genre": "Comedy",
                "year": 1991,
                "rating":"4Star",
                "image": "T-comedy/appula appa rao.jpeg",
                "synopsis": "A playful and mischievous young man's life takes a hilarious turn when he becomes entangled in a series of comic misunderstandings and escapades. As he navigates through chaos and confusion, he discovers the true meaning of love, loyalty, and the pursuit of happiness."
            },
            {
                "title": "Brochevarevarura",
                "genre": "Comedy",
                "year": 2019,
                "rating":"5Star",
                "image": "T-comedy/Brochevarevarura.jpeg",
                "synopsis": "A group of quirky and ambitious individuals' lives intertwine in unexpected ways, leading to a series of humorous and dramatic events. As they navigate through friendship, love, and betrayal, they discover the true meaning of dreams, aspirations, and finding one's identity."
            },
            {
                "title": "Bhale Bhale Magadivoy",
                "genre": "Comedy",
                "year": 2015,
                "rating":"5Star",
                "image": "T-comedy/bhale bhale magadivoy.jpeg",
                "synopsis": "A forgetful young man's life takes a hilarious turn when he falls for a spirited young woman. As he navigates through comical misunderstandings and romantic escapades, he discovers the true meaning of love, patience, and the importance of being true to oneself."
            },
            {
                "title": "Bendu Apparao R.M.P.",
                "genre": "Comedy",
                "year": 2009,
                "rating":"4Star",
                "image": "T-comedy/bendu apprao rmp.jpeg",
                "synopsis": "A resourceful and humorous man's life takes an unexpected turn when he becomes entangled in a series of comic misunderstandings and adventurous escapades. As he navigates through chaos and confusion, he discovers the true meaning of family, friendship, and the pursuit of happiness."
            },
            {
                "title": "Jamba Lakidi Pamba",
                "genre": "Comedy",
                "year": 1993,
                "rating":"4Star",
                "image": "T-comedy/Jamba Lakidi Pamba.jpeg",
                "synopsis": "A curious and mischievous couple's life takes a whimsical turn when they swap genders due to a mystical twist of fate. As they navigate through humorous and heartfelt moments, they learn valuable lessons about empathy, understanding, and the power of true love."
            }
        ],
        drama: [
            {
                "title": "Uppena",
                "genre": "Drama",
                "year": 2021,
                "rating":"5Star",
                "image": "T-drama/uppena.jpeg",
                "synopsis": "A young fisherman's life takes an unexpected turn when he falls in love with the daughter of a powerful landlord. As they navigate through societal barriers and family expectations, they discover the true meaning of love, sacrifice, and resilience."
            },
            {
                "title": "Arjun Reddy",
                "genre": "Drama",
                "year": 2017,
                "rating":"4Star",
                "image": "T-drama/arjun reddy.jpeg",
                "synopsis": "A brilliant medical student's life spirals into chaos when his intense love for a fellow student leads to self-destructive behavior. As he battles his inner demons and societal judgments, he learns profound lessons about love, redemption, and personal growth."
            },
            {
                "title": "Tagore",
                "genre": "Drama",
                "year": 2003,
                "rating":"5Star",
                "image": "T-drama/tagore.jpeg",
                "synopsis": "A fearless professor takes on corruption and injustice in society, challenging powerful forces with his unyielding principles and determination. As he fights for justice and equality, he inspires a movement that shakes the foundations of power."
            },
            {
                "title": "Dalapathi",
                "genre": "Drama",
                "year": 1991,
                "rating":"5Star",
                "image": "T-drama/dalapathi.jpeg",
                "synopsis": "Two friends rise from humble beginnings to become powerful figures in the underworld, navigating through loyalty, betrayal, and moral dilemmas. As they face their destinies, they confront the complexities of friendship, honor, and the consequences of their choices."
            },
            {
                "title": "Mahanati",
                "genre": "Drama",
                "year": 2018,
                "rating":"5Star",
                "image": "T-drama/mahanati.jpeg",
                "synopsis": "The life story of the legendary actress Savitri, tracing her rise to fame, personal life struggles, and enduring legacy in the Indian film industry. As her journey unfolds, it reveals the highs and lows of stardom and the indelible mark she leaves on cinema."
            },
            {
                "title": "Maharshi",
                "genre": "Drama",
                "year": 2019,
                "rating":"5Star",
                "image": "T-drama/maharshi.jpeg",
                "synopsis": "A successful businessman returns to his roots to fulfill a promise made to his college friends, leading to a transformative journey of self-discovery and social responsibility. As he confronts past regrets and societal injustices, he finds purpose in making a meaningful difference."
            },
            {
                "title": "Nuvvu Nenu",
                "genre": "Drama",
                "year": 2001,
                "rating":"5Star",
                "image": "T-drama/nuvvu nenu.jpeg",
                "synopsis": "Two young lovers from different backgrounds defy familial expectations and societal norms to pursue their dreams and build a life together. As they face obstacles and challenges, they discover the true meaning of love, determination, and resilience."
            },
            {
                "title": "Aa Naluguru",
                "genre": "Drama",
                "year": 2004,
                "rating":"5Star",
                "image": "T-drama/aa naluguru.jpeg",
                "synopsis": "An altruistic man's life takes a poignant turn when he embarks on a journey to fulfill his father's last wish, spreading joy and kindness to those in need. As he touches the lives of strangers, he discovers the power of compassion, empathy, and the human spirit."
            },
            {
                "title": "Jersey",
                "genre": "Drama",
                "year": 2019,
                "rating":"5Star",
                "image": "T-drama/jersey.jpeg",
                "synopsis": "An aging cricketer makes a remarkable comeback to pursue his dream of playing for the Indian cricket team, proving that it's never too late to chase one's passion. As he faces personal and professional challenges, he rediscovers the true meaning of perseverance and fatherhood."
            },
            {
                "title": "Rangasthalam",
                "genre": "Drama",
                "year": 2018,
                "rating":"5Star",
                "image": "T-drama/rangasthalam.jpeg",
                "synopsis": "A passionate young man leads a revolution against a tyrannical leader to bring about change in his village, confronting power dynamics and personal sacrifices. As he fights for justice and freedom, he discovers the strength of unity, courage, and the power of the common people."
            },
            {
                "title": "Chatrapathi",
                "genre": "Drama",
                "year": 2005,
                "rating":"5Star",
                "image": "T-drama/chatrapathi.jpeg",
                "synopsis": "A courageous young man rises from humble beginnings to become a formidable force against injustice and oppression. As he battles powerful adversaries and personal tragedies, he discovers the true meaning of strength, resilience, and the pursuit of justice."
            },
            {
                "title": "Muta Mesthri",
                "genre": "Drama",
                "year": 1993,
                "rating":"5Star",
                "image": "T-drama/muta mestri.jpeg",
                "synopsis": "A fearless mechanic takes on corrupt politicians and criminals to protect his community, challenging the status quo with his unwavering determination and moral integrity. As he fights for justice, he becomes a symbol of hope and inspiration for the oppressed."
            },
            {
                "title": "Middle Class Melodies",
                "genre": "Drama",
                "year": 2020,
                "rating":"4Star",
                "image": "T-drama/Middle Class Melodies.jpeg",
                "synopsis": "A young man's dreams of starting a successful hotel business in his hometown lead to comical misunderstandings and heartfelt moments with his family and friends. As he navigates through culinary challenges and personal aspirations, he discovers the true meaning of ambition, love, and community."
            },
            {
                "title": "Manam",
                "genre": "Drama",
                "year": 2014,
                "rating":"4Star",
                "image": "T-drama/manam.jpeg",
                "synopsis": "A poignant tale of love and reincarnation spans across generations, connecting the lives of a family through destiny and unbreakable bonds. As they uncover the mysteries of their past lives, they rediscover the enduring power of love, forgiveness, and familial ties."
            },
            {
                "title": "Sye",
                "genre": "Drama",
                "year": 2004,
                "rating":"5Star",
                "image": "T-drama/sye.jpeg",
                "synopsis": "A group of passionate college students form an underdog rugby team to compete against a dominant rival, challenging stereotypes and societal expectations. As they unite for a common goal, they discover the true meaning of teamwork, determination, and sportsmanship."
            },
            {
                "title": "Ninne Pelladatha",
                "genre": "Romance",
                "year": 1996,
                "rating":"5Star",
                "image": "T-drama/ninne pelladatha.jpeg",
                "synopsis": "A young couple's journey of love faces obstacles from familial opposition and misunderstandings, testing their commitment and faith in each other. As they navigate through challenges and emotional turmoil, they learn valuable lessons about trust, sacrifice, and the endurance of true love."
            }
        ],
        horror: [
            {
                "title": "Idhe Maa Katha",
                "genre": "Drama",
                "year": 2021,
                "rating":"4Star",
                "image": "T-horror/idhe maa katha.jpeg",
                "synopsis": "A heartfelt tale of a young man's journey to prove himself against all odds, showcasing the power of determination, love, and resilience."
            },
            {
                "title": "Raju Gari Gadhi",
                "genre": "Horror",
                "year": 2015,
                "rating":"5Star",
                "image": "T-horror/raju gari gadhi.jpeg",
                "synopsis": "A group of friends encounter supernatural events when they stay at a haunted guesthouse, leading to terrifying revelations and unexpected twists."
            },
            {
                "title": "Aa Intlo",
                "genre": "Horror",
                "year": 2009,
                "rating":"5Star",
                "image": "T-horror/aa intlo.jpeg",
                "synopsis": "A family moves into a new house, unaware of its dark secrets that unleash paranormal occurrences, testing their courage and unity."
            },
            {
                "title": "Ammoru",
                "genre": "Horror",
                "year": 1995,
                "rating":"5Star",
                "image": "T-horror/ammoru.jpeg",
                "synopsis": "A mythical tale of a goddess reincarnated to protect her devotees from evil forces, embarking on a divine mission to restore balance and justice."
            },
            {
                "title": "V",
                "genre": "Thriller",
                "year": 2020,
                "rating":"4Star",
                "image": "T-horror/V.jpeg",
                "synopsis": "A cop faces a formidable adversary in a cat-and-mouse game of wits and deception, leading to a thrilling showdown that challenges loyalties and perceptions."
            },
            {
                "title": "Ekkadiki Pothavu Chinnavada",
                "genre": "Romance",
                "year": 2016,
                "rating":"5Star",
                "image": "T-horror/Ekkadiki Pothavu Chinnavada.jpeg",
                "synopsis": "A supernatural love story unfolds when a young man encounters mysterious occurrences that lead him on a quest to uncover the truth behind his eerie experiences."
            },
            {
                "title": "Anasuya",
                "genre": "Thriller",
                "year": 2007,
                "rating":"5Star",
                "image": "T-horror/anasuya.jpeg",
                "synopsis": "A suspenseful tale of intrigue and deception ensues when a woman's past comes back to haunt her, unraveling dark secrets and unexpected betrayals."
            },
            {
                "title": "Devi",
                "genre": "Horror",
                "year": 1999,
                "rating":"5Star",
                "image": "T-horror/devi.jpeg",
                "synopsis": "The narrative focuses on a newlywed couple who encounter a ghostly presence in their new home. They must uncover the ghost’s identity and motives to rid themselves of its haunting."
            },
            {
                "title": "Nishabdham",
                "genre": "Thriller",
                "year": 2020,
                "rating":"3Star",
                "image": "T-horror/nishabdham.jpeg",
                "synopsis": "A murder investigation at a secluded villa unravels a web of mysteries, revealing shocking truths and unexpected alliances in a race against time to uncover the killer."
            },
            {
                "title": "Kanchana",
                "genre": "Horror",
                "year": 2011,
                "rating":"4Star",
                "image": "T-horror/kanchana.jpeg",
                "synopsis": "A man possessed by vengeful spirits seeks justice against those who wronged him, unleashing supernatural chaos and terror that test his courage and resolve."
            },
            {
                "title": "Arundhati",
                "genre": "Horror",
                "year": 2009,
                "rating":"5Star",
                "image": "T-horror/arundhati.jpeg",
                "synopsis": "A princess fights against an ancient curse that threatens her family's legacy, delving into dark rituals and supernatural battles to protect her loved ones."
            },
            {
                "title": "Kshana Kshanam",
                "genre": "Thriller",
                "year": 1991,
                "rating":"5Star",
                "image": "T-horror/kshana kshanam.jpeg",
                "synopsis": "A thrilling tale of crime and deception unfolds when a man and woman find themselves entangled in a dangerous journey to escape relentless pursuit and unravel hidden truths."
            },
            {
                "title": "Zombie Reddy",
                "genre": "Horror",
                "year": 2021,
                "rating":"5Star",
                "image": "T-horror/zombie reddy.jpeg",
                "synopsis": "A group of friends battle against hordes of zombies unleashed by a mysterious virus, navigating through chaos and danger to survive in a post-apocalyptic world."
            },
            {
                "title": "Prema Katha Chitram",
                "genre": "Horror",
                "year": 2013,
                "rating":"3Star",
                "image": "T-horror/prema katha chitram.jpeg",
                "synopsis": "A young couple's weekend getaway turns into a nightmare when they encounter supernatural forces that haunt them with terrifying consequences."
            },
            {
                "title": "A Film by Aravind",
                "genre": "Horror",
                "year": 2005,
                "rating":"4Star",
                "image": "T-horror/a film by aravind.jpeg",
                "synopsis": "A filmmaker's attempt to make a horror movie becomes a terrifying reality when the characters from his script come to life, blurring the lines between fiction and reality."
            },
            {
                "title": "Raatri",
                "genre": "Horror",
                "year": 1992,
                "rating":"4Star",
                "image": "T-horror/raatri.jpeg",
                "synopsis": "A night of unspeakable horrors unfolds when a group of people gather at a mansion, unaware of the malevolent forces that lurk within, threatening their very lives."
            }
        ],
        action: [
            {
                "title": "Sarileru Neekevvaru",
                "genre": "Action",
                "year": 2020,
                "rating":"5Star",
                "image": "T-action/sarileru neekevvaru.jpeg",
                "synopsis": "A military officer embarks on a mission to save a family from a powerful enemy, confronting challenges that test his courage, loyalty, and determination."
            },
            {
                "title": "Sarrainodu",
                "genre": "Action",
                "year": 2016,
                "rating":"5Star",
                "image": "T-action/sarrainodu.jpeg",
                "synopsis": "Gana, an ex-military man, takes on the powerful and corrupt Vairam Dhanush to protect his village. With his unparalleled fighting skills and a strong sense of justice, Gana battles against Dhanush's tyranny, facing brutal challenges and intense confrontations to safeguard the innocent and bring peace to his community."
            },
            {
                "title": "Pokiri",
                "genre": "Action",
                "year": 2006,
                "rating":"5Star",
                "image": "T-action/pokiri.jpeg",
                "synopsis": "A fearless police officer infiltrates a criminal underworld, unraveling a web of deceit and betrayal as he takes down powerful adversaries with strategic precision."
            },
            {
                "title": "Major Chandrakanth",
                "genre": "Action",
                "year": 1993,
                "rating":"4Star",
                "image": "T-action/major chandrakanth.jpeg",
                "synopsis": "A retired army major faces personal and familial challenges when his idealistic principles clash with the harsh realities of life, testing his beliefs and relationships."
            },
            {
                "title": "Pushpa: The Rise",
                "genre": "Action",
                "year": 2021,
                "rating":"5Star",
                "rating":"5Star",
                "image": "T-action/pushpa.jpeg",
                "synopsis": "A smuggler's life turns perilous when he crosses paths with ruthless adversaries in a battle for survival and dominance in the treacherous terrains of the forest."
            },
            {
                "title": "Temper",
                "genre": "Action",
                "year": 2015,
                "rating":"5Star",
                "image": "T-action/temper.jpeg",
                "synopsis": "A corrupt cop undergoes a transformation when he encounters a challenging case that forces him to confront his own morals, leading to a riveting tale of redemption."
            },
            {
                "title": "Athadu",
                "genre": "Action",
                "year": 2005,
                "rating":"5Star",
                "image": "T-action/athadu.jpeg",
                "synopsis": "A professional hitman's life takes unexpected turns when he becomes entangled in a web of deceit and betrayal, navigating through dangerous situations to reclaim his identity."
            },
            {
                "title": "Bobbili Simham",
                "genre": "Action",
                "year": 1994,
                "rating":"3Star",
                "image": "T-action/bobbili simham.jpeg",
                "synopsis": "A fearless warrior defends his kingdom from treacherous enemies, showcasing bravery, honor, and sacrifice in the face of adversity."
            },
            {
                "title": "Vakeel Saab",
                "genre": "Action",
                "year": 2021,
                "rating":"4Star",
                "image": "T-action/vakeel saab.jpeg",
                "synopsis": "A lawyer fights for justice and truth when he takes on a high-profile case that challenges societal norms and prejudices, leading to a courtroom drama that tests his integrity."
            },
            {
                "title": "Businessman",
                "genre": "Action",
                "year": 2012,
                "rating":"4Star",
                "image": "T-action/businessman.jpeg",
                "synopsis": "A cunning businessman navigates the murky waters of politics and power, using strategic maneuvers and calculated risks to rise to prominence and conquer his adversaries."
            },
            {
                "title": "Okkadu",
                "genre": "Action",
                "year": 2003,
                "rating":"5Star",
                "image": "T-action/okkadu.jpeg",
                "synopsis": "A fearless athlete becomes entangled in a dangerous game of survival when he protects a vulnerable girl from powerful enemies, risking everything for love and justice."
            },
            {
                "title": "Master",
                "genre": "Action",
                "year": 1997,
                "rating":"5Star",
                "image": "T-action/master.jpeg",
                "synopsis": "A skilled martial artist confronts a powerful adversary who threatens his loved ones, leading to an epic showdown that tests his martial arts prowess and resilience."
            },
            {
                "title": "RRR",
                "genre": "Action",
                "year": 2022,
                "rating":"5Star",
                "image": "T-action/RRR.jpeg",
                "synopsis": "Two revolutionary leaders forge an extraordinary bond as they fight against colonial rule, showcasing bravery, sacrifice, and valor in their epic journey for freedom."
            },
            {
                "title": "Gabbar Singh",
                "genre": "Action",
                "year": 2012,
                "rating":"5Star",
                "image": "T-action/gabbar singh.jpeg",
                "synopsis": "A fearless cop takes on ruthless criminals in his quest for justice, blending humor and action in a high-stakes battle that tests his wit and courage."
            },
            {
                "title": "Stalin",
                "genre": "Action",
                "year": 2006,
                "rating":"5Star",
                "image": "T-action/stalin.jpeg",
                "synopsis": "A man dedicated to helping others transforms society with his selfless acts, inspiring people to rise against corruption and injustice in a tale of heroism and hope."
            },
            {
                "title": "Antham",
                "genre": "Action",
                "year": 1992,
                "rating":"3Star",
                "image": "T-action/antham.jpeg",
                "synopsis": "A gripping tale of suspense and intrigue unfolds when a man is accused of crimes he didn't commit, embarking on a perilous journey to clear his name and uncover the truth."
            }
        ]
    },
    }

