import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Matt Sayer. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a
              href="https://bsky.app/profile/macka1080.bsky.social"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
              aria-label="Bluesky"
            >
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Bluesky_Logo.svg"
                alt="Bluesky"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://au.linkedin.com/in/matthew-sayer-ab6a0927"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-.88-.016-2.005-1.22-2.005-1.22 0-1.41.952-1.41 1.94v5.669h-3v-11h3v1.61c.42-.81 1.16-1.63 2.42-1.63 2.57 0 3.03 1.69 3.03 3.89v6.13z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 