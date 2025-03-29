import Image from 'next/image';
import { games } from '@/data/games';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

type Props = {
  params: { id: string };
}

export function generateStaticParams() {
  return games.map((game) => ({
    id: game.id,
  }));
}

export default function GamePage({ params }: Props) {
  const game = games.find(g => g.id === params.id);

  if (!game) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="relative h-48 md:h-64 lg:h-96 w-full mb-8 rounded-lg overflow-hidden">
          <Image
            src={game.imageUrl}
            alt={game.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Game Info */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">{game.title}</h1>
          
          {/* Game Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div>
              <p><strong>Release:</strong> {game.releaseDate}</p>
              <p><strong>Genre:</strong> {game.genre}</p>
              <p><strong>Engine:</strong> {game.engine}</p>
            </div>
            <div>
              <p><strong>Platforms:</strong> {game.platforms.join(', ')}</p>
              <p><strong>Store page:</strong> <a href={game.storePage} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">View on store</a></p>
            </div>
          </div>

          {/* Video Section */}
          {game.videoUrl && (
            <div className="mb-8">
              <div className="relative w-full pt-[56.25%]">
                <iframe
                  src={game.videoUrl}
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          )}
          
          <div className="prose dark:prose-invert max-w-none mb-8">
            {game.longDescription.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          

          {/* Features */}
          {game.features.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Key Features</h2>
              {game.features.map((feature, index) => (
                <div key={index} className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
                  {feature.image && (
                    <div className="mb-4">
                      <Image
                        src={feature.image}
                        alt={`${feature.title} feature`}
                        width={800}
                        height={450}
                        className="rounded-lg"
                      />
                    </div>
                  )}
                  <div className="prose dark:prose-invert max-w-none">
                    {feature.paragraphs.map((paragraph, pIndex) => (
                      <p key={pIndex}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Technologies */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {game.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Screenshots */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {game.screenshots.map((screenshot, index) => (
                <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src={screenshot}
                    alt={`${game.title} screenshot ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export function generateMetadata({ params }: Props): Metadata {
  const game = games.find(g => g.id === params.id);
  
  if (!game) {
    return {
      title: 'Game Not Found',
    };
  }

  return {
    title: game.title,
    description: game.description,
  };
} 