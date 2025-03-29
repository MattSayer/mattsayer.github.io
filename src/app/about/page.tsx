import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            About Me
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
            <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
              <Image
                src="/images/headshot-square.jpg"
                alt="Matt Sayer"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Game Developer & Programmer
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
              My name is Matt Sayer, and I'm an indie game developer based in Melbourne, Australia. 
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
              I am a programmer first and foremost, with well over a decade's worth of experience in software development encompassing web applications, back-end automation scripts, front-end user interfaces, enterprise content management systems, and more.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
              I taught myself game development in my spare time while maintaining a full-time engineering position, leveraging my previous experience as a .NET developer to quickly familiarise myself with Unity.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                In addition to my strong programming skills, I have experience across a range of game discliplines, including animation, 3D modeling, shaders, VFX, and UI design.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Education
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  RMIT, Melbourne
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Bachelor of Computer Science | 2008 - 2010
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Skills & Expertise
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Programming Languages
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>C#</li>
                    <li>JavaScript</li>
                    <li>PHP</li>
                    <li>SQL</li>
                    <li>Python</li>
                    <li>CSS</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Development Tools
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>Unity</li>
                    <li>Blender</li>
                    <li>Godot</li>
                    <li>Visual Studio</li>
                    <li>Git</li>
                    <li>Docker</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 