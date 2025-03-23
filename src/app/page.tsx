'use client';

import Image from 'next/image';
import CountdownTimer from '@/components/CountdownTimer';
import { FaInstagram } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 relative overflow-hidden bg-gradient-to-br from-[#E5D3B7] via-[#D4BFA9] to-[#C4AB9D]">
      {/* Background pattern */}
      <div className="absolute inset-0 w-full h-full bg-[url('/grid.svg')] opacity-5" />
      
      {/* Animated background circles */}
      <div className="absolute top-0 -left-4 w-48 md:w-72 h-48 md:h-72 bg-[#E8DBC5] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob" style={{ WebkitBackdropFilter: 'blur(40px)' }} />
      <div className="absolute top-0 -right-4 w-48 md:w-72 h-48 md:h-72 bg-[#D6C2B0] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000" style={{ WebkitBackdropFilter: 'blur(40px)' }} />
      <div className="absolute -bottom-8 left-20 w-48 md:w-72 h-48 md:h-72 bg-[#C8B4A3] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000" style={{ WebkitBackdropFilter: 'blur(40px)' }} />

      <div className="relative w-full max-w-[90%] md:max-w-4xl">
        <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-3 sm:p-4 md:p-6 shadow-2xl border border-white/20" style={{ WebkitBackdropFilter: 'blur(16px)' }}>

          <div className="mt-0 w-64 sm:w-80 md:w-96 h-16 sm:h-20 md:h-24 mx-auto relative">
              <Image
                src="/smoqua.png"
                alt="Smoqua"
                fill
                className="object-contain"
                priority
              />
            </div>
          <div className="text-center mb-1">
            {/* Logo */}
            <div className="w-32 sm:w-40 md:w-48 h-16 sm:h-20 md:h-24 mx-auto mb-1 relative">
              <Image
                src="/logo.png"
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="text-base sm:text-lg md:text-xl text-[#6B5C50] opacity-90 px-2">
              Your kids will stop running around butt naked in:
            </p>
          </div>

          <div className="mb-4 md:mb-6">
            <CountdownTimer />
          </div>

          {/* Mailchimp Form */}
          <div className="max-w-md mx-auto mb-4 md:mb-6">
            <div className="text-center mb-2">
              <p className="text-base sm:text-lg md:text-xl text-[#6B5C50] opacity-90">
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
                    className="required email w-full px-4 py-2 rounded-lg bg-white/30 border border-white/30 text-[#4A3F35] placeholder-[#8B7B6E] focus:outline-none focus:ring-2 focus:ring-[#8B7B6E] transition-all text-center appearance-none"
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
                    className="w-full px-4 py-2 rounded-lg bg-white/30 border border-white/30 text-[#4A3F35] placeholder-[#8B7B6E] focus:outline-none focus:ring-2 focus:ring-[#8B7B6E] transition-all text-center appearance-none"
                    id="mce-FNAME"
                    placeholder="First Name"
                    style={{ WebkitAppearance: 'none', height: '42px' }}
                  />
                  <input
                    type="text"
                    name="PHONE"
                    className="w-full px-4 py-2 rounded-lg bg-white/30 border border-white/30 text-[#4A3F35] placeholder-[#8B7B6E] focus:outline-none focus:ring-2 focus:ring-[#8B7B6E] transition-all text-center appearance-none"
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

              <div className="flex justify-center">
                <button
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="px-6 py-2 bg-[#8B7B6E] text-white rounded-lg font-semibold hover:bg-[#7A6A5D] transition-all duration-200 shadow-lg appearance-none"
                  style={{ WebkitAppearance: 'none' }}
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
      </div>
    </main>
  );
} 