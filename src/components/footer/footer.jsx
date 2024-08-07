// import React from "react";
// import {
//   InstagramLogo,
//   XLogo,
//   GithubLogo,
//   GoogleLogo,
//   FacebookLogo,
//   TiktokLogo,
// } from "@phosphor-icons/react";

// export const Footer = () => {
//   return (
//     <>
//       <footer>
//         <div>
//           <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
//             Products
//           </h6>
//           <ul class="space-y-2">
//             <li>
//               <a href="#!">Angular</a>
//             </li>
//             <li>
//               <a href="#!">React</a>
//             </li>
//             <li>
//               <a href="#!">Vue</a>
//             </li>
//             <li>
//               <a href="#!">Laravel</a>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
//             Useful links
//           </h6>
//           <ul class="space-y-2">
//             <li>
//               <a href="#!">Pricing</a>
//             </li>
//             <li>
//               <a href="#!">Settings</a>
//             </li>
//             <li>
//               <a href="#!">Orders</a>
//             </li>
//             <li>
//               <a href="#!">Help</a>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
//             Contact
//           </h6>
//           <ul class="space-y-4">
//             <li class="flex items-center justify-center md:justify-start">
//               <i class="ph-map-pin text-xl me-2"></i>
//               New York, NY 10012, US
//             </li>
//             <li class="flex items-center justify-center md:justify-start">
//               <i class="ph-envelope text-xl me-2"></i>
//               info@example.com
//             </li>
//             <li class="flex items-center justify-center md:justify-start">
//               <i class="ph-phone text-xl me-2"></i>
//               +01 234 567 88
//             </li>
//             <li class="flex items-center justify-center md:justify-start">
//               <i class="ph-mobile text-xl me-2"></i>
//               +01 234 567 89
//             </li>
//           </ul>
//         </div>
//         /*{" "}
//         <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col md:flex-row items-center justify-between">
//           <span className="text-white font-normal">
//             © 2024{" "}
//             <a href="#" className="hover:underline hover:decoration-white">
//               Happy Pets™
//             </a>
//             . All Rights Reserved.
//           </span>
//           <ul className="flex flex-wrap items-center mt-3 font-normal text-white space-x-6 md:mt-0">
//             <li>
//               <a href="#" className="hover:underline hover:decoration-white">
//                 <InstagramLogo size={32} color="#ffffff" />
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:underline hover:decoration-white">
//                 <XLogo size={32} color="#ffffff" />
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:underline hover:decoration-white">
//                 <GithubLogo size={32} color="#ffffff" />
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:underline hover:decoration-white">
//                 <GoogleLogo size={32} color="#ffffff" />
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:underline hover:decoration-white">
//                 <FacebookLogo size={32} color="#ffffff" />
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:underline hover:decoration-white">
//                 <TiktokLogo size={32} color="#ffffff" />
//               </a>
//             </li>
//           </ul>
//         </div>
//       </footer>
//     </>
//   );
// };

import React from "react";
import {
  FacebookLogo,
  XLogo,
  TiktokLogo,
  InstagramLogo,
  GithubLogo,
  Envelope,
  Phone,
  MapPin,
} from "@phosphor-icons/react";

export const Footer = () => {
  return (
    <footer className="bg-zinc-50 text-center text-surface/75 dark:bg-neutral-700 dark:text-white/75 lg:text-left">
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-white/10 lg:justify-between">
        <div className="me-12 hidden lg:block">
          <span className="font-bold text-xl">
            Get connected with us on social networks:
          </span>
        </div>
        <div className="text-center text-xl">
          <span>© 2023 Copyright:</span>
          <a className="font-semibold" href="#">
            Happy Pets™
          </a>
        </div>

        <div className="flex justify-center">
          <a href="#!" className="me-6">
            <FacebookLogo size={32} color="#ffffff" />
          </a>
          <a href="#!" className="me-6">
            <XLogo size={32} color="#ffffff" />
          </a>
          <a href="#!" className="me-6">
            <InstagramLogo size={32} color="#ffffff" />
          </a>
          <a href="#!" className="me-6">
            <GithubLogo size={32} color="#ffffff" />
          </a>
          <a href="#!" className="me-6">
            <TiktokLogo size={32} color="#ffffff" />
          </a>
          <a href="#!">
            <Envelope size={32} color="#ffffff" />
          </a>
        </div>
      </div>

      <div className="mx-6 py-1 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h6 className="mb-4 flex items-center justify-center font-bold uppercase md:justify-start">
              <span className="me-3">
                <MapPin className="h-4 w-4" />
              </span>
              Happy Pets
            </h6>
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>

          <div>
            <h6 className="mb-4 flex justify-center font-bold uppercase md:justify-start">
              Products
            </h6>
            <p className="mb-4">
              <a href="#!">Pets</a>
            </p>
            <p className="mb-4">
              <a href="#!">Dog Foods</a>
            </p>
            <p className="mb-4">
              <a href="#!">Accessories</a>
            </p>
          </div>

          <div>
            <h6 className="mb-4 flex justify-center font-bold uppercase md:justify-start">
              Useful links
            </h6>
            <p className="mb-4">
              <a href="#!">Pricing</a>
            </p>
            <p className="mb-4">
              <a href="#!">Settings</a>
            </p>
            <p>
              <a href="#!">Help</a>
            </p>
          </div>

          <div>
            <h6 className="mb-4 flex justify-center font-bold uppercase md:justify-start">
              Contact
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <span className="me-3">
                <MapPin className="h-5 w-5" />
              </span>
              Maputo, MZ
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <span className="me-3">
                <Envelope className="h-5 w-5" />
              </span>
              happypets@gmail.com
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <span className="me-3">
                <Phone className="h-5 w-5" />
              </span>
              +258 84 7640 433 / +258 86 8190 151
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
