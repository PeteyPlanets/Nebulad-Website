import axios from "axios";

const blogs = [
  {
    title: [`Call Me Maybe`],
    artist: [`Carly Rae Jepsen`],
    date: `November 1, 2015`,
    text: `<speak> First up, to start off, I begin with Carly Rae Jepsen. <break time="100ms"/> It’s a happy song and a catchy tune, and don’t tell me you never caught yourself singing along. <break time="300ms"/> It reminds me of a moment in the early nineties, way before C.R.J. was even born, on a night out when I first laid eyeballs on a particular guy. <break time="300ms"/> I garnered the guts to go and say hello, and ask for a piece of gum. <break time="200ms"/> then I slipped him my digits on a napkin and said, <break time="150ms"/>  “so, call me <break time="300ms"/> if you want...” And he did! <break time="500ms"/>So song number 50 is Call Me Maybe. <break time="1200ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/Call_Me_Maybe_final.mp3"/> </speak>`,
    countdown: `fifty to fifty`,
    countdownDisplay: `50 to 50`,
    day: 50,
    year: [2012],
    genre: `pop`,
    significantHoomans: [],
    youtube: [``],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Call Me Maybe",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/50-to-50/50-Call-Me-Maybe.jpg",
        textContent: {
          artist: "Artist: Carly Rae Jepsen",
          countdown: "Day 50 (50 to 50)",
          primaryText:
            "First up, to start off, I begin with Carly Rae Jepsen.  It’s a happy song and a catchy tune, and don’t tell me you never caught yourself singing along. And it reminds me of a moment in the early nineties, way before C.R.J. was even born, on a night out when I first laid eyeballs on a particular guy, and garnered the guts to go and say hello, and ask for a piece of gum. I slipped him my digits on a napkin and said, 'so, call me...if you want...' and he did! So song number 50 is Call Me Maybe.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: [`Wonderful`],
    artist: [`Gary Go`],
    date: `November 2, 2015`,
    text: `<speak>Presenting a great song, with great lyrics for those days when you feel less than what you really are. It’s a good song to bring you back to Earth, to plant your feet and tighten that upper lip. <break time="500ms"/> This is Wonderful, by Gary Go from 2009. A tough start to the year, but promise found toward the end.<break time="1200ms"/>  <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/Wonderful-GaryGo_louder.mp3"/></speak>`,
    countdown: `fifty to fifty`,
    countdownDisplay: `50 to 50`,
    day: 49,
    year: [2009],
    genre: ``,
    significantHoomans: ["Petey"],
    youtube: [``],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Wonderful",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/50-to-50/49-Wonderful-Gary-Go.jpg",
        textContent: {
          artist: "Artist: Gary Go",
          countdown: "Day 49 (50 to 50)",
          primaryText:
            "Presenting a great song with great lyrics on those days when you feel less than what you really are. It’s a good song to bring you back to the earth, to plant your feet and tighten that upper lip. This is Wonderful, by Gary Go, from 2009. A tough start to the year, promise found toward the end.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: [`Love Is A Battlefield`],
    artist: [`Pat Benatar`],
    date: `November 3, 2015`,
    text: `<speak>In 1983, the year I graduated from P.M.H.S. <break time="200ms"/> This song burst onto the video airwaves, and all over the radio. <break time="200ms"/> I was blown away. I already knew the power of Pat Benatar’s voice, but this was something new. Something completely unexpected <break time="200ms"/> to me at least. <break time="200ms"/> It hearkens back to a sense of freedom, as well as connection to home. It will always remind me of my dear friend Maria, <break time="100ms"/> without whom I couldn’t have made it through those hellish, woodsy, high school years.<break time="1500ms"/>  <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/Love_Is_A_Battlefield_final.mp3"/></speak>`,
    countdown: `fifty to fifty`,
    countdownDisplay: `50 to 50`,
    day: 48,
    year: [1983],
    genre: ``,
    significantHoomans: ["Maria"],
    youtube: [`https://www.youtube.com/watch?v=IGVZOLV9SPo`],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Love Is A Battlefield",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/50-to-50/Love_Is_A_Battlefield.jpeg",
        textContent: {
          artist: "Artist: Pat Benatar",
          countdown: "Day 48 (50 to 50)",
          primaryText:
            "In 1983, the year I graduated from P.M.H.S. This song burst onto the video airwaves and all over the radio. I was blown away. I already knew the power of Pat Benatar’s voice but this was something new. Something completely unexpected... to me, at least. It hearkens back to a sense of freedom as well as connection to home. It will always remind me of my dear friend Maria, without whom I couldn’t have made it through those hellish woodsy high school years.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: [`There Is A Light That Never Goes Out`],
    artist: [`The Smiths`],
    date: `November 4, 2015`,
    text: `<speak><audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/There_Is_A_Light_final1.mp3"/> <break time="800ms"/> This song touched such a personal part, of my <prosody rate="fast">closeted </prosody> soul, and empowered me to break those doors down. It kind of still does. The helplessness and near hopelessness of Morrissey’s voice. The lullaby of the synths. <break time="200ms"/> It all just mixed, to become one of my favorite songs, in one of the most important eras of my life <break time="200ms"/> coming out. <break time="400ms"/> Back in those closet days, I had met a man with whom I’d meet up, and we would drive around Malverne in his car, just talking, as well as sitting in silence. <break time="200ms"/> He was in a relationship, and I was young and scared, but somehow, on those rare occasions, we’d help one another to feel connected to something. <break time="300ms"/> This song tells my story. <break time="1200ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/There_Is_A_Light_final2.mp3"/> In my opinion, this is the song that proved to me that it gets better. </speak>`,
    countdown: `fifty to fifty`,
    countdownDisplay: `50 to 50`,
    day: 47,
    year: [1986],
    genre: ``,
    significantHoomans: ["Petey"],
    youtube: [`https://www.youtube.com/watch?v=3r-qDvD3F3c`],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "There Is A Light That Never Goes Out",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/50-to-50/There_Is_A_Light2.jpg",
        textContent: {
          artist: "Artist: The Smiths",
          countdown: "Day 47 (50 to 50)",
          primaryText:
            "It touched such a personal part of my closeted soul and empowered me to break those doors down. It kind of still does. The helplessness and near hopelessness of Morrissey’s voice, the lullaby of the synths, it all just mixed to become one of my favorite songs in one of the most important eras of my life - coming out. Back in those closet days I had met a man with whom I’d meet up and we would drive around Malverne in his car, just talking as well as sitting in silence. He was in a relationship, and I was young and scared, but somehow on those rare occasions we’d help one another to feel connected to something. This song tells my story. In my opinion, this is the song that proved to me that it gets better.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: [`Kids In America`, "No More Words"],
    artist: [`Kim Wilde`, "Berlin"],
    date: `November 5, 2015`,
    text: `<speak>If you’re old enough to remember bopping around in your crappy car, to either of these songs from the early eighties, then maybe you get the same ecstatic feeling I get, whenever I hear them come on the radio. <break time="300ms"/> That’s why today’s songs are from two powerhouse females of the eighties <break time="200ms"/> Kim Wilde and Teri Nunn, a.k.a. Berlin. <break time="300ms"/> Kids In America is from 1981, so admittedly, I wasn’t doing the driving back then, Karen was...<break time="800ms"/>  No More Words is from a little later on. It was still a Karen time, but also a Cristine era. We were the rebel youth <break time="200ms"/> hanging out at Dance Parc, a building that looked like a castle. Tons of songs flood the memory from this era, but these 2 crunchy new wave pop monsters rise to the top of the crop.<break time="400ms"/>  Enjoy! <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/46_Kids_In_America_final.mp3"/></speak>`,
    countdown: `fifty to fifty`,
    countdownDisplay: `50 to 50`,
    day: 46,
    year: [1981, 1984],
    genre: ``,
    significantHoomans: [],
    youtube: [
      "https://www.youtube.com/watch?v=UqMcevcUmqg",
      "https://www.youtube.com/watch?v=oIb9QUGjdIc",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Kids In America / No More Words",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/50-to-50/46_Kids_In_America.jpg",
        textContent: {
          artist: "Artist: Kim Wilde / Berlin",
          countdown: "Day 46 (50 to 50)",
          primaryText:
            "If you’re old enough to remember bopping around in your shitty car to either of these songs from the early eighties, then maybe you get the same ecstatic feeling I get when I hear them come on the radio. That’s why today’s ‘song’ is a set of songs from two powerhouse females of the eighties, Kim Wilde and Teri Nunn (Berlin). Kids In America is from 1981, so admittedly I wasn’t doing the driving back then, Karen was (“Fuck you, Mrs. Goetz!”), and No More Words is from a little later on. It was still a Karen time, but also a Cristine era. We were the rebel youth (or maybe we thought we were!) hanging out at Dance Parc, a building that looked like a castle. Tons of songs flood the memory from this era, but these 2 crunchy new wave pop monsters rise to the top of the crop. Enjoy!",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Lovesong"],
    artist: ["The Cure"],
    date: `November 6, 2015`,
    text: `<speak>There’s something about the melody of this song that pops. There’s something about the haunting honesty in the voice of Robert Smith. There’s something about the year 1989, which was pivotal for me and my independence. <break time="100ms"/> A love song by a band notorious for songs that are basically about jumping to your death? Unheard of. <break time="150ms"/>This is Lovesong by the Cure.<break time="1200ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/45_Lovesong_final.mp3"/></speak>`,
    countdown: `fifty to fifty`,
    countdownDisplay: `50 to 50`,
    day: 45,
    year: [1989],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=hXCKLJGLENs"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Lovesong",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/50-to-50/45_Lovesong.jpeg",
        textContent: {
          artist: "Artist: The Cure",
          countdown: "Day 45 (50 to 50)",
          primaryText:
            "There’s something about the melody of this song that pops (aka SLAPS). There’s something about the haunting honesty in the voice of Robert Smith. There’s something about the year 1989, which was pivotal for me and my independence. A love song by a band notorious for songs that are basically about jumping to your death? Unheard of. This is Lovesong by the Cure.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Beautiful Day"],
    artist: ["U2"],
    date: `November 7, 2015`,
    text: `<speak> The early 2000’s were a definitive and tumultuous time for all of us as Americans, but they were also unsettling and scary for me personally, as every day forward was another day further apart from my then-partner. We had shared so much and bonded over the worst thing to ever happen to either of us – the death of our ‘sister’, a few years earlier. <break time="100ms"/> It was exhausting trying to figure out a way to leave, without ending the relationship. Crazy, right? <break time="200ms"/> Most people shut it off like a switch, or pull it off like a band-aid. Not me. We’d had too much invested; there were too many common family and friends. <break time="600ms"/>Beautiful Day, by U2, released at the end of 2000, is a song of celebration and hope, for what we can achieve. <break time="100ms"/>I was able to relate to the hope, that he and I could salvage all the good parts of what we’d shared and maybe morph it into something else. Looking back, we actually pulled it off. <break time="600ms"/> And then the terror attacks of September 11th happened. <break time="350ms"/>Our nation was charged with fear, uncertainty and sorrow. <break time="500ms"/>This song, still all over the airwaves, rang through, with sounds of hope, of what we all can achieve.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/44_Beautiful_Day_final.mp3"/></speak>`,
    countdown: `fifty to fifty`,
    countdownDisplay: `50 to 50`,
    day: 44,
    year: [2000],
    genre: ``,
    significantHoomans: ["Frank"],
    youtube: ["https://www.youtube.com/watch?v=co6WMzDOh1o"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Beautiful Day",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/50-to-50/44_Beautiful_Day.jpeg",
        textContent: {
          artist: "Artist: U2",
          countdown: "Day 44 (50 to 50)",
          primaryText:
            "The early 2000’s were a definitive and tumultuous time for us as Americans, but they were also unsettling and scary for me as every day forward was another day further apart from my then-partner. We had shared so much and bonded over the worst thing to ever happen to either of us – the death of our ‘sister’ a few years earlier. It was exhausting trying to figure out a way to leave without ending the relationship. Crazy, right? Most people shut it off like a light switch or pull it off like a band-aid; not me. We’d had too much invested; there were too many common family and friends. Beautiful Day by U2, released at the end of 2000, is a song of celebration and hope for what we can achieve. I was able to relate to the hope, that he and I could salvage all the good parts of what we’d shared and maybe morph it into something else. Looking back, we actually pulled it off. And then the terror attacks of September 11th happened. Our nation was charged with fear, uncertainty and sorrow. And this song, still all over the airwaves, rang through with sounds of hope of what we all can achieve.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Easy"],
    artist: ["The Commodores"],
    date: `November 8, 2015`,
    text: `<speak>This entry should be really easy. <break time="100ms"/> <audio src="soundbank://soundlibrary/musical/amzn_sfx_drum_comedy_01"/> <break time="300ms"/> The song, Easy, by the Commodores, has all the makings of a pop, R and B classic. <break time="400ms"/> Lionel Richie on vocals, a soft seventies groove, and a beautiful rolling melody. <break time="200ms"/> There is a beautiful electric-guitar bridge that makes me swoon, and a chord change near the end. <break time="200ms"/>It's a song about just being who you are, <break time="150ms"/> that it's just so much easier than pretending to be who others want you to be. <break time="300ms"/> I used to be able to kick the shit outta some karaoke to this song, including Lionel's "EWW!" <break time="400ms"/> PS: This isn't the last you've seen of Lionel on this countdown. <break time="100ms"/>But you knew that, didn't you? <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/43_Easy_final.mp3"/></speak>`,
    countdown: `fifty to fifty`,
    countdownDisplay: `50 to 50`,
    day: 43,
    year: [1977],
    genre: ``,
    significantHoomans: ["Petey"],
    youtube: ["https://www.youtube.com/watch?v=7XcTyEKSnYg"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Easy",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/50-to-50/43_Easy.jpg",
        textContent: {
          artist: "Artist: The Commodores",
          countdown: "Day 43 (50 to 50)",
          primaryText:
            "This entry should be really easy. The song, Easy by the Commodores, has all the makings of a pop/R&B classic: Lionel Richie on vocals, a soft seventies groove, and a beautiful, rolling melody. There is a beautiful electric guitar bridge that makes me swoon, and a chord change near the end. It's a song about just being who you are, that it's just so much easier than pretending to be who others want you to be. I used to be able to kick the shit outta some karaoke of this song, including Lionel's 'EWW!' PS: This isn't the last you've seen of Lionel on this countdown, but you knew that, didn't you?",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Never Gonna Give You Up"],
    artist: ["Rick Astley"],
    date: `November 9, 2015`,
    text: `<speak>You'll call it getting Rick-rolled, but whatever. <break time="250ms"/> EVERY time this AMAZING song comes on the radio, it gets cranked, and I don't care how gay that is. That's how Honey Badger I am, about loving Never Gonna Give You Up. <break time="250ms"/>He was the king of VH1, at a time when VH1 played his kind of music, and I was all about it. <break time="200ms"/> A gingery white-dude, with a baby face and the voice of a soul singer? Done. <break time="250ms"/> Then you see that video, and you realize you could totally have beaten him up in school. But nope, that infectious song stole my damn heart, and I was hooked. <break time="100ms"/> A fan of that ginger Brit for good.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/42_Rickroll_final.mp3"/></speak>`,
    countdown: `fifty to fifty`,
    countdownDisplay: `50 to 50`,
    day: 42,
    year: [1987],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=dQw4w9WgXcQ"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Never Gonna Give You Up",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/50-to-50/42_RIckroll.jpeg",
        textContent: {
          artist: "Artist: Rick Astley",
          countdown: "Day 42 (50 to 50)",
          primaryText:
            "You'll call it getting Rick-rolled, but whatevs. EVERY time this AMAZING song comes on the radio it gets cranked and I don't care how gay that is. That's how Honey Badger I am about loving Never Gonna Give You Up. He was the king of VH1 at the time when VH1 played his kind of music, and I was all about it - a gingery white dude with a baby face and the voice of a soul singer? Done. Then you see that video and you realize you could totally have beaten him up in school. But nope, that infectious song stole my damn heart in 1987 and I was hooked, a fan of that ginger-Brit for good.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["We Are Family"],
    artist: ["Sister Sleddge"],
    date: `November 10, 2015`,
    text: `<speak>Let's go back to 1979 for a day. <break time="200ms"/>You’ll find K-Tel compilation albums with all the latest songs from the top 20, the same songs featured and played on Casey Kasem's countdown every weekend. Disco fever was still afflicting the nation, and I certainly had the bug. Even in that Pocono Country Place prison to which my parents sentenced me, I still managed to find disco on the radio and lip-sync into a hair-brush to the groove. <break time="400ms"/> We Are Family, by Sister Sledge, represents the entirety of the disco sound. Harmonic ladies fronting a bass-driven jaunt, through night-life subculture. For the little boy who was just getting popular with the "cool kids" in Lynbrook, and then was slapped in the face with a life-changing culture shock, disco was the music behind my closet doors, and this song was the anthem. <break time="200ms"/> The rest of us were left behind in the town where I grew up, thus beginning a lifetime of nostalgic longing. <break time="150ms"/> The song also features a golden rule, and it’s a really good one. <break time="200ms"/> Have faith in you, and the things you do, you won’t go wrong. <break time="200ms"/> Smart words, sisters! <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/41_We_Are_Family_final.mp3"/></speak>`,
    countdown: `fifty to fifty`,
    countdownDisplay: `50 to 50`,
    day: 41,
    year: [1979],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=uyGY2NfYpeE"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "We Are Family",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/50-to-50/41_We_Are_Family.jpg",
        textContent: {
          artist: "Artist: Sister Sledge",
          countdown: "Day 41 (50 to 50)",
          primaryText:
            "Let's go back to 1979 for a day. You’ll find K-Tel compilation albums with all the latest songs from the top 20, the same songs featured and played on Casey Kasem's countdown every weekend. Disco fever was still afflicting the nation and I certainly had the bug. Even in that wood-paneled Pocono Country Place prison to which my parents sentenced me, I still managed to find disco on the radio and lip-sync into a hair brush to the groove. We Are Family by Sister Sledge represents, to me, the entirety of the disco sound. Harmonic ladies fronting a bass-driven jaunt through night-life subculture. For the little boy who was just getting popular with the 'cool kids' in Lynbrook and then was slapped in the face with a life-changing culture shock, disco was the music behind my closet doors, and this song was the anthem. The rest of 'we' were left behind in the town where I grew up, thus beginning a lifetime of nostalgic longing.The song also features a golden rule, and it’s a really good one: Have faith in you and the things you do, you won’t go wrong. Smart words, sisters!",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: [`Dont You Forget About Me`],
    artist: ["Simple Minds"],
    date: `November 11, 2015`,
    text: `<speak>The Breakfast Club film made us all think about into which category we fell in high school. For most of us, these categories were the first foray into social classism, and how we would develop into adults. And the movie helped us see that, deep inside, we’re all just insecure children, hoping for acceptance and friendship. <break time="300ms"/>The theme song is a bulletproof anthem of the need to be accepted; mutual acceptance across the board. It solidified my friendship with Jan, turning her from a childhood grade-school acquaintance to a dear friend, and the sister she is to me today.<break time="100ms"/> It reassured my place in the life of my first childhood friend, Linda. It gave me courage to move forward and create new, lasting friendships with so many others. <break time="200ms"/> There is a build-up in the bridge at the end that’s quite palpable. Lead singer Jim Kerr is urging, commanding them to come on, call his name. It’s definitive of the feelings we awkward weirdos all can relate to. And then, success in the form of a million “la’s”! The Simple Minds’ Don’t You Forget About Me is today’s countdown song for all these reasons, but also because the song just kicks ass. You probably turn it up when you hear it on the radio too. They even made it relevant again as a romantic ballad in Pitch Perfect, so what’s not to love?<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/40_Dont_You_Forget_About_Me_final.mp3"/></speak>`,
    countdown: `fifty to fifty`,
    countdownDisplay: `50 to 50`,
    day: 40,
    year: [1985],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=CdqoNKCCt7A"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Don't You Forget About Me",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/50-to-50/40_Dont_You_Forget_About_Me.jpeg",
        textContent: {
          artist: "Artist: Simple Minds",
          countdown: "Day 40 (50 to 50)",
          primaryText:
            "The Breakfast Club film made us all think about into which category we fell in high school. For most of us, these categories were the first foray into social classism, how we would develop into adults. And the movie helped us see that, deep inside, we’re all just insecure children hoping for acceptance and friendship. The theme song is a bulletproof anthem of the need to be accepted; mutual acceptance across the board. It solidified my friendship with Jan, turning her from a childhood grade school acquaintance to a dear friend, the sister she is to me today. It reassured my place in the life of my first childhood friend, Linda. It gave me courage to move forward and forge new, lasting friendships with so many others. There is a build-up in the bridge at the end that’s palpable. Lead singer Jim Kerr is urging, commanding them to come on, call his name. It’s definitive of the feelings we awkward weirdos all can relate to. And then, success in the form of a million la’s The Simple Minds’ Don’t You Forget About Me is today’s countdown song for all these reasons, but also because the song just kicks ass. You probably turn it up when you hear it on the radio, too. They even made it relevant again as a romantic ballad in Pitch Perfect, so what’s not to love?",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["The Sign"],
    artist: ["Ace Of Base"],
    date: `November 12, 2015`,
    text: `<speak>Hey, remember in the early nineties when a band out of Sweden, comprised of two girls and two guys, exploded onto the scene, and were kind of the second coming of A.B.B.A.? <break time="300ms"/> Well I remember it very well. I had a hard time at first with their first reggae-inspired early hit, All That She Wants. But I soon quite literally saw The Sign, and it opened up my eyes! <break time="200ms"/> Between me and Vincent, we must have played this song hundreds of times each on repeat on our respective cassette players! <break time="200ms"/> If you’re searching for substance, this isn’t the song for you. But if you enjoy the pop bounce and the polish of synth chords, seek no further. <break time="200ms"/> I don’t even care if the song has a message; it brings me joy and makes me happy. And more importantly, it instantly brings my Vincent directly to the forefront of my mind; I can smell his cologne, hear his laugh, and see his face. <break time="300ms"/>That’s one sign I don’t mind seeing. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/39_The_Sign_final.mp3"/></speak>`,
    countdown: `fifty to fifty`,
    countdownDisplay: `50 to 50`,
    day: 39,
    year: [1992],
    genre: ``,
    significantHoomans: ["Vinny"],
    youtube: ["https://www.youtube.com/watch?v=iqu132vTl5Y"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "The Sign",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/50-to-50/39_The_Sign.jpeg",
        textContent: {
          artist: "Artist: Ace Of Base",
          countdown: "Day 39 (50 to 50)",
          primaryText:
            "Hey, remember in the early nineties when a band out of Sweden, comprised of two girls and two guys, exploded onto the scene and were kind of the second coming of ABBA? Well I remember it very well, and though I’d had a hard time at first with Ace of Base’s reggae-inspired first hit, All That She Wants, I soon quite literally saw The Sign and it opened up my eyes! Between me and Vincent, we must have played this song hundreds of times each on repeat on our respective cassette players! If you’re searching for substance, this isn’t the song for you. But if you enjoy the pop bounce and the polish of synth chords, seek no further. I don’t even care if the song has a message; it brings me joy and makes me happy. And more importantly, it instantly brings my Vincent directly to the forefront of my mind; I can smell his cologne, hear his laugh, see his face. That’s one sign I don’t mind seeing.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Getting Away With It"],
    artist: ["Electronic"],
    date: `November 13, 2015`,
    text: `<speak>One part New Order, one part the Smiths, two parts Pet Shop Boys. Sounds pretty fucking amazing, right?? <break time="200ms"/>Well, that’s Electronic, with their gigantic alt rock track from 89 to 90, Getting Away With It. <break time="300ms"/> The first time I’d heard this song was on W.D.R.E., the local station that played alternative rock, after W.L.I.R., a Long Island staple in new music radio, went defunct. <break time="200ms"/> It was my favorite radio station, churning out left of center hits by artists like the Cure, the Cult, and all three of those amazing bands named at the top of this entry. <break time="200ms"/> Flash forward to  today. <break time="200ms"/> I pay for SiriusXM, solely because they have a channel called FirstWave, which generously plays all this kind of awesome music, bringing along with it radio DJ Larry the Duck! <break time="200ms"/> It’s no shock I identified with underground, new wave music. Even today, when the mood strikes, I’ll find a playlist of songs from this era and genre, and this song is usually atop the list. It’s not about the lyrics, as it usually isn’t in many of my favorite songs. It’s the melodic joy that makes me close my eyes and sway. There’s also a beautiful ending crescendo that transcends anything on the radio now. If all I had to do all day was listen to music like this and close my eyes and sway, my days would be complete. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/38_Electronic_final.mp3"/></speak>`,
    countdown: `fifty to fifty`,
    countdownDisplay: `50 to 50`,
    day: 38,
    year: [1991],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=DSfjtdnUsls"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Getting Away With It",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/50-to-50/38_Electronic.jpg",
        textContent: {
          artist: "Artist: Electronic",
          countdown: "Day 38 (50 to 50)",
          primaryText:
            "One part New Order, one part the Smiths, two parts Pet Shop Boys. Sounds pretty fucking amazing, right?? Well, that’s Electronic with their gigantic alt-rock track from ’89-‘90, Getting Away With It. The first time I’d heard this song was on WDRE, the local station that played alternative rock after WLIR, a Long Island staple in new music radio, went defunct. It was my favorite radio station, churning out left of center hits by artists like the Cure and the Cult and all three of those amazing bands named at the top of this entry. Flash forward to present day: I pay for SiriusXM solely because they have a channel called FirstWave which generously plays all this kind of awesome music, bringing along with it radio DJ Larry the Duck! It’s no shock I identified with underground, new wave music. Even today, when the mood strikes, I’ll find a playlist of songs from this era and genre, and this song is usually atop the list. It’s not about the lyrics, as it usually isn’t in many of my favorite songs. It’s the melodic joy that makes me close my eyes and sway. There’s also a beautiful ending crescendo that transcends anything on the radio now. If all I had to do all day was listen to music like this and close my eyes and sway, my days would be complete.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Lovin You"],
    artist: ["Minnie Riperton"],
    date: `November 14, 2015`,
    text: `<speak>A number one hit on the US charts in 1975, Minnie Riperton’s breakout song, Lovin’ You, may make you cringe from the schmaltzy seventies vibe and her crazy high pitched soprano notes, or maybe it’s just the tweeting birds throughout. But I listen to this song and I can close my eyes and imagine being a wide-eyed little boy at West End Elementary School, the kid whose teachers usually agreed was always distracted in the classroom, somewhat of a nuisance. Yep, they actually said that to parents back then. But man, was I cute! Small but loud, full of happiness and innocence. Minnie was diagnosed with breast cancer, shortly after the success of this song and sadly passed away in 1979. On a special Mother’s Day episode of Saturday Night Live a few years back, comedian Maya Rudolph spoke about her mother, whose lullaby ballad was the very same I had always loved. It made me love this song even that much more. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/37_Lovin_You_final.mp3"/></speak>`,
    countdown: `fifty to fifty`,
    countdownDisplay: `50 to 50`,
    day: 37,
    year: [1975],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=7MmEVWI8Ieo"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Lovin' You",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/50-to-50/37_Lovin_You.jpeg",
        textContent: {
          artist: "Artist: Minnie Riperton",
          countdown: "Day 37 (50 to 50)",
          primaryText:
            "A number one hit on the US charts in 1975, Minnie Riperton’s breakout song, Lovin’ You, may make you cringe from the schmaltzy seventies vibe and her crazy high pitched soprano notes, or maybe it’s just the tweeting birds throughout. But I listen to this song and I can close my eyes and imagine being a wide-eyed little boy at West End Elementary School, the kid whose teachers usually agreed was always distracted in the classroom, somewhat of a nuisance. Yep, they actually said that to parents back then. But man, was I cute! Small but loud, full of happiness and innocence. Minnie was diagnosed with breast cancer shortly after the success of this song and sadly passed away in 1979. On a special Mother’s Day episode of Saturday Night Live a few years back, comedian Maya Rudolph spoke about her mother, whose lullaby ballad was the very same I had always loved. It made me love this song even that much more.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Stumblin in"],
    artist: ["Suzi Quatro And Chris Norman"],
    date: `November 15, 2015`,
    text: `<speak>This song might be a little bit of a surprise because it really never propelled the career of singer Suzi Quatro in the direction it should have (in my opinion), but it’s a melodic romp, through the late seventies sound, that I love so. It climbed to number four on the US charts in 1978, and it hooked me. It’s the kind of song that makes me crank the volume. The overall feel of this song reminds me of classic Fleetwood Mac, the voices are a natural match. <break time="150ms"/> Chris has that Rod Stewart rasp, and Suzi has a simple honesty, similar to that of Bonnie Tyler. <break time="150ms"/> A sincerity that begs your attention. <break time="350ms"/> As a side note, these old videos from the seventies crack me up, with their lack of production value! <break time="250ms"/> But that hair though. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/36_Stumblin_In_final.mp3"/></speak>`,
    countdown: `fifty to fifty`,
    countdownDisplay: `50 to 50`,
    day: 36,
    year: [1978],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=iGaF4tKUl0o"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Stumblin' In",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/50-to-50/36_Stumblin_RAW.jpg",
        textContent: {
          artist: "Artist: Suzi Quatro & Chris Norman",
          countdown: "Day 36 (50 to 50)",
          primaryText:
            "This song might be a little bit of a surprise because it really never propelled the career of singer Suzi Quatro in the direction it should have (in my opinion), but it’s a melodic romp through the late seventies sound that I love so. It climbed to number four on the US charts in 1978 and it hooked me. It’s the kind of song that makes me crank the volume. The overall feel of this song reminds me of classic Fleetwood Mac, the voices a natural match; Chris has that Rod Stewart rasp and Suzi has a simple honesty similar to that of Bonnie Tyler, a sincerity that begs your attention. As a side note, these old videos from the seventies crack me up with their lack of production value! But that hair though.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Gimme Shelter", "Angie"],
    artist: ["Rolling Stones", "Rolling Stones"],
    date: `November 16, 2015`,
    text: `<speak>The first of the giant rock and roll bands on my countdown, here are the Rolling Stones. We all know they have too many hits to mention, and so many songs to just love, but for the purposes of my lifetime, there are really only two, so this post will be sharing those two. <break time="350ms"/>The first is from the Vietnam era, 1969, and as with most music from that era, it played on the radio well into the seventies, until eventually, it found a home as a Classic Rock anthem. <break time="150ms"/> Gimme Shelter is just a giant song. Studio singer Merry Clayton, who provided additional backing vocals that are pure and full of earthly soul, stole the record. Sad that a song about the atrocities of war can be heralded as a hallmark of legend. <break time="450ms"/>The other, and certainly not lesser, of my two Stones’ songs is, obviously, Angie. <break time="150ms"/>Strip away the metal and you get a silent ballad in its most sincere form. It’s the song I always heard in my head, anytime my mother was sad; even though it was meant as a love song, for me it represented the need to always be able to lift her up and take away her pain. <break time="250ms"/> Even as a little boy, when it played on AM Radio, I was drawn to the emotion of helplessness and longing. <break time="150ms"/> Strangely, it was the first time it occurred to me that my mother had a name, and it was Angie. <break time="150ms"/> It’s impossible to explain the emotions this song makes me feel. I am being as real as possible when I say that it evokes tears every single time. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/35_Gimme_Shelter_Angie_final.mp3"/></speak>`,
    countdown: `fifty to fifty`,
    countdownDisplay: `50 to 50`,
    day: 35,
    year: [1969, 1973],
    genre: ``,
    significantHoomans: ["Angie"],
    youtube: [
      "https://www.youtube.com/watch?v=RbmS3tQJ7Os",
      "https://www.youtube.com/watch?v=K5_EBAzIPJM",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Gimme Shelter / Angie",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/50-to-50/35_Angie.jpg",
        textContent: {
          artist: "Artist: Rolling Stones",
          countdown: "Day 35 (50 to 50)",
          primaryText:
            "The first of the giant rock and roll bands on my countdown, here are the Rolling Stones. We all know they have too many hits to mention and so many songs to just love, but for the purposes of my lifetime, there are really only two, so this post will be sharing those two. The first is from the Vietnam era, 1969, and as with most music from that era it played on the radio well into the seventies until, eventually, it found a home as a Classic Rock anthem. Gimme Shelter is just a giant song. Studio singer Merry Clayton, who provided additional backing vocals that are pure and full of earthly soul, stole the record. Sad that a song about the atrocities of war can be heralded as a hallmark of legend. The other, and certainly not lesser, of my two Stones’ songs is, obviously, Angie. Strip away the metal and you get a silent ballad in its most sincere form. It’s the song I always heard in my head anytime my mother was sad; even though it was meant as a love song, for me it represented the need to always be able to lift her up and take away her pain. Even as a little boy, when it played on AM Radio I was drawn to the emotion of helplessness and longing; strangely, it was the first time it occurred to me that my mother had a name, and it was Angie. It’s impossible to explain the emotions this song makes me feel. I am being as real as possible when I say that it evokes tears every single time.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Fast Car"],
    artist: ["Tracy Chapman"],
    date: `November 17, 2015`,
    text: `<speak>Bleak, yet hopeful. Sad and beautiful. A voice like we’d never heard, and a chorus that was optimistic, as well as infectious. <break time="350ms"/>  <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/34_Fast_Car_louder1.mp3"/> Tracy Chapman came from nowhere with this monster song from 1988, that earned her a Grammy for Best Female Pop Vocal Performance, as well as Best New Artist. <break time="150ms"/> Though I couldn’t relate directly to the words of her song, I gravitated to the power of the music and the haunt of her voice. <break time="150ms"/> By far, Fast Car is one of my favorite songs of all time.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/34_Fast_Car_louder2.mp3"/></speak>`,
    countdown: `fifty to fifty`,
    countdownDisplay: `50 to 50`,
    day: 34,
    year: [1988],
    genre: ``,
    significantHoomans: ["Petey"],
    youtube: ["https://www.youtube.com/watch?v=AIOAlaACuv4"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Fast Car",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/50-to-50/34_Fast_Car.jpeg",
        textContent: {
          artist: "Artist: Tracy Chapman",
          countdown: "Day 34 (50 to 50)",
          primaryText:
            "Bleak yet hopeful. Sad and beautiful. A voice like we’d never heard and a chorus that was optimistic as well as infectious. Tracy Chapman came from nowhere with this monster song from 1988 that earned her a Grammy for Best Female Pop Vocal Performance as well as Best New Artist. Though I couldn’t relate directly to the words of her song, I gravitated to the power of the music and the haunt of her voice. By far, Fast Car is one of my favorite songs of all time.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Sunday Morning"],
    artist: ["Maroon 5"],
    date: `November 18, 2015`,
    text: `<speak> Sexy and melodic: that’s the best way to describe Sunday Morning, by Maroon 5. That impossibly effortless tenor voice on Adam Levine, in my opinion, is what makes him one of the sexiest men alive. <break time="250ms"/> It’s like a masculine silk. <break time="350ms"/> This song makes me close my eyes (dangerous when I’m driving!) and think about a wonderful stay-in-bed weekend listening to the rain and feeling loved. It’s just an overall feel-good ballad; not much else to it than that.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/33_Sunday_Morning_final.mp3"/></speak>`,
    countdown: `fifty to fifty`,
    countdownDisplay: `50 to 50`,
    day: 33,
    year: [2002],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=S2Cti12XBw4"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Sunday Morning",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/50-to-50/33_Sunday_Morning.jpg",
        textContent: {
          artist: "Artist: Maroon 5",
          countdown: "Day 33 (50 to 50)",
          primaryText:
            "Sexy and melodic: that’s how best to describe Sunday Morning by Maroon 5. That impossibly effortless tenor voice on Adam Levine, in my opinion, is what makes him one of the sexiest men alive. It’s like a masculine silk. And this song makes me close my eyes (dangerous when I’m driving!) and think about a wonderful stay-in-bed weekend listening to the rain and feeling loved. It’s just an overall feel-good ballad; not much else to it than that.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Otherside"],
    artist: ["Red Hot Chili Peppers"],
    date: `November 19, 2015`,
    text: `<speak>Flea’s bass. One of the most consistent things in music history. <break time="250ms"/> Anthony Keidis’s soulful, almost nasal voice, is like none other, and just the perfect harmony for the rock wonder that is, the Red Hot Chili Peppers. <break time="100ms"/> Another band whose collective music finds a home in my library. It’s hard to narrow down one favorite, but right after their biggest break-out, Under The Bridge, I find myself drawn to the harmonies and rhythmic bass of Otherside, from 2000’s Californication. Part of the reason I love it so much is that it will always remind me of watching my boys Rob and the Phurk jamming out on guitar and drums in their basement in Bath as I observed in awe. Raw talent, straight off the family tree. It was impossible not to be moved by that. I would go back to that moment in time in a second, knowing my Sis was just a few steps away upstairs, as was my cute little Mom, both probably cringing over the echo of the Phurk’s drums. <break time="250ms"/> Love. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/32_Otherside_final.mp3"/></speak>`,
    countdown: `fifty to fifty`,
    countdownDisplay: `50 to 50`,
    day: 32,
    year: [1999],
    genre: ``,
    significantHoomans: ["Rob", "The Phurk", "Rosemarie", "Angie"],
    youtube: ["https://www.youtube.com/watch?v=rn_YodiJO6k"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Otherside",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/50-to-50/32_Otherside.jpg",
        textContent: {
          artist: "Artist: Red Hot Chili Peppers",
          countdown: "Day 32 (50 to 50)",
          primaryText:
            "Flea’s bass, one of the most consistent things in music history; Anthony Keidis’s soulful, almost nasal voice is like none other, and just the perfect harmony for the rock wonder that is the Red Hot Chili Peppers. Another band whose collective music finds a home in my library, it’s hard to narrow down one favorite of theirs, but right after their biggest break-out Under The Bridge, I find myself drawn to the harmonies and rhythmic bass of Otherside from 2000’s Californication. Part of the reason I love it so much is that it will always remind me of watching my boys Rob and the Phurk jamming out on guitar and drums in their basement in Bath as I observed in awe. Raw talent, straight off the family tree. It was impossible not to be moved by that. I would go back to that moment in time in a second, knowing my Sis was just a few steps away upstairs, as was my cute little Mom, both probably cringing over the echo of the Phurk’s drums. Love.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Get Closer"],
    artist: ["Seals And Crofts"],
    date: `November 20, 2015`,
    text: `<speak>To know me is to know I am obsessed with the eighties. But to really know me, is to know I am also a dork that is enthralled by the sounds of the seventies, from the pop AM-Radio, hits to the disco, to the classic rock.<break time="250ms"/> Obviously the music of the seventies represents my childhood, from ages five to fourteen, the most formative and developmental. <break time="150ms"/>Elementary and Middle School, my mom’s many red-headed hairstyles, holidays at Aunt Annie’s, a park the size of the world across the street. <break time="250ms"/> I have a fondness for it all. Most days I try to remember what a lucky person I am, to have had such a dreamy, innocent childhood. Well protected, and overbearingly loved. <break time="150ms"/> There are several songs on this countdown from that decade, quite definitive of this genre of music, but this song resonates extra-specially with me. <break time="250ms"/>It’s another volume-blaster that inspires my best car-karaoke. Get Closer, by Seals and Crofts, is the epitome of that early seventies feel that was, my childhood. <break time="250ms"/>The consistent harmonies and the soft rock melodies are, to me, the sound of love, of joy, of togetherness. And that was what my childhood was.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/31_Get_Closer_final.mp3"/></speak>`,
    countdown: `fifty to fifty`,
    countdownDisplay: `50 to 50`,
    day: 31,
    year: [1976],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=rBUHdy8g8S4"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Get Closer",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/50-to-50/31_Get_Closer.png",
        textContent: {
          artist: "Artist: Seals & Crofts",
          countdown: "Day 31 (50 to 50)",
          primaryText:
            "To know me is to know I am obsessed with the eighties. But to really know me is to know I am also a dork that is enthralled by the sounds of the seventies, from the pop AM-Radio hits to the disco to the classic rock. Obviously the music of the seventies represents my childhood from ages five to fourteen, the most formative and developmental. Elementary and Middle School, my mom’s many red-headed hairstyles, holidays at Aunt Annie’s, a park the size of the world across the street: I have a fondness for it all. Most days I try and remember what a lucky person I am to have had such a dreamy, innocent childhood. Well protected, overbearingly loved. There are several songs on this countdown from that decade, quite definitive of this genre of music, but this song resonates extra-specially with me. It’s another volume-blaster that inspires my best car-karaoke. Get Closer by Seals & Crofts is the epitome of that early seventies feel that was my childhood. The consistent harmonies and the soft rock melodies are, to me, the sound of love, of joy, of togetherness. And that was what my childhood was.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Rock With You"],
    artist: ["Michael Jackson"],
    date: `November 21, 2015`,
    text: `<speak>Michael Jackson’s music never really did it for me. I mean, I get it, I really do. But for me there was really only one giant,amazing song, and it’s Rock With You. It’s that soft disco of the late seventies that I love, but think about it, the song really holds up today. You can hear it on Lite-FM or wherever, and it doesn’t sound like elevator music; it’s just got such a really great rhythm, and his voice is fluid like silk. I don’t love the beginning lyrics that much (they do sound a little rapey if you ask me…) but once it gets going and begins to sound like they’re mutually feeling it, I’m hooked. There’s a magic in this song, and one of my favorite lines from any song is in the bridge. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/30_Rock_With_You_final.mp3"/> I just love that. I hope this song makes you feel good too.</speak>`,
    countdown: `fifty to fifty`,
    countdownDisplay: `50 to 50`,
    day: 30,
    year: [1979],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=5X-Mrc2l1d0"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Rock With You",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/50-to-50/30_Rock_With_You.jpeg",
        textContent: {
          artist: "Artist: Michael Jackson",
          countdown: "Day 30 (50 to 50)",
          primaryText:
            "Michael Jackson’s music never really did it for me; I mean, I get it, I really do, but for me there was really only ever one giant amazing song, and it’s Rock With You. It’s that soft disco of the late seventies that I love, but think about it, the song really holds up today. You can hear it on Lite-FM or wherever and it doesn’t sound like elevator music; it’s just got such a really great rhythm, and his voice is fluid like silk. I don’t love the beginning lyrics that much (they do sound a little rapey, if you ask me…) but once it gets going and begins to sound like they’re mutually feeling it, I’m hooked. There’s a magic in this song. One of my favorite lines from any song is in the bridge: (And when the groove is dead and gone, yeah You know that love survives. So we can rock forever on…) I just love that. I hope this song makes you feel good too.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Creep"],
    artist: ["Radiohead"],
    date: `November 22, 2015`,
    text: `<speak><audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/29_Creep_final1.mp3"/> This song, aptly entitled Creep, is a refined mix of soulful rhythm, and taunting rock guitar jabs. I remember hearing it for the first time at a house party in Manhattan when I was in my mid-twenties, thinking to myself, this is the way music is going. It’s moody and melodramatic, the way an obsessed fan might be, and I have had my share of obsessions in my lifetime. It’s an anthem to all the things you wish you could touch, but know you’ll never be able to. They’re just.. out.. of reach. <break time="250ms"/> During the bridge when Thom Yorke breaks into falsetto, there’s so much intensity that you become glued to the sound. It’s inescapable. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/29_Creep_final2.mp3"/></speak>`,
    countdown: `fifty to fifty`,
    countdownDisplay: `50 to 50`,
    day: 29,
    year: [1992],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=XFkzRNyygfk"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Creep",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/50-to-50/29_Creep.jpeg",
        textContent: {
          artist: "Artist: Radiohead",
          countdown: "Day 29 (50 to 50)",
          primaryText:
            "('I wish I was special..You're So fucking special') This song, aptly entitled Creep, is a refined mix of soulful rhythm and taunting rock guitar jabs. I remember hearing it for the first time at a house party in Manhattan when I was in my mid-twenties, thinking to myself this is the way music is going. It’s moody and melodramatic the way an obsessed fan might be, and I have had my share of obsessions in my lifetime. It’s an anthem to all the things you wish you could touch but know you’ll never be able to. They’re just.. out.. of reach. During the bridge when Thom Yorke breaks into falsetto, there’s so much intensity that you become glued to the sound. It’s inescapable. ('But I'm a creep. I'm a weirdo. What the hell am I doing here? I don't belong here...')",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["How Much I Feel"],
    artist: ["Ambrosia"],
    date: `November 23, 2015`,
    text: `<speak>Back to the late 70’s again, with a band that had a few moderately successful hits, in a time when music was changing drastically. A.M. Radio was fading away, as punk and pop were moving to the forefront, but the harmonies of Ambrosia’s, How Much I Feel, stick with me to this day, every time I hear it. <break time="500ms"/> It’s a brooding song about wishing he still had what he lost, and even though he’s moved on, he still longs. I think we all have a “one that got away” scenario, through which we can identify. The bridge of the song is my absolute favorite, probably of any song at all. I am obsessed with the backing harmonies. They’re sweet, sad and beautiful. Then add the piano and bass. I can’t. Lead vocalist David Pack’s voice, so honeyed and expressive, against those delicious harmonies? I can listen to it on repeat, for hours. And I do. And I AM.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/28_How_Much_I_Feel_Final_New.mp3"/></speak>`,
    countdown: `fifty to fifty`,
    countdownDisplay: `50 to 50`,
    day: 28,
    year: [1978],
    genre: ``,
    significantHoomans: ["Adam"],
    youtube: ["https://www.youtube.com/watch?v=N3mnKW37cBY"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "How Much I Feel",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/50-to-50/28_How_Much_I_Feel.jpeg",
        textContent: {
          artist: "Artist: Ambrosia (50 to 50)",
          countdown: "Day 28 (50 to 50)",
          primaryText:
            "Back to the late 1970’s again with a band that had a few moderately successful hits in a time when music was changing drastically. AM Radio was fading away as punk and pop were moving to the forefront, but the harmonies of Ambrosia’s How Much I Feel stick with me to this day, every time I hear it. It’s a brooding song about wishing he still had what he lost, and even though he’s moved on, he still longs. I think we all have a “one that got away” scenario through which we can identify. The bridge of the song is my absolute favorite, probably of any song at all. I am obsessed with the backing harmonies. They’re sweet and sad and beautiful. Then add the piano and bass. I can’t.  Lead vocalist David Pack’s voice, so honeyed and expressive, against those delicious harmonies? I can listen to it on repeat for hours. And I do. And I AM.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Cool Change"],
    artist: ["Little River Band"],
    date: `November 24, 2015`,
    text: `<speak>Mostly, today’s song is about sailing under a bright full moon. But as a kid, back in those early Pocono days, feeling trapped and wounded, this song was about hopeful release. The yearning for freedom, in so many ways. <break time="350ms"/>This song was on the charts, when my only escape was reading about a group of stalwart teenagers, from a hundred planets, who often boarded their space jet and traversed the stars, in the pursuit of galactic peace. <break time="150ms"/> I longed to be one of them, right down to their colorful jumpsuits and impossibly tall headquarters that jutted atop the skyline of a 30th century metropolis.<break time="150ms"/> I’d look up at the endless stars in my own front yard and close my eyes, pining for the day their space cruiser would come and find me, and help me discover my own powers that I’d never known I’d had, all along. <break time="350ms"/> I’d say goodbye to my sickly poodle, and maybe hug my mother really hard. Then I’d gladly board that cruiser and speed off to the far-flung future, where anything and everything was possible. <break time="250ms"/> Yeah, so none of that is conveyed in the lyrics of this song, but when I hear it, it’s where my mind immediately goes. <break time="150ms"/> Every, Time. <break time="250ms"/> Walking the halls of the H.Q. with stocky Ultra Boy and his caped pal Mon-El, heading to the mission monitor room where Star Boy and Dream Girl were coyly bobbing a verbal spar, while not really watching the edges of space on the monitor.<break time="150ms"/> I’d overhear Phantom Girl’s voice echoing in the hallways, giggling to her friend Shadow Lass as they turn to watch their respective boyfriends amble in the opposite direction. Soon, a gust of air would gather, and a colorful tunnel would open in mid-air, as Superboy would appear from his own time, somewhere in the nineteen sixties, and the mood would immediately change to that of celebration as everyone’s favorite caped hero had just arrived. <break time="950ms"/>That’s how alone I felt in nineteen eighty. <break time="1900ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/27_Cool_Change_final.mp3"/></speak>`,
    countdown: `fifty to fifty`,
    countdownDisplay: `50 to 50`,
    day: 27,
    year: [1979],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=9bKwRW0l-Qk"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Cool Change",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/50-to-50/27_Cool_Change.jpeg",
        textContent: {
          artist: "Artist: Little River Band",
          countdown: "Day 27 (50 to 50)",
          primaryText:
            "Mostly, today’s song is about sailing under a bright full moon, but as a kid back in those early Pocono days, feeling trapped and wounded, this song was about hopeful release, the yearning for freedom, in so many ways. This song was on the charts when my only escape was reading about a group of stalwart teenagers from a hundred planets who often boarded their space jet and traversed the stars in the pursuit of galactic peace; I longed to be one of them, right down to their colorful jumpsuits and impossibly tall headquarters that jutted atop the skyline of a 30th century metropolis. I’d look up at the endless stars in my own front yard and close my eyes, pining for the day their space cruiser would come and find me, help me discover my own powers that I’d never known I’d had all along. I’d say goodbye to my sickly poodle and maybe hug my mother really hard, but I’d gladly board that cruiser and speed off to the far-flung future where anything and everything was possible. Yeah, so none of that is conveyed in the lyrics of this song, but when I hear it, it’s where my mind immediately goes. Every. Time. Walking the halls of the HQ with stocky Ultra Boy and his caped pal Mon-El, heading to the mission monitor room where Star Boy and Dream Girl were coyly bobbing a verbal spar while not really watching the edges of space on the monitor. I’d overhear Phantom Girl’s voice echoing in the hallways, giggling to her friend Shadow Lass as they turn to watch their respective boyfriends amble in the opposite direction. Soon a gust of air would gather and a colorful tunnel would open in mid-air as Superboy would appear from his own time, somewhere in the 1960s, and the mood would immediately change to that of celebration as everyone’s favorite caped hero had just arrived. That’s how alone I felt in 1980.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Hello"],
    artist: ["Lionel Richie"],
    date: `November 25, 2015`,
    text: `<speak>As promised a few days back, here again is Lionel Richie. Basically, the entire album, Can’t Slow Down, is amazing and classic, but for the sake of narrowing as much as I can, I will talk about my favorite Lionel song. <break time="150ms"/> Hello. With honorable mention to the jaunty, All Night Long. <break time="250ms"/> All Night Long is really just such a happy song. It reminds me of my high school savior Maria (a common person to whom music usually pulls me back), and our Friday nights watching videos and having sleep-overs. It was during those moments with Maria, that I began to find courage and confidence, and when I hear this song, I am reminded of her friendship and support. <break time="350ms"/> But the real song here is Hello.<break time="250ms"/>The epitome of eighties mush, with one of the most terrible videos to go with its. <break time="150ms"/>It’s about yearning for someone who sees you but doesn’t really see you. <break time="150ms"/> And at the very young age of 17 (much younger in mind than most at that age), as I was finally away from my parents at college in Scranton, I began to experience things I could only imagine in my small bedroom at home. <break time="250ms"/> Here I was, with athletic young men, in a dorm that smelled like a gym locker-room. <break time="250ms"/> Open doors, loud music, ample cologne to cover up the stank. <break time="150ms"/> But there was one boy, one very special boy. <break time="350ms"/> For privacy purposes, let’s call him Josh. <break time="150ms"/> He was from New Jersey and was incredibly popular. His room was at the farthest end of our floor, so he had to walk past our room at least 4 times a day. At first it was just a hey buddy, until he learned my name, and then it was, Hey, Nicky-Nick! <break time="150ms"/> The only of the athletic guys to even acknowledge me, let alone call me a silly nickname. <break time="150ms"/> I was done. Cooked. Finito. <break time="150ms"/> His smile, his shoulders, that hair, the dimple on his chin. Jesus Christ. <break time="150ms"/> Now, play Hello, by Lionel Richie on repeat. So many times that your roommate actually threatens to smother you with your pillow as you sleep. <break time="150ms"/> So many times you forget the words to the song and only hear the melody when “Josh” walks past your door, all shirtless with a football and an open Rolling Rock. <break time="150ms"/> I think it was the first time I ever understood the meaning of the word, unrequited.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/26_Hello_final.mp3"/></speak>`,
    countdown: `fifty to fifty`,
    countdownDisplay: `50 to 50`,
    day: 26,
    year: [1983],
    genre: ``,
    significantHoomans: ["Maria"],
    youtube: ["https://www.youtube.com/watch?v=mHONNcZbwDY"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Hello",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/50-to-50/26_Lionel_Richie_Hello.jpeg",
        textContent: {
          artist: "Artist: Lionel Richie",
          countdown: "Day 26 (50 to 50)",
          primaryText:
            "As promised a few days back, here again is Lionel Richie. Basically, the entire album Can’t Slow Down is amazing and classic, but for the sake of narrowing as much as I can, I will talk about my favorite Lionel song, Hello, with honorable mention to the jaunty All Night Long. All Night Long is really just such a happy song. It reminds me of my high school savior Maria (a common person to whom music usually pulls me back), and our Friday nights watching videos and having sleep-overs. It was during those moments with Maria that I began to find courage and confidence, and when I hear this song I am reminded of her friendship and support. But the real song here is Hello. The epitome of eighties mush, with one of the most terrible videos to go with, it’s about yearning for someone who sees you but doesn’t really see you. And at the very young age of 17 (I was much younger in mind than most at that age), as I was finally away from my parents at college in Scranton, I began to experience things I could only imagine in my small bedroom at home. Here I was with athletic young men in a dorm that smelled like a gym locker room: open doors, loud music, ample cologne to cover up the stank. But there was one boy, one very special boy… for privacy purposes, let’s call him Josh. He was from New Jersey and was incredibly popular. His room was at the farthest end of our floor so he had to walk past our room at least 4 times a day. At first it was just a “hey buddy,” until he learned my name, and then it was, “Hey, Nicky-Nick!” The only of the athletic guys to even acknowledge me, let alone call me a silly nickname. I was done. Cooked. Finito. His smile, his shoulders, that hair, the dimple on his chin. Jesus Christ. Now, play Hello by Lionel Richie on repeat. So many times your roommate actually threatens to smother you with your pillow as you sleep. So many times you forget the words to the song and only hear the melody when “Josh” walks past your door, all shirtless with a football and an open Rolling Rock. I think it was the first time I ever understood the meaning of the word 'unrequited'.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Show Me The Way"],
    artist: ["Peter Frampton"],
    date: `November 26, 2015`,
    text: `<speak>Picture, if you will, driving from Lynbrook, Long Island, to Miami Florida, in a smoke filled wood-paneled station wagon. 3 howling boys with no seat belts, bouncing from back seat to cargo area, without abandon. The year was nineteen seventy-six, and the soundtrack was Frampton Comes Alive. <break time="100ms"/>Sounds like we’d all never heard before, voice synthesized through guitar. I was on the edge of 10, but my brothers and dad were really into this sound. Wah, wah wah wah wah Waaah, wah wahwah wah WAH wah wah wah. I can picture it pretty vividly. <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/25_Show_Me_The_Way_final1.mp3"/>  Every single time I hear, Show Me The Way, I am brought back to that simple time in the Marino family’s history, our first real road trip. It’s one of the only songs that reminds me of my brothers from a more innocent time, and over the past few years as my oldest brother, Car-mine, was going through all his cancer treatments, I would snap a pic of the Sirius screen in my car to text it to him and remind him of the simpler times. I guess now it takes on a more sentimental meaning.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/25_Show_Me_The_Way_final2.mp3"/></speak>`,
    countdown: `fifty to fifty`,
    countdownDisplay: `50 to 50`,
    day: 25,
    year: [1975],
    genre: ``,
    significantHoomans: ["Carmine", "Michael"],
    youtube: ["https://www.youtube.com/watch?v=gIRqMTg1GVc"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Show Me The Way",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/50-to-50/25_Show_Me_The_Way.jpg",
        textContent: {
          artist: "Artist: Peter Frampton",
          countdown: "Day 25 (50 to 50)",
          primaryText:
            "Picture, if you will, driving from Lynbrook, Long Island, to Miami, Florida, in a smoke filled wood-paneled station wagon, 3 howling boys with no seat belts, bouncing from back seat to cargo area without abandon. The year was 1976, and the soundtrack was Frampton Comes Alive. Sounds like we’d all never heard before, voice synthesized through guitar. I was on the edge of 10, but my brothers and dad were really into this sound. Wah, wah wah wah wah Waaah, wah wahwah wah WAH wah wah wah. I can picture it pretty vividly, and every single time I hear Show Me The Way, I am brought back to that simple time in the Marino family’s history, our first real road trip. It’s one of the only songs that reminds me of my brothers from a more innocent time, and over the past few years as my oldest brother Carmine was going through all his cancer treatments, I would snap a pic of the Sirius screen in my car to text it to him and remind him of the simpler times. I guess now it takes on a more sentimental meaning.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["As Long As You Love Me", "You Will Be In My Heart"],
    artist: ["Backstreet Boys", "Phil Collins"],
    date: `November 27, 2015`,
    text: `<speak><audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/24_Backstreet_Collins_final1.mp3"/> Anyone who knows me, knows that nineteen ninety-seven was the most horrific year of my life. It was the year I lost faith in God, and watched as two beautiful small children had to move forward in the world, without the most amazing mother I’d ever seen or met. <break time="250ms"/> Mary’s death changed so many lives, including my own selfish, day-to-day existence. Reality planted my very heavy feet that day in October, and I knew, through floods of tears, I would never ever see the world the same way again. <break time="350ms"/> In the weeks and months following the loss of Mary, I spent a lot of time with her babies. Watching them grow and wonder, and try to put their tiny fingers on what the hell happened. <break time="250ms"/> I would cook them grilled cheeses and some soup, and we’d sit on the couch watching Disney movies, hoping to make it all just go away. <break time="250ms"/> I would leave the room to go sob in Mary’s kitchen, trying desperately not to let them see me. <break time="350ms"/> One time, that I can never forget as long as I have memory, as I sat in the kitchen sulking, little Mike wandered over and peeked his chubby cheeks from the doorway and asked, <break time="250ms"/> “Uncle Nicky, why are you crying?” <break time="250ms"/> Immediately I dried my face and said, “I’m not crying Mike, I’m ok.” <break time="250ms"/> He walked into the room, pulled out one of the heavy wood chairs, and climbed up onto his knees to rest his elbows on the table. <break time="250ms"/> Without words or provocation, he began singing along to the song on the radio. <break time="250ms"/> “I don’t care who you are, where you’re from, don’t care what you did, as long as you love me.” <break time="250ms"/> Every single word, clearly, as if he were the littlest Backstreet Boy, never ever taking his eyes away from mine. <break time="250ms"/> In the other room sat the sad little girl without a mommy, watching Tarzan. Mike and I went into the living room to join Angela and as soon as we sat, Phil Collins', You’ll be In My Heart blared, and she looked up at me. “Oh stop you’re crying, it’ll be alright. Just take my hand, hold it tight. I will protect you from all around you, I will be here, don’t you cry.” As I teared up again, she grabbed my hand. <break time="250ms"/> A 4 and a half year old was reassuring me, with strength and love, that can never ever be matched or lost. <break time="1500ms"/><audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/24_Backstreet_Collins_final3.mp3"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/24_Backstreet_Collins_final2.mp3"/></speak>`,
    countdown: `fifty to fifty`,
    countdownDisplay: `50 to 50`,
    day: 24,
    year: [1997, 1999],
    genre: ``,
    significantHoomans: ["Mary", "Angela and Mike"],
    youtube: [
      "https://www.youtube.com/watch?v=0Gl2QnHNpkA",
      "https://www.youtube.com/watch?v=git6DCXSqjE",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "As Long As You Love Me / You'll Be In My Heart",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/50-to-50/24_Phil_Collins.jpeg",
        textContent: {
          artist: "Artist: Backstreet Boys / Phil Collins",
          countdown: "Day 24 (50 to 50)",
          primaryText:
            "Anyone who knows me knows that 1997 was the most horrific year of my life. It was the year I lost faith in God and watched as two beautiful, small children had to move forward in the world without the most amazing mother I’d ever seen or met. Mary’s death changed so many lives, including my own selfish, day-to-day existence. Reality planted my very heavy feet that day in October and I knew through floods of tears I would never ever see the world the same way again. In the weeks and months following the loss of Mary, I spent a lot of time with her babies, watching them grow and wonder and try to put their own tiny fingers on what the hell happened. I would cook them grilled cheeses and open some soup, and we’d sit on the couch watching Disney movies hoping to make it all just go away. I would leave the room to go sob in Mary’s kitchen, trying desperately not to let them see me; one time, that I can never forget as long as I have memory, as I sat in the kitchen sulking, little Mike wandered over and peeked his chubby cheeks from the doorway and asked, “Uncle Nicky, why are you crying?” Immediately I dried my face and said, “I’m not crying, Mike, I’m ok.” He walked into the room, pulled out one of the heavy wood chairs and climbed up onto his knees to rest his elbows on the table. Without words or provocation, he began singing along to the song on the radio.. “I don’t care who you are, where you’re form, don’t care what you did, as long as you love me.” Every single word, clearly, as if he were the littlest Backstreet Boy, never ever taking his eyes away from mine. In the other room sat the sad little girl without a mommy, watching Tarzan. Mike and I went into the living room to join Angela and as soon as we sat, Phil Collins’ You’ll be In My Heart blared and she looked up at me. “Oh stop you’re crying, it’ll be alright. Just take my hand, hold it tight. I will protect you from all around you, I will be here, don’t you cry.” As I teared up again, she grabbed my hand. A 4 ½ year old was reassuring me with strength and love that can never ever be matched or lost.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["From A Distance", "Get Here"],
    artist: ["Bette Midler", "Oleta Adams"],
    date: `November 28, 2015`,
    text: `<speak>A pair of songs from 1990, both of which bring me to my mother, and to the hope for peace in the world, and the need to tell the people you love, that you love them. <break time="250ms"/>From A Distance, was released during the Gulf War, and the Divine Miss M. <break time="10ms"/> belted out our need for peace already. Our need to stop all this senseless shit. <break time="150ms"/> Shortly thereafter came Get Here, by Oleta Adams, whose angelic voice was a harbinger of the desperation of holding the ones you loved as close as possible. <break time="150ms"/> This all, while I was in the process of finally coming out to my mother, and hoping I’d never need to yearn for her with the possibility of being shunned and excommunicated. Looking back and hearing these songs today, I celebrate the strength of character my mother had, in the face of what others would think. She loved me no matter what, proving she was one classy bitch. As a post script, one of the final voicemails from my sister (that is saved in my VMs if I ever need to hear her beautiful little voice again) <break time="150ms"/>  was that she called just to tell me From A Distance was on, and she knew Mommy was there with her, helping her stay strong. <break time="150ms"/>Insert waterworks here. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/23_From_A_Distance_final.mp3"/></speak>`,
    countdown: `fifty to fifty`,
    countdownDisplay: `50 to 50`,
    day: 23,
    year: [1990, 1990],
    genre: ``,
    significantHoomans: ["Angie"],
    youtube: [
      "https://www.youtube.com/watch?v=lN4AcFzxtdE",
      "https://www.youtube.com/watch?v=TMvapCHumpE",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "From A Distance / Get Here",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/50-to-50/23_From_A_Distance.jpg",
        textContent: {
          artist: "Artist: Bette Midler / Oleta Adams",
          countdown: "Day 17 (50 to 50)",
          primaryText:
            "A pair of songs from 1990 and 91, both of which bring me to my mother and to the hope for peace in the world and the need to tell the people you love that you love them. From A Distance was released during the Gulf War and the Divine Miss M belted out our need for peace already, our need to stop all this senseless shit. Shortly thereafter came Get Here by Oleta Adams, whose angelic voice was a harbinger of the desperation of holding the ones you loved as close as possible. This all while I was in the process of finally coming out to my mother and hoping I’d never need to yearn for her with the possibility of being shunned and excommunicated. Looking back and hearing these songs today, I celebrate the strength of character my mother had, in the face of what others would think. She loved me no matter what, proving she was one classy bitch. As a post script, one of the final voicemails from my sister (that is saved in my VMs if I ever need to hear her beautiful little voice again, thankfully) was that she called just to tell me From A Distance was on and she knew Mommy was there with her, helping her stay strong. Insert waterworks here.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Reelin In The Years", "Do It Again"],
    artist: ["Steely Dan", "Steely Dan"],
    date: `November 29, 2015`,
    text: `<speak>Finally, songs from a band that aren’t going to make anyone try and hang themselves! Steely Dan has released a good amount of amazing music, but for me there are 2 giants, and they are Reelin’ In The Years and Do It Again. These are songs that, when they come on the radio, get cranked to maximum and my poor steering wheel ends up getting drummed on like that’s its job. I challenge you to listen to either of these songs and not enjoy them. They don’t necessarily remind me of anything (which, if you’ve been following my 50 to 50 blog, most songs do) but they always perk me up and make me feel good, which is the whole point of music, no?<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/22_Steely_Dan_final1.mp3"/><audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/22_Steely_Dan_final2.mp3"/></speak>`,
    countdown: `fifty to fifty`,
    countdownDisplay: `50 to 50`,
    day: 22,
    year: [1972, 1972],
    genre: ``,
    significantHoomans: [],
    youtube: [
      "https://www.youtube.com/watch?v=GaH25Sghoqc",
      "https://www.youtube.com/watch?v=jmdiKePVUy8",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Reelin’ In The Years / Do It Again",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/50-to-50/22_Steely_Dan.jpg",
        textContent: {
          artist: "Artist: Steely Dan",
          countdown: "Day 22 (50 to 50)",
          primaryText:
            "Finally, songs from a band that aren’t going to make anyone try and hang themselves! Steely Dan has released a good amount of amazing music, but for me there are 2 giants, and they are Reelin’ In The Years and Do It Again. These are songs that, when they come on the radio, get cranked to maximum and my poor steering wheel ends up getting drummed on like that’s its job. I challenge you to listen to either of these songs and not enjoy them. They don’t necessarily remind me of anything (which, if you’ve been following my 50 to 50 blog, most songs do) but they always perk me up and make me feel good, which is the whole point of music, no?",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Save A Prayer"],
    artist: ["Duran Duran"],
    date: `November 30, 2015`,
    text: `<speak>Let’s talk about Duran Duran, shall we? I mean, these guys were the shit. In a way, they kind of still are. Pop sensations breaking ground and mastering the art of the music video, songs that are so memorable, everyone in every country around the globe can recognize them. <break time="150ms"/> Tell me you don’t know at least some of the words to Rio, or Hungry Like The Wolf? Don’t lie and say you weren’t a little tickled when H. and M. used a revamped version of Girls On Film, for one of their commercials. This band epitomized eighties pop culture and I am honored to know I got to experience it full-on. Even into the nineties with songs like Ordinary World, a song that still holds up today. <break time="150ms"/>Since I can’t choose between Rio and Hungry Like The Wolf, I’ve decided to choose a D-squared ballad that makes me close my eyes and breathe in deeply, because I just can’t, anytime I hear it. In a good way. This is, Save A Prayer, and I hope you like it as much as I. It’s not Rio, and it’s not Hungry, but it’s Duran squared, so it’s golden.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/21_Save_A_Prayer_final.mp3"/></speak>`,
    countdown: `fifty to fifty`,
    countdownDisplay: `50 to 50`,
    day: 21,
    year: [1982],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=6Uxc9eFcZyM"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Save A Prayer",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/50-to-50/21_Save_A_Prayer.jpg",
        textContent: {
          artist: "Artist:",
          countdown: "Day 21 (50 to 50)",
          primaryText:
            "Let’s talk about Duran Duran, shall we? I mean, these guys were the shit. In a way, they kind of still are. Pop sensations breaking ground and mastering the art of the music video, songs that are so memorable, everyone in every country around the globe can recognize them. Tell me you don’t know at least some of the words to Rio or Hungry Like The Wolf? Don’t lie and say you weren’t a little tickled when H&M used a revamped version of Girls On Film for one of their commercials. This band epitomized eighties pop culture and I am honored to know I got to experience it full-on. Even into the nineties with songs like Ordinary World, a song that still holds up today. Since I can’t choose between Rio an Hungry Like The Wolf, I’ve decided to choose a D-squared ballad that makes me close my eyes and breathe in deeply because I just can’t, anytime I hear it. In a good way. This is, Save A Prayer, and I hope you like it as much as I. It’s not Rio, and it’s not Hungry, but it’s Duran2, so it’s golden.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Maybe I’m Amazed"],
    artist: ["Paul McCartney"],
    date: `December 1, 2015`,
    text: `<speak><audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/20_Paul_McCartney_final1.mp3"/> <break time="350ms"/> I took a lot of things away from my ten years with my ex-partner, but the most was his loyalty to the ones he really deeply loves. To be able to keep someone you once slept with, went on vacations with, and went to family parties with, in your life, after breaking up, is a really hard thing to do, and I was terrified to do it, which is why we lasted so much longer than we should've. But here he is, still here in my life, still always a presence and a friend to me and my loved ones. When I turned 40, he proved once again his loyalty and kinship by throwing me a very unexpected, very ME, surprise party. And we were already officially split at that point, for almost 3 years, and he was already with his new partner, another surprise in my life, someone who I adore and I think adores me. So Maybe I’m Amazed is a love song, I get it. I know Paul wrote it for the love of his life, Linda. But for me, it’s not a romantic love song, but yes, it’s a love song. A thank you song, to someone who still came around after some really poor behavior on my part, someone who stuck by me through the worst parts of my life, and even now into the good parts. I’m amazed someone can be that loyal a friend. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/20_Paul_McCartney_final2.mp3"/></speak>`,
    countdown: `fifty to fifty`,
    countdownDisplay: `50 to 50`,
    day: 20,
    year: [1970],
    genre: ``,
    significantHoomans: ["Frank"],
    youtube: ["https://www.youtube.com/watch?v=cdDPR8GzXy8"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Maybe I'm Amazed",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/50-to-50/20_Paul_McCartney.jpeg",
        textContent: {
          artist: "Artist: Paul McCartney",
          countdown: "Day 20 (50 to 50)",
          primaryText:
            "('Maybe I'm amazed at the way you’re with me all the time. Maybe I'm afraid of the way I leave you')I took a lot of things away from my ten years with my ex-partner, but the most was his loyalty to the ones he really deeply loves. To be able to keep someone you once slept with and went on vacations with and went to family parties with in your life after breaking up is a really hard thing to do, and I was terrified to do it, which is why we lasted so much longer than we should have. But here he is, still here in my life, still always a presence and a friend to me and my loved ones. When I turned 40, he proved once again his loyalty and kinship by throwing me a very unexpected, very ME surprise party. And we were already officially split at that point for almost 3 years, and he was already with his new partner, another surprise in my life, someone who I adore and I think adores me. So maybe Maybe I’m Amazed is a love song, I get it. I know Paul wrote it for the love of his life, Linda. But for me, it’s not a romantic love song, but yes, it’s a love song, a thank you song to someone who still came around after some really poor behavior on my part, someone who stuck by me through the really shittiest parts of my life, and even now into the good parts. I’m amazed someone can be that loyal a friend.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Hold The Line"],
    artist: ["Toto"],
    date: `December 2, 2015`,
    text: `<speak>Much like my post 2 days ago about Duran Duran, a similar thing can be said. <break time="150ms"/> How can you choose one amazing song by Toto, when there were so damn many? Love songs and pop smashes, all of which soared the charts in the early 80’s. You know that anytime you meet someone named Rosanna, you hear Steve Lukather singing her name in your head. Admit it. And you KNOW you wish you knew about the rains down in Africa. Don’t even play. <break time="150ms"/> Here we have my first favorite by these guys, their late seventies foray into the limelight, for a band of guys who otherwise had been studio session players. Hold The Line, has amazing guitars and amazing vocals and a catchy hook with the synths. I crank it every single time I hear it. It’s not Africa or Rosanna, but it counts.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/19_Hold_The_Line_final.mp3"/></speak>`,
    countdown: `fifty to fifty`,
    countdownDisplay: `50 to 50`,
    day: 19,
    year: [1978],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=htgr3pvBr-I"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Hold The Line",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/50-to-50/19_Hold_The_Line.jpeg",
        textContent: {
          artist: "Artist: Toto",
          countdown: "Day 19 (50 to 50)",
          primaryText:
            "Much like my post 2 days ago about Duran Duran, a similar thing can be said. How can you choose one amazing song by Toto, when there were so damn many? Love songs and pop smashes, all of which soared the charts in the early 80’s. You know that anytime you meet someone named Rosanna, you hear Steve Lukather singing her name in your head. Admit it. And you KNOW you wish you knew about the rains down in Africa. Don’t even play. Here we have my first favorite by these guys, their late seventies foray into the limelight, for a band of guys who otherwise had been studio session players. Hold The Line, has amazing guitars and amazing vocals and a catchy hook with the synths. I crank it every single time I hear it. It’s not Africa or Rosanna, but it counts.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Together In Electric Dreams"],
    artist: ["Giorgio Moroder And Phil Oakey"],
    date: `December 3, 2015`,
    text: `<speak>Not the first Vincent song. <break time="150ms"/>Won't be the last. <break time="250ms"/> He LOVED this song, and I loved it too, never even knowing it. It’s from some dumb eighties movie, called Electric Dreams, (where subsequently, actress Virginia Madsen got her start). It’s so catchy that you can’t help but get pulled in. But here’s the rub: the damn lyrics are eerily apt, for how much I miss my best friend, and never knew how bad I’d miss him when we first met, and instantly became one another’s lobster.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/18_Together_In_Electric_Dreams_final.mp3"/></speak>`,
    countdown: `fifty to fifty`,
    countdownDisplay: `50 to 50`,
    day: 18,
    year: [1984],
    genre: ``,
    significantHoomans: ["Vinny"],
    youtube: ["https://www.youtube.com/watch?v=GBSzdYiP0Qc"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Together In Electric Dreams",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/50-to-50/18_Together_In_Electric_Dreams.jpeg",
        textContent: {
          artist: "Artist: Giorgio Moroder & Phil Oakey",
          countdown: "Day 18 (50 to 50)",
          primaryText:
            "Not the first Vincent song. Won't be the last. He LOVED this song, and I loved it too, never even knowing it. It’s from some dumb eighties movie, called Electric Dreams, (where, subsequently, actress Virginia Madsen got her start). It’s so catchy that you can’t help but get pulled in. But here’s the rub: the damn lyrics are eerily apt for how much I miss my best friend, and never knew how bad I’d miss him when we first met and instantly became one another’s lobster. - (Because the friendship that you gave, Has taught me to be brave, No matter where I go, I'll never find a better prize, Though you're miles and miles away, I see you every day, I don't have to try, I just close my eyes, I close my eyes, We'll always be together, However far it seems (Love never ends) We'll always be together Together in Electric Dreams",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Chasing Cars"],
    artist: ["Snow Patrol"],
    date: `December 4, 2015`,
    text: `<speak>Chasing Cars, by Snow Patrol, is an unassuming little ballad from the later aughts, and for me it’s a comfortable, beautiful song, about knowing you’ve found the one, again. <break time="150ms"/> I met my Woof, and he was wounded; fragments of his heart were missing, and it was so hard not to fall for someone, knowing how empty and broken his heart was. <break time="150ms"/> I saw who he was the instant we met. I saw the love and joy and compassion, and looking into the eyes that yearned for his children, it was obvious this was a man who was on the brink of hopelessness. I helped bring him back to life, and I knew someday those missing pieces of his heart would be found; and they were. <break time="250ms"/> Thing is, he helped bring me back to life too. I was deafened by so many things, that I had built barriers and began to shut down, but helping him helped me. <break time="250ms"/>This song makes me think of that time in both our lives, discovering we can be happy again, if we just hang on to hope, and to each other. <break time="150ms"/> We spoke about whether or not we had a song, last year while planning our wedding. If I had to choose one, it would have been this.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/17_Chasing_Cars_final2.mp3"/></speak>`,
    countdown: `fifty to fifty`,
    countdownDisplay: `50 to 50`,
    day: 17,
    year: [2006],
    genre: ``,
    significantHoomans: ["Stomps"],
    youtube: ["https://www.youtube.com/watch?v=GemKqzILV4w"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Chasing Cars",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/50-to-50/17_Chasingcars.jpeg",
        textContent: {
          artist: "Artist: Snow Patrol",
          countdown: "Day 17 (50 to 50)",
          primaryText:
            "Chasing Cars by Snow Patrol is an unassuming little ballad from the later aughts, and for me it’s a comfortable, beautiful song about knowing you’ve found the one, again. I met my Woof and he was wounded; fragments of his heart were missing and it was so hard not to fall for someone knowing how empty and broken his heart was. I saw who he was the instant we met. I saw the love and joy and compassion, and looking into the eyes that yearned for his children, it was obvious this was a man who was on the brink of hopelessness. I helped bring him back to life, and I knew someday those missing pieces of his heart would be found; and they were. Thing is, he helped bring me back to life too. I was deafened by so many things that I had built barriers and began to shut down, but helping him helped me. This song makes me think of that time in both our lives, discovering we can be happy again, if we just hang on to hope, and to each other. We spoke about whether or not we had “a song” last year while planning our wedding. If I had to choose one, it would have been this. (I need your grace, To remind me, To find my own if I lay here, If I just lay here, Would you lie with me and just forget the world?)",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Let It Be"],
    artist: ["The Beatles"],
    date: `December 5, 2015`,
    text: `<speak>The Beatles are the biggest rock band in history. Like, world history. They are the standard by which many others gauge their influence, whom most emulate, from whom they borrow, to whom they credit their own successes. So how do you even choose a favorite Beatles’ song? <break time="250ms"/> You don’t, obviously. They created anthems for our time. Ballads to last centuries. I can’t really say anything that has not been said before. That said, please enjoy this song from their last album. I’ll bet you love this one as much as I do.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/16_Let_It_Be_final.mp3"/></speak>`,
    countdown: `fifty to fifty`,
    countdownDisplay: `50 to 50`,
    day: 16,
    year: [1970],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=QDYfEBY9NM4"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Let It Be",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/50-to-50/16_Let_It_Be.jpg",
        textContent: {
          artist: "Artist: The Beatles",
          countdown: "Day 16 (50 to 50)",
          primaryText:
            "The Beatles are the biggest rock band in history. Like, world history. They are the standard by which many others gauge their influence, whom most emulate, from whom they borrow, to whom they credit their own successes. So how do you even choose a favorite Beatles’ song? You don’t, obviously. They created anthems for our time. Ballads to last centuries. I can’t really say anything that has not been said before. That said, please enjoy this song from their last album. I’ll bet you love this one as much as I do.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Feels Like The First Time", "I Want To Know What Love Is"],
    artist: ["Foreigner", "Foreigner"],
    date: `December 6, 2015`,
    text: `<speak>In nineteen seventy-seven, Foreigner released their self-titled debut album. Talk about an instant classic. Great songs, great memories. Feels Like The First Time, is one of my favorite songs ever, by any band. <break time="150ms"/>I would secretly borrow, my brother Mike’s album and play it and play it and play it. <break time="150ms"/> As much as I was lip-synching BeeGees and Olivia into hairbrushes in the mirror, I was really singing this one as loud as I could. <break time="150ms"/> It has nothing to do with the lyrics, it was just the overall (no pun intended) feel of the song. It’s just that good. <break time="150ms"/> I also loved Star Rider, but it doesn’t really hold up now. I liked it as a kid because I was really into the Micronauts, and the song made me daydream about being a super-hero in outer space. <break time="850ms"/><audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/15_Foreigner_final1.mp3"/> Honorable mention, and worth adding to the list is, I Want To Know What Love Is, from the later part of nineteen eighty-four, when I was that scared, confused, college gay tard, tripping over himself in the dorm hallways. Lou Gramm’s vocals are so amazing, I really felt like he was speaking what was in my mind. <break time="1000ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/15_Foreigner_final2.mp3"/></speak>`,
    countdown: `fifty to fifty`,
    countdownDisplay: `50 to 50`,
    day: 15,
    year: [1977, 1984],
    genre: ``,
    significantHoomans: ["Petey"],
    youtube: [
      "https://www.youtube.com/watch?v=CK6jKL2qWxo",
      "https://www.youtube.com/watch?v=r3Pr1_v7hsw",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Feels Like The First Time / I Want To Know What Love Is",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/50-to-50/15_Foreigner.jpeg",
        textContent: {
          artist: "Artist: Foreigner",
          countdown: "Day 15 (50 to 50)",
          primaryText:
            "In 1977, Foreigner released their self-titled debut album. Talk about an instant classic. Great songs, great memories. Feels Like The First Time is one of my favorite songs ever, by any band. I would secretly “borrow” my brother Mike’s album and play it and play it and play it. As much as I was lip-synching Bee Gees and Olivia into hairbrushes in the mirror, I was really singing this one as loud as I could. It has nothing to do with the lyrics, it was just the overall (no pun intended) feel of the song. It’s just that good. I also loved Star Rider, but it doesn’t really hold up now. I liked it as a kid because I was really into the Micronauts and the song made me daydream about being a super-hero in outer space. Honorable mention, and worth adding to the list is I Want To Know What Love Is, from the later part of 1984 when I was that scared, confused college gaytard tripping over himself in the dorm hallways. Lou Gramm’s vocals are so amazing, I really felt like he was speaking what was in my mind.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Flashdance What A Feeling"],
    artist: ["Irene Cara"],
    date: `December 7, 2015`,
    text: `<speak>She’s a scared, talented kid with a gigantic voice. Her voice is so infectious, you must sing along. You are compelled to sing with Irene Cara when she belts out her monster hits, Fame, and What A Feeling. They’re just all-around feel-good songs. The films were just as big: Fame being made into a TV series, and Flashdance the epitome of eighties movie stories. Young girl struggles to find what makes her happy, becomes torn between her lover and her true love, dance. <break time="250ms"/> Seems corny, but I love it, and I’ll watch it anytime it’s on!<break time="350ms"/> And this damn song. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/14_Flashdance_final.mp3"/> And today, the day my first great-nephew is born, the grandson of my sister Mary, is no better a day to sing this song!</speak>`,
    countdown: `fifty to fifty`,
    countdownDisplay: `50 to 50`,
    day: 14,
    year: [1983],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=ILWSp0m9G2U"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Flashdance What A Feeling",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/50-to-50/14_Flashdance.jpeg",
        textContent: {
          artist: "Artist: Irene Cara",
          countdown: "Day 14 (50 to 50)",
          primaryText:
            "he’s a scared, talented kid with a gigantic voice. Her voice is so infectious you MUST sing along. You are compelled to sing with Irene Cara when she belts out her disco-pop monster hits Fame and What A Feeling. They’re just all-around feel-good songs. The films were just as big: Fame being made into a TV series, and Flashdance the epitome of eighties movie stories: young girl struggles to find what makes her happy, becomes torn between her lover and her true love, dance. Seems corny, but I love it, and I’ll watch it anytime it’s on! And this damn song. And today, the day my first great-nephew is born, the grandson of my sister Mary, is no better a day to sing this song!",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Smile A Little Smile For Me, Rosemarie"],
    artist: ["The Flying Machine"],
    date: `December 8, 2015`,
    text: `<speak>This post needs no blog entry, really. She was the most beautiful girl in the world, said I, when I was only in kindergarten. She was my big sister, and there was a song on the radio about her! <break time="200ms"/> Smile A Little Smile For Me, Rosemarie. <break time="400ms"/> As I prepare to leave the beguiling city of Paris this morning, I think about that beautiful rose-colored sky we saw on our first night here, and I'm reminded of her loveliness and her happy laugh. <break time="100ms"/> I know she still smiles her little smiles for me.<break time="200ms"/> 2 days before I turn 50, she’d have turned 60. We always celebrated our birthdays together. <break time="250ms"/> I love you Sis, and boy do I miss you!<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/13_Rosemarie_final.mp3"/></speak>`,
    countdown: `fifty to fifty`,
    countdownDisplay: `50 to 50`,
    day: 13,
    year: [1969],
    genre: ``,
    significantHoomans: ["Rosemarie"],
    youtube: ["https://www.youtube.com/watch?v=BR3xcZ-osqE"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Smile A Little Smile For Me, Rosemarie",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/50-to-50/13_Rosemarie.png",
        textContent: {
          artist: "Artist: The Flying Machine",
          countdown: "Day 13 (50 to 50)",
          primaryText:
            "This post needs no blog entry, really. She was the most beautiful girl in the world, said I when I was only in kindergarten. She was my big sister and there was a song on the radio about her! Smile A Little Smile For Me, Rosemarie. As I prepare to leave the beguiling city of Paris this morning I think about that beautiful rose-colored sky we saw on our first night here and am reminded of her loveliness and her happy laugh. I know she still smiles her little smiles for me. 2 days before I turn 50, she’d have turned 60. We always celebrated our birthdays together. I love you, Sis, and boy do I miss you!",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["It Don’t Matter To Me", "Everything I Own"],
    artist: ["Bread", "Bread"],
    date: `December 9, 2015`,
    text: `<speak>Bread, with lead singer David Gates whose voice is pure perfection, might be one of the lamest AM Radio bands of the seventies, but as you already know, that shit’s right in my bucket. And anyone who’s ever paid attention to any of my blog or wall posts knows I am obsessed with these two Bread songs, specifically, which is why day 12 has to share 2 – It Don’t Matter To Me and Everything I Own. The first one is all about letting go of that one most amazing person, allowing him to live his life in the hope that he will find his way back eventually. (PS, he never did, but that’s the way it’s supposed to be, otherwise I’d have never found my Woof!) Tomorrow’s song will be more about the same topic/person, just sung from another’s perspective. <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/12_Bread1.m4a"/> The second Bread song is pretty self-explanatory. Because, again, anyone who knows me knows I’d leave it ALL behind to have just moments back with, well, take your pick: Mom. Sis. Vincent. Anything I own. My life, my heart, my home.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/12_Bread2.m4a"/></speak>`,
    countdown: `fifty to fifty`,
    countdownDisplay: `50 to 50`,
    day: 12,
    year: [1969, 1972],
    genre: ``,
    significantHoomans: ["Adam", "Rosemarie", "Angie", "Vinny"],
    youtube: [
      "https://www.youtube.com/watch?v=pl7U2jy1wMQ",
      "https://www.youtube.com/watch?v=-Q1kB0R4Ijs",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "It Don’t Matter To Me / Everything I Own",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/50-to-50/12_Bread.jpg",
        textContent: {
          artist: "Artist: Bread",
          countdown: "Day 12 (50 to 50)",
          primaryText:
            "Bread, with lead singer David Gates whose voice is pure perfection, might be one of the lamest A.M. Radio bands of the seventies, but as you already know, that shit’s right in my bucket. And anyone who’s ever paid attention to any of my blog or wall posts knows I am obsessed with these two Bread songs, specifically, which is why day 12 has to share 2 – It Don’t Matter To Me and Everything I Own. The first one is all about letting go of that one most amazing person, allowing him to live his life in the hope that he will find his way back eventually. (PS, he never did, but that’s the way it’s supposed to be, otherwise I’d have never found my Woof!) Tomorrow’s song will be more about the same topic/person, just sung from another’s perspective. The second Bread song is pretty self-explanatory. Because, again, anyone who knows me knows I’d leave it ALL behind to have just moments back with, well, take your pick: Mom. Sis. Vincent. Anything I own. My life, my heart, my home.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["I Will Always Love You"],
    artist: ["Whitney Houston"],
    date: `December 10, 2015`,
    text: `<speak>This one’s gonna be tough. I talk a lot about my loves. <break time="200ms"/> it’s hard to think about that one though. <break time="250ms"/>The one that got away, because I pushed him and let him. <break time="350ms"/> It was nineteen ninety. I was a baby. I didn’t know any better. <break time="150ms"/> I made mistakes and in early 93, and once the door was closed, it was closed. <break time="250ms"/>I would sit in my car listening to Whitney belt out her heart-wrencher, I Will Always Love You, and sob. <break time="250ms"/> No joke, I sobbed like a bitch because I knew what I had ruined. What I had lost, and what I would never hold again. <break time="250ms"/> It seemed like that year, there were a plethora of break-up songs. <break time="150ms"/> I’ll Never Get Over You (Getting Over Me), by Expose, <break time="150ms"/>Just For Tonight, by Vanessa Williams, Water From The Moon, by Celine Dion.<break time="250ms"/> But this was the one, and it always will be. <break time="150ms"/> I wish I could tell him I was sorry, I AM sorry. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/11_Whitney_mixdown.mp3"/></speak>`,
    countdown: `fifty to fifty`,
    countdownDisplay: `50 to 50`,
    day: 11,
    year: [1974],
    genre: ``,
    significantHoomans: ["Adam"],
    youtube: ["https://www.youtube.com/watch?v=3JWTaaS7LdU"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "I Will Always Love You",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/50-to-50/11_Whitney.jpg",
        textContent: {
          artist: "Artist: Whitney Houston",
          countdown: "Day 11 (50 to 50)",
          primaryText:
            "This one’s gonna be tough. I talk a lot about my loves; it’s hard to think about that one, though. The one that got away, because I pushed him and let him. It was 1990. I was a baby. I didn’t know any better. I made mistakes and in early ‘93, once the door was closed, it was closed. I would sit in my car listening to Whitney belt out her heart-wrencher I Will Always Love You and sob. No joke, I sobbed like a bitch because I knew what I had ruined. What I had lost and what I would never hold again. It seemed like, that year, there were a plethora of break-up songs: I’ll Never Get Over You (Getting Over Me) by Expose, Just For Tonight by Vanessa Williams, Water From The Moon by Celine Dion. But this was the one, and it always will be. I wish I could tell him I was sorry, I AM sorry.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Honesty", "An Innocent Man"],
    artist: ["Billy Joel", "Billy Joel"],
    date: `December 11, 2015`,
    text: `<speak>Billy Joel. Choose any song from any album between nineteen seventy-one and nineteen eighty-three and I will tell you how much I love it and exactly why. I will remember where I was when I first heard it, and talk about how I wore down the needle on the record player, and made scratches in the albums. Especially 52nd Street. <break time="250ms"/> That said, it's impossible to choose a single Billy Joel song, so here are 2 of my stand-outs. <break time="250ms"/>  Honesty, and An Innocent Man. <break time="250ms"/> You can pick your own. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/10_Innocent_Man_Honesty_final1.mp3"/><audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/10_Innocent_Man_Honesty_final2.mp3"/></speak>`,
    countdown: `fifty to fifty`,
    countdownDisplay: `50 to 50`,
    day: 10,
    year: [1983, 1983],
    genre: ``,
    significantHoomans: [],
    youtube: [
      "https://www.youtube.com/watch?v=SuFScoO4tb0",
      "https://www.youtube.com/watch?v=mQCWY5ynBaw",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Honesty / An Innocent Man",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/50-to-50/10_Honesty.jpeg",
        textContent: {
          artist: "Artist: Billy Joel",
          countdown: "Day 10 (50 to 50)",
          primaryText:
            "Billy Joel. Choose any song from any album between 1971 and 1983 and I will tell you how much I love it and exactly why. I will remember where I was when I first heard it, and talk about how I wore down the needle on the record player, and made scratches in the albums. Especially 52nd Street. That said, impossible to choose a single Billy Joel song, so here are 2 of my stand-outs, Honesty and An Innocent Man. You can pick your own.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Rock Lobster", "Love Shack"],
    artist: ["B fifty twos"],
    date: `December 12, 2015`,
    text: `<speak>The first time I heard Rock Lobster, I think I may have stopped breathing for a full minute. <break time="350ms"/> It was the strangest, most amazing cacophony I had ever heard, and I knew it was going to be a piece of music that would change my life. <break time="250ms"/>I borrowed a B-52’s album from my cousin, not really knowing it was a permanent borrow, and played it to death. <break time="150ms"/> Strobe Light. Planet Claire. Private Idaho. Never had I heard anything like it.<break time="150ms"/> When I moved back to Long Island in the mid-eighties and found the radio station W.L.I.R., I knew I was home. They were spinning the B-52’s and so many other alternative musicians. <break time="150ms"/>I was hooked. <break time="250ms"/>Then came the summer of love, nineteen eighty-nine. <break time="150ms"/> Living in a sweet apartment in Elmont with Jan and Ellen and then Vinny, living the music of my life, finally being myself for the first time ever. <break time="150ms"/> And then it hit. Love Shack. <break time="350ms"/> One of the most amazing party songs ever recorded. So today’s song is two songs, to celebrate Fred, Ricky, Keith, Kate and Cindy! Please enjoy Fred’s seventies porn-fro, some sick dance moves, and look out for that bikini whale! <break time="250ms"/> And please note Supermodel of the World, RuPaul, in Love Shack baby! <break time="1500ms"/>  <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/9_B52s_final1.mp3"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/9_B52s_final2.mp3"/></speak>`,
    countdown: `fifty to fifty`,
    countdownDisplay: `50 to 50`,
    day: 9,
    year: [1978, 1989],
    genre: ``,
    significantHoomans: [],
    youtube: [
      "https://www.youtube.com/watch?v=szhJzX0UgDM",
      "https://www.youtube.com/watch?v=9SOryJvTAGs",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Rock Lobster / Love Shack",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/50-to-50/9_b52.jpeg",
        textContent: {
          artist: "Artist: B-52's",
          countdown: "Day 9 (50 to 50)",
          primaryText:
            "The first time I heard Rock Lobster, I think I may have stopped breathing for a full minute. It was the strangest, most amazing cacophony I had ever heard and I knew it was going to be a piece of music that would change my life. I borrowed a B-52’s album from my cousin, not really knowing it was a permanent borrow, and played it to death. Strobe Light. Planet Claire. Private Idaho. Never had I heard anything like these songs. When I moved back to Long Island in the mid-eighties and found the radio station WLIR, I knew I was home. They were spinning the B-52’s and so many other alternative musicians’ stuff. I was hooked. Then came the summer of love, 1989. Living in a sweet apartment in Elmont with Jan & Ellen and then Vinny, living the music of my life, finally being myself for the first time ever. And then it hit: Love Shack. One of the most amazing party songs ever recorded. So today’s song is two songs to celebrate Fred, Ricky, Keith, Kate & Cindy! Please enjoy Fred’s seventies porn-fro, some sick dance moves, and look out for that bikini whale! And please note Supermodel of the World, RuPaul, in Love Shack, baby!",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Hotel California", "New Kid In Town"],
    artist: ["The Eagles", "The Eagles"],
    date: `December 13, 2015`,
    text: `<speak>People can argue the validity of my next statement, but among the many perfect albums out there, the Eagles’ Hotel California, is one of the very best, perhaps THE best. <break time="150ms"/> From nineteen seventy-seven, one of the most disco-heavy years, came this amazing album, with one radio classic after another. Even my parents loved this album, but the titular song in specific. <break time="50ms"/> And honestly, who doesn’t? Can you really say you don’t sing along with Don Henley, or jam out your best air guitar at the end? Well there’s no shame in admitting it. I am a master at the final air guitar in this truly incredible recording. There are tons of songs that are considered the pinnacle of classic rock. Stairway To Heaven, Let It Be, Bohemian Rhapsody, etcetera. <break time="250ms"/> Hotel California, is my number one. <break time="250ms"/>The second track, New Kid In Town, also holds special meaning for me, as I was relocated to the Poconos at such a young, pivotal, vulnerable age when fitting in was paramount. I had only just found my ground in Lynbrook and there I was, yanked away to a foreign land of trees and rocks and bullies. <break time="150ms"/> You can check out any time you like, but you can never leave. <break time="350ms"/>Here it comes.<break time="150ms"/> Crank it up. <break time="1500ms"/><audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/8_Hotel_California_final1mp3.mp3"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/8_Hotel_California_final2.mp3"/></speak>`,
    countdown: `fifty to fifty`,
    countdownDisplay: `50 to 50`,
    day: 8,
    year: [1976, 1976],
    genre: ``,
    significantHoomans: [],
    youtube: [
      "https://www.youtube.com/watch?v=nKnbty_Kdc0",
      "https://www.youtube.com/watch?v=-Pa5nqYXEnY",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Hotel California / New Kid In Town",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/50-to-50/8_Hotel-California-Album-Cover.png",
        textContent: {
          artist: "Artist: The Eagles",
          countdown: "Day 8 (50 to 50)",
          primaryText:
            "People can argue the validity of my next statement, but among the many perfect albums out there, the Eagles’ Hotel California is one of the very best, perhaps THE best. From 1977, one of the most disco-heavy years, came this amazing album with one radio classic after another. Even my parents loved this album, but the titular song in specific. And honestly, who doesn’t? Can you really say you don’t sing along with Don Henley or jam out your best air guitar at the end? Well, there’s no shame in admitting it. I am a master at the final air guitar in this truly incredible recording. There are tons of songs that are considered the pinnacle of classic rock: Stairway To Heaven, Let It Be, Bohemian Rhapsody, etc. Hotel California is my number one. The second track, New Kid In Town, also holds special meaning for me, since I was relocated to the Poconos at such a young, pivotal, vulnerable age when fitting in was paramount. I had only just found my ground in Lynbrook and there I was, yanked away to a foreign land of trees and rocks and bullies. You can check out any time you like, but you can never leave. Here it comes. Crank it up.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Chains Of Love", "A Little Respect"],
    artist: ["Erasure", "Erasure"],
    date: `December 14, 2015`,
    text: `<speak>Another double feature by a new wave group, formed from Yaz and Depeche Mode, here comes Erasure!<break time="100ms"/> Song after song after song, each one better than the last. And then came The Innocents, and in a flood of perfection, two songs that will ever remain favorites for me, and will always bring my Vincent back to me, for they were his as well. Chains of Love, and A Little Respect. I guess when it comes to music and the songs that are dearest to me, it’s impossible not to loop in Vincent. We had so much in common; we used to finish each other’s jokes. We’d each insist of the other to “give me back my brain!” <break time="350ms"/>The next few days worth of top ten songs are going to reflect my love for my best friend. I call it keeping his memory alive! <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/7_Erasure_final1.mp3"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/7_Erasure_final2.mp3"/></speak>`,
    countdown: `fifty to fifty`,
    countdownDisplay: `50 to 50`,
    day: 7,
    year: [1988],
    genre: ``,
    significantHoomans: ["Vinny"],
    youtube: [
      "https://www.youtube.com/watch?v=6J2OlIpQgF8",
      "https://www.youtube.com/watch?v=ONot8VXQHsg",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Chains Of Love / A Little Respect",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/50-to-50/7_Chains_Of_Love.jpeg",
        textContent: {
          artist: "Artist: Erasure",
          countdown: "Day 7 (50 to 50)",
          primaryText:
            "Another double feature by a new wave group formed from Yaz and Depeche Mode, here comes Erasure! Song after song after song, each one better than the last. And then came The Innocents, and in a flood of perfection, two songs that will ever remain favorites for me, and will always bring my Vincent back to me, for they were his as well. Chains of Love, and A Little Respect. I guess when it comes to music and the songs that are dearest to me, it’s impossible not to loop in Vincent. We had so much in common; we used to finish each other’s jokes, we’d each insist of the other to 'give me back my brain!' The next few days worth of top ten songs are going to reflect my love for my best friend. I call it keeping his memory alive!",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Who Knew?"],
    artist: ["Pink"],
    date: `December 15, 2015`,
    text: `<speak>He passed away in the summer of 2006. We kind of knew the end was coming, but we didn’t want to accept that. We just wanted more time. <break time="250ms"/> In his passing, he gave me so much. He brought Lusty back into my life, and with Lusty came Tom and Gia-vana. <break time="150ms"/>They saved me from the brink. <break time="150ms"/>And shortly thereafter, Pink released this song, Who Knew. <break time="250ms"/>It was every single word I’d wished I’d had a chance to say to him. And ironically, it was from her album entitled I’m Not Dead. <break time="150ms"/> In most respects, I have kept him alive, by talking about him and remembering him as often as I can, without it flooding my senses. But when he’s not beanstalking me from beyond, I can hear this song, and it helps me know. He knows, he sees, he remains. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/6_Who_Knew_final.mp3"/></speak>`,
    countdown: `fifty to fifty`,
    countdownDisplay: `50 to 50`,
    day: 6,
    year: [2006],
    genre: ``,
    significantHoomans: ["Vinny"],
    youtube: ["https://www.youtube.com/watch?v=NJWIbIe0N90"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Who Knew?",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/50-to-50/6_Who_Knew.jpg",
        textContent: {
          artist: "Artist: P!nk",
          countdown: "Day 6 (50 to 50)",
          primaryText:
            "He passed away in the summer of 2006. We kind of knew the end was coming but we didn’t want to accept that. We just wanted more time. In his passing, he gave me so much. He brought Lusty back into my life, and with Lusty came Tom and Giovana. They saved me from the brink. And shortly thereafter, P!nk released this song, Who Knew. It was every single word I’d wished I’d had a chance to say to him. And ironically, it was from her album entitled I’m Not Dead. In most respects, I have kept him alive by talking about him and remembering him as often as I can without it flooding my senses, but when he’s not beanstalking me from beyond, I can hear this song and it helps me know he knows, he sees, he remains.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["This Time I Know It’s For Real", "On The Radio"],
    artist: ["Donna Summer", "Donna Summer"],
    date: `December 16, 2015`,
    text: `<speak>She was the Queen of Disco, and I had to listen to her albums secretly, because by the time I had really discovered her, disco was dead, and I was living in the Poconos, where Lynyrd Skynyrd was king. <break time="250ms"/>Sounds insane, right? Well, I’m not embarrassed now, to say how much I love Donna Summer. She broke so many boundaries, and her music is unforgettable. <break time="150ms"/>Her sound ruled the late seventies, and her soul started the eighties with a huge song of empowerment, She Works Hard For The Money. Another of the many songs that bring to mind my number one girl Maria, my life saver during the most tumultuous of times in my youth. <break time="250ms"/> But Donna Summer’s songs were many. Last Dance, Bad Girls, Heaven Knows, Hot Stuff, I Feel Love, MacArthur Park, and on and on and on. <break time="150ms"/> Her comeback song in nineteen eighty-nine is one of the two featured today: This Time I Know It’s For Real. <break time="150ms"/> Big shock, another Vinny song. <break time="250ms"/>We would hear the opening note and our eyes would lock, and bulge out of our heads, cartoon-style, and we’d jet for the dance floor at Grand Central, and just let the rhythm take over our bodies. <break time="250ms"/>I can only imagine how ill we looked. <break time="150ms"/>Song number 2 is my personal favorite – (which was an impossible mission when it comes to Donna Summer songs) -  On The Radio. <break time="250ms"/>It takes me back to that room in the Poconos, lifting the needle on the turntable every time the song ended, just to start it back over.<break time="150ms"/> Simpler times, strangely fond memories. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/5_Donna_Summer_final.mp3"/></speak>`,
    countdown: `fifty to fifty`,
    countdownDisplay: `50 to 50`,
    day: 5,
    year: [1989, 1979],
    genre: `Disco`,
    significantHoomans: ["Vinny", "Maria"],
    youtube: ["https://www.youtube.com/watch?v=DCtDAAPO-j4"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "This Time I Know It’s For Real / On The Radio",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/50-to-50/5_This_Time_I_Know_It's_For_Real.jpeg",
        textContent: {
          artist: "Artist: Donna Summer",
          countdown: "Day 5 (50 to 50)",
          primaryText:
            "She was the Queen of Disco and I had to listen to her albums secretly because, by the time I had really discovered her, disco was dead and I was living in the Poconos where Lynyrd Skynyrd was king. Sounds insane, right? Well, I’m not embarrassed now to say how much I love Donna Summer. She broke so many boundaries and her music is unforgettable. Her sound ruled the late seventies and her soul started the eighties with a huge song of empowerment, She Works Hard For The Money, another of the many songs that bring to mind my number one girl Maria, my life saver during the most tumultuous of times in my youth. But Donna Summer’s songs were many: Last Dance, Bad Girls, Heaven Knows, Hot Stuff, I Feel Love, MacArthur Park, and on and on and on… Her comeback song in 1989 is one of the two featured today: This Time I Know It’s For Real. Big shock, another Vinny song. We would hear the opening note and our eyes would lock and bulge out of our heads, cartoon-style, and we’d jet for the dance floor at Grand Central and just let the rhythm take over our bodies. I can only imagine how ill we looked. Song #2 is my personal favorite – (which was an impossible mission when it comes to Donna Summer songs) - On The Radio. It takes me back to that room in the Poconos, lifting the needle on the turntable every time the song ended just to start it back over. Simpler times, strangely fond memories.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Express Yourself", "Crazy For You"],
    artist: ["Madonna", "Madonna"],
    date: `December 17, 2015`,
    text: `<speak>She only needs one name: MADONNA. <break time="250ms"/>I can remember vividly the first time I heard of this chick. She was aloof, and her sound was bouncy and happy, and she was just what was missing from American pop music, since disco had ended. <break time="150ms"/>But she was way more than disco, she was edge.<break time="250ms"/> In her softness was severity. Amidst that crazy mane of hair was a purposefulness. This bitch knew what she wanted and she was here to stay, whether we liked it or not. She said as much to Dick Clark on her memorable appearance on American Bandstand, when asked what her dreams and aspirations were for her future. 'To rule the world.' As stated in yesterday’s post about Donna Summer, how does one choose a favorite Madonna song? I can’t even really choose a favorite album! I have loved her music since day one, have identified with at least six of her songs personally. Her music has been the soundtrack of my adulthood. <break time="250ms"/> College, moving away from home, living in my own apartments, becoming seriously involved with boyfriends, deaths in my family, etc. <break time="250ms"/> And the hits just kept coming. Holiday, Like A Virgin, Into The Groove, Papa Don’t Preach, Like A Prayer, Vogue, Erotica, Human Nature, Music, Beautiful Stranger.<break time="150ms"/> Too many to list. Today I celebrate her most amazing ballad, Crazy For You. Heard it for the first time as part of a terrible movie, called Vision Quest, and it has stuck to me like glue. There she was, in all her oversized torn-up-clothing glory, rubber bracelets up her arms, hair in wild tangles, giant dangling cross earrings. But she was singing a ballad, and I felt it.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/4_Madonna_final.mp3"/> Today I also celebrate Express Yourself. 1989. I’m redundant with why that summer was the most important, life-changing one of my life, but this song was top of the playlist that year. It’s not about the lyrics with this one as much as it is about the whole package: the beat, the vibe, the wonder. <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/4_Madonna_final2.mp3"/> This blog could go on for days, about the effect Madonna has had on me over the years.<break time="150ms"/> Instead, I hope you enjoy her as much as I do, and I’m sure you have your own connection to her music. </speak>`,
    countdown: `fifty to fifty`,
    countdownDisplay: `50 to 50`,
    day: 4,
    year: [1989, 1985],
    genre: ``,
    significantHoomans: [],
    youtube: [
      "https://www.youtube.com/watch?v=GsVcUzP_O_8",
      "https://www.youtube.com/watch?v=DHutZXREZ0E",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Express Yourself / Crazy For You",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/50-to-50/4_Madonna.png",
        textContent: {
          artist: "Artist: Madonna",
          countdown: "Day 4 (50 to 50)",
          primaryText:
            "She only needs one name: MADONNA. I can remember vividly the first time I heard of this chick. She was aloof and her sound was bouncy and happy, and she was just what was missing from American pop music since disco had ended. But she was way more than disco, she was edge. In her softness was severity. Amidst that crazy mane of hair was a purposefulness. This bitch knew what she wanted and she was here to stay, whether we liked it or not. She said as much to Dick Clark on her memorable appearance on American Bandstand, when asked what her dreams and aspirations were for her future: 'To rule the world.' As stated in yesterday’s post about Donna Summer, how does one choose a favorite Madonna song? I can’t even really choose a favorite album! I have loved her music since day one, have identified with at least six of her songs personally. Her music has been the soundtrack of my adulthood. College, moving away from home, living in my own apartments, becoming seriously involved with boyfriends, deaths in my family, etc. And the hits just kept coming: Holiday, Like A Virgin, Into The Groove, Papa Don’t Preach, Like A Prayer, Vogue, Erotica, Human Nature, Music, Beautiful Stranger… Too many to list. Today I celebrate her most amazing ballad, Crazy For You. Heard it for the first time as part of a terrible movie called Vision Quest, and it has stuck to me like glue. There she was in all her oversized torn-up-clothing glory, rubber bracelets up her arms, hair in wild tangles, giant dangling cross earrings. But she was singing a ballad, and I felt it...Today I also celebrate Express Yourself. 1989. I’m redundant with why that summer was the most important, life-changing one of my life, but this song was top of the playlist that year. It’s not about the lyrics with this one as much as it is about the whole package: the beat, the vibe, the wonder...This blog could go on for day about the affect Madonna has had on me over the years. Instead, I hope you enjoy her as much as I do and I’m sure you have your own connection to her music.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Have You Never Been Mellow", "Suddenly"],
    artist: ["Olivia Newton-John", "Olivia Newton-John And Cliff Richard"],
    date: `December 18, 2015`,
    text: `<speak><audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/3_Brolivia_final1.mp3"/> The voice of an angel. A.M. Radio’s sweetheart. Olivia Newton-John, also MY sweetheart. <break time="250ms"/> As a little boy, I recognized the gift she gave us with her voice. Chris and I had an opportunity to meet her a few years back, after her concert in the round, and I got a chance to tell her the story I’m about to share. <break time="350ms"/> I remember being a tiny little Nicky, sitting on the stairs watching my mom do the laundry. Have You Never Been Mellow, came on W.G.B.B., and my mother started humming along and said to me, 'Nicky, this is what an angel sounds like.'  <break time="250ms"/> I can never forget that moment, etched on my heart and in my memory until I die.  <break time="150ms"/> Then I grew up, and Olivia’s sound changed a little, but her voice was still as sweet and perfect as always. And in the confines of that room in the Poconos, I discovered the soundtrack to Xanadu. <break time="250ms"/> Then Suddenly, a duet with Cliff Richard, entered the top 10 with continuous radio air play.  <break time="250ms"/> I think it may have been the most beautiful love song I had ever heard. Though I had no experience with love, I recognized the emotion and the beauty. As an adult I understand the true gift of Olivia’s voice. Such a rare thing to possess. And now when I listen to these songs, not only am I taken back to wondrous, simpler times, I am immediately calmed. Her music calms this savage wildebeest. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/3_Brolivia_final2.mp3"/></speak>`,
    countdown: `fifty to fifty`,
    countdownDisplay: `50 to 50`,
    day: 3,
    year: [1975, 1980],
    genre: ``,
    significantHoomans: ["Angie"],
    youtube: [
      "https://www.youtube.com/watch?v=t2S1nmxYmUg",
      "https://www.youtube.com/watch?v=B26pyWvYuCc",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Have You Never Been Mellow / Suddenly",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/50-to-50/3_Brolivia.jpg",
        textContent: {
          artist: "Artist: Olivia Newton-John",
          countdown: "Day 3 (50 to 50)",
          primaryText:
            "The voice of an angel. A.M. Radio’s sweetheart. Olivia Newton-John, who is also MY sweetheart. As a little boy, I recognized the gift she gave us with her voice. Chris and I had an opportunity to meet her a few years back, after her concert in the round, and I got a chance to tell her the story I’m about to share. I remember being a tiny little Nicky, sitting on the stairs watching my mom do the laundry. Have You Never Been Mellow came on W.G.B.B. and my mother started humming along and said to me, 'Nicky, this is what an angel sounds like.' I can never forget that moment, etched on my heart and in my memory until I die. Then I grew up and Olivia’s sound changed a little, but her voice was still as sweet and perfect as always. And in the confines of that room in the Poconos I discovered the soundtrack to Xanadu. And Suddenly, a duet with Cliff Richard, entered the top 10 with continuous radio air play. I think it may have been the most beautiful love song I had ever heard. Though I had no experience with love, I recognized the emotion and the beauty. As an adult I understand the true gift of Olivia’s voice. Such a rare thing to possess. And now when I listen to these songs, not only am I taken back to wondrous, simpler times, I am immediately calmed. Her music calms this savage wildebeest.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Total Eclipse Of The Heart"],
    artist: ["Bonnie Tyler"],
    date: `December 19, 2015`,
    text: `<speak>Hormones. Confusion. Sexual awakening. A dark, lonely closet. A Total Eclipse Of The Heart. <break time="250ms"/> It was my first time ever away from home, the first semester of my freshman year at the University of Scranton. I was a scared little seventeen-year-old who had been sheltered and frightened into thinking that my true nature was evil and sick. <break time="250ms"/> And now I was living in a dormitory with virile, hairy boys. <break time="50ms"/> My escapes, as usual, were music, and the daily collect calls to New York City to chat with Karen, and her artsy, soulful new boyfriend, Steven. Now please understand, I had no idea what love was. I thought I knew, in those moments when I used to force myself to believe I could love a girl. When I would pray, as hard as I could, for god to take it away and make me normal, so I could be a real man. <break time="250ms"/> And there were many girls for me to love, and many who I knew loved me. But inside my soul, I knew it was wrong, and certainly not fair to them.<break time="250ms"/> I don’t even know what I expected, as I left home to go to school. Maybe things would change there. And still I prayed at night, against my emerging true nature. And then they sent me a ticket to N.Y.C. on the Greyhound. I left Scranton and arrived in N.Y.C. to be greeted by Karen, Steven and Robert. And in a moment, it was there. The first ever spark of what was real and true. <break time="150ms"/> Steven’s eyes and my eyes had both seen something finally recognizable. It was truly the first time I saw what could be. Without too many details, let’s just say we became pen pals and he helped me begin the road to my self-discovery. <break time="250ms"/> Total Eclipse was the heart-wrenching soundtrack of that route. <break time="250ms"/> Wherever he is in this mad world, I’m certain my Heathcliff hears this song and thinks about me, the way I still think about him. And my forever friend Karen. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/2_Total_Eclipse_final.mp3"/></speak>`,
    countdown: `fifty to fifty`,
    countdownDisplay: `50 to 50`,
    day: 2,
    year: [1983],
    genre: ``,
    significantHoomans: ["Steven", "Karen"],
    youtube: ["https://www.youtube.com/watch?v=lcOxhH8N3Bo"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Total Eclipse Of The Heart",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/50-to-50/2_Total_Eclipse.jpeg",
        textContent: {
          artist: "Artist: Bonnie Tyler",
          countdown: "Day 2 (50 to 50)",
          primaryText:
            "Hormones. Confusion. Sexual awakening. A dark, lonely closet. A Total Eclipse Of The Heart. It was my first time ever away from home, the first semester of my freshman year at the University of Scranton. I was a scared little seventeen-year-old who had been sheltered and frightened into thinking that my true nature was evil and sick. And now I was living in a dormitory with virile, hairy boys. My escapes, as usual, were music and the daily collect calls to New York City to chat with Karen. And her artsy, soulful new boyfriend, Steven. Now please understand, I had no idea what love was. I thought I knew in those moments when I used to force myself to believe I could love a girl. When I would pray as hard as I could at night for god to take it away and make me normal so I could be a real man. And there were many girls for me to love, and many who I knew loved me. But inside my soul I knew it was wrong, and certainly not fair to them. I don’t even know what I expected as I left home to go to school, but maybe things would change there. And still I prayed at night against my emerging true nature. And then they sent me a ticket to NYC on the Greyhound. I left Scranton and arrived in NYC to be greeted by Karen, Steven and Robert. And in a moment it was there: the first ever spark of what was real and true. Steven’s eyes and my eyes had both seen something finally recognizable. It was truly the first time I saw what could be. Without too many details, let’s just say we became pen pals and he helped me begin the road to my self-discovery. And Total Eclipse was the heart-wrenching soundtrack of that route. For Steven and me. Wherever he is in this mad world, I’m certain my Heathcliff hears this song and thinks about me the way I still think about him. And my forever friend Karen.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Kiss On My List"],
    artist: ["Hall And Oates"],
    date: `December 20, 2015`,
    text: `<speak>My number one song is not my very favorite for any other reason than the way it makes me feel. <break time="150ms"/> It’s not about the lyrics, it’s about the melody and the earnest eighties sound. Heavy pounding on the piano, a voice that cuts the air, like a hot knife through butter, a rhythm that makes you want to sway, and bouncy harmonies to which you must involuntarily bob your head. <break time="250ms"/> Hall And Oates had so many pop hits in the eighties, but this is the one that turned them from a blue-eyed soul group from Philly, to the top ten superstars of pop music.<break time="350ms"/> As anyone who knows me know, I tried desperately to steal John Oates’ style, with the caterpillar mustache and permed curls. <break time="150ms"/>  Between John’s look, and Daryl Hall’s icy blue voice, Hall And Oates are the curators of my mid-teen life. <break time="150ms"/> Ayngst, blues, and love’s tears. <break time="250ms"/>Kiss On My List. This SONG is on my list of the best things in life. If I have accomplished anything, maybe when you hear it in your car or shopping at Kohl’s, or wherever it may be, you’ll think of me and smile. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/1_Kiss_On_My_List_final.mp3"/></speak>`,
    countdown: `fifty to fifty`,
    countdownDisplay: `50 to 50`,
    day: 1,
    year: [1980],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=AYUdldNzLNA"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Kiss On My List",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/50-to-50/1_Kiss_On_My_List.jpeg",
        textContent: {
          artist: "Artist: Hall & Oates",
          countdown: "Day 1 (50 to 50)",
          primaryText:
            "My number one song is not my very favorite for any other reason than the way it makes me feel. It’s not about the lyrics, it’s about the melody and the earnest eighties sound. Heavy pounding on the piano, a voice that cuts the air like a hot knife through butter, a rhythm that makes you want to sway, and bouncy harmonies to which you must involuntarily bob your head. Hall & Oates had so many pop hits in the eighties but this is the one that turned them from a blue-eyed soul group from Philly to the top ten superstars of pop music. As anyone who knows me know, I tried desperately to steal John Oates’ style, with the caterpillar mustache and permed curls. Between John’s look and Daryl Hall’s icy blue voice, Hall & Oates are the curators of my mid-teen life: angst, blues, and love’s tears. Kiss On My List. This SONG is on my list of the best things in life. If I have accomplished anything, maybe when you hear it in your car or shopping at Kohl’s or wherever it may be, you’ll think of me and smile.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Finale [In The Heights]"],
    artist: ["Lin-Manuel Miranda"],
    date: `December 21, 2015`,
    text: `<speak>Of all the music in all the genres from all the time eras, it’s been REALLY difficult to cull down 50-ish songs as favorites. <break time="150ms"/> I love music. Music is joy and sorrow, an outlet and a hope chest.<break time="150ms"/> Songs represent my mood, my feelings, my opinions, my celebrations. <break time="150ms"/>Most days I am just a confused 12 year old boy, trapped in the skin of a 50 year old man, living in the world. <break time="150ms"/>But some days there is clarity, and I have it all figured out. <break time="150ms"/> I’m here as the recorder of events, the keeper of the memories of those who’ve passed. I remind the rest of us of their joys, triumphs, and tragedies. <break time="250ms"/>Each one of those passed loved ones has at least one song, that brings them right beside me, keeping their vibe strong.<break time="150ms"/> My own memories in my very blessed life are also outlined by so many songs. Too many to list. <break time="150ms"/> Today as I turn 50 years old on this sad but beautiful green and blue marble, I am drawn to this song, the finale from my favorite Broadway musical, In The Heights. <break time="150ms"/> The unassuming lead character of the piece realizes, in a moment of lucidity, that it’s his job to be the recorder, the streetlight, that illuminates the stories of the people he loves. <break time="150ms"/>If not me, who keeps their legacies? If not for so many people from so many points in my life, I never ever could have come to this spot, this point in my world. A pinnacle of accomplishments, most of which are relationship-based, because what is life without connection, without community? I thank my Woof Christopher for so many things, but mostly for bringing the joy of musical theatre to my life as a necessity, not just a thing to do. <break time="150ms"/> I thank my family of friends, way too many to list but I hope you know who you are, for lifting me up and allowing me to burn brightly as the necessary street lamp at the corner of the street. And I thank my mother Angie and my sisters Mary and Rosemarie for teaching me so much about love: how to do it properly so that your life is fulfilled. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/50-to-50/0_Finale_final.mp3"/></speak>`,
    countdown: `fifty to fifty`,
    countdownDisplay: `50 to 50`,
    day: 0,
    year: [2008],
    genre: ``,
    significantHoomans: ["Angie", "Mary", "Rosemarie", "Stomps"],
    youtube: ["https://www.youtube.com/watch?v=iUs4rRuAzTo"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Fiale [In The Heights]",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/50-to-50/0_Finale.jpeg",
        textContent: {
          artist: "Artist: Lin-Manuel Miranda",
          countdown: "Day 0 (50 to 50)",
          primaryText:
            "Of all the music in all the genres from all the time eras, it’s been REALLY difficult to cull down 50-ish songs as favorites. I love music. Music is joy and sorrow, an outlet and a hope chest. Songs represent my mood, my feelings, my opinions, my celebrations. Most days I am just a confused 12 year old boy trapped in the skin of a 50 year old man living in the world. But some days there is clarity and I have it all figured out: I’m here as the recorder of events, the keeper of the memories of those who’ve passed. I remind the rest of us of their joys and triumphs and tragedies. Each one of those passed loved ones has at least one song that brings them right beside me, keeping their vibe strong. My own memories in my very blessed life are also outlined by so many songs, too many to list. Today as I turn 50 years old on this sad but beautiful green & blue marble, I am drawn to this song, the finale from my favorite Broadway musical In The Heights. The unassuming lead character of the piece realizes, in a moment of lucidity, that it’s his job to be the recorder, the streetlight that illuminates the stories of the people he loves. If not me, who keeps their legacies? If not for so many people from so many points in my life, I never ever could have come to this spot, this point in my world. A pinnacle of accomplishments, most of which are relationship-based, because what is life without connection, without community? I thank my Woof Christopher for so many things, but mostly for bringing the joy of musical theatre to my life as a necessity, not just a thing to do. I thank my family of friends, way too many to list but I hope you know who you are, for lifting me up and allowing me to burn brightly as the necessary street lamp at the corner of the street. And I thank my mother Angie and my sisters Mary and Rosemarie for teaching me so much about love: how to do it properly so that your life is fulfilled.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Cough Syrup"],
    artist: ["Young The Giant"],
    date: `October 31, 2016`,
    text: `<speak>Last year I’d borrowed the idea of blogging a 50 songs in 50 days countdown to my 50th birthday, counting back, in no real particular order, my top favorite songs of all time. Most were ballads, some were classic pop tunes, but each was a song that defines an era, no matter how small, of my life. After December 21st, 2015, I began to realize there were still so many songs I love. So naturally that led to this year’s 51 to 51.<break time="250ms"/> I feel like music is such a huge part of my day to day life (and it has been since the seventies) just as much as talking about or writing about myself is, for anyone willing to listen or read. <break time="200ms"/> Therefore, I present to you my Top 51 to 51 Countdown for 2016.<break time="150ms"/> I hope you enjoy it, and that you will chime in with your own memories, even if to make fun and be silly. That’s what it’s all for, finding the joy. <break time="550ms"/>Today, we start with a song that is the most current on the list, one with a beautiful melody, and lyrics that talk about the difficulty of finding a light at the end of the tunnel. We medicate, hoping to feel better, hoping for the sadness to dissipate; hoping that when the cough syrup goes down, the woes will go away. <break time="250ms"/>As someone who has fought against depression for more than half my life, I hear these lyrics and am reminded that every day is a new battle, but it’s not one I’m willing to lose. Here’s to hoping.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/51_Cough_Syrup_final.mp3"/></speak>`,
    countdown: `fifty one to fifty one`,
    countdownDisplay: `51 to 51`,
    day: 51,
    year: [2010],
    genre: ``,
    significantHoomans: ["Petey"],
    youtube: ["https://www.youtube.com/watch?v=UAsTlnjvetI"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Cough Syrup",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/51-to-51/51_Cough_Syrup.jpeg",
        textContent: {
          artist: "Artist: Young The Giant",
          countdown: "Day 51 (51 to 51)",
          primaryText:
            "Last year I’d borrowed the idea of blogging a '50 songs in 50 days' countdown to my 50th birthday, counting back (in no real particular order) my top favorite songs of all time. Most were ballads, some were classic pop tunes, but each was a song that defines an era, no matter how small, of my life. After December 21, 2015, I began to realize there were still so many songs I love, so naturally that led to this year’s 51 to 51. I feel like music is such a huge part of my day to day life (and it has been since the seventies) just as much as talking about or writing about myself is, for anyone willing to listen/read. Therefore, I present to you my Top 51 to 51 Countdown for 2016. I hope you enjoy it and that you will chime in with your own memories, even if to make fun and be silly. That’s what it’s all for, finding the joy. Today we start with a song that is the most current on the list, one with a beautiful melody and lyrics that talk about the difficulty of finding a light at the end of the tunnel. We medicate hoping to feel better, hoping for the sadness to dissipate; hoping that when the cough syrup goes down, the woes will go away. As someone who has fought against depression for more than half my life, I hear these lyrics and am reminded that every day is a new battle, but it’s not one I’m willing to lose. Here’s to hoping.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["See You In September"],
    artist: ["The Happenings"],
    date: `November 1, 2016`,
    text: `<speak>Song 50 is, I think, the oldest one on the list. Overall I don’t usually love the music of the sixties, with the obvious exception of the Beatles and the Rolling Stones. But this one, as many songs do, reminds me of that little angel on my shoulder, Angie. <break time="150ms"/> Admittedly I don’t know the song from when it was a hit on the radio in nineteen sixty-six. <break time="150ms"/> My memory of this particular tune comes from our time in the Poconos, a time when we all yearned to find happiness somehow. <break time="150ms"/> Especially, I think, my mother. <break time="150ms"/> In those small moments when they’d have weekend guests, they’d go out coupling to one of the resort hotels that showcased bands from the past. Angie was enamored with lead singer Tom Giuliano of the Happenings, and he was always so gracious to my parents and their friends after their shows at Paradise Stream. I remember this song fondly, as my mom would sing it acapella in the kitchen days later, as the veil would begin to fade. Funny to think how very alike we are slash were.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/50_See_You_final.mp3"/></speak>`,
    countdown: `fifty one to fifty one`,
    countdownDisplay: `51 to 51`,
    day: 50,
    year: [1966],
    genre: ``,
    significantHoomans: ["Angie"],
    youtube: ["https://www.youtube.com/watch?v=iu-7DXBiVsA"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "See You In September",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/51-to-51/50_See_You.jpg",
        textContent: {
          artist: "Artist: The Happenings",
          countdown: "Day 50 (51 to 51)",
          primaryText:
            "Song 50 is, I think, the oldest one on the list. Overall I don’t usually love the music of the sixties, with the obvious exception of the Beatles and the Rolling Stones, but this one, as many songs do, reminds me of that little angel on my shoulder, Angie. Admittedly I don’t know the song from when it was a hit on the radio in 1966. My memory of this particular tune comes from our time in the Poconos, a time when we all yearned to find happiness somehow, especially, I think, my mother. In those small moments when they’d have weekend guests, they’d go out coupling to one of the resort hotels that showcased bands from the past. Angie was enamored with lead singer Tom Giuliano of the Happenings, and he was always so gracious to my parents and their friends after their shows at Paradise Stream. I remember this song fondly as my mom would sing it acapella in the kitchen days later as the veil would begin to fade. Funny to think how very alike we are/were.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Sky High"],
    artist: ["Jigsaw"],
    date: `November 2, 2016`,
    text: `<speak>Sky High is an unintentionally feel good song, despite the lyrics, from the mid-seventies. It’s about a break up that explodes. He sings about a girl who deceives him, but the pop horns and almost-disco beat makes it a sweet, happy memory. For me, at least. It’s one of the many one hit wonders of the seventies, glued to my bones for eternity.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/49_Sky_High_final.mp3"/></speak>`,
    countdown: `fifty one to fifty one`,
    countdownDisplay: `51 to 51`,
    day: 49,
    year: [1975],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=QjtD8A-MWBc"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Sky High",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/51-to-51/49_Jigsaw.jpg",
        textContent: {
          artist: "Artist: Jigsaw",
          countdown: "Day 49 (51 to 51)",
          primaryText:
            "Sky High is an unintentionally feel good song, despite the lyrics, from the mid-seventies. It’s about a break up that explodes. He sings about a girl who deceives him, but the pop horns and almost-disco beat makes it a sweet, happy memory. For me, at least. It’s one of the many one hit wonders of the seventies, glued to my bones for eternity.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Mutual Surrender"],
    artist: ["Bourgeois Tagg"],
    date: `November 3, 2016`,
    text: `<speak>I moved back to Long Island from the Poconos in the summer of nineteen eighty-five. A lot happened in such a small amount of time, not the least of which was discovering and falling in love with the new sound of new wave, on a radio station called W.L.I.R. <break time="250ms"/> Pop music at that moment in time was muddled and disjointed, so finding this left of center type of sound was pretty much a mirror of my finding my own awakening. <break time="150ms"/>I was working at the Green Acres Mall, at a store called Jeans West. <break time="150ms"/> On my breaks, I’d walk down to Sam Goody to listen to music on those bulky, padded headphones attached to the walls. I’d heard this song on W.L.I.R. a few times already, but I found the cassette at Sam Goody and decided to listen to it to try and learn the words. Talk about a one hit wonder; this wasn’t even ever a hit, but it sticks in my head as the stand out song that solidified my love for new wave, and latching me to being rebellious and unusual. Well, in my own way. <break time="150ms"/> You have probably never heard this song before, and though it doesn’t really hold up that well, this is Mutual Surrender by Bourgeois Tagg. You’re welcome.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/48_Mutual_Surrender_final.mp3"/></speak>`,
    countdown: `fifty one to fifty one`,
    countdownDisplay: `51 to 51`,
    day: 48,
    year: [1986],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=gLgp9yHc07c"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Mutual Surrender",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/51-to-51/48_Mutual_Surrender.jpeg",
        textContent: {
          artist: "Artist: Bourgeois Tagg",
          countdown: "Day 48 (51 to 51)",
          primaryText:
            "I moved back to Long Island from the Poconos in the summer of 1985. A lot happened in such a small amount of time, not the least of which was discovering and falling in love with the new sound of new wave on a radio station called WLIR. Pop music at that moment in time was muddled and disjointed, so finding this left of center type of sound was pretty much a mirror of my finding my own awakening. I was working at the Green Acres Mall at a store called Jeans West, and on my breaks, I’d walk down to Sam Goody to listen to music on those bulky, padded headphones attached to the walls. I’d heard this song on WLIR a few times already, but I found the cassette at Sam Goody and decided to listen to it to try and learn the words. Talk about a one hit wonder; this wasn’t even ever a hit, but it sticks in my head as the stand out song that solidified my love for new wave and latching me to being rebellious and unusual. Well, in my own way. You have probably never heard this song before, and though it doesn’t really hold up that well, this is Mutual Surrender by Bourgeois Tagg. You’re welcome.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["What Is Love"],
    artist: ["Haddaway"],
    date: `November 4, 2016`,
    text: `<speak>If you were alive in the nineties, you know this song.<break time="150ms"/> You may know it as the theme for the Roxbury characters from S.N.L., played by Will Ferrell and Chris Kattan. <break time="150ms"/> To me, it was way more that – it represented the resurgence of the long-dormant disco sound, that evolved into Freestyle but began, again, to become mainstream. <break time="150ms"/> Back in the late seventies and early eighties, listening to disco was among the many things about which I hid in the proverbial closet.<break time="150ms"/> The kids at P.M.H.S. were listening to southern rock and hard metal bands, but I would sit and cue up 92 K.T.U. on the radio, static and all.<break time="150ms"/> It was a miracle I could even get crappy reception, but I did, and I listened, and I loved. <break time="150ms"/> One of the songs coming up later in this countdown is an ode to those moments in the Poconos when I hid from the world, but today’s song was a true celebration to me. The joy of being an adult, no more hiding in closets.<break time="150ms"/> To this day I hear this song on the radio and I always crank it up. Maybe you do too!<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/47_What_Is_Love_final.mp3"/></speak>`,
    countdown: `fifty one to fifty one`,
    countdownDisplay: `51 to 51`,
    day: 47,
    year: [1993],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=HEXWRTEbj1I"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "What Is Love?",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/51-to-51/47_What_Is_Love.jpg",
        textContent: {
          artist: "Artist: Haddaway",
          countdown: "Day 47 (51 to 51)",
          primaryText:
            "If you were alive in the nineties, you know this song. You may know it as the theme for the Roxbury characters from SNL played by Will Ferrell and Chris Kattan. To me, it was way more that – it represented the resurgence of the long-dormant disco sound that evolved into Freestyle but began, again, to become mainstream. Back in the late seventies and early eighties, listening to disco was among the many things about which I hid in the proverbial closet. The kids at PMHS were listening to southern rock and hard metal bands, but I would sit and cue up 92 KTU on the radio, static and all. It was a miracle I could even get shitty reception, but I did and I listened and I loved. One of the songs coming up later in this countdown is an ode to those moments in the Poconos when I hid from the world, but today’s song was a true celebration to me, the joy of being an adult, no more hiding in closets. To this day I hear this song on the radio and I always crank it up. Maybe you do too!",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Drive", "If You Could Only See", "Closing Time"],
    artist: ["The Spirits", "Tonic", "Semisonic"],
    date: `November 5, 2016`,
    text: `<speak>Today I present three songs, so I’ll label this as some songs that still resonate from a really terrible year. Dichotomy much? There’s something about me that finds comfort in the music that played around me when I was at my very lowest. Late 1997 into 1998 was, as anyone who knows my life story, the very worst period of my life. The period that shook my foundation and remolded me into a different person. Hollow and sad, and so so lost, I first felt the experience of being rallied around by those in my orbit. <break time="150ms"/> It’s when I first realized I’d even had an orbit. <break time="150ms"/>That as lonely as I felt, I was NOT alone. Not ever.<break time="350ms"/> Mary’s shocking and sudden death, the babies’ bereft cried-out faces, etched into my memory as if scribbled in black sharpie on the backs of my eyelids, brought about the kindness and goodness of people, and strangely, added color to my lackluster life. Colors I’d never experienced.<break time="250ms"/> They were not pretty colors, but they were colors nonetheless, and I needed to be able to fill in the blanks of my life with them from that point forward. <break time="150ms"/> Each day I went to work wishing it had been me in that coffin, but I kept realizing I was surrounded by people who genuinely cared about me. <break time="150ms"/>And the music that played behind us, though at the time may not have been so important, now sings hauntingly to me as a reminder of all those sad but beautiful colors and emotions. Of being empathically carried by the people around me. <break time="150ms"/>Each of today’s songs reminds me of that time, when as lonely as it felt having to be among the living, I was never alone. <break time="1500ms"/><audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/46_Drive_Semisonic_etc_final1.mp3"/><audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/46_Drive_Semisonic_etc_final2.mp3"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/46_Drive_Semisonic_etc_final3.mp3"/></speak>`,
    countdown: `fifty one to fifty one`,
    countdownDisplay: `51 to 51`,
    day: 46,
    year: [1996, 2006, 1998],
    genre: ``,
    significantHoomans: ["Mary"],
    youtube: [
      "https://www.youtube.com/watch?v=qMCAPLHRyGk",
      "https://www.youtube.com/watch?v=Sfg6-4mBs6Y",
      "https://www.youtube.com/watch?v=EAS-pvQ06s4",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Drive / If You Could Only See / Closing Time",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/51-to-51/46_Drive.jpg",
        textContent: {
          artist: "Artist: The Spirits / Tonic / Semisonic",
          countdown: "Day 46 (51 to 51)",
          primaryText:
            "Today I present three songs, so I’ll label this as some songs that still resonate from a really terrible year. Dichotomy much? There’s something about me that finds comfort in the music that played around me when I was at my very lowest. Late 1997 into 1998 was, as anyone who knows my life story, the very worst period of my life, the period that shook my foundation and remolded me into a different person. Hollow and sad and so, so lost, I first felt the experience of being rallied around by those in my orbit. It’s when I first realized I’d had an orbit; that as lonely as I felt, I was NOT alone, not ever. Mary’s shocking and sudden death, the babies’ bereft, cried-out faces etched into my memory as if scribbled in black sharpie on the backs of my eyelids, brought about the kindness and goodness of people and, strangely, added color to my lackluster life, colors I’d never experienced. They were not pretty colors, but they were colors nonetheless and I needed to be able to fill in the blanks of my life with them from that point forward. Each day I went to work wishing it had been me in that coffin, but I kept realizing I was surrounded by people who genuinely cared about me. And the music that played behind us, though at the time may not have been so important, now sings hauntingly to me as a reminder of all those sad but beautiful colors and emotions, of being empathically carried by the people around me. Each of today’s songs reminds me of that time when, as lonely as it felt having to be among the living, I was never alone. (Every new beginning comes from some other beginning's end)",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: [`Annie's Song`],
    artist: ["John Denver"],
    date: `November 6, 2016`,
    text: `<speak>There’s something about the early seventies that is just so magical in my memory. I am always the first to tell people I had a really happy childhood. From as far back as my first memories, up until the summer of 1979, I truly was a happy soul. <break time="150ms"/> And the music of that decade still fills me with a serene sense of roots. I can go on and on about the house where I grew up, across the street from a park, with neighbor kids who were just my age and with whom I created adventures every single day, like it was eternal summer. <break time="350ms"/>And that’s what this song is to me – eternal summer. <break time="150ms"/>The memories of the early seventies fill up my senses like I’d imagine a night in a forest would, like a walk in the rain. <break time="150ms"/> Annie’s Song is exactly how I would describe the memories of my life as a child on Wright Avenue in Lynbrook, and I feel like if you asked the kids from my neighborhood, they may tell you they agree.<break time="150ms"/> The tune is melodic and the lyrics tell of joy. Denver may have written this about someone he loved, but it translates, for me, to the love I have for those beautiful, endless summer days in Greis Park.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/45_Annie_Song_final.mp3"/></speak>`,
    countdown: `fifty one to fifty one`,
    countdownDisplay: `51 to 51`,
    day: 45,
    year: [1974],
    genre: ``,
    significantHoomans: ["Petey", "Your Childhood"],
    youtube: ["https://www.youtube.com/watch?v=RNOTF-znQyw"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Annie's Song",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/51-to-51/45_Annie_Song.jpeg",
        textContent: {
          artist: "Artist: John Denver",
          countdown: "Day 45 (51 to 51)",
          primaryText:
            "There’s something about the early seventies that is just so magical in my memory. I am always the first to tell people I had a really happy childhood. From as far back as my first memories up until the summer of 1979, I truly was a happy soul. And the music of that decade still fills me with a serene sense of roots. I can go on and on about the house where I grew up, across the street from a park, with neighbor kids who were just my age and with whom I created adventures every single day like it was eternal summer. And that’s what this song is to me – eternal summer. The memories of the early seventies fill up my senses like I’d imagine a night in a forest would, like a walk in the rain. Annie’s Song is exactly how I would describe the memories of my life as a child on Wright Avenue in Lynbrook, and I feel like if you asked the kids from my neighborhood they may tell you they agree. The tune is melodic and the lyrics tell of joy. Denver may have written this about someone he loved, but it translates, for me, to the love I have for those beautiful, endless summer days in Greis Park.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["You Gotta Be"],
    artist: [`Des'ree`],
    date: `November 7, 2016`,
    text: `<speak>It’s a pretty song with a nice message about learning from past mistakes and marching forward with your head high. It’s sung by a woman whose voice takes you to a jazz club, allowing you to close your eyes and sway. That’s the reason I love this song. Simple as that.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/44_You_Gotta_Be_final.mp3"/></speak>`,
    countdown: `fifty one to fifty one`,
    countdownDisplay: `51 to 51`,
    day: 44,
    year: [1994],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=pO40TcKa_5U"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "You Gotta Be",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/51-to-51/44_You_Gotta_Be.jpeg",
        textContent: {
          artist: "Artist: Des'ree",
          countdown: "Day 44 (51 to 51)",
          primaryText:
            "It’s a pretty song with a nice message about learning from past mistakes and marching forward with your head high. It’s sung by a woman whose voice takes you to a jazz club, allowing you to close your eyes and sway. That’s the reason I love this song. Simple as that.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Time After Time", "All Through The Night"],
    artist: ["Cyndi Lauper"],
    date: `November 8, 2016`,
    text: `<speak> Cyndi Lauper is an enigmatic oddball, with a unique sound that paved a bridge between pop and new wave, and added another eighties bombshell to the charts. <break time="250ms"/> She’s So Unusual, is such a great album. <break time="150ms"/> It spurred at least 5 monster hits, the leader of which is every girl’s anthem to this day, Girls Just Want To Have Fun. <break time="150ms"/> It was a giant on M.T.V. and put Cyndi in the spotlight throughout the decade. But as much as I love that song and crank it when I hear it, it’s her ballad, Time After Time, which makes my countdown, tied along with the pop ballad, All Through The Night. <break time="150ms"/> Both songs of which are just perfect classics. <break time="150ms"/>Time After Time is timeless. <break time="150ms"/>It’s a song that is still played on contemporary radio, and likely always will be. Cyndi’s voice is so sincere and the harmonies in the chorus always make me sing along. <break time="150ms"/>And since having my Woof in my life, it’s taken on a new meaning to me, for us, because I always want him to know I am his safe place (and he is mine.) <break time="150ms"/> Also, Romy and Michelle. <break time="250ms"/> All Through The Night, to me, is just such a beautifully melodic song about longing, with harps and chimes and synths to make you sway. <break time="150ms"/>I love the end so much, where Cyndi holds that note and the harmony balances it out. <break time="150ms"/> I can’t. <break time="150ms"/> It’s just such a great song from such an unusual girl.<break time="1500ms"/><audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/43_Cyndi_Lauper_final.mp3"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/43_Cyndi_Lauper_final2.mp3"/></speak>`,
    countdown: `fifty one to fifty one`,
    countdownDisplay: `51 to 51`,
    day: 43,
    year: [1983, 1983],
    genre: ``,
    significantHoomans: ["Stomps"],
    youtube: [
      "https://www.youtube.com/watch?v=VdQY7BusJNU",
      "https://www.youtube.com/watch?v=ZONKoKIQ9RY",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Time After Time / All Through The Night",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/51-to-51/43_Cyndi_Lauper.png",
        textContent: {
          artist: "Artist: Cyndi Lauper",
          countdown: "Day 43 (51 to 51)",
          primaryText:
            "Cyndi Lauper is an enigmatic oddball with a unique sound that paved a bridge between pop and new wave and added another eighties bombshell to the charts. She’s So Unusual is such a great album. It spurred at least 5 monster hits, the leader of which is every girl’s anthem to this day, Girls Just Want To Have Fun. It was a giant on MTV and put Cyndi in the spotlight throughout the decade. But as much as I love that song and crank it when I hear it, it’s her ballad Time After Time which makes my countdown, tied along with the pop ballad All Through The Night, both songs of which are just perfect classics. Time After Time is timeless; it’s a song that is still played on contemporary radio, and likely always will. Cyndi’s voice is so sincere and the harmonies in the chorus always make me sing along. And since having my Woof in my life, it’s taken on a new meaning to me, for us, because I always want him to know I am his safe place (and he is mine.) Also, Romy and Michelle. All Through The Night, to me, is just such a beautifully melodic song about longing, with harps and chimes and synths to make you sway. I love the end so much, where Cyndi holds that note and the harmony balances it out. I can’t. It’s just such a great song from such an unusual girl.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Firework"],
    artist: ["Glee Cast"],
    date: `November 9, 2016`,
    text: `<speak>When Glee began on Fox in May of 2009, it immediately delivered what the title of show promised – glee. <break time="150ms"/>It was a mirror of a wishful high school experience that nearly every gay geek could ever want; to be popular as part of the underdog extracurricular. <break time="150ms"/>Speaking for me though, and maybe for Chris, we were watching these enormously talented kids sing till their hearts swelled, while simultaneously living through provocative, important stories of failure, acceptance, anxiety and lust. <break time="250ms"/> I think any fan of Glee could find a part of themselves in Rachel or Kurt or Mercedes or Finn. <break time="150ms"/> And some, maybe, even found a piece of themselves in all. Every song sung by Lea Michele, the Spring Awakening star who breathed life into the effervescent but insecure Rachel Berry, is perfection. <break time="200ms"/> When Rachel sings something that’s concurrently on pop radio, you’re amazed at how beautifully, how masterfully she sings it, and how much heart and soul she brings to it. Whether it’s by Barbra or Celine, from Les Mis or Cabaret, or a song that’s never quite made it to the charts, Michele, as Berry, makes it an instant classic. I have a playlist of favorites, as it’s impossible to pick just one, or just five. <break time="150ms"/> This post, therefore, celebrates all the songs sung by this mesmerizingly talented girl, but the video is that of Katy Perry’s Firework, as an anthem to the dreamer in all of us.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/42_Firework_final.mp3"/></speak>`,
    countdown: `fifty one to fifty one`,
    countdownDisplay: `51 to 51`,
    day: 42,
    year: [2011],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=whV2jy3J-GY"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Firework",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/51-to-51/42_Firework.jpg",
        textContent: {
          artist: "Artist: Glee Cast",
          countdown: "Day 42 (51 to 51)",
          primaryText:
            "When Glee began on Fox in May of 2009, it immediately delivered what the title of show promised – glee. Glee was a mirror of a wishful high school experience that nearly every gay geek could ever want; to be popular as part of the underdog extracurricular. Speaking for me though, and maybe for Chris, we were watching these enormously talented kids sing till their hearts swelled while simultaneously living through provocative, important stories of failure and acceptance and anxiety and lust. I think any fan of Glee could find a part of themselves in Rachel or Kurt or Mercedes or Finn. And some, maybe, even found a piece of themselves in all. Every song sung by Lea Michele, the Spring Awakening star who breathed life into the effervescent but insecure Rachel Berry, is perfection. When Rachel sings something that’s concurrently on pop radio, you’re amazed at how beautifully, how masterfully she sings it, and how much heart and soul she brings to it. Whether it’s by Barbra or Celine, from Les Mis or Cabaret, or a song that’s never quite made it to the charts, Michele, as Berry, makes it an instant classic. I have a playlist of favorites, as it’s impossible to pick just one, or just five. This post, therefore, celebrates all the songs sung by this mesmerizingly talented girl, but the video is that of Katy Perry’s Firework, as an anthem to the dreamer in all of us.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["I’d Die Without You"],
    artist: ["PM Dawn"],
    date: `November 10, 2016`,
    text: `<speak>There was a brief time when I lived in a room in Aurora’s uninsulated attic. The room was small and had pitched ceilings, but I was young and didn’t really need much. I had a bed, a chest of drawers, a barrister bookcase, and a few posters on the blank walls. There was a window that faced west and allowed me to look out at the green, across Rockaway and Corona Avenues. In spite of that, I don’t think I was ever more comfortable calling someplace my home than in that short spattering of time in 1992. <break time="150ms"/> At that point I had already been in and finished 3 relationships in a young gay man’s life, the third of which had been lingering and torturing me. <break time="150ms"/> My solace was that room.<break time="250ms"/> I’d Die Without You, by PM Dawn, takes me back to that room when I close my eyes. <break time="150ms"/> As one did in the days prior to the mp3, I’d recorded the song off the radio onto a cassette and would rewind it and replay it over and over, a running theme in my life of music. <break time="150ms"/>It’s not so much about lyrics, though they resonated for sure at the time, as it is about the tear drop shaped piano notes, and the dreamy voice of the lead singer as he apologizes while under water and drowning. <break time="150ms"/> Strange, I know, how I can find consolation in sad melodies and lyrics that bring me back to a small, cold, lonely room.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/41_PM_Dawn_final.mp3"/></speak>`,
    countdown: `fifty one to fifty one`,
    countdownDisplay: `51 to 51`,
    day: 41,
    year: [1992],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=C_qWlPCEnGM"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "I’d Die Without You",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/51-to-51/41_PM_Dawn.jpg",
        textContent: {
          artist: "Artist: PM Dawn ",
          countdown: "Day 41 (51 to 51)",
          primaryText:
            "There was a brief time when I lived in a room in Aurora’s uninsulated attic. The room was small and had pitched ceilings, but I was young and didn’t really need much. I had a bed, a chest of drawers, a barrister bookcase, and a few posters on the blank walls. There was a window that faced west and allowed me to look out at the green across Rockaway and Corona Avenues. In spite of that, I don’t think I was ever more comfortable calling someplace my home than in that short spattering of time in 1992. At that point I had already been in and finished 3 relationships in a young gay man’s life, the third of which had been lingering and torturing me. My solace was that room. I’d Die Without You by PM Dawn takes me back to that room when I close my eyes. As one did in the days prior to the mp3, I’d recorded the song off the radio onto a cassette and would rewind it and replay it over and over, a running theme in my life of music. It’s not so much about lyrics, though they resonated for sure at the time, as it is about the tear drop shaped piano notes and the dreamy voice of the lead singer as he apologizes while under water and drowning. Strange, I know, how I can find consolation in sad melodies and lyrics that bring me back to a small, cold, lonely room.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Year Of The Cat"],
    artist: ["Al Stewart"],
    date: `November 11, 2016`,
    text: `<speak>From the mid-seventies comes this melodic, soothing tale of a man, beguiled by a woman who smells of incense and patchouli. It’s an uncharacteristically long song, from an era when hits were cut to just about 3 minutes in order to maintain air play on the radio. A combination of complex instrumentals, combining piano and sax solos, with a pleasant, wistful voice. <break time="150ms"/> Year Of The Cat is a mastery of easy listening for someone like me, who likes their songs to be filled with repetitious rhythm and strain. They just don’t make’em like this anymore.  <break time="150ms"/>I mean, that horn solo at 4 minutes and 13 seconds is just everything.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/40_Year_Of_The_Cat_final.mp3"/></speak>`,
    countdown: `fifty one to fifty one`,
    countdownDisplay: `51 to 51`,
    day: 40,
    year: [1976],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=Ak_MTXQALa0"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Year Of The Cat",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/51-to-51/40_Year_Of_The_Cat.jpeg",
        textContent: {
          artist: "Artist: Al Stewart",
          countdown: "Day 40 (51 to 51)",
          primaryText:
            "From the mid-seventies comes this melodic, soothing tale of a man beguiled by a woman who smells of incense and patchouli. It’s an uncharacteristically long song from an era when hits were cut to just about 3 minutes in order to maintain air play on the radio. A combination of complex instrumentals combining piano and sax solos with a pleasant, wistful voice, Year Of The Cat is a mastery of easy listening for someone like me who likes their songs to be filled with repetitious rhythm and strain. They just don’t make’em like this anymore. I mean, that horn solo at 4 minutes and 13 seconds is everything.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Get Outta My Way"],
    artist: ["Kylie Minogue"],
    date: `November 12, 2016`,
    text: `<speak>I have been traveling to Provincetown every summer since 1994. <break time="150ms"/> It’s my happy place. It’s where my soul breathes without restriction, and I feel unboundedly connected. <break time="150ms"/> When I can hear a song, close my eyes, and allow it to take me back to P-town, is when I am happiest (other than obviously being there). <break time="250ms"/>International superstar Kylie Minogue’s 2010 hit, Get Outta My Way, is the one song that always did it for me, but it wasn’t until a summer or two afterwards, that I discovered a tribute video being lip-synced in black and white by a bunch of hot porn actors, that the song was grounded as a major favorite. <break time="150ms"/> It’s a delightful pop song about leaving her man behind if he isn’t gonna keep up. Female empowerment at its best. <break time="150ms"/> And to watch these beautiful boys gyrate and lip-sync on a giant screen while holding a Corona and standing at the Wave Bar on a hot summer night, is a memory I hope I never lose. <break time="150ms"/>Thank the gods there’s always YouTube.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/39_Get_Outta_My_Way_final.mp3"/></speak>`,
    countdown: `fifty one to fifty one`,
    countdownDisplay: `51 to 51`,
    day: 39,
    year: [2010],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=BHGaW8lBlSk"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Get Outta My Way",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/51-to-51/39_Get_Outta_My_Way.png",
        textContent: {
          artist: "Artist: Kylie Minogue",
          countdown: "Day 39 (51 to 51)",
          primaryText:
            "I have been traveling to Provincetown every summer since 1994. It’s my happy place. It’s where my soul breathes without restriction and I feel unboundedly connected. When I can hear a song, close my eyes and allow it to take me back to Ptown is when I am happiest (other than obviously being there).International superstar Kylie Minogue’s 2010 hit Get Outta My Way is the one song that always did it for me, but it wasn’t until a summer or two afterwards that I discovered a tribute video being lip-synced in black & white by a bunch of hot porn actors that the song was grounded as a major favorite. It’s a delightful pop song about leaving her man behind if he isn’t gonna keep up. Female empowerment at its best. And to watch these beautiful boys gyrate and lip-sync on a giant screen while holding a Corona and standing at the Wave Bar on a hot summer night is a memory I hope I never lose. Thank the gods there’s always YouTube. (I’m about to let you see. This is what’ll happen if you ain’t givin’ your girl what she needs)",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Whenever I Call You Friend"],
    artist: ["Kenny Loggins"],
    date: `November 13, 2016`,
    text: `<speak>There are certain songs, sung by certain artists, which transcend time. That sound the same in this very moment as they did the first time we heard it on AM Radio. For me, Whenever I Call You Friend, is one of those songs. <break time="150ms"/> The beautiful, honey-dripped blend of Stevie and Kenny’s voices is literally as delicious to the ear, as home-cooked baklava is to the palate. <break time="250ms"/>Now, to be completely honest, I’m not sure if it was intended as a love ballad, or an ode to that one perfect friend. <break time="150ms"/> Or maybe even both. But speaking as someone who deftly relies on the empathy and shoulder of his friends, this song is an anthem for me, to all those who show me their unconditional love and support. <break time="150ms"/> Sad there’s no actual video to accompany this post, or to just enjoy with eyes as well as ears. I suppose it was never recorded lyve, and it was certainly recorded before the M.T.V. era, but man would that be cool to see a seventies-garbed Stevie Nicks, swaying behind a mike-stand, in harmony with a similarly-coifed Kenny Loggins.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/38_Kenny_Loggins_final.mp3"/></speak>`,
    countdown: `fifty one to fifty one`,
    countdownDisplay: `51 to 51`,
    day: 38,
    year: [1978],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=-B7jWOyzUiY"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Whenever I Call You Friend",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/51-to-51/38_Kenny_Loggins.jpg",
        textContent: {
          artist: "Artist: Kenny Loggoins",
          countdown: "Day 38 (51 to 51)",
          primaryText:
            "There are certain songs, sung by certain artists, which transcend time, that sound the same in this very moment as they did the first time we heard it on AM Radio. For me, Whenever I Call You Friend is one of those songs. The beautiful, honey-dripped blend of Stevie and Kenny’s voices is literally as delicious to the ear as home-cooked baklava is to the palate.Now, to be completely honest, I’m not sure if it was intended as a love ballad or an ode to that one perfect friend. Or maybe even both. But speaking as someone who deftly relies on the empathy and shoulder of his friends, this song is an anthem for me to all those who show me their unconditional support and love. Sad there’s no actual video to accompany this post, or to just enjoy with eyes as well as ears. I suppose it was never recorded live, and it was certainly recorded before the MTV era, but man would that be cool to see a seventies-garbed Stevie Nicks swaying behind a mic-stand in harmony with a similarly-coifed Kenny Loggins.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Sara"],
    artist: ["Fleetwood Mac"],
    date: `November 14, 2016`,
    text: `<speak>And speaking of Stevie, here’s one of the most beautiful songs I’ve ever heard. <break time="150ms"/> By the time Fleetwood Mac released this song, they were already a major force of what would come to be classic rock music. Scores of number ones and chart toppers, some sung by the darling Stevie, some harmonized by Stevie and Lindsay, some even sung by Christine McVey. <break time="250ms"/> But for me, there is nothing that compares to the sparkling magic and haunting resonance of Sara. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/37_Sara_final.mp3"/> I was introduced to this song when I lived in Pocono Country Place, by part time resident Roberta, who was, at the time, my mentor and my muse.  She was a few years my senior and was the first person to encourage my imagination, to inspire me to pursue my passion for writing, to not just push it aside as childish reflection. If I’d told Roberta that I could imagine myself flying across the moon in a sleek silver cruiser, she’d pensively ask me to describe it so she could see it for herself.</speak>`,
    countdown: `fifty one to fifty one`,
    countdownDisplay: `51 to 51`,
    day: 37,
    year: [1979],
    genre: ``,
    significantHoomans: ["Roberta"],
    youtube: ["https://www.youtube.com/watch?v=9bWGy0K5VF0"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Sara",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/51-to-51/37_Sara.jpeg",
        textContent: {
          artist: "Artist: Fleetwood Mac",
          countdown: "Day 37 (51 to 51)",
          primaryText:
            "And speaking of Stevie, here’s one of the most beautiful songs I’ve ever heard. By the time Fleetwood Mac released this song, they were already a major force of what would come to be classic rock music. Scores of number ones and chart toppers, some sung by the darling Stevie, some harmonized by Stevie and Lindsay, some even sung by Christine McVey. But for me, there is nothing that compares to the sparkling magic and haunting resonance of Sara. (Sara, you’re the poet in my heart. Never change, and don’t you ever stop) I was introduced to this song when I lived in Pocono Country Place by part time resident Roberta who was, at the time, my mentor and my muse. She was a few years my senior and was the first person to encourage my imagination, to inspire me to pursue my passion for writing, to not just push it aside as childish reflection. If I’d told Roberta that I could imagine myself flying across the moon in a sleek silver cruiser, she’d pensively ask me to describe it so she could see it for herself.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["She Sells Sanctuary"],
    artist: ["The Cult"],
    date: `November 15, 2016`,
    text: `<speak>A kick-ass song about jealousy, shriek-sung by a voice that is simultaneously abrasive to the ear and manages to fit perfectly in line with the percussion and guitars, is today’s favorite. <break time="150ms"/> She Sells Sanctuary, by the Cult, is one of the many crazy-amazing songs from a long, loud playlist of my W.L.I.R. days.<break time="150ms"/> Hot, black, smoky nights at the Malibu on Lido Blvd., music pumping so hard you can feel the beat with your whole body.<break time="150ms"/> It’s also a song (among many) that reminds me of my pal Kenny Lesko. Kenny was a unique individual, to say the very least. From the first millisecond I ever saw him, mastering the power mullet, draped in a gray duster, rocking the fingerless leather gloves, and sporting a cigarette between his lips. I knew I wanted to be this guy’s friend. <break time="150ms"/>How would I ever know he’d end up one of the best people I’ll ever know?<break time="150ms"/> Funny, creative, perverted, loyal, sarcastic, kind, confident. <break time="150ms"/> I could spew a list of adjectives all day to describe Kenny. This song will always bring him to front of mind, moving perfectly to the sway of the song, Grolsch in one hand, cig in the other.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/36_The_Cult_final.mp3"/></speak>`,
    countdown: `fifty one to fifty one`,
    countdownDisplay: `51 to 51`,
    day: 36,
    year: [1985],
    genre: ``,
    significantHoomans: ["Kenny"],
    youtube: ["https://www.youtube.com/watch?v=ZCOSPtyZAPA"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "She Sells Sanctuary",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/51-to-51/36_The_Cult.jpeg",
        textContent: {
          artist: "Artist: The Cult",
          countdown: "Day 36 (51 to 51)",
          primaryText:
            "A kick-ass song about jealousy, shriek-sung by a voice that is simultaneously abrasive to the ear and manages to fit perfectly in line with the percussion and guitars, is today’s favorite. She Sells Sanctuary by the Cult is one of the many crazy-amazing songs from a long, loud playlist of my WLIR days. Hot, black, smoky nights at the Malibu on Lido Blvd., music pumping so hard you can feel the beat with your whole body. It’s also a song (among many) that reminds me of my pal Kenny Lesko. Kenny was a unique individual, to say the very least. From the first millisecond I ever saw him, mastering the power mullet, draped in a gray duster, rocking the fingerless leather gloves and sporting a cigarette between his lips, I knew I wanted to be this guy’s friend. How would I ever know he’d end up one of the best people I’ll ever know? Funny, creative, perverted, loyal, sarcastic, kind, confident… I could spew a list of adjectives all day to describe Kenny. This song will always bring him to front of mind, moving perfectly to the sway of the song, Grolsch in one hand, cig in the other.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Sailing", "Arthur’s Theme"],
    artist: ["Christopher Cross", "Christopher Cross"],
    date: `November 16, 2016`,
    text: `<speak>There is something truly special about the voice and the music of Christopher Cross. <break time="150ms"/>Cheesy as most of his songs may seem, they are some of the most memorable, from a time of flux in pop culture. Even now when I listen to Sailing, his debut mega hit from 1980, I am transported. <break time="150ms"/>Much like the feeling I’d described last year for a similar song by the Little River Band, this song really does <break time="200ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/35_Christopher_Cross_final1.mp3"/> <break time="150ms"/>For that scared kid in the Poconos, whose only friends were a blind dog and the teenaged characters in comic books, I would hear this song, close my eyes, and just wish I could be rescued from the mundane, and carried away on the Titans’ T-Jet, or a Legion Cruiser. <break time="450ms"/> In addition to Sailing, honorable mention is deserved for Arthur’s Theme (Best That You Can Do), another song that brings to mind, for me, the childlike wonder of all the things I’d never imagined I’d ever find, like falling in love in New York City.<break time="150ms"/> Strangely, I don’t really associate the song to the film with Dudley Moore and Liza Minelli, as amazing as it is. <break time="250ms"/> Instead, I get the continued reverence of a dreamer’s escapism, in the beautiful solo that I feel when I hear Cross’ first hit, Sailing. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/35_Christopher_Cross_final2.mp3"/></speak>`,
    countdown: `fifty one to fifty one`,
    countdownDisplay: `51 to 51`,
    day: 35,
    year: [1979, 1981],
    genre: ``,
    significantHoomans: [],
    youtube: [
      "https://www.youtube.com/watch?v=MEO6gYCFbr0",
      "https://www.youtube.com/watch?v=qqGWOxu_H4I",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Sailing / Arthur’s Theme [Best That You Can Do]",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/51-to-51/35_Arthur_Theme.jpeg",
        textContent: {
          artist: "Artist: Christopher Cross",
          countdown: "Day 35 (51 to 51)",
          primaryText:
            "There is something truly special about the voice and the music of Christopher Cross. Cheesy as most of his songs may seem, they are some of the most memorable from a time of flux in pop culture. Even now when I listen to Sailing, his debut mega hit from 1980, I am transported. Much like the feeling I’d described last year for a similar song by the Little River Band, this song really does (Take me away, to where I’ve always heard it could be. Just a dream and the wind to carry me, soon I will be free...) For that scared kid in the Poconos whose only friends were a blind dog and the teenaged characters in comic books, I would hear this song, close my eyes, and just wish I could be rescued from the mundane and carried away on the Titans’ T-Jet or a Legion Cruiser. In addition to Sailing, honorable mention is deserved for Arthur’s Theme (Best That You Can Do), another song that brings to mind, for me, the childlike wonder of all the things I’d never imagined I’d ever find, like falling in love in New York City. Strangely I don’t really associate the song to the film with Dudley Moore and Liza Minelli, as amazing as it is; I get the continued reverence of a dreamer’s escapism in the beautiful horn solo that I feel when I hear Cross’s first hit, Sailing",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["No Air"],
    artist: ["Jordin Sparks"],
    date: `November 17, 2016`,
    text: `<speak>Jordin Sparks was the last female winner of American Idol. The girl is filled with huge talent. Bitch can SING. <break time="250ms"/> And though I don’t particularly care for her genre of music, or anything really from the current decade, No Air, her duet with the unlikable lothario Chris Brown, is actually one of my favorite songs ever. <break time="250ms"/> Granted, the fact that Rachel and Finn sung this together on Glee did help me love it, but I really did find the song pretty amazing from the first time I encountered it. <break time="150ms"/>There’s something in the chorus that speaks to the captivity of true love, that sense of drowning without one’s partner. Hard as it is to admit I like a song that was written by a team of people behind the scenes, just like most of the crap that’s been produced and spewed upon us over the past decade, the saving grace is the truth in Jordin’s voice and, undeniably, Chris Brown’s as well.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/34_No_Air_final.mp3"/></speak>`,
    countdown: `fifty one to fifty one`,
    countdownDisplay: `51 to 51`,
    day: 34,
    year: [2008],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=WBKnpyoFEBo"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "No Air",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/51-to-51/34_No_Air.jpeg",
        textContent: {
          artist: "Artist: Jordin Sparks",
          countdown: "Day 34 (51 to 51)",
          primaryText:
            "Jordin Sparks was the last female winner of American Idol. The girl is filled with huge talent. Bitch can SING. And though I don’t particularly care for her genre of music, or anything really from the current decade, No Air, her duet with the unlikable lothario Chris Brown, is actually one of my favorite songs ever. Granted, the fact that Rachel and Finn sung this together on Glee did help me love it, but I really did find the song pretty amazing from the first time I encountered it. There’s something in the chorus that speaks to the captivity of true love, that sense of drowning without one’s partner. Hard as it is to admit I like a song that was written by a team of people behind the scenes, just like most of the crap that’s been produced and spewed upon us over the past decade, the saving grace is the truth in Jordin’s voice and, undeniably, Chris Brown’s as well.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["The First Time Ever I Saw Your Face", "Killing Me Softly"],
    artist: ["Roberta Flack"],
    date: `November 18, 2016`,
    text: `<speak>Seventies singer/songwriter Roberta Flack. <break time="150ms"/> I mean, is there anything else to say? <break time="150ms"/> A voice that’s both understated and gigantic. Lyrics that beg for connection. It’s really hard to describe the way these two songs make me feel, other than saying Killing Me Softly, and The First Time Ever I Saw Your Face, both take me back to the furthest memories of my very happy, innocent childhood. <break time="150ms"/> I remember being a little boy and thinking how confusing and amazing these songs were; they intrigued me to understand grown-up relationships. There was a man who knew her better than she knew herself. His music tore her apart but it made her sing these beautiful lyrics to this music-box sound. It was both terrible and wonderful, and how is that possible? Haunting even today, when I hear either of these songs, I am reminded of those evocative moments when I was a little boy who’d stand in the leaf piles across the street in the park, looking up at the stars in the early night sky, endless and scary but also tantalizing and welcoming.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/33_Roberta_Flack_fianl.mp3"/></speak>`,
    countdown: `fifty one to fifty one`,
    countdownDisplay: `51 to 51`,
    day: 33,
    year: [1969, 1973],
    genre: ``,
    significantHoomans: ["Young Nock"],
    youtube: [
      "https://www.youtube.com/watch?v=VqW-eO3jTVU",
      "https://www.youtube.com/watch?v=k4A5XuMz_Tw",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "The First Time Ever I Saw Your Face / Killing Me Softly",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/51-to-51/33_Roberta_Flack.jpeg",
        textContent: {
          artist: "Artist: Roberta Flack",
          countdown: "Day 33 (51 to 51)",
          primaryText:
            "Seventies singer/songwriter Roberta Flack. I mean, is there anything else to say? A voice that’s both understated and gigantic, lyrics that beg for connection. It’s really hard to describe the way these two songs make me feel, other than saying Killing Me Softly and The First Time Ever I Saw Your Face both take me back to the furthest memories of my very happy, innocent childhood. I remember being a little boy and thinking how confusing and amazing these songs were; they intrigued me to understand grown-up relationships. There was a man who knew her better than she knew herself. His music tore her apart but it made her sing these beautiful lyrics to this music-box sound. It was both terrible and wonderful, and how is that possible?Haunting even today, when I hear either of these songs I am reminded of those evocative moments when I was a little boy who’d stand in the leaf piles across the street in the park, looking up at the stars in the early night sky, endless and scary but also tantalizing and welcoming.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Calling You"],
    artist: ["Blue October"],
    date: `November 19, 2016`,
    text: `<speak>Calling You, by alternative rock band Blue October, is an anthem to obsessive love. <break time="150ms"/> It holds one of my favorite lyrics in any love song: I can’t believe you actually picked me. <break time="250ms"/> This song came to be popular in the early 2000’s, but I identify with it as coming to be during the beginnings of my relationship with Chris. <break time="150ms"/> Both of us were damaged in some way but found peace with one another, finding friendship and love amidst the tumult. <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/32_Calling_You_final1.mp3"/> If we were to have gone with a traditional ‘first dance’ at our wedding, I’d have seen if there were a slower version of this song to hold him and sway, while whispering the words in his ear, because I still can’t believe he actually picked me.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/32_Calling_You_final2.mp3"/></speak>`,
    countdown: `fifty one to fifty one`,
    countdownDisplay: `51 to 51`,
    day: 32,
    year: [2003],
    genre: ``,
    significantHoomans: ["Stomps", "Petey"],
    youtube: ["https://www.youtube.com/watch?v=iNyGK7ymW0k"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Calling You",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/51-to-51/32_Calling_You.jpeg",
        textContent: {
          artist: "Artist: Blue October",
          countdown: "Day 32 (51 to 51)",
          primaryText:
            "Calling You, by alternative rock band Blue October, is an anthem to obsessive love. It holds one of my favorite lyrics in any love song: I can’t believe you actually picked me. This song came to be popular in the early 00’s but I identify with it as coming to be during the beginnings of my relationship with Chris. Both of us were damaged in some way but found peace with one another, finding friendship and love amidst the tumult. (Take away the old, show me the new, And I feel like I can fly when I stand next to you.....Only wanna see if you’re okay when I’m not around. Asking if you love me. I love the way you make it sound.) If we were to have gone with a traditional ‘first dance’ at our wedding, I’d have seen if there were a slower version of this song to hold him and sway, while whispering the words in his ear, because I still can’t believe he actually picked me.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["I Just Want To Be Your Everything"],
    artist: ["Andy Gibb"],
    date: `November 20, 2016`,
    text: `<speak>This post is as much about the entire year of music from 1977, as it is about the song I love most from that year, by the artist who began the stirrings of the baby gay I was at age 11. <break time="250ms"/> I could run a list as long as my arm of the songs from 1977 that I could listen to all day. In fact, when going through my online music playlists, often I come back to 77 as the stand out.  <break time="250ms"/> But today, we will chat about the magic that is Andy Gibb, and his mega-hit, I Just Want To Be Your Everything.  <break time="250ms"/> The landscape of pop music began changing as the seventies approached its end, and the Bee Gee’s had their imprint on so much, not least of all the career of their youngest brother.  <break time="150ms"/>The album cover had Andy in a red shirt, unbuttoned enough to showcase his hairy chest. There he was, with his wavy, feathered hair, and the smile of what can only be described as that of a demigod, the son of perhaps Zeus and some beautiful Australian mortal.  <break time="250ms"/> My cousin Cristine had a huge crush on Andy Gibb, and she was allowed to, as a little girl in suburban America.  <break time="150ms"/> I, obviously, was not. <break time="150ms"/> But when Aunt Pat got us tickets to see him perform at the Westbury Music Fair, it was all I could do to contain myself. He was literal perfection.  <break time="250ms"/> His music was brilliant delight. It lit me up inside, and I didn’t know why, I just knew I could never talk about it. <break time="50ms"/> Until now, so enjoy some youngest brother Gibb!<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/31_Andy_GIbb_final.mp3"/></speak>`,
    countdown: `fifty one to fifty one`,
    countdownDisplay: `51 to 51`,
    day: 31,
    year: [1977],
    genre: ``,
    significantHoomans: ["Cristine"],
    youtube: ["https://www.youtube.com/watch?v=tA6L8-lxaA8"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "I Just Want To Be Your Everything",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/51-to-51/31_Andy_Gibb.jpg",
        textContent: {
          artist: "Artist: Andy Gibb",
          countdown: "Day 31 (51 to 51)",
          primaryText:
            "his post is as much about the entire year of music from 1977, as it is about the song I love most from that year, by the artist who began the stirrings of the baby gay I was at age 11. I could run a list as long as my arm of the songs from 1977 that I could listen to all day. In fact, when going through my online music playlists, often I come back to ‘77 as the stand out. But today we will chat about the magic that is Andy Gibb and his mega-hit I Just Want To Be Your Everything. The landscape of pop music began changing as the seventies approached its end, and the Bee Gee’s had their imprint on so much, not least of all the career of their youngest brother. The album cover had Andy in a red shirt, unbuttoned enough to showcase his hairy chest. There he was with his wavy, feathered hair and the smile of what can only be described as that of a demigod, the son of perhaps Zeus and some beautiful Australian mortal. My cousin Cristine had a huge crush on Andy Gibb, and she was allowed to, as a little girl in suburban America. I, obviously, was not. But when Aunt Pat got us tickets to see him perform at the Westbury Music Fair, it was all I could do to contain myself. He was literal perfection. His music was brilliant delight. It lit me up inside, and I didn’t know why, I just knew I could never talk about it. Until now, so enjoy some youngest brother Gibb!",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["The King Of Wishful Thinking"],
    artist: ["Go West"],
    date: `November 21, 2016`,
    text: `<speak>Go West released a song called, We Close Our Eyes, in 1985. A year I’ve spoken about, which began turning the table on music in general for me. <break time="150ms"/> I loved that damn song, as it flowed with my new obsession with W.L.I.R. and its new wave revolution. <break time="150ms"/>It wasn’t until 1990 though, that these guys released a song that melted into the pop mainstream. Having a huge hit that was associated with the biggest film of the year, starring the biggest stars of the year, was probably not a bad thing, but it certainly solidified The King Of Wishful Thinking, as one for the history books. A blend of pleasant pop and lead singer Peter Cox’s vocal range, along with that sound of theirs that made me love their new wave feel, this song has always been one I crank when I hear it on the radio. <break time="150ms"/> Listening to it as I write this, I just did exactly that! <break time="250ms"/>PS: I’m always a sucker for a pop song with horns in the break!<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/30_King_Of_Wishful_Thinking_final.mp3"/></speak>`,
    countdown: `fifty one to fifty one`,
    countdownDisplay: `51 to 51`,
    day: 30,
    year: [1990],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=XBZUz4C6kqk"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "The King Of Wishful Thinking",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/51-to-51/30_King_of_the_Wishful_Thinking.jpeg",
        textContent: {
          artist: "Artist: Go West",
          countdown: "Day 30 (51 to 51)",
          primaryText:
            "Go West released a song called We Close Our Eyes in 1985, a year I’ve spoken about which began turning the table on music in general for me. I loved that damn song as it flowed with my new obsession with WLIR and its new wave revolution.It wasn’t until 1990, though, that these guys released a song that melted into the pop mainstream. Having a huge hit that was associated with the biggest film of the year starring the biggest stars of the year was probably not a bad thing, but it certainly solidified The King Of Wishful Thinking as one for the history books. A blend of pleasant pop and lead singer Peter Cox’s vocal range, along with that sound of theirs that made me love their new wave feel, this song has always been one I crank when I hear it on the radio. Listening to it as I write this, I just did exactly that! PS: I’m always a sucker for a pop song with horns in the break!",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Eternal Flame"],
    artist: ["The Bangles"],
    date: `November 22, 2016`,
    text: `<speak><audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/29_Eternal_Flame_final1.mp3"/>Sometimes I fall in love with a song long after its release, and only because of what it reminds me of when I think back on it. <break time="250ms"/> Frankly, I never really liked Eternal Flame, by the Bangles, in 1989 when it was a hit, but it was my best friend Vinny’s song for his then-partner. <break time="150ms"/> At the time, I found it to be simplistic and ordinary, nothing special. <break time="150ms"/> Years later, when my friend was sick and near the end of his life, we went on a day trip together and heard this song on the radio. <break time="150ms"/> Vincent confessed to me in that moment what this song represented to him, and why he loved it so much. <break time="150ms"/> He explained a lot to me that day, as we spoke of our past loves and the mistakes we made with them, the things we did to them. <break time="250ms"/> I never heard this song the same way again after that day in March of 2006. <break time="150ms"/> Months after he passed, I bumped into his ex at the bar and broke the news of his death. <break time="150ms"/> Richie was blown away at the news, as I assume it would be for anyone hearing of the death of someone they once truly loved. <break time="150ms"/>We cried and drank and cried some more that night, and when we eventually connected on social media, I realized Eternal Flame was just as much Richie’s song as it was Vinny’s. <break time="150ms"/> I know it’s weird to love a song that breaks your heart. But that’s me. I love music of all kinds, even when it tears me up to listen to it. Sometimes, in fact, especially then.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/29_Eternal_Flame_final2.mp3"/></speak>`,
    countdown: `fifty one to fifty one`,
    countdownDisplay: `51 to 51`,
    day: 29,
    year: [1988],
    genre: ``,
    significantHoomans: ["Vinny"],
    youtube: ["https://www.youtube.com/watch?v=PSoOFn3wQV4"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Eternal Flame",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/51-to-51/29_Eternal_Flame.jpg",
        textContent: {
          artist: "Artist: The Bangles",
          countdown: "Day 29 (51 to 51)",
          primaryText:
            "Sometimes I fall in love with a song long after its release and only because of what it reminds me of when I think back on it. Frankly, I never really liked Eternal Flame by the Bangles in 1989 when it was a hit, but it was my best friend Vinny’s song for his then-partner. At the time I found it to be simplistic and ordinary, nothing special. Years later when my friend was sick and near the end of his life, we went on a day trip together and heard this song on the radio. Vincent confessed to me in that moment what this song represented to him and why he loved it so much. He explained a lot to me that day, as we spoke of our past loves and the mistakes we made with them, the things we did to them. I never heard this song the same way again after that day in March of 2006. Months after he passed, I bumped into his ex at the bar and broke the news of his death. Richie was blown away at the news, as I assume it would be for anyone hearing of the death of someone they once truly loved. We cried and drank and cried some more that night, and when we eventually connected on social media, I realized Eternal Flame was just as much Richie’s song as it was Vinny’s. I know it’s weird to love a song that breaks your heart. But that’s me. I love music of all kinds, even when it tears me up to listen to it. Sometimes, in fact, especially then.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Dancing Queen"],
    artist: ["ABBA"],
    date: `November 23, 2016`,
    text: `<speak>How A.B.B.A. never made it into my countdown last year is beyond me. My entry regarding disco mega-hit, We Are Family ,by Sister Sledge talked about that K-Tel record album that started it all for me. The one with all the hits of the day. <break time="150ms"/> One of those hits, among the sea of disco gems, was Dancing Queen. <break time="150ms"/> This song is so cheesy and so amazing, from the opening piano drag, to the very end, that has those Swedish voices just floating away into a disco netherverse. <break time="250ms"/>A.B.B.A.’s sound in general was so uniquely seventies, but so brilliant for that decade, and even though it doesn’t really hold up, it seems that many have held onto the magic. <break time="150ms"/> From Priscilla, Queen of the Desert, to Muriel’s Wedding, to a tribute album by Erasure, A.B.B.A. is a force to be celebrated. <break time="250ms"/>Needless to say, Vinny and I LOVED Dancing Queen, and all the gay-related jokes we’d make about each other and about it. You know when you hear it, you also turn it up. There’s no point in denying it.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/28_Dancing_Queen_final.mp3"/></speak>`,
    countdown: `fifty one to fifty one`,
    countdownDisplay: `51 to 51`,
    day: 28,
    year: [1976],
    genre: ``,
    significantHoomans: ["Vinny"],
    youtube: ["https://www.youtube.com/watch?v=xFrGuyw1V8s"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Dancing Queen",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/51-to-51/28_Dancing_Queen.jpg",
        textContent: {
          artist: "Artist: ABBA",
          countdown: "Day 28 (51 to 51)",
          primaryText:
            "How ABBA never made it into my countdown last year is beyond me. My entry regarding disco mega-hit We Are Family by Sister Sledge talked about that K-Tel record album that started it all for me, the one with all the hits of the day. One of those hits, among the sea of disco gems, was Dancing Queen. This song is so cheesy and so amazing, from the opening piano drag to the very end that has those Swedish voices just floating away into a disco netherverse. ABBA’s sound in general was so uniquely seventies but so brilliant for that decade, and even though it doesn’t really hold up, it seems that many have held onto the magic; from Priscilla, Queen of the Desert to Muriel’s Wedding to a tribute album by Erasure, ABBA is a force to be celebrated. Needless to say, Vinny and I LOVED Dancing Queen and all the gay-related jokes we’d make about each other and about it. You know when you hear it, you also turn it up. There’s no point in denying it.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["True"],
    artist: ["Spandau Ballet"],
    date: `November 24, 2016`,
    text: `<speak>Sixteen Candles is among my favorite films of all time, for many reasons. One of them is the music. It’s a splash of the best sound from an era of innocence, combining pop with synth and dance.<break time="150ms"/> But there’s always a stand-out song that, when you hear it, immediately makes you yearn, the way sophomore Samantha Baker did, for senior Jake Ryan as she watches him slow dance with his girlfriend Caroline. <break time="250ms"/> The velvet sound of lead singer Tony Hadley’s sincere vocals makes True, by Spandau Ballet, an all-time favorite. <break time="150ms"/> This song is played on the radio as often today as it was in 1984 when that classic John Hughes film popularized it. There’s not much more you can say about it: it’s just a great song that stands the test of time. It’s a great love ballad and an all-around easy listen on the ear. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/27_True_final.mp3"/></speak>`,
    countdown: `fifty one to fifty one`,
    countdownDisplay: `51 to 51`,
    day: 27,
    year: [1983],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=AR8D2yqgQ1U"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "True",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/51-to-51/27_Spandau Ballet.jpeg",
        textContent: {
          artist: "Artist: Spandau Ballet",
          countdown: "Day 27 (51 to 51)",
          primaryText:
            "Sixteen Candles is among my favorite films of all time, for many reasons. One of them is the music. It’s a splash of the best sound from an era of innocence, combining pop with synth and dance. But there’s always a stand-out song that, when you hear it, immediately makes you yearn, the way sophomore Samantha Baker did, for senior Jake Ryan as she watches him slow dance with his girlfriend Caroline. The velvet sound of lead singer Tony Hadley’s sincere vocals makes True, by Spandau Ballet, an all-time favorite.  This song is played on the radio as often today as it was in 1984 when that classic John Hughes film popularized it. There’s not much more you can say about it: it’s just a great song that stands the test of time. It’s a great love ballad and an all-around easy listen on the ear.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Time Clock Of The Heart"],
    artist: ["Culture Club"],
    date: `November 25, 2016`,
    text: `<speak>Chris and I recently scored last-second tickets to see Culture Club perform at the Westbury Music Fair (or whatever it’s called now), thanks to 2 amazing humans who thought we might enjoy the show. <break time="150ms"/> Well, let me say we DID indeed enjoy that concert, and it took me this many years to realize how much I loved, I mean love, so many songs by Boy George and the band. <break time="150ms"/> Their list of hits is undeniable, but today’s song, Time (Clock of the Heart), has got pretty much everything, including the eighties horns I love so much, that sweet and sultry voice of Boy, black girls singing back-up, and a catchy hook. <break time="150ms"/> To see and hear this song performed live, to perfection, was exactly the reminder I needed to nail it to my list of tops. <break time="150ms"/> The band sounded as good today as they did when they were recording hits in the early eighties. I encourage you to go see them, now, wherever they’re playing!<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/26_Time_Culture_Club_Final.mp3"/></speak>`,
    countdown: `fifty one to fifty one`,
    countdownDisplay: `51 to 51`,
    day: 26,
    year: [1982],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=8tI1_KlO6xI"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Time [Clock Of The Heart]",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/51-to-51/26_Time.jpeg",
        textContent: {
          artist: "Artist: Culture Club",
          countdown: "Day 26 (51 to 51)",
          primaryText:
            "Chris and I recently scored last-second tickets to see Culture Club perform at the Westbury Music Fair (or whatever it’s called now), thanks to 2 amazing humans who thought we might enjoy the show. Well, let me say we DID indeed enjoy that concert, and it took me this many years to realize how much I loved, *LOVE* so many songs by Boy George and the band. Their list of hits is undeniable, but today’s song, Time (Clock of the Heart), has got pretty much everything, including the eighties horns I love so much, that sweet and sultry voice of Boy, black girls singing back-up, and a catchy hook. To see and hear this song performed live, to perfection, was exactly the reminder I needed to nail it to my list of tops. The band sounded as good today as they did when they were recording hits in the early eighties. I encourage you to go see them, now, wherever they’re playing!",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Who Loves You"],
    artist: ["Frankie Valli And The Four Seasons"],
    date: `November 26, 2016`,
    text: `<speak>Who Loves You? <break time="150ms"/> Well, of course you know the answer to this question - I do! <break time="150ms"/>But hey, so did Frankie Valli and the Four Seasons, way back in the seventies when their signature sound was changing, and they needed to keep up with the times. <break time="150ms"/> Talk about a great song. This one has everything – harmonies, a disco beat, nostalgia, and a rocking riff halfway through the song. The question should actually be Who Doesn’t Love This Song?<break time="150ms"/>  Such good music; such a great listen. It’s sort of the predecessor to Valli’s hit lead song to the blockbuster film Grease, but for me, and maybe for you, way better.<break time="250ms"/> This is one of those songs I wish didn’t end 3 minutes in. It could go on for twice that long and I’d still rewind it to play it again. <break time="150ms"/> That’s who loves you. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/25_Who_Loves_You_Final.mp3"/></speak>`,
    countdown: `fifty one to fifty one`,
    countdownDisplay: `51 to 51`,
    day: 25,
    year: [1975],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=-KtYgOM62fk"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Who Loves You?",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/51-to-51/25_Who_Loves_You.jpeg",
        textContent: {
          artist: "Artist: Frankie Valli & The Four Seasons",
          countdown: "Day 25 (51 to 51)",
          primaryText:
            "Who Loves You? Well, of course you know the answer to this question - I do! But hey, so did Frankie Valli and the Four Seasons way back in the seventies when their signature sound was changing and they needed to keep up with the times.  Talk about a great song. This one has everything – harmonies, a disco beat, nostalgia, and a rocking riff halfway through the song. The question should actually be Who Doesn’t Love This Song? Such good music; such a great listen. It’s sort of the predecessor to Valli’s hit lead song to the blockbuster film Grease, but for me, and maybe for you, WAAAYYY better. This is one of those songs I wish didn’t end 3 minutes in. It could go on for twice that long and I’d still rewind it to play it again. That’s who loves you.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Star Wars Theme Cantina Band"],
    artist: ["Meco"],
    date: `November 27, 2016`,
    text: `<speak>This one might generate a lot of hate mail, but I don’t mind. Love it or not, it’s part of the Star Wars universe. When you can make the song from the local bar on Tatooine into a disco song, I have to ask you, What’s not to love? I give you the Star Wars Theme/ Cantina Band by disco musician and producer Meco. Play it really loud. Don’t ask questions. And do not ACT like this isn’t brilliantly amazing.  <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/24_Star_Wars_Final.mp3"/></speak>`,
    countdown: `fifty one to fifty one`,
    countdownDisplay: `51 to 51`,
    day: 24,
    year: [1977],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=WFcmuhTTqoY"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Star Wars Theme / Cantina Band",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/51-to-51/24_Star_Wars_Disco.jpg",
        textContent: {
          artist: "Artist: Meco",
          countdown: "Day 24 (51 to 51)",
          primaryText:
            "This one might generate a lot of hate mail, but I don’t mind. Love it or not, it’s part of the Star Wars universe. When you can make the song from the local bar on Tatooine into a disco song, I have to ask you, What’s not to love? I give you the Star Wars Theme/ Cantina Band by disco musician and producer Meco. Play it really loud. Don’t ask questions. And do not ACT like this isn’t brilliantly amazing.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Raspberry Beret"],
    artist: ["Prince"],
    date: `November 28, 2016`,
    text: `<speak>Few artists reach iconic status. Prince is one of them. He has a list of hits that is seemingly endless. <break time="150ms"/>Even before Purple Rain became the phenomenon it was, Prince was rattling off hit after hit, each with a blend of rock and funk, and even a little new wave. <break time="150ms"/>This guy was the definition of visionary. Anyone reading this likely has a Prince song out of which they could lip-sync the shit.<break time="150ms"/> Mine is Raspberry Beret. It was released post-Purple Rain, but was an instant goliath on M.T.V. <break time="150ms"/> The melodic, roller-coastery rhythm is so hypnotic that I fell in love with this song immediately. It’s a simple but happy retelling of a boy’s first time with a girl that knew her way around. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/23_Prince_Final.mp3"/></speak>`,
    countdown: `fifty one to fifty one`,
    countdownDisplay: `51 to 51`,
    day: 23,
    year: [1985],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=l7vRSu_wsNc"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Raspberry Beret",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/51-to-51/23_Prince_RaspBeret.jpeg",
        textContent: {
          artist: "Artist: Prince",
          countdown: "Day 23 (51 to 51)",
          primaryText:
            "Few artists reach iconic status. Prince is one of them. He has a list of hits that is seemingly endless. Even before Purple Rain became the phenomenon it was, Prince was rattling off hit after hit, each with a blend of rock and funk and even a little new wave. This guy was the definition of visionary. Anyone reading this likely has a Prince song out of which they could lip-sync the shit. Mine is Raspberry Beret. It was released post-Purple Rain but was an instant goliath on MTV. The melodic, roller-coastery rhythm is so hypnotic that I fell in love with this song immediately. It’s a simple but happy retelling of a boy’s first time with a girl that knew her way around. (I wouldn’t change a stroke. Cause baby I’m the most. For a girl as fine as she was then...) I just love the bridge to this song so much. ",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Mary’s Prayer"],
    artist: ["Danny Wilson"],
    date: `November 29, 2016`,
    text: `<speak>Another relatively obscure one for the list. This is Mary’s Prayer, by a Scottish band called Danny Wilson. <break time="150ms"/> In the early days of VH1, which at the time was showcasing more adult-contemporary types of hits, this song blasted onto the charts, and stuck in my head. <break time="150ms"/>It’s a combination of the lead vocalist’s sweet voice, and the pop-synth that was so prevalent in 1988. <break time="150ms"/> Naturally, years later the song took on a different meaning after my sister-in-law Mary suddenly passed away. <break time="150ms"/> In my brain I turned a song about a guy who lost his love and wanted her back at any cost into the sound of my own aching heart to have her back. <break time="150ms"/> Strangely, when I hear it today, I don’t have the same pangs I’d gotten in the late nineties. It’s just a pretty, repetitive song to me now. But I still like it enough to be counted on my countdown. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/22_Marys_Prayer_Final.mp3"/></speak>`,
    countdown: `fifty one to fifty one`,
    countdownDisplay: `51 to 51`,
    day: 22,
    year: [1987],
    genre: ``,
    significantHoomans: ["Mary"],
    youtube: ["https://www.youtube.com/watch?v=7hqgC3W9GUI"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Mary’s Prayer",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/51-to-51/22_Danny_Wilson.jpg",
        textContent: {
          artist: "Artist: Danny Wilson",
          countdown: "Day 22 (51 to 51)",
          primaryText:
            "Another relatively obscure one for the list, this is Mary’s Prayer by a Scottish band called Danny Wilson. In the early days of VH1, which at the time was showcasing more adult-contemporary types of hits, this song blasted onto the charts and stuck in my head. It’s a combination of the lead vocalist’s sweet voice and the pop-synth that was so prevalent in 1988.Naturally, years later the song took on a different meaning after my sister-in-law Mary suddenly passed away. In my brain I turned a song about a guy who lost his love and wanted her back at any cost into the sound of my own aching heart to have her back. Strangely, when I hear it today, I don’t have the same pangs I’d gotten in the late nineties. It’s just a pretty, repetitive song to me now. But I still like it enough to be counted on my countdown.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Dear God"],
    artist: ["XTC"],
    date: `November 30, 2016`,
    text: `<speak>I challenge you to listen to these lyrics. Listen to the whole thing. The music is melodic and beautiful, so that will help. Go ahead, I’ll wait. I just want you to REALLY listen. <break time="800ms"/> Every time there is an act of terror, across the globe or right here in our classrooms and night clubs, I wonder to myself, how can people still believe this mythology?<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/21_Dear_God_Final.mp3"/> Dear God is a perfect, poetic giant of a song that NEEDS to be heard.</speak>`,
    countdown: `fifty one to fifty one`,
    countdownDisplay: `51 to 51`,
    day: 21,
    year: [1986],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=p554R-Jq43A"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Dear God",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/51-to-51/21_XTC_-_Dear_God.jpeg",
        textContent: {
          artist: "Artist: Dear God",
          countdown: "Day 21 (51 to 51)",
          primaryText:
            "I challenge you to listen to these lyrics. Listen to the whole thing. The music is melodic and beautiful, so that will help. Go ahead, I’ll wait. I just want you to REALLY listen. Every time there is an act of terror, across the globe or right here in our classrooms and night clubs, I wonder to myself, how can people still believe this mythology? (“I won't believe in heaven and hell. No saints, no sinners, no devil as well. No pearly gates, no thorny crown. You're always letting us humans down. The wars you bring, the babes you drown. Those lost at sea and never found and it's the same the whole world 'round. The hurt I see helps to compound that Father, Son and Holy Ghost is just somebody's unholy hoax, and if you're up there you'd perceive that my heart's here upon my sleeve. If there's one thing I don't believe in...it's you.) Dear God is a perfect, poetic giant of a song that NEEDS to be heard.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Lotta Love"],
    artist: ["Nicolette Larson"],
    date: `December 1, 2016`,
    text: `<speak>Listen to the sweet voice of Nicolette Larson, and try to brush off the jazz flute in the bridge. <break time="200ms"/> This song, written by seventies mega-star Neil Young, is all about the saxophone and the lullaby vocals of Larson. It’s from a time era of innocence, when songs like this were all over the airwaves. (On this year’s countdown alone there are 16 songs from this era of soft rock.)<break time="200ms"/> Lotta Love is high on the list of favorites from 1977. It’s safely before the onset of punk and new wave, when A.M. Radio still reigned. <break time="150ms"/>I love the earthiness of this chick; it’s sad she didn’t have as huge a career as her contemporaries. But I could listen to this one over and over and that’s just fine by me.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/20_Lotta_Love_Final.mp3"/></speak>`,
    countdown: `fifty one to fifty one`,
    countdownDisplay: `51 to 51`,
    day: 20,
    year: [1978],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=80PTNnrwUO8"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Lotta Love",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/51-to-51/20_Lotta_Love.jpeg",
        textContent: {
          artist: "Artist: Nicolette Larson",
          countdown: "Day 20 (51 to 51)",
          primaryText:
            "Listen to the sweet voice of Nicolette Larson and try to brush off the jazz flute in the bridge. This song, written by seventies mega-star Neil Young, is all about the saxophone and the lullaby vocals of Larson. It’s from a time era of innocence when songs like this were all over the airwaves. (On this year’s countdown alone there are 16 songs from this era of soft rock.) Lotta Love is high on the list of favorites from 1977. It’s safely before the onset of punk and new wave, when AM Radio still reigned. I love the earthiness of this chick; it’s sad she didn’t have as huge a career as her contemporaries. But I could listen to this one over and over and that’s just fine by me.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Wishing On A Star"],
    artist: ["Rose Royce"],
    date: `December 2, 2016`,
    text: `<speak>When you hear the band name Rose Royce, most likely you’d only think of their mega-hit Car Wash. And you’d be correct. <break time="100ms"/> Except, they have another song that is so amazing it has been covered several times and you’ve likely heard it and maybe didn’t know it was them. Wishing On A Star, to me, is a transcendent song. <break time="100ms"/>You can hear it today and not really know when it was actually released. It could be from last year, next month, or 4 decades ago. Just try to get past her cosmic-swan costume and bedazzled macramé headdress in this video. <break time="100ms"/>Listen with your ears and not your eyes, and I think you’ll agree. A true ballad from start to finish, this one’s great for a slow dance, though its message isn’t necessarily that of togetherness in love; rather, it’s a song filled with the pangs of yearning for the one that got away. <break time="150ms"/>I love the sincerity in Rose Dickey’s voice. I could truly listen to it over and over, each time finding another nuance in those broken vocals.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/19_WIshing_On_A_Star_Final.mp3"/></speak>`,
    countdown: `fifty one to fifty one`,
    countdownDisplay: `51 to 51`,
    day: 19,
    year: [1977],
    genre: ``,
    significantHoomans: ["Adam"],
    youtube: ["https://www.youtube.com/watch?v=amfmivGnboU"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Wishing On A Star",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/51-to-51/19_Wishing_On_A_Star.jpg",
        textContent: {
          artist: "Artist: Rose Royce",
          countdown: "Day 19 (51 to 51)",
          primaryText:
            "When you hear the band name Rose Royce, most likely you’d only think of their mega-hit Car Wash. And you’d be correct. Except, they have another song that is so amazing it has been covered several times and you’ve likely heard it and maybe didn’t know it was them. Wishing On A Star, to me, is a transcendent song. You can hear it today and not really know when it was actually released. It could be from last year, next month, or 4 decades ago. Just try to get past her cosmic-swan costume and bedazzled macramé headdress in this video. Listen with your ears and not your eyes, and I think you’ll agree. A true ballad from start to finish, this one’s great for a slow dance, though its message isn’t necessarily that of togetherness in love; rather, it’s a song filled with the pangs of yearning for the one that got away. I love the sincerity in Rose Dickey’s voice. I could truly listen to it over and over, each time finding another nuance in those broken vocals.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Livin Thing"],
    artist: ["Electric Light Orchestra"],
    date: `December 3, 2016`,
    text: `<speak><audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/18_Livin_Thing_Final1.mp3"/>It never occurred to me, back when this song was popular on the radio in the late seventies, that it was a song about overcoming suicide. <break time="100ms"/> Livin’ Thing, is another in a long list of great songs, by a great band, from a great era of music. <break time="200ms"/>There are SO many layers to this song, from the synthesized undertones, to the scolding back-up singers (Don’t you do it, don’t you do it.) to the echoing shouts of lead singer Jeff Lynne. I like a lot of the music by E.L.O., some of which are tethered to Xanadu (obviously). <break time="190ms"/> but this song is a true stand out for me. I’m absorbed by the rhythmic melody of the cello, and the sweet soft vocal harmonies. <break time="150ms"/> Not to mention the urgency of the horns. <break time="100ms"/> And of course there’s the message: life is a terrible thing to lose. This is the kind of song that can make one rethink the downward spiral of drug addiction and giving in to depression, and in that way it has done its job. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/18_Livin_Thing_Final2.mp3"/></speak>`,
    countdown: `fifty one to fifty one`,
    countdownDisplay: `51 to 51`,
    day: 18,
    year: [1976],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=lvBOZCrJsAI"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Livin' Thing",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/51-to-51/18_Livin_Thing.jpeg",
        textContent: {
          artist: "Artist: Electric Light Orchestra",
          countdown: "Day 18 (51 to 51)",
          primaryText:
            "It never occurred to me, back when this song was popular on the radio in the late seventies, that it was a song about overcoming suicide. Livin’ Thing is another in a long list of great songs by a great band from a great era of music. There are SO many layers to this song, from the synthesized undertones to the scolding back-up singers (Don’t you do it, don’t you do it.) to the echoing shouts of lead singer Jeff Lynne. I like a lot of the music by ELO, some of which are tethered to Xanadu (obviously), but this song is a true stand out for me. I’m absorbed by the rhythmic melody of the cello and the sweet soft vocal harmonies, not to mention the urgency of the horns. And of course there’s the message: life is a terrible thing to lose. This is the kind of song that can make one rethink the downward spiral of drug addiction and giving in to depression, and in that way it has done its job.  ",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["I Love You"],
    artist: ["Climax Blues Band"],
    date: `December 4, 2016`,
    text: `<speak>Gratitude. This song is about being thankful, and expressing that gratitude with the three words every human wants to hear. I love you. <break time="150ms"/> I spoke about Roberta, when I wrote about Sara, by Fleetwood Mac, as being someone from whom I drew strength and confidence in a pivotal, impressionable time of early adulthood.<break time="100ms"/> When all I could think about myself was that I was a mistake of God. When she and I would sit in her basement, playing cards and daydreaming, we’d listen to soft rock radio and talk about each of the songs we’d hear. <break time="100ms"/> This song was one we couldn’t agree on; she found it to be way over-schmaltzy, and I heard it as a tribute to the appreciation I had no idea how to express. <break time="100ms"/> If not for her, I don’t know what kinds of stupid things I’d have done to escape the fear of my future reality.<break time="200ms"/> Granted, I Love You is a love song, written about a woman by a man, best utilized as perhaps a wedding song, a first dance. I hear the lyrics as magnified through my own lens: <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/17_I_Love_You_Final1.mp3"/> I wish I could find her and let her know how instrumental she was in saving my life. If not for Roberta Kannewischer, you might not be reading this daily music blog by Nicholas Marino. break time="300ms"/>Thirty-five years later, I hear this song and picture her face, and remember how she’d laugh at me for liking this song, and she’d tell me how she couldn’t stand the weepy guitar riffs. <break time="100ms"/> And I’d laugh back and say, Whatever you say, Birdie. <break time="100ms"/> Since then, I hear this song of gratitude and it works for so many people who have come into my life to help guide me and keep me grounded. Not an easy feat. A lot of you are here on Facebook and I hope you’re reading this. <break time="100ms"/> Some are not, and I hope they always know how grateful I am to them.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/17_I_Love_You_Final2.mp3"/></speak>`,
    countdown: `fifty one to fifty one`,
    countdownDisplay: `51 to 51`,
    day: 17,
    year: [1980],
    genre: ``,
    significantHoomans: ["Petey", "Roberta"],
    youtube: [],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "I Love You",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/51-to-51/17_I_Love_You.jpg",
        textContent: {
          artist: "Artist: Climax Blues Band",
          countdown: "Day 17 (51 to 51)",
          primaryText:
            "Gratitude. This song is about being thankful and expressing that gratitude with the three words every human wants to hear: I love you. I spoke about Roberta, when I wrote about Sara by Fleetwood Mac, as being someone from whom I drew strength and confidence in a pivotal, impressionable time of early adulthood when all I could think about myself was that I was a mistake of God. When she and I would sit in her basement playing cards and daydreaming, we’d listen to soft rock radio and talk about each of the songs we’d hear. This song was one we couldn’t agree on; she found it to be way over-schmaltzy, and I heard it as a tribute to the appreciation I had no idea how to express. If not for her, I don’t know what kinds of stupid things I’d have done to escape the fear of my future reality. Granted, I Love You is a love song written about a woman by a man, best utilized as perhaps a wedding song, a first dance. I hear the lyrics as magnified through my own lens: Thank you, babe, for being a friend and shinin' your light in my life… I wish I could find her and let her know how instrumental she was in saving my life. If not for Roberta Kannewischer, you might not be reading this daily music blog by Nicholas Marino. Thirty-five years later, I hear this song and picture her face and remember how she’d laugh at me for liking this song and she’d tell me how she couldn’t stand the weepy guitar riffs. And I’d laugh back and say, Whatever you say, Birdie. Since then I hear this song of gratitude and it works for so many people who have come into my life to help guide me and keep me grounded. Not an easy feat. A lot of you are here on Facebook and I hope you’re reading this. Some are not, and I hope they always know how grateful I am to them.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Everything She Wants"],
    artist: ["Wham"],
    date: `December 5, 2016`,
    text: `<speak> Did you really think this countdown wasn’t gonna have a song by George Michael?  Well, technically it’s by Wham!, but whatever. I bet you can’t tell me the name of the other guy. <break time="200ms"/> First, let’s talk about this video. <break time="150ms"/>Oh my gods. That gorgeous blonde mullet, bathed in glorious black and white eighties side lighting.<break time="100ms"/> George, all perfect with his just-large-enough hoop earrings, and vivid white teeth. <break time="100ms"/> What a vision he was, so dark and beautiful. I literally can’t. <break time="200ms"/> This song came out when I was in college, at the U of Scranton. I was still firmly in the closet, denying I liked music by anyone androgynous. George Michael wasn’t androgynous, but he did give off that gay vibe, and admitting I liked him, to me, meant outing myself. <break time="100ms"/> So I would play this song alone in my dorm room, hoping no one was around to judge and put the puzzle pieces together. And I’d hope the video would come on in the background so I could look at his face. Some may argue Everything She Wants isn’t the best song by Wham!, but I wholeheartedly disagree. Great lyrics, bouncy eighties synths, so much better than Wake Me Up. But really, it’s all about this video. <break time="750ms"/>  P.S. His name is Andrew Ridgeley. And how very dare you not know that! And his brown mullet and sad puppy eyes were almost as adorable as George’s.<break time="115ms"/> Almost. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/16_Wham!_Final.mp3"/></speak>`,
    countdown: `fifty one to fifty one`,
    countdownDisplay: `51 to 51`,
    day: 16,
    year: [1986],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=Yf_Lwe6p-Cg"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Everything She Wants",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/51-to-51/16_Wham.jpg",
        textContent: {
          artist: "Artist: Wham!",
          countdown: "Day 16 (51 to 51)",
          primaryText:
            "Did you really think this countdown wasn’t gonna have a song by George Michael? Well, technically it’s by Wham!, but whatever. I bet you can’t tell me the name of the other guy. First, let’s talk about this video. Oh my gods, that gorgeous blonde mullet bathed in glorious black and white eighties side lighting, George, all perfect with his just-large-enough hoop earrings and vivid white teeth. What a vision he was, so dark and beautiful. I literally can’t. This song came out when I was in college at the U of Scranton. I was still firmly in the closet, denying I liked music by anyone androgynous. George Michael wasn’t androgynous but he did give off that gay vibe, and admitting I liked him, to me, meant outing myself. So I would play this song alone in my dorm room, hoping no one was around to judge and put the puzzle pieces together. And I’d hope the video would come on in the background so I could look at his face. Some may argue Everything She Wants isn’t the best song by Wham!, but I wholeheartedly disagree. Great lyrics, bouncy eighties synths, so much better than Wake Me Up. But really, it’s all about this video. P.S. His name is Andrew Ridgeley. And how very dare you not know that! And his brown mullet and sad puppy eyes were almost as adorable as George’s. Almost.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["The Ghost In You"],
    artist: ["Psychedelic Furs"],
    date: `December 6, 2016`,
    text: `<speak>The Psychedelic Furs. Gods among men in the new wave record books, belted out some of the most memorable songs of the eighties. <break time="150ms"/> But for me, their stand out song is The Ghost In You. <break time="100ms"/> A sweetly haunting melody, about hanging on to the memory of that one who got away with your heart. <break time="150ms"/> When I think about new wave, I tend to recollect the more upbeat, harder stuff by Depeche Mode and New Order. But this song by the Psych Furs really defines the growth of new wave synth music, as a staple into the mainstream of American pop culture.  <break time="150ms"/>Give it a listen: Richard Butler’s unique voice sounds familiar and exotic all at once, lulling you into the mood with him, celebrating rather than mourning that one that got away.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/15_The_Ghost_In_You_Final.mp3"/></speak>`,
    countdown: `fifty one to fifty one`,
    countdownDisplay: `51 to 51`,
    day: 15,
    year: [1984],
    genre: ``,
    significantHoomans: ["Adam"],
    youtube: ["https://www.youtube.com/watch?v=T87u5yuUVi8"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "The Ghost In You",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/51-to-51/15_Ghost_In_You.jpeg",
        textContent: {
          artist: "Artist: Psychedelic Furs",
          countdown: "Day 15 (51 to 51)",
          primaryText:
            "The Psychedelic Furs, gods among men in the new wave record books, belted out some of the most memorable songs of the eighties, but for me their stand out song is The Ghost In You. A sweetly haunting melody about hanging on to the memory of that one who got away with your heart. When I think about new wave, I tend to recollect the more upbeat, harder stuff by Depeche Mode and New Order, but this song by the Psych Furs really defines the growth of new wave synth music as a staple into the mainstream of American pop culture. Give it a listen: Richard Butler’s unique voice sounds familiar and exotic all at once, lulling you into the mood with him, celebrating rather than mourning that one that got away.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Breaking Us In Two"],
    artist: ["Joe Jackson"],
    date: `December 7, 2016`,
    text: `<speak>Joe Jackson is, in my opinion, one of the most underrated musicians of our time. <break time="150ms"/> Genius song writing, and profoundly memorable lyrics. <break time="150ms"/> The Billy Joel of Britain, his songs are catchy, fast, and smart. His piano lulls you into the moment. His sweet, pointed voice drums against your heart. <break time="350ms"/> Breaking Us In Two, is a lovely ballad about just trying to make it work, without the drama that always seems to interfere. <break time="150ms"/> It reminds me of a relationship I’d had with someone who is still special and dear to me, in the consideration of almost never agreeing, but always loving. <break time="150ms"/> Always something breaking us in two. <break time="150ms"/> No need to psychoanalyze that relationship, other than to say that when I hear this song, I think of how difficult the fight always seemed to be, just to stay on track. <break time="150ms"/> Maybe that’s how regular relationships work, but I am not a fighter, never was. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/14_Breaking_Us_In_Two_Final.mp3"/></speak>`,
    countdown: `fifty one to fifty one`,
    countdownDisplay: `51 to 51`,
    day: 14,
    year: [1982],
    genre: ``,
    significantHoomans: ["Frank"],
    youtube: ["https://www.youtube.com/watch?v=n7IGRNWVQkc"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Breaking Us In Two",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/51-to-51/14_Breaking_Us_In_Two.jpg",
        textContent: {
          artist: "Artist: Joe Jackson",
          countdown: "Day 14 (51 to 51)",
          primaryText:
            "Joe Jackson is, in my opinion, one of the most underrated musicians of our time. Genius song writing, profoundly memorable lyrics. The Billy Joel of Britain, his songs are catchy and fast and smart. His piano lulls you into the moment. His sweet, pointed voice drums against your heart. Breaking Us In Two is a lovely ballad about just trying to make it work without the drama that always seems to interfere. It reminds me of a relationship I’d had with someone who is still special and dear to me, in the consideration of almost never agreeing but always loving. Always something breaking us in two. No need to psychoanalyze that relationship other than to say that when I hear this song, I think of how difficult the fight always seemed to be just to stay on track. Maybe that’s how regular relationships work, but I am not a fighter, never was.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Who’s Crying Now"],
    artist: ["Journey"],
    date: `December 8, 2016`,
    text: `<speak>There is so much I love about, Who’s Crying Now, by eighties super-group Journey. <break time="150ms"/> First, and obviously foremost, the silken delight that is the voice of Steve Perry. <break time="150ms"/> In my opinion, one of the best male voices ever recorded. Perfect as the front man of a rock band, perfect as a solo balladeer. <break time="150ms"/> I also love the piano, mixed with the bass guitar, making a sound so unique and enthralling to me. Best part of the song though, is the ending jam-out. <break time="150ms"/> If it could go on eternally, I’d be okay with listening to it. 3 minutes, 28 seconds in, it’s just a beautiful guitar and drum and you can close your eyes and be transported to outer space, man. <break time="150ms"/> Much like the very end of Hotel California, I literally crank my volume to the highest it goes at this point of the song and just swoon. Such a great song, transcendent of time. And space. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/13_Journey_Final2.mp3"/></speak>`,
    countdown: `fifty one to fifty one`,
    countdownDisplay: `51 to 51`,
    day: 13,
    year: [1981],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=9meo3vazXcw"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Who’s Crying Now",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/51-to-51/13_Journey.jpg",
        textContent: {
          artist: "Artist: Journey",
          countdown: "Day 13 (51 to 51)",
          primaryText:
            "There is so much I love about Who’s Crying Now? by eighties super-group Journey. First, and obviously foremost, the silken delight that is the voice of Steve Perry. In my opinion, one of the best male voices ever recorded; perfect as the front man of a rock band, perfect as a solo balladeer. I also love the piano mixed with the bass guitar, making a sound so unique and enthralling to me. Best part of the song, though, is the ending jam-out. If it could go on eternally, I’d be okay with listening to it. 3 minutes, 28 seconds in, it’s just a beautiful guitar and drum and you can close your eyes and be transported to outer space, man. Much like the very end of Hotel California, I literally crank my volume to the highest it goes at this point of the song and just swoon. Such a great song, transcendent of time. And space.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Come To Me"],
    artist: ["France Joli"],
    date: `December 9, 2016`,
    text: `<speak><audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/12_Come_To_Me_Final1.mp3"/>This is the disco song to which I alluded in my blog for song 47, this giant from France Joli. It was my connection to back home, the song my childhood friend Jan loved, and whenever I heard it on K.T.U., it helped me feel like I was still a part of that old life. <break time="150ms"/> Amidst that late seventies – early eighties, disco is dead, nonsense, France Joli’s sexy anthem about being there for her friend helped me know dance music, no matter what it’s called, wasn’t going anywhere. <break time="150ms"/> When I hear of someone who also loves this song, I know I will immediately love them. Just ask my sister-in-law Margie!<break time="250ms"/> But the one person who I know will always perk up when she hears this is my Jan. We have our amazing shared memories of being teenagers in her house in Lynbrook, when I would come back from the Poconos for the weekend. <break time="150ms"/> We would groove together and just laugh, and feel the love of friendship. <break time="150ms"/> That’s a memory that I hope never fades away, for either of us.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/12_Come_To_Me_Final2.mp3"/></speak>`,
    countdown: `fifty one to fifty one`,
    countdownDisplay: `51 to 51`,
    day: 12,
    year: [1979],
    genre: ``,
    significantHoomans: ["Jan", "Margie"],
    youtube: ["https://www.youtube.com/watch?v=s0p6KbO5kaU"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Come To Me",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/51-to-51/12_Come_To_Me.jpg",
        textContent: {
          artist: "Artist: France Joli",
          countdown: "Day 12 (51 to 51)",
          primaryText:
            "This is the disco song to which I alluded in my blog for song 47, this giant from France Joli. It was my connection to back home, the song my childhood friend Jan loved and, whenever I heard it on KTU, it helped me feel like I was still a part of that old life. Amidst that late seventies – early eighties (disco is dead) nonsense, France Joli’s sexy anthem about being there for her friend helped me know dance music, no matter what it’s called, wasn’t going anywhere. When I hear of someone who also loves this song, I know I will immediately love them. Just ask my sister-in-law Margie! But the one person who I know will always perk up when she hears this is my Jan. We have our amazing shared memories of being teenagers in her house in Lynbrook when I would come back from the Poconos for the weekend. We would groove together and just laugh and feel the love of friendship. That’s a memory that I hope never fades away, for either of us.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["I’ll Stand By You"],
    artist: ["The Pretenders"],
    date: `December 10, 2016`,
    text: `<speak>In 1994, The Pretenders released this ballad about loyalty against all odds. <break time="150ms"/> Until this point, I don’t think I’d ever heard anything but progressive rock tunes by this band, all of which were always pretty good, but never a top of any of my lists. <break time="150ms"/> And then came I’ll Stand By You. <break time="250ms"/> Chrissie Hynde’s voice is so earnest. You know she means every single word. She says all the things we say to the ones we love, who are battling their demons. <break time="150ms"/> I’d venture a guess that this song is at the top of many people’s list of best songs, as most people can really relate to having that person in their lives who is their rock, their footing. <break time="150ms"/> I am lucky, as I can list several names of people who I KNOW would always have my back, would ground me when I need it, would never desert me even at the harshest of times. <break time="150ms"/> This song is a dedication to those people, because the same can be said from me to them.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/11_Stand_By_You_Final.mp3"/></speak>`,
    countdown: `fifty one to fifty one`,
    countdownDisplay: `51 to 51`,
    day: 11,
    year: [1994],
    genre: ``,
    significantHoomans: ["Petey"],
    youtube: ["https://www.youtube.com/watch?v=bLpmj059JFA"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "I’ll Stand By You",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/51-to-51/11_Stand_By_You.jpeg",
        textContent: {
          artist: "Artist: The Pretenders",
          countdown: "Day 11 (51 to 51)",
          primaryText:
            "In 1994, The Pretenders released this ballad about loyalty against all odds. Until this point I don’t think I’d ever heard anything but progressive rock tunes by this band, all of which were always pretty good but never top of any of my lists. And then came I’ll Stand By You. Chrissie Hynde’s voice is so earnest. You know she means every single word. She says all the things we say to the ones we love who are battling their demons. I’d venture a guess that this song is at the top of many people’s list of best songs, as most people can really relate to having that person in their lives who is their rock, their footing. I am lucky, as I can list several names of people who I KNOW would always have my back, would ground me when I need it, would never desert me even at the harshest of times. This song is a dedication to those people, because the same can be said from me to them.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Even The Nights Are Better"],
    artist: ["Air Supply"],
    date: `December 11, 2016`,
    text: `<speak>Somehow, against the adversity of seemingly EVERYONE thinking their music is schmaltzy and gay, Air Supply still managed to carve out a pretty lengthy time in the early eighties as their own, with at least six chart-topping hits. <break time="150ms"/> I am not afraid to admit I loved Air Supply. I had their greatest hits C.D. when CDs were still a thing.<break time="150ms"/> I had Lost In Love, on a ‘45. I would jam the fuck out to Making Love Out Of Nothing At All, while I was at college in that period of inner struggle. <break time="150ms"/> But none of their songs resounds the way Even The Nights Are Better, to me. <break time="250ms"/>I pretty much love everything about this song. I think I swoon more than normal when it reaches the guitar bridge, and then Russell’s sweet high voice breaks back in at a chord change. <break time="150ms"/>This is another song I wish went on way longer than a mere 4 minutes. In fact, as I’m writing this, I’m listening to it on a muthafuckin’ loop!<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/10_Even_The_Nights_Are_Better_Final.mp3"/></speak>`,
    countdown: `fifty one to fifty one`,
    countdownDisplay: `51 to 51`,
    day: 10,
    year: [1982],
    genre: ``,
    significantHoomans: ["Petey"],
    youtube: ["https://www.youtube.com/watch?v=BRx58DgOxeg"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Even The Nights Are Better",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/51-to-51/10_Even_the_Nights_Are_Better.jpeg",
        textContent: {
          artist: "Artist: Air Supply",
          countdown: "Day 10 (51 to 51)",
          primaryText:
            "Somehow, against the adversity of seemingly EVERYONE thinking their music is schmaltzy and gay, Air Supply still managed to carve out a pretty lengthy time in the early eighties as their own with at least six chart-topping hits. I am not afraid to admit I loved Air Supply. I had their greatest hits CD when CDs were still a thing. I had Lost In Love on a ‘45. I would jam the fuck out to Making Love Out Of Nothing At All while I was at college in that period of inner struggle. But none of their songs resounds the way Even The Nights Are Better, to me. I pretty much love everything about this song. I think I swoon more than normal when it reaches the guitar bridge, and then Russell’s sweet high voice breaks back in at a chord change. This is another song I wish went on way longer than a mere 4 minutes. In fact, as I’m writing this, I’m listening to it on a muthafuckin’",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Magic Man", "Crazy On You"],
    artist: ["Heart", "Heart"],
    date: `December 12, 2016`,
    text: `<speak>I could not decide between Magic Man, and Crazy On You, when it came time to narrow down my favorite song by seventies and eighties mega-band Heart. <break time="150ms"/> The weird thing is, amidst their eighties reinvention, among their string of amazing hits like ,What About Love? and Alone, I finally discovered the literal magic in their music, from the seventies. <break time="150ms"/> Obviously, I was aware of their existence when I was a kid, but at that time of my life I was a burgeoning disco kid, and frankly my brothers didn’t listen to Heart, so we didn’t really hear it in the house at the time of release. <break time="150ms"/> You might agree that Ann Wilson’s voice is, hands-down, one of the most amazing rock voices of our time. <break time="150ms"/> There is literally nothing she cannot sing.<break time="150ms"/>  Heart paved the way for rock chicks like Pat Benatar and Lita Ford. I even think that Heart’s consistent radio presence into the nineties made way for the careers of Alanis Morrissette, Joan Osborne, Sheryl Crow, and so many others. Maybe that’s just my opinion, but so what? For these two songs in particular, it’s ALSO about the mystical sound of the guitars, paired with Ann’s emotion-soaked pipes, and Nancy’s beautiful harmonies. <break time="150ms"/> I could listen to Magic Man literally for days. I know the same can be said for pretty much every song in this countdown from this point on, but still. <break time="150ms"/> Now, shut up and listen to both these amazing songs from the early part of Ann & Nancy Wilson’s career, or I swear I will go crazy on you. And not in the good way.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/9_Heart_Final.mp3"/></speak>`,
    countdown: `fifty one to fifty one`,
    countdownDisplay: `51 to 51`,
    day: 9,
    year: [1976, 1976],
    genre: ``,
    significantHoomans: [],
    youtube: [
      "https://www.youtube.com/watch?v=3vlAdMeZSfw",
      "https://www.youtube.com/watch?v=yZjEC4WhCvg",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Magic Man / Crazy On You",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/51-to-51/9_Heart.jpeg",
        textContent: {
          artist: "Artist: Heart",
          countdown: "Day 9 (51 to 51)",
          primaryText:
            "I could not decide between Magic Man and Crazy On You when it came time to narrow down my favorite song by seventies and eighties mega-band Heart. The weird thing is, amidst their eighties reinvention, among their string of amazing hits like What About Love? and Alone, I finally discovered the literal magic in their music from the seventies. Obviously, I was aware of their existence when I was a kid, but at that time of my life I was a burgeoning disco kid, and frankly my brothers didn’t listen to Heart, so we didn’t really hear it in the house at the time of release. You might agree that Ann Wilson’s voice is, hands-down, one of the most amazing rock voices of our time. There is literally nothing she cannot sing. Heart paved the way for rock chicks like Pat Benatar and Lita Ford. I even think that Heart’s consistent radio presence into the nineties made way for the careers of Alanis Morrissette, Joan Osborne, Sheryl Crow, and so many others. Maybe that’s just my opinion, but so what? For these two songs in particular, it’s ALSO about the mystical sound of the guitars paired with Ann’s emotion-soaked pipes and Nancy’s beautiful harmonies. I could listen to Magic Man literally for days. I know the same can be said for pretty much every song in this countdown from this point on, but still. Now, shut up and listen to both these amazing songs from the early part of Ann & Nancy Wilson’s career, or I swear I will go crazy on you. And not in the good way.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Jenny"],
    artist: ["Tommy Tutone"],
    date: `December 13, 2016`,
    text: `<speak>I can’t believe this one didn’t make my list of 50 to 50 last year, considering it is my favorite song, aside from Rock Lobster, to perform at karaoke, and has been since before I even knew that karaoke was a thing. <break time="150ms"/> It’s probably one of the most notorious one hit wonders of our generation, with the catchiest hook, and a phone number that anyone who wasn’t born a millennial knows. <break time="150ms"/> And face it, we’ve ALL dialed 867-5309, and asked for Jenny at least once in our lifetime. I think what I love most is, strangely, the bar-room feel of the music. <break time="150ms"/> The fact that it is an anthem to late nights in the club, searching for that girl, or guy, that you know will never be yours. <break time="150ms"/> But the dreamer knows he’s gotten his in, by coming upon Jenny’s phone number. Please enjoy 867-5309/Jenny, and if you feel like it, maybe grab a hairbrush and karaoke the shit outta it! <break time="150ms"/> I know I’m about to. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/8_Jenny_Final.mp3"/></speak>`,
    countdown: `fifty one to fifty one`,
    countdownDisplay: `51 to 51`,
    day: 8,
    year: [1981],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=6WTdTwcmxyo"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "867-5309/Jenny",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/51-to-51/8_Jenny.jpg",
        textContent: {
          artist: "Artist: Tommy Tutone",
          countdown: "Day 8 (51 to 51)",
          primaryText:
            "I can’t believe this one didn’t make my list of 50 to 50 last year, considering it is my favorite song, aside from Rock Lobster, to perform at karaoke, and has been since before I even knew that karaoke was a thing. It’s probably one of the most notorious one hit wonders of our generation, with the catchiest hook and a phone number that anyone who wasn’t born a millennial knows. And face it, we’ve ALL dialed 867-5309 and asked for Jenny at least once in our lifetime. I think what I love most is, strangely, the bar-room feel of the music, the fact that it is an anthem to late nights in the club searching for that girl, or guy, that you know will never be yours. But the dreamer knows he’s gotten his ‘in’ by coming upon Jenny’s phone number. Please enjoy 867-5309/Jenny, and if you feel like it, maybe grab a hairbrush and karaoke the shit outta it! I know I’m about to.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["A Song For You"],
    artist: ["The Carpenters"],
    date: `December 14, 2016`,
    text: `<speak>I confess to not knowing the existence of this song, at least not this version by the Carpenters, until early in this new millennium. <break time="150ms"/> Crazy, right? Especially once hearing the way Karen Carpenter sings, so beautifully and so earnestly, the lyrics written by Leon Russell. <break time="150ms"/> Part of the reason I love Karen Carpenter is the obvious connection of her voice to my childhood, but to find a song by an artist so long after said artist’s death, and to be moved so profoundly by that song, speaks deeply to me. <break time="150ms"/> There is subtle sadness in a song that is a true love song sung by a girl who, in her own life, was tortured, constantly battling self-loathing. <break time="150ms"/> Talk about bittersweet. <break time="250ms"/> A Song For You, has been recorded by many different diverse artists, notably by another tragic artist from the seventies named Donnie Hathaway, and also by American Idol runner-up Elliott Yamin, whose unbelievable performance was what struck me to research the song, and led me to this version by the Carpenters. <break time="150ms"/> And for me, this one is, and should be, the staple. When something so beautiful is done in such an understated way, it needs to be revered. I hope you feel the same way. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/7_Carpenters_Final.mp3"/></speak>`,
    countdown: `fifty one to fifty one`,
    countdownDisplay: `51 to 51`,
    day: 7,
    year: [1972],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=_PMgmgDq2Fo"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "A Song For You",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/51-to-51/7_Song_For_You.jpg",
        textContent: {
          artist: "Artist: The Carpenters",
          countdown: "Day 7 (51 to 51)",
          primaryText:
            "I confess to not knowing the existence of this song, at least not this version by the Carpenters, until early in this new millennium. Crazy, right? Especially once hearing the way Karen Carpenter sings, so beautifully and so earnestly, the lyrics written by Leon Russell. Part of the reason I love Karen Carpenter is the obvious connection of her voice to my childhood, but to find a song by an artist so long after said artist’s death, and to be moved so profoundly by that song, speaks deeply to me. There is subtle sadness in a song that is a true love song sung by a girl who, in her own life, was tortured, constantly battling self-loathing. Talk about bittersweet. A Song For You, has been recorded by many different diverse artists, notably by another tragic artist from the seventies named Donnie Hathaway, and also by American Idol runner-up Elliott Yamin, whose unbelievable performance was what struck me to research the song, and led me to this version by the Carpenters. And for me, this one is, and should be, the staple. When something so beautiful is done in such an understated way, it needs to be revered. I hope you feel the same way.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Tell It To My Heart"],
    artist: ["Taylor Dayne"],
    date: `December 15, 2016`,
    text: `<speak>I actually remember exactly where I was the first time I heard Tell It To My Heart, by Long Island’s own Leslie Wunderman, aka Taylor Dayne. <break time="150ms"/>  It was morning; I was getting ready for work at the Pennysaver in my basement apartment at Aurora’s, listening to Z 100. <break time="150ms"/>  This bangin’ song came on, and I was mesmerized by the voice of the singer. <break time="150ms"/> Days went by, the song grew in popularity and air play, and before we knew it, Taylor Dayne was everywhere with that giant mane of hair and red lips for days. <break time="150ms"/> But that voice! Holy gods, that voice! <break time="150ms"/>  And such an amazing debut song, an upbeat anthem to dance to, and really feel in your groove-bone. <break time="150ms"/> Don’t act like you don’t have a groove-bone. <break time="150ms"/>  When I hear this song, that I love, I am transported back to those glory days at the Pennysaver, where I met so many of my life-long friends, where I found the courage to come out, where I began the march from childhood to manhood. <break time="150ms"/> In a way, part of why I love this song and most of her songs that followed, is because of those people. <break time="150ms"/> Certain things, and certain people, stay with you always. I am thankful for that, and I am happy to be reminded of them all whenever I hear Taylor Dayne belt out her greatest song. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/6_Tell_It_To_My_Heart_Final.mp3"/></speak>`,
    countdown: `fifty one to fifty one`,
    countdownDisplay: `51 to 51`,
    day: 6,
    year: [1988],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=Ud6sU3AclT4"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Tell It To My Heart",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/51-to-51/6_Tell_It_To_My_Heart.jpeg",
        textContent: {
          artist: "Artist: Taylor Dayne",
          countdown: "Day 6 (51 to 51)",
          primaryText:
            "I actually remember exactly where I was the first time I heard Tell It To My Heart by Long Island’s own Leslie Wunderman, aka Taylor Dayne. It was morning; I was getting ready for work at the Pennysaver in my basement apartment at Aurora’s, listening to Z100. This bangin’ song came on and I was mesmerized by the voice of the singer. Days went by, the song grew in popularity and air play, and before we knew it Taylor Dayne was everywhere with that giant mane of hair and red lips for days. But that voice! Holy gods, that voice! And such an amazing debut song, an upbeat anthem to dance to and really feel in your groove-bone. Don’t act like you don’t have a groove-bone. When I hear this song, that I love, I am transported back to those glory days at the Pennysaver where I met so many of my life-long friends, where I found the courage to come out, where I began the march from childhood to manhood. In a way, part of why I love this song and most of her songs that followed is because of those people. Certain things, and certain people, stay with you always. I am thankful for that, and I am happy to be reminded of them all whenever I hear Taylor Dayne belt out her greatest song.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Hold On"],
    artist: ["Wilson Phillips"],
    date: `December 16, 2016`,
    text: `<speak><break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/5_Hold_ON_Final.mp3"/>At a time of personal freedom in my life, Girl-group Wilson Phillips released their mammoth debut hit single, and perhaps the song of the year for 1990, Hold On. <break time="250ms"/>Like many songs from that era, it might not necessarily hold up, and is sometimes the subject of ridicule (See the urban dictionary definition of, rick rolled, which I still don’t understand because I LOVE Rick Astley, and that crazy-amazing song people laugh at). But for me,  this song stands the test of time, reminding me that I have it all inside me to be strong and stay on course, in a life that has no road map. There’s a feel to this song that is hard to describe. It could be among a number of things, including the pangs of nostalgia. Either way, this song brings me joy and confidence. I was so happy that it was included in the movie Bridesmaids, because the girls of Wilson Phillips were included in the joke, making it not a joke at all but a lovely memory from, ‘back in the day’. <break time="150ms"/>I guess that’s the best way to describe this song.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/5_Hold_ON_Final2.mp3"/> </speak>`,
    countdown: `fifty one to fifty one`,
    countdownDisplay: `51 to 51`,
    day: 5,
    year: [1990],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=uIbXvaE39wM"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Hold On",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/51-to-51/5_Hold_On.jpeg",
        textContent: {
          artist: "Artist: Wilson Phillips",
          countdown: "Day 5 (51 to 51)",
          primaryText:
            "At a time of personal freedom in my life, Girl-group Wilson Phillips released their mammoth debut hit single, and perhaps the song of the year for 1990, Hold On. Like many songs from that era, it might not necessarily hold up and is sometimes the subject of ridicule (See the urban dictionary definition of 'rick rolled', which I still don’t understand because I LOVE Rick Astley and that crazy-amazing song people laugh at), but for me this song stands the test of time, reminding me that I have it all inside me to be strong and stay on course in a life that has no road map. There’s a feel to this song that is hard to describe. It could be among a number of things, including the pangs of nostalgia. Either way, this song brings me joy and confidence. I was so happy that it was included in the movie Bridesmaids, because the girls of Wilson Phillips were included in the joke, making it not a joke at all but a lovely memory from ‘back in the day’. I guess that’s the best way to describe this song.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["No More Tears Enough Is Enough"],
    artist: ["Barbra Streisand And Donna Summer"],
    date: `December 17, 2016`,
    text: `<speak> There is no video to go with this AMAZING GODDAMN SONG, as much as I wish there were. <break time="150ms"/> Or, at least if one exists, I could not find it on the interwebs. The year was 1979. Donna Summer was the reigning Queen of Disco. Barbra Streisand was still one of the top recording artists of our time. And then the world exploded, when they released one of the most amazing duets known to mankind. <break time="150ms"/>It’s not so much about the song itself, and certainly not the lyrics (for me, anyway), as it is about the vibe of the song. <break time="150ms"/> The baby gay that I was at age 13 and a half LOVED this song, and played the record until there were permanent dents in the vinyl. <break time="150ms"/> I mean, I would close the door to my brother’s bedroom (the only room in the house that had a working record player) and BLAST the shit out of this song, singing as loudly and brazenly as I could. I even heard Mr. Lombardi next door yell from his porch, enough is enough already, Nicky! <break time="150ms"/> Well, the big fat 51-year-old gay that I am now LOVES this song still, and is always reminded of the simpler times when I could hide myself away, and lose myself in the music. <break time="150ms"/> It is perfection from start to finish. Even the record sleeve photo is sheer perfection. Let’s just say, I literally CAN’T with this song.<break time="150ms"/> Please don’t resist the urge to enjoy. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/4_Enough_Is_Enough_Final.mp3"/></speak>`,
    countdown: `fifty one to fifty one`,
    countdownDisplay: `51 to 51`,
    day: 4,
    year: [1979],
    genre: ``,
    significantHoomans: ["Mr. Lombardi"],
    youtube: ["https://www.youtube.com/watch?v=QsY066wa08E"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "No More Tears [Enough Is Enough]",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/51-to-51/4_Enough_Is_Enough.jpeg",
        textContent: {
          artist: "Artist: Barbra Streisand & Donna Summer",
          countdown: "Day 4 (51 to 51)",
          primaryText:
            "There is no video to go with this AMAZING GODDAMN SONG, as much as I wish there were. Or, at least if one exists, I could not find it on the interwebs. The year was 1979. Donna Summer was the reigning Queen of Disco. Barbra Streisand was still one of the top recording artists of our time. And then the world exploded when they released one of the most amazing duets known to mankind. It’s not so much about the song itself, and certainly not the lyrics (for me, anyway), as it is about the vibe of the song. The baby gay that I was at age 13 ½ LOVED this song, played the record until there were permanent dents in the vinyl. I mean, I would close the door to my brother’s bedroom (the only room in the house that had a working record player) and BLAST the shit out of this song, singing as loudly and brazenly as I could. I even heard Mr. Lombardi next door yell from his porch, 'enough is enough already, Nicky!' Well, the big fat 51-year-old gay that I am now LOVES this song still and is always reminded of the simpler times when I could hide myself away and lose myself in the music. It is perfection from start to finish. Even the record sleeve photo (pictured above) is sheer perfection. Let’s just say, I literally CAN’T with this song. Please don’t resist the urge to enjoy.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["You Are The Sunshine Of My Life"],
    artist: ["Stevie Wonder"],
    date: `December 18, 2016`,
    text: `<speak>How do you follow up two of the most amazing talents of our time? Probably with one of the many brilliant songs by the timeless Stevie Wonder. <break time="150ms"/> We all know his hit list. We all have a favorite or two. Mine is from the wonder years of my life, back in 1973, when the world was huge and the park across the street was my own playground. <break time="150ms"/>Talk about blissful ignorance!<break time="150ms"/> You Are The Sunshine Of My Life!<break time="150ms"/> It’s a pure love song, with a rumba rhythm and harmonies for days. It’s another of my favorite karaoke hits (as if I have even a fraction of the capacity to sing it) and it will always tether me to those golden childhood moments I hope to never forget. Memories of my Cheri Amour, my beautiful sister Rosemarie, my childhood friends Linda and Greg, our house on Wright Avenue, my mom’s A.M. Radio in the pantry. <break time="250ms"/> All the colors of joy. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/3_Stevie_Wonder_Final.mp3"/></speak>`,
    countdown: `fifty one to fifty one`,
    countdownDisplay: `51 to 51`,
    day: 3,
    year: [1972],
    genre: ``,
    significantHoomans: ["Cheri Amour", "Rosemarie", "Linda", "Greg"],
    youtube: ["https://www.youtube.com/watch?v=3wZ_b_uUAdQ"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "You Are The Sunshine Of My Life",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/51-to-51/3_Stevie_Wonder.jpeg",
        textContent: {
          artist: "Artist: Stevie Wonder",
          countdown: "Day 3 (51 to 51)",
          primaryText:
            "How do you follow up two of the most amazing talents of our time? Probably with one of the many brilliant songs by the timeless Stevie Wonder. We all know his hit list. We all have a favorite or two. Mine is from the wonder years of my life, back in 1973 when the world was huge and the park across the street was my own playground. Talk about blissful ignorance! You Are The Sunshine Of My Life! It’s a pure love song with a rumba rhythm and harmonies for days. It’s another of my favorite karaoke hits (as if I have even a fraction of the capacity to sing it) and it will always tether me to those golden childhood moments I hope to never forget. Memories of my Cheri Amour, my beautiful sister Rosemarie, my childhood friends Linda and Greg, our house on Wright Avenue, my mom’s AM Radio in the pantry. All the colors of joy.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["And I Love Her", "In My Life"],
    artist: ["The Beatles"],
    date: `December 19, 2016`,
    text: `<speak>And then there’s the Beatles. <break time="250ms"/>Last year they made my list with Let It Be. This year, I strategically chose two Beatles’ ballads that remind me of my two angels in the cover photo of my Facebook page. <break time="150ms"/> First is, And I Love Her. <break time="190ms"/> A ballad from before I was even born, which was the wedding song of Rosemarie’s, when she married Bob in 1974. Every time I hear it, I sway and think of her. <break time="150ms"/> I remember all the things, from being a bow-tied kindergartner, who hung on her every word and looked at her with such awe and reverence, to power-mulleted mustachio, dedicating this song to her at karaoke in 1992 (which was recorded and saved on a VHS tape that my mom used to LOVE to play. <break time="150ms"/> I wonder where that ended up?). <break time="250ms"/> No matter where I am when I hear it, I can close my eyes and see my beautiful sister when she was a girl, early twenties, huge brown eyes and amazing seventies hair. It’s a wonderful memory.<break time="150ms"/> Second is In My Life. <break time="150ms"/> One of the most often covered of the Beatles’ hits, it reminds me of the other cute little angel. I mean, listen to the lyrics so I don’t have to explain why.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/2_In_My_Life_Final.mp3"/></speak>`,
    countdown: `fifty one to fifty one`,
    countdownDisplay: `51 to 51`,
    day: 2,
    year: [1964, 1965],
    genre: ``,
    significantHoomans: ["Rosemarie", "Angie"],
    youtube: [
      "https://www.youtube.com/watch?v=5tc0gLSSU1M",
      "https://www.youtube.com/watch?v=YBcdt6DsLQA",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "And I Love Her / In My Life",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/51-to-51/2_And_I_Love_Her.jpeg",
        textContent: {
          artist: "Artist: The Beatles",
          countdown: "Day 2 (51 to 51)",
          primaryText:
            "And then there’s the Beatles. Last year they made my list with Let It Be. This year, I strategically chose two Beatles’ ballads that remind me of my two angels in the cover photo of my Facebook page. First is And I Love Her, a ballad from before I was even born, which was the wedding song of Rosemarie’s when she married Bob in 1974. Every time I hear it, I sway and think of her. I remember all the things, from being a bow-tied kindergartner who hung on her every word and looked at her with such awe and reverence, to power-mulleted mustachio dedicating this song to her at karaoke in 1992 (which was recorded and saved on a VHS tape that my mom used to LOVE to play… wonder where that ended up?). No matter where I am when I hear it, I can close my eyes and see my beautiful sister when she was a girl, early 20s, huge brown eyes and amazing seventies hair. It’s a wonderful memory. Second is In My Life. One of the most often covered of the Beatles’ hits, it reminds me of the other cute little angel. I mean, listen to the lyrics so I don’t have to explain why.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: [`Those You’ve Known`],
    artist: ["Spring Awakening Cast"],
    date: `December 20, 2016`,
    text: `<speak>With one day left to my birthday, I decided to save this song from Spring Awakening as my penultimate.<break time="150ms"/> Obviously, unless you’ve seen the show you won’t know the song, or what events led up to Jonathan Groff’s Melchior singing it. <break time="150ms"/>He is a boy who is grief stricken beyond words, and ready to just give up on his own life, until the ghosts of those who’ve gone visit, to reassure him they’re never really far away. <break time="150ms"/> The song is called, Those You’ve Known, and my heart bleeds when I hear it, both with sadness of the burden of so much loss, as well as with the swelling of joy, knowing they walk beside me as I continue through this unpleasant world. <break time="250ms"/> Bleak, I know, to be a part of a song countdown, but so relevant, especially during the holidays when one feels the losses on a much greater scale than usual. My Christmas tree is littered with framed photos of those who’ve gone, because I really would give anything to have them all back. Even if just for a day.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/1_Spring_Awakening_Final.mp3"/></speak>`,
    countdown: `fifty one to fifty one`,
    countdownDisplay: `51 to 51`,
    day: 1,
    year: [2006],
    genre: ``,
    significantHoomans: [
      "Angie",
      "Rosemarie",
      "Vinny",
      "Kenny",
      "Mary",
      "Carmine",
      "Michael",
      "My Father",
    ],
    youtube: ["https://www.youtube.com/watch?v=Wlq_9JyBvC8"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Those You’ve Known",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/51-to-51/1_Spring_Awakening.jpeg",
        textContent: {
          artist: "Artist: Spring Awakening Cast",
          countdown: "Day 1 (51 to 51)",
          primaryText:
            "With one day left to my birthday, I decided to save this song from Spring Awakening as my penultimate. Obviously, unless you’ve seen the show you won’t know the song or what events led up to Jonathan Groff’s Melchior singing it. He is a boy who is grief stricken beyond words and ready to just give up on his own life until the ghosts of those who’ve gone visit to reassure him they’re never really far away. The song is called Those You’ve Known, and my heart bleeds when I hear it, both with sadness of the burden of so much loss as well as with the swelling of joy knowing they walk beside me as I continue through this unpleasant world. Bleak, I know, to be a part of a song countdown, but so relevant, especially during the holidays when one feels the losses on a much greater scale than usual. My Christmas tree is littered with framed photos of those who’ve gone, because I really would give anything to have them all back. Even if just for a day.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Merry Christmas Darling"],
    artist: ["Various Artists"],
    date: `December 21, 2016`,
    text: `<speak>To end a countdown of 51 songs to 51, when the one in question is born 4 days before Christmas, seems incomplete without a bonus song, that only gets played this time of year, but is hands-down my favorite Christmas song ever. <break time="150ms"/> Therefore, here is song zero. Merry Christmas Darling. <break time="150ms"/> Just a few days ago, I spoke about Karen Carpenter, and the earnestness of her voice in this holiday masterpiece, is why I love it so. I know I’m ending this countdown on a downer for sure. Let’s just say it’s been a challenging past few years, between losing another sibling, a mother in law, a best friend, a job I’d had for 15 years. <break time="250ms"/> It’s difficult, at a time when people are supposed to be joyous and celebratory, to really feel that feeling intrinsically without a shit-ton of effort. <break time="150ms"/> I do my best, I really do. <break time="150ms"/>I decorate the tree, and I try to put a lot of thought into gift giving, to make the recipients feel loved. <break time="150ms"/>But then I hear Karen Carpenter sing this song and I am immediately reminded that I can’t pick up the phone and call my mom just to say I love her, or call my sis and listen to her sing-songy voice telling me stories. <break time="150ms"/>I can’t call Vinny and laugh like we always did. I can’t wish any of them a Merry Christmas, or Happy New Year, too. <break time="150ms"/> So many of you know this sad feeling, this bittersweet sentiment that comes ‘round every December without them. <break time="150ms"/> I dedicate this song to you and to them, those who’ve left but never really leave us. <break time="150ms"/> Merry Christmas, my darlings.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/51-to-51/0_Christmas_Darling_Final.mp3"/></speak>`,
    countdown: `fifty one to fifty one`,
    countdownDisplay: `51 to 51`,
    day: 0,
    year: [1978],
    genre: ``,
    significantHoomans: [
      "Angie",
      "Rosemarie",
      "Vinny",
      "Kenny",
      "Mary",
      "Carmine",
      "My Father",
    ],
    youtube: ["https://www.youtube.com/watch?v=YR1ujXx2p-I"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Merry Christmas, Darling",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/51-to-51/0_Merry_Christmas_Darling.jpeg",
        textContent: {
          artist: "Artist: Various Artists",
          countdown: "Day 0 (51 to 51)",
          primaryText:
            "To end a countdown of 51 songs to 51, when the one in question is born 4 days before Christmas, seems incomplete without a bonus song that only gets played this time of year, but is hands-down my favorite Christmas song ever. Therefore, here is song zero, Merry Christmas, Darling. Just a few days ago, I spoke about Karen Carpenter, and the earnestness of her voice in this holiday masterpiece is why I love it so. I know I’m ending this countdown on a downer for sure. Let’s just say it’s been a challenging past few years, between losing another sibling, a mother in law, a best friend, a job I’d had for 15 years… It’s difficult, at a time when people are supposed to be joyous and celebratory, to really feel that feeling intrinsically without a shit-ton of effort. I do my best, I really do. I decorate the tree and I try to put a lot of thought into gift giving to make the recipients feel loved. But then I hear Karen Carpenter sing this song and I am immediately reminded that I can’t pick up the phone and call my mom just to say I love her, or call my sis and listen to her sing-songy voice telling me stories. I can’t call Vinny and laugh like we always did. I can’t wish any of them a Merry Christmas or Happy New Year too. So many of you know this sad feeling, this bittersweet sentiment that comes ‘round every December without them. I dedicate this song to you and to them, those who’ve left but never really leave us. Merry Christmas, my darlings.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Coming Out Of Hiding"],
    artist: ["Pamela Stanley"],
    date: `October 30, 2017`,
    text: `<speak>Among the later disco era of the early to mid-eighties, when dance songs were really only played at clubs, because the charts were dominated by a newer wave, <break time="50ms"/> songs like, Coming Out Of Hiding, helped remind me why I loved the disco era so much. <break time="150ms"/> This post represents so many other great songs from the same time period, like Babe We’re Gonna Love Tonight, by Lime, High Energy, by Evelyn Thomas, I Like You, by Phyllis Nelson, If You Should Ever Be Lonely, by Val Young, So Many Men So Little Time, by Miquel Brown, Searchin’, by Hazel Dean. <break time="250ms"/>The list can go on forever. And every single one of these songs reminds me of my Jan, during our earliest times together, developing what would become our lifelong lifeline of friendship. <break time="150ms"/> But since space (and attention) is limited, I didn’t want to include all of the songs from this time capsule. So I chose Pamela Stanley’s as a stand out. <break time="150ms"/> Enjoy, because you know you want to.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/52_Coming_Out_Of_Hiding_Final.mp3"/></speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 52,
    year: [1984],
    genre: ``,
    significantHoomans: ["Jan"],
    youtube: ["https://www.youtube.com/watch?v=Gpq9UsFUuO4"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Coming Out Of Hiding",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/52_Coming_Out_Of_Hiding.jpeg",
        textContent: {
          artist: "Artist: Pamela Stanley",
          countdown: "Day 52 (52 to 52)",
          primaryText:
            "Among the later disco era of the early to mid-eighties, when dance songs were really only played at clubs anymore because the charts were dominated by a newer wave, songs like Coming Out Of Hiding helped remind me why I loved the disco era so much. This post represents so many other great songs from the same time period, like Babe We’re Gonna Love Tonight by Lime, High Energy by Evelyn Thomas, I Like You by Phyllis Nelson, If You Should Ever Be Lonely by Val Young, So Many Men So Little Time by Miquel Brown, Searchin’ by Hazel Dean… the list can go on forever. And every single one of these songs reminds me of my Jan, during our earliest times together developing what would become our lifelong lifeline of friendship. But since space (and attention) is limited, I didn’t want to include all of the songs from this time capsule, so I chose Pamela Stanley’s as a stand out. Enjoy, because you know you want to.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Into The Night"],
    artist: ["Benny Mardones"],
    date: `October 31, 2017`,
    text: `<speak>Before you read further and/or judge, please just try and remember this song was written in a different time, and when I fell in love with it, I was just short of 16 years old myself. <break time="150ms"/> It wasn’t gross and statutory-rapey back then. (Well, it was, I just didn’t realize that at the time)<break time="150ms"/> With that disclaimer said, Into The Night will always be one of my favorite songs from the early, and then again late, eighties.<break time="150ms"/> It spoke of forbidden love, of a boy’s deepest feelings that he must lock away, because expressing them meant excommunication. <break time="150ms"/> It was on my A.M. radio stations, in those small days of hanging out in Roberta’s basement, when I panged over whether to come out to her. Which I didn’t, because I was too terrified. <break time="150ms"/> Then, years later, the song was back on the pop charts, in the summer of love, when Vincent and Rosie and Janet and I would drive to Kiss in Ronkonkoma, punctuating my journey from who I was the first time I’d ever heard it. <break time="150ms"/> The pop charts of the year 1980 are littered with songs like this one, songs that will always remain dear to me, reminding me of that frightened boy I left behind so long ago. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/51_Into_The_Night_Final.mp3"/></speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 51,
    year: [1980],
    genre: ``,
    significantHoomans: ["Roberta", "Vinny"],
    youtube: ["https://www.youtube.com/watch?v=zWHjJt4833I"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Into The Night",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/51_Benny-Mardones.png",
        textContent: {
          artist: "Artist: Benny Mardones",
          countdown: "Day 51 (52 to 52)",
          primaryText:
            "Before you read further and/or judge, please just try and remember this song was written in a different time, and when I fell in love with it, I was just short of 16 years old myself. It wasn’t gross and statutory-rapey back then. (Well, it was, I just didn’t realize that at the time…) With that disclaimer said, Into The Night will always be one of my favorite songs from the early, and then again late, eighties. It spoke of forbidden love, of a boy’s deepest feelings that he must lock away because expressing them meant excommunication. It was on my AM radio stations in those small days of hanging out in Roberta’s basement when I panged over whether to come out to her. Which I didn’t, because I was too terrified. Then, years later, the song was back on the pop charts in the summer of love when Vincent and Rosie and Janet and I would drive to Kiss in Ronkonkoma, punctuating my journey from who I was the first time I’d ever heard it. The pop charts of the year 1980 are littered with songs like this one, songs that will always remain dear to me, reminding me of that frightened boy I left behind so long ago. ",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Private Dancer"],
    artist: ["Tina Turner"],
    date: `November 1, 2017`,
    text: `<speak>I think part of the reason I love Private Dancer, the titular track from Tina Turner’s huge comeback album in 1984, is the sounds Tina makes, more so than her singing or any of the lyrics. <break time="150ms"/> (Also, I wanted to use the word titular because it makes me giggle, and the dress she’s wearing in the bridge is beyond amazing and makes her boobies look PERFECT, even to a gay boy. <break time="150ms"/> And I chose today to post this song, on Kenny’s birthday, because he LOVED her in this video; he used to talk about how thick her nipples were and that you could see them jutting out of that dress.) Just in the opening sequence, she sighs with such exasperation over the whole thing. I think maybe it was the first time, in a song, I realized there might be someone who gets what it’s like to hate waking up in the morning. I ALSO love the echoed ‘Thank You' after she explains the kind of currency her hooker-ass accepts during the amazing bridge. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/50_Private_Dancer_mixdown.mp3"/></speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 50,
    year: [1984],
    genre: ``,
    significantHoomans: ["Kenny"],
    youtube: ["https://www.youtube.com/watch?v=d4QnalIHlVc"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Private Dancer",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/50_Tina_Turner_Private_Dancer.jpeg",
        textContent: {
          artist: "Artist: Tina Turner",
          countdown: "Day 50 (52 to 52)",
          primaryText:
            "I think part of the reason I love Private Dancer, the titular track from Tina Turner’s huge comeback album in 1984, is the sounds Tina makes more so than her singing or any of the lyrics. (Also, I wanted to use the word titular because it makes me giggle, and the dress she’s wearing in the bridge is beyond amazing and makes her boobies look PERFECT, even to a gay boy. And I chose today to post this song, on Kenny’s birthday, because he LOVED her in this video; he used to talk about how thick her nipples were and that you could see them jutting out of that dress….) Just in the opening sequence, she sighs with such exasperation over the whole thing. I think maybe it was the first time, in a song, I realized there might be someone who gets what it’s like to hate waking up in the morning. I ALSO love the echoed ‘Thank You” after she explains the kind of currency her hooker-ass accepts during the amazing bridge. ",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Freedom Ninety", "Fast Love"],
    artist: ["George Michael"],
    date: `November 2, 2017`,
    text: `<speak>Today you’re being treated to a double shot from the beautiful George Michael, who was on last year’s list with Wham! <break time="150ms"/> serving a song I can’t believe I’d forgotten on the first list of top 50. You can say so much about George Michael, and you can try and pigeon hole him into some kind of category, but I always knew this was an artist, a brilliant soul, inside a beautiful face, with a sexy voice. <break time="150ms"/> A rare, ballsy talent washed in ambiguous sexuality. The first song today is Freedom 90, made popular by the super-models in the video, but with the slight gay undertones that I had been looking for all along. It’s his coming of age song, the start of his open closet door. I can go on for days about this song. It is perfection; the fugue of his smoky voice over itself throughout the verse and chorus. <break time="150ms"/> The video features the most beautiful women in the world, lip synching his words with the complete absence of the singer himself. <break time="150ms"/> Brilliant. <break time="150ms"/> And then there’s the out-and-proud George, amid the turmoil of American tabloid nonsense, looking more mature but still as sexy as ever as he brings us FastLove, one of the sexist songs ever by anyone. <break time="150ms"/> This was a blaster; it was on one of our Structure tapes, and I would rewind it and blast it during those moments when I was the only one in the store. I can still close my eyes and be taken elsewhere. It calls to mind my consistent crushes on all the hot young sales reps I’d hire based partially on their looks<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/49_George_Michael_Final.mp3"/></speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 49,
    year: [1990, 1996],
    genre: ``,
    significantHoomans: [],
    youtube: [
      "https://www.youtube.com/watch?v=diYAc7gB-0A",
      "https://www.youtube.com/watch?v=SHAQlFq6TFg",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Freedom! '90 / FastLove",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/49_George_Michael.jpeg",
        textContent: {
          artist: "Artist: George Michael",
          countdown: "Day 49 (52 to 52)",
          primaryText:
            "Today you’re being treated to a double shot from the beautiful George Michael, who was on last year’s list with Wham! serving a song I can’t believe I’d forgotten on the first list of top 50. You can say so much about George Michael and you can try and pigeon hole him into some kind of category, but I always knew this was an artist, a brilliant soul inside a beautiful face with a sexy voice. A rare, ballsy talent washed in ambiguous sexuality. The first song today is Freedom ’90, made popular by the super-models in the video, but with the slight gay undertones that I had been looking for all along. It’s his coming of age song, the start of his open closet door. I can go on for days about this song. It is perfection; the fugue of his smoky voice over itself throughout the verse and chorus. The video features the most beautiful women in the world lip synching his words with the complete absence of the singer himself. Brilliant. And then there’s the out-and-proud George, amid the turmoil of American tabloid nonsense, looking more mature but still as sexy as eve as he brings us FastLove, one of the sexist songs ever by anyone. This was a blaster; it was on one of our Structure tapes and I would rewind it and blast it during those moments when I was the only one in the store. I can still close my eyes and be taken elsewhere. It calls to mind my consistent crushes on all the hot young sales reps I’d hire based partially on their looks",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Rapture"],
    artist: ["Blondie"],
    date: `November 3, 2017`,
    text: `<speak>After a string of new wave hits that had crossed over into the pop charts, Debbie Harry and her band Blondie, brought forth this funk-driven hip hop cross-over mega-monster, Rapture. <break time="150ms"/> Add one part proper dance beats, to one part synthetic pop, and then mix in a shot or two of Fab Five Freddy. <break time="150ms"/> This song is hypnotically repetitive but 100% amazing.<break time="150ms"/> During the emergence of hip hop, leave it to a blonde new wave diva to elevate rap to the pop charts. We didn’t have M.T.V. in the Poconos, so Maria and I would watch this on Friday Night Videos, priding ourselves on the ability to learn every word.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/48_Blondie_Final.mp3"/></speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 48,
    year: [1980],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=pHCdS7O248g"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Rapture",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/48_Blondie.jpg",
        textContent: {
          artist: "Artist: Blondie",
          countdown: "Day 48 (52 to 52)",
          primaryText:
            "After a string of new wave hits that had crossed over into the pop charts, Debbie Harry and her band Blondie, brought forth this funk-driven hip hop cross-over mega-monster, Rapture. Add one part proper dance beats, to one part synthetic pop, and then mix in a shot or two of Fab Five Freddy. This song is hypnotically repetitive but 100% amazing During the emergence of hip hop, leave it to a blonde new wave diva to elevate rap to the pop charts. We didn’t have MTV in the Poconos, so Maria and I would watch this on Friday Night Videos, priding ourselves on the ability to learn every word.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: [`Ain’t No Sunshine`],
    artist: ["Bill Withers"],
    date: `November 4, 2017`,
    text: `<speak>There’s something about the mood and tone of this song, Ain’t No Sunshine by Bill Withers.<break time="150ms"/> The lyrics tell the story to which the music is perfectly matched. The sway of the strings, with Bill’s smooth as silk voice. The fact that he almost loses his breath <break time="150ms"/> ‘knowing.’ <break time="150ms"/> It’s such a great song, such a beautiful classic from my childhood. I remember being a kid and hearing this song, my mom told me he says 'I know' 150 times, and that always stayed with me because she said it was so, but also because it was easy to believe based on the heartbreak in his vocals. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/47_Bill_Whithers_Final.mp3"/></speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 47,
    year: [1971],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=CICIOJqEb5c"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Ain’t No Sunshine",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/47_Bill_Withers.jpg",
        textContent: {
          artist: "Artist: Bill Withers",
          countdown: "Day 47 (52 to 52)",
          primaryText:
            "There’s something about the mood and tone of this song, Ain’t No Sunshine by Bill Withers. The lyrics tell the story to which the music is perfectly matched. The sway of the strings with Bill’s smooth as silk voice. The fact that he almost loses his breath ‘knowing.’ It’s such a great song, such a beautiful classic from my childhood. I remember being a kid and hearing this song, my mom told me he says 'I know' 150 times, and that always stayed with me because she said it was so, but also because it was easy to believe based on the heartbreak in his vocals.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Heart Of Gold"],
    artist: ["Neil Young"],
    date: `November 5, 2017`,
    text: `<speak>This song provides me with golden memories of my beautiful sister when, I was still just a small boy. <break time="150ms"/> In 1971, she was 15 going on 16 ,and so much of the music of those days reminds me of her.<break time="150ms"/> Heart of Gold is one among the many. In my memory’s eye, I can see her holding my hand, as we walked on the sidewalks of Wright Avenue in the autumn. Colors alive with red and orange and yellow. <break time="150ms"/> The harmonica in this song brings me back to simpler days, when growing up across the street from a park was probably the most amazing thing to ever happen to a kid. I know Greg and Linda can identify, for though we had yards of our own, the park was also ours, and everything in it belonged to us. <break time="150ms"/> My heart of gold lives in that park with my childhood friends and my big sister.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/46_Heart_Of_Gold_Final.mp3"/></speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 46,
    year: [1972],
    genre: ``,
    significantHoomans: ["Angie", "Greg", "Linda"],
    youtube: ["https://www.youtube.com/watch?v=Eh44QPT1mPE"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Heart Of Gold",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/46_Heart_Of_Gold.jpg",
        textContent: {
          artist: "Artist: Neil Young",
          countdown: "Day 46 (52 to 52)",
          primaryText:
            "This song provides me with golden memories of my beautiful sister when I was still just a small boy. In 1971, she was 15 going on 16 and so much of the music of those days reminds me of her. Heart of Gold is one among the many. In my memory’s eye I can see her holding my hand as we walked on the sidewalks of Wright Avenue in the autumn, colors alive with red and orange and yellow. The harmonica in this song brings me back to simpler days when growing up across the street from a park was probably the most amazing thing to ever happen to a kid. I know Greg and Linda can identify, for though we had yards of our own, the park was also ours and everything in it belonged to us. My heart of gold lives in that park with my childhood friends and my big sister.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Peace Is Just A Word"],
    artist: ["Eurythmics"],
    date: `November 6, 2017`,
    text: `<speak><audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/45_Peace_Is_Just_A_Word_Final1.mp3"/This is a heartbreakingly haunting song about the prospect of peace, and the helplessness most of us feel, in the face of constant tragedy and atrocities. <break time="200ms"/>It speaks to me on a personal level, but also on a global scale. Oh, that velvet voice of Annie Lennox. She really knows how to take you along on a journey. You’ll just have to listen to Peace Is Just A Word, and let me know your own take-away.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/45_Peace_Is_Just_A_Word_Final2.mp3"/></speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 45,
    year: [1999],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=nHJI1HZ3NwE"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Peace Is Just A Word",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/45_Peace_Is_Just_A_Word.jpg",
        textContent: {
          artist: "Artist: Eurythmics",
          countdown: "Day 45 (52 to 52)",
          primaryText:
            "This is a heartbreakingly haunting song about the prospect of peace and the helplessness most of us feel in the face of constant tragedy and atrocities. It speaks to me on a personal level, but also on a global scale. Oh, that velvet voice of Annie Lennox. She really knows how to take you along on a journey. You’ll just have to listen to Peace Is Just A Word and let me know your own take-away.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: [`You Keep Me Hangin’ On`, "Venus"],
    artist: ["Kim Wilde", "Bananarama"],
    date: `November 7, 2017`,
    text: `<speak>Two old classics, each with an eighties upbeat disco reboot. Just the way I like my old classics. The first is one of those songs that, when I hear it in my car, I have to act out what Kim Wilde did in the video when she says <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/44_Kim_Wilde_Banarama_Final1.mp3"/> Anyone driving near me must be like, 'oh there’s that old homo reliving the eighties again' <break time="350ms"/>Then there’s Venus. <break time="150ms"/> I remember its climb to Screamer of the Week on W.L.I.R., thinking it was probably one of the best new wave dance songs I’d ever heard, not even knowing it was a cover of a classic. <break time="150ms"/> So why did these songs make my list? You tell me. Sadly the original video for Kim Wilde’s You Keep Me Hangin’ On doesn’t seem to be available on YouTube so I can’t post that version, but this version is as deliciously eighties. And then there’s Bananarama.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/44_Kim_Wilde_Banarama_Final2.mp3"/></speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 44,
    year: [1986, 1986],
    genre: ``,
    significantHoomans: [],
    youtube: [
      "https://www.youtube.com/watch?v=s3PWO9xbki8",
      "https://www.youtube.com/watch?v=d4-1ASpdT1Y",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "You Keep Me Hangin’ On / Venus",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/44_Keep_Me_Hangin_On.jpg",
        textContent: {
          artist: "Artist: Kim Wilde / Bananarama",
          countdown: "Day 44 (52 to 52)",
          primaryText:
            "Two old classics, each with an eighties upbeat disco reboot. Just the way I like my old classics. The first is one of those songs that, when I hear it in my car, I have to act out what Kim Wilde did in the video when she says 'Get out, get outta my life and let me sleep at night' Anyone driving near me must be like, 'oh there’s that old homo reliving the eighties again…' Then there’s Venus. I remember its climb to Screamer of the Week on WLIR, thinking it was probably one of the best new wave dance songs I’d ever heard, not even knowing it was a cover of a classic. So why did these songs make my list? You tell me. Sadly the original video for Kim Wilde’s You Keep Me Hangin’ On doesn’t seem to be available on YouTube so I can’t post that version, but this version is as deliciously eighties. And then there’s Bananarama.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Rise"],
    artist: ["Herb Alpert"],
    date: `November 8, 2017`,
    text: `<speak><This is one of two instrumental songs in this year’s countdown; therefore it’s obviously not about lyrics, but rather the way the sounds make me feel. <break time="150ms"/> I remember actually physically watching General Hospital the day that Luke, raped, Laura. <break time="150ms"/> I use quotes because, as any G.H. fan will tell you, she was as into it as he was, she was just scared to death because she was about to marry the wrong man. In a way it irks the shit outta me that this is known as the rape song, but it is what it is. The song is perfection in its orchestration. The horns are beautiful. The bassline allows you to close your eyes and sway with the groove. It’s a perfect snapshot of 1979, a non-verbal close of the disco era.break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/43_Rise_Final.mp3"/></speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 43,
    year: [1979],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=q7O3eYJptTc"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Rise",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/43_Rise.jpg",
        textContent: {
          artist: "Artist: Herb Alpert",
          countdown: "Day 43 (52 to 52)",
          primaryText:
            "This is one of two instrumental songs in this year’s countdown; therefore it’s obviously not about lyrics but rather the way the sounds make me feel. I remember actually physically watching General Hospital the day that Luke “raped” Laura. I use quotes because, as any GH fan will tell you, she was as into it as he was, she was just scared to death because she was about to marry the wrong man. In a way it irks the shit outta me that this is known as the rape song, but it is what it is. The song is perfection in its orchestration. The horns are beautiful. The bassline allows you to close your eyes and sway with the groove. It’s a perfect snapshot of 1979, a non-verbal close of the disco era.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: [`Isn’t It Time`, "Every Time I Think Of You"],
    artist: ["The Babys", "The Babys"],
    date: `November 9, 2017`,
    text: `<speak>Honestly, I have no early memories of these 2 amazing songs by the Babies. <break time="150ms"/> In fact, I never even knew of John Waite until his own solo smash, Missing You, from 1984, a song that was literally all over the air and played to death. <break time="150ms"/> It wasn’t until I started working at Cablevision, and was testing out a music service for Optimum Online, that I first discovered, and immediately fell in love with, Isn’t It Time. <break time="150ms"/> The sound was so ultimately seventies, with fierce female backing vocals that rivaled the lead singer’s, and an overall ELO-sounding combination of horns and piano and strings. I still can’t believe it took me so long to discover this band and their gigantic songs. Perhaps it’s because they didn’t have that huge a career, but either way I’m glad I have these 2 songs in my life. <break time="150ms"/> Every Time I Think Of You is more of the same delicious format, but unique in its own sound.<break time="150ms"/> When Missing You was all over the place, I hated it and wasn’t a fan of Waite’s voice, but now I realize how amazing a vocalist he is. I can play both these songs on repeat. I know, shocking.<break time="150ms"/>  Side note: in the video for Isn’t It Time, John Waite kind of looks like Lady Mary from Downton Abbey. <break time="150ms"/>Just sayin’. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/42_Babys_Final.mp3"/></speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 42,
    year: [1977, 1979],
    genre: ``,
    significantHoomans: [],
    youtube: [
      "https://www.youtube.com/watch?v=2DOcro7VeDo",
      "https://www.youtube.com/watch?v=tCvv3Bm07Uw",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Isn’t It Time / Every Time I Think Of You",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/42_Babys.jpg",
        textContent: {
          artist: "Artist: The Babys",
          countdown: "Day 42 (52 to 52)",
          primaryText:
            "Honestly, I have no early memories of these 2 amazing songs by the Babys; in fact, I never even knew of John Waite until his own solo smash Missing You from 1984, a song that was literally all over the air and played to death. It wasn’t until I started working at Cablevision and was testing out a music service for Optimum Online that I first discovered, and immediately fell in love with, Isn’t It Time. The sound was so ultimately seventies, with fierce female backing vocals that rivaled the lead singer’s, and an overall ELO-sounding combination of horns and piano and strings. I still can’t believe it took me so long to discover this band and their gigantic songs. Perhaps it’s because they didn’t have that huge a career, but either way I’m glad I have these 2 songs in my life. Every Time I Think Of You is more of the same delicious format, but unique in its own sound. When Missing You was all over the place, I hated it and wasn’t a fan of Waite’s voice, but now I realize how amazing a vocalist he is. I can play both these songs on repeat. I know, shocking. Side note: in the video for Isn’t It Time, John Waite kind of looks like Lady Mary from Downton Abbey. Just sayin’. ",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Video Killed The Radio Star"],
    artist: ["The Buggles"],
    date: `November 10, 2017`,
    text: `<speak>It’s from 1979 but let’s face it, you remember it from August 1, 1981. <break time="150ms"/> It inaugurated M.T.V. to a generation of music lovers like me, but it was definitive of what the sound was all about in the nineteen eighties. <break time="150ms"/> Few songs and few artists can ever know the iconic status that this video has and always will have. <break time="150ms"/>It set the stage for the video superstars of the eighties like Duran Duran and Michael Jackson.<break time="150ms"/> Aside from all of that, it’s just a really good pop song. Synthesized chords that just make me feel happy, fake drum beats that make me remember what life was like in a simpler time.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/41_Video_Killed_Radio_Star_Final.mp3"/></speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 41,
    year: [1979],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=W8r-tXRLazs"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Video Killed The Radio Star",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/41_Video_Killed_the_Radio_Star.jpeg",
        textContent: {
          artist: "Artist: The Buggles",
          countdown: "Day 41 (52 to 52)",
          primaryText:
            "It’s from 1979 but let’s face it, you remember it from August 1, 1981. It inaugurated MTV to a generation of music lovers like me, but it was definitive of what the sound was all about in the 1980s. Few songs and few artists can ever know the iconic status that this video has and always will. It set the stage for the video superstars of the eighties like Duran Duran and Michael Jackson. Aside from all of that, it’s just a really good pop song. Synthesized chords that just make me feel happy, fake drum beats that make me remember what life was like in a simpler time.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Lost In Your Eyes", "Foolish Beat"],
    artist: ["Debbie Gibson"],
    date: `November 11, 2017`,
    text: `<speak>Lost In Your Eyes. <break time="150ms"/> From those first opening piano notes, my heart begins to flutter again. I am 23, completely vulnerable, wishing and praying to finally know what romance is. <break time="150ms"/> And then, at a house party, I see him. <break time="150ms"/> Although I’m dating someone and have come to this party with him, I am introduced to him as a friend’s date. But the electricity between our locked stare is undeniable. However, I am scared, and I am a giant coward, so I allow him to escape my view and realize, too late, that he has left the house party. There is no way to contact him without asking the guy I’m dating for the phone number of his friend, the same guy who’s dating the one in whose eyes I am lost. Did you follow all of that? So this song plays endlessly on my cassette player because I am the definition of a tragic hot mess.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/"/>  Soon, Debbie releases another one – Foolish Beat, and by this time I’m already in another relationship, still learning the ropes, still trying to fit square pegs into round holes (and no, that’s not a euphemism). <break time="150ms"/> Thinking about how I’m with the wrong person, that THE ONE is out there, and how he got away, and how I let him go. <break time="150ms"/> And I’m too powerless to make anything happen, and by now it’s too late anyway. <break time="150ms"/> Lots of ands. <break time="250ms"/> Two songs that will always render me helpless inside my memory, trapped in the wishful thinking of what I could have, should have done differently, if only I’d been more confident. Hindsight, lost in my eyes. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/40_Debbie_Gibson_Final.mp3"/> </speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 40,
    year: [1989, 1987],
    genre: ``,
    significantHoomans: ["Adam"],
    youtube: [
      "https://www.youtube.com/watch?v=8Ms3mJFkSeg",
      "https://www.youtube.com/watch?v=qf8BoWKeHow",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Lost In Your Eyes / Foolish Beat",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/40_Debbie_Gibson.jpeg",
        textContent: {
          artist: "Artist: Debbie Gibson",
          countdown: "Day 40 (52 to 52)",
          primaryText:
            "Lost In Your Eyes. From those first opening piano notes, my heart begins to flutter again. I am 23, completely vulnerable, wishing and praying to finally know what romance is. And then, at a house party, I see him. Although I’m dating someone and have come to this party with him, I am introduced to him as a friend’s date. But the electricity between our locked stare is undeniable. However, I am scared, and I am a giant coward, so I allow him to escape my view and realize, too late, that he has left the house party. There is no way to contact him without asking the guy I’m dating for the phone number of his friend, the same guy who’s dating the one in whose eyes I am lost. Did you follow all of that? So this song plays endlessly on my cassette player because I am the definition of a tragic hot mess. Soon, Debbie releases another one – Foolish Beat, and by this time I’m already in another relationship, still learning the ropes, still trying to fit square pegs into round holes (and no, that’s not a euphemism). Thinking about how I’m with the wrong person, that THE ONE is out there and how he got away, and how I let him go. And I’m too powerless to make anything happen, and by now it’s too late anyway. Lots of ‘ands’...Two songs that will always render me helpless inside my memory, trapped in the wishful thinking of what I could have, should have done differently, if only I’d been more confident. Hindsight, lost in my eyes.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Love Will Lead You Back", "Heart Of Stone"],
    artist: ["Taylor Dayne", "Taylor Dayne"],
    date: `November 12, 2017`,
    text: `<speak>The first of these songs is a tough one. <break time="150ms"/> It’s a song I love but, it’s a song I allowed myself to sabotage the best thing in my world for something that was bad and wrong and already long dead. <break time="150ms"/>Her message was so pure and her voice is just so amazing, I was mesmerized by it. Love Will Lead You Back. <break time="150ms"/> I really believed it, because I wanted to.<break time="150ms"/> Even all the while holding something way more precious and real and right. Ah well, and so it goes. From the same album, Taylor Dayne released Heart Of Stone shortly afterwards. Maybe I should have believed a person could have a heart of stone and I wouldn’t have allowed myself to be so blinded. I loved this song almost as much as L.W.L.Y.B. <break time="150ms"/> But today when I hear them, I just think about what could have been.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/39_Taylor_Dayne_Final.mp3"/></speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 39,
    year: [1989, 1989],
    genre: ``,
    significantHoomans: ["Adam"],
    youtube: [
      "https://www.youtube.com/watch?v=MO6xhLtfwW0",
      "https://www.youtube.com/watch?v=05sGoW24VaY",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Love Will Lead You Back / Heart Of Stone",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/39_Taylor_Dayne.jpeg",
        textContent: {
          artist: "Artist: Taylor Dayne",
          countdown: "Day 39 (52 to 52)",
          primaryText:
            "The first of these songs is a tough one. It’s a song I love but it’s a song I allowed myself to sabotage the best thing in my world for something that was bad and wrong and already long dead. Her message was so pure and her voice is just so amazing, I was mesmerized by it. Love Will Lead You Back. I really believed it, because I wanted to. Even all the while holding something way more precious and real and right. Ah well, and so it goes. From the same album, Taylor Dayne released Heart Of Stone shortly afterwards. Maybe I should have believed a person could have a heart of stone and I wouldn’t have allowed myself to be so blinded. I loved this song almost as much as LWLYB. But today when I hear them, I just think about what could have been.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Who You Love"],
    artist: ["John Mayer", "Katy Perry"], // This might cause issues
    date: `November 13, 2017`,
    text: `<speak>John Mayer is one of my favorite artists to emerge from this shitty new millennium. <break time="150ms"/> Along with a voice like a male angel, he is a brilliant musician. I have seen him perform several times, and he has always put on an amazing live performance. <break time="150ms"/> So when it came down to choosing a song for this countdown purpose, I was a little perplexed. I happen to love his ballads, because you really get to enjoy that smooth voice, so I looked at the list and saw so, so many. <break time="150ms"/> I chose his duet with then-love Katy Perry, Who You Love. <break time="150ms"/> Though I’m not a giant fan of hers, I did love the raw truth in the lyrics and the vocals of the song. He writes beautiful truths, this John Mayer with the bad-boy reputation. If you sit and close your eyes while listening to this song, I think you can actually glean into his soul. He really means it. And frankly, so does Katy; she’s not just screwing around at a teenage Friday night party. He probably didn’t think of the gay community while penning these lyrics (though there is a lesbian couple featured in the video);<break time="150ms"/> however, these lyrics are descriptive proof of the phrase, Love Is Love.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/38_Who_You_Love_Final.mp3"/></speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 38,
    year: ["https://www.youtube.com/watch?v=nSRCpertZn8"],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=nSRCpertZn8"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Who You Love",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/38_WhoYouLove.jpeg",
        textContent: {
          artist: "Artist: John Mayer & Katy Perry",
          countdown: "Day 38 (52 to 52)",
          primaryText:
            "John Mayer is one of my favorite artists to emerge from this shitty new millennium. Along with a voice like a male angel, he is a brilliant musician. I have seen him live several times and he has always put on an amazing live performance. So when it came down to choosing 'a song' for this countdown purpose, I was a little perplexed. I happen to love his ballads because you really get to enjoy that smooth voice, so I looked at the list and saw so, so many… I chose his duet with then-love Katy Perry, Who You Love. Though I’m not a giant fan of hers, I did love the raw truth in the lyrics and the vocals of the song. He writes beautiful truths, this John Mayer with the bad-boy reputation. If you sit and close your eyes while listening to this song, I think you can actually glean into his soul. He really means it. And frankly, so does Katy; she’s not just fucking around at a teenage Friday night party. He probably didn’t think of the gay community while penning these lyrics (though there is a lesbian couple featured in the video); however, these lyrics are descriptive proof of the phrase #LoveIsLove.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Always Tomorrow"],
    artist: ["Gloria Estefan"],
    date: `November 14, 2017`,
    text: `<speak>What a beautiful message this song has, though for some people there isn’t a tomorrow. It’s hopeful and optimistic amidst the ballad setting. I have always loved the voice of Gloria Estefan, but something about Always Tomorrow makes me feel like she knew my life. <break time="100ms"/>The lyrics still speak to me now, so many years later.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/37_Always_Tomorrow_Final2.mp3"/></speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 37,
    year: [1992],
    genre: ``,
    significantHoomans: ["Petey"],
    youtube: ["https://www.youtube.com/watch?v=MeRT6_h6q3w"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Always Tomorrow",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/37_Always_Tomorrow.jpg",
        textContent: {
          artist: "Artist: Gloria Estefan",
          countdown: "Day 37 (52 to 52)",
          primaryText:
            "What a beautiful message this song has, though for some people there isn’t a tomorrow. It’s hopeful and optimistic amidst the ballad setting. I have always loved the voice of Gloria Estefan, but something about Always Tomorrow makes me feel like she knew my life. The lyrics still speak to me now, so many years later. (That’s why there’s always tomorrow before your last setting sun. And everything your heart has longed for has yet to be won. Yes, there's always, always, always tomorrow though people come and they go. But if you've brought some love to their lives then you've got something to show)",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Laughter In The Rain"],
    artist: ["Neal Sedaka"],
    date: `November 15, 2017`,
    text: `<speak>I remember thinking that this is what romance must feel like for a boy and a girl. <break time="150ms"/> Running in the rain, trying to find a dry place to cuddle up and kiss. It was one of the first times in my young life when I realized there was something broken about me. <break time="150ms"/> That I would never run while trying to dodge the rain, holding hands with a girl who I loved, and who loved me. <break time="150ms"/> I never knew what exactly about me was broken, I just knew something was. <break time="150ms"/> In spite of that, I have always loved the melody of this song. To me, it’s aspirational. And perhaps it doesn’t have to be a boy and a girl walking hand in hand. I mean, I really do love the rainy days and the way I feel inside. I can still hear the Laughter In The Rain if I try hard enough.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/36_Laughter_In_The_Rain_Final.mp3"/></speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 36,
    year: [1974],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=MtIibcNDQ6o"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Laughter In The Rain",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/36_Laughter_In_The_Rain.jpeg",
        textContent: {
          artist: "Artist: Neal Sedaka",
          countdown: "Day 36 (52 to 52)",
          primaryText:
            "I remember thinking that this is what romance must feel like for a boy and a girl. Running in the rain, trying to find a dry place to cuddle up and kiss. It was one of the first times in my young life when I realized there was something broken about me, that I would never run while trying to dodge the rain, holding hands with a girl who I loved and who loved me. I never knew what exactly about me was broken, I just knew something was. In spite of that, I have always loved the melody of this song. To me, it’s aspirational. And perhaps it doesn’t have to be a boy and a girl walking hand in hand. I mean, I really do love the rainy days and the way I feel inside. I can still hear the Laughter In The Rain if I try hard enough.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["You Make Me Feel Like Dancing"],
    artist: ["Leo Sayer"],
    date: `November 16, 2017`,
    text: `<speak>Imagine, if you will, that it’s 1976 again. <break time="150ms"/> You get up feeling a little groggy, and fumble your way into the dark kitchen as the sun hasn’t quite risen yet outside. <break time="150ms"/> You go through the motions of preparing the coffee pot, gently putting the percolator on the front jet and turning on the gas, and you switch on the radio, which is already tuned to W.G.B.B. <break time="150ms"/> The voice you suddenly hear is happy and the music is peppy. Before long, you’re grooving from side to side in your bathrobe and slippers, and you begin to realize that today is going to be a good day. <break time="150ms"/>That’s You Make Me Feel Like Dancing, by Leo Sayer, who looks like Richard Simmons, and could be a long lost Bee Gee. <break time="150ms"/> His song is infectious and definitive of its time. It’s not even really that great a song, but it makes me smile. Great lyrics, happy upper range male voice that could have easily been a woman’s. It always makes me feel like dancing! And it reminds me of my Ellen, so there’s always that extra tidbit of joy. Join IN!<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/35_Leo_Slayer_Final.mp3"/></speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 35,
    year: [1976],
    genre: ``,
    significantHoomans: ["Ellen"],
    youtube: ["https://www.youtube.com/watch?v=HhSjwU8gEsI"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "You Make Me Feel Like Dancing",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/35_Leo_SLayer.jpg",
        textContent: {
          artist: "Artist: Leo Sayer",
          countdown: "Day 35 (52 to 52)",
          primaryText:
            "Imagine, if you will, that it’s 1976 again. You get up feeling a little groggy and fumble your way into the dark kitchen as the sun hasn’t quite risen yet outside. You go through the motions of preparing the coffee pot, gently putting the percolator on the front jet and turning on the gas, and you switch on the radio which is already tuned to WGBB. The voice you suddenly hear is happy and the music is peppy. Before long, you’re grooving from side to side in your bathrobe and slippers, and you begin to realize that today is going to be a good day. That’s You Make Me Feel Like Dancing by Leo Sayer who looks like Richard Simmons and could be a long lost Bee Gee. His song is infectious and definitive of its time. It’s not even really that great a song, but it makes me smile. Great lyrics, happy upper range male voice that could have easily been a woman’s. It always makes me feel like dancing! And it reminds me of my Ellen, so there’s always that extra tidbit of joy. Join IN!",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: [`I’ll Cover You`],
    artist: ["Cast of Rent"],
    date: `November 17, 2017`,
    text: `<speak>So, in the nineties I rediscovered that I loved Broadway musicals. <break time="150ms"/> There was a time when Frank and I would venture into the city and see a show, and most of the time they were either funny or boring, but only one stuck with me for life, and that was, naturally, Jonathan Larson’s masterpiece, Rent. <break time="150ms"/> I saw it a few times, and for bragging rights, one of those times starred the original cast. <break time="150ms"/> Years later, a film adaptation was made and I was beyond ecstatic. Most of the original cast reprised their role, with the addition of Rosario Dawson as Mimi, and Tracey Thoms as Joanne. <break time="150ms"/> My Vincent was as obsessed with Rent as I, and there was a day shortly before he died, about which I’ve often spoken, when he unexpectedly showed up at my house to drive us into the village for the afternoon. On the ride in, we played the Rent film soundtrack and sung, badly, along. <break time="250ms"/> It was a healing day for our relationship, and in the moments that followed that day, we were brought back to when we first found each other and became what we eventually did to each other. <break time="150ms"/>He was MY Angel Dumott Schunard, and I think we both knew, that day, that he wasn’t long for this world. <break time="250ms"/>I cannot hear this song without welling up. I listen to the reprise of I’ll Cover You, which is sung at Angel’s funeral, and I am overwhelmed with the harmonies, and I am reminded that you can’t buy love, you can only rent it. <break time="150ms"/> It’s fleeting and limited, so when you have it, hold it and cover it and protect it.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/34_RENT_Final.mp3"/></speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 34,
    year: [1996],
    genre: ``,
    significantHoomans: ["Vinny"],
    youtube: ["https://www.youtube.com/watch?v=Fi9srqFqCFo"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "I’ll Cover You [Reprise]",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/34_RENT.jpg",
        textContent: {
          artist: "Artist: Cast of Rent",
          countdown: "Day 34 (52 to 52)",
          primaryText:
            "So, in the nineties I rediscovered that I loved Broadway musicals. There was a time when Frank and I would venture into the city and see a show, and most of the time they were either funny or boring, but only one stuck with me for life, and that was, naturally, Jonathan Larson’s masterpiece, Rent. I saw it a few times, and for bragging rights, one of those times starred the original cast. Years later, a film adaptation was made and I was beyond ecstatic. Most of the original cast reprised their role, with the addition of Rosario Dawson as Mimi and Tracey Thoms as Joanne. My Vincent was as obsessed with Rent as I, and there was a day shortly before he died, about which I’ve often spoken, when he unexpectedly showed up at my house to drive us into the village for the afternoon. On the ride in, we played the Rent film soundtrack and sung, badly, along. It was a healing day for our relationship, and in the moments that followed that day, we were brought back to when we first found each other and became what we eventually did to each other. He was MY Angel Dumott Schunard, and I think we both knew, that day, that he wasn’t long for this world. I cannot hear this song without welling up. I listen to the reprise of I’ll Cover You, which is sung at Angel’s funeral, and I am overwhelmed with the harmonies, and I am reminded that you can’t buy love, you can only rent it. It’s fleeting and limited, so when you have it, hold it and cover it and protect it.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["I Saw The Light", `Hello It’s Me`],
    artist: ["Todd Rundgren", "Todd Rundgren"],
    date: `November 18, 2017`,
    text: `<speak>Continuing along the lines of childhood memories, these two Rundgren gems are right in the sweet spot of my A.M. Radio memories. Mom, Sis, Greg and Linda. <break time="250ms"/>I Saw The Light is, by far, one of those that brings me right back to the park, to the trees, to my sister and my mom. <break time="150ms"/> I think I could lose myself in the tambourine toward the end of the song. <break time="250ms"/>Hello, It’s Me, however, is more of a throwback. I remember it as a kid, but it came about more prevalently for me as an adult, maybe some time in the nineties when I was in my era of self-discovery. The root is still nostalgia, but the sound was still so current and it could have been a song on the radio at the moment. This is one of those moments in music history that is just perfection. Beautiful harmonies, melancholy but bittersweet lyrics.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/33_Todd_Rundgren_Final.mp3"/></speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 33,
    year: [1972, 1972],
    genre: ``,
    significantHoomans: ["Angie", "Rosemarie", "Greg", "Linda"],
    youtube: [
      "https://www.youtube.com/watch?v=xoX52Sua8Oc",
      "https://www.youtube.com/watch?v=lLeCB7Kn-VE",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "I Saw The Light / Hello, It’s Me",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/33_Todd_Rundgren.jpg",
        textContent: {
          artist: "Artist: Todd Rundgren",
          countdown: "Day 33 (52 to 52)",
          primaryText:
            "Continuing along the lines of childhood memories, these two Rundgren gems are right in the sweet spot of my AM Radio memories. Mom, Sis, Greg & Linda. I Saw The Light is, by far, one of those that brings me right back to the park, to the trees, to my sister and my mom. I think I could lose myself in the tambourine toward the end of the song. Hello, It’s Me, however, is more of a throwback. I remember it as a kid, but it came about more prevalently for me as an adult, maybe some time in the nineties when I was in my era of self-discovery. The root is still nostalgia, but the sound was still so current and it could have been a song on the radio at the moment. This is one of those moments in music history that is just perfection. Beautiful harmonies, melancholy but bittersweet lyrics.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Barely Breathing"],
    artist: ["Duncan Sheik"],
    date: `November 19, 2017`,
    text: `<speak>1997 was NOT a good year for me, as most of you know, so having a song from that year be one of my favorites of all time actually says something. <break time="150ms"/> Adorkably white and sideburney, with his guitar all slingy like a pre-Hispter, Duncan Sheik stole my heart and ears with the song, Barely Breathing. <break time="150ms"/> It’s a catchy tune about a guy that’s being led by a master manipulator who finally comes to his senses. One of the best pop songs of our time, in my opinion, it was also in the top 10 one-hit wonders of the nineties. <break time="150ms"/> It always burdened me that Duncan Sheik didn’t have a string of hits to follow this. <break time="150ms"/> Much to my heart’s content, though, he wrote the music for one of my favorite Broadway musicals, Spring Awakening, so there’s always that.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/32_Barely_Breathing_Final.mp3"/></speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 32,
    year: [1996],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=A-oh-tP6RvA"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Barely Breathing",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/32_Barely_Breathing_Duncan_Sheik.jpeg",
        textContent: {
          artist: "Artist: Duncan Sheik",
          countdown: "Day 32 (52 to 52)",
          primaryText:
            "1997 was NOT a good year for me, as most of you know, so having a song from that year be one of my favorites of all time actually says something. Adorkably white and sideburney with his guitar all slingy like a pre-Hispter, Duncan Sheik stole my heart and ears with Barely Breathing. It’s a catchy tune about a guy that’s being led by a master manipulator who finally comes to his senses. One of the best pop songs of our time, in my opinion, it was also in the top 10 one-hit wonders of the nineties. It always burdened me that Duncan Sheik didn’t have a string of hits to follow this; much to my heart’s content, though, he wrote the music for one of my favorite Broadway musicals, Spring Awakening, so there’s always that.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Love Will Keep Us Together"],
    artist: ["The Captain and Tennille"],
    date: `November 20, 2017`,
    text: `<speak>More seventies! Love Will Keep Us Together is the ultimate sound of the seventies, in my opinion. We’re talking about the scissorific voice of Toni Tennille with her short ‘n sassy hair style, that took the country by storm. <break time="150ms"/> A beautiful contrast to her Captain who sat across in his silly sailor hat, looking lovingly at his wife as they let love (and dueling pianos) keep them together. <break time="150ms"/> Confident in her knowledge that she knows how to keep her man. Great lyrics. I LOVED the way she’d say, 'Whateva!' <break time="150ms"/> I challenge you to listen to this song and not sway or sing along.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/31_Love_Will_Keep_Us_Together_Final.mp3"/></speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 31,
    year: [1975],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=_QNEf9oGw8o"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Love Will Keep Us Together",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/31_LoveWillKeepUsTogether.jpeg",
        textContent: {
          artist: "Artist: The Captain & Tennille",
          countdown: "Day 31 (52 to 52)",
          primaryText:
            "More seventies! Love Will Keep Us Together is the ultimate sound of the seventies, in my opinion. We’re talking about the scissorific voice of Toni Tennille with her short ‘n sassy hair style that took the country by storm. A beautiful contrast to her Captain who sat across in his silly sailor hat, looking lovingly at his wife as they let love (and dueling pianos) keep them together. Confident in her knowledge that she knows how to keep her man. Great lyrics. I LOVED the way she’d say, 'Whateva!' I challenge you to listen to this song and not sway or sing along.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["You Could Have Been With Me", "Almost Over You"],
    artist: ["Sheena Easton", "Sheena Easton"],
    date: `November 21, 2017`,
    text: `<speak>Sheena Easton blasted onto the pop scene in my favorite year with Morning Train, that kitschy classic which evokes an earworm as big as Rick Astley’s Never Gonna Give You Up. <break time="150ms"/> But when the glamorous Scot released these two ballads, You Could Have Been With Me and Almost Over You, I was bowled over. <break time="150ms"/> Not since Olivia Newton-John was I as enamored with a glorious back-lit mulleted goddess, until Sheena showed up belting out brokenhearted ballads about loss and regret. <break time="150ms"/> Strangely enough it wouldn’t be for another eleven or so years that I would actually come to experience the feeling about which Sheena sang in both of these songs. And in retrospect, I kind of wish I’d never come to know these emotions the way I did slash kind of still do.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/30_Sheena_Final.mp3"/></speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 30,
    year: [1981, 1983],
    genre: ``,
    significantHoomans: ["Adam"],
    youtube: [
      "https://www.youtube.com/watch?v=aRnGv9l8UD8",
      "https://www.youtube.com/watch?v=5-NAybplCXo",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "You Could Have Been With Me / Almost Over You",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/30_Sheena.jpeg",
        textContent: {
          artist: "Artist: ",
          countdown: "Day 30 (52 to 52)",
          primaryText:
            "Sheena Easton blasted onto the pop scene in my favorite year with Morning Train, that kitschy classic which evokes an earworm as big as Rick Astley’s Never Gonna Give You Up. But when the glamorous Scot released these two ballads, You Could Have Been With Me and Almost Over You, I was bowled over. Not since Olivia Newton-John was I as enamored with a glorious back-lit mulleted goddess until Sheena showed up belting out brokenhearted ballads about loss and regret. Strangely enough it wouldn’t be for another eleven or so years that I would actually come to experience the feeling about which Sheena sang in both of these songs. And in retrospect, I kind of wish I’d never come to know these emotions the way I did/ kind of still do.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Lead Me On"],
    artist: ["Maxine Nightingale"],
    date: `November 22, 2017`,
    text: `<speak>Among the sea of ballads from my early teens is this lost classic, by the diva who gave us Right Back Where We Started From, a song that was played at every single one of my junior high school dances. But that’s not the song I love best by Miss Maxine Nightingale. <break time="150ms"/> The one I love is Lead Me On. <break time="150ms"/> I remember hearing it on the radio, in my room in the Poconos, amid the Casey Kasem top 40 countdowns, and for whatever reason it just stuck to my skin. Anyone who knows me knows that I am still baffled why a period of time in my life that has been recorded as the most trying and most isolated is also the time period from which my most favorite music was born. <break time="150ms"/> I can close my eyes and hear it as if for the first time, in Roberta’s basement or in my wood-paneled bedroom.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/29_Lead_Me_On_Final.mp3"/></speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 29,
    year: [1979],
    genre: ``,
    significantHoomans: ["Roberta"],
    youtube: ["https://www.youtube.com/watch?v=dg0Epvs6dOg"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Lead Me On",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/29_Lead_Me_On.jpg",
        textContent: {
          artist: "Artist: Maxine Nightingale",
          countdown: "Day 29 (52 to 52)",
          primaryText:
            "Among the sea of ballads from my early teens is this lost classic by the diva who gave us Right Back Where We Started From, a song that was played at every single one of my junior high school dances. But that’s not the song I love best by Miss Maxine Nightingale. The one I love is Lead Me On. I remember hearing it on the radio in my room in the Poconos amid the Casey Kasem top 40 countdowns, and for whatever reason it just stuck to my skin. Anyone who knows me knows that I am still baffled why a period of time in my life that has been recorded as the most trying and most isolated is also the time period from which my most favorite music was born. I can close my eyes and hear it as if for the first time, in Roberta’s basement or in my wood-paneled bedroom.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["You Know I’m No Good", "Back To Black"],
    artist: ["Amy Winehouse", "Amy Winehouse"],
    date: `November 23, 2017`,
    text: `<speak>We can all agree Amy Winehouse’s career, her life, was way too short. <break time="150ms"/> She was a powerhouse vocalist in a vague time of pop hits sounding one like the other. Suddenly we’re gifted with this unique retro-sounding singer, a slight little thing with an old soul, damaged as it was. <break time="150ms"/> She burst into the pop scene with Rehab, indisputably her greatest hit, but I fell in love with her sound when I first saw the opening credits for the Showtime series, Secret Diary of a Call Girl. <break time="150ms"/> The song was You Know I’m No Good. <break time="150ms"/> I thought to myself, who the fuck is this singer? Then I heard Back To Black and that was it. <break time="150ms"/> It prompted me to start listening to Amy’s song list, and I was blown away. The marriage of her smoky voice with the elegant sounds of her band, I could not get enough. I don’t even care about any of the lyrics; I could listen to her voice inside this retro soul sound for days. And then like that, she left us because she was a tortured artist who just didn’t know how else to make her pain go away. So sad.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/28_Amy_Winehouse_Final.mp3"/></speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 28,
    year: [2006, 2006],
    genre: ``,
    significantHoomans: [],
    youtube: [
      "https://www.youtube.com/watch?v=b-I2s5zRbHg",
      "https://www.youtube.com/watch?v=TJAfLE39ZZ8",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "You Know I’m No Good / Back To Black",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/28_Amy_Winehouse.jpeg",
        textContent: {
          artist: "Artist: Amy Winehouse",
          countdown: "Day 28 (52 to 52)",
          primaryText:
            "We can all agree Amy Winehouse’s career, her life, was way too short. She was a powerhouse vocalist in a vague time of pop hits sounding one like the other. Suddenly we’re gifted with this unique retro-sounding singer, a slight little thing with an old soul, damaged as it was. She burst into the pop scene with Rehab, indisputably her greatest hit, but I fell in love with her sound when I first saw the opening credits for the Showtime series Secret Diary of a Call Girl. The song was You Know I’m No Good. I thought to myself, who the fuck is this singer? Then I heard Back To Black and that was it. It prompted me to start listening to Amy’s song list, and I was blown away. The marriage of her smoky voice with the elegant sounds of her band, I could not get enough. I don’t even care about any of the lyrics; I could listen to her voice inside this retro soul sound for days. And then like that, she left us because she was a tortured artist who just didn’t know how else to make her pain go away. So sad.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["I Will Survive"],
    artist: ["Gloria Gaynor"],
    date: `November 24, 2017`,
    text: `<speak>I don’t know how I missed this one on the previous two years’ worth of countdowns. <break time="150ms"/> K-Tel Record in hand, hairbrush in the other, 13-year-old me popped that sucker on the turntable and played the grooves outta this record. And lip-sync’d every word like a Jr. Drag Supastar! <break time="150ms"/> Don’t tell me you don’t do the exact same thing any and every time you hear this song, ‘cause you know you do. <break time="150ms"/> And that’s what this song was meant for, to belt out as you sing along. Because no matter your situation, you KNOW you will survive. <break time="150ms"/>As will I. <break time="150ms"/> Thank you, Mother Gaynor.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/27_I_Will_Survive_Final.mp3"/></speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 27,
    year: [1978],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=FHhZPp08s74"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "I Will Survive",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/27_I_Will_Survive.jpeg",
        textContent: {
          artist: "Artist: Gloria Gaynor",
          countdown: "Day 27 (52 to 52)",
          primaryText:
            "I don’t know how I missed this one on the previous two years’ worth of countdowns. K-Tel Record in hand, hairbrush in the other, 13-year-old me popped that sucker on the turntable and played the grooves outta this record. And lip-sync’d every word like a Jr. Drag Supastar! Don’t tell me you don’t do the exact same thing any and every time you hear this song, ‘cause you know you do. And that’s what this song was meant for, to belt out as you sing along. Because no matter your situation, you KNOW you will survive. As will I. Thank you, Mother Gaynor.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["You Oughtta Know"],
    artist: ["Alanis Morissette"],
    date: `November 25, 2017`,
    text: `<speak>I remember exactly where I was the first time I heard this powerful, stirring song by one of the giants of the nineties, Alanis Morissette. <break time="150ms"/> You Oughtta Know is an anthem for any woman, any person, who’d ever been lied to and left for someone else, or maybe had been otherwise scorned. She was a ragged mess of a woman in the video, and it matched the tone of the song – threatening and confident. <break time="150ms"/> It meant something to me too, and at the time it was hard for me to admit that because the truth was, I was technically the bad guy AND I was in a new relationship myself. But you know me, the past-dweller. So I focused on the anger and the lyrics of this song.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/26_You_Oughta_Know_Final1.mp3"/> I think not since Heart had we been exposed to such raw, emotional vocals in a hard rock style song. It was a woman’s answer to what Nirvana had ushered in a few years before and the timing was perfect, as we were all ready for this onslaught of uber-talented rock chicks that would follow.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/26_You_Oughta_Know_Final2.mp3"/></speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 26,
    year: [1995],
    genre: ``,
    significantHoomans: ["Frank"],
    youtube: ["https://www.youtube.com/watch?v=NPcyTyilmYY"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "You Oughtta Know",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/26_You_Oughta_Know.jpeg",
        textContent: {
          artist: "Artist: Alanis Morissette",
          countdown: "Day 26 (52 to 52)",
          primaryText:
            "I remember exactly where I was the first time I heard this powerful, stirring song by one of the giants of the nineties, Alanis Morissette. You Oughtta Know is an anthem for any woman, any person, who’d ever been lied to and left for someone else, or maybe had been otherwise scorned. She was a ragged mess of a woman in the video, and it matched the tone of the song – threatening and confident. It meant something to me too, and at the time it was hard for me to admit that because the truth was, I was technically the bad guy AND I was in a new relationship myself. But you know me, the past-dweller. So I focused on the anger and the lyrics of this song. (Did you forget about me, Mr. Duplicity? I hate to bug you in the middle of dinner. There was a slap in the face, how quickly I was replaced And are you thinking of me when you fuck her??) I think not since Heart had we been exposed to such raw, emotional vocals in a hard rock style song. It was a woman’s answer to what Nirvana had ushered in a few years before and the timing was perfect, as we were all ready for this onslaught of uber-talented rock chicks that would follow.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Shadows Of The Night"],
    artist: ["Pat Benatar"],
    date: `November 26, 2017`,
    text: `<speak>You know me, I love my eighties mullet goddesses.<break time="150ms"/> Benatar is one of them. Too many hits to list, each one deserving of the title.<break time="150ms"/> In fact, one of the very first 45s I ever bought with my own allowance was Hit Me With Your Best Shot. And Love Is A Battlefield will always remain one of my all-time favorite songs by any artist ever, but Shadows Of The Night is when I first realized what a fucking amazing singer this woman was slash is. The song is a little repetitive, but that’s ok when it comes to Pat, because more Pat is better than less Pat. <break time="150ms"/>Plus it just kicks ass. Listen to it. It’s amazing. Close your eyes and feel it. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/25_Shadows_Of_The_Night.jpg_Final.mp3"/></speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 25,
    year: [1982],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=ZInRE-KryGA"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Shadows Of The Night",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/25_Shadows_Of_The_Night.jpg",
        textContent: {
          artist: "Artist: Pat Benatar",
          countdown: "Day 25 (52 to 52)",
          primaryText:
            "You know me, I love my eighties mullet goddesses. Benatar is one of them. Too many hits to list, each one deserving of the title. In fact, one of the very first 45s I ever bought with my own allowance was Hit Me With Your Best Shot, and Love Is A Battlefield will always remain one of my all-time favorite songs by any artist ever, but Shadows Of The Night is when I first realized what a fucking amazing singer this woman was/is. The song is a little repetitive, but that’s ok when it comes to Pat because more Pat is better than less Pat. Plus it just kicks ass. Listen to it. It’s amazing. Close your eyes and feel it. ",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["I Just Died In Your Arms"],
    artist: ["Cutting Crew"],
    date: `November 27, 2017`,
    text: `<speak>There’s something about the puffy start of the song that sucks me in. It’s one of those songs that has convinced me I can sing karaoke. <break time="150ms"/> In my head, I hear the word quintessential when this song comes on, as, to me it defines the sound of the era so perfectly. It was that transition of M.T.V. to VH1, when both stations played music videos, but the ones on VH1 seemed to cater more to my aesthetic. Is the song good? Not really. Are the lyrics meaningful? Ask my cousin Dina about how the phrase ‘loving by proxy’ just basically unhinges her. <break time="250ms"/> But the overall sound of this song makes me feel something, and a lot of it.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/24_I_Just_Died_Final.mp3"/></speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 24,
    year: [1987],
    genre: ``,
    significantHoomans: ["Dina"],
    youtube: ["https://www.youtube.com/watch?v=6dOwHzCHfgA"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "[I Just] Died In Your Arms",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/24_I_Just_Died.jpeg",
        textContent: {
          artist: "Artist: Cutting Crew",
          countdown: "Day 24 (52 to 52)",
          primaryText:
            "There’s something about the puffy start of the song that sucks me in. It’s one of those songs that has convinced me I can sing karaoke. In my head I hear the word quintessential when this song comes on, as, to me it defines the sound of the era so perfectly. It was that transition of MTV to VH1 when both stations played music videos but the ones on VH1 seemed to cater more to my aesthetic. Is the song good? Not really. Are the lyrics meaningful? Ask my cousin Dina about how the phrase ‘loving by proxy’ just basically unhinges her... But the overall sound of this song makes me feel something, and a lot of it.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Emotion"],
    artist: ["Samantha Sang"],
    date: `November 28, 2017`,
    text: `<speak>1978 was rich with songs like this, especially on the heels of the phenomenon called Saturday Night Fever. <break time="150ms"/>The Bee Gees could quite literally do no wrong. So even the songs they didn’t actually sing lead vocals on would soar up the charts, just like Emotion, by Samantha Sang. <break time="150ms"/> I confess that I have never seen this video, the definition of cheese, EVER until today. <break time="150ms"/> I don’t think I even ever knew what she looked like! But here she is, in her Dazzler-esque pantsuit, and her Farrah Fawcett-Majors hair, ushering in the world of back-lighting and smoke! <break time="150ms"/> I also confess that I lip-sync’d the shit out of this song too, and it occurs to me that it’s no wonder my mom always knew I was a giant homo!<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/23_Emotion_Final.mp3"/></speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 23,
    year: [1978],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=zPwpVJ-eIgg"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Emotion",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/23_Samantha_Sang_Emotion.jpeg",
        textContent: {
          artist: "Artist: Samantha Sang",
          countdown: "Day 23 (52 to 52)",
          primaryText:
            "1978 was rich with songs like this, especially on the heels of the phenomenon called Saturday Night Fever. The Bee Gees could quite literally do no wrong. So even the songs they didn’t actually sing lead vocals on would soar up the charts, like Emotion by Samantha Sang. I confess that I have never seen this video, the definition of cheese, EVER until today. I don’t think I even ever knew what she looked like! But here she is in her Dazzler-esque pantsuit and her Farrah Fawcett-Majors hair, ushering in the world of back-lighting and smoke! I also confess that I lip-sync’d the shit out of this song too, and it occurs to me that it’s no wonder my mom always knew I was a giant homo!",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Tragedy"],
    artist: ["The Bee Gees"],
    date: `November 29, 2017`,
    text: `<speak>A staple of seventies music, the Bee Gees were responsible for a million hits of their own, as well as creating monster records for other recording artists, like yesterday’s golden gumdrop, Emotion. <break time="150ms"/> And although I wore the grooves out (pun intended!) of the Saturday Night Fever soundtrack, it’s strange that my favorite of all Bee Gees songs isn’t from that album. <break time="150ms"/> It is, however, another in the defining disco swell. <break time="150ms"/> Presenting Tragedy. <break time="150ms"/>I feel like it actually belonged on the S.N.F. soundtrack, but somehow got axed. <break time="150ms"/> It’s such a good retrospective disco tune, but it was released amid the Death to Disco era, when I was sentenced to my wood-paneled bedroom in the Poconos. I didn’t actually enjoy it as much back then because it was hard to enjoy anything this good without being terrified of the bashing I’d get by brothers or by assholes at Pocono Mountain High School.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/22_Tragedy_Final.mp3"/></speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 22,
    year: [1979],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=MSVTOMkJdqs"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Tragedy",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/22_Tragedy.jpg",
        textContent: {
          artist: "Artist: The Bee Gees",
          countdown: "Day 22 (52 to 52)",
          primaryText:
            "A staple of seventies music, the Bee Gees were responsible for a million hits of their own as well as creating monster records for other recording artists, like yesterday’s golden gumdrop Emotion. And although I wore the grooves out (pun intended!) of the Saturday Night Fever soundtrack, it’s strange that my favorite of all Bee Gees songs isn’t from that album. It is, however, another in the defining disco swell. Presenting Tragedy. I feel like it actually belonged on the SNF soundtrack but somehow got axed. It’s such a good retrospective disco tune, but it was released amid the 'Death to Disco' era when I was sentenced to my wood-paneled bedroom in the Poconos. I didn’t actually enjoy it as much back then because it was hard to enjoy anything this good without being terrified of the bashing I’d get by brothers or by assholes at Pocono Mountain High School.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Shame"],
    artist: ["Evelyn Champagne King"],
    date: `November 30, 2017`,
    text: `<speak>Okay, how did this song not make my top 50 to 50? This is classic disco at its finest. <break time="150ms"/> Shame, by Evelyn 'Champagne' King is what disco feels like. What it means. <break time="250ms"/>Shame is not only a great disco song; it’s just a great SONG in general.  It’s the perfect balance of sing-along lyrics, hip dance moves, and everything that was swoon-worthy about the late seventies. <break time="150ms"/>Every time I hear this song, I blast it. Because how can you not? <break time="250ms"/>Also, how dare we ALL not have a fun, quoted middle name like 'Champagne'? <break time="150ms"/>Go ahead, choose yours!<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/21_Shame_Final.mp3"/></speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 21,
    year: [1977],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=OMbty5vEBGU"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Shame",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/21_Shame.jpg",
        textContent: {
          artist: "Artist: Evelyn 'Champagne' King",
          countdown: "Day 21 (52 to 52)",
          primaryText:
            "Okay, how did this song not make my top 50 to 50? This is classic disco at its finest. Shame by Evelyn 'Champagne' King is what disco feels like, what it means. Shame is not only a great disco song; it’s just a great SONG. It’s the perfect balance of sing-along lyrics, hip dance moves, and everything that was swoon-worthy about the late seventies. Every time I hear this song, I blast it. Because how can you not? Also, how dare we ALL not have a fun, quoted middle name like 'Champagne'? Go ahead, choose yours!",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["All The Man That I Need"],
    artist: ["Whitney Houston"],
    date: `December 1, 2017`,
    text: `<speak>The first time I fell in love, real love, with someone who was my equal, my friend, my lover, was at the end of 1990. Many of you know who this boy was, and some of you went through all my self-induced drama with me in those formative years. <break time="150ms"/> Needless to say there are MANY songs that remind me of him, but most of those are sad ones that followed the break-up, when my heart was tender, bleeding like an open wound. <break time="150ms"/>(No mentioning names, let’s protect the innocent here.) Today’s song, however, is the sensation, the passion of the newness that was the start of that beautiful relationship. During the apex of Whitney’s career, she released an album that, of course, I played to death, and among the most played was All The Man That I Need. <break time="250ms"/>Even now, I can hear it and picture his face. We were so perfectly matched. We were those young guys in love that everyone hates, the ones who, if it were today, would be blasting their romance all over social media. Well, maybe that would just have been me, because I was out loud and he was still silent, and that’s what took him from me: my own blasted impatience. <break time="150ms"/> I could talk about this subject forever. I could tell you he’s the one that got away, and that would be an insult to my current Woof whom I love to the moon and back. So instead, let’s just listen to Whitney.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/20_All_The_Man_That_I_Need_Final.mp3"/></speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 20,
    year: [1990],
    genre: ``,
    significantHoomans: ["Adam"],
    youtube: ["https://www.youtube.com/watch?v=3WH1Ma50QUk"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "All The Man That I Need",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/20_All_the_Man_That_I_Need.jpeg",
        textContent: {
          artist: "Artist: Whitney Houston",
          countdown: "Day 20 (52 to 52)",
          primaryText:
            "The first time I fell in love, real love, with someone who was my equal, my friend, my lover, was at the end of 1990. Many of you know who this boy was, and some of you went through all my self-induced drama with me in those formative years… Needless to say there are MANY songs that remind me of him, but most of those are sad ones that followed the break-up when my heart was tender, bleeding like an open wound. (No mentioning names, let’s protect the innocent here.) Today’s song, however, is the sensation, the passion of the newness that was the start of that beautiful relationship. During the apex of Whitney’s career, she released an album that, of course, I played to death, and among the most played was All The Man That I Need. Even now I can hear it and picture his face. We were so perfectly matched. We were those young guys in love that everyone hates, the ones who, if it were today, would be blasting their romance all over social media. Well, maybe that would just have been me, because I was out loud and he was still silent, and that’s what took him from me: my own blasted impatience. I could talk about this subject forever. I could tell you he’s the one that got away, and that would be an insult to my current Woof whom I love to the moon and back. So instead, let’s just listen to Whitney.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["By Your Side"],
    artist: ["Sade"],
    date: `December 2, 2017`,
    text: `<speak>By Your Side, by Sade, is one of those songs whose message didn’t quite resonate with me until many years after its release. <break time="150ms"/> First of all, let’s discuss Sade. <break time="150ms"/>This chick is a mega-talent. Understated vocals, years and years of hits, responsible for a brand of music that still holds up today as if you’re hearing it for the first time. Almost a jazz-blues-pop fusion with vocals that stick to your soul like honey. <break time="150ms"/> Years after my split from Frank, when I was certain I was going to die alone by choice, the realities of mortality crashed into my house with news of my sister’s stage 4 ovarian cancer and my own lung gnome surgery in 2004. <break time="150ms"/>The lyrics of this song mean everything to me; despite everything that went bad in our relationship, Frank was still there for me each step of the way. In spite of my complaining about it to all my friends, I’m still thankful he stayed a part of my life, a part of my family. Not sure why I connect the two, but this song is my thank you note to Frank, and by extension Tony, for never letting me be alone, for never letting me down, for helping me redefine the word family. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/21_Shame_Final.mp3"/></speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 19,
    year: [2000],
    genre: ``,
    significantHoomans: ["Frank"],
    youtube: ["https://www.youtube.com/watch?v=C8QJmI_V3j4"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "By Your Side",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/19_By_Your_Side.jpg",
        textContent: {
          artist: "Artist: Sade",
          countdown: "Day 19 (52 to 52)",
          primaryText:
            "By Your Side by Sade is one of those songs whose message didn’t quite resonate with me until many years later after its release. First of all, let’s discuss Sade. This chick is a mega-talent. Understated vocals, years and years of hits, responsible for a brand of music that still holds up today as if you’re hearing it for the first time. Almost a jazz-blues-pop fusion with vocals that stick to your soul like honey. Years after my split from Frank, when I was certain I was going to die alone by choice, the realities of mortality crashed into my house with news of my sister’s stage 4 ovarian cancer and my own 'lung gnome' surgery in 2004. The lyrics of this song mean everything to me; despite everything that went bad in our relationship, Frank was still there for me each step of the way. In spite of my complaining about it to all my friends, I’m still thankful he stayed a part of my life, a part of my family. Not sure why I connect the two, but this song is my thank you note to Frank, and by extension Tony, for never letting me be alone, for never letting me down, for helping me redefine the word family. ",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: [`Please Don’t Go`],
    artist: ["KC And The Sunshine Band"],
    date: `December 3, 2017`,
    text: `<speak>When a disco/R and B band releases a ballad, it’s usually lost in the shuffle, but Please Don’t Go not only went very noticed. <break time="150ms"/> It also got a nineties cover version, and became a big hit for K.W.S in 1992, as they turned the ballad back into a club song. But I loved this song when I was 'scared Nicky', back in the early Poconos days, when I would yearn to go back home to visit my friends and my cousin Cristine. I remember, almost vividly, going by her friend’s house down the block and playing 45s on the turntable, listening to Donna Summer and M and Styx. <break time="150ms"/> But it was Please Don’t Go that tethers me to that moment, to my cousin who was also my friend. And still is. <break time="150ms"/> So when I hear this song I sway, and when, after 2 minutes or so in, the beat begins to build, I close my eyes and see me and my little baby Stink-Ho way before all the pain of adult life. If only there was a time machine<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/"/></speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 18,
    year: [1979],
    genre: ``,
    significantHoomans: ["Cristine"],
    youtube: ["https://www.youtube.com/watch?v=w-l5FyA3pgo"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Please Don’t Go",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/18_Please_Dont_Go.jpg",
        textContent: {
          artist: "Artist: KC And The Sunshine Band",
          countdown: "Day 18 (52 to 52)",
          primaryText:
            "When a disco/R&B band releases a ballad, it’s usually lost in the shuffle, but Please Don’t Go not only went very noticed, it also got a nineties cover version and became a big hit for KWS in 1992 as they turned the ballad back into a club song. But I loved this song when I was “scared Nicky”, back in the early Poconos days when I would yearn to go back home to visit my friends and my cousin Cristine. I remember, almost vividly, going by her friend’s house down the block and playing 45s on the turntable, listening to Donna Summer and M and Styx, but it was Please Don’t Go that tethers me to that moment, to my cousin who was also my friend. And still is. So when I hear this song I sway, and when, after 2 minutes or so in, the beat begins to build, I close my eyes and see me and my little baby Stink-Ho way before all the pain of adult life. If only there was a time machine",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["What If"],
    artist: ["Kate Winslet"],
    date: `December 4, 2017`,
    text: `<speak>Did you ever come across something so random and amazing that you wonder how no one else knows about it? <break time="150ms"/> Imagine the spin of my head when I first heard this beautiful, regret-filled ballad, by Oscar winning actor Kate Winslet? It was backward discovery: the song caught my attention as background on one of those Music Choice channels that people put on at parties or whatever. What a pretty but melancholy song, I thought to myself; I wonder who this is singing? I looked at the TV and saw her name. <break time="150ms"/> Then I saw that it is the only single released from an animated motion picture for which she provided a voice. Christmas Carol: The Movie. <break time="150ms"/>I never even knew of that movie’s existence. If you know me, you know that I ADORE Kate Winslet. I have loved her in every single film I’ve ever seen her in, including those that don’t show her in glamorous gowns. So to have the knowledge that she also sings beautifully was a boon.<break time="150ms"/> Once this song became part of my life, I began creating a playlist of ballads by women (including contemporary ballad, I Wanna Be With You, by Mandy Moore, which almost made this year’s list but got bumped for Kate) and even burned it onto a CD for my car. <break time="150ms"/> I played that CD to death, always going back to this beautiful moment by Kate Winslet, sometimes equating my own What If’s into the scenario (I know, shocking) <break time="150ms"/>I hope you enjoy this song, and perhaps, because of me, you are also discovering it for the very first time.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/17_What_If_Final.mp3"/></speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 17,
    year: [],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=_vId_4r925o"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "What If",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/17_What_If.jpeg",
        textContent: {
          artist: "Artist: Kate Winslet",
          countdown: "Day 17 (52 to 52)",
          primaryText:
            "Did you ever come across something so random and amazing that you wonder how no one else knows about it? Imagine the spin of my head when I first heard this beautiful, regret-filled ballad by Oscar winning actor Kate Winslet? It was backward discovery: the song caught my attention as background on one of those Music Choice channels that people put on at parties or whatever. What a pretty but melancholy song, I thought to myself; I wonder who this is singing? I looked at the TV and saw her name. Then I saw that it is the only single released from an animated motion picture for which she provided a voice, 'Christmas Carol: The Movie'. I never even knew of that movie’s existence. If you know me, you know that I ADORE Kate Winslet. I have loved her in every single film I’ve ever seen her in, including those that don’t show her in glamorous gowns. So to have the knowledge that she also sings beautifully was a boon. Once this song became part of my life, I began creating a playlist of ballads by women (including contemporary ballad I Wanna Be With You by Mandy Moore, which almost made this year’s list but got bumped for Kate) and even burned it onto a CD for my car. I played that CD to death, always going back to this beautiful moment by Kate Winslet, sometimes equating my own What If’s into the scenario (I know, shocking…) I hope you enjoy this song, and perhaps, because of me, you are also discovering it for the very first time.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Wicked Little Town"],
    artist: ["Hedwig And The Angry Inch"],
    date: `December 5, 2017`,
    text: `<speak>I discovered the film adaptation of this small off-Broadway show called Hedwig and the Angry Inch, sometime in the mid-00s. <break time="150ms"/> I immediately fell in love with everything about it: the damaged protagonist, every song she wrote and belted out, and mostly the song that was stolen from her by her former love. <break time="150ms"/> There’s something provocatively heartbreaking about the desperate need for acceptance told in Wicked Little Town. <break time="150ms"/>I think we’ve all walked alone though some wicked little town once or twice in our lives. It’s a song that offers a shoulder to lean on, a hand to hold through all the dark and trying times. <break time="150ms"/> The song has two iterations in the show; one sung by Hedwig herself and the other, the stolen version sung by Tommy Gnosis. <break time="150ms"/>Tommy’s version is a tragic apology that cuts me every single time. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/16_Hedwig_Final.mp3"/></speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 16,
    year: [1999],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=ZlW6FBEuKiE"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Wicked Little Town",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/16_Hedwig.jpeg",
        textContent: {
          artist: "Artist: Hedwig & The Angry Inch",
          countdown: "Day 16 (52 to 52)",
          primaryText:
            "I discovered the film adaptation of this small off-Broadway show called Hedwig and the Angry Inch sometime in the mid-00s. I immediately fell in love with everything about it: the damaged protagonist, every song she wrote and belted out, and mostly the song that was stolen from her by her former love. There’s something provocatively heartbreaking about the desperate need for acceptance told in Wicked Little Town. I think we’ve all walked alone though some wicked little town once or twice in our lives. It’s a song that offers a shoulder to lean on, a hand to hold through all the dark and trying times. The song has two iterations in the show; one sung by Hedwig herself and the other, the stolen version sung by Tommy Gnosis. Tommy’s version is a tragic apology that cuts me every single time.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Stay I Missed You"],
    artist: ["Lisa Loeb And Nine Days"],
    date: `December 6, 2017`,
    text: `<speak>Beautiful in its quiet plainness. <break time="250ms"/> To me this is one of the best pop ballads of the ninties, a true one-hit wonder that helped energize the rise of female pop artists. <break time="150ms"/> Lisa and her horn-rimmed glasses have HAD IT, and she is moving on, and she is tired of being held back because he tells her to. <break time="150ms"/> There’s something mesmerizing about a scene in a film, or in this case a music video, being shot all in one take. It lends to the striking simplicity of the song. <break time="150ms"/> It gives you the sense that she can’t be free, she can’t get away, but yet at the end, she does.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/15_Stay_I_Missed_You_Final.mp3"/></speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 15,
    year: [1994],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=i9HGwRbMiVY"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Stay [I Missed You]",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/15_Stay_I_Missed_You.jpg",
        textContent: {
          artist: "Artist: Lisa Loeb And Nine Days",
          countdown: "Day 15 (52 to 52)",
          primaryText:
            "Beautiful in its quiet plainness, to me this is one of the best pop ballads of the 1990s, a true one-hit wonder that helped energize the rise of female pop artists. Lisa and her horn-rimmed glasses have HAD IT and she is moving on, and she is tired of being held back because he tells her to. There’s something mesmerizing about a scene in a film, or in this case a music video, being shot all in one take. It lends to the striking simplicity of the song. It gives you the sense that she can’t be free, she can’t get away, but yet at the end, she does.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: [`Someday We’ll Know`, "You Get What You Give"],
    artist: ["New Radicals", "New Radicals"],
    date: `December 7, 2017`,
    text: `<speak>I like when an obscure song, like Someday We’ll Know, ends up on my lists. It makes me feel good to share something that means a lot to me with anyone who’ll listen. In fact, it’s good enough a song that artists like Mandy Moore and Hall and Oates (squeek!) have done cover versions. It’s a song that anguishes through the confusion over why a relationship ended. Gee, I wonder why I can connect to this one. I’m such a Predicta-Bull. <break time="150ms"/> Either way, it’s just really an honest ballad that provokes the hope that someday. <break time="1550ms"/><audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/14_New_Radicals_Final.mp3"/> Too bad the New Radicals didn’t stay together to produce more music, I really loved their sound. Their one-hit wonder You Get What You Give is also a giant favorite. It’s a bouncy representation of the times, but it’s so catchy I can never help but crank it up and sing along.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/14_New_Radicals_Final2.mp3"/></speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 14,
    year: [1998, 1998],
    genre: ``,
    significantHoomans: [],
    youtube: [
      "https://www.youtube.com/watch?v=bDmA8qQKhMY",
      "https://www.youtube.com/watch?v=DL7-CKirWZE",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Someday We’ll Know / You Get What You Give",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/14_New_Radicals.jpeg",
        textContent: {
          artist: "Artist: New Radicals",
          countdown: "Day 14 (52 to 52)",
          primaryText:
            "I like when an obscure song like Someday We’ll Know ends up on my lists. It makes me feel good to share something that means a lot to me with anyone who’ll listen. In fact, it’s good enough a song that artists like Mandy Moore and Hall & Oates (squeek!) have done cover versions. It’s a song that anguishes through the confusion over why a relationship ended. Gee, I wonder why I can connect to this one. I’m such a Predicta-Bull. Either way, it’s just really an honest ballad that provokes the hope that someday…. Too bad the New Radicals didn’t stay together to produce more music, I really loved their sound. Their one-hit wonder You Get What You Give is also a giant favorite. It’s a bouncy representation of the times but it’s so catchy I can never help but crank it up and sing along.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: [`I’m Coming Out`],
    artist: ["Diana Ross"],
    date: `December 8, 2017`,
    text: `<speak>Late in 1979, disco was in its final death throes. But some artists, and perhaps their producers, weren’t quite ready to surrender the flag just yet. <break time="150ms"/>Some disco divas were able to slip their dance hits onto the pop waves. One such diva was the supreme Diana Ross. <break time="150ms"/> Everyone alive knows this song. <break time="150ms"/>I’m Coming Out. <break time="150ms"/> How would I have known, hiding so far back in the corner of my closet that I practically smelled like cedar chips, that this was a gay coming-out song which would eventually reach anthem status? It’s a great song with infectious beats and, naturally, the tangible sound that is the voice of Miss Ross. <break time="150ms"/> It tops my playlist of songs from that favorite era of music as I can clearly remember Casey Kasem counting down to this monster hit.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/13_Im_Coming_Out_Final.mp3"/></speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 13,
    year: [1980],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=zbYcte4ZEgQ"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "I’m Coming Out",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/13_Im_Coming_Out.jpeg",
        textContent: {
          artist: "Artist: Diana Ross",
          countdown: "Day 13 (52 to 52)",
          primaryText:
            "Late in 1979, disco was in its final death throes. But some artists, and perhaps their producers, weren’t quite ready to surrender the flag just yet. Some disco divas were able to slip their dance hits onto the pop waves. One such diva was the supreme Diana Ross. Everyone alive knows this song. I’m Coming Out. How would I have known, hiding so far back in the corner of my closet that I practically smelled like cedar chips, that this was a gay coming-out song which would eventually reach anthem status? It’s a great song with infectious beats and, naturally, the tangible sound that is the voice of Miss Ross. It tops my playlist of songs from that favorite era of music as I can clearly remember Casey Kasem counting down to this monster hit.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Only The Lonely", "Suddenly Last Summer"],
    artist: ["The Motels", "The Motels"],
    date: `December 9, 2017`,
    text: `<speak><Some songs aren’t favorited for anything more than just the way they make me feel. Even after all these years. MTV-era darling Martha Davis had the kind of voice that stays with you. The lyrics don’t necessarily need to connect to you or your own experiences, but you still feel what she’s singing about. Only The Lonely, by the Motels, is such a song; the obligatory saxophone in the bridge perfects the sound of the times. <break time="150ms"/> But it’s Martha’s voice that brings forth the brilliance of that decade and what was to come. <break time="350ms"/>Then there’s Suddenly Last Summer, from the following year. <break time="150ms"/> Again, lyrics that didn’t quite apply to my life, but this song provided a feeling, an emotion with which I couldn’t help but identify. There I was in my college dorm, finally on my own but still trapped inside my own skin. Until suddenly. break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/12_Motels_Final.mp3"/></speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 12,
    year: [1982, 1983],
    genre: ``,
    significantHoomans: [],
    youtube: [
      "https://www.youtube.com/watch?v=ZaPTELylZ1s",
      "https://www.youtube.com/watch?v=b9Ox-lGm-wA",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Only The Lonely / Suddenly Last Summer",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/12_The_Motels.jpeg",
        textContent: {
          artist: "Artist: The Motels",
          countdown: "Day 12 (52 to 52)",
          primaryText:
            "Some songs aren’t favorited for anything more than just the way they make me feel. Even after all these years. MTV-era darling Martha Davis had the kind of voice that stays with you. The lyrics don’t necessarily need to connect to you or your own experiences, but you still feel what she’s singing about. Only The Lonely by the Motels is such a song; the obligatory saxophone in the bridge perfects the sound of the times. But it’s Martha’s voice that brings forth the brilliance of that decade and what was to come. Then there’s Suddenly Last Summer from the following year. Again, lyrics that didn’t quite apply to my life, but this song provided a feeling, an emotion with which I couldn’t help but identify. There I was in my college dorm, finally on my own but still trapped inside my own skin. Until suddenly",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["The Look Of Love"],
    artist: ["ABC"],
    date: `December 10, 2017`,
    text: `<speak>Talk about one of the most definitive songs of the 1980s. When you do, surely ABC’s The Look Of Love will come to mind. Poppy, bouncy and upbeat, this is a song that will always make me feel better the second it comes on the radio, no matter my mood.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/11_Look_Of_Love_Final1.mp3"/> I just can’t with this song. It’s brilliant. I don’t care how ridiculous the video is, the song is perfection. And in a time when I was still that tortured closet gay tard, I remember first hearing it when I worked in the kitchen at a restaurant; one of the waiters would come back and sing this to me, never knowing I secretly pined for him. He had slick dark hair, a south Jersey accent, and smelled like too much cologne, but he was beautiful and noticed me and sang to me. <break time="150ms"/> As if it were yesterday, I can close my eyes and feel him come up behind me and sing <break time="500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/11_Look_Of_Love_Final2.mp3"/> I quit that job after 2 days. That’s how deep in the closet I was. </speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 11,
    year: [1982],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=cNEdxZURTaI"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "The Look Of Love",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/11_Look_Of_Love.jpg",
        textContent: {
          artist: "Artist: ABC",
          countdown: "Day 11 (52 to 52)",
          primaryText: "",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Better Off Alone"],
    artist: ["Alice Deejay"],
    date: `December 11, 2017`,
    text: `<speak>Here’s an interesting combination: thumping house music with limited lyrics asking repeatedly, 'do you think you’re better off alone?' <break time="250ms"/>At the time, it was a question I had been asking myself over and over again.<break time="150ms"/> Better Off Alone hid its message behind a dance track, and it helped me focus on the task at hand. Mind you, it still took me another almost 4 years to make the break, but I did it. In the trance I found confidence. <break time="150ms"/>And frankly, yes, I did think I’d be better off alone. <break time="150ms"/>And in retrospect, I was correct.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/10_Alice_Deejay_Better_Off_Alone_Final.mp3"/></speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 10,
    year: [1999],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=Lgs9QUtWc3M"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Better Off Alone",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/10_Alice_Deejay_Better_Off_Alone.jpeg",
        textContent: {
          artist: "Artist: Alice Deejay",
          countdown: "Day 10 (52 to 52)",
          primaryText:
            "Here’s an interesting combination: thumping house music with limited lyrics asking repeatedly, “do you think you’re better off alone?” At the time, it was a question I had been asking myself over and over again. Better Off Alone hid its message behind a dance track, and it helped me focus on the task at hand. Mind you, it still took me another almost 4 years to make the break, but it did it. In the trance I found confidence. And frankly, yes, I did think I’d be better off alone. And in retrospect, I was correct.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Something About You"],
    artist: ["Level Forty Two"],
    date: `December 12, 2017`,
    text: `<speak>This song brings me to a new era in my life, when I lived in Aurora’s basement apartment, where I found work in Rockville Centre, and where my life would change forever. <break time="150ms"/> Such a short period of time made such a huge impact on my world with new experiences, in which lifelong friends were introduced.<break time="150ms"/> I can call you all out, but you know who you are. And every single time I hear Something About You, I remember us all sitting in the basement at the Pennysaver, lovingly bickering over accounts, breathing in second hand smoke like it was our job, laughing with Marilyn as she’d explain to potential customers how she reads it on the toilet. <break time="350ms"/>Why some periods of our lives are stand-outs, or are still completely vivid in memory is beyond me, but I swear if I close my eyes I can picture us all there,<break time="150ms"/> the wood-paneled walls and the smell of the typesetting room, Marilyn Ditizio’s sing-songy voice reminding us that deadline was looming, the hand-drawn oak tag posters pushing goals ('no sandbagging!') <break time="150ms"/> and Susan’s tales of how she drove there every day from Nyack. Just once, for one moment, to go back...<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/9_Level42_Final.mp3"/></speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 9,
    year: [1985],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=E-zP66eSLto"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Something About You",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/9_Something_About_You.jpeg",
        textContent: {
          artist: "Artist: Level 42",
          countdown: "Day 9 (52 to 52)",
          primaryText:
            "This song brings me to a new era in my life, when I lived in Aurora’s basement apartment, where I found work in Rockville Centre and where my life would change forever. Such a short period of time made such a huge impact on my world with new experiences, in which lifelong friends were introduced. I can call you all out, but you know who you are. And every single time I hear Something About You, I remember us all sitting in the basement at the Pennysaver, lovingly bickering over accounts, breathing in second hand smoke like it was our job, laughing with Marilyn as she’d explain to potential customers how she reads it on the toilet...Why some periods of our lives are stand-outs or are still completely vivid in memory is still beyond me, but I swear if I close my eyes I can picture us all there, the wood-paneled walls and the smell of the typesetting room, Marilyn Ditizio’s sing-songy voice reminding us that deadline was looming, the hand-drawn oak tag posters pushing goals ('no sandbagging!') and Susan’s tales of how she drove there every day from Nyack. Just once, for one moment, to go back...",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Waiting For A Star To Fall"],
    artist: ["Boy Meets Girl"],
    date: `December 13, 2017`,
    text: `<speak>There’s something beautiful and innocent about this song, and many other pop ballads like it from 1988. <break time="150ms"/>I love so much of the music from 87 to89 (aka the VH1 era) because it reminds me of a tumultuous time, where I could finally see the light at the end of the tunnel. <break time="150ms"/> Living in Aurora’s basement, having the refuge of Kenny and Cristine. and the love of Jan and Linda and Jayne and Ellen. All wonderful things, tethering me to reality with a rope that felt secure and strong. <break time="250ms"/> Waiting For A Star To Fall is classic late eighties: gratuitous saxophone, pop synths accompanied by a male female duet-like vocal. <break time="150ms"/>Lead singer with long, wild blond hair, ingénue all bouncy and coy and shit. This song reminds me of everything beautiful about that moment in time. And all those amazing people who were (and still are) my lifeline.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/8_Waiting_For_A_Start_To_Fall_Final.mp3"/></speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 8,
    year: [1988],
    genre: ``,
    significantHoomans: [
      "Aurora",
      "Kenny",
      "Cristine",
      "Jan",
      "Linda",
      "Jayne",
      "Ellen",
    ],
    youtube: ["https://www.youtube.com/watch?v=RhxF9Qg5mOU"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Waiting For A Star To Fall",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/8_Waiting_for_a_star_to_fall.jpeg",
        textContent: {
          artist: "Artist: Boy Meets Girl",
          countdown: "Day 8 (52 to 52)",
          primaryText:
            "There’s something beautiful and innocent about this song and many other pop ballads like it from 1988. I love so much of the music from ’87-’89 (aka the VH1 era) because it reminds me of a tumultuous time where I could finally see the light at the end of the tunnel. Living in Aurora’s basement, having the refuge of Kenny and Cristine and the love of Jan and Linda and Jayne and Ellen; all wonderful things tethering me to reality with a rope that felt secure and strong. Waiting For A Star To Fall is classic late eighties: gratuitous saxophone, pop synths accompanied by a male/female duet-like vocal. Lead singer with long, wild blond hair, ingénue all bouncy and coy and shit. This song reminds me of everything beautiful about that moment in time. And all those amazing people who were (and still are) my lifeline.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: [`Makin’ It`, "Take Me Home"],
    artist: ["David Naughton", "Cher"],
    date: `December 14, 2017`,
    text: `<speak>First of all, YOU’RE WELCOME. <break time="250ms"/> Watching David, from An American Werewolf In London, dance around like a gay-tard is your gift for the holidays, from me!<break time="250ms"/> For the, duh, moment of the day, I love disco. And therefore, by inclusion, I love this song. <break time="150ms"/>It inspired a short-lived sitcom, for god’s sake! Can your pop song say that? <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/7_Naughton_Cher_Final1.mp3"/> Wait! There’s more!!! <break time="150ms"/> THIS delight by gay icon and half-breed Cher: Take Me Home. <break time="350ms"/> Again, YOU ARE WELCOME. <break time="250ms"/> As if any of the men featured in this video were interested in taking her home for anything other than to try on her Bob Mackies and talk shade! <break time="150ms"/> But all that matters not, as this is one of the best disco songs FOR LIFE! I’m listening to it right now as I’m writing this post and all I wanna do is get up and do a goddamn Hustle!<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/7_Naughton_Cher_Final2.mp3"/></speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 7,
    year: [1979],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=KaYYAinj8yU"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Makin' It / Take Me Home",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/7_Cher.png",
        textContent: {
          artist: "Artist: David Naughton / Cher",
          countdown: "Day 7 (52 to 52)",
          primaryText:
            "First of all, YOU’RE WELCOME. Watching David from An American Werewolf In London dance around like a gaytard is your gift for the holidays, from me! For the 'DUH' moment of the day, I love disco. And therefore, by inclusion, I love this song. It inspired a short-lived sitcom, for god’s sake! Can your pop song say that? (.......) Wait! There’s more!!!  THIS delight by gay icon and half-breed Cher: Take Me Home. Again, YOU ARE WELCOME. As if any of the men featured in this video were interested in taking her home for anything other than to try on her Bob Mackies and talk shade! But all that matters not, as this is one of the best disco songs FOR LIFE! I’m listening to it right now as I’m writing this post and all I wanna do is get up and do a goddamn Hustle! ",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Somebody Told Me"],
    artist: ["The Killers"],
    date: `December 15, 2017`,
    text: `<speak>Like a jarring bolt of lightning one day in 2004, the walls cracked open and a new new-wave sensation broke through called the Killers. <break time="150ms"/> It was as if pop culture was finally ready to have good music back on the airwaves again. This new song, Somebody Told Me, was magnificently reminiscent of everything I had ever loved about good, kick-ass new wave hits from the late eighties and early nineties. Think the Alarm, the Cult, New Order, the Psych Furs. <break time="150ms"/> This signature song immediately became my go-to karaoke hit. I don’t even care how I sound when I sing it, I just know I must. If there is an open mic, give it to me and let me try and channel Brandon Flowers. I can’t explain how much I love this fucking song, I just do. As with most songs I love, I could close my eyes and listen to it on repeat for hours.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/6_Somebody_Told_Me_Final.mp3"/></speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 6,
    year: [2004],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=Y5fBdpreJiU"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Somebody Told Me",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/6_Somebody_Told_Me.jpeg",
        textContent: {
          artist: "Artist: The Killers",
          countdown: "Day 6 (52 to 52)",
          primaryText:
            "Like a jarring bolt of lightning one day in 2004 the walls cracked open and a new new-wave sensation broke through called the Killers. It was as if pop culture was finally ready to have good music back on the airwaves again. This new song, Somebody Told Me, was magnificently reminiscent of everything I had ever loved about good, kick-ass new wave hits from the late eighties and early nineties. Think the Alarm, the Cult, New Order, the Psych Furs… This signature song immediately became my go-to karaoke hit. I don’t even care how I sound when I sing it, I just know I must. If there is an open mic, give it to me and let me try and channel Brandon Flowers. I can’t explain how much I love this fucking song, I just do. As with most songs I love, I could close my eyes and listen to it on repeat for hours.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Gravity"],
    artist: ["Sara Bareilles"],
    date: `December 16, 2017`,
    text: `<speak>This song by this amazing, contemporary singer/songwriter just truly speaks for itself. <break time="150ms"/> We’ve all heard Sara Bareilles’ mega hits all over the radio, and even now on Broadway. <break time="150ms"/> But Gravity is, to me, not just her greatest, most passionate song, but one of the greatest, most passionate songs by any artist in many, many years. The lyrics seem so personal to Sara, but I feel them so personally as someone who thinks he’s strong but in reality is weak and needy. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/5_Gravity_Final.mp3"/>I could watch and listen to this video endlessly, and each time I will well up, because I get it.<break time="50ms"/> I am it.<break time="150ms"/> And, reminiscent of Lisa Loeb’s Stay, about which I wrote earlier in this year’s countdown, the video is shot all in one take. Things like that blow me away, on top of the simplicity and beauty of the song it represents.</speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 5,
    year: [2009],
    genre: ``,
    significantHoomans: ["Stomps"],
    youtube: ["https://www.youtube.com/watch?v=rEXhAMtbaec"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Gravity",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/5_Gravity.png",
        textContent: {
          artist: "Artist: Sara Bareilles",
          countdown: "Day 5 (52 to 52)",
          primaryText:
            "This song by this amazing, contemporary singer/songwriter just truly speaks for itself. We’ve all heard Sara Bareilles’ mega hits all over the radio and even now on Broadway, but Gravity is, to me, not just her greatest, most passionate song, but one of the greatest, most passionate songs by any artist in many, many years. The lyrics seem so personal to Sara, but I feel them so personally as someone who thinks he’s strong but in reality is weak and needy. ",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Born This Way"],
    artist: ["Lady Gaga"],
    date: `December 17, 2017`,
    text: `<speak>Enter another powerhouse mega-talent, Lady Gaga. <break time="150ms"/> Love her or hate her, you cannot dispute the amount of talent inside that tiny, strange little Mother Monster’s body. <break time="150ms"/> I had the privilege of seeing her perform live, and it’s something I take with me through the rest of my life.<break time="150ms"/> She is brilliant. She is unique. She is amazing. She is also one of the greatest advocates of the gay community, and for that I respect and applaud her.<break time="150ms"/> So it shouldn’t be a shock that I choose Born This Way as my favorite song by Lady Gaga. People compare it to Express Yourself by Madonna, and so what? That’s another great song. But in my opinion the two songs are nothing alike and each is separately amazing. You hear this song and you want to dance, you want to feel the joy of freedom. This song makes me proud to be who I am and it makes me feel good knowing there are people out there who get it. Enjoy this crazy-ass video; it yearns to be watched as a high-budget short film.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/4_Born_This_Way_Final.mp3"/></speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 4,
    year: [2011],
    genre: ``,
    significantHoomans: ["Petey"],
    youtube: ["https://www.youtube.com/watch?v=wV1FrqwZyKw"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Born This Way",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/4_Born_This_Way.jpeg",
        textContent: {
          artist: "Artist: Lady Gaga",
          countdown: "Day 4 (52 to 52)",
          primaryText:
            "Enter another powerhouse mega-talent, Lady Gaga. Love her or hate her, you cannot dispute the amount of talent inside that tiny, strange little Mother Monster’s body. I had the privilege of seeing her perform live and it’s something I take with me through the rest of my life. She is brilliant. She is unique. She is amazing. She is also one of the greatest advocates of the LGBT community, and for that I respect and applaud her. So it shouldn’t be a shock that I choose Born This Way as my favorite song by Lady Gaga. People compare it to Express Yourself by Madonna, and so what? That’s another great song. But in my opinion the two songs are nothing alike and each is separately amazing. You hear this song and you want to dance, you want to feel the joy of freedom. This song makes me proud to be who I am and it makes me feel good knowing there are people out there who get it. Enjoy this crazy-ass video; it yearns to be watched as a high-budget short film.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Fight The Main Event", "Woman In Love"],
    artist: ["Barbra Streisand", "Barbra Streisand"],
    date: `December 18, 2017`,
    text: `<speak>This post is more about the artist than about the song. It’s truly impossible to pick a favorite song by Barbra Joan Streisand. She is one of, if not THE, greatest talents of our lifetime. <break time="150ms"/> Her voice is unique and impeccable and just exquisite, as if a diamond exploded into sound. <break time="150ms"/> Be it a song from a musical, or a ballad that yanks at your heart, or an upbeat disco anthem, she has no peer. You’d have to be deaf not to get it, and emotionless not to feel it. And if in fact you are deaf, I apologize that you can’t know the brilliance that is this woman. <break time="150ms"/> I don’t know what my life would be without the knowledge of having her voice sung in my head and in my heart. <break time="250ms"/>The first song I chose to represent Babs is Fight, from her film, The Main Event, with seventies heartthrob Ryan O’Neal. <break time="150ms"/> It marries that unmatched voice to the dazzle of disco with a dash of the disco-perm look of hers that I have always loved. How can there be anything better than that? <break time="250ms"/> Next, and keeping with the inimitably classic Jewfro, is Woman In Love, a ballad from 1981, another in that string of Bee Gees hits I’ve talked about on this year’s countdown. But this one is all Babs, on top of weepy guitars and a slow tempo, and even a Bee Gees signature chord change at the end. <break time="150ms"/> It’s a right she defends, over and over again. She stumbles and falls but she gives you it all.  Beyond brilliant.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/3_Babs_Final.mp3"/></speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 3,
    year: [1979, 1980],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=uaz-5VhDRTc"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Fight [The Main Event] / Woman In Love",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/3_Babs.jpeg",
        textContent: {
          artist: "Artist: Barbra Streisand",
          countdown: "Day 3 (52 to 52)",
          primaryText:
            "This post is more about the artist than about the song. It’s truly impossible to pick a favorite song by Barbra Joan Streisand. She is one of, if not THE, greatest talents of our lifetime. Her voice is unique and impeccable and just exquisite, as if a diamond exploded into sound. Be it a song from a musical or a ballad that yanks at your heart or an upbeat disco anthem, she has no peer. You’d have to be deaf not to get it, and emotionless not to feel it. And if in fact you are deaf, I apologize that you can’t know the brilliance that is this woman. I don’t know what my life would be without the knowledge of having her voice sung in my head and in my heart. The first song I chose to represent Babs is Fight from her film 'The Main Event' with seventies heartthrob Ryan O’Neal. It marries that unmatched voice to the dazzle of disco with a dash of the disco-perm look of hers that I have always loved. How can there be anything better than that? Next, and keeping with the inimitably classic Jewfro, is Woman In Love, a ballad from 1981, another in that string of Bee Gees hits I’ve talked about on this year’s countdown. But this one is all Babs on top of weepy guitars and a slow tempo, and even a Bee Gees signature chord change at the end. It’s a right she defends, over and over again. She stumbles and falls but she gives you it alllllll....Beyond brilliant.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["The Songs of 52nd Street"],
    artist: ["Billy Joel"],
    date: `December 20, 2017`,
    text: `<speak>In the summer of 1979, we moved from my childhood home to a new place. We went from where my soul soared, to where I felt like a captive bird. <break time="150ms"/> Physically, I wasn’t alone there; I had two parents who fought every minute of every day, and two brothers who couldn’t possibly be less interested in the fact that they had a little brother. <break time="150ms"/> Back in Lynbrook, I led a rose-tinted life, sheltered by my parents from reality. <break time="150ms"/> I was the baby, and that’s what I remained when we moved to the Poconos; a 13 year old baby for whom puberty was in full swing. Hormones everywhere, with ZERO examples of what to expect. Coming of age in a land where the closest neighbor with a kid my age was maybe half a mile away.<break time="250ms"/> What I did have were comic books about super-powered teenagers, and the music of Billy Joel, a white guy with an afro who was from the same land as me, the land I longed for every minute as that caged bird. <break time="250ms"/> His album, 52nd Street, a modern classic, is one of the only albums about which I can truly say I know every single word verbatim because I played the album, front and back, over and over. <break time="150ms"/>Three of his most giant hits are from side one; Honesty already made the top 10 of my first countdown two years ago. Aside from the mega-hits are songs like Rosalinda’s Eyes, and Half A Mile Away, each special to me as they amplified the supplanted feeling by which I was constantly besieged. <break time="250ms"/>Until The Night, a Righteous Brothers–inspired piano song, will always remind me of the band room at P.M.H.S., singing the harmonies with a boy I very secretly loved, harkening back to those terrified hormones I spoke of in the first paragraph<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/2_Billy_Joel_52nd_Street_Final.mp3"/></speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 2,
    year: [1978],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=nnsc-TjLJ7Y"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "The Songs of 52nd Street",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/2_Billy_Joel_52nd_Street.jpeg",
        textContent: {
          artist: "Artist: Billy Joel",
          countdown: "Day 2 (52 to 52)",
          primaryText:
            "In the summer of 1979, we moved from my childhood home to a new place. We went from where my soul soared to where I felt like a captive bird. Physically, I wasn’t alone there; I had two parents who fought every minute of every day, and two brothers who couldn’t possibly be less interested in the fact that they had a little brother. Back in Lynbrook, I led a rose-tinted life, sheltered by my parents from reality. I was the baby, and that’s what I remained when we moved to the Poconos; a 13 year old baby for whom puberty was in full swing, hormones everywhere, with ZERO examples of what to expect. Coming of age in a land where the closest neighbor with a kid my age was maybe half a mile away. What I did have were comic books about super-powered teenagers and the music of Billy Joel, a white guy with an afro who was from the same land as me, the land I longed for every minute as that caged bird. His album, 52nd Street, a modern classic, is one of the only albums about which I can truly say I know every single word verbatim because I played the album, front and back, over and over. Three of his most giant hits are from side one; Honesty already made the top 10 of my first countdown two years ago. Aside from the mega-hits are songs like Rosalinda’s Eyes and Half A Mile Away, each special to me as they amplified the supplanted feeling by which I was constantly besieged. Until The Night, a Righteous Brothers–inspired piano song, will always remind me of the band room at PMHS, singing the harmonies with a boy I very secretly loved, harkening back to those terrified hormones I spoke of in the first paragraph",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: [`You’re The Best Thing`],
    artist: ["Style Council"],
    date: `December 19, 2017`,
    text: `<speak>I am lucky enough to say I got to marry my best friend three years ago on this day. <break time="150ms"/> I don’t know how it happened, and I can only wish that any of you reading this can say the same thing, but somehow I found someone who doesn’t just love me but also LIKES me. And the same for me. <break time="150ms"/>He puts me in my place when needed, yanks me off the ledge when I’m teetering up there, and he lets me be me without trying to change me <break time="150ms"/>(much).<break time="150ms"/> I may complain (right to his face!)<break time="50ms"/> but I can’t imagine a life without my Woof. Nothing compares to our adventures and our down time together. Whether doing nothing, or running around the cold January streets of Manhattan, it’s always better because he is there! I chose this relatively obscure eighties song by the Style Council today because of its simplicity and the very direct message: You’re the best thing that ever happened to me or my world.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/1_YoureTheBestThing_Final.mp3"/></speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 1,
    year: [1984],
    genre: ``,
    significantHoomans: ["Stomps"],
    youtube: ["https://www.youtube.com/watch?v=0HMAVU1k7kg"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "You’re The Best Thing",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/1_Yourethebestthing.jpeg",
        textContent: {
          artist: "Artist: Style Council",
          countdown: "Day 1 (52 to 52)",
          primaryText:
            "I am lucky enough to say I got to marry my best friend three years ago on this day. I don’t know how it happened, and I can only wish that any of you reading this can say the same thing, but somehow I found someone who doesn’t just love me but also LIKES me. And the same for me. He puts me in my place when needed, yanks me off the ledge when I’m teetering up there, and he lets me be me without trying to change me (much). I may complain (right to his face!) but I can’t imagine a life without my Woof. Nothing compares to our adventures and our down time together. Whether doing nothing or running around the cold January streets of Manhattan, it’s always better because he is there! I chose this relatively obscure eighties song by the Style Council today because of its simplicity and the very direct message: You’re the best thing that ever happened to me or my world.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["The Little Drummer Boy Peace On Earth"],
    artist: ["Bing Crosby And David Bowie"],
    date: `December 21, 2017`,
    text: `<speak>I have shared my birthday every year with the Christmas season, that they have become synonymous, and I am truly okay with that. <break time="150ms"/>It’s nice to feel like my birthday happens amidst the happiest time of the year, a time for family and friends, a time for giving the best of ourselves. <break time="150ms"/> And Christmas songs are a huge part of my birthday. The legends and the new ones, they are all part of me. <break time="150ms"/>I don’t think this Christmas song needs an introduction. However, I will tell you that it reminds me of my dad, the ultimate old timer who loved playing his Bing Crosby albums around the holidays and who would never admit he actually liked the marriage of Bing’s voice with that of androgynous pop star David Bowie.<break time="150ms"/> If memory serves me right, this aired on a Bing Crosby Christmas special and I remember dad liking it. And for that reason, it’s among my favorite Christmas songs of all time. I tear up a little every time I hear it, longing for days that are so far gone there is almost too much dust on the memories.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/52-to-52/0_Peace_On_Earth-Little_Drummer_Boy_Final.mp3"/></speak>`,
    countdown: `fifty two to fifty two`,
    countdownDisplay: `52 to 52`,
    day: 0,
    year: [1977],
    genre: ``,
    significantHoomans: ["My Father"],
    youtube: ["https://www.youtube.com/watch?v=ADbJLo4x-tk"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "The Little Drummer Boy (Peace On Earth)",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/52-to-52/0_Peace_On_Earth-Little_Drummer_Boy.jpeg",
        textContent: {
          artist: "Artist: Bing Crosby & David Bowie",
          countdown: "Day 0 (52 to 52)",
          primaryText:
            "I have shared my birthday every year with the Christmas season that they have become synonymous and I am truly okay with that. It’s nice to feel like my birthday happens amidst the happiest time of the year, a time for family and friends, a time for giving the best of ourselves. And Christmas songs are a huge part of my birthday. The legends and the new ones, they are all part of me. I don’t think this Christmas song needs an introduction. However, I will tell you that it reminds me of my dad, the ultimate old timer who loved playing his Bing Crosby albums around the holidays and who would never admit he actually liked the marriage of Bing’s voice with that of androgynous pop star David Bowie. If memory serves me right, this aired on a Bing Crosby Christmas special and I remember dad liking it. And for that reason, it’s among my favorite Christmas songs of all time. I tear up a little every time I hear it, longing for days that are so far gone there is almost too much dust on the memories.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Drive"],
    artist: ["Incubus"],
    date: `October 29, 2018`,
    text: `<speak>Let’s start this countdown with something from the new millennium, and let’s dedicate it to my nephew Chris, a.k.a. the Phurk, a.k.a. Paging Dr. Faggot, on this day, his 30th birthday. <break time="250ms"/> When Drive, by Incubus was popular on the radio in 2001, Chris was a thirteen year old prodigy drummer, with very interesting taste in music. <break time="150ms"/> Being raised by Baby Boomers will do that; he was bred with the likes of Steely Dan and Billy Joel and the Beatles, among other classics from way before his time. <break time="250ms"/> Admittedly, when this song was first popular, I couldn’t stand it. It sounded basic and insistent. But my nephew with the eclectic ear really liked this band so I gave it my interest, and now that it’s retro, I have to say I love the damn song. <break time="150ms"/> Aside from the obvious connection to my nephew, I do like the pared down simplicity in the lead singer’s voice and the sweetness of the guitars. I can even appreciate the record-scratch sound. <break time="150ms"/> And the song has a pretty good message about overcoming fear, which has gripped many of us too many times to count in our lives.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/53_Drive_Final.mp3"/></speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 53,
    year: [1999],
    genre: ``,
    significantHoomans: ["The Phurk"],
    youtube: ["https://www.youtube.com/watch?v=fgT9zGkiLig"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Drive",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/53_Incubus_drive.png",
        textContent: {
          artist: "Artist: Incubus",
          countdown: "Day 53 (53 to 53)",
          primaryText:
            "Let’s start this countdown with something from the new millennium, and let’s dedicate it to my nephew Chris, aka the Phurk, aka Paging Dr. Faggot, on this day, his 30th birthday. When Drive by Incubus was popular on the radio in 2001, Chris was a thirteen year old prodigy drummer with very interesting taste in music. Being raised by Baby Boomers will do that; he was bred with the likes of Steely Dan and Billy Joel and the Beatles, among other classics from way before his time. Admittedly when this song was first popular, I couldn’t stand it. It sounded basic and insistent. But my nephew with the eclectic ear really liked this band so I gave it my interest, and now that it’s retro, I have to say I love the damn song. Aside from the obvious connection to my nephew, I do like the pared down simplicity in the lead singer’s voice and the sweetness of the guitars. I can even appreciate the record-scratch sound. And the song has a pretty good message about overcoming fear, which has gripped many of us too many times to count in our lives.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["New Year’s Day", "One"],
    artist: ["U2", "U2"],
    date: `October 30, 2018`,
    text: `<speak>As one of my favorite bands of all time, U2 has had a song in my countdowns before. <break time="150ms"/> It’s inevitable that multiple songs from their endless catalog should end up on my lists, especially considering this band was such a huge part of my eighties and early nineties experiences. Perhaps I’ve talked about the life-changing experience that was my first time seeing U2 at the Hartford Civic Center (not shockingly, I remember the date - May 9, 1987) in my previous entries about one of their songs, but in the context of this diary, the essence of that moment should find its home again. <break time="250ms"/>It was the closest I’d ever felt to the existence of a god and community and love. I was at the concert with my brother Mike and Jan and Jayne and Kenny, and these people were my family, the walls of my house. <break time="150ms"/> I was also amongst a crowd of humans from everywhere who swayed and sung and cried to the rattle and hum of the Irish rock phenomenon.<break time="150ms"/> As we exited the venue. Zombie-like, it was full-on lighters lit as we all were still singing, How long to sing this song? <break time="250ms"/>  Today’s two particular U2 songs couldn’t be further away in style and feel from each other, but they are each as meaningful and powerful to me and my whole life. <break time="150ms"/> The first is from my time peeking out through the slats on the closet door, way back in my sophomore year of college, when longing for boys across the campus or in the dorm was my only course of action AND study. <break time="250ms"/>The second is from after the closet door was broken off its hinges, at a time when I was in the throes of self-discovery, learning responsibility and forging lifetime friendships. <break time="150ms"/> I give you New Year’s Day, a gritty tale about an ongoing bloody struggle, and One, about disharmony and disappointment and the ramifications of those things.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/52_U2_Final.mp3"/></speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 52,
    year: [1983, 1992],
    genre: ``,
    significantHoomans: ["Carmine", "Jayne", "Jan", "Kenny"],
    youtube: [
      "https://www.youtube.com/watch?v=jeYCyCaK_5k",
      "https://www.youtube.com/watch?v=ftjEcrrf7r0",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "New Year’s Day / One",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/52_U2.jpeg",
        textContent: {
          artist: "Artist: U2",
          countdown: "Day 52 (53 to 53)",
          primaryText:
            "As one of my favorite bands of all time, U2 has had a song in my countdowns before. It’s inevitable that multiple songs from their endless catalog should end up on my lists, especially considering this band was such a huge part of my eighties and early nineties experiences. Perhaps I’ve talked about the life-changing experience that was my first time seeing U2 at the Hartford Civic Center (not shockingly, I remember the date - May 9, 1987) in my previous entries about one of their songs, but in the context of this diary the essence of that moment should find its home again. It was the closest I’d ever felt to the existence of a god and community and love. I was at the concert with my brother Mike and Jan and Jayne and Kenny, and these people were my family, the walls of my house. I was also amongst a crowd of humans from everywhere who swayed and sung and cried to the rattle and hum of the Irish rock phenomenon. As we exited the venue. Zombie-like, it was full-on lighters lit as we all were still singing, 'How long to sing this song?' Today’s two particular U2 songs couldn’t be further away in style and feel from each other, but they are each as meaningful and powerful to me and my whole life. The first is from my time peeking out through the slats on the closet door way back in my sophomore year of college, when longing for boys across the campus or in the dorm was my only course of action AND study; the second is from after the closet door was broken off its hinges, at a time when I was in the throes of self-discovery, learning responsibility and forging lifetime friendships. I give you New Year’s Day, a gritty tale about an ongoing bloody struggle, and One, about disharmony and disappointment and the ramifications of those things.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["The Rocky Horror Picture Show Soundtrack"],
    artist: ["Various Artists"],
    date: `October 31, 2018`,
    text: `<speak>Happy Halloween, Ghosts and Ghouls and Sweet Transvestites from Transsexual Transylvania! <break time="350ms"/> The Rocky Horror Picture Show is, quite possibly, the most well-known cult film of all time, but the fact that the music is unbeatably amazing is why the soundtrack has ended up in my countdown. <break time="150ms"/> Granted, the fact that the movie encourages you to sing along with audience participation, is probably the reason these songs are embedded into my hippocampus. <break time="150ms"/> Naturally, much of the music is glued to images from the film, so it can be difficult to separate the two, but so what? That’s part of the cult charm. <break time="250ms"/>It’s a wink to be in on the joke, to be able to lipsync along with the lips in the opening sequence during the opening number, Science Fiction Double Feature. Clearly, not all the songs are favorites, but as a whole the movie soundtrack holds up to the task. My personal stand-outs are, of course, Touch-a Touch-a Touch Me, sung by the ingénue, a very young and innocent Susan Sarandon, and the songs that comprise the penultimate floor show, which happens to be a visual feast as well. I always know when I meet someone who is also into this movie and the songs from it, that I am going to be friends with that person.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/51_Time_Warp_Final.mp3"/></speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 51,
    year: [1975],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=-w0WPkB3XJ4"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/51_Rocky_Horror_Picture_Show.jpeg",
        textContent: {
          artist: "Artist: Various Artists",
          countdown: "Day 51 (53 to 53)",
          primaryText:
            "Happy Halloween, Ghosts and Ghouls and Sweet Transvestites from Transsexual Transylvania! The Rocky Horror Picture Show is, quite possibly, the most well-known cult film of all time, but the fact that the music is unbeatably amazing is why the soundtrack has ended up in my countdown. Granted, the fact that the movie encourages you to sing along with audience partici…. PATION is probably the reason these songs are embedded into my hippocampus. Naturally, much of the music is glued to images from the film so it can be difficult to separate the two, but so what? That’s part of the cult charm. It’s a wink to be in on the joke, to be able to lipsync along with the lips in the opening sequence during the opening number, Science Fiction Double Feature. Clearly not all the songs are favorites, but as a whole the movie soundtrack holds up to the task. My personal stand-outs are, of course, Touch-a Touch-a Touch Me, sung by the ingénue, a very young and innocent Susan Sarandon, and the songs that comprise the penultimate floor show, which happens to be a visual feast as well. I always know when I meet someone who is also into this movie and the songs from it, that I am going to be friends with that person.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Livin’ On A Prayer", "Wanted Dead Or Alive", "What Do You Got"],
    artist: ["Bon Jovi", "Bon Jovi", "Bon Jovi"],
    date: `November 1, 2018`,
    text: `<speak>This is basically a snapshot of the best of Bon Jovi, I know. <break time="150ms"/> Clearly, they were one of the best bands of their genre to emerge from the eighties, and keep on keepin’ on, for many years after that particular lighter flame should have faded. <break time="150ms"/> Anyone who’s alive knows Livin’ On A Prayer. And likely 97% of those people love it and sing along to it the way they do to Don’t Stop Believin’, Journey’s mega-hit. <break time="150ms"/>This song was reminiscent of its classic rock ancestors including Zeppelin and Frampton, but it has that eighties edge that, strangely, still holds up right to this minute.<break time="150ms"/> With their hair-band notoriety on point, Bon Jovi even does a chord change at the end that would make any Bee-Gee or Manilow fan proud. <break time="250ms"/> From the same 1987 album came Wanted: Dead or Alive, a different kind of rock anthem. <break time="150ms"/> This one was more reminiscent of Bob Seger or the Eagles than heavy metal, and it resonated just as much. With such an amazing instrumental bridge, it’s impossible to not jam out your best air guitar and mimic that squinty face Richie Sambora made as he killed it. <break time="150ms"/> The harmonies between Jon and Richie at the end though, are why I love this song, and it’s about 2 simple words: Me and Kenny. <break time="250ms"/> It was the summer he and Cristine fell in love, in which the three of us were inseparable; movies, drinking, camping, Bon Jovi. <break time="450ms"/>Fast forward 13 years: under the radar comes a ballad called What Do You Got. This ballad deserves honorary mention because it has such a pretty lyric: What do ya got if you ain’t got love? If you ain’t got love, it’s all just keepin’ score. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/50_Bon_Jovi_Final.mp3"/></speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 50,
    year: [1986, 1986, 2010],
    genre: ``,
    significantHoomans: ["Kenny", "Cristine"],
    youtube: [
      "https://www.youtube.com/watch?v=lDK9QqIzhwk",
      "https://www.youtube.com/watch?v=SRvCvsRp5ho",
      "https://www.youtube.com/watch?v=ZAMYIKfIVSQ",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Livin’ On A Prayer / Wanted Dead Or Alive / What Do You Got?",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/50_LivinOnAPrayer.jpeg",
        textContent: {
          artist: "Artist: Bon Jovi",
          countdown: "Day 50 (53 to 53)",
          primaryText:
            "This is basically a snapshot of the best of Bon Jovi, I know. Clearly they were one of the best bands of their genre to emerge from the eighties and keep on keepin’ on for many years after that particular lighter flame should have faded. Anyone who’s alive knows Livin’ On A Prayer. And likely 97% of those people love it and sing along to it the way they do to Don’t Stop Believin’, Journey’s mega-hit. This song was reminiscent of its classic rock ancestors including Zeppelin and Frampton, but it has that eighties edge that, strangely, still holds up right to this minute. With their hair-band notoriety on point, Bon Jovi even does a chord change at the end that would make any Bee-Gee or Manilow fan proud. From the same 1987 album came Wanted: Dead or Alive, a different kind of rock anthem. This one was more reminiscent of Bob Seger or the Eagles than heavy metal, and it resonated just as much. With such an amazing instrumental bridge, it’s impossible to not jam out your best air guitar and mimic that squinty face Richie Sambora made as he killed it. The harmonies between Jon and Richie at the end, though, are why I love this song, and it’s about 2 simple words: Me and Kenny. It was the summer he and Cristine fell in love in which the three of us were inseparable; movies, drinking, camping, Bon Jovi. Fast forward 13 years: under the radar comes a ballad called What Do You Got. This ballad deserves honorary mention because it has such a pretty lyric: What do ya got if you ain’t got love? If you ain’t got love, it’s all just keepin’ score. ",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Bad Girl"],
    artist: ["Madonna"],
    date: `November 2, 2018`,
    text: `<speak>Madonna has been in my countdown before, obviously, with both a ballad and a dance song. <break time="150ms"/>This time it’s another ballad from my favorite of her albums, Erotica. Bad Girl reminds me of so much. The arrangement of this song, to me, has become synonymous to the crashing waves on the rainy, cold shores of Montauk, where I’d stare out in sadness every time I’d spend that January weekend with Jan and the girls at Gurney’s Inn. I’d sit and reflect on what a terrible, calculating human I was. Without going into detail, that is what would go through my mind as I’d stare out the window of room 525 with the CD player on repeat (shocking), listening to Madge pour her emotions out.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/49_Bad_Girl_Madonna_Final.mp3"/></speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 49,
    year: [1992],
    genre: ``,
    significantHoomans: ["Frank"],
    youtube: ["https://www.youtube.com/watch?v=OsHnROYjdgo"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Bad Girl",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/49_Bad_Girl_Madonna.png",
        textContent: {
          artist: "Artist: Madonna",
          countdown: "Day 49 (53 to 53)",
          primaryText:
            "Madonna has been in my countdown before, obviously, with both a ballad and a dance song. This time it’s another ballad from my favorite of her albums, Erotica. Bad Girl reminds me of so much. The arrangement of this song, to me, has become synonymous to the crashing waves on the rainy, cold shores of Montauk, where I’d stare out in sadness every time I’d spend that January weekend with Jan and the girls at Gurney’s Inn. I’d sit and reflect on what a terrible, calculating human I was. Without going into detail, that is what would go through my mind as I’d stare out the window of room 525 with the CD player on repeat (shocking), listening to Madge pour her emotions out.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["I Don’t Know How To Love Him"],
    artist: ["Helen Reddy"],
    date: `November 3, 2018`,
    text: `<speak>As a small boy, I had no idea this song was from a musical. It was part of the soundtrack of my childhood that had been provided by W.G.B.B. in our small kitchen in Lynbrook, where Mommy would comb my stubborn hair and send me off to West End. <break time="150ms"/> The singer had a soft, interesting voice that drew me in; the lyrics, about her love for a man, didn’t matter to me, and it NEVER occurred to me this song was written as a ballad sung by Mary Magdalene to Jesus of Nazareth. <break time="350ms"/> It was in the way her voice climbed to such a delightfully golden soprano, the crescendo of the chorus, that was so simply breathtaking.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/48_I_Don't_Know_How_to_Love_Him_Final.mp3"/> The singer, Helen Reddy, had had several songs in the morning soundtrack.<break time="150ms"/> Among them was Angie Baby, which was one of my mom’s favorite with which to sing along, since it was her name. But I Don’t Know How To Love Him, for certain, is the most beautiful of all of the songs sung to pitch perfection by Helen Reddy. There have been many versions of this song, most famously that sung by Yvonne Elliman who’d sung it in both the stage and screen productions of Jesus Christ Superstar, as well as the recent (and brilliant) version by Sara Bareilles. Helen’s, though, remains my gold standard. </speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 48,
    year: [1970],
    genre: ``,
    significantHoomans: ["Angie"],
    youtube: ["youtube.com/watch?v=DM3dYCp-op8"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "I Don’t Know How To Love Him",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/48_I_Don't_Know_How_to_Love_Him.jpeg",
        textContent: {
          artist: "Artist: Helen Reddy",
          countdown: "Day 48 (53 to 53)",
          primaryText:
            "As a small boy, I had no idea this song was from a musical. It was part of the soundtrack of my childhood that had been provided by W.G.B.B. in our small kitchen in Lynbrook, where Mommy would comb my stubborn hair and send me off to West End.  The singer had a soft, interesting voice that drew me in; the lyrics, about her love for a man, didn’t matter to me, and it NEVER occurred to me this song was written as a ballad sung by Mary Magdalene to Jesus of Nazareth. It was in the way her voice climbed to such a delightfully golden soprano, the crescendo of the chorus, that was so simply breathtaking. The singer, Helen Reddy, had had several songs in the morning soundtrack. Among them was Angie Baby, which was one of my mom’s favorite with which to sing along, since it was her name. But I Don’t Know How To Love Him, for certain, is the most beautiful of all of the songs sung to pitch perfection by Helen Reddy. There have been many versions of this song, most famously that sung by Yvonne Elliman who’d sung it in both the stage and screen productions of Jesus Christ Superstar, as well as the recent (and brilliant) version by Sara Bareilles. Helen’s, though, remains my gold standard.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["I Can’t Hold Back"],
    artist: ["Survivor"],
    date: `November 4, 2018`,
    text: `<speak>I am not sure how to categorize the music of eighties band Survivor. <break time="150ms"/>What I do know is that, while their moment was happening, my cousin and I were obsessed with them.  <break time="150ms"/>I Can’t Hold Back is sort of a rock ballad, a love song that, when you listen to the words, is pretty overtly sexual. But that’s not what this song means to me. I listen to the beautiful tenor of singer Jimi Jamison‘s voice, and I am instantly transported to being the boy who lived in Aurora’s basement, all full of wonder and worry and hope.  I had so much hope, but also too much self-doubt and fear. <break time="150ms"/> I could have been the next Stephen King or Paul Levitz. I certainly had the talent.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/47_Cant_Hold_Back_Finalmp3.mp3"/>Here’s the boy who really never followed his dreams, the boy who let life take control instead of taking control of life.</speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 47,
    year: [1984],
    genre: ``,
    significantHoomans: ["Petey"],
    youtube: ["https://www.youtube.com/watch?v=GaMcsKtBDwE"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "I Can’t Hold Back",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/47_Cant_Hold_Back.jpeg",
        textContent: {
          artist: "Artist: Survivor",
          countdown: "Day 47 (53 to 53)",
          primaryText:
            "I am not sure how to categorize the music of eighties band Survivor. What I do know is that, while their moment was happening, my cousin and I were obsessed with them. I Can’t Hold Back is sort of a rock ballad, a love song that, when you listen to the words, is pretty overtly sexual. But that’s not what this song means to me. I listen to the beautiful tenor of singer Jimi Jamison‘s voice and I am instantly transported to being the boy who lived in Aurora’s basement, all full of wonder and worry and hope. I had so much hope, but also too much self-doubt and fear. I could have been the next Stephen King or Paul Levitz. I certainly had the talent. (........) Here’s the boy who really never followed his dreams, the boy who let life take control instead of taking control of life.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Nobody Wants To Be Lonely"],
    artist: ["Ricky Martin And Christina Aguilera"],
    date: `November 5, 2018`,
    text: `<speak>I love a good duet, right from Elton & Kiki, to Olivia and Cliff. So it’s no surprise that I love this duet by sexy nineties mega-stars Ricky Martin and Christina Aguilera. <break time="150ms"/> It’s actually not that great a song when you break it down, but I just happen to like the combination of their voices. Anyone with ears has to know she is one of the most amazing talents of our time. I don’t particularly love most of her pop songs, but the bitch can sing. <break time="250ms"/>And Ricky is just delicious Puerto Rican syrup, so there’s that.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/46_Ricky_Martin_Final.mp3"/></speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 46,
    year: [2000],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=KUmrNavXsd0"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Nobody Wants To Be Lonely",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/46_Ricky_Martin.jpeg",
        textContent: {
          artist: "Artist: Ricky Martin & Christina Aguilera",
          countdown: "Day 46 (53 to 53)",
          primaryText:
            "I love a good duet, right from Elton & Kiki to Olivia & Cliff, so it’s no surprise that I love this duet by sexy nineties mega-stars Ricky Martin and Christina Aguilera. It’s actually not that great a song when you break it down, but I just happen to like the combination of their voices. Anyone with ears has to know she is one of the most amazing talents of our time. I don’t particularly love most of her pop songs, but the bitch can sing. And Ricky is just delicious Puerto Rican syrup, so there’s that.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["La La"],
    artist: ["The Verve Pipe"],
    date: `November 6, 2018`,
    text: `<speak>The late nineties and early ohs presented us with many progressive bands that had a similar feel to their angst-ridden sound. <break time="150ms"/> Not that that’s a bad thing; there’s something comforting in commonality. There are several songs on this year’s countdown by bands in this genre. The Verve Pipe is known for their one-hit wonder called the Freshman. It garnered a ton of airplay in 1996 and 97. But the song I love by this obscure band is called La La. <break time="250ms"/>It wasn’t even released as a single, so finding a video for it was impossible. And I actually had never heard this song until I started working at Cablevision. <break time="150ms"/> We were testing out a music partner called Rhapsody, so my account was complimentary as long as I provided feedback from a beta tester standpoint. <break time="150ms"/> I came upon La La quite randomly. <break time="150ms"/>Lead singer Brian Vander Ark’s voice is distinct and raspy-sweet, and the song starts out quiet, but soon erupts with a beautiful rock melody with harmonies reminiscent of the ones I loved by the band Ambrosia from the seventies.<break time="150ms"/> I love pretty much everything about this song and I am glad I discovered it. It brings me a sense of roots, of both longing and belonging. Today is November 5th and it would have been my 17th anniversary at Cablevision.  This song and that date will forever be tethered.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/45_LaLa_Final.mp3"/></speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 45,
    year: [1999],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=BiXVSHswSQU"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "La La",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/45_Verve_Pipe.jpeg",
        textContent: {
          artist: "Artist: The Verve Pipe",
          countdown: "Day 45 (53 to 53)",
          primaryText:
            "The late nineties and early ohs presented us with many progressive bands that had a similar feel to their angst-ridden sound. Not that that’s a bad thing; there’s something comforting in commonality. There are several songs on this year’s countdown by bands in this genre.The Verve Pipe is known for their one-hit wonder called the Freshman. It garnered a ton of airplay in 1996 and 97. But the song I love by this obscure band is called La La. It wasn’t even released as a single, so finding a video for it was impossible. And I actually had never heard this song until I started working at Cablevision. We were testing out a music partner called Rhapsody, so my account was complimentary as long as I provided feedback from a beta tester standpoint. I came upon La La quite randomly. Lead singer Brian Vander Ark’s voice is distinct and raspy-sweet, and the song starts out quiet but soon erupts with a beautiful rock melody with harmonies reminiscent of the ones I loved by the band Ambrosia from the seventies. I love pretty much everything about this song and I am glad I discovered it. It brings me a sense of roots, of both longing and belonging. Today is November 5th and it would have been my 17th anniversary at Cablevision.  This song and that date will forever be tethered.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Bring Me To Life"],
    artist: ["Evanescence"],
    date: `November 7, 2018`,
    text: `<speak>A new millennium brought a new sound, and it was called Evanescence. <break time="150ms"/>Kick-ass heavy rock with a lead vocalist whose sincerity was palpable. <break time="150ms"/> The year this song was all over the radio was another of the many definitive years in my life; it ushered in the first time I was a single adult in 13 years. <break time="150ms"/> Bring Me To Life represents that moment when all the weight on my shoulders finally lifted, despite the scary prospect of moving forward with no map or instructional guide on what the fuck to do. <break time="150ms"/>We all know how that worked itself out, but in the moment I was both adventurous and skeptical, free and frightened. And that’s the way this song makes me feel, even still.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/44_Evernescence_Final.mp3"/></speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 44,
    year: [2003],
    genre: ``,
    significantHoomans: ["Frank"],
    youtube: ["https://www.youtube.com/watch?v=3YxaaGgTQYM"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Bring Me To Life",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/44_Evanescence.jpg",
        textContent: {
          artist: "Artist: Evanescence",
          countdown: "Day 44 (53 to 53)",
          primaryText:
            "A new millennium brought a new sound, and it was called Evanescence. Kick-ass heavy rock with a lead vocalist whose sincerity was palpable. The year this song was all over the radio was another of the many definitive years in my life; it ushered in the first time I was a single adult in 13 years. Bring Me To Life represents that moment when all the weight on my shoulders finally lifted, despite the scary prospect of moving forward with no map or instructional guide on what the fuck to do. We all know how that worked itself out, but in the moment I was both adventurous and skeptical, free and frightened. And that’s the way this song makes me feel, even still.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Right Here", "Dreams"],
    artist: ["SWV", "Gabrielle"],
    date: `November 8, 2018`,
    text: `<speak>Admittedly never a huge fan of Michael Jackson, I actually didn’t like Right Herem, by S.W.V. when it was first all over the radio in 1992.<break time="1500ms"/> But, like other songs on this list, the retrospective aspect of the song is why I love it today. The girl group’s sampling of Michael’s Human Nature was cringe-worthy to me at the time, yet when I hear it now I am taken back to the sales floor of Chess King in Bay Shore, laughing with Don and Joe, fawning over Justin. <break time="250ms"/> So many amazing memories of that time in my life, as I fought the battle of youth versus responsibility, the most prevalent of which was how impacted I was by music at the time. <break time="250ms"/> What saved my sanity in that job was the music soundtrack, and S.W.V. provided their moment.<break time="250ms"/> Gabrielle’s Dreams was just as big a hit on the radio waves, serving up as many memories while pushing me along into the nineties. This song stayed with us to Oceanside, and by us I mean me and Don and Jimmy. Those days were a time of never knowing which end was up in my personal life. And as it turns out, some things never change.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/43_SWV_Dreams_Final.mp3"/></speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 43,
    year: [1992],
    genre: ``,
    significantHoomans: ["Don", "Jimmy"],
    youtube: [
      "https://www.youtube.com/watch?v=vHwXoY0LiQk",
      "https://www.youtube.com/watch?v=G5QPirQITZI",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Right Here [Human Nature] / Dreams",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/43_SWV.jpg",
        textContent: {
          artist: "Artist: SWV / Gabrielle",
          countdown: "Day 43 (53 to 53)",
          primaryText:
            "Admittedly never a huge fan of Michael Jackson, I actually didn’t like Right Here by SWV when it was first all over the radio in 1992. But, like other songs on this list, the retrospective aspect of the song is why I love it today.The girl group’s sampling of Michael’s Human Nature was cringe-worthy to me at the time, yet when I hear it now I am taken back to the sales floor of Chess King in Bay Shore, laughing with Don and Joe, fawning over Justin. So many amazing memories of that time in my life as I fought the battle of youth versus responsibility, the most prevalent of which was how impacted I was by music at the time. What saved my sanity in that job was the music soundtrack, and SWV provided their moment. Gabrielle’s Dreams was just as big a hit on the radio waves, serving up as many memories while pushing me along into the nineties. This song stayed with us to Oceanside, and by us I mean me and Don and Jimmy. Those days were a time of never knowing which end was up in my personal life. And as it turns out, some things never change.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Hemorrhage In My Hand", "Take A Picture"],
    artist: ["Fuel", "Filter"],
    date: `November 9, 2018`,
    text: `<speak>The new millennium started and music had changed. <break time="150ms"/> The leftover angst of grunge evolved into rock ballads with angry overtones, featuring singers singing in a blistering shout to express their thoughts and feeling. Just like the rest of us. <break time="250ms"/> Two such songs are Hemorrhage (In My Hands) and Take A Picture.<break time="150ms"/> Each of these songs has undertones of love and loss, feelings about which I am all too familiar.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/42_Fuel_Final1.mp3"/> I hear that being shouted and I am angry at what I used to believe in, how any kind of god could leave me behind after all the losses. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/42_Fuel_Final2.mp3"/> I hear that being shouted and all I can think about it what kind of relationship I’d have with my dad if he were around now to see how well loved I am. Would he be on board or would it be a tense relationship? Something about the honesty of the vocals in both these songs is why I will always blast them any time I hear them on the radio. Or attempt them at karaoke.</speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 42,
    year: [2000],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=ZbHfgXJKn1Y", ""],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Hemorrhage [In My Hand] / Take A Picture",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/42_Fuel.jpg",
        textContent: {
          artist: "Artist: Fuel / Filter",
          countdown: "Day 42 (53 to 53)",
          primaryText:
            "The new millennium started and music had changed. The leftover angst of grunge evolved into rock ballads with angry overtones featuring singers singing in a blistering shout to express their thoughts and feeling. Just like the rest of us. Two such songs are Hemorrhage (In My Hands) and Take A Picture. Each of these songs has undertones of love and loss, feelings about which I am all too familiar. (..Don’t fall away and leave me to myself. Don’t fall away and leave life bleeding in my hands again...) I hear that being shouted and I am angry at what I used to believe in, how any kind of god could leave me behind after all the losses. (...Hey Dad, what do you think about your son now?) ",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["If You’re Out There", "Someday"],
    artist: ["John Legend", "John Legend"],
    date: `November 10, 2018`,
    text: `<speak>How do you describe the voice of John Legend? <break time="150ms"/> Pointed, unpretentious, sweet and brimming, with the spirit of so many crooners from our past. Except here he is, in the now. <break time="150ms"/> He sings about love and loss, just like any other balladier. But the song I love most by this master of swoon is If You’re Out There. <break time="150ms"/> Wistful, yet hopefully aspirational lyrics tell of joining together to make this one earth a better place. <break time="150ms"/> We all talk about it and we all say we want it, but too few of us actually stand up. It takes artists like John legend to throw these issues at us in beauty and style.<break time="150ms"/> Listen to this song and be empowered. <break time="350ms"/>Honorary mention goes to the first song I’d ever heard by this genius with a beautiful voice: Someday.<break time="150ms"/> From the August Rush film soundtrack. <break time="250ms"/> Chris and I saw the movie in the theater, and as we sat through the credits, I was blown away by the splendor and simplicity of this song, about lovers once again meeting up someday, much like what happened in the movie. <break time="150ms"/> But I heard the message of someday being together with my recently departed Vincent, while in the infancy of a new love with Chris. The definition of bittersweet.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/41_John_Legend_Final.mp3"/></speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 41,
    year: [2008, 2007],
    genre: ``,
    significantHoomans: ["Vinny"],
    youtube: [
      "https://www.youtube.com/watch?v=TvWhSUqpQBk",
      "https://www.youtube.com/watch?v=ne6mv6V9_zw",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "If You’re Out There / Someday",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/41_John_Legend.png",
        textContent: {
          artist: "Artist: John Legend",
          countdown: "Day 41 (53 to 53)",
          primaryText:
            "How do you describe the voice of John Legend? Pointed, unpretentious, sweet and brimming with the spirit of so many crooners from our past, except here he is, in the now. He sings about love and loss, just like any other balladier.  But the song I love most by this master of swoon is If You’re Out There. Wistful yet hopefully aspirational lyrics tell of joining together to make this one earth a better place. We all talk about it and we all say we want it, but too few of us actually stand up. It takes artists like John legend to throw these issues at us in beauty and style. Listen to this song and be empowered. Honorary mention goes to the first song I’d ever heard by this genius with a beautiful voice: Someday, from the August Rush film soundtrack. Chris and I saw the movie in the theater and as we sat through the credits, I was blown away by the splendor and simplicity of this song about lovers once again meeting up someday, much like what happened in the movie. But I heard the message of someday being together with my recently departed Vincent while in the infancy of a new love with Chris. The definition of bittersweet.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Here Comes The Rain Again"],
    artist: ["Eurythmics"],
    date: `November 11, 2018`,
    text: `<speak>It’s a warm and rainy night, and the smell of wood burning permeates the downfall. <break time="150ms"/> I stand on the second floor porch and look out across the street to the campus beyond; as a woolgatherer, my mind conjures stories, so many stories, and I think to myself, maybe it’s this Scranton soundtrack that is imbuing me with all this inspiration.<break time="250ms"/> Here comes the rain again. It rained a lot here in Scranton, in the fall of 1984. And that suits me just fine. It clears off the campus thoroughfares and allows me to walk aimlessly, alone. I’m aware of my youth and my secret desperation. I’m aware of how lonely and alone I am, and I wonder what it’s like to have a lover to walk with and talk with as Annie Lennox requests in the chorus of her Eurythmics’ song Here Comes the Rain Again. I’m about to walk along the winding path that leads through the main commons. No one is out tonight, no one but me, walking quietly in the drumming, steady rain. Here it comes again.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/40_Here_Comes_The_Rain_Again_Final.mp3"/></speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 40,
    year: [1983],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=TzFnYcIqj6I"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Here Comes The Rain Again",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/40_Eurythmics.jpeg",
        textContent: {
          artist: "Artist: Eurythmics",
          countdown: "Day 40 (53 to 53)",
          primaryText:
            "It’s a warm and rainy night and the smell of wood burning permeates the downfall. I stand on the second floor porch and look out across the street to the campus beyond; as a woolgatherer, my mind conjures stories, so many stories, and I think to myself, maybe it’s this Scranton soundtrack that is imbuing me with all this inspiration. Here comes the rain again. It rains a lot here in Scranton in the fall of 1984. And that suits me just fine. It clears off the campus thoroughfares and allows me to walk aimlessly, alone. I’m aware of my youth and my secret desperation. I’m aware of how lonely and alone I am, and I wonder what it’s like to have a lover to walk with and talk with as Annie Lennox requests in the chorus of her Eurythmics’ song Here Comes the Rain Again. I’m about to walk along the winding path that leads through the main commons. No one is out tonight, no one but me, walking quietly in the drumming, steady rain. Here it comes again.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Pale Shelter"],
    artist: ["Tears For Fears"],
    date: `November 12, 2018`,
    text: `<speak>And now it’s time for some kick-ass new wave! <break time="150ms"/> This is the first song I’d ever heard by Tears For Fears, and it was a sound like not much else I’d ever heard. This fact, coupled with the fact that my Linda loved T.F.F. made me really dig this song. <break time="250ms"/> There have been many new wave songs in my countdowns, and I think each has its own unique sound and raison d’être. <break time="350ms"/> Pale Shelter has a beautiful guitar strum, mixed with the synth beat, that makes my head sway and brings me back in my own mental time machine.<break time="150ms"/>  And the voice of Roland Orzabal is just perfection in the context of their music. Perhaps not the best vocalist alive, but certainly he has a unique set of pipes that is immediately identifiable and swoon-worthy. <break time="150ms"/> I just love listening to him ask, How can I be sure?<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/39_Pale_Shelter_Final.mp3"/></speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 39,
    year: [1983],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=BUfcT5OoP-8"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Pale Shelter",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/39_Pale_Shelter.jpeg",
        textContent: {
          artist: "Artist: Tears For Fears",
          countdown: "Day 39 (53 to 53)",
          primaryText:
            "And now it’s time for some kick-ass new wave! This is the first song I’d ever heard by Tears For Fears, and it was a sound like not much else I’d ever heard. This fact, coupled with the fact that my Linda loved TFF, made me really dig this song. There have been many new wave songs in my countdowns, and I think each has its own unique sound and raison d’être. Pale Shelter has a beautiful guitar strum mixed with the synth beat that makes my head sway and brings me back in my own mental time machine. And the voice of Roland Orzabal is just perfection in the context of their music. Perhaps not the best vocalist alive, but certainly he has a unique set of pipes that is immediately identifiable and swoon-worthy. I just love listening to him ask 'How can I be sure?'",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Jumper"],
    artist: ["Third Eye Blind"],
    date: `November 13, 2018`,
    text: `<speak>There’s not much to be said about lead singer Stephan Jenkins’ voice. <break time="1500ms"/> And overall, Third Eye Blind’s catalogue of music is pretty mediocre, and background filler to the era. <break time="150ms"/> But they had one song that resonated to me: Jumper. <break time="150ms"/> I’ve addressed depression and dependence and suicidal thoughts in much of my social media blogging, but this song, clearly about addiction and the opposite of clarity, sweeps you up in its melodic rock lull, and Jenkins’ voice matches the desperation of wanting to help in any way he can.<break time="150ms"/> He represents any one of us, the real people right here on the ground, as we feel helpless to those we love in need. Even if it means I never get to see you again, but you get the help you need to get yourself well, I would understand.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/38_Jumper_Final.mp3"/></speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 38,
    year: [1997],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=gRYZijLZR-Q"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Jumper",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/38_Jumper.jpeg",
        textContent: {
          artist: "Artist: Third Eye Blind",
          countdown: "Day 38 (53 to 53)",
          primaryText:
            "There’s not much to be said about lead singer Stephan Jenkins’ voice, and overall Third Eye Blind’s catalogue of music is pretty mediocre and background filler to the era, but they had one song that resonated to me: Jumper. I’ve addressed depression and dependence and suicidal thoughts in much of my social media blogging, but this song, clearly about addiction and the opposite of clarity, sweeps you up in its melodic rock lull, and Jenkins’ voice matches the desperation of wanting to help in any way he can. He represents any one of us, the real people right here on the ground, as we feel helpless to those we love in need. Even if it means I never get to see you again, but you get the help you need to get yourself well, I would understand.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["September"],
    artist: ["Earth Wind And Fire"],
    date: `November 14, 2018`,
    text: `<speak>Talk about a song that everyone can agree on as a happy, feel-good dance song! <break time="150ms"/> It’s the perfect party song, maybe even better than the ultimate wedding party song, Celebration by K and T.G. <break time="150ms"/> Weirdly, I don’t really associate September, by Earth, Wind and Fire to the time period of its release. <break time="150ms"/> This is more of a recent love affair.<break time="150ms"/> I guess I’ve always known of its existence, among the cadre of amazing songs by this amazing mass-ensemble band, but ever since the first wedding of my B.F.F., it holds a dear space in my hole-riddled heart, and always makes me happy. Does anyone know what the hell Philip Bailey is singing though? <break time="150ms"/>Is it Party On? <break time="350ms"/> Doesn’t matter. <break time="150ms"/> September is catchy A.F., and we all karaoke the shit out of it when it’s on in the car. <break time="150ms"/> Don’t bother denying it. You want to amp up the mood in any gathering? Crank this song up and party-arty-arty on!<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/37_September_Final.mp3"/></speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 37,
    year: [1978],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=Gs069dndIYk"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "September",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/37_September.jpeg",
        textContent: {
          artist: "Artist: Earth, Wind & Fire",
          countdown: "Day 37 (53 to 53)",
          primaryText:
            "Talk about a song that everyone can agree on as a happy, feel-good dance song! It’s the perfect party song, maybe even better than the ultimate wedding party song, Celebration by K&TG. Weirdly I don’t really associate September by Earth, Wind &Fire to the time period of its release; this is more of a recent love affair. I guess I’ve always known of its existence, among the cadre of amazing songs by this amazing mass-ensemble band, but ever since the first wedding of my BFF, it holds a dear space in my hole-riddled heart and always makes me happy. Does anyone know what the hell Philip Bailey is singing though? Is it 'Party On?' Doesn’t matter; September is catchy AF and we all karaoke the shit out of it when it’s on in the car. Don’t bother denying it. You want to amp up the mood in any gathering? Crank this song up and party-arty-arty on!",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Love Theme from Flashdance"],
    artist: ["Helen Saint John"],
    date: `November 15, 2018`,
    text: `<speak>Today’s song isn’t the first instrumental to pop up on the countdowns, punctuating the fact that many times, the feeling a song brings me has nothing to do with the lyrics.<break time="150ms"/> If I can close my eyes and be moved by music, that’s how I know I’m alive. <break time="150ms"/> The film Flashdance was released in theaters during the springtime of my final year in high school, and with it a cadre of memorable songs on the soundtrack. <break time="150ms"/>Talking about today’s song is actually a little daunting, because it brings up memories of teenage tumult, mostly mine, but also some from the people I loved (some of whom I still do!) when I was a confused, sheltered closet gay Highschool senior. <break time="250ms"/>I don’t want to betray anyone’s trust and/or reveal memories the way I remember them, biased as they likely may be. <break time="150ms"/> The Love Theme from Flashdance is, and will always be, one of the most romantic arrangements ever made. My wishful side would picture life as it should be if the gods hadn’t made me gay; able to return the affections of the girl by whom I was enamored. <break time="150ms"/>But my tortured side secretly longed for the boy with whom everyone was allowed to be in love, but with whom I was not. <break time="150ms"/> I could not take my eyes off him any time he’d enter the band room or the auditorium. He was that vexing.<break time="150ms"/> So instead my world presented the classic, she loves me but I love him, and he just loves himself, quandary, punctuated by the fact that he could have had any girl he’d wanted. You know; the same thing almost every kid in high school has to deal with, all except the exceptional. <break time="150ms"/> Hopelessly helpless. <break time="150ms"/>Tortured. Look but never touch. <break time="150ms"/> A tale as old as time. <break time="150ms"/>But this song is a beautiful lullaby that demands a slow dance in which I just was never destined to participate.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/36_Flashdance_Final.mp3"/></speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 36,
    year: [1983],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=F9Iz4i4aLDA"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Love Theme from Flashdance",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/36_Flashdance.jpeg",
        textContent: {
          artist: "Artist: Helen St. John",
          countdown: "Day 36 (53 to 53)",
          primaryText:
            "Today’s song isn’t the first instrumental to pop up on the countdowns, punctuating the fact that many times the feeling a song brings me has nothing to do with the lyrics. If I can close my eyes and be moved by music, that’s how I know I’m alive. The film Flashdance was released in theaters during the springtime of my final year in high school, and with it a cadre of memorable songs on the soundtrack. Talking about today’s song is actually a little daunting because it brings up memories of teenage tumult, mostly mine but also some from the people I loved (some of whom I still do!) when I was a confused, sheltered closet gay HS senior. I don’t want to betray anyone’s trust and/or reveal memories the way I remember them, biased as they likely may be. The Love Theme from Flashdance is, and will always be, one of the most romantic arrangements ever made. My wishful side would picture life as it should be if the gods hadn’t made me gay; able to return the affections of the girl by whom I was enamored. But my tortured side secretly longed for the boy with whom everyone was allowed to be in love, but with whom I was not. I could not take my eyes off him any time he’d enter the band room or the auditorium. He was that vexing. So instead my world presented the classic 'she loves me but I love him, and he just loves himself' quandary, punctuated by the fact that he could have had any girl he’d wanted. You know; the same thing almost every kid in high school has to deal with, all except the exceptional. Hopelessly helpless. Tortured. Look but never touch. A tale as old as time. But this song is a beautiful lullaby that demands a slow dance in which I just was never destined to participate.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Don’t You Want Me"],
    artist: ["Jody Watley"],
    date: `November 16, 2018`,
    text: `<speak>Her name was Amy, and she was a friend who created moments and opened minds. <break time="150ms"/> She was the life of the party, but in a good way. She was literally friends with everybody; she could find common ground with anyone with whom she’d come into contact. <break time="150ms"/> Amy wouldn’t stand for anyone being bullied, or not living their best life because of fear. <break time="150ms"/> She didn’t stand for bullshit and, though she was everyone’s friend, she wouldn’t hesitate to cut a bitch.<break time="150ms"/> Amy was the best kind of ally. <break time="150ms"/>All this said, it was she who pulled me from my fear, and drove me to my first gay bar experience. <break time="150ms"/> The ride there was full of confidence boosting propaganda, all based on the fact that she believed in me, and wanted me to do the same. <break time="150ms"/> Wide eyed and with a gut teaming with butterflies, I walked into the place feeling every emotion, and Amy never left my side, until she did (the way a momma bird lets the baby fly). <break time="350ms"/> Soon, I found myself on the edge of the dance floor. All the music blended into itself until Jody Watley’s Don’t You Want Me began.<break time="150ms"/> I couldn’t help but move and feel the beat and close my eyes and live. <break time="150ms"/> I'd loved Jody’s voice since the start of the decade, hiding in that Pocono closet, listening to Shalamar during the supposed demise of disco. <break time="150ms"/> This was the song I’d remember until I die or get dementia, for it was the first song I’d ever danced to at a gay bar. And it’s all because of my hero Amy Louise Weiner, whose spirit lives inside me.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/35_Jody_Watley_Final.mp3"/></speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 35,
    year: [1987],
    genre: ``,
    significantHoomans: ["Amy"],
    youtube: ["https://www.youtube.com/watch?v=fL7Za5waqls"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Don’t You Want Me",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/35_Jody_Watley.jpeg",
        textContent: {
          artist: "Artist: Jody Watley",
          countdown: "Day 35 (53 to 53)",
          primaryText:
            "Her name was Amy and she was a friend who created moments and opened minds. She was the life of the party, but in a good way. She was literally friends with everybody; she could find common ground with anyone with whom she’d come into contact. Amy wouldn’t stand for anyone being bullied or not living their best life because of fear. She didn’t stand for bullshit and, though she was everyone’s friend, she wouldn’t hesitate to cut a bitch. Amy was the best kind of ally. All this said, it was she who pulled me from my fear and drove me to my first gay bar experience; the ride there was full of confidence boosting propaganda, all based on the fact that she believed in me and wanted me to do the same. Wide eyed and with a gut teaming with butterflies, I walked into the place feeling every emotion. And Amy never left my side, until she did (the way a momma bird lets the baby fly). Soon I found myself on the edge of the dance floor. All the music blended into itself until Jody Watley’s Don’t You Want Me began. I couldn’t help but move and feel the beat and close my eyes and live. Id’ loved Jody’s voice sicne the start of the decade, hiding in that Pocono closet, listening to Shalamar during the supposed demise of disco. This was the song I’d remember until I die or get dementia, for it was the first song I’d ever danced to at a gay bar. And it’s all because of my hero Amy Louise Weiner, whose spirit lives inside me.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Silly Love Songs"],
    artist: ["Paul McCartney And Wings"],
    date: `November 17, 2018`,
    text: `<speak>Living Legend. <break time="150ms"/> Rock Icon. <break time="150ms"/> Beatle. <break time="150ms"/> Paul. <break time="350ms"/> Paul Mc Cartney’s music has been, and will likely always continue to be, on all of my best-of lists.<break time="150ms"/> Silly Love Songs is this year’s entry and it does not disappoint. Imagine being on top of the world, the universe, and getting to do what you love, what you’re brilliant at, with your lover and best friend? <break time="150ms"/> To me, that perfectly illustrates this song, this moment, as Paul belts out a simple love song with Linda. There are horns and synths, beautiful harmonies, a fugue and a beautiful bass hook, everything one could want in a silly little love song! <break time="250ms"/> Silly Love Songs is one of so many transitional seventies songs by artists previously only known for their rock music. It’s a time I remember well, and with much joy. If I could go back in time to that room upstairs on Wright Avenue, to the record player in the spare room, I could spin Wings At The Speed Of Sound and fill the world with this silly love song. What’s wrong with that? I’d like to know.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/34_Silly_Love_Songs_Final.mp3"/></speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 34,
    year: [1976],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=ap87QgZKTNw"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Silly Love Songs",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/34_Silly_Love_Songs.jpeg",
        textContent: {
          artist: "Artist: Paul McCartney & Wings",
          countdown: "Day 34 (53 to 53)",
          primaryText:
            "Living Legend. Rock Icon. Beatle. Paul. Paul Mc Cartney’s music has been, and will likely always continue to be, on all of my best-of lists. Silly Love Songs is this year’s entry and it does not disappoint. Imagine being on top of the world, the universe, and getting to do what you love, what you’re brilliant at, with your lover and best friend? To me, that perfectly illustrates this song, this moment, as Paul belts out a simple love song with Linda. There are horns and synths, beautiful harmonies, a fugue and a beautiful bass hook, everything one could want in a silly little love song! Silly Love Songs is one of so many transitional seventies songs by artists previously only known for their rock music. It’s a time I remember well, and with much joy. If I could go back in time to that room upstairs on Wright Avenue, to the record player in the spare room, I could spin Wings At The Speed Of Sound and fill the world with this silly love song. What’s wrong with that? I’d like to know.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Good Enough", "I Will Remember You"],
    artist: ["Sarah McLachlan", "Sarah McLachlan"],
    date: `November 18, 2018`,
    text: `<speak>Thanks to her advocacy for Animal Rights, whenever you hear a song by Sarah McLachlan you might cringe, and immediately think of abused shelter animals, shivering in the cold. <break time="150ms"/> And to that I say, GOOD, do something! Donate a few bucks and help feed and shelter the animals! <break time="150ms"/> BUT, this amazingly talented chick ruled the nineties with good reason. <break time="150ms"/>Turns out she advocated for more than just animals. Her lyrics are moving and emotional, and her music is just breathtaking. The first time I’d ever heard her was during a shift at Structure in the Green Acres Mall, shortly after the start of my 4-year stint, on our audio track system. <break time="150ms"/> The song was called Good Enough; with an ongoing soundtrack of mindless nonsense in the background of a retail environment, this song made me stop and listen. <break time="150ms"/> The message was powerful and commanding. <break time="350ms"/> I was hooked. Next came I Will Remember You, a quietly beautiful song that, at first, reminded me of my dad, for whom I hadn’t really mourned much because I hadn’t understood a truly deep degree of loss. <break time="150ms"/> It wasn’t until the unexpected death of my dear friend Amy (whom I spoke of 2 days ago when I blogged about dancing at my first ever gay bar to Jody Watley) that I truly knew what it was to feel hollow and lost; this song was forever my anthem to her. <break time="150ms"/> Sarah McLachlan was among the pioneers of a female rock movement, topping charts and dominating concert venues. Many of her subsequently released songs were really just as good as the two that first hooked me. She paved the road for Alanis Morissette, Natalie Merchant, Joan Osborne and so many others, right up to the current powerhouse that is Sara Bareilles. <break time="150ms"/> And I’m okay with her voice being the voice of the voiceless; her music is that moving.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/33_Sarah_McLachlan_Final.mp3"/></speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 33,
    year: [1994, 1993],
    genre: ``,
    significantHoomans: ["Amy", "My Father"],
    youtube: [
      "https://www.youtube.com/watch?v=ZjKPJbtghvs",
      "https://www.youtube.com/watch?v=nSz16ngdsG0",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Good Enough / I Will Remember You",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/33_Sarah_McLachlan.jpeg",
        textContent: {
          artist: "Artist: Sarah McLachlan",
          countdown: "Day 33 (53 to 53)",
          primaryText:
            "Thanks to her advocacy for Animal Rights, when you hear a song by Sarah McLachlan you might cringe and immediately think of abused shelter animals shivering in the cold. And to that I say, GOOD, do something! Donate a few bucks and help feed and shelter the animals! BUT, this amazingly talented chick ruled the nineties with good reason. Turns out she advocated for more than just animals. Her lyrics are moving and emotional, and her music is just breathtaking. The first time I’d ever heard her was during a shift at Structure in the Green Acres Mall, shortly after the start of my 4-year stint, on our audio track system. The song was called Good Enough; with an ongoing soundtrack of mindless nonsense in the background of a retail environment, this song made me stop and listen. The message was powerful and commanding. I was hooked. Next came I Will Remember You, a quietly beautiful song that, at first, reminded me of my dad for whom I hadn’t really mourned much because I hadn’t understood a truly deep degree of loss. It wasn’t until the unexpected death of my dear friend Amy (whom I spoke of 2 days ago when I blogged about dancing at my first ever gay bar to Jody Watley) that I truly knew what it was to feel hollow and lost; this song was forever my anthem to her. Sarah McLachlan was among the pioneers of a female rock movement, topping charts and dominating concert venues. Many of her subsequently released songs were really just as good as the two that first hooked me. She paved the road for Alanis Morissette, Natalie Merchant, Joan Osborne and so many others, right up to the current powerhouse that is Sara Bareilles. And I’m okay with her voice being the voice of the voiceless; her music is that moving.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["You Take My Breath Away"],
    artist: ["Rex Smith"],
    date: `November 19, 2018`,
    text: `<speak>Yesterday’s song spoke of a forever youth, and today’s song makes me feel that way all over again. <break time="150ms"/> It’s a beautiful, cheesy ballad, sung by a seventies heart throb the likes of Andy Gibb and William Katt, <break time="150ms"/> another Cali guy with that beautiful blond mane.<break time="250ms"/> I present to you this song by actor and crooner Rex Smith, You Take My Breath Away.<break time="150ms"/> I first heard this song with Jan, in her living room on Taft Avenue. There was a movie called Sooner Or Later, about a teenaged girl who falls for her older guitar instructor, and she fakes being 17 to be able to spend time with him. <break time="250ms"/> If you could see him, you’d know why and you wouldn’t blame her. <break time="150ms"/> Jan and I both swooned over him too, even though I wasn’t quite ‘out’ yet. <break time="150ms"/> Though from context I have to imagine Jan knew I was a giant homo by then.<break time="250ms"/> Whether or not the song holds up, or is cheesy, or whatever you want to say, I think that from the vantage point of a thirteen year old girl (which we all know I am, deep down), it’s completely swoon-worthy and when it’s being sung TO you, you will also lose your shit. <break time="150ms"/> This song still takes my breath away.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/32_Rex_Smith_Final.mp3"/></speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 32,
    year: [1979],
    genre: ``,
    significantHoomans: ["Jan"],
    youtube: ["https://www.youtube.com/watch?v=vktvh42KNGw"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "You Take My Breath Away",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/32_Rex_Smith.jpeg",
        textContent: {
          artist: "Artist: Rex Smith",
          countdown: "Day 32 (53 to 53)",
          primaryText:
            "Yesterday’s song spoke of a forever youth, and today’s song makes me feel that way all over again. It’s a beautiful, cheesy ballad sung by a seventies heart throb the likes of Andy Gibb and William Katt, another Cali guy with that beautiful blond mane. I present to you this song by actor and crooner Rex Smith, You Take My Breath Away. I first heard this song with Jan, in her living room on Taft Avenue. There was a movie called Sooner Or Later about a teenaged girl who falls for her older guitar instructor, and she fakes being 17 to be able to spend time with him. If you could see him, you’d know why and you wouldn’t blame her. And Jan and I both swooned over him too, even though I wasn’t quite ‘out’ yet. Though from context I have to imagine Jan knew I was a giant homo by then. Whether or not the song holds up, or is cheesy, or whatever you want to say, I think that from the vantage point of a thirteen year old girl (which we all know I am, deep down), it’s completely swoon-worthy and when it’s being sung TO you, you will also lose your shit. This song still takes my breath away.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Easy Lover"],
    artist: ["Philip Bailey And Phil Collins"],
    date: `November 20, 2018`,
    text: `<speak>Pop star and funk genius band together in the height of the M.T.V. era and magic happens. <break time="150ms"/>And if you know me at all, you KNOW I cannot resist a good duet. <break time="150ms"/> This one is at the top of my list of favorites. I present to you one of the best songs from the mid-eighties, and most played videos on M.T.V.<break time="150ms"/> Easy Lover, by Earth Wind & Fire vocal magician Philip Bailey, and the brilliant Phil Collins. <break time="150ms"/> I can imagine myself sitting on my high-riser bed in Aunt Kay’s basement where I lived ever so briefly in January of 1985 while deciding what to do about college. <break time="150ms"/> the T.V. was perpetually tuned into M.T.V., from the minute I woke up (late) to the moment I’d fall asleep (late).  <break time="250ms"/> And there they’d be, Collins playfully trying to mimic Bailey’s dance moves. <break time="150ms"/> The song is clearly about some filthy British slutrocket, but that doesn’t even matter. It just kicks ass. It’s a happy, bouncy pop classic and makes me feel happy. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/"/></speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 31,
    year: [1984],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=JkRKT6T0QLg"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Easy Lover",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/31_Easy_Lover.jpeg",
        textContent: {
          artist: "Artist: Philip Bailey & Phil Collins",
          countdown: "Day 31 (53 to 53)",
          primaryText:
            "Pop star and funk genius band together in the height of the MTV era and magic happens. And if you know me at all, you KNOW I cannot resist a good duet. This one is at the top of my list of favorites. I present to you one of the best songs from the mid-eighties and most played videos on MYV, Easy Lover by Earth Wind & Fire vocal magician Philip Bailey and the brilliant Phil Collins. I can imagine myself sitting on my high-riser bed in Aunt Kay’s basement where I lived ever so briefly in January of 1985 while deciding what to do about college; the TV was perpetually tuned into MTV, from the minute I woke up (late) to the moment I’d fall asleep (late).  And there they’d be, Collins playfully trying to mimic Bailey’s dance moves. The song is clearly about some filthy British slutrocket, but that doesn’t even matter. It just kicks ass. It’s a happy, bouncy pop classic and makes me feel happy. ",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Bluer Than Blue"],
    artist: ["Michael Johnson"],
    date: `November 21, 2018`,
    text: `<speak>Back to weepy ballad land, with Bluer Than Blue, by one-hit wonder balladeer, Michael Johnson. <break time="150ms"/> I found this song in a moment, relatively recently in the scheme of things, when loneliness started to creep in. <break time="150ms"/> I had met someone that seemed to be a really great fit for me and it turned out that he really only belonged in the friend zone, but this song became my anthem to the moment. <break time="150ms"/> I hear it now and it’s just a pleasant song about moving on in the world after, well, you know. <break time="350ms"/> It’s all about the bridge for me<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/30_Bluer_Than_Blue_Final1.mp3"/></speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 30,
    year: [],
    genre: ``,
    significantHoomans: [],
    youtube: [""],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Bluer Than Blue",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/30_Bluer_Than_Blue.jpeg",
        textContent: {
          artist: "Artist: Michael Johnson",
          countdown: "Day 30 (53 to 53)",
          primaryText:
            "Back to weepy ballad land with Bluer Than Blue by one-hit wonder balladeer, Michael Johnson. I found this song in a moment, relatively recently in the scheme of things, when loneliness started to creep in. I had met someone that seemed to be a really great fit for me and it turned out that he really only belonged in the friend zone, but this song became my anthem to the moment. I hear it now and it’s just a pleasant song about moving on in the world after… well, you know. t’s all about the bridge for me",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Forever Young"],
    artist: ["Alphaville"],
    date: `November 22, 2018`,
    text: `<speak>When the title of a song is literal perfection in describing one’s mental state, you love that song ,and play the shit out of it when it comes on the radio. <break time="150ms"/> Or in this case, Sirius X.M. channel 33 First Wave with Larry the Duck, which is my current day connection to what was so prevalent and formative to me in the mid-eighties. <break time="250ms"/>Forever Young, by Alphaville. <break time="150ms"/> Well, that’s how I wanna be. And it’s how I actually feel inside my brain, when my eyes don’t catch a self-glimpse in a passing mirror, and I’m reminded that I’m actually a misshapen 53 year old. <break time="150ms"/> And then you listen to the lyrics and they’re actually topical. I suppose the state of the world is such that it never really changes and we, as humans, will always yearn for the innocence of youth. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/29_Forever_Young_Final.mp3"/></speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 29,
    year: [1984],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=oNjQXmoxiQ8"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Forever Young",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/29_Forever_Young.jpeg",
        textContent: {
          artist: "Artist: Alphaville",
          countdown: "Day 29 (53 to 53)",
          primaryText:
            "When the title of a song is literal perfection in describing one’s mental state, you love that song and play the shit out of it when it comes on the radio. Or in this case, SiriusXM channel 33 First Wave with Larry the Duck, which is my current day connection to what was so prevalent and formative to me in the mid-eighties. Forever Young by Alphaville, well, that’s how I wanna be. And it’s how I actually feel inside my brain when my eyes don’t catch a self-glimpse in a passing mirror and I’m reminded that I’m actually a misshapen 53 year old.  And then you listen to the lyrics and they’re actually topical. I suppose the state of the world is such that it never really changes and we, as humans, will always yearn for the innocence of youth. ",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Everybody Hurts"],
    artist: ["R.E.M."],
    date: `November 23, 2018`,
    text: `<speak>Some songs in my countdown are as much about the music video (remember those?) as they are about the actual song itself. <break time="150ms"/> Everybody Hurts, by R.E.M. is one of those songs. <break time="150ms"/>The video is a focus on people’s thoughts as they sit in a traffic jam; it’s a hauntingly beautiful song that speaks about community as much as it talks of despair. <break time="150ms"/> Just listening to the song, you are being shown support and asked to just hold on, take comfort in your friends, you are not alone. <break time="150ms"/> When the tempo swells midway through the song, I’m swept away in the moment and brought back to every single time in my life that I wanted to give up and just stop the world, but then Michael Stipe brings you back to earth, telling you, You’re not alone. <break time="150ms"/> Like a hopeful beacon, he reminds you that although life can suck and everybody hurts sometimes, if you hold on you’ll remember the good, and all the reasons to stay. <break time="150ms"/> Suicide isn’t an easy topic for anyone to broach. Certainly it’s not for me. It’s a permanent solution to momentary madness that inevitably leaves lives destroyed. You’ve devastated your mother and sister and lover and all your friends and co-workers and the list is endless, because when you decide to jump, you’re not thinking about anyone or anything but how miserable you are. <break time="150ms"/> But that isn’t everything, is it? It isn’t anything, really, in the scheme of things. And, you’re not alone, because everybody hurts. So hold on<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/28_Everybody_Hurts_Final.mp3"/></speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 28,
    year: [1992],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=5rOiW_xY-kc"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Everybody Hurts",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/28_Everybody_Hurts.jpeg",
        textContent: {
          artist: "Artist: R.E.M.",
          countdown: "Day 28 (53 to 53)",
          primaryText:
            "Some songs in my countdown are as much about the music video (remember those?) as they are about the actual song itself. Everybody Hurts by R.E.M. is one of those songs. The video is a focus on people’s thoughts as they sit in a traffic jam; it’s a hauntingly beautiful song that speaks about community as much as it talks of despair. Just listening to the song, you are being shown support and asked to just hold on, take comfort in your friends, you are not alone. When the tempo swells midway through the song, I’m swept away in the moment and brought back to every single time in my life that I wanted to give up and just stop the world, but then Michael Stipe brings you back to earth, telling you 'You’re not alone.' Like a hopeful beacon, he reminds you that although life can suck and everybody hurts sometimes, if you hold on you’ll remember the good and all the reasons to stay. Suicide isn’t an easy topic for anyone to broach. Certainly it’s not for me. It’s a permanent solution to momentary madness that inevitably leaves lives destroyed. You’ve devastated your mother and sister and lover and all your friends and co-workers and the list is endless, because when you decide to jump, you’re not thinking about anyone or anything but how miserable you are. But that isn’t everything, is it? It isn’t anything, really, in the scheme of things. And, you’re not alone, because everybody hurts. So hold on",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["What You Won’t Do For Love"],
    artist: ["Bobby Caldwell"],
    date: `November 24, 2018`,
    text: `<speak>I am a sucker for a saxophone solo, or a song that features any kind of saxophone. <break time="150ms"/>You should know this about me. <break time="150ms"/> Today’s song does NOT disappoint in that department. This is What You Won’t Do For Love, by jazz artist Bobby Caldwell, one of those artists whose voice is so smooth and jazz-perfect that you haven’t a clue he’s actually a white guy. <break time="250ms"/>His song is a stand-out, in a sea of music by the likes of Boz Scaggs and other yacht rock giants. <break time="150ms"/> This is one of those old gems that still sounds as good today as the first day you ever heard it. It’s been covered by other artists, but nothing really comes close to the horn-laden original. This is a repeat-worthy song, especially the extended version that isn’t always heard on the radio. It’s timeless musical syrup and I love it.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/27_Bobby_Caldwell_Final.mp3"/></speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 27,
    year: [1978],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=Gru4IfbKlfU"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "What You Won’t Do For Love",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/27_Bobby_Caldwell.jpeg",
        textContent: {
          artist: "Artist: Bobby Caldwell",
          countdown: "Day 27 (53 to 53)",
          primaryText:
            "I am a sucker for a saxophone solo, or a song that features any kind of saxophone. You should know this about me. Today’s song does NOT disappoint in that department. This is What You Won’t Do For Love by jazz artist Bobby Caldwell, one of those artists whose voice is so smooth and jazz-perfect that you haven’t a clue he’s actually a white guy. His song is a stand-out in a sea of music by the likes of Boz Scaggs and other yacht rock giants. This is one of those old gems that still sounds as good today as the first day you ever heard it. It’s been covered by other artists, but nothing really comes close to the horn-laden original. This is a repeat-worthy song, especially the extended version that isn’t always heard on the radio. It’s timeless musical syrup and I love it.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Le Freak", "Get Lucky"],
    artist: ["Chic", "Daft Punk"],
    date: `November 25, 2018`,
    text: `<speak>His name is synonymous with that funky signature bassline. <break time="150ms"/> He’s responsible for some of the most amazing disco and funk tracks of our time. He’s worked with and produced music for such legendary artists, like Madonna, Diana Ross, David Bowie, Duran Duran and Sister Sledge.  And he’s even worked with current musical acts like Daft Punk, as seen today. <break time="150ms"/> His name is Nile Rodgers and, together with his band Chic, I present to you one of the best disco songs of our time, Le Freak. <break time="150ms"/> Seventh grade, dance intramural class, Phyllis Tocci in the lead teaching us how to do le Freak. Joey Henderson and I were the only boys in the class (or maybe Bobby Melk was there too?) and this song takes me immediately back to that moment. Years later the real story behind the song is told and I fall in love with it all over again. As relative unknowns, Nile and the band Chic tried to gain access to the exclusive Studio 54 and were readily turned away. One of the band members shouted, Fuck off!, to the bouncer, and as they walked away, the song was born and became the song we know now.<break time="350ms"/> Fast forward to 2013.<break time="150ms"/> Daft Punk releases Get Lucky, a catchy bounce-fest featuring the voice of Pharrell, but unmistakably bearing the signature funky guitars of Nile Rodgers. Like the legend of the Phoenix, this legend just keeps going!<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/26_Nile_Rogers_Final.mp3"/></speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 26,
    year: [1978, 2013],
    genre: ``,
    significantHoomans: [],
    youtube: [
      "https://www.youtube.com/watch?v=aXgSHL7efKg",
      "https://www.youtube.com/watch?v=5NV6Rdv1a3I",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Le Freak (Chic) / Get Lucky",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/26_Chic-Le-Freak.jpeg",
        textContent: {
          artist: "Artist: Chic / Daft Punk",
          countdown: "Day 26 (53 to 53)",
          primaryText:
            "His name is synonymous with that funky signature bassline. He’s responsible for some of the most amazing disco and funk tracks of our time. He’s worked with and produced music for such legendary artists like Madonna, Diana Ross, David Bowie, Duran Duran and Sister Sledge, and he’s even worked with current musical acts like Daft Punk, as seen today. His name is Nile Rodgers and, together with his band Chic, I present to you one of the best disco songs of our time, Le Freak. Seventh grade, dance intramural class, Phyllis Tocci in the lead teaching us how to do le Freak. Joey Henderson and I were the only boys in the class (or maybe Bobby Melk was there too?) and this song takes me immediately back to that moment. Years later the real story behind the song is told and I fall in love with it all over again. As relative unknowns, Nile and the band Chic tried to gain access to the exclusive Studio 54 and were readily turned away. One of the band members shouted “Fuck off!” to the bouncer, and as they walked away, the song was born and became the song we know now. Fast forward to 2013. Daft Punk releases Get Lucky, a catchy bounce-fest featuring the voice of Pharrell, but unmistakably bearing the signature funky guitars of Nile Rodgers. Like the legend of the Phoenix, this legend just keeps going!",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Do You Wanna Funk", "Smalltown Boy"],
    artist: ["Sylvester", "Bronski Beat"],
    date: `November 26, 2018`,
    text: `<speak>Today’s double-shot is dedicated to the movies I saw as a very young gay guy, just coming out and trying to find common ground in a world that evidently hated me and my existence. <break time="250ms"/> I first discovered a movie called Parting Glances from Vinny; he lent me a V.H.S. tape and said I would love this movie, and I did. <break time="150ms"/> The movie doesn’t really hold up today, but there is a scene in a club (to which I still had never been as indicated a few songs ago) and in it, Smalltown Boy by Bronski Beat plays in the background.<break time="250ms"/> When I hear it, even now, I connect to that scary time for guys like me, but in a good way, if that makes any sense. <break time="150ms"/> But back then, whenever I’d hear the song on W.L.I.R., sung by openly gay mezzo-soprano Jimmy Somerville, I’d get a feeling of community. A freak among freaks.<break time="350ms"/> Then came the film Longtime Companion, and the song Do Ya Wanna Funk, by disco drag goddess Sylvester. <break time="150ms"/> It’s also played while the gays are out dancing and drinking on Fire Island in the early 80s before AIDS took grip and rattled us.<break time="150ms"/>  This song represents revelry and is forcefully joyous. It’s everything I’d imagine the gay community was just before AIDS killed so many of us and the government stood by watching. <break time="150ms"/> Soon after, my friend D.J. Donnie would play this at Grand Central and Vinny and I would dance and dance and dance<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/25_Sylvester_Final.mp3"/></speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 25,
    year: [1983, 1984],
    genre: ``,
    significantHoomans: ["Vinny"],
    youtube: [
      "https://www.youtube.com/watch?v=PeYUTbU_iTw",
      "https://www.youtube.com/watch?v=88sARuFu-tc",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Do You Wanna Funk / Smalltown Boy",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/25_Sylvester.jpeg",
        textContent: {
          artist: "Artist: Sylvester / Bronski Beat",
          countdown: "Day 25 (53 to 53)",
          primaryText:
            "Today’s double-shot is dedicated to the movies I saw as a very young gay guy just coming out and trying to find common ground in a world that evidently hated me and my existence. I first discovered a movie called Parting Glances from Vinny; he lent me a VHS tape and said I would love this movie, and I did. The movie doesn’t really hold up today, but there is a scene in a club (to which I still had never been as indicated a few songs ago) and in it, Smalltown Boy by Bronski Beat plays in the background. When I hear it, even now, I connect to that scary time for guys like me, but in a good way, if that makes any sense. But back then, whenever I’d hear the song on WLIR, sung by openly gay mezzo-soprano Jimmy Somerville, I’d get a feeling of community. A freak among freaks. Then came the film Longtime Companion and the song Do Ya Wanna Funk by disco drag goddess Sylvester. It’s also played while the gays are out dancing and drinking on Fire Island in the early 80s before AIDS took grip and rattled us. This song represents revelry and is forcefully joyous. It’s everything I’d imagine the gay community was just before AIDS killed so many of us and the government stood by watching. Soon after, my friend DJ Donnie would play this at Grand Central and Vinny and I would dance and dance and dance...",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Through The Years"],
    artist: ["Kenny Rogers"],
    date: `November 27, 2018`,
    text: `<speak>If you’ve paid any attention to me at all these past few years, you may know why Through The Years is on my list. <break time="150ms"/> This should have been the song to which I’d have danced the mother-son dance at my wedding.<break time="150ms"/> In theory. In my fantastical daydreams. <break time="150ms"/> My mother loved the silken voice of this Country legend, so much so that I endured the twang and took her to see him play live in Westbury so many years ago. <break time="150ms"/> From that concert, I have a very distinct memory: the moment his band began to play this song, my little mother held my hand. <break time="150ms"/> I mean, come on. Not a dry eye in the house, I know. <break time="w50ms"/>Certainly not in this, house. <break time="250ms"/> So, yeah, it’s a love song, I get that. <break time="150ms"/> But the message will always speak to me about all the things she ever gave me, and how we got through so many shitty times together, not the least of which were the deaths of my dad or my Aunt Annie or our beloved Mary. <break time="150ms"/> We were stronger together at faking it till we made it. <break time="150ms"/> It’s difficult to talk about this song too much without losing my shit. When I assist Chris on weddings and watch the groom inevitably dance with his mom, I am always reminded of the blaring truth that this will not ever happen for me. Soo<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/24_Through_The_Years_Final.mp3"/></speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 24,
    year: [1981],
    genre: ``,
    significantHoomans: ["Angie"],
    youtube: ["https://www.youtube.com/watch?v=qJ4BHM9CgGU"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Through The Years",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/24_Through_The_Years.jpeg",
        textContent: {
          artist: "Artist: Kenny Rogers",
          countdown: "Day 24 (53 to 53)",
          primaryText:
            "If you’ve paid any attention to me at all these past few years, you may know why Through The Years is on my list. This should have been the song to which I’d have danced the mother-son dance at my wedding. In theory. In my fantastical daydreams. My mother loved the silken voice of this Country legend, so much so that I endured the twang and took her to see him play live in Westbury so many years ago. From that concert, I have a very distinct memory: the moment his band began to play this song, my little mother held my hand. I mean, come on. Not a dry eye in the house, I know. Certainly not in *this* house. So, yeah, it’s a love song, I get that. But the message will always speak to me about all the things she ever gave me, and how we got through so many shitty times together, not the least of which were the deaths of my dad or my Aunt Annie or our beloved Mary. We were stronger together at faking it till we made it. It’s difficult to talk about this song too much without losing my shit. When I assist Chris on weddings and watch the groom inevitably dance with his mom, I am always reminded of the blaring truth that this will not ever happen for me. Soo....",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Him"],
    artist: ["Rupert Holmes"],
    date: `November 28, 2018`,
    text: `<speak>Until recently, I had no idea that Yacht Rock was a legitimate music genre, but now that I am aware of its existence, it makes perfect sense, and it turns out I’ve been a giant fan of Yacht Rock since its inception, somewhere between 1976 and 1982. <break time="150ms"/> Wikipedia defines Yacht Rock as a, broad music style and aesthetic, identified with soft rock, drawing on sources such as smooth soul, smooth jazz,R and B, funk, and disco. <break time="150ms"/> Common stylistic traits of the genre include high-quality production, clean vocals, and a focus on light, catchy melodies. <break time="350ms"/> Enter Rupert Holmes, who might as well have invented the exercise. <break time="150ms"/> Everyone on the planet knows, and either loves or hates, the Pina Colada song. <break time="150ms"/> But this genius songwriter and singer had several other, less air-played songs, one of which is among my favorites from that time era: Him. <break time="250ms"/> Holmes was a storyteller whose songs were the ancestor of audio-books; as he’s singing, a story unfolds and you’ve become unwittingly enwrapped. <break time="150ms"/> This song is about a love triangle, but as much as I love the storytelling, in this case it’s more about the yacht-rocky music and Holmes’ straight-forward but earnest vocals. What won me over was the symphonic melodies toward the end of the song that drift off into the sunset, and like many of the songs on all my countdowns, the instrumental could go on endlessly and I could close my eyes and ride its current.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/23_Him_Rupert_Holmes_Final.mp3"/></speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 23,
    year: [1979],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=b_eQ63Plv6A"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Him",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/23_Him_Rupert_Holmes.jpeg",
        textContent: {
          artist: "Artist: Rupert Holmes",
          countdown: "Day 23 (53 to 53)",
          primaryText:
            "Until recently I had no idea that 'Yacht Rock' was a legitimate music genre, but now that I am aware of its existence, it makes perfect sense, and it turns out I’ve been a giant fan of Yacht Rock since its inception, somewhere between 1976 and 1982. Wikipedia defines Yacht Rock as a 'broad music style and aesthetic identified with soft rock, drawing on sources such as smooth soul, smooth jazz, R&B, funk, and disco. Common stylistic traits of the genre include high-quality production, clean vocals, and a focus on light, catchy melodies.' Enter Rupert Holmes, who might as well have invented the exercise. Everyone on the planet knows, and either loves or hates, the Pina Colada song. But this genius songwriter and singer had several other, less air-played songs, one of which is among my favorites from that time era: Him. Holmes was a storyteller whose songs were the ancestor of audio-books; as he’s singing, a story unfolds and you’ve become unwittingly enwrapped. This song is about a love triangle, but as much as I love the storytelling, in this case it’s more about the yacht-rocky music and Holmes’ straight-forward but earnest vocals. What won me over was the symphonic melodies toward the end of the song that drift off into the sunset, and like many of the songs on all my countdowns, the instrumental could go on endlessly and I could close my eyes and ride its current.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Harmony", "Empty Garden Hey Hey Johnny"],
    artist: ["Elton John", "Elton John"],
    date: `November 29, 2018`,
    text: `<speak>I can’t believe I have never had a song by Sir Elton on this countdown before now. <break time="150ms"/> That said, considering his brilliant, endless catalog spanning 5 decades, I tried my best to narrow it down to just one and could not. <break time="150ms"/> That would have been an impossible task. Even just narrowing to two was tough, but here they are.<break time="250ms"/> First up is a song from the early part of Sir Elton’s career, when his music was less pop and more story-telling. <break time="150ms"/> But I just happen to love Harmony because, surprise-surprise, my big sister Rosemarie loved it, and therefore it reminds me of her face when she was the most beautiful girl in the world, back when the days were never-ending and life was simple. <break time="150ms"/> It’s hard to express the way I felt about her back then; she was just as magnificent as any of those celebrities I admired, but I didn’t have to share her with the world. She was mine and I was hers. <break time="250ms"/> I hear Harmony and I am instantly eight years old and my sister still lives in our house; she hasn’t gotten married yet so I still get to play her records and go on walks in the park with her. <break time="350ms"/>I love the way this song will always make me feel, connected to the most special person to have ever affected my life. <break time="450ms"/> Next is a heartbreaking ballad sung about Elton’s dear friend John Lennon who, not long before the song was written, was murdered outside his home in the presence of his wife. <break time="150ms"/> Everyone alive in the seventies and eighties knows the story, but Elton John put into words how the world felt after Lennon’s murder. <break time="150ms"/> Bereft, empty, confused. <break time="150ms"/> Such a beautiful song about such a sad moment in our collective history. <break time="150ms"/> So it turns out my favorite Elton John songs are super-downers; I suppose I could have gone with his kitschy duet with Kiki Dee, or one of his many, MANY castle-storming monsters like the Bitch Is Back, or Saturday Is Alright for Fighting, or Philadelphia Freedom, or Bennie And The Jets, or<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/22_Elton_John_Final.mp3"/></speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 22,
    year: [1973, 1982],
    genre: ``,
    significantHoomans: ["Rosemarie"],
    youtube: [
      "https://www.youtube.com/watch?v=Qh123TonnOc",
      "https://www.youtube.com/watch?v=SWyy7Huc6KA",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Harmony / Empty Garden [Hey Hey Johnny]",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/22_Elton_John.jpeg",
        textContent: {
          artist: "Artist: Elton John",
          countdown: "Day 22 (53 to 53)",
          primaryText:
            "I can’t believe I have never had a song by Sir Elton on this countdown before now. That said, considering his brilliant, endless catalog spanning 5 decades, I tried my best to narrow it down to just one and could not. That would have been an impossible task. Even just narrowing to two was tough, but here they are. First up is a song from the early part of Sir Elton’s career when his music was less pop and more story-telling. But I just happen to love Harmony because, surprise-surprise, my big sister Rosemarie loved it, and therefore it reminds me of her face when she was the most beautiful girl in the world, back when the days were never-ending and life was simple. It’s hard to express the way I felt about her back then; she was just as magnificent as any of those celebrities I admired, but I didn’t have to share her with the world. She was mine and I was hers. I hear Harmony and I am instantly eight years old and my sister still lives in our house; she hasn’t gotten married yet so I still get to play her records and go on walks in the park with her. I love the way this song will always make me feel, connected to the most special person to have ever affected my life. Next is a heartbreaking ballad sung about Elton’s dear friend John Lennon who, not long before the song was written, was murdered outside his home in the presence of his wife. Everyone alive in the seventies and eighties knows the story, but Elton John put into words how the world felt after Lennon’s murder. Bereft, empty, confused. Such a beautiful song about such a sad moment in our collective history. So it turns out my favorite Elton John songs are super-downers; I suppose I could have gone with his kitschy duet with Kiki Dee, or one of his many, MANY castle-storming monsters like the Bitch Is Back or Saturday Is Alright for Fighting or Philadelphia Freedom or Bennie And The Jets or",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Now And Forever"],
    artist: ["Carole King"],
    date: `November 30, 2018`,
    text: `<speak>Right from the opening note of this song, I am transported back to 1992. <break time="150ms"/> It’s difficult to explain what that means, except to just push through and talk about the aspirations insinuated in this song. <break time="150ms"/> Now And Forever, by the timeless Carole King. <break time="150ms"/>1992 included both the pinnacle and the downhill destruction of my very first love. It also marked a period of time before my whole life would take a new course, forever pointing to where I am at this moment. <break time="150ms"/> Man, was he beautiful. Even with his fake blue contacts, I still loved that face. <break time="150ms"/> I loved his timid contrast to my brazenness and I loved how we matched in so many other ways.<break time="150ms"/> I loved his family and I loved that my family loved him, especially my little Angie. <break time="150ms"/> If only I knew then how amazing it was to be young and in love, that we didn’t have to hurry life along.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/21_Carole_King_Final.mp3"/></speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 21,
    year: [1992],
    genre: ``,
    significantHoomans: ["Frank"],
    youtube: ["https://www.youtube.com/watch?v=t-tDCWZu6OI"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Now And Forever",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/21_Carole_King.jpeg",
        textContent: {
          artist: "Artist: Carole King",
          countdown: "Day 21 (53 to 53)",
          primaryText:
            "Right from the opening note of this song, I am transported back to 1992. It’s difficult to explain what that means except to just push through and talk about the aspirations insinuated in this song, Now And Forever by the timeless Carole King. 1992 included both the pinnacle and the downhill destruction of my very first love. It also marked a period of time before my whole life would take a new course, forever pointing to where I am at this moment. Man, was he beautiful. Even with his fake blue contacts, I still loved that face. I loved his timid contrast to my brazenness and I loved how we matched in so many other ways. I loved his family and I loved that my family loved him, especially my little Angie. If only I knew then how amazing it was to be young and in love, that we didn’t have to hurry life along.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["You Are Loved Don’t Give Up"],
    artist: ["Josh Groban"],
    date: `December 1, 2018`,
    text: `<speak>This song happened onto the world around 2006, just before I met my Woof, and during the years that my sister was fighting her greatest battle. <break time="150ms"/> I remember pretty clearly an autumn day in 2007 at the start of my relationship with Chris, when we walked through some pretty park on the north shore and he began sharing some very personal stuff with me. <break time="250ms"/> I don’t think I could ever have loved a person more than I did in that moment; he was broken but you’d never know it. <break time="150ms"/> And as he was going through this, I did my best to be there by his side, all the while burying my sadness over losing my mom that May, and constantly being shadowed with a feeling of helplessness over Sis’s health struggle. <break time="250ms"/> This song, sung brilliantly by contemporary crooner with no equal Josh Groban, is my song for both of them: my woof and my sister, my two favorite people to have ever impacted my life. <break time="150ms"/> It’s my anthem to them, and yet it’s something both of them would sing to me, the one who tries to be strong but is only ever just barely held together by duct tape. <break time="250ms"/> I sit here and type away at how I was there for them, but the truth is they were both strong for me. <break time="150ms"/> At their lowest, they lifted me up. <break time="250ms"/> When I am low, I try try try to remember their struggles, and remember that I am loved, on this plane and from the other side.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/"/></speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 20,
    year: [2006],
    genre: ``,
    significantHoomans: ["Stomps", "Rosemarie"],
    youtube: ["https://www.youtube.com/watch?v=EGLSk3AVcUU"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "You Are Loved [Don’t Give Up]",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/20_You_Are_Loved.jpeg",
        textContent: {
          artist: "Artist: Josh Groban",
          countdown: "Day 20 (53 to 53)",
          primaryText:
            "This song happened onto the world around 2006, just before I met my Woof and during the years that my sister was fighting her greatest battle. I remember pretty clearly a, autumn day in 2007 at the start of my relationship with Chris when we walked through some pretty park on the north shore and he began sharing some very personal stuff with me. I don’t think I could ever have loved a person more than I did in that moment; he was broken but you’d never know it. And as he was going through this, I did my best to be there by his side, all the while burying my sadness over losing my mom that May and constantly being shadowed with a feeling of helplessness over Sis’s health struggle. This song, sung brilliantly by contemporary crooner with no equal Josh Groban, is my song for both of them: my woof and my sister, my two favorite people to have ever impacted my life. It’s my anthem to them, and yet it’s something both of them would sing to me, the one who tries to be strong but is only ever just barely held together by duct tape. I sit here and type away at how I was there for them, but the truth is they were both strong for me. At their lowest, they lifted me up. When I am low, I try try try to remember their struggles and remember that I am loved, on this plane and from the other side.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["What's Up"],
    artist: ["4 Non Blondes"],
    date: `December 2, 2018`,
    text: `<speak>1992 was a year of radical and amazing change in music. And I was alive and living through it, aware and amazed. <break time="150ms"/>I actually remember exactly where and with who I was the first time I ever heard What’s Up, by 4 Non Blondes. <break time="150ms"/>The sales floor of Chess King, in the South Shore Mall with Joe Albury. <break time="150ms"/> It didn’t seem like such a pivotal moment in my life then, but as the days and weeks progressed and the song became the behemoth it was, it was easy to remember the moment. <break time="150ms"/> I had witnessed, as one can with one’s ears, the birth of greatness. <break time="150ms"/>There’s something signature about a ballad-like song that turns into an anthemic rock hymnal. It’s mellow but important. It’s both soft and loud. <break time="150ms"/> Its impact was about to usher in a flood of songs that paled in comparison, but still determined the voice of the decade. <break time="150ms"/> And then there are the lyrics. An allegory of helplessness about the state of just everything. The angst of a generation. Confusion. Borderline despair. Hope.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/19_4_Non_Blondes_Final.mp3"/></speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 19,
    year: [1993],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=6NXnxTNIWkc"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "What's Up",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/19_4_Non_Blondes.jpeg",
        textContent: {
          artist: "Artist: 4 Non Blondes",
          countdown: "Day 19 (53 to 53)",
          primaryText:
            "1992 was a year of radical and amazing change in music. And I was alive and living through it, aware and amazed. I actually remember exactly where and with who I was the first time I ever heard What’s Up by 4 Non Blondes; the sales floor of Chess King in the South Shore Mall with Joe Albury. It didn’t seem like such a pivotal moment in my life then, but as the days and weeks progressed and the song became the behemoth it was, it was easy to remember the moment. I had witnessed, as one can with one’s ears, the birth of greatness. There’s something signature about a ballad-like song that turns into an anthemic rock hymnal. It’s mellow but important. It’s both soft and loud. Its impact was about to usher in a flood of songs that paled in comparison but still determined the voice of the decade. And then there are the lyrics. An allegory of helplessness about the state of just everything. The angst of a generation. Confusion. Borderline despair. Hope.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Good Riddance Time Of Your Life"],
    artist: ["Green Day"],
    date: `December 3, 2018`,
    text: `<speak>Later into the nineties, amid the absolute worst moment in my small, predictable life, I found comfort in a guitar-and-strings ballad by an alt-punk band, whose sound was usually crass and boisterous. <break time="250ms"/> It was called Good Riddance (Time Of Your Life). <break time="150ms"/>Frank and I have always equated this song to our loss of Mary. It’s not necessarily because of the lyrics; the melody is a melancholy sound that seems fitting for her very short, bittersweet life. <break time="150ms"/> I guess, when Billy Joe sings, I hope you had the time of your life, it’s equal to the hope that she was happy and that she knew she was loved and that she knew how very much she meant to so many people. <break time="250ms"/> I’ve written at length about losing Mary. Every time I think about it, I am reminded what a gift I’ve been given, having been surrounded by people who love me pretty much unconditionally. <break time="150ms"/> When she was here, and though I didn’t know it, she made sure that I knew I had value, and that I mattered. <break time="250ms"/>That’s who Mary was, after all. <break time="150ms"/> Her mark will always be on me. I hope her children, and everyone else whose lives she impacted, always have her mark as well.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/18_Time_Of_Your_Lfe_Final.mp3"/></speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 18,
    year: [1997],
    genre: ``,
    significantHoomans: ["Mary", "Frank"],
    youtube: ["https://www.youtube.com/watch?v=CnQ8N1KacJc"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Good Riddance [Time Of Your Life]",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/18_Time_Of_Your_Lfe.jpeg",
        textContent: {
          artist: "Artist: Greenday",
          countdown: "Day 18 (53 to 53)",
          primaryText:
            "Later into the nineties, amid the absolute worst moment in my small, predictable life, I found comfort in a guitar-and-strings ballad by an alt-punk band whose sound was usually crass and boisterous. It was called Good Riddance (Time Of Your Life). Frank and I have always equated this song to our loss of Mary. It’s not necessarily because of the lyrics; the melody is a melancholy sound that seems fitting for her very short, bittersweet life. I guess, when Billy Joe sings 'I hope you had the time of your life,' it’s equal to the hope that she was happy and that she knew she was loved and that she knew how very much she meant to so many people. I’ve written at length about losing Mary. Every time I think about it I am reminded what a gift I’ve been given, having been surrounded by people who love me pretty much unconditionally. When she was here, and though I didn’t know it, she made sure that I knew I had value and that I mattered. That’s who Mary was, after all. Her mark will always be on me. I hope her children, and everyone else whose lives she impacted, always have her mark as well.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Don’t Cry"],
    artist: ["Seal"],
    date: `December 4, 2018`,
    text: `<speak>Seal broke into pop culture with a smash song that stirred us; we were, in fact, all a little bit Crazy.<break time="250ms"/> Soon he followed that crowd-pleaser up with another giant, which was married to the Batman film franchise, making it one of the most played songs of 1994: Kiss From A Rose. <break time="250ms"/> But as amazing as both songs were, it was one of Seal’s subsequent releases that drew me in and still makes me swoon to this day. <break time="250ms"/>Don’t Cry explodes with harmonies and a piano and a subtle bass with his silken voice overarching the entire thing.  Listening to it now is like a master-class lesson in what post-grunge nineties music was all about - beautiful vocals that spoke of hope and security in an uncertain time. <break time="250ms"/> The years prior to October 1997 are hard to describe for me, because I don’t think I really lived yet before then. <break time="150ms"/> I existed but I was a shadow of what I’d eventually become. I was a follower, a lemming. But I guess the part of my soul that would awaken through music was always there; this song feels like that last moment before Mary died, and my entire life changed.<break time="150ms"/> Its message, don’t cry, you are not alone, don’t cry, you’ll always be loved, are words I know she’s always been saying, alive or elsewhere in the universe.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/17_Dont_Cry_Seal_Final.mp3"/></speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 17,
    year: [1994],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=TXsAtWbEoRU"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Don’t Cry",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/17_Dont_Cry_Seal.jpeg",
        textContent: {
          artist: "Artist: Seal",
          countdown: "Day 17 (53 to 53)",
          primaryText:
            "Seal broke into pop culture with a smash song that stirred us; we were, in fact, all a little bit Crazy. Soon he followed that crowd-pleaser up with another giant which was married to the Batman film franchise, making it one of the most played songs of 1994: Kiss From A Rose. But as amazing as both songs were, it was his one of Seal’s subsequent releases that drew me in and still makes me swoon to this day. Don’t Cry explodes with harmonies and a piano and a subtle bass with his silken voice overarching the entire thing.  Listening to it now is like a master-class lesson in what post-grunge nineties music was all about - beautiful vocals that spoke of hope and security in an uncertain time. The years prior to October 1997 are hard to describe for me because I don’t think I really lived yet before then. I existed but I was a shadow of what I’d eventually become. I was a follower, a lemming. But I guess the part of my soul that would awaken through music was always there; this song feels like that last moment before Mary died and my entire life changed. Its message, 'don’t cry, you are not alone… don’t cry, you’ll always be loved…' are words I know she’s always been saying, alive or elsewhere in the universe.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Eyes Without A Face", "Flesh For Fantasy"],
    artist: ["Billy Idol", "Billy Idol"],
    date: `December 5, 2018`,
    text: `<speak>Back when my cousin Cris and I were impressionable teenagers, she had several posters on her bedroom wall, including that of Billy Idol. <break time="150ms"/> He was larger than life with that white hair standing perfectly vertical, eyeliner blaring on the face of a man, the sneer of his upper lip perfectly enviable and begging for emulation, the spikes on his wristbands speaking of something our parents would hope we’d never ask about. <break time="150ms"/> And then there was his music! I mean, holy shit, how could you not love, and maybe want to make out with, Billy Idol? <break time="250ms"/>His brand of punk pop rock was everywhere in the early to mid-eighties. All over M.T.V. and Z. 100. <break time="150ms"/> With the release of Rebel Yell, Billy Idol was no longer just a punk, but an ambassador of the era, and part of that role included what seemed to be a bit of a softer side. <break time="150ms"/> Eyes Without A Face evoked curiosity and intrigue, what with the backup singer mirroring his words in French. Les yeux sans visage, was this song a ballad? A ballad by a punk rocker? <break time="150ms"/> Halfway through the song, kick ass guitar riffs and ass-claps tell a different story, a more familiar tale of kick-assery. <break time="350ms"/> On the same album, was Flesh For Fantasy. <break time="150ms"/> Pop punk played to death on the radio for good reason.  With the flood of every other Billy Idol song, this was the one that made me want to be a punk. <break time="150ms"/> Parachute pants and high hair. Whatever you call them, for me Eyes Without A Face is a memory of romance and intrigue and I still love it any time I hear it, and Flesh For Fantasy will always remind me of the rebel I’d wished I could be, the one that perhaps only cousin Cristine could see.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/16_Billy_Idol_Final.mp3"/></speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 16,
    year: [1983, 1983],
    genre: ``,
    significantHoomans: ["Cristine"],
    youtube: [
      "https://www.youtube.com/watch?v=9OFpfTd0EIs",
      "https://www.youtube.com/watch?v=dw1oM7LBbxE",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Eyes Without A Face / Flesh For Fantasy",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/16_Billy_Idol.jpeg",
        textContent: {
          artist: "Artist: Billy Idol",
          countdown: "Day 16 (53 to 53)",
          primaryText:
            "Back when my cousin Cris and I were impressionable teenagers, she had several posters on her bedroom wall, including that of Billy Idol. He was larger than life with that white hair standing perfectly vertical, eyeliner blaring on the face of a man, the sneer of his upper lip perfectly enviable and begging for emulation, the spikes on his wristbands speaking of something our parents would hope we’d never ask about.. And then there was his music! I mean, holy shit, how could you not love, and maybe want to make out with, Billy Idol? His brand of punk pop rock was everywhere in the early to mid-eighties. All over MTV and Z100. With the release of Rebel Yell, Billy Idol was no longer just a punk but an ambassador of the era, and part of that role included what seemed to be a bit of a softer side. Eyes Without A Face evoked curiosity and intrigue, what with the backup singer mirroring his words in French. Les yeux sans visage…was this song a ballad? A ballad by a punk rocker? Halfway through the song, kick ass guitar riffs and ass-claps tell a different story, a more familiar tale of kick-assery.  On the same album, Flesh For Fantasy. Pop punk played to death on the radio for good reason. With the flood of every other Billy Idol song, this was the one that made me want to be a punk. Parachute pants and high hair. Whatever you call them, for me Eyes Without A Face is a memory of romance and intrigue and I still love it any time I hear it, and Flesh For Fantasy will always remind me of the rebel I’d wished I could be, the one that perhaps only cousin Cristine could see.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["People Are People", "It’s No Good"],
    artist: ["Depeche Mode", "Depeche Mode"],
    date: `December 6, 2018`,
    text: `<speak>Few artists in the history of music define their genre.<break time="150ms"/> Michael Jackson was the King of Pop, and Donna Summer was the reigning Queen of Disco. <break time="150ms"/> Arguably, the defining artists of New Wave were the one band like none other – Depeche Mode. <break time="150ms"/> It’s nearly impossible to count the classic turns this monster group created, or on which the members collaborated, but their sound is, for certain, the signature sound of alternative rock stations throughout the eighties and nineties. <break time="150ms"/> From their immense catalog of amazing songs, I was only able to narrow it down to two of my all-time favorites, and trust me, that was a difficult task. <break time="150ms"/> Today I present People Are People, a song as current today, to this very minute, as it was when it debuted on M.T.V. in the young eighties.<break time="150ms"/> More people need to put their stubborn ears to their Bose speakers and LISTEN. <break time="150ms"/> Help me understand!<break time="350ms"/> More than a decade later, It’s No Good slams onto the airwaves, and it’s VERY good.<break time="150ms"/> So good, in fact it’s almost hypnotic. The lyrics are a little stalkery, but hey, they sort of mimic the mood of this song, and isn’t that what most of Depeche’s music is about, the mood? I could listen to playlist after playlist of Depeche and never get tired. How about you?<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/15_DepecheMode_Final.mp3"/></speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 15,
    year: [1984, 1997],
    genre: ``,
    significantHoomans: [],
    youtube: [
      "https://www.youtube.com/watch?v=MzGnX-MbYE4",
      "https://www.youtube.com/watch?v=_-QPvffO1gs",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "People Are People / It’s No Good",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/15_DepecheMode.jpeg",
        textContent: {
          artist: "Artist: Depeche Mode",
          countdown: "Day 15 (53 to 53)",
          primaryText:
            "Few artists in the history of music define their genre. Michael Jackson was the King of Pop and Donna Summer was the reigning Queen of Disco. Arguably, the defining artists of New Wave were the one band like none other – Depeche Mode. It’s nearly impossible to count the classic turns this monster group created or on which the members collaborated, but their sound is, for certain, the signature sound of alternative rock stations throughout the eighties and nineties. From their immense catalog of amazing songs, I was only able to narrow it down to two of my all-time favorites, and trust me, that was a difficult task. Today I present People Are People, a song as current today, to this very minute, as it was when it debuted on MTV in the young eighties. More people need to put their stubborn ears to their Bose speakers and LISTEN. Help me understand! More than a decade later, It’s No Good slams onto the airwaves, and it’s VERY good. So good, in fact it’s almost hypnotic. The lyrics are a little stalkery, but hey, they sort of mimic the mood of this song, and isn’t that what most of Depeche’s music is about, the mood? I could listen to playlist after playlist of Depeche and never get tired. How about you?",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Can’t Stop The Feeling"],
    artist: ["Justin Timberlake"],
    date: `December 7, 2018`,
    text: `<speak>Finally, a happy song! Admit it, you love this song too! It makes you feel electric-wavy! I haven’t seen Trolls, but I can tell you Can’t Stop The Feeling by heartthrob J.T. is definitely one of my favorite songs to ever emerge from a kid’s animated film or from a boy-band solo act. <break time="250ms"/> Most songs remind me of a time back when, but this one reminds me of now and all the things in my life that currently bring me joy: my woof (of course), my beautiful friends who accept me as I am, my family for finding the diamond in the rough after all these years, and my babies who are alive in this new generation, particularly Ethan Biesinger and Jackson Pandolfo, both of whom inspire me and fill me with joy that their respective grandmothers live on in their beautiful little souls!<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/14_Justin_Timberlake_Final.mp3"/></speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 14,
    year: [2016],
    genre: ``,
    significantHoomans: ["The Phurk", "Stomps", "Ethan"],
    youtube: ["https://www.youtube.com/watch?v=ru0K8uYEZWw"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Can’t Stop The Feeling",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/14_Justin_Timberlake.jpeg",
        textContent: {
          artist: "Artist: Justin Timberlake",
          countdown: "Day 14 (53 to 53)",
          primaryText:
            "Finally, a happy song! Admit it, you love this song too! It makes you feel electric-wavy! I haven’t seen Trolls, but I can tell you Can’t Stop The Feeling by heartthrob JT is definitely one of my favorite songs to ever emerge from a kid’s animated film or from a boy-band solo act. Most songs remind me of a time back when, but this one reminds me of now and all the things in my life that currently bring me joy: my woof (of course), my beautiful friends who accept me as I am, my family for finding the diamond in the rough after all these years, and my babies who are alive in this new generation, particularly Ethan Biesinger and Jackson Pandolfo, both of whom inspire me and fill me with joy that their respective grandmothers live on in their beautiful little souls!",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["You’ve Lost That Loving Feeling"],
    artist: ["Hall And Oates"],
    date: `December 8, 2018`,
    text: `<speak>Quick quiz: who is my favorite male duo act ever? Whose hair and overall style did I die trying to emulate throughout the entire decade of the eighties? Whose song, Kiss On My List, beat out Bonnie Tyler’s Total Eclipse Of The Heart as my favorite song of all time? Yep, that’s correct. Daryl Hall and John Oates. <break time="150ms"/>Their catalog is endless. Their seventies music is timeless, and their eighties music is classic nostalgia. <break time="150ms"/> There is no disputing that Daryl Hall’s voice is quite possibly one of the most beautiful male voices ever to be recorded, but at the start of their career, it was John Oates whose voice led the hits. Case in point, today’s masterpiece retelling of the Righteous Brothers’ classic, You’ve Lost That Loving Feeling. <break time="150ms"/> From the first few beats of bass, I am in eyes-closed swooning mode. <break time="150ms"/> It might be the first song I ever recorded off the radio (by holding my tape recorder against the radio and pressing record as the song began) so I could play it over and over and over again, as I did/still do. <break time="150ms"/> Fourteen year old me wasn’t much different than nearly-53-me, in that we both love this song so much and the blending of both their voices still gives me chills. <break time="150ms"/> There’s something entirely masculine (I know, weird descriptor to use, but) about Oates’ voice in contrast to the beautiful high voice of Hall, that blends them to perfection in a song that demands to be played loud. So many of their hits still leave me speechless. <break time="150ms"/> Maneater. Private Eyes. Say It Isn’t So. Out Of Touch. <break time="150ms"/> I could go on and on. But today, let’s play the shit out of this Intro to 80’s instant classic, that turned the original on its ear with boss vocals and a modern bass. Thank you, Daryl and John, for everything.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/13_Hall_And_Oates_Final.mp3"/></speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 13,
    year: [1980],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=SXX5OtJJWDo"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "You’ve Lost That Loving Feeling",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/13_Hall_And_Oates.jpeg",
        textContent: {
          artist: "Artist: Hall & Oates",
          countdown: "Day 13 (53 to 53)",
          primaryText:
            "Quick quiz: who is my favorite male duo act ever? Whose hair and overall style did I die trying to emulate throughout the entire decade of the eighties? Whose song, Kiss On My List, beat out Bonnie Tyler’s Total Eclipse Of The Heart as my favorite song of all time? Yep, that’s correct. Daryl Hall & John Oates. Their catalog is endless. Their seventies music is timeless and their eighties music is classic nostalgia. There is no disputing that Daryl Hall’s voice is quite possibly one of the most beautiful male voices ever to be recorded, but at the start of their career, it was John Oates whose voice led the hits. Case in point, today’s masterpiece retelling of the Righteous Brothers’ classic, You’ve Lost That Loving Feeling. From the first few beats of bass, I am in eyes-closed swooning mode. It might be the first song I ever recorded off the radio (by holding my tape recorder against the radio and pressing record as the song began) so I could play it over and over and over again, as I did/still do. Fourteen year old me wasn’t much different than nearly-53-me in that we both love this song so much and the blending of both their voices still gives me chills. There’s something entirely masculine (I know, weird descriptor to use, but…) about Oates’ voice in contrast to the beautiful high voice of Hall that blends them to perfection in a song that demands to be played loud. So many of their hits still leave me speechless. Maneater. Private Eyes. Say It Isn’t So. Out Of Touch. I could go on and on. But today, let’s play the shit out of this 'Intro to 80’s' instant classic that turned the original on its ear with boss vocals and a modern bass. Thank you, Daryl and John, for everything.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Doctor Doctor"],
    artist: ["Thompson Twins"],
    date: `December 9, 2018`,
    text: `<speak>It’s a pretty odd choice, by a group known primarily for their major crossover pop hit Hold Me Now, but for me the best song by eighties New Wave band Thompson Twins is Doctor! Doctor! <break time="150ms"/> And, frankly, the song itself is pretty basic and nondescript, but midway through, at around 2 mins 41 secs in, the song comes alive with everything that’s amazing about the eighties and New Wave music in general – synths for days, echoing percussions, and an amazing harmonic convergence of Tom and Alannah’s voices. <break time="150ms"/> It’s that magical, beautiful moment that makes me love this song and put it on repeat! <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/12_Doctor_Doctor_Final.mp3"/></speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 12,
    year: [1984],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=APyl6Cnbfzw"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Doctor! Doctor!",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/12_Doctor_Doctor.jpeg",
        textContent: {
          artist: "Artist: Thompson Twins",
          countdown: "Day 12 (53 to 53)",
          primaryText:
            "It’s a pretty odd choice by a group known primarily for their major crossover pop hit Hold Me Now, but for me the best song by eighties New Wave band Thompson Twins is Doctor! Doctor!  And, frankly, the song itself is pretty basic and nondescript, but midway through, at around 2 mins 41 secs in, the song comes alive with everything that’s amazing about the eighties and New Wave music in general – synths for days, echoing percussions, and an amazing harmonic convergence of Tom and Alannah’s voices.  It’s that magical, beautiful moment that makes me love this song and put it on repeat!",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["A Night To Remember"],
    artist: ["Shalamar"],
    date: `December 10, 2018`,
    text: `<speak>Bridging discopop into the eighties was one of my earliest favorite bands, Shalamar. <break time="150ms"/>I was so in love with both Jody Watley AND Howard Hewitt! <break time="150ms"/>They were the darlings of W.K.T.U. and their music was bouncy and consistent. The first song I’d heard by Shalamar was The Second Time Around, replete with that quintessential, pyoo! sound that pervaded the disco airwaves. <break time="150ms"/> Then there was that delicious blend of beautiful male and female voices belonging to Howard and Jody. <break time="150ms"/> It was like a constant disco duet, two of my favorite things ever! They went on to release a string of disco hits including Make That Move, which may be devoid of substance but teeming with joy and memories of Laura Javaruski from senior year. But the song I most love by this amazing disco dynamo is A Night To Remember.<break time="150ms"/> I have distinct memories of listening to this song in my brother’s bedroom (he had the only record player) and, as always, singling along at the top of my lungs so much so that Mr. Lombardi next door would shout over, 'I remember it already, Nicky!' That fucking guy certainly was nosey but, in retrospect, he makes for some funny stories.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/11_Shalamar_Final.mp3"/></speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 11,
    year: [1982],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=guB_jQkCzCo"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "A Night To Remember",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/11_Shalamar.jpeg",
        textContent: {
          artist: "Artist: Shalamar",
          countdown: "Day 11 (53 to 53)",
          primaryText:
            "Bridging discopop into the eighties was one of my earliest favorite bands, Shalamar. I was so in love with both Jody Watley AND Howard Hewitt! They were the darlings of WKTU and their music was bouncy and consistent. The first song I’d heard by Shalamar was The Second Time Around, replete with that quintessential 'pyoo!' sound that pervaded the disco airwaves. Then there was that delicious blend of beautiful male and female voices belonging to Howard and Jody. It was like a constant disco duet, two of my favorite things ever! They went on to release a string of disco hits including Make That Move which may be devoid of substance but teeming with joy and memories of Laura Javaruski from senior year. But the song I most love by this amazing disco dynamo is A Night To Remember. I have distinct memories of listening to this song in my brother’s bedroom (he had the only record player) and, as always, singling along at the top of my lungs so much so that Mr. Lombardi next door would shout over, 'I remember it already, Nicky!' That fucking guy certainly was nosey but, in retrospect, he makes for some funny stories.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Breakout"],
    artist: ["Swing Out Sister"],
    date: `December 11, 2018`,
    text: `<speak>From the first opening beats of percussion, I am in love with Breakout by Swing Out Sister. <break time="150ms"/>It’s a very dated song; it sounds exactly like the era to which it belongs, but for me, I hear only love!  I am immediately transported to Jayne’s little truck, sitting in the parking lot of Mel Weitz’s Foodtown, the two of us miming the act of squeezing zits at each other like the children we were. And in the scope of life, we really were just children in 1987. <break time="1500ms"/> I can never hear this song and think of anything else, but when I do, hear it my heart is immediately lifted. This song represents a lifelong friendship. I hope when she hears it, her heart is lifted as well!<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/10_Breakout_Final.mp3"/></speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 10,
    year: [1986],
    genre: ``,
    significantHoomans: ["Jayne"],
    youtube: ["https://www.youtube.com/watch?v=IIOJdMdS56k"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Breakout",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/10_Breakout.jpeg",
        textContent: {
          artist: "Artist: Swing Out Sister",
          countdown: "Day 10 (53 to 53)",
          primaryText:
            "From the first opening beats of percussion, I am in love with Breakout by Swing Out Sister. It’s a very dated song; it sounds exactly like the era to which it belongs, but for me, I hear only love! I am immediately transported to Jayne’s little truck, sitting in the parking lot of Mel Weitz’s Foodtown, the two of us miming the act of squeezing zits at each other like the children we were. And in the scope of life, we really were just children in 1987. I can never hear this song and think of anything else, but when I do hear it my heart is immediately lifted. This song represents a lifelong friendship. I hope when she hears it, her heart is lifted as well!",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Sam"],
    artist: ["Olivia Newton-John"],
    date: `December 12, 2018`,
    text: `<speak>What more can I say about Olivia Newton-John that I haven’t already said? <break time="150ms"/> Two of her songs garnered the Day 3 spot in my first countdown 3 years ago, finishing just a nose behind Kiss On My List by Hall and Oates, and Total Eclipse By Bonnie, and in that day’s blog I spoke about how my mother loved her, and told me to listen closely, for this is the voice of an angel.<break time="150ms"/> Someday when I’m being remembered in a eulogy, at least one person will remember me fondly, anytime they hear the voice of this Aussie seraph. <break time="250ms"/> My memory will be synonymous to any song by Olivia. Today I celebrate her with Sam, certainly not one of her more popular ballads, but a perfect showcase of that mesmerizing swoon of which Olivia is capable. <break time="150ms"/> It’s a sweet tale about two lonely people and the possibility that they might reconnect. But who cares what she’s singing about, as long as she’s singing. Dear sweet baby Jesus, do I love this woman.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/9_Sam_Brolivia_Final.mp3"/></speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 9,
    year: [1976],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=xybhPM_4jmI"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Sam",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/9_Sam_Brolivia.jpeg",
        textContent: {
          artist: "Artist: Olivia Newton-John",
          countdown: "Day 9 (53 to 53)",
          primaryText:
            "What more can I say about Olivia Newton-John that I haven’t already said? Two of her songs garnered the Day 3 spot in my first countdown 3 years ago, finishing just a nose behind Kiss On My List by H&O and Total Eclipse By Bonnie, and in that day’s blog I spoke about how my mother loved her and told me to listen closely, for this is the voice of an angel. Someday when I’m being remembered in a eulogy, at least one person will remember me fondly anytime they hear the voice of this Aussie seraph. My memory will be synonymous to any song by Olivia. Today I celebrate her with Sam, certainly not one of her more popular ballads but a perfect showcase of that mesmerizing swoon of which Olivia is capable. It’s a sweet tale about two lonely people and the possibility that they might reconnect. But who cares what she’s singing about, as long as she’s singing. Dear sweet baby Jesus, do I love this woman.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["All Around The World"],
    artist: ["Lisa Stansfield"],
    date: `December 13, 2018`,
    text: `<speak>Welcome to the 1990’s. While both girl-groups Wilson Philips and En Vogue implored us to hold on, and Jesus Jones ushered in the decade right here and now, like a comet from Great Britain, Lisa Stansfield announced that she’d travel the world just to find her baby. <break time="150ms"/>All Around the World showcases the brand new, amazing talent that was (and still is) Stansfield. This song was like R and B lightning, and to me, it represented the agonizingly tumultuous relationship I had with, well, someone that I used to know. <break time="150ms"/> It’s a song about regret, blaming oneself for ruining a really good thing. I had myself convinced that she was killing me softly with her song, that every word was what I was screaming inside my head. I ran away from that relationship while still trying to hold on (thanks, Wilson Philips and En Vogue!) to the thing that brought us together. I ran to Florida, and then I ran back, and the whole time I had no idea which end was up.Though the nostalgic part of the song has died down, I still love this moment in time and the growth I experienced because of it. Hearing the soulful voice of Lisa Stansfield always brings me joy. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/8_Lisa_Stansfield_Final.mp3"/></speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 8,
    year: [1989],
    genre: ``,
    significantHoomans: ["Frank"],
    youtube: ["https://www.youtube.com/watch?v=JVuuatjHGnY"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "All Around The World",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/8_Lisa_Stansfield.jpeg",
        textContent: {
          artist: "Artist: Lisa Stansfield",
          countdown: "Day 8 (53 to 53)",
          primaryText:
            "Welcome to the 1990’s. While both girl-groups Wilson Philips and En Vogue implored us to hold on and Jesus Jones ushered in the decade right here and now, like a comet from Great Britain, Lisa Stansfield announced that she’d travel the world just to find her baby. All Around the World showcases the brand new, amazing talent that was (and still is) Stansfield. This song was like R&B lightning, and to me, it represented the agonizingly tumultuous relationship I had with… well, someone that I used to know. It’s a song about regret, blaming oneself for ruining a really good thing. I had myself convinced that she was killing me softly with her song, that every word was what I was screaming inside my head. I ran away from that relationship while still trying to hold on (thanks, Wilson Philips and En Vogue!) to the thing that brought us together. I ran to Florida, and then I ran back, and the whole time I had no idea which end was up. Though the nostalgic part of the song has died down, I still love this moment in time and the growth I experienced because of it. Hearing the soulful voice of Lisa Stansfield always brings me joy.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Mad About You"],
    artist: ["Belinda Carlisle"],
    date: `December 14, 2018`,
    text: `<speak>At the start of 1986, I was no longer living at home with my parents. <break time="150ms"/> I was holding down a job at the mall and making a new life back on Long Island, meeting new people and rekindling old friendships. <break time="150ms"/> The sound of that time, for me, was as much new wave as it was pop, but sometimes the two would intersect. <break time="150ms"/> Presenting Mad About You, by Go-Go extraordinaire Belinda Carlisle. <break time="150ms"/> As you know by now, I remember every year from back then by the songs that provided the background soundtrack. <break time="150ms"/> Mad About You is the cover song for 1986.  It envelops me with feelings of newness and excitement about my youthful freedom untethered to parents.  It speaks to me of the freedom to express the true me, the one boxed up in a cedar chest at the back of a closet for so long. <break time="150ms"/> Recently Chris and I saw Head Over Heels, a new Broadway musical using the music of the Go-Gos. And though this song isn’t technically a Go-Gos song, it was used, pretty brilliantly, throughout the show. <break time="150ms"/> It made me feel young again. Just as I feel every time I hear this song on the radio.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/7_Mad_About_You_Final.mp3"/></speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 7,
    year: [2003],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=XmdtJWmR9zQ"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Mad About You",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/7_Mad_About_You.jpeg",
        textContent: {
          artist: "Artist: Belinda Carlisle",
          countdown: "Day 7 (53 to 53)",
          primaryText:
            "At the start of 1986, I was no longer living at home with my parents. I was holding down a job at the mall and making a new life back on Long Island, meeting new people and rekindling old friendships. The sound of that time, for me, was as much new wave as it was pop, but sometimes the two would intersect. Presenting Mad About You by Go-Go extraordinaire Belinda Carlisle. As you know by now, I remember every year from back then by the songs that provided the background soundtrack. Mad About You is the cover song for 1986. It envelops me with feelings of newness and excitement about my youthful freedom untethered to parents. It speaks to me of the freedom to express the true me, the one boxed up in a cedar chest at the back of a closet for so long. Recently Chris and I saw Head Over Heels, a new Broadway musical using the music of the Go-Gos. And though this song isn’t technically a Go-Gos song, it was used, pretty brilliantly, throughout the show. It made me feel young again. Just as I feel every time I hear this song on the radio.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Suedehead"],
    artist: ["Morrissey"],
    date: `December 15, 2018`,
    text: `<speak><audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/6_Morrissey_Final1.mp3"/></speak>Morrissey is one of those artists that doesn’t really need an intro. <break time="150ms"/> He’s theatrical, and his silky voice is like that of a Siren, drawing you into whatever madness he’s singing about. <break time="150ms"/> With Suedehead, he makes a break up sound amazingly symphonic, and he goes on and on about what a good lay it was. <break time="150ms"/>I mean, who else can get away with singing about the great sex they’ve made with an ex, while making it sound peppy and mesmerizingly full of glee? <break time="150ms"/> Morrissey’s voice lent itself to another song in my first countdown 3 years ago, a song that still, to this moment, resonates to my core. (HINT: The title is embroidered on a bath rug at the start of this video!) <break time="250ms"/> This man’s voice is a treasure. I challenge you to listen to Suedehead and then not listen to it immediately again.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/6_Morrissey_Final2.mp3"/></speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 6,
    year: [1988],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=0AvuweztG4Q"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Suedehead",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/6_Morrissey.jpeg",
        textContent: {
          artist: "Artist: Morrissey",
          countdown: "Day 6 (53 to 53)",
          primaryText:
            "Morrissey is one of those artists that doesn’t really need an intro. He’s theatrical and his silky voice is like that of a Siren, drawing you into whatever madness he’s singing about. With Suedehead, he makes a break up sound amazingly symphonic, and he goes on and on about what a good lay it was. I mean, who else can get away with singing about the great sex they’ve made with an ex while making it sound peppy and mesmerizingly full of glee? Morrissey’s voice lent itself to another song in my first countdown 3 years ago, a song that still, to this moment, resonates to my core. (HINT: The title is embroidered on a bath rug at the start of this video!)  This man’s voice is a treasure. I challenge you to listen to Suedehead and then not listen to it immediately again.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Should’ve Never Let You Go"],
    artist: ["Neil And Dara Sedaka"],
    date: `December 16, 2018`,
    text: `<speak>Sixties and seventies crooner Neil Sedaka made my list last year with his groovy classic, Laughter In The Rain, but that was never the song I loved best. <break time="150ms"/>Today, I present the song he sung with his teenaged daughter that, at the time, to me, was probably the most romantic and sad song I’d ever heard. <break time="150ms"/> As I listen to it now for some inspiration on how to describe it, I hear how dated it sounds, but then, as music always does, it transports me back to the start of my defining era, when I was desperate to understand what love was, desperate to experience it for myself. <break time="150ms"/> This may well be the first time I was captured by the joy of a duet, and why the blending of two voices was such a magical listening experience. <break time="150ms"/> Neil’s classic alto lullaby against daughter Dara’s lilting sincerity is just sublime. <break time="150ms"/> At 2 minutes 6 seconds in, I could die:<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/5_Neil_Seaka_Final.mp3"/></speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 5,
    year: [1976],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=D5t5oFgVfMI"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Should’ve Never Let You Go",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/5_Neil_Seaka.jpeg",
        textContent: {
          artist: "Artist: Neil & Dara Sedaka",
          countdown: "Day 5 (53 to 53)",
          primaryText:
            "Sixties and seventies crooner Neil Sedaka made my list last year with his groovy classic Laughter In The Rain, but that was never the song I loved best. Today I present the song he sung with his teenaged daughter that, at the time, to me, was probably the most romantic and sad song I’d ever heard. As I listen to it now for some inspiration on how to describe it, I hear how dated it sounds, but then, as music always does, it transports me back to the start of my defining era when I was desperate to understand what love was, desperate to experience it for myself. This may well be the first time I was captured by the joy of a duet and why the blending of two voices was such a magical listening experience. Neil’s classic alto lullaby against daughter Dara’s lilting sincerity is just sublime. At 2 minutes 6 seconds in, I could die:",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Call On Me", "Wishing You Were Here"],
    artist: ["Chicago", "Chicago"],
    date: `December 17, 2018`,
    text: `<speak>Chicago. No, not the city (though I actually really loved the city the one time we’ve ever visited). <break time="150ms"/> No, I’m talking about Chicago, the kick-ass rock and horns band from the late sixties and early seventies. <break time="1500ms"/> It’s impossible to count their hits on two hands, but all of my favorite songs are from their early days. Chicago provided part of the soundtrack of my childhood on Wright Avenue. The Archie Bunker-like curmudgeon who was my dad, an avid listener of music from the Big Band Era, really liked Chicago’s sound – the mix of contemporary rock with the most amazing arrangements of horns. <break time="150ms"/> Their sound was unique; no one was producing the kinds of amazing ballads and pop tunes that this group of musicians was doing, to perfection. <break time="150ms"/> I have chosen one of their most famous releases, along with a melancholy ballad, to be today’s top songs by Chicago. Call On Me starts with percussion and then the horns. Oh, those horns! This was one of my dad’s favorites. It’s also one of mine. It elicits summer breezes in the backyard with family gatherings, Chicago playing on the 8-track player from the garage. In all the years I knew my parents as a married couple, I think the only time I ever saw them as two people who were into each other was this era, around 1974, with Chicago playing the score. <break time="250ms"/>Then there is the ballad Wishing You Were Here, from the same album with such a different tone. Needless to say, the message to this song is pretty clear. Always wishing they were here. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/4_Call_On_Me_Final.mp3"/></speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 4,
    year: [1974, 1974],
    genre: ``,
    significantHoomans: ["My Father", "Angie"],
    youtube: [
      "https://www.youtube.com/watch?v=BXY2YKjXJ2Q",
      "https://www.youtube.com/watch?v=Zv0OwvsP0ek",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Call On Me / Wishing You Were Here",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/4_Call_On_Me.jpeg",
        textContent: {
          artist: "Artist: Chicago",
          countdown: "Day 4 (53 to 53)",
          primaryText:
            "Chicago. No, not the city (though I actually really loved the city the one time we’ve ever visited). No, I’m talking about Chicago, the kick-ass rock and horns band from the late sixties and early seventies. It’s impossible to count their hits on two hands, but all of my favorite songs are from their early days. Chicago provided part of the soundtrack of my childhood on Wright Avenue. The Archie Bunker-like curmudgeon who was my dad, an avid listener of music from the Big Band Era, really like Chicago’s sound – the mix of contemporary rock with the most amazing arrangements of horns. Their sound was unique; no one was producing the kinds of amazing ballads and pop tunes that this group of musicians was doing, to perfection. I have chosen one of their most famous releases, along with a melancholy ballad, to be today’s top songs by Chicago. Call On Me starts with percussion and then the horns. Oh, those horns! This was one of my dad’s favorites. It’s also one of mine. It elicits summer breezes in the backyard with family gatherings, Chicago playing on the 8-track player from the garage. In all the years I knew my parents as a married couple, I think the only time I ever saw them as two people who were into each other was this era, around 1974, with Chicago playing the score. Then there is the ballad Wishing You Were Here, from the same album with such a different tone. Needless to say, the message to this song is pretty clear. Always wishing they were here. ",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["I Want It That Way"],
    artist: ["Backstreet Boys"],
    date: `December 18, 2018`,
    text: `<speak>Presenting another song on the countdown that’s ALL feeling. Ok, also harmonies and beautiful young men, but mostly feeling.<break time="250ms"/> The first time I’d ever heard I Want It That Way was, obviously, in the height of their control over the airwaves, but it wasn’t then that I fell. <break time="150ms"/> It was when I saw the video and watched as the crowds lost their shit the way young women in the sixties did with the Beatles. <break time="150ms"/>There’s something mesmerizing about that kind of crowd capturing. I’d already had a history with the Backstreet Boys, loving As Long As You Love Me (see my first year’s countdown entry, day 24) but this song just causes me to sway. <break time="150ms"/>There’s something very sincere about this boy band’s approach to singing; no matter how calculated and produced their sound is, the voices of Brian and A.J. and Nick are really magical. Hey, I wish I could sing like any one of these guys, because I would sing the shit out of this song if I could. Because I want it that way.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/3_I_Want_It_That_Way_Final.mp3"/></speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 3,
    year: [1999],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=4fndeDfaWCg"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "I Want It That Way",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/3_I_Want_It_That_Way.jpeg",
        textContent: {
          artist: "Artist: Backstreet Boys",
          countdown: "Day 3 (53 to 53)",
          primaryText:
            "Presenting another song on the countdown that’s ALL feeling. Ok, also harmonies and beautiful young men, but mostly feeling. The first time I’d ever heard I Want It That Way was, obviously, in the height of their control over the airwaves, but it wasn’t then that I fell. It was when I saw the video and watched as the crowds lost their shit the way young women in the sixties did with the Beatles. There’s something mesmerizing about that kind of crowd capturing. I’d already had a history with the Backstreet Boys, loving As Long As You Love Me (see my first year’s countdown entry, day 24) but this song just causes me to sway. There’s something very sincere about this boy band’s approach to singing; no matter how calculated and produced their sound is, the voices of Brian and AJ and Nick are really magical. Hey, I wish I could sing like any one of these guys, because I would sing the shit out of this song if I could. Because I want it that way.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Say"],
    artist: ["John Mayer"],
    date: `December 19, 2018`,
    text: `<speak>Another song by the dazzlingly talented John Mayer. <break time="150ms"/>Say is such a beautiful, melancholy song, with really, the only message that matters in this life.<break time="150ms"/> Lest we are left with regret, it’s best to just say what need to say. I don’t think I need to say much more about the voice of John Mayer. He is one of my favorites for all the reasons. I wrote about him in last year’s countdown, and the sentiment remains the same: Mayer is one of my favorite artists to emerge from this shitty new millennium. Along with a voice like a male angel, he is a brilliant musician. <break time="350ms"/> Sidebar: This hearkens to another intense, classic cautionary ballad from 1989, the year my father was diagnosed with cancer. <break time="150ms"/>The Living Years, by Mike and The Mechanics. <break time="150ms"/>Talk about songs being released exactly when I need to hear them; re: Who Knew by P!nk in 2006. <break time="150ms"/> I don’t think I even have to speak more about the lyrics of this song. Just listen to it. Don’t have regrets; tell them you love them, and do it now.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/2_Say_John_Mayer_Final.mp3"/></speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 2,
    year: [2007],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=phaIklEphSM"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Say",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/2_Say.png",
        textContent: {
          artist: "Artist: John Mayer",
          countdown: "Day 2 (53 to 53)",
          primaryText:
            "Another song by the dazzlingly talented John Mayer. Say is such a beautiful, melancholy song with, really, the only message that matters in this life. Lest we are left with regret, it’s best to just say what need to say. I don’t think I need to say much more about the voice of John Mayer. He is one of my favorites for all the reasons. I wrote about him in last year’s countdown, and the sentiment remains the same: 'Mayer is one of my favorite artists to emerge from this shitty new millennium. Along with a voice like a male angel, he is a brilliant musician.' Sidebar: This hearkens to another intense, classic cautionary ballad from 1989, the year my father was diagnosed with cancer, The Living Years by Mike + The Mechanics. Talk about songs being released exactly when I need to hear them; re: Who Knew by P!nk in 2006. I don’t think I even have to speak more about the lyrics of this song. Just listen to it. Don’t have regrets; tell them you love them, and do it now.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Drops Of Jupiter"],
    artist: ["Train"],
    date: `December 20, 2018`,
    text: `<speak>A song like none before, Drops Of Jupiter is melodic and rhythmic and lyrical and sad and beautiful and everything you want in a pop ballad. <break time="150ms"/>Pat Monahan’s voice is singularly mesmerizing, sweet and inimitable. <break time="150ms"/> I love that the lyrics are weird as fuck against such a pretty melody. I love the ache in his voice beside the hopeful pop of the violins and percussion. <break time="150ms"/> I don’t need to know what Pat’s intentions were when he wrote this masterpiece of our time; the song can take on whatever meaning it needs to for the poetic side of anyone listening.<break time="150ms"/> The dreamer in me identifies with all the natural and celestial references, dancing along the light of day, acting like summer and walking like rain. There is a sad element to this song as well; it was all over the airwaves during the break-up of two people I’d loved very much, and within the same period of time, our towers were attacked on 9-11. <break time="150ms"/> I hate that I relate this beautiful melody to such horrific memories. But there is beauty in heartache, as we find out how much we’re loved by the people in our lives who may have been affected similarly in their own way. <break time="150ms"/>I choose to believe this. I choose to believe that each member of the long list of loved ones I’ve lost are sailing across the sun.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/53-to-53/1_Drops_Of_Jupiter_Final.mp3"/></speak>`,
    countdown: `fifty three to fifty three`,
    countdownDisplay: `53 to 53`,
    day: 1,
    year: [2001],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=7Xf-Lesrkuc"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Drops Of Jupiter",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/53-to-53/1_Drops_Of_Jupiter.jpeg",
        textContent: {
          artist: "Artist: Train",
          countdown: "Day 1 (53 to 53)",
          primaryText:
            "A song like none before, Drops Of Jupiter is melodic and rhythmic and lyrical and sad and beautiful and everything you want in a pop ballad. Pat Monahan’s voice is singularly mesmerizing, sweet and inimitable. I love that the lyrics are weird as fuck against such a pretty melody. I love the ache in his voice beside the hopeful pop of the violins and percussion. I don’t need to know what Pat’s intentions were when he wrote this masterpiece of our time; the song can take on whatever meaning it needs to for the poetic side of anyone listening. The dreamer in me identifies with all the natural and celestial references, dancing along the light of day, acting like summer and walking like rain. There is a sad element to this song as well; it was all over the airwaves during the break-up of two people I’d loved very much, and within the same period of time, our towers were attacked on 9-11. I hate that I relate this beautiful melody to such horrific memories. But there is beauty in heartache as we find out how much we’re loved by the people in our lives who may have been affected similarly in their own way. I choose to believe this. I choose to believe that each member of the long list of loved ones I’ve lost are sailing across the sun.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["1985"],
    artist: ["Bowling For Soup"],
    date: `October 27, 2019`,
    text: `<speak>It’s back and it’s HANGRY! <break time="150ms"/> Yep, it’s 54 days until my 54th birthday, so today begins my 54 to 54 countdown. <break time="150ms"/> Music is a huge part of my world, always has been, likely always will be, and every year I think I don’t have enough favorite songs to fill another countdown, I prove me wrong. <break time="150ms"/> No surprise that this year’s countdown is ballad heavy, but I am starting it off with a happy pop song from the new millennium about the old millennium. <break time="150ms"/> Talk about feel good songs, this one basically speaks to my inner eighties self, the mustachioed boy with the perm who dreamed of being John Oates. I picture Tawny Kitaen as the Debbie they’re speaking about, and if you remember her the way I do, she was everything in 1985. <break time="150ms"/> Aside from all of this, the song has a catchy bop that I just really happen to enjoy. I have to say, I can identify that music just isn’t the same as it was in the eighties. The eighties were incomparable, and that’s just that, and this song points a magnifying glass on that fact. <break time="150ms"/> Every band listed in the song is considered classic and are still in the public zeitgeist: Springsteen? Madonna? Not going anywhere anytime soon. Hope you enjoy the earworm that is 1985!<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/54_1985_Bowling_For_Soup_Final.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 54,
    year: [2004],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=K38xNqZvBJI"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "1985",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/54_1985_Bowling_For_Soup.jpeg",
        textContent: {
          artist: "Artist: Bowling For Soup",
          countdown: "Day 54 (54 to 54)",
          primaryText:
            "It’s back and it’s HANGRY! Yep, it’s 54 days until my 54th birthday, so today begins my 54 to 54 countdown. Music is a huge part of my world, always has been, likely always will be, and every year I think I don’t have more favorite songs enough to fill another countdown, I prove me wrong. No surprise that this year’s countdown is ballad heavy, but I am starting it off with a happy pop song from the new millennium about the old millennium. Talk about feel good songs, this one basically speaks to my inner eighties self, the mustachioed boy with the perm who dreamed of being John Oates. I picture Tawny Kitaen as the Debbie they’re speaking about, and if you remember her the way I do, she was everything in 1985. Aside from all of this, the song has a catchy bop that I just really happen to enjoy. I have to say, I can identify that music just isn’t the same as it was in the eighties. The eighties were incomparable, and that’s just that, and this song points a magnifying glass on that fact. Every band listed in the song is considered classic and are still in the public zeitgeist: Springsteen? Madonna? Not going anywhere anytime soon. Hope you enjoy the earworm that is 1985!",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Unchained Melody"],
    artist: ["The Righteous Brothers"],
    date: `October 28, 2019`,
    text: `<speak>Probably one of the most romantic songs of all time, originally released by the Righteous Brothers in the year of my birth, Unchained Melody was reintroduced to the world in 1990 in one of the most romantic movies of our generation. When this song comes on, most people can close their eyes and see the ghost of Sam cradling Molly as she spins pottery in their NYC loft apartment. There is something hauntingly beautiful in the silence at the start of the song, and as it builds to a swell, you’re taken away, with godspeed, to a place of harmony and comfort.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/53_Unchained_Melody_Final.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 53,
    year: [1965],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=qiiyq2xrSI0"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Unchained Melody",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/53_Unchained_Melody.jpeg",
        textContent: {
          artist: "Artist: The Righteous Brothers",
          countdown: "Day 53 (54 to 54)",
          primaryText:
            "Probably one of the most romantic songs of all time, originally released by the Righteous Brothers in the year of my birth, Unchained Melody was reintroduced to the world in 1990 in one of the most romantic movies of our generation. When this song comes on, most people can close their eyes and see the ghost of Sam cradling Molly as she spins pottery in their NYC loft apartment. There is something hauntingly beautiful in the silence at the start of the song, and as it builds to a swell, you’re taken away, with godspeed, to a place of harmony and comfort.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Just Another Day"],
    artist: ["Jon Secada"],
    date: `October 29, 2019`,
    text: `<speak>Then there’s the song of the year for 1992 (in my opinion, not according to Billboard charts or anything). <break time="150ms"/>From Miami Sound Machine back-up singer to pop crooner, Jon Secada provided the world with Just Another Day.<break time="150ms"/> Secada’s ambiguously beautiful tenor made you saunter softly in your seat, no matter where you were sitting. <break time="150ms"/>As with Under The Bridge by the R.H.C.P. (same era, coming up later in the countdown), this song transports me back to a time just before. <break time="250ms"/> Little Angie lived in Aunt Pat’s basement and I could visit her anytime I wanted. One of those times, she handed me a cassette single that was delivered with the Newsday; it was this song. I’d heard it a few times on the radio in passing but now I would play it in my car repeatedly (as is my M.O., for anyone paying attention).<break time="150ms"/> Something about the steady beat was like rain on my shoulders, warm and consistent and palpable. I think back now on all the lessons life has taught me, and wish I could spirit myself back to that moment. <break time="150ms"/> Hold the hand of those you have very tightly; they won’t be around too much longer. <break time="150ms"/>Special shout out to my nephew, Christopher Pandolfo, whose birthday was yesterday, for recently reminding me how great a song this was/is.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/52_John _secada_Final.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 52,
    year: [1992],
    genre: ``,
    significantHoomans: ["The Phurk"],
    youtube: ["https://www.youtube.com/watch?v=B6LhWbQthAI"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Just Another Day",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/52_John _secada.jpeg",
        textContent: {
          artist: "Artist: Jon Secada",
          countdown: "Day 52 (54 to 54)",
          primaryText:
            "Then there’s the song of the year for 1992 (in my opinion, not according to Billboard charts or anything). From Miami Sound Machine back-up singer to pop crooner, Jon Secada provided the world with Just Another Day. Secada’s ambiguously beautiful tenor made you saunter softly in your seat no matter where you were sitting. As with Under The Bridge by the RHCP (same era, coming up later in the countdown), this song transports me back to a time just before… Little Angie lived in Aunt Pat’s basement and I could visit her anytime I wanted. One of those times, she handed me a cassette single that was delivered with the Newsday; it was this song. I’d heard it a few times on the radio in passing but now I would play it in my car repeatedly (as is my M.O., for anyone paying attention). Something about the steady beat was like rain on my shoulders, warm and consistent and palpable. I think back now on all the lessons life has taught me and wish I could spirit myself back to that moment. Hold the hand of those you have very tightly; they won’t be around too much longer. Special shout out to my nephew, Christopher Pandolfo, whose birthday was yesterday, for recently reminding me how great a song this was/is.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Touch Me"],
    artist: ["Cathy Dennis"],
    date: `October 30, 2019`,
    text: `<speak>Here’s a happy song from the early nineties that always makes me smile, and throw my arms up into the air when she says, Et’s DO It! <break time="150ms"/> Not much substance to (Touch Me) All Night Long by ingénue Cathy Dennis, but that’s ok, not every song has to have meaning and depth. <break time="150ms"/>It does, though, remind me of my days working in the coat room at Grand Central, back when there were gay bars on Long Island, and I would go home relatively wealthy after a 6 hour shift of hanging coats and handing them back to drunk dummies. <break time="150ms"/> I met a lot of people back then, some of with whom I am still in touch (thank you, Facebook), and some who are now just long gone memories.<break time="100ms"/> Et’s DO It! <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/51_Touch_Me_Final.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 51,
    year: [1990],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=5xiwxfxVUZA"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Touch Me",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/51_Touch_Me.jpeg",
        textContent: {
          artist: "Artist: Cathy Dennis",
          countdown: "Day 51 (54 to 54)",
          primaryText:
            "Here’s a happy song from the early nineties that always makes me smile and throw my arms up into the air when she says 'Et’s DO It!' Not much substance to (Touch Me) All Night Long by ingénue Cathy Dennis, but that’s ok, not every song has to have meaning and depth. It does, though, remind me of my days working in the coat room at Grand Central back when there were gay bars on Long Island and I would go home relatively wealthy after a 6 hour shift of hanging coats and handing them back to drunk dummies. I met a lot of people back then, some of with whom I am still in touch (thank you, Facebook), and some who are now just long gone memories. Et’s DO It! ",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Seasons Change"],
    artist: ["Exposé"],
    date: `October 31, 2019`,
    text: `<speak>So, the time period between 1987 and 88 was a pretty nondescript year for me. I was still in a personal holding pattern, still living my life in a closet, still hoping and wishing and praying changes would come, just not really knowing which changes I deep down wanted. I had yet to be met with the force of nature that was Vincent Alessi, my crazy partner in crime who helped hustle my ass out of my comfort zone, but I could almost sense that having him in my life (which was to be the huge catalyst I’d craved) was imminent. <break time="150ms"/> In comes crashing the first mega-ballad by Exposé, Seasons Change. <break time="150ms"/> A splashy, harmony-riddled pop song about want and need and desire and longing, all under the cover of the changing seasons. It may have been the first time in my young life I’d ever experienced an awakening, almost like a premonition. <break time="150ms"/> Hearing this song put my internal oven on high. <break time="150ms"/> And, of course, lest we forget the gratuitous eighties saxophone break, every time I hear this even still, I swoon and remember that time just before. That was perhaps the last time I was ever truly innocent, like a sleeping giant, a dormant volcano.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/50_Seasons_Change_Final.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 50,
    year: [1987],
    genre: ``,
    significantHoomans: ["Vinny"],
    youtube: ["https://www.youtube.com/watch?v=Yqk6y5Hmy9s"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Seasons Change",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/50_Seasons_Change.jpeg",
        textContent: {
          artist: "Artist: Exposé",
          countdown: "Day 50 (54 to 54)",
          primaryText:
            "So, the time period between 1987 and 88 was a pretty nondescript year for me. I was still in a personal holding pattern, still living my life in a closet, still hoping and wishing and praying changes would come, just not really knowing which changes I deep down wanted. I had yet to be met with the force of nature that was Vincent Alessi, my crazy partner in crime who helped hustle my ass out of my comfort zone, but I could almost sense that having him in my life (which was to be the huge catalyst I’d craved) was imminent. In comes crashing the first mega-ballad by Exposé, Seasons Change, a splashy, harmony-riddled pop song about want and need and desire and longing, all under the cover of the changing seasons. It may have been the first time in my young life I’d ever experienced an awakening, almost like a premonition. Hearing this song put my internal oven on high. And, of course, lest we forget the gratuitous eighties saxophone break, every time I hear this even still, I swoon and remember that time just before... That was perhaps the last time I was every truly innocent, like a sleeping giant, a dormant volcano.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Midnight At The Oasis"],
    artist: ["Maria Muldaur"],
    date: `November 1, 2019`,
    text: `<speak>The early seventies drummed out some really good music, but it also gave way for some questionably classic, frisky moments as well. <break time="150ms"/> One of those quirky songs I love best is called Midnight At The Oasis, by Maria Muldaur. <break time="250ms"/>Her voice is sweet and appealing and the accompanying guitar work is cozy and happy, just like those golden old days are in my memory. <break time="150ms"/> I remember thinking how funny it was that the cactus is our friend and he was pointing out the way. <break time="150ms"/> As a little kid, it never occurred to me how sexual the lyrics were, but give them a listen: <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/49_Midnight_at_the_Oasis_Final1.mp3"/> First rate seventies baby-making schmaltz, but oh so wondrous.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/49_Midnight_at_the_Oasis_Final1.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 49,
    year: [1973],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=VlrKETxwRvM"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Midnight At The Oasis",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/49_Midnight_at_the_Oasis.jpeg",
        textContent: {
          artist: "Artist: Maria Muldaur",
          countdown: "Day 49 (54 to 54)",
          primaryText:
            "The early seventies drummed out some really good music, but it also gave way for some questionably classic, frisky moments as well. One of those quirky songs I love best is called Midnight At The Oasis by Maria Muldaur. Her voice is sweet and appealing and the accompanying guitar work is cozy and happy, just like those golden old days are in my memory. I remember thinking how funny it was that the cactus is our friend and he was pointing out the way. As a little kid, it never occurred to me how sexual the lyrics were, but give them a listen: 'and you won't need no camel, no, no, when I take you for a ride...' First rate seventies baby-making schmaltz, but oh so wondrous.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["lady lady lady"],
    artist: ["Joe Esposito"],
    date: `November 2, 2019`,
    text: `<speak>I love a good obscure soundtrack song. I’m known for that shit. And if you know me, you know one of my favorite movie soundtracks belongs to Flashdance.  I already gave you Irene Cara’s Flashdance: What A Feeling in my first 50 countdown, and then last year I celebrated the magic that is the Love Theme From Flashdance.<break time="150ms"/> Today we have Lady, Lady, Lady.<break time="1500ms"/> I don’t think anyone, other than maybe me and Maria, even remember this song, but when I hear it I am teleported back to Maria’s den, and we’re young again, and the whole world is in front of us. This song could go on forever and I would never get tired of the synthesizer or that consistent, mesmerizing beat. I had never seen this video until today but, goddammit, am I glad I did! Look at them both, all eighties-backlit! My favorite!<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/48_Flashdance_Lady_Final.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 48,
    year: [1983],
    genre: ``,
    significantHoomans: ["Maria"],
    youtube: ["https://www.youtube.com/watch?v=XVvZ4-dTd64"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "lady lady lady",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/48_Joe-Esposito.jpeg",
        textContent: {
          artist: "Artist: Joe Esposito",
          countdown: "Day 48 (54 to 54)",
          primaryText:
            "I love a good obscure soundtrack song. I’m known for that shit. And if you know me, you know one of my favorite movie soundtracks belongs to Flashdance. I already gave you Irene Cara’s Flashdance: What A Feeling in my first 50 countdown, and then last year I celebrated the magic that is the Love Theme From Flashdance. Today we have Lady, Lady, Lady. I don’t think anyone, other than maybe me and Maria, even remember this song, but when I hear it I am teleported back to Maria’s den, and we’re young again, and the whole world is in front of us. This song could go on forever and I would never get tired of the synthesizer or that consistent, mesmerizing beat. I had never seen this video until today but, goddammit, am I glad I did! Look at them both, all eighties-backlit! My favorite!",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Shambala"],
    artist: ["Three Dog Night"],
    date: `November 3, 2019`,
    text: `<speak>For those of us over the age of 50, here’s a nice throwback treat from the same days as the song I posted 2 days ago; anyone else can feel free to scroll on by. <break time="150ms"/>Shambala is a feel-good classic by Three Dog Night, a happy spiritual pop song that evokes my early days in which I was my most authentic happiest. <break time="450ms"/> I hear this and I think of autumns in the park across the street (about which I’ve spoken at length in previous notes), carefree days with low October sunshine on our baby faces, as we owned that playground and the leaf piles we’d built. <break time="150ms"/> Shout outs to my childhood homies: Linda, with whom I painted rocks and gave names to random frogs. <break time="150ms"/> Greg, with whom I created TV-show-themed board games. <break time="150ms"/>  Diane, in whose basement we concocted banana milkshakes. I wouldn’t trade my childhood memories for anything.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/47_Shambala_Final.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 47,
    year: [1973],
    genre: ``,
    significantHoomans: ["Greg", "Linda", "Diane"],
    youtube: ["https://www.youtube.com/watch?v=szm_SbNmK6s"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Shambala",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/47_Shambala.jpeg",
        textContent: {
          artist: "Artist: Three Dog Night",
          countdown: "Day 47 (54 to 54)",
          primaryText:
            "For those of us over the age of 50, here’s a nice throwback treat from the same days as the song I posted 2 days ago; anyone else can feel free to scroll on by. Shambala is a feel-good classic by Three Dog Night, a happy spiritual pop song that evokes my early days in which I was my most authentic happiest. I hear this and I think of autumns in the park across the street (about which I’ve spoken at length in previous notes), carefree days with low October sunshine on our baby faces as we owned that playground and the leaf piles we’d built. Shout outs to my childhood homies: Linda, with whom I painted rocks and gave names to random frogs; Greg, with whom I created TV-show-themed board games; Diane, in whose basement we concocted banana milkshakes. I wouldn’t trade my childhood memories for anything.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Higher Love"],
    artist: ["Steve Winwood"],
    date: `November 4, 2019`,
    text: `<speak>I don’t think I’d ever heard of Steve Winwood until this song smacked the airwaves in the face in the mid-eighties. <break time="150ms"/>This was back before Google and the days of instant gratification with regards to finding information about a song or artist, but the first time I’d heard this song I remembered thinking, Holy Shit, that’s Chaka Khan singing background vocals! <break time="250ms"/> But back in those days we had M.T.V., which actually played music (can you even imagine?), and it was then that Mark Goodman and Martha Quin explained to me that Steve Winwood was formerly known as Little Stevie Winwood, and he was some kind of late-sixties/early-seventies childhood musical prodigy, and that’s also when it was revealed to me that I was, in fact, correct about Chaka, as there she was in the video! And I’ll be a motherfucker, that’s also Nile Rodgers playing rhythm guitar!!!<break time="150ms"/> Well, whatever. Higher Love was an amazing song in 1986 and it still is today, so much so that it’s currently being covered as a dance song by the late, beautiful Whitney Houston.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/46_Higher_Love_Final.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 46,
    year: [1986],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=k9olaIio3l8"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Higher Love",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/46_Higher_Love.jpeg",
        textContent: {
          artist: "Artist: Steve Winwood",
          countdown: "Day 46 (54 to 54)",
          primaryText:
            "I don’t think I’d ever heard of Steve Winwood until this song smacked the airwaves in the face in the mid-eighties. This was back before Google and the days of instant gratification with regards to finding information about a song or artist, but the first time I’d heard this song I remembered thinking, 'Holy Shit, that’s Chaka Khan singing background vocals!' But back in those days we had MTV which actually played music (can you even imagine?), and it was then that Mark Goodman and Martha Quin explained to me that Steve Winwood was formerly known as Little Stevie Winwood and he was some kind of late-sixties/early-seventies childhood musical prodigy, and that’s also when it was revealed to me that I was, in fact, correct about Chaka as, there she was in the video! And I’ll be a motherfucker, that’s also Nile Rodgers playing rhythm guitar!!! Well, whatever. Higher Love was an amazing song in 1986 and it still is today, so much so that it’s currently being covered as a dance song by the late, beautiful Whitney Houston.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Dreaming With A Broken Heart"],
    artist: ["John Mayer"],
    date: `November 5, 2019`,
    text: `<speak><audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/45_Dreaming_With_A_Broken_Heart_Final1.mp3"/>John Mayer has been on my lists several times, and for good measure: that voice like none other. No one does a heartbreaking ballad the way this modern genius does them. <break time="150ms"/> He is arguably one of the most brilliant musicians of our time. He makes you swoon whether you like it or not.<break time="150ms"/> John Mayer reminds me of the musician about whom Roberta Flack sung in her seventies classic, Killing Me Softly. <break time="150ms"/> I get what she was singing about when I listen to this genius perform. The lyrics of Dreaming With A Broken Heart tell about what is likely a break-up, but I hear them and think of my sister who I now can only see in my dreams until someday we should meet again. And, truly, waking up is always the hardest part.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/45_Dreaming_With_A_Broken_Heart_Final2.mp345_Dreaming_With_A_Broken_Heart_Final.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 45,
    year: [2006],
    genre: ``,
    significantHoomans: ["Rosemarie"],
    youtube: [""],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Dreaming With A Broken Heart",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/45_Dreaming_With_A_Broken_Heart.jpeg",
        textContent: {
          artist: "Artist: John Mayer",
          countdown: "Day 45 (54 to 54)",
          primaryText:
            "John Mayer has been on my lists several times, and for good measure: that voice like none other. No one does a heartbreaking ballad the way this modern genius does them. He is arguably one of the most brilliant musicians of our time. He makes you swoon whether you like it or not. John Mayer reminds me of the musician about whom Roberta Flack sung in her seventies classic, Killing Me Softly. I get what she was singing about when I listen to this genius perform. The lyrics of Dreaming With A Broken Heart tell about what is likely a break-up, but I hear them and think of my sister who I now can only see in my dreams until someday we should meet again. And, truly, waking up is always the hardest part.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Then Came You"],
    artist: ["Dionne Warwick And The Spinners"],
    date: `November 6, 2019`,
    text: `<speak>This is one of those mid-seventies pop ballads that always makes me happy, and who doesn’t love a good, old-fashioned duet? Even if said duet is by one woman and five men? <break time="250ms"/> Before she was an infomercial queen, Dionne Warwick was the voice of sixties songwriting icon Burt Bacharach, and her voice was peerless and unique. <break time="150ms"/> Her sound was more than pleasant enough to the throngs who might still have had an issue with black artists crossing over onto A.M. Radio. <break time="250ms"/> When she teamed with Motown superstars the Spinners, they gave way for this upbeat love song, Then Came You, which topped the charts in 1974, was nominated for a Grammy, and still holds up to this day. It has all the R and B appeal for which the Spinners were known, combined with the songbird soprano of Warwick.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/44_Dionne_Warwick_Then-Came-You_Final.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 44,
    year: [1974],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=L_PzcgyqMwE"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Then Came You",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/44_Dionne_Warwick_Then-Came-You.jpeg",
        textContent: {
          artist: "Artist: Dionne Warwick And The Spinners",
          countdown: "Day 44 (54 to 54)",
          primaryText:
            "This is one of those mid-seventies pop ballads that always makes me happy, and who doesn’t love a good, old-fashioned duet? Even if said duet is by one woman and five men? Before she was an infomercial queen, Dionne Warwick was the voice of sixties songwriting icon Burt Bacharach and her voice was peerless and unique. Her sound was more than pleasant enough to the throngs who might still have had an issue with black artists crossing over onto AM Radio. When she teamed with Motown superstars the Spinners, they gave way for this upbeat love song, Then Came You, which topped the charts in 1974, was nominated for a Grammy, and still holds up to this day. It has all the R&B appeal for which the Spinners were known combined with the songbird soprano of Warwick.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Before And After You", "One Second And A Million Miles"],
    artist: ["Kelly O’Hara", "Kelly O’Hara"],
    date: `November 7, 2019`,
    text: `<speak>Love, forbidden but unbridled. <break time="150ms"/> Imagine the beautiful misfortune of meeting the perfect human being, the one who completes you, at the absolute worst time in your life, the most untimely, the most devastating? <break time="250ms"/>The short-lived Broadway musical The Bridges of Madison County was based on a film with Meryl Streep and Clint Eastwood, but musical genius Jason Robert Brown wrote the most beautiful music and lyrics, to bring forth a heartbreaking story to the stage. <break time="150ms"/> Add the brilliant voices of Tony winner Kelly O’Hara and heartthrob Steven Pasquale as Francescsa and Robert as they bring Brown’s songs to vivid, tragic life. <break time="250ms"/> They breathed unbelievable passion into these desperately star-crossed characters, and this song makes me sob every single time I hear it. The uncertainty of the hope that Robert holds dear and the sad realization the Francesca could never leave her children and husband, no matter the cost. <break time="150ms"/>I am lucky I was able to see this musical twice, including their final performance, which was brutally poignant and beautifully performed. I’m including two versions of the video, one of which is a video of their performance, the other a capturing of their singing it for the recording of the original score.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/43_One_Second_Million_Miles_Final.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 43,
    year: [],
    genre: ``,
    significantHoomans: ["Petey"],
    youtube: [
      "https://www.youtube.com/watch?v=Qz7KyvxuVTg",
      "https://www.youtube.com/watch?v=BvLS1FWsZac",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Before & After You / One Second And A Million Miles",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/43_Madison_County.jpeg",
        textContent: {
          artist: "Artist: Kelly O’Hara",
          countdown: "Day 43 (54 to 54)",
          primaryText:
            "Love, forbidden but unbridled. Imagine the beautiful misfortune of meeting the perfect human being, the one who completes you, at the absolute worst time in your life, the most untimely, the most devastating? The short-lived Broadway musical The Bridges of Madison County was based on a film with Meryl Streep and Clint Eastwood, but musical genius Jason Robert Brown wrote the most beautiful music and lyrics to bring forth a heartbreaking story to the stage. Add the brilliant voices of Tony winner Kelly O’Hara and heartthrob Steven Pasquale as Francescsa and Robert as they bring Brown’s songs to vivid, tragic life. They breathed unbelievable passion into these desperately star-crossed characters, and this song makes me sob every single time I hear it. The uncertainty of the hope that Robert holds dear and the sad realization the Francesca could never leave her children and husband, no matter the cost. I am lucky I was able to see this musical twice, including their final performance which was brutally poignant and beautifully performed. I’m including two versions of the video, one of which is a video of their performance, the other a capturing of their singing it for the recording of the original score.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Dress You Up"],
    artist: ["Madonna"],
    date: `November 8, 2019`,
    text: `<speak>Remember when Madonna wasn’t quite yet the biggest star in the world? <break time="150ms"/>It was the summer of 1985, and the uptights were up in arms over her Penthouse photo shoot, and the writhing and wriggling wedding gown performance on the M.T.V. Video Awards, so as hot a July day as it was when she was performing this song live on the Live AID stage, she declared flatly, I ain’t taking shit off today! And I was watching it live, and I will never forget that moment. Madonna has been on my countdowns a few times, and rightly so. It’s truly impossible to pick a favorite.<break time="150ms"/> As with most songs, the draw of Dress You Up for me is about the time of my life to which it brings me back: I had just moved back to Lynbrook from the Poconos, first time truly declaring my independence from mom and dad. I lived in a room in Jan’s house and I rode a bike anywhere I needed to go.  No car, no license. <break time="150ms"/>I remember listening to this song on cassette in a Walkman as I’d ride through familiar streets that no longer recognized me.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/42_Madonna_Final.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 42,
    year: [1984],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=mWtpd8mS5jw"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Dress You Up",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/42_Madonna.jpeg",
        textContent: {
          artist: "Artist: Madonna",
          countdown: "Day 42 (54 to 54)",
          primaryText:
            "Remember when Madonna wasn’t quite yet the biggest star in the world? It was the summer of 1985 and the uptights were up in arms over her Penthouse photo shoot and the writhing and wriggling wedding gown performance on the MTV Video Awards, so as hot a July day as it was when she was performing this song live on the Live AID stage, she declared flatly, 'I ain’t taking shit off today!' And I was watching it live, and I will never forget that moment. Madonna has been on my countdowns a few times, and rightly so. It’s truly impossible to pick a favorite. As with most songs, the draw of Dress You Up for me is about the time of my life to which it brings me back: I had just moved back to Lynbrook from the Poconos, first time truly declaring my independence from mom and dad. I lived in a room in Jan’s house and I rode a bike anywhere I needed to go. No car, no license. I remember listening to this song on cassette in a Walkman as I’d ride through familiar streets that no longer recognized me.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Runaway"],
    artist: ["The Corrs"],
    date: `November 9, 2019`,
    text: `<speak>Irish sibling band the Corrs brought a unique sound to the nineties, and even had a pretty big hit with Breathless, but the song of theirs that I love is Runaway. <break time="150ms"/>To me it sounds like romance, with the lullaby quality of the strings and guitars. The lead sister’s voice is ripe with yearning. <break time="150ms"/> I love the chord changes of the violin at the end of the song; it’s subtle but noticeable enough. I also love the vocal scatting Andrea leaves us with as the song drifts off to a dreamy end. This song was on one of the many 4-track tapes as I folded and refolded sweaters and jeans back in the days of Structure, before Mary died, before I lost faith in life and humanity, so when I listen to it now it reminds me of a softer, less reality-based time.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/41_Runaway_Final.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 41,
    year: [1995],
    genre: ``,
    significantHoomans: ["Mary"],
    youtube: ["https://www.youtube.com/watch?v=0fMUYU8DC1U"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Runaway",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/41_Runaway.jpeg",
        textContent: {
          artist: "Artist: The Corrs",
          countdown: "Day 41 (54 to 54)",
          primaryText:
            "Irish sibling band the Corrs brought a unique sound to the nineties and even had a pretty big hit with Breathless, but the song of theirs that I love is Runaway. To me it sounds like romance, with the lullaby quality of the strings and guitars. The lead sister’s voice is ripe with yearning. I love the chord changes of the violin at the end of the song; it’s subtle but noticeable enough. I also love the vocal scatting Andrea leaves us with as the song drifts off to a dreamy end. This song was on one of the many 4-track tapes as I folded and refolded sweaters and jeans back in the days of Structure, before Mary died, before I lost faith in life and humanity, so when I listen to it now it reminds me of a softer, less reality-based time.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Keep On Movin'"],
    artist: ["Soul to Soul"],
    date: `November 10, 2019`,
    text: `<speak>Keep On Movin’ is sort of an anthem, ushering in the hopeful but scary nineties from the bouncy pop and aloofness of the eighties. Even within the video, the dancers in color seem to represent what is, while the dancers in black and white seem to symbolize a foreshadowing of the unknown quality of the end of the century. <break time="150ms"/> It’s not quite a dance song, and it’s not quite a ballad. It’s sung beautifully by Caron Wheeler, and the string arrangements are mesmerizingly infectious. There’s a sensuality to the sound that, to me, makes it the kind of song to play on repeat in the background.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/40_Keep_on_movin_Final.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 40,
    year: [1989],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=1iQl46-zIcM"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Keep On Movin'",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/40_Keep_on_movin.jpeg",
        textContent: {
          artist: "Artist: Soul II Soul",
          countdown: "Day 40 (54 to 54)",
          primaryText:
            "Keep On Movin’ is sort of an anthem, ushering in the hopeful but scary nineties from the bouncy pop and aloofness of the eighties. Even within the video, the dancers in color seem to represent what is while the dancers in black and white seem to symbolize a foreshadowing of the unknown quality of the end of the century. It’s not quite a dance song, and it’s not quite a ballad. It’s sung beautifully by Caron Wheeler and the string arrangements are mesmerizingly infectious. There’s a sensuality to the sound that, to me, makes it the kind of song to play on repeat in the background.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Breathe"],
    artist: ["Anna Nalick"],
    date: `November 11, 2019`,
    text: `<speak>One of my top songs of this new millennium, Breathe by Anna Nalick is a romantic journal entry of patience and friendship. I think that’s why I identify with the song; it reminds me of all those late nights in my twenties, when I’d watch the clock change from 2 am to 3:30 am as I’d journal my wants and wishes and private thoughts that yearned to be heard. <break time="150ms"/>I still have the journal. <break time="150ms"/>It’s a beaten up spiral notebook with the back cover missing. The edges of the pages have begun yellowing. And every so often I think it might be fun to reread some of the entries, but as quickly as I embark on that journey, I stop reading, because it all gets to be too much.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/39_Anna_Nalick_Breathe_2_AM_Final.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 39,
    year: [2005],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=FcvXr-9XtgA"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Breathe [2 AM]",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/39_Anna_Nalick_Breathe_2_AM.jpeg",
        textContent: {
          artist: "Artist: Anna Nalick",
          countdown: "Day 39 (54 to 54)",
          primaryText:
            "One of my top songs of this new millennium, Breathe by Anna Nalick is a romantic journal entry of patience and friendship. I think that’s why I identify with the song; it reminds me of all those late nights in my twenties when I’d watch the clock change from 2 am to 3:30 am as I’d journal my wants and wishes and private thoughts that yearned to be heard. I still have the journal. It’s a beaten up spiral notebook with the back cover missing. The edges of the pages have begun yellowing. And every so often I think it might be fun to reread some of the entries but as quickly as I embark on that journey, I stop reading because it all gets to be too much.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Wild Wild West"],
    artist: ["Escape Club"],
    date: `November 12, 2019`,
    text: `<speak>Sometimes there’s a song that, while it’s current in the zeitgeist you hate it and want it dead, then years later you hear it, and realize you actually love it and can’t live without it. <break time="250ms"/>Presenting that song, Wild Wild West by the Escape Club. <break time="150ms"/> There’s really not a lot substance to this song (or maybe there is if you actually listen to the lyrics) but it certainly is catchy and gets the honor of being cranked anytime I hear it. Which I definitely would NOT have done back in 1988. <break time="150ms"/> Alas, though, it’s 31 years old now and I am moving in my chair whilst giving it a listen. How about you?<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/38_Wild_Wild_West_Final.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 38,
    year: [1988],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=6ES3iNPcPL8"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Wild Wild West",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/38_Wild_Wild_West.jpeg",
        textContent: {
          artist: "Artist: Escape Club",
          countdown: "Day 38 (54 to 54)",
          primaryText:
            "Sometimes there’s a song that, while it’s current in the zeitgeist you hate it and want it dead, years later you hear it and realize you actually love it and can’t live without it. Presenting that song, Wild Wild West by the Escape Club. There’s really not a lot substance to this song (or maybe there is if you actually listen to the lyrics) but it certainly is catchy and gets the honor of being cranked anytime I hear it. Which I definitely would NOT have done back in 1988. Alas, though, it’s 31 years old now and I am moving in my chair whilst giving it a listen. How about you?",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Don't Go", "Situation"],
    artist: ["Yazoo", "Yazoo"],
    date: `November 13, 2019`,
    text: `<speak>Welcome to the new wave eighties, ripe with gritty synthesized dance club songs, brought to us (mostly) from Great Britain. <break time="150ms"/> Many bands ushered in this sound, but none as magnetic and kinetic as Yazoo, later shortened to Yaz, who were comprised of the voice (Alison Moyet) and the synths (Vince Clarke). <break time="150ms"/> Yaz broke open dance club barriers with songs that crossed the line from disco pop, and allowed a generation of kids to shake their asses to a new, different, better sound. <break time="150ms"/>From their groundbreaking debut album, Upstairs At Eric’s, come these two songs that pull you in and insist that you move along to the steady beat, and swoon along with the velvet that is the voice of Alison Moyet. <break time="150ms"/> To this day I don’t think there’s any club song as delicious as Don’t Go and Situation. <break time="150ms"/> Vince eventually went on to found Erasure and, if, you’ve been paying attention, you know how I feel about Erasure.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/37_Yazoo_Final.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 37,
    year: [1982, 1982],
    genre: ``,
    significantHoomans: [],
    youtube: [
      "https://www.youtube.com/watch?v=_sQGwDeambg",
      "https://www.youtube.com/watch?v=ysmVlaw36L0",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Don't Go / Situation",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/37_Yazoo.jpeg",
        textContent: {
          artist: "Artist: Yazoo",
          countdown: "Day 37 (54 to 54)",
          primaryText:
            "Welcome to the new wave eighties, ripe with gritty synthesized dance club songs brought to us (mostly) from Great Britain. Many bands ushered in this sound, but none as magnetic and kinetic as Yazoo, later shortened to Yaz, who were comprised of the voice (Alison Moyet) and the synths (Vince Clarke). Yaz broke open dance club barriers with songs that crossed the line from disco pop and allowed a generation of kids to shake their asses to a new, different, better sound. From their groundbreaking debut album, Upstairs At Eric’s, come these two songs that pull you in and insist that you move along to the steady beat and swoon along with the velvet that is the voice of Alison Moyet. To this day I don’t think there’s any club song as delicious as Don’t Go and Situation. Vince eventually went on to found Erasure and, if, you’ve been paying attention, you know how I feel about Erasure.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Can't We Try"],
    artist: ["Dan Hill And Vonda Shepard"],
    date: `November 14, 2019`,
    text: `<speak>Once upon a time, I shared a house rental with three friends, and every now and then there would be some unexpected, unknown company in the common living room when I’d come home. <break time="150ms"/> One time in particular there was this hippy girl in a long dress and a slouch sweater, who was the girlfriend of a roommate’s friend (and man, was she out of his league).<break time="150ms"/> She had long brownish blonde hair, and I remember she was remarkably beautiful, but that’s not from where the memory of the girl gets interesting. <break time="150ms"/> No, it got interesting when I overheard her sing along to the female parts in a duet called Can’t We Try, by balladeer Dan Hill and songstress Vonda Shepard. <break time="150ms"/> I was hiding out in my bedroom as a good extroverted introvert would do, and suddenly it was as if someone magnified the sound on the music downstairs, and the voice of Vonda came alive. But it wasn’t Vonda I’d heard; the voice, one of the most spectacular I’d ever heard being sung by an actual human in my presence, came from the hippy girl who was too good for the guy she’d been dating. <break time="150ms"/> And that’s my memory any and every time I hear this song. I think Jan may have the same memory.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/36_Dan_Hill_Final.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 36,
    year: [1987],
    genre: ``,
    significantHoomans: ["Jan"],
    youtube: ["https://www.youtube.com/watch?v=gaMzEJYAJ5s"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Can't We Try",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/36_Dan_Hill.jpeg",
        textContent: {
          artist: "Artist: Dan Hill & Vonda Shepard",
          countdown: "Day 36 (54 to 54)",
          primaryText:
            "Once upon a time, I shared a house rental with three friends and every now and then there would be some unexpected, unknown company in the common living room when I’d come home. One time in particular there was this hippy girl in a long dress and a slouch sweater who was the girlfriend of a roommate’s friend (and man, was she out of his league). She had long brownish blonde hair and I remember she was remarkably beautiful, but that’s not from where the memory of the girl gets interesting. No, it got interesting when I overheard her sing along to the female parts in a duet called Can’t We Try by balladeer Dan Hill and songstress Vonda Shepard. I was hiding out in my bedroom as a good extroverted introvert would do, and suddenly it was as if someone magnified the sound on the music downstairs, and the voice of Vonda came alive. But it wasn’t Vonda I’d heard; the voice, one of the most spectacular I’d ever heard being sung by an actual human in my presence, came from the hippy girl who was too good for the guy she’d been dating. And that’s my memory any and every time I hear this song. I think Jan may have the same memory.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Sincerely Yours"],
    artist: ["Sweet Sensation"],
    date: `November 15, 2019`,
    text: `<speak>Representing Freestyle is Sweet Sensation with Sincerely Yours. <break time="150ms"/>The late eighties presented us with this new form of dance music, and most of it sounded the same, but with a different voice here and a quirky extra beat there. <break time="150ms"/> But this song is a stand out among the genre for me. It is part of the soundtrack of 1989, when I lived with Jan and Vinny, and it reminds me of getting ready to go out to Grand Central to work the coat room. <break time="150ms"/> There’s a photo I have posted several times, a quintessential late eighties pic of me dressed to (what was then) the nines, and this song was almost certainly playing in the background when Jan snapped the picture.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/35_Sweet_Sensation_Final.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 35,
    year: [1988],
    genre: ``,
    significantHoomans: ["Jan", "Vinny"],
    youtube: ["https://www.youtube.com/watch?v=831tw8d7bU0"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Sincerely Yours",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/35_Sweet_Sensation.jpeg",
        textContent: {
          artist: "Artist: Sweet Sensation",
          countdown: "Day 35 (54 to 54)",
          primaryText:
            "Representing Freestyle is Sweet Sensation with Sincerely Yours. The late eighties presented us with this new form of dance music, and most of it sounded the same with a different voice here and a quirky extra beat there, but this song is a stand out among the genre for me. It is part of the soundtrack of 1989 when I lived with Jan and Vinny and it reminds me of getting ready to go out to Grand Central to work the coat room. There’s a photo I have posted several times, a quintessential late eighties pic of me dressed to (what was then) the nines, and this song was almost certainly playing in the background when Jan snapped the picture.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Right Hand Man"],
    artist: ["Joan Osborne"],
    date: `November 16, 2019`,
    text: `<speak>The scratchy, earthy voice of Joan Osborne captured the populace with a song that provoked the Christians, like poking a stick into a hornet’s nest. <break time="150ms"/> But from the same album, her debut, came a less popular, less played son., Right Hand Man. And that’s the one I love. It’s sexy and sexual, filled with overt messages, gritty vocals, sick accompaniment and, my favorite, a sax solo! <break time="150ms"/> This song was a treat as it played on one of the aforementioned 4-tracks at Structure in the Walt Whitman Mall. <break time="150ms"/> I’d rewind it continuously and crank it up, just to piss off my co-workers. Well, except Michele who loved it like I did. <break time="150ms"/> Why this talented nineties goddess never made it huge is still beyond me. Her voice is unique and spectacular. Where is she now? Come back, Joan, we need you.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/34_Right_Hand_Man_Final.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 34,
    year: [1995],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=yKLNyZjIQyY"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Right Hand Man",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/34_Right_Hand_Man.jpeg",
        textContent: {
          artist: "Artist: Joan Osborne",
          countdown: "Day 34 (54 to 54)",
          primaryText:
            "The scratchy, earthy voice of Joan Osborne captured the populace with a song that provoked the Christians like poking a stick into a hornet’s nest, but from the same album, her debut, came a less popular, less played song, Right Hand Man, and that’s the one I love. It’s sexy and sexual, filled with overt messages, gritty vocals, sick accompaniment and, my favorite, a sax solo! This song was a treat as it played on one of the aforementioned 4-tracks at Structure in the Walt Whitman Mall. I’d rewind it continuously and crank it up just to piss off my co-workers. Well, except Michele who loved it like I did. Why this talented nineties goddess never made it huge is still beyond me. Her voice is unique and spectacular. Where is she now? Come back, Joan, we need you.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Groove Is In The Heart"],
    artist: ["Deee-Lite"],
    date: `November 17, 2019`,
    text: `<speak>How do you talk about a song that has nothing much to it, other than making you feel happy? <break time="150ms"/> That’s’ what I’m giving you today: the explosive debut dance cart single by Deee-Lite from 1990. Talk about a way to kick off a decade! A weird looking trio of musical misfits brought club songs that didn’t fit the current Freestyle mold, so where did they fit? How about nowhere, that’s a pretty amazing place to be. <break time="150ms"/> There isn’t much else to say, really, about Groove Is In The Heart. Well, except maybe astronomical! <break time="150ms"/> So just shut your hole, listen up and enjoy.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 33,
    year: [1990],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=etviGf1uWlg"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Groove Is In The Heart",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/33_Groove_Is_In_The_Heart.png",
        textContent: {
          artist: "Artist: Deee-Lite",
          countdown: "Day 33 (54 to 54)",
          primaryText:
            "How do you talk about a song that has nothing much to it other than making you feel happy? That’s’ what I’m giving you today: the explosive debut dance cart single by Deee-Lite from 1990. Talk about a way to kick off a decade! A weird looking trio of musical misfits brought club songs that didn’t fit the current Freestyle mold, so where did they fit? How about nowhere, that’s a pretty amazing place to be. There isn’t much else to say, really, about Groove Is In The Heart. Well, except maybe 'astronomical!' So just shut your hole, listen up and enjoy.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Sweet Love"],
    artist: ["Anita Baker"],
    date: `November 19, 2019`,
    text: `<speak>One of the last of the great eighties balladeers, Anita Baker gave us this beautiful pop ballad, a gift to the V.H.1. airwaves. <break time="150ms"/>Anita sways and moves, almost in a convulsive way, as she belts Sweet Love. And it’s all true and real and honest. <break time="150ms"/>Every sound from her perfect voice is accentuated by movement, just as the song accentuates the emotions it relays.  This is one of the first times a video for a love song seemed to define the song more than its radio airplay, which makes sense since Anita Baker is a very visual, physical artist. It’s one of the many things that made me fall head over heels for her and this reverent song. Also, she’s backlit so eighties I can barely handle it.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/32_Anita_Baker_Final.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 32,
    year: [1986],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=5Y9DYGiDL1o"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Sweet Love",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/32_Anita_Baker.jpeg",
        textContent: {
          artist: "Artist: Anita Baker",
          countdown: "Day 32 (54 to 54)",
          primaryText:
            "One of the last of the great eighties balladeers, Anita Baker gave us this beautiful pop ballad, a gift to the VH1 airwaves. Anita sways and moves, almost in a convulsive way, as she belts Sweet Love and it’s all true and real and honest. Every sound from her perfect voice is accentuated by movement, just as the song accentuates the emotions it relays.  This is one of the first times a video for a love song seemed to define the song more than its radio airplay, which makes sense since Anita Baker is a very visual, physical artist. It’s one of the many things that made me fall head over heels for her and this reverent song. Also, she’s backlit so eighties I can barely handle it.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Heroes"],
    artist: ["David Bowie"],
    date: `November 20, 2019`,
    text: `<speak>I was never really a fan of Bowie in the seventies during his androgynous days, and that’s primarily because of my own insecurities. <break time="150ms"/>I had the same issues with George Michael and Boy George at the respective starts of their careers in pop culture, but by the time he released his Modern Love album in the early eighties, I was ready to get on board with the brilliance that was David Bowie. <break time="150ms"/> However, I discovered Heroes much, much later in my life; I mean, I’d heard it but I never identified with it until I’d heard it sung as part of the cacophonous medley in the brilliant Moulin Rouge. <break time="150ms"/> It was covered in the nineties by The Wallflowers, but their version didn’t quite stay with me like this one does. <break time="150ms"/>I chose this song today because it’s the birthday of one of MY heroes, Mrs. Janice Dennis, a person to whom I owe just oh so much. <break time="250ms"/> I was a wallflower in 1981, when I first became aware of Mrs. Dennis. She helped me understand myself and offered me light in a very dark closet. She gave me a voice. She did and said the things my parents weren’t equipped to do or say, whether through praise or by example. She led me to feel included and special and her wisdom and guidance have stayed with me all these years later. Everyone should have that adult in their life, to help them dive deep and touch upon the talent they possess; certainly every scared gay kid should have a Mrs. Dennis in their life, specifically in their formative years when so few role models present themselves. <break time="150ms"/> I am LUCKY to have had her in my life. I am lucky to STILL. I love you, Jan!<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/31_David_Bowie_Heroes_Final.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 31,
    year: [1977],
    genre: ``,
    significantHoomans: ["Mrs. Janice Dennis"],
    youtube: ["https://www.youtube.com/watch?v=bsYp9q3QNaQ"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Heroes",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/31_David_Bowie_Heroes.png",
        textContent: {
          artist: "Artist: David Bowie",
          countdown: "Day 31 (54 to 54)",
          primaryText:
            "I was never really a fan of Bowie in the seventies during his androgynous days, and that’s primarily because of my own insecurities. I had the same issues with George Michael and Boy George at the respective starts of their careers in pop culture, but by the time he released his Modern Love album in the early eighties I was ready to get on board with the brilliance that was David Bowie. However, I discovered Heroes much, much later in my life; I mean, I’d heard it but I never identified with it until I’d heard it sung as part of the cacophonous medley in the brilliant Moulin Rouge. It was covered in the nineties by The Wallflowers, but their version didn’t quite stay with me like this one does. I chose this song today because it’s the birthday of one of MY heroes, Mrs. Janice Dennis, a person to whom I owe just oh so much. I was a wallflower in 1981 when I first became aware of Mrs. Dennis. She helped me understand myself and offered me light in a very dark closet. She gave me a voice. She did and said the things my parents weren’t equipped to do or say, whether through praise or by example. She led me to feel included and special and her wisdom and guidance have stayed with me all these years later. Everyone should have that adult in their life to help them dive deep and touch upon the talent they possess; certainly every scared gay kid should have a Mrs. Dennis in their life, specifically in their formative years when so few role models present themselves. I am LUCKY to have had her in my life. I am lucky to STILL. I love you, Jan!",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Whistle Down The Wind", "If You Were Here"],
    artist: ["Nick Heyward", "Thompson Twins"],
    date: `November 21, 2019`,
    text: `<speak>There are movies that always stay with you. We all have them. I can name at least 5 off the top of my head. None, however, can ever top Sixteen Candles. I can’t count how many times I have seen this teen love comedy classic, and I wouldn’t even try, considering I’ll likely see it another few times before I die. All that said, this lovely, sway-worthy ballad, Whistle Down The Wind, is playing in the background at the school dance as Jake Ryan dances, wistfully, with his current girlfriend, secretly longing for awkward sophomore, Samantha Baker, who, also secretly, carries a torch for Jake. And though Jake is holding Caroline, we all know this song belongs to him and Samantha. Even as Caroline gives him some lame ultimatum, he clearly doesn’t give a shit because it’s Samantha on whom he has set his sights.  And then there’s the classic ending, the perfect clincher for every daydreaming teenaged girl (and gay boy), as Jake meets Samantha at the church. You know it from the first note of Thompson Twins’ If You Were Here. The cars disappear and there stands Jake, waiting for his pretty-in-pink princess. It still gets me, as it does every time!<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/30_Sixteen_Candles_Final.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 30,
    year: [1983],
    genre: ``,
    significantHoomans: [],
    youtube: [
      "https://www.youtube.com/watch?v=tLPMcY6KmE8",
      "https://www.youtube.com/watch?v=po2ahzuziEw",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Whistle Down The Wind / If You Were Here",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/30_sixteen_candles.jpeg",
        textContent: {
          artist: "Artist: Nick Heyward / Thompson Twins",
          countdown: "Day 54 (54 to 54)",
          primaryText:
            "There are movies that always stay with you. We all have them. I can name at least 5 off the top of my head. None, however, can ever top Sixteen Candles. I can’t count how many times I have seen this teen love comedy classic, and I wouldn’t even try, considering I’ll likely see it another few times before I die. All that said, this lovely, sway-worthy ballad, Whistle Down The Wind, is playing in the background at the school dance as Jake Ryan dances, wistfully, with his current girlfriend, secretly longing for awkward sophomore, Samantha Baker, who, also secretly, carries a torch for Jake. And though Jake is holding Caroline, we all know this song belongs to him and Samantha. Even as Caroline gives him some lame ultimatum, he clearly doesn’t give a shit because it’s Samantha on whom he has set his sights.  And then there’s the classic ending, the perfect clincher for every daydreaming teenaged girl (and gay boy), as Jake meets Samantha at the church. You know it from the first note of Thompson Twins’ If You Were Here. The cars disappear and there stands Jake, waiting for his pretty-in-pink princess. It still gets me, as it does every time!",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Erotic City"],
    artist: ["Prince"],
    date: `November 22, 2019`,
    text: `<speak>Sex set to music: no one did it better than Prince. <break time="150ms"/> No one ever will again. And Erotic City is Prince 101; an introduction to the seduction.<break time="150ms"/> Prince WAS a revolution. <break time="150ms"/> He crossed all musical barriers with the subtext of sex in almost all of his songs.<break time="150ms"/> Erotic City is one of his earlier masterpieces, but I didn’t hear of it until a few years after I’d already partied like it was 1999. I think when his music dominated the airwaves and M.T.V., I discovered what else he’d been responsible for prior to his revolution. And I was on board for sure. I think the clean lyrics are, we can funk until the dawn, makin’ love ‘til cherry’s gone, but we all know what he means. Let’s face it.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/29_Erotic_City_Final.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 29,
    year: [1984],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=aoSK7vju_l8"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Erotic City",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/29_Erotic_City.jpeg",
        textContent: {
          artist: "Artist: Prince",
          countdown: "Day 54 (54 to 54)",
          primaryText:
            "Sex set to music: no one did it better than Prince. No one ever will again. And Erotic City is Prince 101; an introduction to the seduction. Prince WAS a revolution. He crossed all musical barriers with the subtext of sex in almost all of his songs. Erotic City is one of his earlier masterpieces, but I didn’t hear of it until a few years after I’d already partied like it was 1999. I think when his music dominated the airwaves and MTV, I discovered what else he’d been responsible for prior to his revolution. And I was on board for sure. I think the clean lyrics are 'we can funk until the dawn, makin’ love ‘til cherry’s gone' but we all know what he means. Let’s face it.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["I Beg Your Pardon"],
    artist: ["Kon Kan"],
    date: `November 23, 2019`,
    text: `<speak>No substance, just kicks. I Beg Your Pardon was a song that created a flood of bodies on the dance floor in 1989, when Vincent and I would go and live our best lives at Grand Central. <break time="150ms"/> As we’d get ready at the apartment, Vinnie would sing this to Jan and we had no idea at that point in time how closely we should have cherished every single moment together. <break time="150ms"/> At least I know she shares the same memories with me.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/28_I_beg_your_pardon_Final.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 28,
    year: [1988],
    genre: ``,
    significantHoomans: ["Vinny", "Jan"],
    youtube: ["https://www.youtube.com/watch?v=_YO_24AIguU"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "I Beg Your Pardon",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/28_I_beg_your_pardon.jpeg",
        textContent: {
          artist: "Artist: Kon Kan",
          countdown: "Day 28 (54 to 54)",
          primaryText:
            "No substance, just kicks. I Beg Your Pardon was a song that created a flood of bodies on the dance floor in 1989 when Vincent and I would go and live our best lives at Grand Central. As we’d get ready at the apartment, Vinnie would sing this to Jan and we had no idea at that point in time how closely we should have cherished every single moment together. At least I know she shares the same memories with me.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["There's No Stopping Us"],
    artist: ["Ollie And Jerry"],
    date: `November 24, 2019`,
    text: `<speak>There was a street dance phenomena in the early eighties called break dancing.<break time="150ms"/> Amidst the hype, a few movies were released featuring break dancers battling it out to amazing music. <break time="150ms"/> Hence, presenting Breakin', There’s No Stopping Us. <break time="250ms"/>As with a lot of the dance music I’ve posted about, please don’t search for the substance. <break time="150ms"/> That’s not what this is about. This is about a happy feeling, a breath of youth, a memory of inclusiveness and self-discovery. <break time="150ms"/>This is about becoming friends with my cousin Cristine as she entered her teens, and it’s about finding a community with her as the youngest misfits of our respective families. <break time="150ms"/>Sneaking around, hanging out with bad boys and driving around Hempstead Turnpike all hours of the night. Really great, very warm memories.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/27_Ollie_And_Jerry_Final.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 27,
    year: [1984],
    genre: ``,
    significantHoomans: ["Cristine"],
    youtube: ["https://www.youtube.com/watch?v=7_pzk83luwo"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Breakin'... There's No Stopping Us",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/27_Ollie_And_Jerry.jpeg",
        textContent: {
          artist: "Artist: Ollie & Jerry",
          countdown: "Day 27 (54 to 54)",
          primaryText:
            "There was a street dance phenomena in the early eighties called break dancing. Amidst the hype, a few movies were released featuring break dancers battling it out to amazing music. Hence, presenting Breakin’… There’s No Stopping Us. As with a lot of the dance music I’ve posted about, please don’t search for the substance. That’s not what this is about. This is about a happy feeling, a breath of youth, a memory of inclusiveness and self-discovery. This is about becoming friends with my cousin Cristine as she entered her teens, and it’s about finding a community with her as the youngest misfits of our respective families. Sneaking around, hanging out with bad boys and driving around Hempstead Turnpike all hours of the night. Really great, very warm memories.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Heart Hotels"],
    artist: ["Dan Fogelberg"],
    date: `November 25, 2019`,
    text: `<speak>When I was in high school, I was aware of the balladry of Dan Fogelberg. Leader Of The Band, Longer. <break time="150ms"/> But the song that sticks to my skin is Heart Hotels. This one reminds me of that lonely old house in the woods, the one that was my veritable prison from the joys of my childhood. <break time="150ms"/> I was no longer in the place where my heart could soar, where I knew all the kids in my neighborhood and had a sense of belonging and security. <break time="150ms"/> Now my heart and mind were parts of an abandoned old hotel, and there, on adult contemporary radio from Wilkes-Barre, came a song that described the decrepitude of my home, with the halls all worn well.<break time="150ms"/> I would listen to those last notes as this beautiful balladeer would sing, and I knew that eventually my sturdy walls would be repaired. What a beautiful song. What a beautiful voice. Oh, and yeah, a saxophone solo break as a bridge.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/26_Final.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 26,
    year: [1979],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=Ht0fwnwNKxM"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Heart Hotels",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/26_Dan_Folgelberg.jpeg",
        textContent: {
          artist: "Artist: Dan Fogelberg",
          countdown: "Day 26 (54 to 54)",
          primaryText:
            "When I was in high school, I was aware of the balladry of Dan Fogelberg. Leader Of The Band, Longer, Same Auld Lang Syne… But the song that sticks to my skin is Heart Hotels. This one reminds me of that lonely old house in the woods, the one that was my veritable prison from the joys of my childhood. I was no longer in the place where my heart could soar, where I knew all the kids in my neighborhood and had a sense of belonging and security. Now my heart and mind were parts of an abandoned old hotel, and there, on adult contemporary radio from Wilkes-Barre, came a song that described the decrepitude of my home, with the halls all worn well. I would listen to those last notes as this beautiful balladeer would sing ooh, ooh, oooh, ooooh… and I knew that eventually my sturdy walls would be repaired. What a beautiful song. What a beautiful voice. Oh, and yeah, a saxophone solo break as a bridge.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["All The Things She Said"],
    artist: ["t.A.T.u"],
    date: `November 26, 2019`,
    text: `<speak>2003, a year of phoenix-like rebirth for me, gave us All The Things She Said, an oddly hypnotic song by a Russian girl-duo called t.A.T.u. <break time="250ms"/> I love the chaos to the music – it sounds like what fear and frustration would sound like if given sound. <break time="150ms"/> Mix that with the timid, broken-English of the singer as she meanders through this chaos, and it becomes a song that mirrors what I was feeling at the time. <break time="150ms"/> In order for a phoenix to rise, it must first die. So much of me had died between 1997 and 2003, but, as the saying goes, what doesn’t kill you makes you stronger. <break time="150ms"/> So maybe the phoenix analogy isn’t the best one, but whatever. I was finally free to live the life I wanted and this song was my strange anthem: a song of tortured, trapped, denied love.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/25_All_The_Things_She_Said_Final.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 25,
    year: [2002],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=8mGBaXPlri8"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "All The Things She Said",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/25_All_The_Things_She_Said.jpeg",
        textContent: {
          artist: "Artist: t.A.T.u",
          countdown: "Day 25 (54 to 54)",
          primaryText:
            "2003, a year of phoenix-like rebirth for me, gave us All The Things She Said, an oddly hypnotic song by a Russian girl-duo called t.A.T.u. I love the chaos to the music – it sounds like what fear and frustration would sound like if given sound. Mix that with the timid, broken-English of the singer as she meanders through this chaos and it becomes a song that mirrors what I was feeling at the time. In order for a phoenix to rise, it must first die. So much of me had died between 1997 and 2003, but, as the saying goes, what doesn’t kill you makes you stronger. So maybe the phoenix analogy isn’t the best one, but whatever. I was finally free to live the life I wanted and this song was my strange anthem: a song of tortured, trapped, denied love.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Steal Away"],
    artist: ["Robbie Dupree"],
    date: `November 27, 2019`,
    text: `<speak>At the end of the seventies, there was a wave of what would eventually be called Yacht Rock. As that time period is one of my favorite times in music, because of all the angst in my early teens, I find joy and peace in songs like Steal Away by Robbie Dupree. To me it’s just a simple, delightful song that makes me happy. Not very much more to it, and not every song needs to have substance, right? <break time="250ms"/>  Added bonus: he looks like every older guy on whom I’d had secret crushes back then.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/24_Steal_Away_Robbie_Dupree_Final.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 24,
    year: [1980],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=qvvhCzDobRE"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Steal Away",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/24_Steal_Away_Robbie_Dupree.jpeg",
        textContent: {
          artist: "Artist: Robbie Dupree",
          countdown: "Day 24 (54 to 54)",
          primaryText:
            "At the end of the seventies, there was a wave of what would eventually be called Yacht Rock. As that time period is one of my favorite times in music because of all the angst in my early teens, I find joy and peace in songs like Steal Away by Robbie Dupree. To me it’s just a simple, delightful song that makes me happy. Not very much more to it, and not every song needs to have substance, right?  Added bonus: he looks like every older guy on whom I’d had secret crushes back then.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["The Great Beyond"],
    artist: ["R.E.M."],
    date: `November 28, 2019`,
    text: `<speak>The Great Beyond is a song about the life and hardships of late comedian Andy Kaufmann, but to me it’s one of the best songs ever recorded by College Radio band R.E.M. (next, only, to last year’s Everybody Hurts). <break time="250ms"/> I love the fluidity of the music as Stipe sings, almost breathlessly, in tandem. There’s a lullaby in there somewhere with the rise of the synths in the detailed background. When he sings, <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/23_The_Great_Beyond_Final.mp3"/> I swoon. It’s pure perfection of voice and pitch and delicateness. So late in their career as a band, it took them to create this brilliantly charged song to serve as a backdrop for a Jim Carrey movie. Just perfect.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/23_The_Great_Beyond_Final2.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 23,
    year: [1999],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=k_JnCWT-_O8"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "The Great Beyond",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/23_The_Great_Beyond.jpeg",
        textContent: {
          artist: "Artist: R.E.M.",
          countdown: "Day 23 (54 to 54)",
          primaryText:
            "The Great Beyond is a song about the life and hardships of late comedian Andy Kaufmann, but to me it’s one of the best songs ever recorded by College Radio band R.E.M. (next, only, to last year’s Everybody Hurts). I love the fluidity of the music as Stipe sings, almost breathlessly, in tandem. There’s a lullaby in there somewhere with the rise of the synths in the detailed background. When he sings, 'crashin’ to the grou-ou-ou-ou-ou-ou-ou-ound,' I swoon. It’s pure perfection of voice and pitch and delicateness. So late in their career as a band, it took them to create this brilliantly charged song to serve as a backdrop for a Jim Carrey movie. Just perfect.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["If You Asked Me To", "Water From The Moon", "I Love You, Goodbye"],
    artist: ["Celine Dion", "Celine Dion", "Celine Dion"],
    date: `November 29, 2019`,
    text: `<speak>The songs and voice of Celine Dion have yet to be on my countdowns, and I think that’s because almost every song she sung in the nineties, when she held reign as the Voice, reminds me of that one person, the one who is most difficult to think about but who never goes very away from my thoughts. <break time="150ms"/>But with that said, I must talk about Celine, and so many of her songs from her self-titled album from 1992, the year I was in the thick of it all with he who shall remain nameless. <break time="150ms"/>We both knew we weren’t made to last, but “if he’d asked me to…” Coming out was still so new to me, as was having the love and approval of my mother and sister (because, honestly, theirs was the only approval I’d craved), so I was in high gear while he was still taking baby steps, still  very guarded. We didn’t have the luxury of timing, sadly, and that was what ultimately defeated us. If You Asked Me To told my story at the start; Water From The Moon told of my ache to get him on the same page. <break time="150ms"/>Last but not at all least, I Love You, Goodbye was played in tandem with Whitney’s I Will Always Love You, once I knew that it really was over. <break time="150ms"/> All three songs were written for Celine by prolific ballad writer Diane Warren, so maybe it’s she to whom I owe my 1992-93 life and love and loss story. <break time="150ms"/> But to listen to this velvet-voiced chanteuse sing these songs, even now, reminds me of a simpler time which I complicated by being impatient, impetuous me. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/22_Celine_Dion_Final.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 22,
    year: [1989, 1993, 1992],
    genre: ``,
    significantHoomans: ["Adam"],
    youtube: [
      "https://www.youtube.com/watch?v=1bKuXbnGDqI",
      "https://www.youtube.com/watch?v=vNnjt0-DvpA",
      "",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "If You Asked Me To / Water From The Moon / I Love You, Goodbye",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/22_Celine_Dion.jpeg",
        textContent: {
          artist: "Artist: Celine Dion",
          countdown: "Day 22 (54 to 54)",
          primaryText:
            "The songs and voice of Celine Dion have yet to be on my countdowns, and I think that’s because almost every song she sung in the nineties, when she held reign as the Voice, reminds me of that one person, the one who is most difficult to think about but who never goes very away from my thoughts. But with that said, I must talk about Celine and so many of her songs from her self-titled album from 1992, the year I was in the thick of it all with he who shall remain nameless. We both knew we weren’t made to last, but “if he’d asked me to…” Coming out was still so new to me, as was having the love and approval of my mother and sister (because, honestly, theirs was the only approval I’d craved), so I was in high gear while he was still taking baby steps, still  very guarded. We didn’t have the luxury of timing, sadly, and that was what ultimately defeated us. If You Asked Me To told my story at the start; Water From The Moon told of my ache to get him on the same page. Last but not at all least, I Love You, Goodbye was played in tandem with Whitney’s I Will Always Love You once I knew that it really was over. All three songs were written for Celine by prolific ballad writer Diane Warren, so maybe it’s she to whom I owe my 1992-93 life and love and loss story. But to listen to this velvet-voiced chanteuse sing these songs, even now, reminds me of a simpler time which I complicated by being impatient, impetuous me. ",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Send Her My Love"],
    artist: ["Journey"],
    date: `November 30, 2019`,
    text: `<speak>When Journey did ballads, man, did they do ballads right! Some were actual slow-dance songs, but some, like Send Her My Love, were what we now appropriately call power ballads. It’s quite possible that Steve Perry and the boys birthed the genre. Now as you may recall (oh, who am I kidding? No one reads these things and certainly no one has been reading them every year, and DEFINTELY no one remembers what I’ve written in previous years’ posts!), Journey was on my countdown with Who’s Crying Now, another monster power ballad, and what I love about both of these songs is the amazing vocal strength of Steve Perry. He will always reign as one of my top two male voices of the 1980s (and if you don’t know the other one, then you for sure have not been paying attention). This song played in the backdrop of my freshman year at college when I pined to be normal, when all I’d wanted was to either get cured of what was clearly wrong with me or be spirited away in a Legion cruiser to the far-flung future. The sentimental value of the line, “roses never fade,” three simple words sung by this light from the universe, echoed inside my scared head as I would beg god to make me normal so I could feel the feelings I was supposed to feel for the girl who was perfect for me. If she reads this entry, she might know it is she of whom I’m referring.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/21_Journey_Final.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 21,
    year: [1983],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=gcbF8Hat-7g"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Send Her My Love",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/21_Journey.jpeg",
        textContent: {
          artist: "Artist: Journey",
          countdown: "Day 21 (54 to 54)",
          primaryText:
            "When Journey did ballads, man, did they do ballads right! Some were actual slow-dance songs, but some, like Send Her My Love, were what we now appropriately call power ballads. It’s quite possible that Steve Perry and the boys birthed the genre. Now as you may recall (oh, who am I kidding? No one reads these things and certainly no one has been reading them every year, and DEFINTELY no one remembers what I’ve written in previous years’ posts!), Journey was on my countdown with Who’s Crying Now, another monster power ballad, and what I love about both of these songs is the amazing vocal strength of Steve Perry. He will always reign as one of my top two male voices of the 1980s (and if you don’t know the other one, then you for sure have not been paying attention). This song played in the backdrop of my freshman year at college when I pined to be normal, when all I’d wanted was to either get cured of what was clearly wrong with me or be spirited away in a Legion cruiser to the far-flung future. The sentimental value of the line, “roses never fade,” three simple words sung by this light from the universe, echoed inside my scared head as I would beg god to make me normal so I could feel the feelings I was supposed to feel for the girl who was perfect for me. If she reads this entry, she might know it is she of whom I’m referring.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["That Lady"],
    artist: ["The Isley Brothers"],
    date: `December 1, 2019`,
    text: `<speak>Anchorman helped bring back amazing classics in its seventies newsroom spoof. But one in particular, That Lady by the Isley Brothers, was featured as lothario Ron Burgundy first lay eyes on sexy Victoria Corningstone, played by one of my favorites, Christina Applegate. <break time="150ms"/> Now, and probably forever on, when I hear this song I think of her and that moment. But the song itself is friggin’ amazing: funk guitars galore, a sick organ solo that grooves seemingly endlessly, and a beat that makes your head and hips move. <break time="250ms"/> The song also reminds me of Moosheeta, whom I love and who also loves music the way I do, specifically great funk tunes like this from the early to mid-seventies. <break time="150ms"/> I remember one time, hanging out in the yard while Frank was barbequing, I’d been tasked with the afternoon playlist, and when this song came on Moosheeta went mental with air guitar and whistling.<break time="150ms"/> It was a sight, but a wonderful sight that I will always remember.<break time="150ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 20,
    year: [1973],
    genre: ``,
    significantHoomans: ["Moosheeta"],
    youtube: ["https://www.youtube.com/watch?v=S1Mvy3E8P2U"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "That Lady",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/20_The_Isley_Brothers.jpeg",
        textContent: {
          artist: "Artist: The Isley Brothers",
          countdown: "Day 20 (54 to 54)",
          primaryText:
            "Anchorman helped bring back amazing classics in its seventies newsroom spoof, but one in particular, That Lady by the Isley Brothers, was featured as lothario Ron Burgundy first lay eyes on sexy Victoria Corningstone, played by one of my favorites, Christina Applegate. Now, and probably forever on, when I hear this song I think of her and that moment. But the song itself is friggin’ amazing: funk guitars galore, a sick organ solo that grooves seemingly endlessly, and a beat that makes your head and hips move.  The song also reminds me of Moosheeta, whom I love and who also loves music the way I do, specifically great funk tunes like this from the early to mid-seventies. I remember one time, hanging out in the yard while Frank was barbequing, I’d been tasked with the afternoon playlist, and when this song came on Moosheeta went mental with air guitar and whistling. It was a sight, but a wonderful sight that I will always remember.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Setting Sail"],
    artist: ["Gary Clark And John Carney"],
    date: `December 2, 2019`,
    text: `<speak>Recently Chris and I discovered Modern Love, an Amazon Prime series based on a weekly column from the pages of The New York Times. <break time="150ms"/> Each episode is  a real life situation, but each one is different from the previous. <break time="150ms"/>It’s a quality series; you should watch it. <break time="250ms"/> That said, the theme song is called Setting Sail, and it’s really quite beautiful. I feel like it’s a perfect representation of mine and Chris’s imperfect but beautiful relationship after these 13 years. <break time="150ms"/> I hear this and think of us, and our own unique love story, unlike anyone else’s.<break time="150ms"/>  I can’t imagine doing any of this* without him. Give this song a listen. <break time="350ms"/>This = everything.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/19_Modern_Love_Final.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 19,
    year: [2019],
    genre: ``,
    significantHoomans: ["Stomps"],
    youtube: ["https://www.youtube.com/watch?v=QZIglFldeYo"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Setting Sail",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/19_Modern_Love.jpeg",
        textContent: {
          artist: "Artist: Gary Clark & John Carney",
          countdown: "Day 19 (54 to 54)",
          primaryText:
            "Recently Chris and I discovered Modern Love, an Amazon Prime series based on a weekly column from the pages of The New York Times. Each episode is  a real life situation, but each one is different from the previous. It’s a quality series; you should watch it. That said, the theme song is called Setting Sail, and it’s really quite beautiful. I feel like it’s a perfect representation of mine and Chris’s imperfect but beautiful relationship after these 13 years. I hear this and think of us, and our own unique love story, unlike anyone else’s. I can’t imagine doing any of this* without him. Give this song a listen. *This = everything.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["All Night Long"],
    artist: ["Lionel Richie"],
    date: `December 3, 2019`,
    text: `<speak>Come on, people, you should not be surprised to hear this song today! <break time="150ms"/>If you claim to know me, then you know my love for most things eighties, and atop that broad spectrum is the music of Lionel Richie. <break time="150ms"/> Hello was in my first countdown five years ago (obviously) and, in that day’s note, I eluded to All Night Long as a severe runner-up, not knowing I’d be doing the countdowns every year hence. <break time="150ms"/> All Night Long is just such a happy song. It reminds me of my high school savior Maria (a common person to whom so much music from that time period usually pulls me back), and our Friday nights watching videos and having sleep-overs. It was during those moments with Maria that I began to find courage and confidence, and when I hear this song I am reminded of her friendship and support. So here it is today. One of the most amazing songs of the 1980s by one of the most brilliant musicians of our time, from the year I graduated high school when the life ahead seemed like it could be as technicolor as the clothing in this video.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/18_All_Night_Long_Lionel_Richie_Final.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 18,
    year: [1983],
    genre: ``,
    significantHoomans: ["Maria"],
    youtube: ["https://www.youtube.com/watch?v=nqAvFx3NxUM"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "All Night Long",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/18_All-Night-Long-Lionel-Richie.jpeg",
        textContent: {
          artist: "Artist: Lionel Richie",
          countdown: "Day 18 (54 to 54)",
          primaryText:
            "Come on, people, you should not be surprised to hear this song today! If you claim to know me, then you know my love for most things eighties, and atop that broad spectrum is the music of Lionel Richie. Hello was in my first countdown five years ago (obviously) and, in that day’s note, I eluded to All Night Long as a severe runner-up, not knowing I’d be doing the countdowns every year hence. All Night Long is just such a happy song. It reminds me of my high school savior Maria (a common person to whom so much music from that time period usually pulls me back), and our Friday nights watching videos and having sleep-overs. It was during those moments with Maria that I began to find courage and confidence, and when I hear this song I am reminded of her friendship and support. So here it is today. One of the most amazing songs of the 1980s by one of the most brilliant musicians of our time, from the year I graduated high school when the life ahead seemed like it could be as technicolor as the clothing in this video.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Love Is In The Air"],
    artist: ["John Paul Young"],
    date: `December 4, 2019`,
    text: `<speak>Here is another song of little substance, but it’s surely one that makes you feel good when you hear it. <break time="150ms"/> Love Is In the Air, from one hit wonder John Paul Young, out of the 1977 archives. <break time="150ms"/> Featured in the Baz Luhrmann film Strictly Ballroom, this one reminds me of a happier time with Petey, my ex-brother in law, when we were in Ptown and he was particularly (and uncharacteristically) silly, singing this song the entire week. <break time="150ms"/> Enjoy this amazing seventies video, with the singer looking more Zeppelin than Manilow, and I hope it makes your day!<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/17_Love_Is_In_The_air_Final.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 17,
    year: [1977],
    genre: ``,
    significantHoomans: ["Petey Raimondi"],
    youtube: ["https://www.youtube.com/watch?v=NNC0kIzM1Fo"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Love Is In The Air",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/17_Love_Is_In_The_air.jpeg",
        textContent: {
          artist: "Artist: John Paul Young",
          countdown: "Day 17 (54 to 54)",
          primaryText:
            "Here is another song of little substance, but it’s surely one that makes you feel good when you hear it: Love Is In the Air from one hit wonder John Paul Young out of the 1977 archives. Featured in the Baz Luhrmann film Strictly Ballroom, this one reminds me of a happier time with Petey, my ex-brother in law, when we were in Ptown and he was particularly (and uncharacteristically) silly, singing this song the entire week. Enjoy this amazing seventies video, with the singer looking more Zeppelin than Manilow, and I hope it makes your day!",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Take It Easy On Me"],
    artist: ["Little River Band"],
    date: `December 5, 2019`,
    text: `<speak>Today’s song features another repeat band, from down under, Little River Band. <break time="150ms"/> Cool Change is, by far, one of my favorite songs of all time, of any genre. But clearly I have always loved the music from this later seventies-early eighties band. <break time="150ms"/> Take It Easy On Me is another such song: gritty guitar, sweet, soaring vocals, beautiful harmonies. <break time="150ms"/>I love how it starts out as a almost acapella ballad as lead singer Wayne Nelson sings with a piano, and as he breaks into the chorus, in swells the music.<break time="150ms"/>  I don’t have many fond memories of that early time when we first moved to Pocono Country Place, but this song resonates as one, and it connects me to longtime friend Connie Neff, who was always nice to this, new kid, and helped make life less miserable on that bus ride to and from school.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/16_Little_River_Band_Final.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 16,
    year: [1981],
    genre: ``,
    significantHoomans: ["Connie Neff"],
    youtube: ["https://www.youtube.com/watch?v=aFTzuWKR-qc"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Take It Easy On Me",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/16_Little_River_Band.jpeg",
        textContent: {
          artist: "Artist: Little River Band",
          countdown: "Day 16 (54 to 54)",
          primaryText:
            "Today’s song features another repeat band, from down under, Little River Band. Cool Change is, by far, one of my favorite songs of all time, of any genre, but clearly I have always loved the music from this later seventies-early eighties band. Take It Easy On Me is another such song: gritty guitar, sweet, soaring vocals, beautiful harmonies. I love how it starts out as a almost acapella ballad as lead singer Wayne Nelson sings with a piano, and as he breaks into the chorus, in swells the music. I don’t have many fond memories of that early time when we first moved to Pocono Country Place, but this song resonates as one and it connects me to longtime friend Connie Neff, who was always nice to this ‘new kid’ and helped make life less miserable on that bus ride to and from school.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Heard It In A Love Song"],
    artist: ["Marshall Tucker Band"],
    date: `December 6, 2019`,
    text: `<speak>I don’t often talk about my brother Mike, but today’s song is dedicated to him, and it will likely be the only time you’ll ever hear me talk about any Country Rock music! <break time="250ms"/> From the genre that spilled out Lynyrd Skynyrd (ugh) came this pleasant love song from the Marshall Tucker Band, Heard It In A Love Song. <break time="250ms"/> Like yesterday’s song, this one is from a very specific era (for me, anyway). We moved to Pennsylvania in the summer of 1979, but my memories are always of cold weather, endless winters. <break time="150ms"/> Cabin-fevered in that house, my brothers would play their albums, and this song was the stand out among the music. Mike had the album cover on his bedroom wall, and I always loved the intricate script-work of the logo. <break time="250ms"/> To annoy my brothers, like they did to me consistently by making fun of Donna Summer and Olivia Newton-John, I’d sing the title incorrectly as, Purdy little love song, and it would drive them nuts! <break time="250ms"/>Anyway, today is as good a day as any to let my brother Mike know that I love him and think about him every single time I hear this song. It makes me happy and reminds me of simpler times that, though at the time sucked, settle my soul and connect me to home. Also, it’s really a great classic rock love song.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/15_Heard_It_in_a_Love_Song_Final.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 15,
    year: [1977],
    genre: ``,
    significantHoomans: ["Michael"],
    youtube: ["https://www.youtube.com/watch?v=SiLUTWcLCgU"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Heard It In A Love Song",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/15_Heard_It_in_a_Love_Song.jpeg",
        textContent: {
          artist: "Artist: Marshall Tucker Band",
          countdown: "Day 15 (54 to 54)",
          primaryText:
            "I don’t often talk about my brother Mike, but today’s song is dedicated to him, and it will likely be the only time you’ll ever hear me talk about any Country Rock music! From the genre that spilled out Lynyrd Skynyrd (ugh) came this pleasant love song from the Marshall Tucker Band, Heard It In A Love Song. Like yesterday’s song, this one is from a very specific era (for me, anyway). We moved to Pennsylvania in the summer of 1979, but my memories are always of cold weather, endless winters; cabin-fevered in that house, my brothers would play their albums, and this song was the stand out among the music. Mike had the album cover on his bedroom wall and I always loved the intricate script-work of the logo. To annoy my brothers, like they did to me consistently by making fun of Donna Summer and Olivia Newton-John, I’d sing the title incorrectly as 'Purdy little love song' and it would drive them nuts! Anyway, today is as good a day as any to let my brother Mike know that I love him and think about him every single time I hear this song. It makes me happy and reminds me of simpler times that, though at the time sucked, settle my soul and connect me to home. Also, it’s really a great classic rock love song.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["No Scrubs"],
    artist: ["TLC"],
    date: `December 7, 2019`,
    text: `<speak>Yesterday’s song was one that reminded me of my brother, and today’s is one for his kids, Angela and Mike. <break time="150ms"/> I bring you No Scrubs, by nineties pop sensation T.L.C. <break time="150ms"/> Now, how does a song about a broke-ass muthafucka relate to two small children? <break time="150ms"/> Let’s just say that Uncle Nicky loved to do sing-alongs in the car when he was in charge of the kids. They were taught songs like Baby Got Back (classy, I know) and Rapper’s Delight (mmm hmmm), but my personal favorite memory with them as my tiny passengers was of this song; it came on the radio and I sang along, and little Mike leaned forward and said, in his tiny voice, Uncle Nicky, what’s a scrub? <break time="150ms"/> Naturally, I answered by reciting the actual lyrics. I watched his reaction in the rear-view; he was simply like, oh. <break time="150ms"/> Angela cracked up and then we all laughed. It’s one of my happiest memories of a not-so-happy time in all our lives, trying to find sunshine in constant clouds. I can no longer hear this song without picturing their beautiful, innocent baby-faces. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/14_No_Scrubs_Final.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 14,
    year: [1992],
    genre: ``,
    significantHoomans: ["Angela and Mike"],
    youtube: ["https://www.youtube.com/watch?v=FrLequ6dUdM"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "No Scrubs",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/14_No_Scrubs.jpeg",
        textContent: {
          artist: "Artist: TLC",
          countdown: "Day 14 (54 to 54)",
          primaryText:
            "Yesterday’s song was one that reminded me of my brother, and today’s is one for his kids, Angela and Mike. I bring you No Scrubs by nineties pop sensation TLC. Now, how does a song about a broke-ass muthafucka relate to two small children? Let’s just say that Uncle Nicky loved to do sing-alongs in the car when he was in charge of the kids. They were taught songs like Baby Got Back (classy, I know) and Rapper’s Delight (mmm hmmm), but my personal favorite memory with them as my tiny passengers was of this song; it came on the radio and I sang along, and little Mike leaned forward and said, in his tiny voice, 'Uncle Nicky, what’s a scrub?' Naturally, I answered by reciting the actual lyrics. I watched his reaction in the rear-view; he was simply like, 'oh.' Angela cracked up and then we all laughed. It’s one of my happiest memories of a not-so-happy time in all our lives, trying to find sunshine in constant clouds. I can no longer hear this song without picturing their beautiful, innocent baby-faces. ",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Under The Bridge"],
    artist: ["Red Hot Chili Peppers"],
    date: `December 8, 2019`,
    text: `<speak>From the first few guitar picks of Under The Bridge, you are transported into a melancholy land of loneliness. <break time="150ms"/> Fittingly, it’s a song about the connection between addiction and hope. It starts as a ballad but soon enough becomes the hard driven Chili Peppers song you crave, replete with sincere vocals, drums and a kick-ass bass line are the signature of Keidis, Flea and gang. <break time="150ms"/> I am brought back to Chess King in the South Shore Mall, Z100 on the overhead, fluorescents in check, clothing racks in flawless array. As we would wait for customers, we’d gather around the wrap desk and laugh, unknowingly reveling in our youth. Brigitte. Don. Joe Albury. Jenn. Pam. Cecilia. Some days I miss that specific moment in time more than any other. I had no idea what lay just ahead and I was happy that the recent past was just that.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/13_UndertheBridge_Final.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 13,
    year: [1991],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=lwlogyj7nFE"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Under The Bridge",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/13_UndertheBridge.jpeg",
        textContent: {
          artist: "Artist: Red Hot Chili Peppers",
          countdown: "Day 13 (54 to 54)",
          primaryText:
            "From the first few guitar picks of Under The Bridge you are transported into a melancholy land of loneliness. Fittingly, it’s a song about the connection between addiction and hope. It starts as a ballad but soon enough becomes the hard driven Chili Peppers song you crave, replete with sincere vocals, drums and a kick-ass bass line as are the signature of Keidis, Flea and gang. I am brought back to Chess King in the South Shore Mall, Z100 on the overhead, fluorescents in check, clothing racks in flawless array. As we would wait for customers, we’d gather around the wrap desk and laugh, unknowingly reveling in our youth. Brigitte. Don. Joe Albury. Jenn. Pam. Cecilia. Some days I miss that specific moment in time more than any other. I had no idea what lay just ahead and I was happy that the recent past was just that.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Against All Odds"],
    artist: ["Phil Collins"],
    date: `December 9, 2019`,
    text: `<speak>So at the start of this year’s countdown we spoke about the most romantic song of all time, but today let’s agree that Against All Odds, Phil Collins’ breakout solo hit from the mid-80s, is perhaps the most beautiful break-up song of all time. <break time="150ms"/> Inspired by a film, this is the kind of song that stands the test of time; it was released and topped the charts in 1984, but it could have been released this year or in the 90s or in the 70s and it would still echo to the broken hearted but hopeful. <break time="150ms"/> There was a time before Phil Collins music was considered cheesy, and this was it. Mariah Carey covered it in 2000 but, in my opinion, the original can never be one-upped no matter how many melismas a chanteuse can deliver. <break time="150ms"/> Give Phil’s version a listen and hear the grit in his voice, the pleading and the depth. It’s brilliant<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/12_Against_All_Odds_Final.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 12,
    year: [1981],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=Qa1AqKxakRM"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Against All Odds (Take A Look At Me Now)",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/12_Against_All_Odds.jpeg",
        textContent: {
          artist: "Artist: Phil Collins",
          countdown: "Day 54 (54 to 54)",
          primaryText:
            "So at the start of this year’s countdown we spoke about the most romantic song of all time, but today let’s agree that Against All Odds, Phil Collins’ breakout solo hit from the mid-80s, is perhaps the most beautiful break-up song of all time. Inspired by a film, this is the kind of song that stands the test of time; it was released and topped the charts in 1984, but it could have been released this year or in the 90s or in the 70s and it would still echo to the broken hearted but hopeful. There was a time before Phil Collins music was considered cheesy, and this was it. Mariah Carey covered it in 2000 but, in my opinion, the original can never be one-upped no matter how many melismas a chanteuse can deliver. Give Phil’s version a listen and hear the grit in his voice, the pleading and the depth. It’s brilliant",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Will You Love Me Tomorrow"],
    artist: ["Carole King"],
    date: `December 10, 2019`,
    text: `<speak>Carole King music is classic and spellbinding. <break time="150ms"/> She wrote songs for other people that you never knew she wrote, but the ones she recorded for herself are timeless and unique. <break time="150ms"/> Take Will You Love Me Tomorrow; it’s the biggest hit by the Shirelles in the early sixties, but Carole recorded it for her Tapestry album, arguably one of the best cover to cover albums in Rock and Roll history, and it’s on my countdown because it reminds me of my sweet and beautiful mother. <break time="150ms"/ I wish I remembered more of the music Mom loved when she was young, but of all my childhood memories in the kitchen listening to W.G.B.B., this song was something to which little Angie sang along. I vividly remember her big brown eyes as she wore her silly apron singing to me as I’d sit and have toast and tea for breakfast before school. What a wonderful place to which I’m transported when I hear this song. <break time="150ms"/When Chris and I saw Beautiful on Broadway, I remember crying my eyes out when the actress sung this song. If only for one more moment to watch my adorable mom sing this to grade-school me.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/11_Carole_King_Final.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 11,
    year: [1960],
    genre: ``,
    significantHoomans: ["Angie"],
    youtube: ["https://www.youtube.com/watch?v=WMGBcS0h-Ng"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Will You Love Me Tomorrow",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/11_Carole_King.jpeg",
        textContent: {
          artist: "Artist: Carole King",
          countdown: "Day 11 (54 to 54)",
          primaryText:
            "Carole King music is classic and spellbinding. She wrote songs for other people that you never knew she wrote, but the ones she recorded for herself are timeless and unique. Take Will You Love Me Tomorrow; it’s the biggest hit by the Shirelles in the early sixties, but Carole recorded it for her Tapestry album, arguably one of the best cover to cover albums in Rock & Roll history, and it’s on my countdown because it reminds me of my sweet and beautiful mother. I wish I remembered more of the music Mom loved when she was young, but of all my childhood memories in the kitchen listening to WGBB, this song was something to which little Angie sang along. I vividly remember her big brown eyes as she wore her silly apron singing to me as I’d sit and have toast and tea for breakfast before school. What a wonderful place to which I’m transported when I hear this song. When Chris and I saw Beautiful on Broadway, I remember crying my eyes out when the actress sung this song. If only for one more moment to watch my adorable mom sing this to grade-school me.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Private Idaho", "Strobe Light"],
    artist: ["B fifty twos", "B fifty twos"],
    date: `December 11, 2019`,
    text: `<speak><audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/10_B52s_Final1.mp3"/>So, we all know I love the ultimate party band, B52s.<break time="150ms"/> Like, duh. <break time="150ms"/> But I’ve loved them since the very start, when irreverent songs like this were uncommon. Just watching this video reminds me of every single reason the B’s are and always have been brilliant party music makers. <break time="150ms"/> The lyrics to Private Idaho are mental, but it’s never been about that. It’s about bouffant hair and silly dancing.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/10_B52s_Final2.mp3"/>From the first moment I’d heard Strobe Light, I loved the theatrical comedy of it all: the sex talk, both obvious and innuendo, and the double entendres in words like pineapple. When narrates all the things he’s gonna do, and the girls willingly gasp and approve, I am sold. There really is little better in this world than the booming vocals of Fred Schneider and the harmonies of Kate & Cindy. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/10_B52s_Final3.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 10,
    year: [1978, 1978],
    genre: ``,
    significantHoomans: [],
    youtube: [
      "https://www.youtube.com/watch?v=yXmnmvDl-ao",
      "https://www.youtube.com/watch?v=DrYxPH1zH18",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Private Idaho / Strobelight",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/10_B52s.jpeg",
        textContent: {
          artist: "Artist: B52s",
          countdown: "Day 10 (54 to 54)",
          primaryText:
            "So, we all know I love the ultimate party band, B52s. Like, duh. But I’ve loved them since the very start, when irreverent songs like this were uncommon. Just watching this video reminds me of every single reason the B’s are and always have been brilliant party music makers. The lyrics to Private Idaho are mental, but it’s never been about that. It’s about bouffant hair and silly dancing. From the first moment I’d heard Strobe Light, I loved the theatrical comedy of it all: the sex talk, both obvious and innuendo, and the double entendres in words like pineapple. When narrates all the things he’s gonna do, and the girls willingly gasp and approve, I am sold. There really is little better in this world than the booming vocals of Fred Schneider and the harmonies of Kate & Cindy.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Time"],
    artist: ["The Alan Parsons Project"],
    date: `December 12, 2019`,
    text: `<speak>Get ready, mi hentay. This is going to be a sob story, so if you’re not feeling like reading one of those, move along. <break time="150ms"/> Today’s is probably the saddest song I have ever heard: Time by the Alan Parsons Project from 1981. <break time="150ms"/>Never knowing how utterly prophetic this song would become, I was obsessed with it during its airwave release, which coincided with the end of life and eventual death of my beloved family pet, Cheri Amour.<break time="150ms"/> Cheri and I grew up together. I barely remember my father bringing her home for us, but I do remember the stories of how small she was and how she fit in the palm of his hand. <break time="150ms"/> In Lynbrook she’d been the family pet, but once we’d moved to the woods in ’79, she became mine; my best friend, my sleeping buddy, my only confidante in a lonely wood-paneled room. <break time="250ms"/>She had gone blind just before then so my empathy muscles, which most people don’t develop until much later (and some not at all), sharpened and I spent a lot of time coaching her around the house so she wouldn’t hurt herself. <break time="150ms"/> We became inseparable, except for the hours when I was off at school. <break time="150ms"/> According to stories told by my mother, Cheri would hear the theme song for General Hospital at 3pm, perk her head up, and immediately dart, blindly but with precision, to park her little grey butt just a few inches from the front door, eagerly awaiting my impending arrival home, at which time excessive tail-wagging would commence and she would become my shadow, wherever in the house I’d roam. <break time="250ms"/> Cheri became very ill that year, 1981, and it was decided that she needed to be put to sleep. <break time="250ms"/> Yes, that’s what they called it, and maybe even still do. <break time="150ms"/>I remember quite vividly begging to go with my father and brother Carmine to the vet to be with her for her last moments, but I was denied. <break time="150ms"/>Instead I held her one last time and sang this song to her through tears, handed her to Carmine and recoiled to my bedroom for pretty much the remainder of that summer. Little did I know that that loss would still never prepare me for the inevitable onslaught: dad, best friend, sister-in-law, godmother, best friend, mom, godfather, sister, best friend, mother-in-law, brother, sister-in-law… endless, inevitable onslaught. And I’m in no way looking forward to losing my current shadow, Little Frankie, but I guess we’ll cross that rainbow bridge when we get to it.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/9_Time_Final.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 9,
    year: [1980],
    genre: ``,
    significantHoomans: ["Cheri Amour"],
    youtube: ["https://www.youtube.com/watch?v=zhRzORqNa0E"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Time",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/9_Time.jpeg",
        textContent: {
          artist: "Artist: The Alan Parsons Project",
          countdown: "Day 9 (54 to 54)",
          primaryText:
            "Get ready, mi gente. This is going to be a sob story, so if you’re not feeling like reading one of those, move along. Today’s is probably the saddest song I have ever heard: Time by the Alan Parsons Project from 1981. Never knowing how utterly prophetic this song would become, I was obsessed with it during its airwave release, which coincided with the end of life and eventual death of my beloved family pet, Cheri Amour. Cheri and I grew up together. I barely remember my father bringing her home for us, but I do remember the stories of how small she was and how she fit in the palm of his hand. In Lynbrook she’d been the family pet, but once we’d moved to the woods in ’79, she became mine; my best friend, my sleeping buddy, my only confidante in a lonely wood-paneled room. She had gone blind just before then so my empathy muscles, which most people don’t develop until much later (and some not at all), sharpened and I spent a lot of time coaching her around the house so she wouldn’t hurt herself. We became inseparable except for the hours when I was off at school; according to stories told by my mother, Cheri would hear the theme song for General Hospital at 3pm, perk her head up, and immediately dart, blindly but with precision, to park her little grey butt just a few inches from the front door, eagerly awaiting my impending arrival home at which time excessive tail-wagging would commence and she would become my shadow wherever in the house I’d roam. Cheri became very ill that year, 1981, and it was decided that she needed to be “put to sleep.” Yes, that’s what they called it, and maybe even still do. I remember quite vividly begging to go with my father and brother Carmine to the vet to be with her for her last moments, but I was denied. Instead I held her one last time and sang this song to her through tears, handed her to Carmine and recoiled to my bedroom for pretty much the remainder of that summer. Little did I know that that loss would still never prepare me for the inevitable onslaught: dad, best friend, sister-in-law, godmother, best friend, mom, godfather, sister, best friend, mother-in-law, brother, sister-in-law… endless, inevitable onslaught. And I’m in no way looking forward to losing my current shadow, Little Frankie, but I guess we’ll cross that rainbow bridge when we get to it.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Alive And Kicking"],
    artist: ["Simple Minds"],
    date: `December 13, 2019`,
    text: `<speak>Thankfully switching gears from yesterday’s sobfest, I present to you Alive And Kicking by Simple Minds, best known for their genre-defining hit from the film The Breakfast Club, Don’t You Forget About Me. <break time="150ms"/> This song was a Screamer of the Week on my favorite eighties radio station, W.L.I.R., and for good reason. <break time="150ms"/> This song kicks ass from the first few percussive beats to the last. This is a classic scenario and perhaps the best use of eighties synths with beautiful female vocal harmonies, together providing a backdrop for the alluring voice of lead singer Jim Kerr. I can honestly listen to this song over and over again. I know, duh.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/8_Simple_Minds_Alive_and_Kicking_Final.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 8,
    year: [1985],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=ljIQo1OHkTI"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Alive And Kicking",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/8_Simple_Minds_Alive_and_Kicking.jpeg",
        textContent: {
          artist: "Artist: Simple Minds",
          countdown: "Day 8 (54 to 54)",
          primaryText:
            "Thankfully switching gears from yesterday’s sobfest, I present to you Alive And Kicking by Simple Minds, best known for their genre-defining hit from the film The Breakfast Club, Don’t You Forget About Me. This song was a Screamer of the Week on my favorite eighties radio station, WLIR, and for good reason: this song kicks ass from the first few percussive beats to the last. This is a classic scenario and perhaps the best use of eighties synths with beautiful female vocal harmonies, together providing a backdrop for the alluring voice of lead singer Jim Kerr. I can honestly listen to this song over and over again. I know, duh.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["What It Feels Like For A Girl", "Make You Feel My Love"],
    artist: ["Glee Cast", "Glee Cast"],
    date: `December 14, 2019`,
    text: `<speak>What was never one of my favorite songs by the Material Girl turned out to be one of my very favorite cover recordings by the boys in the New Directions Glee Club on Glee. <break time="150ms"/> Obviously, it made bittersweet sense in context if you knew the show, but the fact that boys are singing What It Feels Like For A Girl, and the fact that they’re singing it beautifully with sweet harmonies, helps the lyrics pop the way they were intended. So much about Glee resonated with me, but when the perfect song was sung just perfectly, as was demonstrated in my 51 to 51 countdown with Rachel (Lea Michele) Berry’s version of Firework, it was hard to not take notice. <break time="150ms"/> The producers sometimes chose just the right song, and then it was sung as beautifully and as moving as this one. It’s no wonder a person could add it to their list of favorites. <break time="150ms"/>And then there’s Rachel Berry’s moving and personal cover of the ages-old Make You Feel My Love. You’ve heard this song done by many artists, notably Adele and Billy Joel, but this version was recorded for the show, just after the death of cast mate (and real-life boyfriend of Lea Michele) Cory Monteith, and it aired during their memorial episode to the character Finn. <break time="150ms"/> As I’m writing this I am tearing up remembering those emotions: sadness for a life, full of richness and hope, snuffed out by fame and addiction. <break time="150ms"/> The actors were acting, but were they really? I bet they didn’t have to act as much as feel.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/7_Glee_Cast_Final.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 7,
    year: [2010, 2010],
    genre: ``,
    significantHoomans: [],
    youtube: [
      "https://www.youtube.com/watch?v=niVnOqZ0MaQ",
      "https://www.youtube.com/watch?v=t40kR3QcXnQ",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "What It Feels Like For A Girl / Make You Feel My Love",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/7_Glee_Cast.jpeg",
        textContent: {
          artist: "Artist: Glee Cast",
          countdown: "Day 7 (54 to 54)",
          primaryText:
            "What was never one of my favorite songs by the Material Girl turned out to be one of my very favorite cover recordings by the boys in the New Directions Glee Club on Glee. Obviously, it made bittersweet sense in context if you knew the show, but the fact that boys are singing What It Feels Like For A Girl, and the fact that they’re singing it beautifully with sweet harmonies, helps the lyrics pop the way they were intended. So much about Glee resonated with me but when the perfect song was sung just perfectly, as was demonstrated in my 51 to 51 countdown with Rachel (Lea Michele) Berry’s version of Firework, it was hard to not take notice. The producers sometimes chose just the right song, and then it was sung as beautifully and as moving as this one. It’s no wonder a person could add it to their list of favorites. And then there’s Rachel Berry’s moving and personal cover of the ages-old Make You Feel My Love. You’ve heard this song done by many artists, notably Adele and Billy Joel, but this version was recorded for the show just after the death of cast mate (and real-life boyfriend of Lea Michele) Cory Monteith, and it aired during their memorial episode to the character Finn. As I’m writing this I am tearing up remembering those emotions: sadness for a life, full of richness and hope, snuffed out by fame and addiction. The actors were acting, but were they really? I bet they didn’t have to act as much as feel.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Be With You"],
    artist: ["Erasure"],
    date: `December 15, 2019`,
    text: `<speak>Hooray for Erasure, am I right? <break time="150ms"/> They provided so many songs to the soundtrack of my twenties. They were the band my Vincent loved best. You might remember that Erasure tied for the number seven spot on my very first countdown 5 years ago with Chains Of Love, and A Little Respect. <break time="150ms"/> Clearly those two songs are among my favorites of ever. <break time="150ms"/> Then, a long time past 1988, a long time past the passing of my dear pal Vincent, something amazing happened: Erasure released a completely new pop song called Be With You, and it sounded like all their wonderfully happy songs of yore. <break time="150ms"/> I thank Richie for alerting me to this fabulously uplifting song, otherwise I may have missed it. But there’s Richie, knowing full well what I remember about Vincent, and how these lyrics would resound even today, helping me to always be connected to my little bean, stalking me ever from beyond (as promised).<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/6_Erasure_Final.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 6,
    year: [2011],
    genre: ``,
    significantHoomans: ["Vinny"],
    youtube: ["https://www.youtube.com/watch?v=_9_ouQHj8Gw"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Be With You",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/6_Erasure.jpeg",
        textContent: {
          artist: "Artist: Erasure",
          countdown: "Day 6 (54 to 54)",
          primaryText:
            "Hooray for Erasure, am I right? They provided so many songs to the soundtrack of my twenties. They were the band my Vincent loved best. You might remember that Erasure tied for the number seven spot on my very first countdown 5 years ago with Chains Of Love and A Little Respect. Clearly those two songs are among my favorites of ever. Then, a long time past 1988, a long time past the passing of my dear pal Vincent, something amazing happened: Erasure released a completely new pop song called Be With You, and it sounded like all their wonderfully happy songs of yore. I thank Richie for alerting me to this fabulously uplifting song, otherwise I may have missed it. But there’s Richie, knowing full well what I remember about Vincent, and how these lyrics would resound even today, helping me to always be connected to my little bean, stalking me ever from beyond (as promised).",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Photograph"],
    artist: ["Nickelback"],
    date: `December 16, 2019`,
    text: `<speak>Let’s rip the band-aid off today’s song quick: Photograph by Nickelback.<break time="150ms"/> People tend to make fun of this band, me included, but there’s something about this specific song that resonates. <break time="150ms"/>The lyrics don’t exactly mirror my own experiences but the mood of the song hearkens back to my old house at 55 Wright Avenue, about which I still sometimes have the most vivid and thought-provoking dreams. <break time="150ms"/> I think about that old house and those old days a lot. I mentioned this in so many of my previous posts, but I really had a wonderful golden childhood. Properly sheltered, adequately loved, comforted by neighborhood friends with whom I still converse. I grew up across the street from the biggest park in the world: it stretched for what seemed miles and we knew every single corner of it. It was our park, no doubt about it. <break time="250ms"/>Ask Linda or Greg or Antoinette and they will agree. Almost everything we did, we did in Greis Park. It’s weird that this song brings me to tears each time. <break time="150ms"/> It’s a rock ballad by a rock band. But to me it’s so much more. The line, It’s hard to say it, time to say it, goodbye, goodbye, is the one that hits me straight in the chest. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/5_Nickelback_Final.mp3"/> That moment in my life is, even, now, the one I consider the most pivotal and telling. It’s the moment that decided everything thereafter. And it was a moment controlled by others. And it’s a moment to which I can never return except, it seems, in my dreams.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/5_Nickelback_Final2.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 5,
    year: [2005],
    genre: ``,
    significantHoomans: ["Greg", "Linda"],
    youtube: ["https://www.youtube.com/watch?v=BB0DU4DoPP4"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Photograph",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/5_Nickelback.jpeg",
        textContent: {
          artist: "Artist: Nickelback",
          countdown: "Day 5 (54 to 54)",
          primaryText:
            "Let’s rip the band-aid off today’s song quick: Photograph by Nickelback. People tend to make fun of this band, me included, but there’s something about this specific song that resonates. The lyrics don’t exactly mirror my own experiences but the mood of the song hearkens back to my old house at 55 Wright Avenue, about which I still sometimes have the most vivid and thought-provoking dreams. I think about that old house and those old days a lot. I mentioned this in so many of my previous posts but I really had a wonderful golden childhood. Properly sheltered, adequately loved, comforted by neighborhood friends with whom I still converse. I grew up across the street from the biggest park in the world: it stretched for what seemed miles and we knew every single corner of it. It was *our* park, no doubt about it. Ask Linda or Greg or Antoinette and they will agree. Almost everything we did, we did in Greis Park. It’s weird that this song brings me to tears each time. It’s a rock ballad by a rock band. But to me it’s so much more. The line, “It’s hard to say it, time to say it, goodbye, goodbye”, is the one that hits me straight in the chest. That moment in my life is, even, now, the one I consider the most pivotal and telling. It’s the moment that decided everything thereafter. And it was a moment controlled by others. And it’s a moment to which I can never return except, it seems, in my dreams.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["We Belong Together"],
    artist: ["Mariah Carey"],
    date: `December 17, 2019`,
    text: `<speak>I remember exactly where I was the first time I’d ever heard the unimaginably golden voice of Mariah Carey: I was on the B.Q.E. heading home to Long Island with someone I used to know (long story) and Vision of Love came on the radio. <break time="150ms"/> I remember thinking that Whitney Houston was about to be dethroned as queen R and B Chanteuse. <break time="150ms"/> Anyone alive knows at least one of Mariah’s many top 10 hit songs, and everyone alive has heard her massive Christmas song that has been played to death since its release, so it should be no surprise that I have at least one song by Mariah on my countdown.<break time="150ms"/> Her catalog covers my entire adulthood for the most part, and that includes all the loves of my life at least (minus the current one!) <break time="150ms"/> I have loved so many and have cried during so many, but only one song is really my very favorite Mariah song, and it’s one that was somewhat considered a comeback in 2005, a bittersweet time for me personally. <break time="250ms"/> We Belong Together still sort of conjures a lump in my throat. There’s something music-boxy about this song; it’s a lullaby about love gone by and the inevitable sadness and regret we all feel. When she reaches that whistle octave toward the end of the song, you’re swooning and there’s no looking back. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/4_We_Belong_Together_Final.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 4,
    year: [2005],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=0habxsuXW4g"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "We Belong Together",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/4_We_Belong_Together.jpeg",
        textContent: {
          artist: "Artist: Mariah Carey",
          countdown: "Day 4 (54 to 54)",
          primaryText:
            "I remember exactly where I was the first time I’d ever heard the unimaginably golden voice of Mariah Carey: I was on the BQE heading home to Long Island with someone I used to know (long story) and Vision of Love came on the radio. I remember thinking that Whitney Houston was about to be dethroned as queen R&B Chanteuse. Anyone alive knows at least one of Mariah’s many top 10 hit songs, and everyone alive has heard her massive Christmas song that has been played to death since its release, so it should be no surprise that I have at least one song by Mariah on my countdown. Her catalog covers my entire adulthood for the most part, and that includes all the loves of my life at least (minus the current one!) I have loved so many and have cried during so many, but only one song is really my very favorite Mariah song and it’s one that was somewhat considered a comeback in 2005, a bittersweet time for me personally. We Belong Together still sort of conjures a lump in my throat. There’s something music-boxy about this song; it’s a lullaby about love gone by and the inevitable sadness and regret we all feel. When she reaches that whistle octave toward the end of the song, you’re swooning and there’s no looking back…",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Wonderwall"],
    artist: ["Oasis"],
    date: `December 18, 2019`,
    text: `<speak>Not sure how this song squeaked past and didn’t make it into previous countdowns, but here it is today. <break time="150ms"/> Wonderwall by Oasis, a decade-defining masterclass in pop rock. <break time="150ms"/> Music changed so drastically, so fast, in the middle of the last decade of the 1900s. <break time="150ms"/> Partly responsible was Oasis, who brought that British flair back to popular American radio the way it did in the sixties, with a song combining uplifting lyrics and sad music. <break time="150ms"/> It was a dichotomy of sounds that created near-perfection. Almost like life itself, in a way. <break time="150ms"/> Like other songs on my countdowns, Wonderwall takes me back to that moment just before the worst event in my life happened, so when I hear it, I am reminded of youthful innocence and blissful ignorance. Oh, the things I’d try to do and say if I only had the chance to travel back and talk to Mary, to Sis, to so many people<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/3_Wonderwall_Final.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 3,
    year: [1995],
    genre: ``,
    significantHoomans: ["Mary", "Rosemarie"],
    youtube: ["https://www.youtube.com/watch?v=bx1Bh8ZvH84"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Wonderwall",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/3_Wonderwall.jpeg",
        textContent: {
          artist: "Artist: Oasis",
          countdown: "Day 3 (54 to 54)",
          primaryText:
            "Not sure how this song squeaked past and didn’t make it into previous countdowns, but here it is today: Wonderwall by Oasis, a decade-defining masterclass in pop rock. Music changed so drastically so fast in the middle of the last decade of the 1900s. Partly responsible was Oasis, who brought that British flair back to popular American radio the way it did in the sixties, with a song combining uplifting lyrics and sad music. It was a dichotomy of sounds that created near-perfection. Almost like life itself, in a way. Like other songs on my countdowns, Wonderwall takes me back to that moment just before the worst event in my life happened, so when I hear it, I am reminded of youthful innocence and blissful ignorance. Oh, the things I’d try to do and say if I only had the chance to travel back and talk to Mary, to Sis, to so many people…",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Don't Go Breaking My Heart"],
    artist: ["Elton John And Kiki Dee"],
    date: `December 19, 2019`,
    text: `<speak>Clearly one of the happiest songs of my lifetime (and that’s a long span of time, people!), the duet of Don’t Go Breaking My Heart, by Sir Elton and pop-pal Kiki Dee is a song for the ages.<break time="150ms"/> This is a feel-good song if I’ve ever heard one. Look how happy and silly this video is! This is perhaps the finest moment in the career of Elton John. A perfect song. Uplifting, danceable, karaoke-inspiring. This guy has had a million hits, each one more classic than the last, from ballad to pop to rock, but this song is the gold standard among his finest work. Not much else to say about this song except it will never NOT make me love it! It couldn’t if it tried!<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/2_Don't_Go_Breaking_My_Heart_Final.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 2,
    year: [1976],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=z0qW9P-uYfM"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Don't Go Breaking My Heart",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/2_Don't_Go_Breaking_My_Heart.jpeg",
        textContent: {
          artist: "Artist: Elton John & Kiki Dee",
          countdown: "Day 2 (54 to 54)",
          primaryText:
            "Clearly one of the happiest songs of my lifetime (and that’s a long span of time, people!), the duet of Don’t Go Breaking My Heart by Sir Elton and pop-pal Kiki Dee is a song for the ages. This is a feel-good song if I’ve ever heard one. Look how happy and silly this video is! This is perhaps the finest moment in the career of Elton John. A perfect song. Uplifting, danceable, karaoke-inspiring. This guy has had a million hits, each one more classic than the last, from ballad to pop to rock, but this song is the gold standard among his finest work. Not much else to say about this song except it will never NOT make me love it! It couldn’t if it tried!",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Sweet Child O' Mine"],
    artist: ["Guns N’ Roses"],
    date: `December 20, 2019`,
    text: `<speak>Ending the year’s countdown the day before my birthday, with a special dedication to someone who hates being the center of attention, and who hates being called out for anything wonderful she’s ever done, so I will refrain from revealing her identity and I won’t entertain any guesses from the masses, so don’t ask. <break time="250ms"/> Let’s just say this person has been a consistent rock under my shaky feet. Probably one of the strongest women I have ever had the honor to know, she never lets her guard down just as often as she never lets you down. <break time="150ms"/> But about the song: Sweet Child O’ Mine, by Guns N’ Roses’ is from the glittery era of excess, and that’s exactly what this kick ass song delivers: excessive rock and excessive fun. break time="150ms"/> Plus, as an added gift, the lyrics are actually kind of sweet. When it was brought to my attention, almost two decades later, that the person I’ve referenced above also loved this song, it became obvious that this would be my anthem for her. break time="150ms"/> This, or Ice Ice Baby. Or Gettin’ Jiggy Wit’ It.  She won’t read this post because she avoids Facebook like any good millennial would, but that’s ok. However, in case I am mistaken, and she does take a gander, first she will laugh at my use of the word gander, and then she will hear this: THANK YOU for being my constant savior, my beef, the person who makes me stop and laugh at myself every time I need to. Thank you for every bit of it, ya dumb twat. I love you!<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/1_Sweet_Child_O_Mine_Final.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 1,
    year: [1987],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=1w7OgIMMRc4"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Sweet Child O' Mine",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/1_Sweet_Child_O_Mine.jpeg",
        textContent: {
          artist: "Artist: Guns N’ Roses",
          countdown: "Day 1 (54 to 54)",
          primaryText:
            "Ending the year’s countdown the day before my birthday with a special dedication to someone who hates being the center of attention and who hates being called out for anything wonderful she’s ever done, so I will refrain from revealing her identity and I won’t entertain any guesses from the masses, so don’t ask. Let’s just say this person has been a consistent rock under my shaky feet. Probably one of the strongest women I have ever had the honor to know, she never lets her guard down just as often as she never lets you down. But about the song: Guns N’ Roses’ Sweet Child O’ Mine is from the glittery era of excess and that’s exactly what this kick ass song delivers: excessive rock and excessive fun. Plus, as an added gift, the lyrics are actually kind of sweet. When it was brought to my attention, almost two decades later, that the person I’ve referenced above also loved this song, it became obvious that this would be my anthem for her. This, or Ice Ice Baby. Or Gettin’ Jiggy Wit’ It.  She won’t read this post because she avoids Facebook like any good millennial would, but that’s ok. However, in case I am mistaken, and she does take a gander, first she will laugh at my use of the word “gander” and then she will hear this: THANK YOU for being my constant savior, my beef, the person who makes me stop and laugh at myself every time I need to. Thank you for every bit of it, ya dumb twat. I love you!",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Christmas Wrapping"],
    artist: ["The Waitresses"],
    date: `December 21, 2019`,
    text: `<speak>I end each year on my actual birthday with the obligatory Christmas favorite, since every year around the holidays, while everyone seems to be celebrating, the music of the season is also the music of my birthday. <break time="150ms"/> So, happy Christmas to all y’all, and bah humbug, but that’s too strong cause it is my favorite holiday! <break time="150ms"/> I leave you this year with Christmas Wrapping by the Waitresses, from 1981. A Christmas classic that will always top my playlist every December. <break time="150ms"/> Merry Christmas, Happy Hanukkah, Joyous Kwanzaa, and a generic Seasons Greetings to everyone! <break time="150ms"/> Stop hating each other for differing opinions and maybe try and find some common ground and the spark of joy in your heart that this season should inspire. <break time="150ms"/> Then carry that common ground and spark of joy into 2020, if you dare. And thanks for reading!<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/54-to-54/0_Waitresses_Christmas_Wrapping_Final.mp3"/></speak>`,
    countdown: `fifty four to fifty four`,
    countdownDisplay: `54 to 54`,
    day: 0,
    year: [1981],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=nud2TQNahaU"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Christmas Wrapping",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/54-to-54/0_Waitresses_Christmas_Wrapping.jpeg",
        textContent: {
          artist: "Artist: The Waitresses",
          countdown: "Day 0 (54 to 54)",
          primaryText:
            "I end each year on my actual birthday with the obligatory Christmas favorite, since every year around the holidays, while everyone seems to be celebrating, the music of the season is also the music of my birthday. So, happy Christmas to all y’all, and bah humbug, but that’s too strong cause it is my favorite holiday! I leave you this year with Christmas Wrapping by the Waitresses from 1981, a Christmas classic that will always top my playlist every December. Merry Christmas, Happy Hanukkah, Joyous Kwanzaa, and a generic Seasons Greetings to everyone! Stop hating each other for differing opinions and maybe try and find some common ground and the spark of joy in your heart that this season should inspire. Then carry that common ground and spark of joy into 2020, if you dare. And thanks for reading!",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  // /////////////////// 55 /////////////////////////
  {
    title: ["Sex"],
    artist: ["Berlin"],
    date: `October 26, 2020`,
    text: `<speak>You may have been keeping track of my yearly countdowns that started SIX YEARS AGO, as a lark to count down to my fiftieth birthday, and if you are, I applaud, thank, and celebrate you! <break time="250ms"/> This year’s list will include songs by artists whom you’ve heard about perhaps multiple times in my lists. <break time="150ms"/> What can I say about that but that I am loyal and, since the first year was intended to be a one-and-done thing, I didn’t think I should just do retrospectives on the artists instead of trying to apple-pick favorites, which clearly is an impossible task for me. <break time="150ms"/> What you’ll also notice, as usual, is the list is ballad-heavy, with disco jangles and pop songs as typical runners up. <break time="150ms"/> I am nothing if not a predictable creature of habit. This, too, you also know if you’ve been reading my countdown blogs, and again I must thank you for finding me and my musical opinions even the least bit interesting. <break time="150ms"/> That being stated, you know Berlin as the band who released that earworm ballad in the late eighties, from that Tom Cruise movie with the planes and the testosterone. <break time="150ms"/> I know Berlin from their string of amazing hits that were part of my early love affair with new wave music. <break time="150ms"/> There is something about the voice of lead singer Teri Nunn that exudes sex and passion; it makes you want to close your eyes and move in whatever direction your body allows. I’ve already captured my love for their song No More Words in my first countdown six years ago, but that won’t stop me from adding another Berlin monster to this year’s countdown. <break time="150ms"/> In the post-Papa Don’t Preach era, while huge pop-acts like Madonna, George Michael and Salt n' Pepa were making everyone everywhere start talking about sex, Berlin subversively gave us a song called Sex (I’m A..) about bondage and role play and everything in between. <break time="150ms"/> It’s fast paced like a racing heart. It’s also perhaps a little demeaning to women and certainly not for the feminist, but then with Teri Nunn in control, maybe that’s just exactly what it IS. <break time="150ms"/> After all, in her own words, it’s a song called Sex, but she refers to each act as making love together. <break time="150ms"/> So, who’s to say that these alternate types of role play aren’t feminist after all? Certainly not I.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/55_Sex_Final.mp3"/></speak>`,
    countdown: `fifty five to fifty five`,
    countdownDisplay: `55 to 55`,
    day: 55,
    year: [1982],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=K-VcMcHHoFg"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Sex [I’m A...]",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/55_Sex.jpeg",
        textContent: {
          artist: "Artist: Berlin",
          countdown: "Day 55 (55 to 55)",
          primaryText:
            "You may have been keeping track of my yearly countdowns that started SIX YEARS AGO as a lark to count down to my fiftieth birthday, and if you are, I applaud, thank, and celebrate you! This year’s list will include songs by artists whom you’ve heard about perhaps multiple times in my lists. What can I say about that but that I am loyal and, since the first year was intended to be a one-and-done thing, I didn’t think I should just do retrospectives on the artists instead of trying to apple-pick favorites, which clearly is an impossible task for me. What you’ll also notice, as usual, is the list is ballad-heavy, with disco jangles and pop songs as typical runners up. I am nothing if not a predictable creature of habit. This, too, you also know if you’ve been reading my countdown blogs, and again I must thank you for finding me and my musical opinions even the least bit interesting. That being stated, you know Berlin as the band who released that earworm ballad in the late eighties from that Tom Cruise movie with the planes and the testosterone. I know Berlin from their string of amazing hits that were part of my early love affair with new wave music. There is something about the voice of lead singer Teri Nunn that exudes sex and passion; it makes you want to close your eyes and move in whatever direction your body allows. I’ve already captured my love for their song No More Words in my first countdown six years ago, but that won’t stop me from adding another Berlin monster to this year’s countdown. In the post-Papa Don’t Preach era, while huge pop-acts like Madonna, George Michael and Salt N Pepa were making everyone everywhere start talking about sex, Berlin subversively gave us a song called Sex (I’m A..) about bondage and role play and everything in between. It’s fast paced like a racing heart. It’s also perhaps a little demeaning to women and certainly not for the feminist, but then with Teri Nunn in control, maybe that’s just exactly what it IS. After all, in her own words, it’s a song called Sex, but she refers to each act as 'making love together.' So, who’s to say that these alternate types of role play aren’t feminist after all? Certainly not I.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Prisoner", "The Way He Makes Me Feel"],
    artist: ["Barbra Streisand", "Barbra Streisand"],
    date: `October 27, 2020`,
    text: `<speak>Today is Barbra day. <break time="150ms"/> In my life, she’s the first diva. Hers is the voice of a generation spanning the sixties and seventies, with a catalog stretching so far that on a clear day you’d see it forever. <break time="150ms"/> From Broadway’s Funny Girl, to film’s Star Is Born, this goliath balladier sings and you don’t just hear that voice in your ears, you feel that voice inside your body. <break time="150ms"/> I’ve written about Babs a few times before, and that’s no surprise. This time I chose a pair of songs that weren’t huge pop radio hits, but ones that resonate with me personally.<break time="150ms"/>  Second is The Way He Makes Me Feel, a beautiful ballad from her film Yentl, though I confess not knowing of it from that frame of reference; I learned of it from the release of her 1989 Collection album, and it took on personal meaning when I met the love of my life (at the time), the one who shall always remain nameless, shortly thereafter. <break time="150ms"/> At about 2:13 into the song when she breaks into that sway-worthy bridge, I could honestly close my eyes and just die. <break time="150ms"/>Some days I wonder if he does the same thing if he happens upon this song.<break time="150ms"/> More likely he changes the station. <break time="150ms"/> First, then, is Prisoner, the theme song from a 1978 thriller called The Eyes of Laura Mars. In my opinion, it’s the only good takeaway from the film. Just listen to the sincerity in this woman’s voice. At the time, she had no rival. There were contemporaries, sure, and I’ve written about all of them at one point or another. But Barbra Streisand had no equal at the time this song was recorded. <break time="150ms"/> Girls, and of course some little closeted gay boys, belted the shit out of this song into a mirror, hairbrush in hand. I’m still like a prisoner captured by her majestic voice, and this prisoner is guilty of Stockholm Syndrome.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/54_Babs_Final.mp3"/></speak>`,
    countdown: `fifty five to fifty five`,
    countdownDisplay: `55 to 55`,
    day: 54,
    year: [1971, 1983],
    genre: ``,
    significantHoomans: ["Adam"],
    youtube: [
      "https://www.youtube.com/watch?v=kgBAZRDiYfs",
      "https://www.youtube.com/watch?v=luGvJdexnRs",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Prisoner / The Way He Makes Me Feel",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/54_Babs.jpeg",
        textContent: {
          artist: "Artist: Barbra Streisand",
          countdown: "Day 54 (55 to 55)",
          primaryText:
            "In Today is Barbra day. In my life, she’s the first diva. Hers is the voice of a generation spanning the sixties and seventies, with a catalog stretching so far that on a clear day you’d see it forever. From Broadway’s Funny Girl to film’s Star Is Born, this goliath balladier sings and you don’t just hear that voice in your ears, you feel that voice inside your body. I’ve written about Babs a few times before, and that’s no surprise. This time I chose a pair of songs that weren’t huge pop radio hits but ones that resonate with me personally. Second is The Way He Makes Me Feel, a beautiful ballad from her film Yentl, though I confess not knowing of it from that frame of reference; I learned of it from the release of her 1989 A Collection album, and it took on personal meaning when I met the love of my life (at the time), the one who shall always remain nameless, shortly thereafter. At about 2:13 into the song when she breaks into that sway-worthy bridge, I could honestly close my eyes and just die. Some days I wonder if he does the same thing if he happens upon this song. More likely he changes the station when/if this song comes on. First, then, is Prisoner, the theme song from a 1978 thriller called The Eyes of Laura Mars. In my opinion, it’s the only good takeaway from the film. Just listen to the sincerity in this woman’s voice. At the time, she had no rival. There were contemporaries, sure, and I’ve written about all of them at one point or another. But Barbra Streisand had no equal at the time this song was recorded. Girls, and of course some little closeted gay boys, belted the shit out of this song into a mirror, hairbrush in hand. I’m still like a prisoner captured by her majestic voice, and this prisoner is guilty of Stockholm Syndrome.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["I Love You Donna", "Heaven Knows"],
    artist: ["Donna Summer", "Donna Summer"],
    date: `October 28, 2020`,
    text: `<speak>Today is Donna day.<break time="150ms"/> Let the gods of disco shine their glittery countenance down upon us! <break time="150ms"/>Not much else can be said that hasn’t been said about the Queen of Disco. Perfect pitch? We covered that. Played to death until the record skipped? Yup. I will forever be enthralled by and enamored of Donna Summer, and almost all of her songs. <break time="150ms"/> But today we celebrate Heaven Knows and I Love You, respectively. <break time="150ms"/>Let’s start with the latter. I didn’t know of this one until I lived with my B.F.F. Vincent in Elmont in 1989. <break time="150ms"/> Talk about playing a song to death! If you think I’m bad, you never met Vincent. He would rewind his cassette tape (and we would hear the backwards rewind sounnd <break time="150ms"/> remember that??) continuously to listen to this song over and over and over. <break time="150ms"/> At the time I may have been annoyed but, in retrospect, it was everything. My love for this song, admittedly, isn’t as much about the song as it is about the memory. Obviously, he was obsessed with Donna, as most gay guys our age were, and that meant I was now obsessed with it. <break time="150ms"/> Fine, call me a follower and not a leader, as if I give a shit. <break time="150ms"/> This song is one among many of my songs on a personal playlist of songs that remind me of my Vincent. <break time="150ms"/> I don’t have a lot, so indulge me if you will. <break time="150ms"/> And then we move to the former. I can close my eyes and picture my #ToxicMasculinity making me sing the male verse in this song. <break time="150ms"/> Ha fucking ha. <break time="150ms"/>There I was, this tiny little closet homo living in the Pocono Mountains, in a house built for our family in A Pocono Country Place in Tobyhanna. <break time="150ms"/> I would play this song repeatedly, duhr, on my turntable. <break time="150ms"/> It seemed like a duet (which I love!) but it was billed as a Donna solo. After seeing the Donna Summer musical, I realized the male voice was that of her husband who sat in, as a fill-in, to record this song. <break time="150ms"/> Didn’t matter; I already heralded this as one of my favorites of her Greatest Hits. Rest Peacefully, sweet LaDonna Adrian Gaines. This may be the last time I speak of you. And rest peacefully, my sweet and amazing friend Vincent. I’ll never stop speaking of you.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/53_I_Love_You_Donna_Final.mp3"/></speak>`,
    countdown: `fifty five to fifty five`,
    countdownDisplay: `55 to 55`,
    day: 53,
    year: [1977, 1978],
    genre: ``,
    significantHoomans: ["Vinny"],
    youtube: [
      "https://www.youtube.com/watch?v=urZywjUhS58",
      "https://www.youtube.com/watch?v=CPcBGs51zNY",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "I Love You / Heaven Knows",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/53_I_Love_You_Donna.jpeg",
        textContent: {
          artist: "Artist: Donna Summer",
          countdown: "Day 53 (55 to 55)",
          primaryText:
            "Today is Donna day. Let the gods of disco shine their glittery countenance down upon us! Not much else can be said that hasn’t been said about the Queen of Disco. Perfect pitch? We covered that. Played to death until the record skipped? Yup. I will forever be enthralled by and enamored of Donna Summer and almost all of her songs, but today we celebrate Heaven Knows and I Love You, respectively. Let’s start with the latter. I didn’t know of this one until I lived with my BFF Vincent in Elmont in 1989. Talk about playing a song to death! If you think I’m bad, you never met Vincent. He would rewind his cassette tape (and we would hear the backwards rewind sound… remember that??) continuously to listen to this song over and over and over. At the time I may have been annoyed but, in retrospect, it was everything. My love for this song, admittedly, isn’t as much about the song as it is about the memory. Obviously, he was obsessed with Donna, as most gay guys our age were, and that meant I was now obsessed with it. Fine, call me a follower and not a leader, as if I give a shit. This song is one among many of my songs on a personal playlist of songs that remind me of my Vincent. I don’t have a lot, so indulge me if you will. And then we move to the former. I can close my eyes and picture my #ToxicMasculinity making me sing the male verse in this song. Ha fucking ha. There I was, this tiny little closet homo living in the Pocono Mountains, in a house built for our family in A Pocono Country Place in Tobyhanna. I would play this song repeatedly, duhr, on my turntable. It seemed like a duet (which I love!) but it was billed as a Donna solo. After seeing the Donna Summer musical, I realized the male voice was that of her husband who sat in, as a fill-in, to record this song. Didn’t matter; I already heralded this as one of my favorites of her Greatest Hits. Rest Peacefully, sweet LaDonna Adrian Gaines. This may be the last time I speak of you. And rest peacefully, my sweet and amazing friend Vincent. I’ll never stop speaking of you.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["A Little More Love", "Magic"],
    artist: ["Olivia Newton-John", "Olivia Newton-John"],
    date: `October 29, 2020`,
    text: `<speak>Today is Olivia day. <<break time="150ms"/> Let the angels and the muses rejoice in the magic that her voice emanates! <break time="150ms"/> As stated the last few days about the last few featured divas, not much else can be said that hasn’t already about my beloved Livvie. Hers is the voice of my childhood, from as small as I can remember up to the tortured, permed-mustachioed teenager into which I eventually groaned. And somewhere between there lay her transformation, from country-pop sweetheart to sex-kitten chanteuse. <break time="150ms"/> Olivia’s album, Totally Hot, released in 1978, featured songs that were sort of a mirror of her on-screen transformation in the then-hot as fire film Grease, in which she starred. <break time="150ms"/> Represented on this album, in a more uptempo vibe than was her usual, was the leather-clad bad ass, trying to win over her man. <break time="150ms"/>Well, she won over this tiny homo. <break time="250ms"/> A Little More Love is sultry. There’s something in the air along with her perfect voice, and it’s hard to describe. She’s singing about her disappearing innocence while trampling our emotions with her range. <break time="150ms"/> Enter, again, the image of me singing into the hairbrush. <break time="150ms"/>Two short years later, but what might have been eons, the gods of everything good gifted us with Xanadu, probably one of the worst films ever made featuring Livvie and Hollywood icon, Gene Kelly. <break time="150ms"/> It had the ingredients for a blockbuster; sadly it was a bomb but for all the music on the soundtrack. <break time="150ms"/> One song I’ve already spoken about in my first year was Suddenly, the duet from the film. But today we zero in on Magic. <break time="150ms"/> Here we have this literal muse portraying a muse singing about the magic that muses do. <break time="150ms"/> In the movie she roller-skates around the forgettable male lead, effortlessly singing this song to inspire him back to art. And on my turntable, I’d crank the volume until there was more noise interference thumping from the woofers than music filling the air, and I would lip synch like I was indeed Kira in human form. It was one of the first 45s I’d ever owned, and it certainly got its share of needle grooves. <break time="150ms"/>It’s remembering moments like this I often wonder how my mother didn’t know precisely how gay I was. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/52_Brolivia_Final.mp3"/></speak>`,
    countdown: `fifty five to fifty five`,
    countdownDisplay: `55 to 55`,
    day: 52,
    year: [1978, 1980],
    genre: ``,
    significantHoomans: [],
    youtube: [
      "https://www.youtube.com/watch?v=K22BP4aJ108",
      "https://www.youtube.com/watch?v=DnkHf069fvA",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "A Little More Love / Magic",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/52_Brolivia.jpeg",
        textContent: {
          artist: "Artist: Olivia Newton-John",
          countdown: "Day 52 (55 to 55)",
          primaryText:
            "Today is Olivia day. Let the angels and the muses rejoice in the magic that her voice emanates! As stated the last few days about the last few featured divas, not much else can be said that hasn’t already about my beloved Livvie. Hers is the voice of my childhood, from as small as I can remember up to the tortured, permed-mustachioed teenager into which I eventually groaned. And somewhere between there lay her transformation from country-pop sweetheart to sex-kitten chanteuse. Olivia’s album, Totally Hot, released in 1978, featured songs that were sort of a mirror of her on-screen transformation in the then-hot as fire film Grease in which she starred. Represented on this album, in a more uptempo vibe than was her usual, was the leather-clad bad ass trying to win over her man. Well, she won over this tiny homo. A Little More Love is sultry. There’s something in the air along with her perfect voice, and it’s hard to describe. She’s singing about her disappearing innocence while trampling our emotions with her range. Enter, again, the image of me singing into the hairbrush. Two short years later, but what might have been eons, the gods of everything good gifted us with Xanadu, probably one of the worst films ever made featuring Livvie and a Hollywood icon, Gene Kelly. It had the ingredients for a blockbuster; sadly it was a bomb but for all the music on the soundtrack. One song I’ve already spoken about in my first year was Suddenly, the duet from the film, but today we zero in on Magic. Here we have this literal muse portraying a muse singing about the magic that muses do. In the movie she roller-skates around the forgettable male lead, effortlessly singing this song to inspire him back to art. And on my turntable, I’d crank the volume until there was more noise interference thumping from the woofers than music filling the air, and I would lip synch like I was indeed Kira in human form. It was one of the first 45s I’d ever owned and it certainly got its share of needle grooves. It’s remembering moments like this I often wonder how my mother didn’t know? ",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["You’re No Good", "Hurt So Bad"],
    artist: ["Linda Ronstadt"],
    date: `October 30, 2020`,
    text: `<speak>Today is Linda day. <break time="150ms"/> Let the wind and the rain commence upon us as we breathe in deeply the earthy graciousness that is her voice! <break time="150ms"/> I’m bewildered that it’s taken me this long to finally represent the beast of a voice that belonged to Linda Ronstadt. Honestly, I’m flummoxed. <break time="150ms"/> I guess she wasn’t as near to my radar as my other childhood divas, but in a world where retrospect is king and the past just seems to be a rose-tinted land of joy and innocence, I can hear songs by Linda and immediately recognize the perfection. <break time="150ms"/> We recently watched a documentary about this silken-voiced chanteuse, and it reinforced in me the joy many of her songs brought (and still bring) me. <break time="150ms"/> Today I’ll feature two; You’re No Good has that mid-seventies rock vibe that harkens back to A.M. radio and Midnight Special. I can almost remember her shag hair as she cradled the mike and not just sung, but felt this song. <break time="150ms"/> Therein lies the magic of Linda Ronstadt. A few years later she released Hurt So Bad. The sound was as amazing, but this time her voice was apologetic and hopeless in a delightfully perfect way. She made these lyrics come alive the way a singer should, the way a great singer does. <break time="150ms"/> Sadly, this song got shuffled around and lost in the fold of what was an oddball mash up of sounds converging in 1980. The airwaves were bulging at the proverbial seams with the burgeoning sound of new wave (Blondie) and the trickling vestiges of A.M. radio (Captain and Tennille), so this profoundly heartbreaking ballad ended up somewhere at the lower end of the year-end pop charts. Thus, today I challenge you to play this song and try and hear what I hear. To me, it still hurts so bad because of that perfect voice.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/"/></speak>`,
    countdown: `fifty five to fifty five`,
    countdownDisplay: `55 to 55`,
    day: 51,
    year: [1974, 1980],
    genre: ``,
    significantHoomans: [],
    youtube: [
      "https://www.youtube.com/watch?v=e0vJNp5asqc",
      "https://www.youtube.com/watch?v=-lXj4QBew-I",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "You’re No Good / Hurt So Bad",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/51_Linda_Ronstadt.jpeg",
        textContent: {
          artist: "Artist: Linda Ronstadt",
          countdown: "Day 51 (55 to 55)",
          primaryText:
            "Today is Linda day. Let the wind and the rain commence upon us as we breathe in deeply the earthy graciousness that is her voice! I’m bewildered that it’s taken me this long to finally represent the beast of a voice that belonged to Linda Ronstadt. Honestly, I’m flummoxed. I guess she wasn’t as near to my radar as my other childhood divas, but in a world where retrospect is king and the past just seems to be a rose-tinted land of joy and innocence, I can hear songs by Linda and immediately recognize the perfection. We recently watched a documentary about this silken-voiced chanteuse, and it reinforced in me the joy many of her songs brought (and still bring) me. Today I’ll feature two; You’re No Good has that mid-seventies rock vibe that harkens back to AM radio and Midnight Special. I can almost remember her shag hair as she cradled the mic and not just sung but felt this song. Therein lies the magic of Linda Ronstadt. A few years later she released Hurt So Bad. The sound was as amazing, but this time her voice was apologetic and hopeless in a delightfully perfect way. She made these lyrics come alive the way a singer should, the way a great singer does. Sadly, this song got shuffled around and lost in the fold of what was an oddball mash up of sounds converging in 1980. The airwaves were bulging at the proverbial seams with the burgeoning sound of new wave (Blondie) and the trickling vestiges of AM radio (Captain & Tennille), so this profoundly heartbreaking ballad ended up somewhere at the lower end of the year-end pop charts. Thus, today I challenge you to play this song and try and hear what I hear. To me, it still hurts so bad because of that perfect voice.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Call Me", "The Tide Is High"],
    artist: ["Blondie", "Blondie"],
    date: `October 31, 2020`,
    text: `<speak>Today is Debbie day. <break time="150ms"/> Let the witches and goblins, the faeries and creeps, the drag queens and punks shriek with delight, for their queen has arrived! <break time="150ms"/>In yesterday’s post about the cacophonous blend of genres hitting the airwaves in 1980, I mentioned Blondie because it was their sound and their songs that dominated the charts. Blondie was an act whose sound was so pleasing that it continues to cross boundaries, creating a hybrid of sexy thumping disco and sexy new wave rock and roll. <break time="150ms"/> To be the first act of its kind to accomplish that, fronted by a female vocalist whose voice was as electric and magnetic as her look, it’s no surprise I would repeat adding more Blondie songs to my countdowns. <break time="250ms"/> Call Me is an epic ride from a steamy film starring the hottest up and coming male movie star of his day, Richard Gere. <break time="150ms"/> There is no veil over the lyrics; they say what they say, and Debbie does not apologize for it. In fact, she owns the sticky heat that radiates from your speakers. This is a song worthy of cranking the volume. And whichever way your tendency sways, you’re not cheating on your go-to genre by loving every drop of this song. <break time="350ms"/> Same year, completely different sound: The Tide Is High. <break time="150ms"/>Reggae inspired, but a smash on commercial airwaves, this song stayed on the charts for more than a year, and has become one of the defining songs, for me, of my favorite year of music, 1981. <break time="150ms"/> I don’t really know any flowery words to describe the way this actual song makes me feel, except that it does make me feel.<break time="150ms"/> Clearly it’s a sense of nostalgia for a time when I hated life and wished I could go to sleep and not wake up, but every day that I did, music like this comforted me in my small wood-paneled bedroom, cuddling my blind poodle (not a euphemism) and wishing that longed-for starship would swoop down and take me to the far flung future. The tide was indeed high and I was, in fact, holding on, thanks to Debbie Harry and the boys of Blondie. <break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/50_Blondie_Final.mp3"/></speak>`,
    countdown: `fifty five to fifty five`,
    countdownDisplay: `55 to 55`,
    day: 50,
    year: [1980],
    genre: ``,
    significantHoomans: [],
    youtube: [
      "https://www.youtube.com/watch?v=StKVS0eI85I",
      "https://www.youtube.com/watch?v=ypWXEnK_0T8",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Call Me / The Tide Is High",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/50_Blondie.jpeg",
        textContent: {
          artist: "Artist: Blondie",
          countdown: "Day 50 (55 to 55)",
          primaryText:
            "Today is Debbie day. Let the witches and goblins, the faeries and creeps, the drag queens and punks shriek with delight, for their queen has arrived! In yesterday’s post about the cacophonous blend of genres hitting the airwaves in 1980, I mentioned Blondie because it was their sound and their songs that dominated the charts. Blondie was an act whose sound was so pleasing that it continues to cross boundaries creating a hybrid of sexy thumping disco and sexy new wave rock and roll. To be the first act of its kind to accomplish that, fronted by a female vocalist whose voice was as electric and magnetic as her look, it’s no surprise I would repeat adding more Blondie songs to my countdowns. Call Me is an epic ride from a steamy film starring the hottest up and coming male movie star of his day, Richard Gere. There is no veil over the lyrics; they say what they say, and Debbie does not apologize for it. In fact, she owns the sticky heat that radiates from your speakers. This is a song worthy of cranking the volume. And whichever way your tendency sways, you’re not cheating on your go-to genre by loving every drop of this song. Same year, completely different sound: The Tide Is High. Reggae inspired but a smash on commercial airwaves, this song stayed on the charts for more than a year and has become one of the defining songs, for me, of my favorite year of music, 1981. I don’t really know any flowery words to describe the way this actual song makes me feel, except that it does make me feel. Clearly it’s a sense of nostalgia for a time when I hated life and wished I could go to sleep and not wake up, but every day that I did, music like this comforted me in my small wood-paneled bedroom, cuddling my blind poodle (not a euphemism) and wishing that longed-for starship would swoop down and take me to the far flung future. The tide was indeed high and I was, in fact, holding on, thanks to Debbie Harry and the boys of Blondie.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Just Like Starting Over", "Watching The Wheels", "Woman"],
    artist: ["John Lennon", "John Lennon", "John Lennon"],
    date: `November 1, 2020`,
    text: `<speak>Switching gears from the past few days but also staying within the same time frame, because hey, why the fuck not, today is John day. <break time="150ms"/>Let everyone alive rejoice in the gift this beast of a musician bestowed upon us all those years ago. In all my posts, I have never spoken specifically about the icon who was John Lennon. <break time="150ms"/> In fact, I don’t even have to, because anyone bothering to read these posts knows all the gems with which Lennon had gifted the world. To say that he was what made the Beatles the phenomenon it was (and obviously still is, and likely always will be) is an understatement, but it’s also only half true: the partnership between John and Paul is the lore of legends. And, again, assuming you’ve been keeping up with my posts, you’ve heard countless times about Paul, but only in passing about John.<break time="150ms"/> So today, while I’m still in the headspace of the memorable period from 1980 to 81, we will review the final works of the late, amazing John Lennon. No one will ever know whether the release of the Double Fantasy album was actually the phenomenon we’ve all come to love based on its own merit (critics at the time hated it) or because Lennon was murdered shortly after the release, but it doesn’t matter either way. <break time="150ms"/> Three songs from that album changed my life, and introduced me to Lennon as a solo machine. <break time="150ms"/> Until then I only knew of his music as part of that larger wheel; and then, suddenly and unapologetically, the radio waves were clogged with his music, each song better than the last, each one more memorable for what it was. <break time="150ms"/> The doo-wop feel of Just Like Starting Over was exactly what the radio needed to help claim the stake of a waning genre, and it provided a blend of all the magic of the Beatles with John in the lead. <break time="150ms"/> And as usual, most of his music held a message to Paul. This song, in that realm, did not disappoint. He may have been married to Yoko, but Paul was his soulmate. The instrument-driven Watching The Wheels is one of those sway-worthy, harmony-prone ballads that just seems so reminiscent of the Beatles you could almost smell a reunion tour,  but, alas, to no avail. We just had to let it go. <break time="350ms"/>And then there’s Woman. <break time="150ms"/>To me, one of the biggest, strongest songs of 1981, one that tethers me to that year and brings to mind my mother, trapped inside herself in that smoky, wood-laden house in the forest. Songs like this remind me of our family outings to visit Uncle Joey in Freeland, always coming home in the black of night, usually in bad weather on narrow highways with giant trucks roaring past us while my father smoked and cursed and coughed. Trapped, Angie and I, and unable to ever speak of it. When I hear Woman, to this day, it is her essence that fills my mind, but it’s the sad, fragile version of her that I’d emulated in that solitary time. If only I could travel back and tell her. After all, I’m forever in her debt.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/49_Double_Fantasy_Final.mp3"/></speak>`,
    countdown: `fifty five to fifty five`,
    countdownDisplay: `55 to 55`,
    day: 49,
    year: [1980, 1980, 1981],
    genre: ``,
    significantHoomans: ["Angie"],
    youtube: [
      "https://www.youtube.com/watch?v=dfbAAiL5ec8",
      "https://www.youtube.com/watch?v=2Kx2PbA8bCI",
      "https://www.youtube.com/watch?v=zF6e-NmwmnA",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Just Like Starting Over / Watching The Wheels / Woman",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/49_Double_Fantasy.jpeg",
        textContent: {
          artist: "Artist: John Lennon [and Yoko Ono]",
          countdown: "Day 49 (55 to 55)",
          primaryText:
            "Switching gears from the past few days but also staying within the same time frame, because hey, why the fuck not, today is John day. Let everyone alive rejoice in the gift this beast of a musician bestowed upon us all those years ago. In all my posts, I have never spoken specifically about the icon who was John Lennon. In fact, I don’t even have to, because anyone bothering to read these posts knows all the gems with which Lennon had gifted the world. To say that he was what made the Beatles the phenomenon it was (and obviously still is, and likely always will be) is an understatement, but it’s also only half true: the partnership between John and Paul is the lore of legends. And, again, assuming you’ve been keeping up with my posts, you’ve heard countless times about Paul, but only in passing about John So today, while I’m still in the headspace of the memorable period from 1980 to 81, we will review the final works of the late, amazing John Lennon. No one will ever know whether the release of the Double Fantasy album was actually the phenomenon we’ve all come to love based on its own merit (critics at the time hated it) or because Lennon was murdered shortly after the release, but it doesn’t matter either way. Three songs from that album changed my life, and introduced me to Lennon as a solo machine. Until then I only knew of his music as part of that larger wheel; and then, suddenly and unapologetically, the radio waves were clogged with his music, each song better than the last, each one more memorable for what it was. The doo-wop feel of Just Like Starting Over was exactly what the radio needed to help claim the stake of a waning genre, and it provided a blend of all the magic of the Beatles with John in the lead. And as usual, most of his music held a message to Paul. This song, in that realm, did not disappoint. He may have been married to Yoko, but Paul was his soulmate. The instrument-driven Watching The Wheels is one of those sway-worthy, harmony-prone ballads that just seems so reminiscent of the Beatles you could almost smell a reunion tour,  but, alas, to no avail. We just had to let it go. And then there’s Woman. To me, one of the biggest, strongest songs of 1981, one that tethers me to that year and brings to mind my mother, trapped inside herself in that smoky, wood-laden house in the forest. Songs like this remind me of our family outings to visit Uncle Joey in Freeland, always coming home in the black of night, usually in bad weather on narrow highways with giant trucks roaring past us while my father smoked and cursed and coughed. Trapped, Angie and I, and unable to ever speak of it. When I hear Woman, to this day, it is her essence that fills my mind, but it’s the sad, fragile version of her that I’d emulated in that solitary time. If only I could travel back and tell her. After all, I’m forever in her debt.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Quiet Your Mind", "Loving You Easy"],
    artist: ["Zac Brown Band", "Zac Brown Band"],
    date: `November 2, 2020`,
    text: `<speak>Just when you thought you knew me, I throw a wrench into your face and destroy your confidence by posting about a Country band! <break time="150ms"/> But since I discovered the Zac Brown Band early last year during the pandemic, I realized how special and amazing their music is. <break time="150ms"/> I haven’t really delved too deeply into their entire catalog, but there is one very special song that has come to mean a lot to me and my soul. Quiet Your Mind. <break time="150ms"/> This is a blend of masterful lyrics, perfect harmonies, fiddles blazing with comforting charm and a stance that insists you heed the words as you actually quiet your mind and listen: <break time="250ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/48_Zac_Brown_Final.mp3"/> This song will always bring me back to focusing on finding peace in the upheaval and uncertainty of 2020, when it appeared the world might actually end in my lifetime. <break time="150ms"/> I recall vividly sitting, alone, by the fire pit at Lukan’s, just before the dinner bell while the young ones were playing ball and the older ones were having disco time, I played this song on repeat (as I am inclined to do) and looked up at the sky, the perfectly blue sky. <break time="150ms"/>I allowed this song to mesmerize me into believing that the end is not near and that there’s still so much life to be lived.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/48_Zac_Brown_Final2.mp3"/></speak>`,
    countdown: `fifty five to fifty five`,
    countdownDisplay: `55 to 55`,
    day: 48,
    year: [2010, 2015],
    genre: `Country`,
    significantHoomans: ["Petey"],
    youtube: [
      "https://www.youtube.com/watch?v=syTVW8n5Cy0",
      "youtube.com/watch?v=6LPDBZXgdA0",
    ],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Quiet Your Mind / Loving You Easy",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/48_Zac_Brown.jpeg",
        textContent: {
          artist: "Artist: Zac Brown Band",
          countdown: "Day 48 (55 to 55)",
          primaryText:
            "Just when you thought you knew me, I throw a wrench into your face and destroy your confidence by posting about a Country band! But since I discovered the Zac Brown Band early last year during the pandemic, I realized how special and amazing their music is. I haven’t really delved too deeply into their entire catalog, but there is one very special song that has come to mean a lot to me and my soul. Quiet Your Mind. This is a blend of masterful lyrics, perfect harmonies, fiddles blazing with comforting charm and a stance that insists you heed the words as you actually quiet your mind and listen: ('If you’re too busy talkin’ you’re not busy listenin’ to hear what the land has to say...)  This song will always bring me back to focusing on finding peace in the upheaval and uncertainty of 2020 when it appeared the world might actually end in my lifetime. I recall vividly sitting, alone, by the fire pit at Lukan’s, just before the dinner bell while the young ones were playing ball and the older ones were having disco time, I played this song on repeat (as I am inclined to do) and looked up at the sky, the perfectly blue sky. I allowed this song to mesmerize me into believing that the end is not near and that there’s still so much life to be lived.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["If The World Was Ending"],
    artist: ["JP Saxe and Julia Michaels"],
    date: `November 3, 2020`,
    text: `<speak>What a perfect anthem for a shitty, uncertain year with civil division, racial unrest (as if that’s something new), and a global pandemic locking most of us away from loved ones, co-workers, and life as we knew it. <break time="150ms"/> A song about an earthquake becomes the perfect song for 2020: If The World Was Ending. <break time="150ms"/> I admit to not knowing very much at all about current music, but a friend told me about this song after mentioning how much I generally love duets. I was very happy to discover it. <break time="150ms"/> I like the blend of JP and Julia’s voices; there is so much sincerity in the bleak. There’s a soft intensity that reminds me of a movie I saw years ago, Seeking A Friend For The End Of The World, which, as you may imagine, sort of encompasses this mood, though with a comedic bent. <break time="150ms"/> Two strangers find solace in one another on their last day on earth, while, in this beautifully moving song, it’s a divorced couple that realize they’d still look to be with each other during the scariest, most uncertain of times. I am such a lucky man to have my best friend as my husband and partner and to be so blessed with so many friends who might come over if the world was, in fact, ending.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/47_If_the_World_Was_Ending_Final.mp3"/></speak>`,
    countdown: `fifty five to fifty five`,
    countdownDisplay: `55 to 55`,
    day: 47,
    year: [2020],
    genre: ``,
    significantHoomans: ["Petey"],
    youtube: ["https://www.youtube.com/watch?v=1jO2wSpAoxA"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "If The World Was Ending",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/47_If_the_World_Was_Ending.png",
        textContent: {
          artist: "Artist: JP Saxe & Julia Michaels",
          countdown: "Day 4748 (55 to 55)",
          primaryText:
            "What a perfect anthem for a shitty, uncertain year with civil division, racial unrest (as if that’s something new), and a global pandemic locking most of us away from loved ones, co-workers, and life as we knew it. A song about an earthquake becomes the perfect song for 2020: If The World Was Ending. I admit to not knowing very much at all about current music, but a friend told me about this song after mentioning how much I generally love duets. I was very happy to discover it. I like the blend of JP and Julia’s voices; there is so much sincerity in the bleak. There’s a soft intensity that reminds me of a movie I saw years ago, Seeking A Friend For The End Of The World, which, as you may imagine, sort of encompasses this mood, though with a comedic bent. Two strangers find solace in one another on their last day on earth, while, in this beautifully moving song, it’s a divorced couple that realize they’d still look to be with each other during the scariest, most uncertain of times. I am such a lucky man to have my best friend as my husband and partner and to be so blessed with so many friends who might come over if the world was, in fact, ending.",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["Crazy"],
    artist: ["Icehouse"],
    date: `November 4, 2020`,
    text: `<speak>You already know of my obsession with obscure new wave hits from the late eighties, so you shouldn’t be surprised by today’s entry. <break time="150ms"/> If I’m being honest, the first I’d ever heard of Crazy, by Australian band Icehouse was on V.H.1., not on W.L.I.R. <break time="150ms"/> This song drew me in instantly. More accurately, lead singer Iva Davies’ voice did the drawing. I loved how he could change his vocal range from one octave to the next within the same sentiment. Certainly an unsung hero, pun possibly intended, when it comes to ranking the amazing male voices of his era. I would add this dude to the likes of Daryl Hall and Steve Perry. I CAN go for that, Sherrie. My favorite moment, the most defining for me, is at 1:22 into it. That near falsetto is mind-blowing. This song has everything you want in a pseudo-love song: Sincere lyrics, mesmerizing sounds.<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/46_Icehouse_Final.mp3"/>When I hear it, the hair on my neck stands up. How this song was never the phenomenon it deserves to be is beyond comprehension to me. Perhaps you’ll agree.</speak>`,
    countdown: `fifty five to fifty five`,
    countdownDisplay: `55 to 55`,
    day: 46,
    year: [1987],
    genre: ``,
    significantHoomans: ["Petey"],
    youtube: ["https://www.youtube.com/watch?v=dRpJaZbt0uQ"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "Crazy",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/46_Icehouse.jpeg",
        textContent: {
          artist: "Artist: Icehouse",
          countdown: "Day 46 (55 to 55)",
          primaryText: "",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  {
    title: ["I Say A Little Prayer"],
    artist: ["Dionne Warwick"],
    date: `November 5, 2020`,
    text: `<speak>What a happy memory out of 1967! <break time="150ms"/> Obviously, my earliest memories of this amazing power ballad, sung by the inimitable Dionne Warwick, way before she became everyone’s best psychic friend, are from my childhood in Lynbrook in the seventies. <break time="150ms"/> Even at such a young age I understood the magic of the music of composer Burt Bacharach, but in my opinion his music was always best when left in the hands (and velvety voice) of Dionne. <break time="150ms"/> Bacharach’s music dominated the sixties, but Dionne Warwick’s interpretation made them instant classics. <break time="150ms"/> This song is such a vibe. It can transport your soul to wherever you need to be, and once there you will end up happy. There’s honestly no better way to describe this particular song or the overall sound, other than to say it’s the kind of song that makes everything alright. <break time="150ms"/> How nice to know someone is looking after you in such a way that they begin every day with positive thoughts about you. I personally don’t pray, but it does seem nice that someone would pray for me!<break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/"/></speak>`,
    countdown: `fifty five to fifty five`,
    countdownDisplay: `55 to 55`,
    day: 45,
    year: [1967],
    genre: ``,
    significantHoomans: [],
    youtube: ["https://www.youtube.com/watch?v=kafVkPxjLYg"],
    datasource: {
      alexaDetailData: {
        backgroundImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
        title: "I Say A Little Prayer",
        detailImage:
          "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/45_Say_A_Little_Prayer.jpeg",
        textContent: {
          artist: "Artist: Dionne Warwick",
          countdown: "Day 45 (55 to 55)",
          primaryText:
            "What a happy memory out of 1967! Obviously, my earliest memories of this amazing power ballad, sung by the inimitable Dionne Warwick way before she became everyone’s best psychic friend, are from my childhood in Lynbrook in the seventies. Even at such a young age I understood the magic of the music of composer Burt Bacharach, but in my opinion his music was always best when left in the hands (and velvety voice) of Dionne. Bacharach’s music dominated the sixties, but Dionne Warwick’s interpretation made them instant classics. This song is such a vibe. It can transport your soul to wherever you need to be, and once there you will end up happy. There’s honestly no better way to describe this particular song or the overall sound other than to say it’s the kind of song that makes everything alright. How nice to know someone is looking after you in such a way that they begin every day with positive thoughts about you. I personally don’t pray, but it does seem nice that someone would pray for me!",
        },
        logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
      },
    },
  },
  // {
  //   title: ["I Don’t Wanna Go On With You Like That"],
  //   artist: ["Elton John"],
  //   date: `November 6, 2020`,
  //   text: `<speak><break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/"/></speak>`,
  //   countdown: `fifty five to fifty five`,
  //   countdownDisplay: `55 to 55`,
  //   day: 44,
  //   year: [],
  //   genre: ``,
  //   significantHoomans: [],
  //   youtube: [""],
  //   datasource: {
  //     alexaDetailData: {
  //       backgroundImage:
  //         "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
  //       title: "I Don’t Wanna Go On With You Like That",
  //       detailImage: "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/",
  //       textContent: {
  //         artist: "Artist: Elton John",
  //         countdown: "Day 44 (55 to 55)",
  //         primaryText: "",
  //       },
  //       logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
  //     },
  //   },
  // },
  // {
  //   title: ["Dreaming Of You", "I Could Fall In Love"],
  //   artist: ["Selena"],
  //   date: `November 7, 2020`,
  //   text: `<speak><break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/"/></speak>`,
  //   countdown: `fifty five to fifty five`,
  //   countdownDisplay: `55 to 55`,
  //   day: 43,
  //   year: [],
  //   genre: ``,
  //   significantHoomans: [],
  //   youtube: [""],
  //   datasource: {
  //     alexaDetailData: {
  //       backgroundImage:
  //         "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
  //       title: "Dreaming Of You / I Could Fall In Love",
  //       detailImage: "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/",
  //       textContent: {
  //         artist: "Artist: Selena",
  //         countdown: "Day 43 (55 to 55)",
  //         primaryText: "",
  //       },
  //       logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
  //     },
  //   },
  // },
  // {
  //   title: ["Stacy's Mom"],
  //   artist: ["Fountains Of Wayne"],
  //   date: `November 8, 2020`,
  //   text: `<speak><break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/"/></speak>`,
  //   countdown: `fifty five to fifty five`,
  //   countdownDisplay: `55 to 55`,
  //   day: 42,
  //   year: [],
  //   genre: ``,
  //   significantHoomans: [],
  //   youtube: [""],
  //   datasource: {
  //     alexaDetailData: {
  //       backgroundImage:
  //         "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
  //       title: "Stacy's Mom",
  //       detailImage: "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/",
  //       textContent: {
  //         artist: "Artist: Fountains Of Wayne",
  //         countdown: "Day 42 (55 to 55)",
  //         primaryText: "",
  //       },
  //       logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
  //     },
  //   },
  // },
  // {
  //   title: ["Layla"],
  //   artist: ["Derek And The Dominos"],
  //   date: `November 9, 2020`,
  //   text: `<speak><break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/"/></speak>`,
  //   countdown: `fifty five to fifty five`,
  //   countdownDisplay: `55 to 55`,
  //   day: 41,
  //   year: [],
  //   genre: ``,
  //   significantHoomans: [],
  //   youtube: [""],
  //   datasource: {
  //     alexaDetailData: {
  //       backgroundImage:
  //         "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
  //       title: "Layla",
  //       detailImage: "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/",
  //       textContent: {
  //         artist: "Artist: Derek & The Dominos",
  //         countdown: "Day 41 (55 to 55)",
  //         primaryText: "",
  //       },
  //       logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
  //     },
  //   },
  // },
  // {
  //   title: ["Shallow"],
  //   artist: ["Lady Gaga and Bradley Cooper"],
  //   date: `November 10, 2020`,
  //   text: `<speak><break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/"/></speak>`,
  //   countdown: `fifty five to fifty five`,
  //   countdownDisplay: `55 to 55`,
  //   day: 40,
  //   year: [],
  //   genre: ``,
  //   significantHoomans: [],
  //   youtube: [""],
  //   datasource: {
  //     alexaDetailData: {
  //       backgroundImage:
  //         "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
  //       title: "Shallow",
  //       detailImage: "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/",
  //       textContent: {
  //         artist: "Artist: Lady Gaga & Bradley Cooper",
  //         countdown: "Day 40 (55 to 55)",
  //         primaryText: "",
  //       },
  //       logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
  //     },
  //   },
  // },
  // {
  //   title: ["Together Forever"],
  //   artist: ["Lisette Melendez"],
  //   date: `November 11, 2020`,
  //   text: `<speak><break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/"/></speak>`,
  //   countdown: `fifty five to fifty five`,
  //   countdownDisplay: `55 to 55`,
  //   day: 39,
  //   year: [],
  //   genre: ``,
  //   significantHoomans: [],
  //   youtube: [""],
  //   datasource: {
  //     alexaDetailData: {
  //       backgroundImage:
  //         "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
  //       title: "Together Forever",
  //       detailImage: "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/",
  //       textContent: {
  //         artist: "Artist: Lisette Melendez",
  //         countdown: "Day 39 (55 to 55)",
  //         primaryText: "",
  //       },
  //       logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
  //     },
  //   },
  // },
  // {
  //   title: ["Beautiful"],
  //   artist: ["Gordon Lightfoot"],
  //   date: `November 12, 2020`,
  //   text: `<speak><break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/"/></speak>`,
  //   countdown: `fifty five to fifty five`,
  //   countdownDisplay: `55 to 55`,
  //   day: 38,
  //   year: [],
  //   genre: ``,
  //   significantHoomans: [],
  //   youtube: [""],
  //   datasource: {
  //     alexaDetailData: {
  //       backgroundImage:
  //         "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
  //       title: "Beautiful",
  //       detailImage: "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/",
  //       textContent: {
  //         artist: "Artist: Gordon Lightfoot",
  //         countdown: "Day 38 (55 to 55)",
  //         primaryText: "",
  //       },
  //       logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
  //     },
  //   },
  // },
  // {
  //   title: ["Let Your Love Flow"],
  //   artist: ["The Bellamy Brothers"],
  //   date: `November 13, 2020`,
  //   text: `<speak><break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/"/></speak>`,
  //   countdown: `fifty five to fifty five`,
  //   countdownDisplay: `55 to 55`,
  //   day: 37,
  //   year: [],
  //   genre: ``,
  //   significantHoomans: [],
  //   youtube: [""],
  //   datasource: {
  //     alexaDetailData: {
  //       backgroundImage:
  //         "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
  //       title: "Let Your Love Flow",
  //       detailImage: "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/",
  //       textContent: {
  //         artist: "Artist: The Bellamy Brothers",
  //         countdown: "Day 37 (55 to 55)",
  //         primaryText: "",
  //       },
  //       logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
  //     },
  //   },
  // },
  // {
  //   title: ["You’re My Best Friend"],
  //   artist: ["Queen"],
  //   date: `November 14, 2020`,
  //   text: `<speak><break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/"/></speak>`,
  //   countdown: `fifty five to fifty five`,
  //   countdownDisplay: `55 to 55`,
  //   day: 36,
  //   year: [],
  //   genre: ``,
  //   significantHoomans: [],
  //   youtube: [""],
  //   datasource: {
  //     alexaDetailData: {
  //       backgroundImage:
  //         "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
  //       title: "You’re My Best Friend",
  //       detailImage: "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/",
  //       textContent: {
  //         artist: "Artist: ",
  //         countdown: "Day 36 (55 to 55)",
  //         primaryText: "Queen",
  //       },
  //       logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
  //     },
  //   },
  // },
  // {
  //   title: ["One Call Away"],
  //   artist: ["Charlie Puth"],
  //   date: `November 15, 2020`,
  //   text: `<speak><break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/"/></speak>`,
  //   countdown: `fifty five to fifty five`,
  //   countdownDisplay: `55 to 55`,
  //   day: 35,
  //   year: [],
  //   genre: ``,
  //   significantHoomans: [],
  //   youtube: [""],
  //   datasource: {
  //     alexaDetailData: {
  //       backgroundImage:
  //         "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
  //       title: "One Call Away",
  //       detailImage: "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/",
  //       textContent: {
  //         artist: "Artist: Charlie Puth",
  //         countdown: "Day 35 (55 to 55)",
  //         primaryText: "",
  //       },
  //       logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
  //     },
  //   },
  // },
  // {
  //   title: ["No One Like You", "Round And Round"],
  //   artist: ["Scoprions", "Ratt"],
  //   date: `November 16, 2020`,
  //   text: `<speak><break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/"/></speak>`,
  //   countdown: `fifty five to fifty five`,
  //   countdownDisplay: `55 to 55`,
  //   day: 34,
  //   year: [],
  //   genre: ``,
  //   significantHoomans: [],
  //   youtube: [""],
  //   datasource: {
  //     alexaDetailData: {
  //       backgroundImage:
  //         "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
  //       title: "No One Like You / Round And Round",
  //       detailImage: "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/",
  //       textContent: {
  //         artist: "Artist: Scorpions / Ratt",
  //         countdown: "Day 34 (55 to 55)",
  //         primaryText: "",
  //       },
  //       logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
  //     },
  //   },
  // },
  // {
  //   title: ["The Promise"],
  //   artist: ["When In Rome"],
  //   date: `November 17, 2020`,
  //   text: `<speak><break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/"/></speak>`,
  //   countdown: `fifty five to fifty five`,
  //   countdownDisplay: `55 to 55`,
  //   day: 33,
  //   year: [],
  //   genre: ``,
  //   significantHoomans: [],
  //   youtube: [""],
  //   datasource: {
  //     alexaDetailData: {
  //       backgroundImage:
  //         "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
  //       title: "The Promise",
  //       detailImage: "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/",
  //       textContent: {
  //         artist: "Artist: When In Rome",
  //         countdown: "Day 33 (55 to 55)",
  //         primaryText: "",
  //       },
  //       logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
  //     },
  //   },
  // },
  // {
  //   title: ["Proud"],
  //   artist: ["Heather Small"],
  //   date: `November 19, 2020`,
  //   text: `<speak><break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/"/></speak>`,
  //   countdown: `fifty five to fifty five`,
  //   countdownDisplay: `55 to 55`,
  //   day: 32,
  //   year: [],
  //   genre: ``,
  //   significantHoomans: [],
  //   youtube: [""],
  //   datasource: {
  //     alexaDetailData: {
  //       backgroundImage:
  //         "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
  //       title: "",
  //       detailImage: "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/",
  //       textContent: {
  //         artist: "Artist: Heather Small",
  //         countdown: "Day 32 (55 to 55)",
  //         primaryText: "Proud",
  //       },
  //       logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
  //     },
  //   },
  // },
  // {
  //   title: ["American Idiot"],
  //   artist: ["Green Day"],
  //   date: `November 20, 2020`,
  //   text: `<speak><break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/"/></speak>`,
  //   countdown: `fifty five to fifty five`,
  //   countdownDisplay: `55 to 55`,
  //   day: 31,
  //   year: [],
  //   genre: ``,
  //   significantHoomans: [],
  //   youtube: [""],
  //   datasource: {
  //     alexaDetailData: {
  //       backgroundImage:
  //         "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
  //       title: "American Idiot",
  //       detailImage: "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/",
  //       textContent: {
  //         artist: "Artist: Green Day",
  //         countdown: "Day 31 (55 to 55)",
  //         primaryText: "",
  //       },
  //       logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
  //     },
  //   },
  // },
  // {
  //   title: ["Peace Of Mind"],
  //   artist: ["Boston"],
  //   date: `November 21, 2020`,
  //   text: `<speak><break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/"/></speak>`,
  //   countdown: `fifty five to fifty five`,
  //   countdownDisplay: `55 to 55`,
  //   day: 30,
  //   year: [],
  //   genre: ``,
  //   significantHoomans: [],
  //   youtube: [""],
  //   datasource: {
  //     alexaDetailData: {
  //       backgroundImage:
  //         "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
  //       title: "Peace Of Mind",
  //       detailImage: "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/",
  //       textContent: {
  //         artist: "Artist: Boston",
  //         countdown: "Day 55 (55 to 55)",
  //         primaryText: "",
  //       },
  //       logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
  //     },
  //   },
  // },
  // {
  //   title: ["The Reason"],
  //   artist: ["Hoobastank"],
  //   date: `November 22, 2020`,
  //   text: `<speak><break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/"/></speak>`,
  //   countdown: `fifty five to fifty five`,
  //   countdownDisplay: `55 to 55`,
  //   day: 29,
  //   year: [],
  //   genre: ``,
  //   significantHoomans: [],
  //   youtube: [""],
  //   datasource: {
  //     alexaDetailData: {
  //       backgroundImage:
  //         "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
  //       title: "The Reason",
  //       detailImage: "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/",
  //       textContent: {
  //         artist: "Artist: Hoobastank",
  //         countdown: "Day 55 (55 to 55)",
  //         primaryText: "",
  //       },
  //       logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
  //     },
  //   },
  // },
  // {
  //   title: ["Her Town Too"],
  //   artist: ["James Taylor And JD Souther"],
  //   date: `November 24, 2020`,
  //   text: `<speak><break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/"/></speak>`,
  //   countdown: `fifty five to fifty five`,
  //   countdownDisplay: `55 to 55`,
  //   day: 28,
  //   year: [],
  //   genre: ``,
  //   significantHoomans: [],
  //   youtube: [""],
  //   datasource: {
  //     alexaDetailData: {
  //       backgroundImage:
  //         "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
  //       title: "Her Town Too",
  //       detailImage: "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/",
  //       textContent: {
  //         artist: "Artist: James Taylor & JD Souther",
  //         countdown: "Day 27 (55 to 55)",
  //         primaryText: "",
  //       },
  //       logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
  //     },
  //   },
  // },
  // {
  //   title: ["Hold On Loosely"],
  //   artist: ["38 Special"],
  //   date: `November 25, 2020`,
  //   text: `<speak><break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/"/></speak>`,
  //   countdown: `fifty five to fifty five`,
  //   countdownDisplay: `55 to 55`,
  //   day: 27,
  //   year: [],
  //   genre: ``,
  //   significantHoomans: [],
  //   youtube: [""],
  //   datasource: {
  //     alexaDetailData: {
  //       backgroundImage:
  //         "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
  //       title: "Hold On Loosely",
  //       detailImage: "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/",
  //       textContent: {
  //         artist: "Artist: .38 Special",
  //         countdown: "Day 26 (55 to 55)",
  //         primaryText: "",
  //       },
  //       logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
  //     },
  //   },
  // },
  // {
  //   title: ["Standing Still", "Foolish Games"],
  //   artist: ["Jewel"],
  //   date: `November 26, 2020`,
  //   text: `<speak><break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/"/></speak>`,
  //   countdown: `fifty five to fifty five`,
  //   countdownDisplay: `55 to 55`,
  //   day: 26,
  //   year: [],
  //   genre: ``,
  //   significantHoomans: [],
  //   youtube: [""],
  //   datasource: {
  //     alexaDetailData: {
  //       backgroundImage:
  //         "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
  //       title: "Standing Still / Foolish Games",
  //       detailImage: "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/",
  //       textContent: {
  //         artist: "Artist: Jewel",
  //         countdown: "Day 25 (55 to 55)",
  //         primaryText: "",
  //       },
  //       logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
  //     },
  //   },
  // },
  // {
  //   title: ["What Is Love"],
  //   artist: ["Howard Jones"],
  //   date: `November 27, 2020`,
  //   text: `<speak><break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/"/></speak>`,
  //   countdown: `fifty five to fifty five`,
  //   countdownDisplay: `55 to 55`,
  //   day: 25,
  //   year: [],
  //   genre: ``,
  //   significantHoomans: [],
  //   youtube: [""],
  //   datasource: {
  //     alexaDetailData: {
  //       backgroundImage:
  //         "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
  //       title: "What Is Love?",
  //       detailImage: "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/",
  //       textContent: {
  //         artist: "Artist: Howard Jones",
  //         countdown: "Day 24 (55 to 55)",
  //         primaryText: "",
  //       },
  //       logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
  //     },
  //   },
  // },
  // {
  //   title: ["Still Of The Night"],
  //   artist: ["Whitesnake"],
  //   date: `November 28, 2020`,
  //   text: `<speak><break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/"/></speak>`,
  //   countdown: `fifty five to fifty five`,
  //   countdownDisplay: `55 to 55`,
  //   day: 24,
  //   year: [],
  //   genre: ``,
  //   significantHoomans: [],
  //   youtube: [""],
  //   datasource: {
  //     alexaDetailData: {
  //       backgroundImage:
  //         "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
  //       title: "Still Of The Night",
  //       detailImage: "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/",
  //       textContent: {
  //         artist: "Artist: Whitesnake",
  //         countdown: "Day 23 (55 to 55)",
  //         primaryText: "",
  //       },
  //       logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
  //     },
  //   },
  // },
  // {
  //   title: ["I Still Believe"],
  //   artist: ["Brenda K. Starr"],
  //   date: `November 29, 2020`,
  //   text: `<speak><break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/"/></speak>`,
  //   countdown: `fifty five to fifty five`,
  //   countdownDisplay: `55 to 55`,
  //   day: 23,
  //   year: [],
  //   genre: ``,
  //   significantHoomans: [],
  //   youtube: [""],
  //   datasource: {
  //     alexaDetailData: {
  //       backgroundImage:
  //         "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
  //       title: "I Still Believe",
  //       detailImage: "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/",
  //       textContent: {
  //         artist: "Artist: Brenda K. Starr",
  //         countdown: "Day 22 (55 to 55)",
  //         primaryText: "",
  //       },
  //       logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
  //     },
  //   },
  // },
  // {
  //   title: ["Breathe Me"],
  //   artist: ["Sia"],
  //   date: `November 23, 2020`,
  //   text: `<speak><break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/"/></speak>`,
  //   countdown: `fifty five to fifty five`,
  //   countdownDisplay: `55 to 55`,
  //   day: 22,
  //   year: [],
  //   genre: ``,
  //   significantHoomans: [],
  //   youtube: [""],
  //   datasource: {
  //     alexaDetailData: {
  //       backgroundImage:
  //         "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
  //       title: "Breathe Me",
  //       detailImage: "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/",
  //       textContent: {
  //         artist: "Artist: Sia",
  //         countdown: "Day 28 (55 to 55)",
  //         primaryText: "",
  //       },
  //       logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
  //     },
  //   },
  // },
  // {
  //   title: ["Make It Real"],
  //   artist: ["The Jets"],
  //   date: `November 30, 2020`,
  //   text: `<speak><break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/"/></speak>`,
  //   countdown: `fifty five to fifty five`,
  //   countdownDisplay: `55 to 55`,
  //   day: 21,
  //   year: [],
  //   genre: ``,
  //   significantHoomans: [],
  //   youtube: [""],
  //   datasource: {
  //     alexaDetailData: {
  //       backgroundImage:
  //         "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
  //       title: "Make It Real",
  //       detailImage: "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/",
  //       textContent: {
  //         artist: "Artist: The Jets",
  //         countdown: "Day 21 (55 to 55)",
  //         primaryText: "",
  //       },
  //       logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
  //     },
  //   },
  // },
  // {
  //   title: ["Don’t Disturb This Groove", "Remember Holding You"],
  //   artist: ["The System", "Boys Club"],
  //   date: `December 1, 2020`,
  //   text: `<speak><break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/"/></speak>`,
  //   countdown: `fifty five to fifty five`,
  //   countdownDisplay: `55 to 55`,
  //   day: 20,
  //   year: [],
  //   genre: ``,
  //   significantHoomans: [],
  //   youtube: [""],
  //   datasource: {
  //     alexaDetailData: {
  //       backgroundImage:
  //         "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
  //       title: "Don’t Disturb This Groove / Remember Holding You",
  //       detailImage: "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/",
  //       textContent: {
  //         artist: "Artist: ",
  //         countdown: "Day 20 (55 to 55)",
  //         primaryText: "",
  //       },
  //       logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
  //     },
  //   },
  // },
  // {
  //   title: ["Crash Into Me"],
  //   artist: ["Dave Matthews Band"],
  //   date: `December 2, 2020`,
  //   text: `<speak><break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/"/></speak>`,
  //   countdown: `fifty five to fifty five`,
  //   countdownDisplay: `55 to 55`,
  //   day: 19,
  //   year: [],
  //   genre: ``,
  //   significantHoomans: [],
  //   youtube: [""],
  //   datasource: {
  //     alexaDetailData: {
  //       backgroundImage:
  //         "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
  //       title: "Crash Into Me",
  //       detailImage: "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/",
  //       textContent: {
  //         artist: "Artist: Dave Matthews Band",
  //         countdown: "Day 19 (55 to 55)",
  //         primaryText: "",
  //       },
  //       logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
  //     },
  //   },
  // },
  // {
  //   title: ["Counting Blue Cars"],
  //   artist: ["Dishwalla"],
  //   date: `December 3, 2020`,
  //   text: `<speak><break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/"/></speak>`,
  //   countdown: `fifty five to fifty five`,
  //   countdownDisplay: `55 to 55`,
  //   day: 18,
  //   year: [],
  //   genre: ``,
  //   significantHoomans: [],
  //   youtube: [""],
  //   datasource: {
  //     alexaDetailData: {
  //       backgroundImage:
  //         "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
  //       title: "Counting Blue Cars",
  //       detailImage: "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/",
  //       textContent: {
  //         artist: "Artist: Dishwalla",
  //         countdown: "Day 18 (55 to 55)",
  //         primaryText: "",
  //       },
  //       logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
  //     },
  //   },
  // },
  // {
  //   title: ["Unbreak My Heart", "You’re Makin’ Me High"],
  //   artist: ["Toni Braxton", "Toni Braxton"],
  //   date: `December 4, 2020`,
  //   text: `<speak><break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/"/></speak>`,
  //   countdown: `fifty five to fifty five`,
  //   countdownDisplay: `55 to 55`,
  //   day: 17,
  //   year: [],
  //   genre: ``,
  //   significantHoomans: [],
  //   youtube: [""],
  //   datasource: {
  //     alexaDetailData: {
  //       backgroundImage:
  //         "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
  //       title: "Unbreak My Heart / You’re Makin’ Me High",
  //       detailImage: "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/",
  //       textContent: {
  //         artist: "Artist: ",
  //         countdown: "Day 17 (55 to 55)",
  //         primaryText: "",
  //       },
  //       logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
  //     },
  //   },
  // },
  // {
  //   title: ["Forbidden Love"],
  //   artist: ["Madleen Kane"],
  //   date: `December 5, 2020`,
  //   text: `<speak><break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/"/></speak>`,
  //   countdown: `fifty five to fifty five`,
  //   countdownDisplay: `55 to 55`,
  //   day: 16,
  //   year: [],
  //   genre: ``,
  //   significantHoomans: [],
  //   youtube: [""],
  //   datasource: {
  //     alexaDetailData: {
  //       backgroundImage:
  //         "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
  //       title: "Forbidden Love",
  //       detailImage: "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/",
  //       textContent: {
  //         artist: "Artist: Madleen Kane",
  //         countdown: "Day 16 (55 to 55)",
  //         primaryText: "",
  //       },
  //       logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
  //     },
  //   },
  // },
  // {
  //   title: ["Uninvited"],
  //   artist: ["Alanis Morissette"],
  //   date: `December 6, 2020`,
  //   text: `<speak><break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/"/></speak>`,
  //   countdown: `fifty five to fifty five`,
  //   countdownDisplay: `55 to 55`,
  //   day: 15,
  //   year: [],
  //   genre: ``,
  //   significantHoomans: [],
  //   youtube: [""],
  //   datasource: {
  //     alexaDetailData: {
  //       backgroundImage:
  //         "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
  //       title: "Uninvited",
  //       detailImage: "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/",
  //       textContent: {
  //         artist: "Artist: Alanis Morissette",
  //         countdown: "Day 15 (55 to 55)",
  //         primaryText: "",
  //       },
  //       logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
  //     },
  //   },
  // },
  // {
  //   title: ["I Could Not Ask For More"],
  //   artist: ["Edwin McCain"],
  //   date: `December 7, 2020`,
  //   text: `<speak><break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/"/></speak>`,
  //   countdown: `fifty five to fifty five`,
  //   countdownDisplay: `55 to 55`,
  //   day: 14,
  //   year: [],
  //   genre: ``,
  //   significantHoomans: [],
  //   youtube: [""],
  //   datasource: {
  //     alexaDetailData: {
  //       backgroundImage:
  //         "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
  //       title: "I Could Not Ask For More",
  //       detailImage: "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/",
  //       textContent: {
  //         artist: "Artist: Edwin McCain",
  //         countdown: "Day 14 (55 to 55)",
  //         primaryText: "",
  //       },
  //       logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
  //     },
  //   },
  // },
  // {
  //   title: ["Wonderful Tonight"],
  //   artist: ["Eric Clapton"],
  //   date: `December 8, 2020`,
  //   text: `<speak><break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/"/></speak>`,
  //   countdown: `fifty five to fifty five`,
  //   countdownDisplay: `55 to 55`,
  //   day: 13,
  //   year: [],
  //   genre: ``,
  //   significantHoomans: [],
  //   youtube: [""],
  //   datasource: {
  //     alexaDetailData: {
  //       backgroundImage:
  //         "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
  //       title: "Wonderful Tonight",
  //       detailImage: "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/",
  //       textContent: {
  //         artist: "Artist: Eric Clapton",
  //         countdown: "Day 13 (55 to 55)",
  //         primaryText: "",
  //       },
  //       logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
  //     },
  //   },
  // },
  // {
  //   title: ["Making Love Out Of Nothing At All"],
  //   artist: ["Air Supply"],
  //   date: `December 9, 2020`,
  //   text: `<speak><break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/"/></speak>`,
  //   countdown: `fifty five to fifty five`,
  //   countdownDisplay: `55 to 55`,
  //   day: 12,
  //   year: [],
  //   genre: ``,
  //   significantHoomans: [],
  //   youtube: [""],
  //   datasource: {
  //     alexaDetailData: {
  //       backgroundImage:
  //         "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
  //       title: "Making Love Out Of Nothing At All",
  //       detailImage: "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/",
  //       textContent: {
  //         artist: "Artist: Air Supply",
  //         countdown: "Day 55 (55 to 55)",
  //         primaryText: "",
  //       },
  //       logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
  //     },
  //   },
  // },
  // {
  //   title: ["Found Out About You"],
  //   artist: ["Gin Blossoms"],
  //   date: `December 10, 2020`,
  //   text: `<speak><break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/"/></speak>`,
  //   countdown: `fifty five to fifty five`,
  //   countdownDisplay: `55 to 55`,
  //   day: 11,
  //   year: [],
  //   genre: ``,
  //   significantHoomans: [],
  //   youtube: [""],
  //   datasource: {
  //     alexaDetailData: {
  //       backgroundImage:
  //         "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
  //       title: "Found Out About You",
  //       detailImage: "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/",
  //       textContent: {
  //         artist: "Artist: Gin Blossoms",
  //         countdown: "Day 11 (55 to 55)",
  //         primaryText: "",
  //       },
  //       logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
  //     },
  //   },
  // },
  // {
  //   title: ["Celebration"],
  //   artist: ["Kool And The Gang"],
  //   date: `December 11, 2020`,
  //   text: `<speak><break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/"/></speak>`,
  //   countdown: `fifty five to fifty five`,
  //   countdownDisplay: `55 to 55`,
  //   day: 10,
  //   year: [],
  //   genre: ``,
  //   significantHoomans: [],
  //   youtube: [""],
  //   datasource: {
  //     alexaDetailData: {
  //       backgroundImage:
  //         "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
  //       title: "Celebration",
  //       detailImage: "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/",
  //       textContent: {
  //         artist: "Artist: Kool & The Gang",
  //         countdown: "Day 10 (55 to 55)",
  //         primaryText: "",
  //       },
  //       logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
  //     },
  //   },
  // },
  // {
  //   title: ["The Guitar Man"],
  //   artist: ["Bread"],
  //   date: `December 12, 2020`,
  //   text: `<speak><break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/"/></speak>`,
  //   countdown: `fifty five to fifty five`,
  //   countdownDisplay: `55 to 55`,
  //   day: 9,
  //   year: [],
  //   genre: ``,
  //   significantHoomans: [],
  //   youtube: [""],
  //   datasource: {
  //     alexaDetailData: {
  //       backgroundImage:
  //         "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
  //       title: "The Guitar Man",
  //       detailImage: "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/",
  //       textContent: {
  //         artist: "Artist: Bread",
  //         countdown: "Day 9 (55 to 55)",
  //         primaryText: "",
  //       },
  //       logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
  //     },
  //   },
  // },
  // {
  //   title: ["The Living Years"],
  //   artist: ["Mike And The Mechanics"],
  //   date: `December 13, 2020`,
  //   text: `<speak><break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/"/></speak>`,
  //   countdown: `fifty five to fifty five`,
  //   countdownDisplay: `55 to 55`,
  //   day: 8,
  //   year: [],
  //   genre: ``,
  //   significantHoomans: [],
  //   youtube: [""],
  //   datasource: {
  //     alexaDetailData: {
  //       backgroundImage:
  //         "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
  //       title: "The Living Years",
  //       detailImage: "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/",
  //       textContent: {
  //         artist: "Artist: Mike + The Mechanics",
  //         countdown: "Day 8 (55 to 55)",
  //         primaryText: "",
  //       },
  //       logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
  //     },
  //   },
  // },
  // {
  //   title: ["Smells Like Teen Spirit"],
  //   artist: ["Nirvana"],
  //   date: `December 14, 2020`,
  //   text: `<speak><break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/"/></speak>`,
  //   countdown: `fifty five to fifty five`,
  //   countdownDisplay: `55 to 55`,
  //   day: 7,
  //   year: [],
  //   genre: ``,
  //   significantHoomans: [],
  //   youtube: [""],
  //   datasource: {
  //     alexaDetailData: {
  //       backgroundImage:
  //         "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
  //       title: "Smells Like Teen Spirit",
  //       detailImage: "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/",
  //       textContent: {
  //         artist: "Artist: Nirvana",
  //         countdown: "Day 7 (55 to 55)",
  //         primaryText: "",
  //       },
  //       logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
  //     },
  //   },
  // },
  // {
  //   title: ["Break My Stride"],
  //   artist: ["Matthew Wilder"],
  //   date: `December 15, 2020`,
  //   text: `<speak><break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/"/></speak>`,
  //   countdown: `fifty five to fifty five`,
  //   countdownDisplay: `55 to 55`,
  //   day: 6,
  //   year: [],
  //   genre: ``,
  //   significantHoomans: [],
  //   youtube: [""],
  //   datasource: {
  //     alexaDetailData: {
  //       backgroundImage:
  //         "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
  //       title: "Break My Stride",
  //       detailImage: "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/",
  //       textContent: {
  //         artist: "Artist: Matthew Wilder",
  //         countdown: "Day 6 (55 to 55)",
  //         primaryText: "",
  //       },
  //       logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
  //     },
  //   },
  // },
  // {
  //   title: ["Baby Got Back"],
  //   artist: ["Sir Mix A Lot"],
  //   date: `December 16, 2020`,
  //   text: `<speak><break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/"/></speak>`,
  //   countdown: `fifty five to fifty five`,
  //   countdownDisplay: `55 to 55`,
  //   day: 5,
  //   year: [],
  //   genre: ``,
  //   significantHoomans: [],
  //   youtube: [""],
  //   datasource: {
  //     alexaDetailData: {
  //       backgroundImage:
  //         "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
  //       title: "Baby Got Back",
  //       detailImage: "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/",
  //       textContent: {
  //         artist: "Artist: Sir Mix-A-Lot",
  //         countdown: "Day 5 (55 to 55)",
  //         primaryText: "",
  //       },
  //       logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
  //     },
  //   },
  // },
  // {
  //   title: ["Safe And Sound"],
  //   artist: ["Capital Cities"],
  //   date: `December 17, 2020`,
  //   text: `<speak><break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/"/></speak>`,
  //   countdown: `fifty five to fifty five`,
  //   countdownDisplay: `55 to 55`,
  //   day: 4,
  //   year: [],
  //   genre: ``,
  //   significantHoomans: [],
  //   youtube: [""],
  //   datasource: {
  //     alexaDetailData: {
  //       backgroundImage:
  //         "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
  //       title: "Safe And Sound",
  //       detailImage: "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/",
  //       textContent: {
  //         artist: "Artist: Capital Cities",
  //         countdown: "Day 4 (55 to 55)",
  //         primaryText: "",
  //       },
  //       logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
  //     },
  //   },
  // },
  // {
  //   title: ["Nothing’s Gonna Stop Us Now"],
  //   artist: ["Starship"],
  //   date: `December 18, 2020`,
  //   text: `<speak><break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/"/></speak>`,
  //   countdown: `fifty five to fifty five`,
  //   countdownDisplay: `55 to 55`,
  //   day: 3,
  //   year: [],
  //   genre: ``,
  //   significantHoomans: [],
  //   youtube: [""],
  //   datasource: {
  //     alexaDetailData: {
  //       backgroundImage:
  //         "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
  //       title: "Nothing’s Gonna Stop Us Now",
  //       detailImage: "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/",
  //       textContent: {
  //         artist: "Artist: Starship",
  //         countdown: "Day 3 (55 to 55)",
  //         primaryText: "",
  //       },
  //       logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
  //     },
  //   },
  // },
  // {
  //   title: ["Our House"],
  //   artist: ["Crosby Stills Nash And Young"],
  //   date: `December 19, 2020`,
  //   text: `<speak><break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/"/></speak>`,
  //   countdown: `fifty five to fifty five`,
  //   countdownDisplay: `55 to 55`,
  //   day: 2,
  //   year: [],
  //   genre: ``,
  //   significantHoomans: [],
  //   youtube: [""],
  //   datasource: {
  //     alexaDetailData: {
  //       backgroundImage:
  //         "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
  //       title: "Our House",
  //       detailImage: "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/",
  //       textContent: {
  //         artist: "Artist: Crosby, Stills, Nash & Young",
  //         countdown: "Day 2 (55 to 55)",
  //         primaryText: "",
  //       },
  //       logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
  //     },
  //   },
  // },
  // {
  //   title: ["The Songs of 1981"],
  //   artist: ["Various Artists"],
  //   date: `December 20, 2020`,
  //   text: `<speak><break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/"/></speak>`,
  //   countdown: `fifty five to fifty five`,
  //   countdownDisplay: `55 to 55`,
  //   day: 1,
  //   year: [],
  //   genre: ``,
  //   significantHoomans: [],
  //   youtube: [""],
  //   datasource: {
  //     alexaDetailData: {
  //       backgroundImage:
  //         "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
  //       title: "The Songs of 1981",
  //       detailImage: "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/",
  //       textContent: {
  //         artist: "Artist: Various Artists",
  //         countdown: "Day 1 (55 to 55)",
  //         primaryText: "",
  //       },
  //       logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
  //     },
  //   },
  // },
  // {
  //   title: [""],
  //   artist: [""],
  //   date: `December 21, 2020`,
  //   text: `<speak><break time="1500ms"/> <audio src="https://nebu-blogs.s3.amazonaws.com/music/55-to-55/"/></speak>`,
  //   countdown: `fifty five to fifty five`,
  //   countdownDisplay: `55 to 55`,
  //   day: 0,
  //   year: [],
  //   genre: ``,
  //   significantHoomans: [],
  //   youtube: [""],
  //   datasource: {
  //     alexaDetailData: {
  //       backgroundImage:
  //         "https://nebu-blogs.s3.amazonaws.com/Images/Backgrounds/Space-4.jpeg",
  //       title: "",
  //       detailImage: "https://nebu-blogs.s3.amazonaws.com/Images/55-to-55/",
  //       textContent: {
  //         artist: "Artist: ",
  //         countdown: "Day 0 (55 to 55)",
  //         primaryText: "",
  //       },
  //       logoUrl: "https://nebu-blogs.s3.amazonaws.com/Images/1965.png",
  //     },
  //   },
  // },
];

let newBlogs = [];
blogs.forEach((blog) => {
  newBlogs.push({
    category: blog.countdownDisplay,
    title: generateTitle(blog),
    author: "Nebulad",
    date: blog.date,
    description: "No description added yet...",
    content: blog.text,
    image: "blog-6438611bf315f2641e77ec2a-1681849063511.jpeg",
    coverPhotoBg: "0 100%",
    metadata: JSON.stringify({
      songs: handleSongs(blog),
      significantHoomans: [...blog.significantHoomans],
    }),
  });
});

function generateTitle(blog) {
  let title;
  if (blog.title.length === 1) {
    title = `${blog.title[0]} (${blog.artist[0]}) - Day ${blog.day}`;
  }
  if (blog.title.length === 2) {
    title = `${blog.title[0]} (${blog.artist[0]}) / ${blog.title[1]} (${blog.artist[1]}) - Day ${blog.day}`;
  }
  if (blog.title.length === 3) {
    title = `${blog.title[2]} (${blog.artist[2]}) / ${blog.title[2]} (${blog.artist[2]}) / ${blog.title[2]} (${blog.artist[2]}) - Day ${blog.day}`;
  }
  return title;
}
function handleSongs(blog) {
  if (blog.title.length === 1) {
    return [
      {
        title: blog.title[0],
        artist: blog.artist[0],
        year: +blog.year[0],
        genre: blog.genre,
        video: blog.youtube[0],
        audio: extractLinks(blog.text),
      },
    ];
  }

  if (blog.title.length === 2) {
    return [
      {
        title: blog.title[0],
        artist: blog.artist[0],
        year: +blog.year[0],
        genre: blog.genre,
        video: blog.youtube[0],
        audio: extractLinks(blog.text),
      },
      {
        title: blog.title[1],
        artist: blog.artist[1],
        year: +blog.year[1],
        genre: blog.genre,
        video: blog.youtube[1],
        audio: extractLinks(blog.text),
      },
    ];
  }

  if (blog.title.length === 3) {
    return [
      {
        title: blog.title[0],
        artist: blog.artist[0],
        year: +blog.year[0],
        genre: blog.genre,
        video: blog.youtube[0],
        audio: extractLinks(blog.text),
      },
      {
        title: blog.title[1],
        artist: blog.artist[1],
        year: +blog.year[1],
        genre: blog.genre,
        video: blog.youtube[1],
        audio: extractLinks(blog.text),
      },
      {
        title: blog.title[2],
        artist: blog.artist[2],
        year: +blog.year[2],
        genre: blog.genre,
        video: blog.youtube[2],
        audio: extractLinks(blog.text),
      },
    ];
  }

  return [];
}
function extractLinks(inputString) {
  const pattern =
    /https:\/\/nebu-blogs\.s3\.amazonaws\.com\/music\/[\w\-/'’]+?\.(mp3|m4a)/g;

  const links = inputString.match(pattern);

  return links || [];
}

export async function populateDB(newBlogs) {
  newBlogs.forEach((blog) => {
    axios.post("http://localhost:8000/api/blogs", blog, {
      withCredentials: true,
    });
  });
}

export default newBlogs;
