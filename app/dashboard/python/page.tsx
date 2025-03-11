import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Section1Image from 'next/image';
import Section2Image from 'next/image';
import styles from '@/app/ui/home.module.css';

export default function Page() {
    return ( 
      // ...
    <main>
    <div className="flex h-20 shrink-0 items-end rounded-lg p-4 md:h-52">
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div className={styles.shape}></div>
          <p
      className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
      </p>
      <h2><strong>Python</strong></h2> Python is a object-oriented, high-level programming language that is very popular and often reccomended for beginners looking to learn their first programming language. Apps such as Spotify, Google Search and Instagram use Python for its speed, efficiency and easy maintenance of their respective apps. The programming language is easy to learn, unlike C++ or Java{' '}
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:w-4/5 lg:gap-6 lg:justify-center lg:mx-auto xl:grid xl:grid-cols-2 xl:w-4/5 xl:gap-6 xl:justify-center 2xl:mx-auto 2xl:grid 2xl:grid-cols-2 2xl:w-4/5 2xl:gap-6 2xl:justify-center xl:mx-auto md:grid md:grid-cols-2 md:gap-4 md:mx-auto">
        <section className="bg-blue-500 rounded-xl" id='one'>
        <Section1Image
          src="/python-intro.webp"
          width={1000}
          height={760}
          alt="Section 2 image">
          </Section1Image>
        <h2>Introduction to Python</h2>
        In the introduction of Python, it includes topics such as installation, running your first Python program and understanding the syntax for Python. After gaining the foundation skills to use Python, we can begin to use Python for small animation, app and interactive projects.
        </section>

        <section className='bg-purple-500 rounded-xl' id='two'>
        <Section2Image
        src="/more-python.webp"
          width={1000}
          height={760}
          alt="Section 2 image">
        </Section2Image>
        <h2>More Python</h2>
        This is the next step up from the Introduction to Scratch. In this section, you will create apps, games if...then conditions and variables. Using the skills you built on in the beginning, the projects can become more complex, which will display your higher levels of programming skills.
        </section>
        </div>
      </div>
    </main>
    );
  }