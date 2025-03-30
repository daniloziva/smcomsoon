'use client';

import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 relative overflow-hidden bg-white">
      {/* Background pattern */}
      <div className="absolute inset-0 w-full h-full bg-[url('/grid.svg')] opacity-5" />
      
      <div className="container mx-auto px-4 py-8">
        {/* Smoqua image with fixed size and large bottom margin */}
        <div className="flex justify-center mb-12">
          <div className="relative w-[500px] sm:w-[600px] md:w-[700px] h-[250px] sm:h-[350px] md:h-[400px]">
            <Image
              src="/smoqua.png"
              alt="Smoqua"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Mailchimp Form */}
        <div className="max-w-md mx-auto w-full">
          <div className="text-center mb-2">
            <p className="text-base sm:text-lg md:text-xl text-black opacity-90">
              Drop your email to get notified
            </p>
          </div>
          <form
            action="https://diligaf.us4.list-manage.com/subscribe/post?u=65c9482759ffc91feb07c7d5e&amp;id=f2dd847475&amp;f_id=0026a7e2f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate flex flex-col gap-3 w-full"
            target="_blank"
          >
            <div className="flex flex-col gap-2 w-full">
              <div className="flex flex-col w-full">
                <input
                  type="email"
                  name="EMAIL"
                  className="required email w-full px-4 py-2 rounded-lg bg-white/30 border-2 border-black text-black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-black transition-all text-center appearance-none"
                  id="mce-EMAIL"
                  required
                  placeholder="Email Address *"
                  style={{ WebkitAppearance: 'none', height: '42px' }}
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-2 w-full">
                <input
                  type="text"
                  name="FNAME"
                  className="w-full px-4 py-2 rounded-lg bg-white/30 border-2 border-black text-black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-black transition-all text-center appearance-none"
                  id="mce-FNAME"
                  placeholder="First Name"
                  style={{ WebkitAppearance: 'none', height: '42px' }}
                />
                <input
                  type="text"
                  name="PHONE"
                  className="w-full px-4 py-2 rounded-lg bg-white/30 border-2 border-black text-black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-black transition-all text-center appearance-none"
                  id="mce-PHONE"
                  placeholder="Phone Number"
                  style={{ WebkitAppearance: 'none', height: '42px' }}
                />
              </div>
            </div>

            {/* Bot protection - do not remove */}
            <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
              <input type="text" name="b_65c9482759ffc91feb07c7d5e_f2dd847475" tabIndex={-1} value="" />
            </div>

            <div className="flex justify-center w-full">
              <button
                type="submit"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="px-8 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200 shadow-lg appearance-none !mx-auto !left-0 !right-0 !transform-none !relative"
                style={{ 
                  WebkitAppearance: 'none',
                  margin: '1em 0 1em 0%'
                }}
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

        {/* Social links */}
        <div className="flex justify-center space-x-6">
          <a href="https://www.instagram.com/smoqua_/" className="text-[#6B5C50] hover:text-[#4A3F35] transition-colors duration-200">
            <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </div>
      </div>
    </main>
  );
} 