"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FOOTER_CONTACT_INFO, SOCIALS } from "@/constants";

interface InfoCardProps {
  pageType?: string;
}

const InfoCard = ({ pageType }: InfoCardProps) => {
  const emailInfo = FOOTER_CONTACT_INFO.links.find(link => link.label.toLowerCase().includes("e-mail"));
  const phoneinfo = FOOTER_CONTACT_INFO.links.find(link => link.label.toLowerCase().includes("telefon"));
  const secondphoneinfo = FOOTER_CONTACT_INFO.links.find(link => link.label.toLowerCase().includes("telefon2"));
  const addressInfo = FOOTER_CONTACT_INFO.links.find(link => link.label.toLowerCase().includes("adresse"));

  // Custom content for Reitverein page
  if (pageType === "reitverein") {
    return (
      <aside className="relative max-h-fit bg-primary shadow-md rounded-2xl p-6 space-y-4 text-sm text-white flex flex-col items-center text-center">
        <Image
          src="/Bosel-Logo.webp"
          alt="Logo"
          width={96}
          height={96}
          className="mb-2 h-auto w-24"
          loading="lazy"
        />
        <div className="h-[1px] w-[50%] bg-gold" />

        <p className="font-semibold text-base text-gold">
          Reitverein &quot;An der Bosel&quot; 
        </p>
        {addressInfo && (
        <p>
          {addressInfo.value.split(",").map((line, idx) => (
            <React.Fragment key={idx}>
              {line.trim()}
              <br />
            </React.Fragment>
          ))}
        </p>
      )}

        <div className="h-[1px] w-[50%] bg-gold" />

        <h3 className="font-semibold text-gold">Kontakt per E-Mail:</h3>
       
        
        
          <p>
            <a href="mailto:RSV.An.der.Bosel@gmx.de" className="text-gold underline">RSV.An.der.Bosel@gmx.de</a>
           
          </p>
      

        <div className="h-[1px] w-[50%] bg-gold" />

        <div>
          {SOCIALS.links.map((link, i) => (
            <Link href={link.href} key={i} target="_blank" rel="noopener noreferrer" className="inline-block mx-2 mt-3">
              <Image src={link.icon} alt="social" width={30} height={30} loading="lazy" />
            </Link>
          ))}
        </div>
      </aside>
    );
  }

  // Default content for other pages
  return (
    <aside className="relative max-h-fit bg-primary shadow-md rounded-2xl p-6 space-y-4 text-sm text-white flex flex-col items-center text-center">
      <Image
        src="/Bosel-Logo.webp"
        alt="Logo"
        width={96}
        height={96}
        className="mb-2 h-auto w-24"
        loading="lazy"
      />
      <div className="h-[1px] w-[50%] bg-gold" />

      <p className="font-semibold text-base text-gold">
        Reitsportanlage &quot;An der Bosel&quot;
      </p>

      {/* Adresse */}
      {addressInfo && (
        <p>
          {addressInfo.value.split(",").map((line, idx) => (
            <React.Fragment key={idx}>
              {line.trim()}
              <br />
            </React.Fragment>
          ))}
        </p>
      )}

      {/* Telefon */}
      {phoneinfo && (
        <p>
          Tel:{" "}
          <a href={`tel:${phoneinfo.value}`} className="text-gold underline">
            {phoneinfo.value}
          </a>
        </p>
        
      )}
      {/* Telefon2 */}
     {secondphoneinfo && (
     <p>
            Tel:{" "}
             <a href={`tel:${secondphoneinfo.value}`} className="text-gold underline">
             {secondphoneinfo.value}
           </a>
           </p> 
          ) }
      
      {/* E-Mail */}
      {emailInfo && (
        <p>
          Email:{" "}
          <Link href={`mailto:${emailInfo.value}`} target="_blank" className="text-gold underline">
            {emailInfo.value}
          </Link>
        </p>
      )}

      {/* Website */}
      <p>
        Website:{" "}
        <Link
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold underline"
        >
          www.reitanlage-bosel.de
        </Link>
      </p>
      <div>
        {SOCIALS.links.map((link, i) => (
          <Link href={link.href} key={i} target="_blank" rel="noopener noreferrer" className="inline-block mx-2 mt-3">
            <Image src={link.icon} alt="social" width={30} height={30} loading="lazy" />
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default InfoCard;
