import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Matt Sayer',
  description: 'Get in touch with Matt Sayer',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Contact</h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p>Feel free to reach out to me through any of the following channels:</p>
            
            <div className="mt-8 space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Email</h2>
                <a href="mailto:macka1080@hotmail.com" className="text-blue-500 hover:text-blue-600">
                  macka1080@hotmail.com
                </a>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Social Media</h2>
                <div className="flex space-x-4">
                  <a
                    href="https://bsky.app/profile/macka1080.bsky.social"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600"
                  >
                    Bluesky
                  </a>
                  <a
                    href="https://au.linkedin.com/in/matthew-sayer-ab6a0927"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 