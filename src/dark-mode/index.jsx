import React from "react";

export default function DarkMode() {
  const [darkMode, setDarkMode] = React.useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`${darkMode && "dark"}`}>
      <main className="flex flex-col min-h-screen p-12 bg-neutral-100 dark:bg-neutral-900">
        <nav className="grid grid-cols-3 items-center">
          <h1 className="text-xl font-semibold dark:text-white">
            IFEAT Conference
          </h1>
          <span className="justify-self-center text-blue-600 font-mono">
            November 2024 | Bangkok, Thailand{" "}
          </span>
          <button className="justify-self-end p-4 bg-blue-600 text-white rounded-xl">
            Get your tickets
          </button>
        </nav>
        <section className="w-[90%] max-w-3xl mx-auto mt-20 flex flex-col gap-8">
          <h1 className="text-blue-600 text-6xl font-semibold">
            Essential Oil Conference
          </h1>

          <p className="text-sky-800 dark:text-neutral-300">
            Since its earliest days as the capital of Thailand to its current
            incarnation as a massive city in the twenty-first century, Bangkok
            has captivated tourists for over 200 years. Every sense is on high
            alert in this place as numerous golden spires peer over wooden
            houses, musical neon-lit boats cruise the inky Chao Phraya River,
            saffron-robed monks ride past on tuk-tuks whilst a monorail weaves
            between the skyscrapers.
          </p>

          <p className="text-sky-800 dark:text-neutral-300">
            Bangkok is the largest city in Thailand and is home to more than 10
            million people. It has evolved into one of Southeast Asia’s most
            important and contemporary cities as a result of its expanding
            economic growth and enormous appeal as a destination for tourists.
          </p>

          <p className="text-sky-800 dark:text-neutral-300">
            The city is situated on the banks of the Chao Phraya River and was
            known as the Venice of the East because it relied on a vast network
            of canals for transportation between the 16th and 19th centuries.
          </p>

          <p className="text-sky-800 dark:text-neutral-300">
            With a significant international airport, it serves as the starting
            point for many travels to Thailand and other parts of Southeast
            Asia, but there are many good reasons to visit the city.
          </p>

          <p className="text-sky-800 dark:text-neutral-300">
            In Thailand, the expression “same same, but different” is used to
            describe practically everything. Alongside soaring glass
            skyscrapers, stylish rooftop bars, and enormous contemporary malls
            are bustling traditional markets and beautiful golden temples where
            you can immerse yourself in the local culture as it has been for
            decades.
          </p>
        </section>
        <button
          className="absolute w-16 h-16 bottom-16 right-16 bg-neutral-900 dark:bg-white rounded-full text-white dark:text-black font-semibold"
          onClick={toggleDarkMode}
        >
          {darkMode ? "Light" : "Dark"}
        </button>
      </main>
    </div>
  );
}
