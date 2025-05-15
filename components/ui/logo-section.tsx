import React from "react";

export default function LogoSection() {
  return (
    <section className="bg-[#2a0036] py-12 px-0 text-center w-full mt-[15px] overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
        Join the <span className="font-bold">100+</span> businesses thriving with MyPass
      </h2>
      <p className="text-white/80 max-w-4xl mx-auto my-10">
        Trusted by leading Organizations to transform their training programs. Whether you're a growing startup or an enterprise, our SaaS LMS helps you deliver impactful learning at scale.
      </p>
      <div className="w-full mt-8 relative">
        <div className="flex animate-scroll">
          <img
            src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Kprice_white_logo_b65f8622-573e-4dc8-ae6f-60b9df2364a1.png"
            alt="All Client Logos"
            className="w-full h-auto max-h-28 object-contain"
          />
          <img
            src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/Kprice_white_logo_b65f8622-573e-4dc8-ae6f-60b9df2364a1.png"
            alt="All Client Logos"
            className="w-full h-auto max-h-28 object-contain"
          />
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
          display: flex;
          width: 200%;
        }
      `}</style>
    </section>
  );
} 