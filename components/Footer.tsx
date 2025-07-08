"use client";

import React from "react";
import { Separator } from "./ui/separator";
import Link from "next/link";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "All Tours", href: "/#tours" },
    { label: "Our Guides", href: "/about" },
    { label: "Vehicles", href: "/contact" },
    { label: "Blog", href: "/contact" },
    { label: "Contact", href: "/contact" },
  ];

  const legalLinks = [
    { label: "Resources", href: "/contact" },
    { label: "Privacy Statement", href: "/contact" },
    { label: "Terms and Conditions", href: "/contact" },
    { label: "Refund & Cancellation Policy", href: "/contact" },
    { label: "Risk & Liability Release", href: "/contact" },
  ];

  return (
    <footer className="bg-[#111827] pt-10 md:pt-16 pb-2">
      <div className="w-full max-w-[1238px] px-4 mx-auto relative flex flex-col justify-center">
        <div className="flex flex-wrap -mx-4">
          {/* Logo and Social Media Section */}
          <div className="w-full md:w-[30%] max-w-full px-4 mb-8 md:mb-0">
            <div className="mb-6">
              <Link href="/" className="relative">
                <div className="w-[227px] h-[100px] flex items-center justify-center bg-white/10 rounded-lg backdrop-blur-sm">
                  <span className="text-white font-bold text-2xl">MONUMENT VALLEY SAFARI</span>
                </div>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              {/* Facebook */}
              <Link 
                href="https://facebook.com" 
                className="text-white hover:text-[#fd0408] transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.0007 1.6665H12.5007C11.3956 1.6665 10.3358 2.10549 9.55437 2.88689C8.77297 3.66829 8.33398 4.7281 8.33398 5.83317V8.33317H5.83398V11.6665H8.33398V18.3332H11.6673V11.6665H14.1673L15.0007 8.33317H11.6673V5.83317C11.6673 5.61216 11.7551 5.4002 11.9114 5.24392C12.0677 5.08763 12.2796 4.99984 12.5007 4.99984H15.0007V1.6665Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              
              {/* Instagram */}
              <Link 
                href="https://instagram.com" 
                className="text-white hover:text-[#fd0408] transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.166 1.6665H5.83268C3.5315 1.6665 1.66602 3.53198 1.66602 5.83317V14.1665C1.66602 16.4677 3.5315 18.3332 5.83268 18.3332H14.166C16.4672 18.3332 18.3327 16.4677 18.3327 14.1665V5.83317C18.3327 3.53198 16.4672 1.6665 14.166 1.6665Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.3337 9.47476C13.4366 10.1683 13.3181 10.8766 12.9952 11.4989C12.6723 12.1213 12.1614 12.6259 11.5351 12.9412C10.9088 13.2564 10.1991 13.3661 9.5069 13.2547C8.81468 13.1433 8.17521 12.8165 7.67944 12.3207C7.18367 11.825 6.85685 11.1855 6.74546 10.4933C6.63408 9.80106 6.74379 9.09134 7.05901 8.46507C7.37423 7.83881 7.8789 7.32788 8.50123 7.00496C9.12356 6.68205 9.83187 6.56359 10.5254 6.66643C11.2328 6.77133 11.8878 7.10098 12.3935 7.60669C12.8992 8.11239 13.2288 8.76733 13.3337 9.47476Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14.584 5.4165H14.5923" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              
              {/* Twitter */}
              <Link 
                href="https://twitter.com" 
                className="text-white hover:text-[#fd0408] transition-colors duration-200"
                aria-label="Twitter"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.3327 3.33319C18.3327 3.33319 17.7493 5.08319 16.666 6.16652C17.9993 14.4999 8.83268 20.5832 1.66602 15.8332C3.49935 15.9165 5.33268 15.3332 6.66602 14.1665C2.49935 12.9165 0.416016 7.99986 2.49935 4.16652C4.33268 6.33319 7.16602 7.58319 9.99935 7.49986C9.24935 3.99986 13.3327 1.99986 15.8327 4.33319C16.7493 4.33319 18.3327 3.33319 18.3327 3.33319Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="w-full md:w-2/5 max-w-full px-4 mb-8 md:mb-0">
            <div className="font-bold text-lg text-white mb-6">Quick Links</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <Link 
                        href={link.href} 
                        className="text-base text-[#D1D5DB] hover:text-[#FD0408] transition-colors duration-200 block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <ul className="space-y-3">
                  {legalLinks.map((link, index) => (
                    <li key={index}>
                      <Link 
                        href={link.href} 
                        className="text-base text-[#D1D5DB] hover:text-[#FD0408] transition-colors duration-200 block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="w-full md:w-[30%] max-w-full px-4 mb-8 md:mb-0">
            <div className="font-bold text-lg text-white mb-6">Contact Us</div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="mr-3 mt-1 flex-shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.3332 14.0999V16.5999C18.3341 16.832 18.2866 17.0617 18.1936 17.2744C18.1006 17.487 17.9643 17.6779 17.7933 17.8348C17.6222 17.9917 17.4203 18.1112 17.2005 18.1855C16.9806 18.2599 16.7477 18.2875 16.5165 18.2666C13.9522 17.988 11.489 17.1117 9.32486 15.7083C7.31139 14.4288 5.60431 12.7217 4.32486 10.7083C2.91651 8.53426 2.04007 6.05908 1.76653 3.48325C1.7457 3.25281 1.77309 3.02055 1.84695 2.80127C1.9208 2.58199 2.03951 2.38049 2.1955 2.2096C2.3515 2.03871 2.54137 1.90218 2.75302 1.80869C2.96468 1.7152 3.19348 1.6668 3.42486 1.66658H5.92486C6.32928 1.6626 6.72136 1.80582 7.028 2.06953C7.33464 2.33324 7.53493 2.69946 7.59153 3.09992C7.69705 3.89997 7.89274 4.68552 8.17486 5.44158C8.28698 5.73985 8.31125 6.06401 8.24478 6.37565C8.17832 6.68729 8.02392 6.97334 7.79986 7.19992L6.74153 8.25825C7.92783 10.3445 9.65524 12.072 11.7415 13.2583L12.7999 12.1999C13.0264 11.9759 13.3125 11.8215 13.6241 11.755C13.9358 11.6885 14.2599 11.7128 14.5582 11.8249C15.3143 12.107 16.0998 12.3027 16.8999 12.4083C17.3047 12.4654 17.6744 12.6693 17.9386 12.9812C18.2029 13.2931 18.3433 13.6912 18.3332 14.0999Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <Link 
                  href="tel:4352205727" 
                  className="text-base text-[#D1D5DB] hover:text-[#FD0408] transition-colors duration-200"
                >
                  (435) 220-5727
                </Link>
              </li>
              
              <li className="flex items-start">
                <svg className="mr-3 mt-1 flex-shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.666 3.3335H3.33268C2.41221 3.3335 1.66602 4.07969 1.66602 5.00016V15.0002C1.66602 15.9206 2.41221 16.6668 3.33268 16.6668H16.666C17.5865 16.6668 18.3327 15.9206 18.3327 15.0002V5.00016C18.3327 4.07969 17.5865 3.3335 16.666 3.3335Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18.3327 5.8335L10.8577 10.5835C10.6004 10.7447 10.3029 10.8302 9.99935 10.8302C9.69575 10.8302 9.39829 10.7447 9.14102 10.5835L1.66602 5.8335" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <Link 
                  href="mailto:info@monumentvalleysafari.com" 
                  className="text-base text-[#D1D5DB] hover:text-[#FD0408] transition-colors duration-200 break-all"
                >
                  info@monumentvalleysafari.com
                </Link>
              </li>
              
              <li className="flex items-start">
                <svg className="mr-3 mt-1 flex-shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.6673 8.33317C16.6673 12.494 12.0515 16.8273 10.5015 18.1657C10.3571 18.2742 10.1813 18.333 10.0007 18.333C9.81999 18.333 9.64421 18.2742 9.49982 18.1657C7.94982 16.8273 3.33398 12.494 3.33398 8.33317C3.33398 6.56506 4.03636 4.86937 5.28661 3.61913C6.53685 2.36888 8.23254 1.6665 10.0007 1.6665C11.7688 1.6665 13.4645 2.36888 14.7147 3.61913C15.9649 4.86937 16.6673 6.56506 16.6673 8.33317Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 10.8335C11.3807 10.8335 12.5 9.71421 12.5 8.3335C12.5 6.95278 11.3807 5.8335 10 5.8335C8.61929 5.8335 7.5 6.95278 7.5 8.3335C7.5 9.71421 8.61929 10.8335 10 10.8335Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <Link 
                  href="https://www.google.com/maps/place/Indian+Route+42,+Oljato-Monument+Valley,+AZ+84536" 
                  className="text-base text-[#D1D5DB] hover:text-[#FD0408] transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Indian Route 42, Oljato-Monument Valley, AZ 84536, USA
                </Link>
              </li>
              
              <li className="flex items-start">
                <svg className="mr-3 mt-1 flex-shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 18.3332C14.6024 18.3332 18.3333 14.6023 18.3333 9.99984C18.3333 5.39746 14.6024 1.6665 10 1.6665C5.39763 1.6665 1.66667 5.39746 1.66667 9.99984C1.66667 14.6023 5.39763 18.3332 10 18.3332Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 5.8335V10.0002L13.3333 11.6668" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-base text-[#D1D5DB]">
                  7:00 AM - 7:00 PM Daily
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="w-full max-w-[1238px] px-4 mx-auto relative flex flex-col justify-center">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full max-w-full px-4 text-center">
            <div className="border-t border-white/10 py-7">
              <p className="text-[14px] text-white/50">
                © 2025 Monument Valley Safari. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}