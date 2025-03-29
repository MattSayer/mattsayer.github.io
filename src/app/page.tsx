import Image from "next/image";
import GameCard from '@/components/GameCard';
import { games } from '@/data/games';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[calc(500px)] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="relative w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
            <Image
              src="/images/headshot-square.jpg"
              alt="Matt Sayer"
              fill
              className="object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Matt Sayer
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Experienced programmer and indie game developer with a passion for creating engaging and innovative games.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Me
            </a>
            <a
              href="#portfolio"
              className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Featured Games
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game) => (
              <GameCard
                key={game.id}
                title={game.title}
                description={game.description}
                thumnbNailUrl={game.thumnbNailUrl}
                link={`/games/${game.id}`}
                technologies={game.technologies}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Languages</h3>
              <p className="text-gray-600 dark:text-gray-300">C#, JavaScript, PHP, SQL, Python, CSS</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Software</h3>
              <p className="text-gray-600 dark:text-gray-300">Unity, Blender, Godot, Visual Studio</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Education</h3>
              <p className="text-gray-600 dark:text-gray-300">
                <strong>RMIT, Melbourne</strong><br />
                Bachelor of Computer Science | 2008 - 2010
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
