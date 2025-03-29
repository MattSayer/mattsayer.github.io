export interface FeatureSection {
  title: string;
  image?: string;
  paragraphs: string[];
}

export interface Game {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  thumnbNailUrl: string;
  technologies: string[];
  features: FeatureSection[];
  screenshots: string[];
  releaseDate: string;
  genre: string;
  engine: string;
  platforms: string[];
  storePage: string;
  videoUrl?: string;
}

export const games: Game[] = [
  {
    id: 'rewind-night',
    title: 'Rewind Night',
    description: 'A short narrative experience about renting games at the turn of the millennium.',
    longDescription: 'This project was driven by my fondness for visiting rental stores as a kid. It\'s a short, narrative-driven experience where the player assumes the role of Lucas, a 12-year-old boy eager to make the most of his family\'s trip to their local rental store, Rewind Video.',
    imageUrl: '/images/rewind-night-store.png',
    thumnbNailUrl: '/images/rewind-night-cover-image.png',
    technologies: ['Unity', 'C#', 'Pixel Crushers Dialogue System', 'More MountainsTopDown Engine'],
    features: [
      {
        title: 'Dialogue',
        image: '/images/rewind-night-dialogue-choice.png',
        paragraphs: [
          'The game features a branching dialogue system utilising Pixel Crushers\' Dialogue System for Unity. I customised the base implementation to support text animation via vertex manipulation of the character meshes produced by Unity\'s TextMeshPro system, allow for in-world speech bubbles that position themselves dynamically according to the speaker, and support emote speech bubbles alongside standard text.',
        ]
      },
      {
        title: 'Pixel art',
        image: '/images/rewind-night-game-time.png',
        paragraphs: [
          'I used this project as an opportunity to improve my pixel art capabilities, and I\'m happy with the result. I maintained a consistent colour palette and art style, which I feel makes the game feel more cohesive than my previous work.'
        ]
      },
      {
        title: 'Core systems',
        paragraphs: [
          'Building upon previous projects, Rewind Night uses an event-based communication system via a simple subscription service built into More Mountains\' Top Down Engine, which I used for handling character movement. Additionally, I used dependency injection where needed to facilitate inter-class dependencies.'
        ]
      }
    ],
    screenshots: [
      '/images/rewind-night-dialogue-choice.png',
      '/images/rewind-night-game-time.png'
    ],
    releaseDate: '28th Mar 2025',
    genre: 'Adventure',
    engine: 'Unity',
    platforms: ['Windows', 'Mac'],
    storePage: 'https://macka1080.itch.io/rewind-night'
  },
  {
    id: 'submariner',
    title: 'Submariner',
    description: 'A simple adventure game where the player must collect items to construct a device.',
    longDescription: 'I worked on this project over the course of three months in my spare time. I began with the general concept of piloting a small submarine trapped in a vicious storm, expanding it out to a simple adventure-game structure where the player must collect various items to Macgyver together a solution to the storm problem.\n\nAfter fleshing out the general game structure, I created a relationship diagram to model the various systems I would need to build and how they would interact with each other. While not 100% accurate to the final product, this initial design is quite close and ensured the implementation phase progressed smoothly and efficiently.',
    imageUrl: '/images/submariner-screenshot.png',
    thumnbNailUrl: '/images/submariner-cover-image-thumb.png',
    technologies: ['Unity', 'C#'],
    features: [
      {
        title: 'Buoyancy',
        image: '/images/buoyancy.gif',
        paragraphs: [
          'Functional waves are a core component of the game and consist of three cumulative Gerstner wave functions that displace the vertices of a procedural mesh. Visual displacement is handled by a custom shader, but the WaveManager class is responsible for calculating displacement used in physics calculations.',
          'To maintain performance, the WaveManager processes requests on-demand and only calculates displacement within a small sample radius of an object\'s world-space position, using a grid-based lookup to reduce performance costs further. These results are cached per-frame to avoid repeated calculations for bodies in close proximity to one another.',
          'On the buoyant bodies themselves, a buoyancy controller tracks changes in wave height over time and uses the normal to calculate the strength of the physics force to apply.'
        ]
      },
      {
        title: 'Game Events',
        paragraphs: [
          'The GameEvent ScriptableObject is my implementation of the Observer/Subscriber pattern, acting as a conduit for decoupled communication between classes. When one class needs to inform others of a specific event, a change in data state, or requires another class to perform some function, it calls the FireEvent method of the relevant GameEvent. Subscribers to that GameEvent are then notified, allowing them to respond accordingly without a direct dependency on the calling class.',
          'My implementation here supports passing a variety of data types as parameters, as well as allowing for callback functions for when some measure of dependency is unavoidable.'
        ]
      },
      {
        title: 'Audio Controller',
        paragraphs: [
          'To minimise the number of audio sources in the scene and streamline audio management, I implemented an audio controller to handle audio requests. The controller maintains separate pools of audio sources for one-off audio requests of various purposes (UI/2D audio, 3D spatial audio) as well as a pool for loaned "proxy" audio sources for classes that produce looping or frequent audio requests.',
          'When audio requests are made, the controller gets the next available audio source from the corresponding pool and configures it according to the request parameters as well as the current game state, adjusting volume, mixer groups, and location (for 3D audio) before playing the requested audio clip.',
          'This approach ensures consistency between audio-emitting classes, and simplifies the process of adding audio to additional classes. It also allows for features such as automatic cross-fading between music tracks (for instance, when pausing the game) as well as easy updating of volume levels when the player changes audio settings.',
          'As mentioned above, the audio controller also provides a ProxyAudioSource object for classes that require continuous or frequent audio emission, such as the engine of the submarine. The ProxyAudioSource acts as a wrapper for a native AudioSource component, managing volume, cross-fading, and other audio properties to once again ensure consistency with the rest of the audio in the game. This proxy approach also provides automatic reclamation of the audio source if the owning class is destroyed or otherwise removed from the scene.'
        ]
      }
    ],
    screenshots: [
      '/images/buoyancy.gif',
      '/images/fish-displacement.gif',
      '/images/submariner-diagram.png'
    ],
    releaseDate: '3rd Nov 2023',
    genre: 'Adventure',
    engine: 'Unity',
    platforms: ['Windows'],
    storePage: 'https://macka1080.itch.io/submariner',
    videoUrl: 'https://www.youtube.com/embed/urUmDHE-lMo?si=SnhplRRGzROzvYJ7'
  },
  {
    id: 'house-of-the-witch',
    title: 'House of the Witch',
    description: 'An on-rails shooter where players take on the role of a forgetful witch racing to decorate her house in time for Halloween.',
    longDescription: 'Made over the course of a month as part of the MinnHax 2023 game jam, House of the Witch is an on-rails shooter where players take on the role of a forgetful witch racing to decorate her house in time for Halloween.\n\nFor this project, I used Godot, an engine I had no previous experience with. My two teammates handled the audio and visual assets for the game, while I took care of the programming as well as implementing everything in Godot (level design, animation, UI, etc…).\n\nDespite the challenges of working with an unfamiliar engine, I believe we accomplished quite a lot with our project. I put together a pseudo shader-compilation process to ameliorate some of Godot\'s inherent shader stuttering issues. I\'m also quite happy with the screen-capture component I built to highlight the before and after states of the game\'s timed decoration segments.',
    imageUrl: '/images/witch-greenhouse.png',
    thumnbNailUrl: '/images/house-of-the-witch-thumb.png',
    technologies: ['Godot', 'GDScript'],
    features: [
    ],
    screenshots: [
      '/images/witch-intro.png',
      '/images/witch-greenhouse.png'
    ],
    releaseDate: '31st October 2023',
    genre: 'On-rails shooter',
    engine: 'Godot',
    platforms: ['Windows'],
    storePage: 'https://purepolygon.itch.io/house-of-the-witch'
  },
  {
    id: 'chorus',
    title: 'Chorus of the Night',
    description: 'A roguelite twin-stick shooter with a musical theme.',
    longDescription: 'Chorus of the Night was my first Steam release. It\'s a roguelite twin-stick shooter with a musical theme, tasking players with fighting off waves of enemies styled after elements of the music scenes of the \'90s and early 2000s.\n\nWhile there\'s no shortage of roguelite wave-survival games these days, I feel the distinct theme and its incorporation into all the core gameplay elements helps Chorus of the Night stand out.',
    imageUrl: '/images/chorus-thumb.jpg',
    thumnbNailUrl: '/images/chorus-thumb.jpg',
    technologies: ['Unity', 'C#'],
    features: [],
    screenshots: [
      '/images/AmpGif2small.gif'
    ],
    releaseDate: '28th Dec 2022',
    genre: 'Twin-stick shooter',
    engine: 'Unity',
    platforms: ['Windows'],
    storePage: 'https://store.steampowered.com/app/2231630/Chorus_of_the_Night/',
    videoUrl: 'https://www.youtube.com/embed/IMhgVImBx9w?si=5uYWNDhKKSAYJDPE'
  },
  {
    id: 'light-forsaken',
    title: 'Light Forsaken',
    description: 'A lo-fi horror game built around limited visibility.',
    longDescription: 'Light Forsaken is a lo-fi horror game built around limited visibility. Armed with a sonar-like pulsing device that briefly illuminates their surroundings, players explore a small-town shopping mall and evacuate the denizens trapped inside.\n\nWith Light Forsaken, I feel that I delivered a suitably moody atmosphere, with quirky dialogue and simple-yet-effective scares.',
    imageUrl: '/images/light-forsaken-food-court.png',
    thumnbNailUrl: '/images/light-forsaken-thumb.png',
    technologies: ['Unity', 'C#'],
    features: [],
    screenshots: [
      '/images/light-forsaken-food-court.png'
    ],
    releaseDate: '31st October 2022',
    genre: 'Horror',
    engine: 'Unity',
    platforms: ['Windows', 'Mac'],
    storePage: 'https://macka1080.itch.io/light-forsaken',
    videoUrl: 'https://www.youtube.com/embed/cuYM2-mRuog?si=-mKrKnXnnxMkrL3H'
  }
]; 