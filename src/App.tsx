import { useState } from "react";
import { FaDiceD20, FaGithub } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";

const DungeonThemeGenerator = () => {
  const creatures = [
    "Mermaid",
    "Vampire",
    "Gargoyle",
    "Mimic",
    "Daemon",
    "Werebeast",
    "Giant",
    "Eye",
    "Soldier",
    "Insect",
    "Kirin",
    "Plant",
    "Sea Monster",
    "Crone",
    "Mummy",
    "Psion",
    "Dragon",
    "Leprechaun",
    "Genie",
    "Adventurer",
  ];

  const locations = [
    "Waterfall",
    "Cenote",
    "Clocktower",
    "Organism",
    "Grove",
    "Shipwreck",
    "Crypt",
    "Church",
    "Natural Cavern",
    "Subway",
    "Quarry",
    "Museum",
    "Mine",
    "Laboratory",
    "Spaceship",
    "Menagerie",
    "Haunted House",
    "Residence",
    "Lost World",
    "Bathhouse",
  ];

  const abstractTerms = [
    "Slime",
    "Lightning",
    "Shadow",
    "Sound",
    "Etiquette",
    "Alchemy",
    "Mirrors",
    "Gravity",
    "Time",
    "Gold",
    "Melting",
    "Smoke",
    "Crime",
    "Neon",
    "Fire",
    "Food",
    "Rainbow",
    "Earthquake",
    "Glyphs",
    "Cursed",
  ];

  const [currentTheme, setCurrentTheme] = useState({
    creature: "",
    location: "",
    abstractTerm: "",
  });

  const rollDice = () => {
    const randomCreature =
      creatures[Math.floor(Math.random() * creatures.length)];
    const randomLocation =
      locations[Math.floor(Math.random() * locations.length)];
    const randomAbstractTerm =
      abstractTerms[Math.floor(Math.random() * abstractTerms.length)];

    setCurrentTheme({
      creature: randomCreature,
      location: randomLocation,
      abstractTerm: randomAbstractTerm,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-stone-900 text-stone-200 p-4 font-mono">
      <div className="w-full max-w-md">
        <h1 className="text-2xl mb-8 font-bold text-center tracking-tight uppercase text-stone-100">
          <span className="text-red-500">Zungeon</span> Theme Generator
        </h1>

        <button
          onClick={rollDice}
          className="w-full bg-stone-800 hover:bg-stone-700 text-red-500 font-bold py-3 px-6 border-l-4 border-red-500 flex items-center justify-center space-x-2 mb-8 transition-colors hover:cursor-pointer"
        >
          <FaDiceD20 />
          <span>ROLL THEME</span>
        </button>

        {currentTheme.creature && (
          <div className="mb-6 border-l-4 border-red-500 pl-4">
            <div className="space-y-6 mb-6">
              <div className="bg-stone-800 p-4">
                <div className="flex justify-between items-center mb-1">
                  <p className="text-xs text-stone-400 uppercase tracking-widest">
                    Creature
                  </p>
                  <div className="h-px bg-red-500 w-16"></div>
                </div>
                <p className="text-lg font-bold">{currentTheme.creature}</p>
              </div>

              <div className="bg-stone-800 p-4">
                <div className="flex justify-between items-center mb-1">
                  <p className="text-xs text-stone-400 uppercase tracking-widest">
                    Location
                  </p>
                  <div className="h-px bg-red-500 w-16"></div>
                </div>
                <p className="text-lg font-bold">{currentTheme.location}</p>
              </div>

              <div className="bg-stone-800 p-4">
                <div className="flex justify-between items-center mb-1">
                  <p className="text-xs text-stone-400 uppercase tracking-widest">
                    Abstract
                  </p>
                  <div className="h-px bg-red-500 w-16"></div>
                </div>
                <p className="text-lg font-bold">{currentTheme.abstractTerm}</p>
              </div>
            </div>
          </div>
        )}

        <div className="text-center text-xs text-stone-500 tracking-widest mt-6 uppercase">
          Based on{" "}
          <a
            href="https://halfagainasmuch.blogspot.com/2025/01/the-zungeon-table-as-semi-endorsed-by.html"
            className="text-red-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            this post
          </a>{" "}
          by Doctor Curious, VII, which in turn was created for Idle Cartulary's{" "}
          <a
            href="https://idlecartulary.com/2025/01/01/the-zungeon-manifesto-demystifying-dungeon-creation/"
            className="text-red-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zungeon Jam
          </a>
          . All credit goes to them.
        </div>

        <div className="mt-4 flex flex-row gap-2 justify-center">
          <a
            href="https://github.com/jonasmerlin/zungeon-theme-generator"
            className="text-stone-500 hover:text-red-500 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="inline-block" />
          </a>
          <a
            href="https://bsky.app/profile/jonasmerlin.bsky.social"
            className="text-stone-500 hover:text-red-500 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBluesky className="inline-block" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DungeonThemeGenerator;
