"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  NAV_LINKS,
  FOOTER_CONTACT_INFO,
  SOCIALS,
} from "@/constants";
import { FC } from 'react';
import Backlinks from './Backlinks';

const Footer: FC = () => {
  const [firstSection, secondSection, ...restSections] = NAV_LINKS;

  return (
    <footer className="bg-primary text-background">
      <Backlinks />
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 md:pt-6 pb-4 md:pb-6">
        {/* Footer Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-2 sm:col-span-1 text-center sm:text-left"
          >
            <Link href="/">
              <Image
                src="/Bosel-Logo.webp"
                width={150}
                height={30}
                alt="logo"
                className="mx-auto sm:mx-0"
                loading="lazy"
              />
            </Link>
            <p className="text-sm text-muted mt-5 leading-relaxed hidden sm:block">
            </p>
          </motion.div>

          {/* 1. First section */}
          <div>
            <Link href={firstSection.href} className="font-semibold underline text-gold hover:text-gold-hover mb-4 block">
              {firstSection.label}
            </Link>
            <ul className="space-y-1 mt-2">
              {firstSection.sublinks?.map((sublink) => (
                <li key={sublink.key}>
                  <Link href={sublink.href} className="text-sm pl-1 hover:underline">
                    {sublink.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 2. Second section */}
          <div>
            <Link href={secondSection.href} className="font-semibold text-gold underline mb-4 block">
              {secondSection.label}
            </Link>
            <ul className="space-y-1 mt-2">
              {secondSection.sublinks?.map((sublink) => (
                <li key={sublink.key}>
                  <Link href={sublink.href} className="text-sm pl-1 hover:underline">
                    {sublink.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Rest of the main links */}
          <div>
            <h4 className="font-semibold text-gold mb-2">Weitere Links</h4>
            <ul className="space-y-1">
              {restSections.map((link) => (
                <li key={link.key}>
                  <Link href={link.href} className="text-sm hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/impressum" className="text-sm hover:underline">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-sm hover:underline">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. Contact Info */}
          <div>
            <h4 className="font-semibold text-gold mb-2">{FOOTER_CONTACT_INFO.title}</h4>
            <ul className="text-sm space-y-2">
              {FOOTER_CONTACT_INFO.links.map(({ label, value }) => (
                <li key={label}>
                  <span>{label}:</span>{" "}
                  {label.toLowerCase().replace(/[^a-z]/g, "").includes("email") ? (
                    <Link href={`mailto:${value}`} target="_blank" className="text-gold underline">
                      {value}
                    </Link>
                  ) : (
                    <span className="text-gold">{value}</span>
                  )}
                </li>
              ))}
            </ul>
            <div>
              {SOCIALS.links.map((link, i) => (
                <Link href={link.href} key={i} target="_blank" rel="noopener noreferrer" className="inline-block m-2">
                  <Image src={link.icon} alt="social" width={24} height={24} loading="lazy" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center text-sm text-muted-backgound mt-10 border-t border-gold pt-4">
          © {new Date().getFullYear()} Reitsportanlage An der Bosel. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
