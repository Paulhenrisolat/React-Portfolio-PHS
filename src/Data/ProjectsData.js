const ProjectsData = [
    {
        name: "MorbSurvival", img: ["morb1.gif","morb2.gif","morb3.gif","morb4.png","morb5.png","morb6.png"], minidesc: "Isometric multiplayer zombie survival", tech: ["C#", "Unity","Pun2"], 
        desc: "You are a little cube in a isometric 3D world, who protect the base with your friend.\n While infinite waves of blue jello zombie come's your way !\n\n Made with Unity and Pun2 (Photon) i made a multiplayer hosting game with an ennemie wave system, \n who spawn ennemies, check if there all alive, and if not go to the next wave and spawn more.",
        youtube: "https://www.youtube.com/embed/TqrZ5B2ByKc"
    },
    {
        name: "IsometricBuilder", img: ["isometricBuilder3.png","isometricBuilder2.png","isometricBuilder3.png","isometricBuilder4.png","isometricBuilder5.png"], minidesc: "Template for isometric city builder", tech: ["C#", "Unity"], 
        desc: "A Unity template to create isometric city builder game with 2D sprites in Unity.\n\n I made this to gain time on future projects.",
        //youtube: "https://www.youtube.com/embed/u5NqO2v_xnY"
    },
    {
        name: "CrazySpace", img: ["crazySpace1.png","crazySpace2.png","crazySpace3.png","crazySpace4.png"], minidesc: "2D space shooter", tech: ["Lua","Love2D"], 
        desc: "A space theme top down shooter game.\n You can go around on the 'map' while shooting avoiding or following ennemies.\n\n to simulate a freerom game without camera the enemies and background move instead of the actual player. (The effect work perfectly)\n\n Enemies move with a state machine",
        youtube: "https://www.youtube.com/embed/NPdJ2tqIFBk"
    },
    {
        name: "BloodyBrickBreaker", img: ["bbb4.png","bbb3.png","bbb5.png","bbb6.png","bbb7.png"], minidesc: "Brutal 2D Brick Breaker", tech: ["C++", "SFML"], 
        desc: "In B.B.B (Bloody Brick Breaker) you have to break every brick without dying.\n\n I created a particle manager ton enchance the bloody and graphic aspect of the game. (I also did all the pixel arts)",
        youtube: "https://www.youtube.com/embed/i_aD3qktwRM"
    },
    {
        name: "Pointless", img: ["pointless5.png","pointless1.png","pointless2.png","pointless4.png","pointless6.png","pointless7.png"], minidesc: "3D procedural infinite runner", tech: ["C#", "Unity"], 
        desc: "Pointless is a 3D infinite runner where the player plays a ball that must go the furthest possible.\n\n Only the difficulty varies depending on the mood of the entity in front of us!\n The more the entity is angry the more dificult platforms will be hard to pass.\n The player can collect orbs to influence the mood of the entity (Green = positive, purple = negative).\n\n The further the player travels, the more their speed increases.\n\n The player's life points are represented by a bar which breaks after 5 hits.\n Upon death, the player can save his score, and have a ranking with a TOP 3 of best players.",
        youtube: "https:/www.youtube.com/embed/gMmubesvTLE"
    },
    {
        name: "BreakableGod", img: ["breakableGod1.png","breakableGod4.png","breakableGod2.png","breakableGod3.png"], minidesc: "2D Boss Brick Breaker", tech: ["C#", "Love2D"], 
        desc: "In this simple brick breaker you do damage to a boss made with the brick,\n so you don't need to break all the bricks but bring the life of the boss's go down to zero.",
        //youtube: "https://www.youtube.com/embed/u5NqO2v_xnY"
    },
    {
        name: "CreateEarth", img: ["createEarth4.png","createEarthV2-3.png","createEarth4.png","createEarth5.png","createEarth6.png","createEarth2.png"], minidesc: "3D futuristic enigma adventure", tech: ["C#", "Unity"], 
        desc: "You are a technician inside the massivly huge spaceship 'NamePending' and beacause of a too long mission you are now alone.\n\n The mission : Create an artificial earth with the ship equipements and some coder skills ! \n Find the left notes of the crew and code to advance the game.",
        //youtube: "https://www.youtube.com/embed/u5NqO2v_xnY"
    },
    {
        name: "GravityDisaster", img: ["blackhole1.png","placeholder.png","placeholder.png"], minidesc: "3D Survival Minigame", tech: ["C#", "Unity"], 
        desc: "Survive a black hole disaster in a destructible town.",
        //youtube: "https://www.youtube.com/embed/u5NqO2v_xnY"
    },
    {
        name: "SlightHorror&Beats", img: ["horrorBeat1.png","horrorBeat2.png","placeholder.png"], minidesc: "2D Rythme Horror", tech: ["C#", "Unity"], 
        desc: "A rythm platformer with slight horror elements.",
        unity: {
                buildPath: "Unity/WebTest/index.html",
                width: 960,
                height: 600
                },
        //youtube: "https://www.youtube.com/embed/u5NqO2v_xnY"
    },
    {
        name: "LyonPlex", img: ["LyonPlex-logo.png","lyonplex1.png","lyonplex6.png","lyonplex3.png","lyonplex4.png","lyonplex5.png"], minidesc: "3D Custom Engine", tech: ["C++", "DX12"], 
        desc: "LyonPlex is a custom DirectX12 3D engine made with another programmer. He can be used to create scenes, import 3D meshes, make a game loop, making a simple UI and more...",
        youtube: "https://www.youtube.com/embed/kvvK-feCV0Q"
    },
    {
        name: "Armonizer", img: ["armonizer1.png","armonizer2.png","armonizer3.png","armonizer4.png","armonizer5.png","armonizer6.png"], minidesc: "Adventure 2D 3D", tech: ["C++", "LyonPlex"], 
        desc: "The Armonizer is the first game made with LyonPlex (Our custom 3D engine). You can pick 3D object and transform them into different 2D weapon.",
        //youtube: "https://www.youtube.com/embed/u5NqO2v_xnY"
    },
]

export default ProjectsData;