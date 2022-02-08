import moon from "./components/assets/destination/image-moon.webp";
import mars from "./components/assets/destination/image-mars.webp";
import europa from "./components/assets/destination/image-europa.webp";
import titan from "./components/assets/destination/image-titan.webp";
import crew1 from "./components/assets/crew/image-douglas-hurley.webp";
import crew2 from "./components/assets/crew/image-mark-shuttleworth.webp";
import crew3 from "./components/assets/crew/image-victor-glover.webp";
import crew4 from "./components/assets/crew/image-anousheh-ansari.webp";

const data = {
  destinations: [
    {
      name: "MOON",
      images: {
        png: "./assets/destination/image-moon.png",
        webp: moon,
      },
      description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 KM",
      travel: "3 DAYS",
    },
    {
      name: "MARS",
      images: {
        png: "./assets/destination/image-mars.png",
        webp: mars,
      },
      description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 MIL. KM",
      travel: "9 M0NTHS",
    },
    {
      name: "EUROPA",
      images: {
        png: "./assets/destination/image-europa.png",
        webp: europa,
      },
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 MIL. KM",
      travel: "3 YEARS",
    },
    {
      name: "TITAN",
      images: {
        png: "./assets/destination/image-titan.png",
        webp: titan,
      },
      description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 BIL. KM",
      travel: "7 YEARS",
    },
  ],
  crew: [
    {
      name: "DOUGLAS HURLEY",
      images: {
        png: "./assets/crew/image-douglas-hurley.png",
        webp: crew1,
      },
      role: "COMMANDAR",
      bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
    {
      name: "MARK SHUTTLEWORTH",
      images: {
        png: "./assets/crew/image-mark-shuttleworth.png",
        webp: crew2,
      },
      role: "MISSION SPECIALIST",
      bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },
    {
      name: "VICTOR GLOVER",
      images: {
        png: "./assets/crew/image-victor-glover.png",
        webp: crew3,
      },
      role: "PILOT",
      bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    },
    {
      name: "ANOUSHEH ANSARI",
      images: {
        png: "./assets/crew/image-anousheh-ansari.png",
        webp: crew4,
      },
      role: "FLIGHT ENGINEER",
      bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    },
  ],
  technology: [
    {
      name: "Launch vehicle",
      images: {
        portrait: "./assets/technology/image-launch-vehicle-portrait.jpg",
        landscape: "./assets/technology/image-launch-vehicle-landscape.jpg",
      },
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
      name: "Spaceport",
      images: {
        portrait: "./assets/technology/image-spaceport-portrait.jpg",
        landscape: "./assets/technology/image-spaceport-landscape.jpg",
      },
      description:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    },
    {
      name: "Space capsule",
      images: {
        portrait: "./assets/technology/image-space-capsule-portrait.jpg",
        landscape: "./assets/technology/image-space-capsule-landscape.jpg",
      },
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
  ],
};

export const destinations = data.destinations;
export const crew = data.crew;
export const technology = data.technology;
