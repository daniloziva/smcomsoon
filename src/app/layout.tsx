import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Coming Soon',
  description: 'Something amazing is coming soon!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
        <Script src="https://code.jquery.com/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        <Script src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js" strategy="afterInteractive" />
        <Script id="mailchimp-init" strategy="afterInteractive">
          {`(function($) {
            window.fnames = new Array();
            window.ftypes = new Array();
            fnames[0]='EMAIL';ftypes[0]='email';
            fnames[1]='FNAME';ftypes[1]='text';
            fnames[4]='PHONE';ftypes[4]='phone';
            fnames[2]='LNAME';ftypes[2]='text';
            fnames[3]='ADDRESS';ftypes[3]='address';
            fnames[5]='BIRTHDAY';ftypes[5]='birthday';
            fnames[6]='COMPANY';ftypes[6]='text';
          }(jQuery));var $mcj = jQuery.noConflict(true);`}
        </Script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
