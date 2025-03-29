import Image from 'next/image';
import Link from 'next/link';

interface GameCardProps {
  title: string;
  description: string;
  thumnbNailUrl: string;
  link: string;
  technologies: string[];
}

const GameCard = ({ title, description, thumnbNailUrl, link, technologies }: GameCardProps) => {
  return (
    <Link href={link} className="group">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
        <div className="relative w-full pt-[56.25%]">
          <Image
            src={thumnbNailUrl}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GameCard; 