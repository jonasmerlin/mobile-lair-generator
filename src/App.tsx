import { useState } from "react";
import { FaDiceD20, FaGithub } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";

const MobileLairGenerator = () => {
  const kindOfLair = [
    "Hut",
    "Snail Shell",
    "Cauldron",
    "Old Treetrunk",
    "Crooked Tower",
    "Castle",
    "Underside of Rock",
    "Small Pond",
    "Sarcophagus",
    "Fallen Knight's Armor",
    "Large Hat",
    "Cave",
    "Old Manor",
    "Body of a Giant Crab",
    "Deer Carcass",
    "Giant's Skull",
    "Bottle/Flask",
    "Tent",
    "Brain",
    "Ship",
  ];

  const wayOfGettingAround = [
    "Legs",
    "Magic",
    "Wings",
    "Something is Pushing",
    "Something is Pulling",
    "Rolling",
    "Worming",
    "Jumping",
    "Wheels",
    "Cloud",
    "Swimming",
    "Floating",
    "A lot of small explosions",
    "Bouncing",
    "Blown in the wind",
    "Shooting Star",
    "Digestive tract of a bird",
    "Attached to the fur of a large animal",
    "Teleporting",
    "(Dis-)appearing in the mist",
  ];

  const [currentLair, setCurrentLair] = useState({
    kind: "",
    movement: "",
  });

  const rollDice = () => {
    const randomKind =
      kindOfLair[Math.floor(Math.random() * kindOfLair.length)];
    const randomMovement =
      wayOfGettingAround[Math.floor(Math.random() * wayOfGettingAround.length)];

    setCurrentLair({
      kind: randomKind,
      movement: randomMovement,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-stone-900 text-stone-200 p-4 font-mono">
      <div className="w-full max-w-md">
        <h1 className="text-2xl mb-8 font-bold text-center tracking-tight uppercase text-stone-100">
          <span className="text-green-500">Mobile</span> Lair Generator
        </h1>

        <button
          onClick={rollDice}
          className="w-full bg-stone-800 hover:bg-stone-700 text-green-500 font-bold py-3 px-6 border-l-4 border-green-500 flex items-center justify-center space-x-2 mb-8 transition-colors hover:cursor-pointer"
        >
          <FaDiceD20 />
          <span>ROLL LAIR</span>
        </button>

        {currentLair.kind && (
          <div className="mb-6 border-l-4 border-green-500 pl-4">
            <div className="space-y-6 mb-6">
              <div className="bg-stone-800 p-4">
                <div className="flex justify-between items-center mb-1">
                  <p className="text-xs text-stone-400 uppercase tracking-widest">
                    Kind of Lair
                  </p>
                  <div className="h-px bg-green-500 w-16"></div>
                </div>
                <p className="text-lg font-bold">{currentLair.kind}</p>
              </div>

              <div className="bg-stone-800 p-4">
                <div className="flex justify-between items-center mb-1">
                  <p className="text-xs text-stone-400 uppercase tracking-widest">
                    Way of Getting Around
                  </p>
                  <div className="h-px bg-green-500 w-16"></div>
                </div>
                <p className="text-lg font-bold">{currentLair.movement}</p>
              </div>
            </div>
          </div>
        )}

        <div className="text-center text-xs text-stone-500 tracking-widest mt-6 uppercase">
          Based on{" "}
          <a
            href="https://leaflet.pub/dbb1cc10-7d96-413a-8164-4ca7f9a47b9f"
            className="text-green-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            this post
          </a>
          .
        </div>

        <div className="mt-4 flex flex-row gap-2 justify-center">
          <a
            href="https://github.com/jonasmerlin/mobile-lair-generator"
            className="text-stone-500 hover:text-green-500 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="inline-block" />
          </a>
          <a
            href="https://bsky.app/profile/jonasmerlin.bsky.social"
            className="text-stone-500 hover:text-green-500 transition-colors"
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

export default MobileLairGenerator;
