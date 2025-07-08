'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Home', icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2.5 7.5L10 2.5L17.5 7.5V17.5C17.5 17.7652 17.3946 18.0196 17.2071 18.2071C17.0196 18.3946 16.7652 18.5 16.5 18.5H3.5C3.23478 18.5 2.98043 18.3946 2.79289 18.2071C2.60536 18.0196 2.5 17.7652 2.5 17.5V7.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.5 18.5V10H12.5V18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ) },
  { href: '/missions', label: 'Deal Tips', icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 2.5L2.5 6.25V10C2.5 14.1667 5.41667 17.9167 10 18.75C14.5833 17.9167 17.5 14.1667 17.5 10V6.25L10 2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ) },
  { href: '/win-loss', label: 'Win-Loss', external: true, icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 10H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 5H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 15H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2.5 10H7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2.5 5H7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2.5 15H7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ) },
];

const klueIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="22"
    viewBox="0 0 20 22"
    fill="none"
  >
    <path
      d="M19.9999 5.82319C20.0069 9.17666 18.7842 12.386 16.6027 14.6548L12.0628 19.3338C11.9643 19.4353 11.8463 19.516 11.7162 19.5714C11.5861 19.6268 11.4468 19.6559 11.3056 19.657C11.0152 19.657 10.7362 19.5422 10.5317 19.3338L5.87974 14.5427C3.59334 12.2195 2.50654 8.91316 2.5 5.50329C2.5 4.54881 2.68434 3.60623 3.04163 2.73818C3.39891 1.87013 3.92135 1.09673 4.57973 0.46811L4.69173 0.34211C4.79973 0.22811 4.93173 0.14111 5.07873 0.0881096C5.22573 0.0351096 5.38473 -0.000890412 5.54673 -0.000890412L5.65873 0.00510959C5.81773 0.0121096 5.97273 0.0521096 6.11173 0.12211L14.7176 4.88755C14.8556 4.95755 14.9786 5.05955 15.0746 5.18355C15.1706 5.30755 15.2366 5.45155 15.2676 5.60255L15.2726 5.62655C15.3006 5.78055 15.2936 5.93755 15.2516 6.08755C15.2096 6.23755 15.1346 6.37655 15.0326 6.49555L9.89772 12.253C9.7963 12.3582 9.67653 12.4428 9.5447 12.502C9.41286 12.5612 9.27173 12.5938 9.12772 12.5976C8.83732 12.5976 8.55832 12.4828 8.35382 12.2744L3.81393 7.59546C3.70868 7.49404 3.62411 7.37427 3.56488 7.24243C3.50565 7.1106 3.47307 6.96947 3.46923 6.82546C3.46823 6.53506 3.58303 6.25606 3.79143 6.05156L3.90343 5.93956C3.90443 5.93856 3.90543 5.93756 3.90643 5.93656L8.25733 1.2582C8.29333 1.2182 8.33533 1.1832 8.38133 1.1542L8.43533 1.1232C8.44423 1.1182 8.45323 1.1142 8.46223 1.1092L8.46323 1.1082C8.51323 1.0822 8.56623 1.0612 8.62023 1.0452C8.94823 0.954204 9.29923 0.962204 9.62023 1.0692L17.3801 3.72263C17.4761 3.75463 17.5641 3.80563 17.6391 3.87263C17.7141 3.93963 17.7751 4.02063 17.8181 4.11163L17.8201 4.11763C17.9171 4.33163 17.9361 4.57763 17.8731 4.81163C17.8101 5.04563 17.6701 5.25363 17.4761 5.40163L10.0387 11.0261C9.91672 11.1241 9.77472 11.1921 9.62272 11.2241C9.47072 11.2561 9.31372 11.2511 9.16472 11.2091C8.86872 11.1241 8.63672 10.9081 8.56772 10.6071L8.56172 10.5841C8.50872 10.3721 8.54072 10.1471 8.65072 9.96111L12.5186 5.56777C12.5536 5.52877 12.5936 5.49577 12.6376 5.46777L12.6956 5.43477C12.7046 5.42977 12.7136 5.42577 12.7226 5.42077L12.7236 5.41977C12.7726 5.39377 12.8256 5.37277 12.8796 5.35677C13.2076 5.26577 13.5586 5.27377 13.8796 5.38077L19.5315 7.41124C19.6275 7.44324 19.7155 7.49424 19.7905 7.56124C19.8655 7.62824 19.9265 7.70924 19.9695 7.80024L19.9715 7.80624C20.0685 8.02024 20.0875 8.26624 20.0245 8.50024C19.9615 8.73424 19.8215 8.94224 19.6275 9.09024L12.1901 14.7147C12.0681 14.8127 11.9261 14.8807 11.7741 14.9127C11.6221 14.9447 11.4651 14.9397 11.3161 14.8977C11.0201 14.8127 10.7881 14.5967 10.7191 14.2957L10.7131 14.2727C10.6601 14.0607 10.6921 13.8357 10.8021 13.6497L11.516 12.5168L14.6369 8.97138C14.6719 8.93238 14.7119 8.89938 14.7559 8.87138L14.8139 8.83838C14.8229 8.83338 14.8319 8.82938 14.8409 8.82438L14.8419 8.82338C14.8909 8.79738 14.9439 8.77638 14.9979 8.76038C15.3259 8.66938 15.6769 8.67738 15.9979 8.78438L17.7048 9.39031C17.9942 9.48978 18.2329 9.71531 18.3378 10.0094C18.4427 10.3036 18.3995 10.6309 18.2218 10.8801L10.7834 21.0025C10.682 21.1445 10.5471 21.2604 10.3923 21.3392C10.2376 21.418 10.0681 21.4568 9.89745 21.4526C9.55835 21.4391 9.25684 21.2619 9.09135 20.9755L9.07335 20.9445C8.90535 20.6545 8.92435 20.3115 9.12435 20.0645L12.4412 16.0359L12.7842 15.6269L19.3499 7.00048C19.3519 6.99848 19.3539 6.99648 19.3559 6.99448C19.6413 6.64368 19.7891 6.20818 19.7719 5.77058C19.7547 5.33298 19.5743 4.92058 19.2679 4.62158L10.662 0.00510959L10.549 -0.000890412C10.388 -0.000890412 10.229 0.0341096 10.082 0.0871096C9.93502 0.14011 9.80302 0.22711 9.69502 0.34111L9.58302 0.46711C8.92463 1.09573 8.4022 1.86913 8.04492 2.73718C7.68763 3.60523 7.50329 4.54781 7.50329 5.50229C7.49629 8.85576 8.71899 12.0652 10.9005 14.334L11.0005 14.434C11.0005 14.434 11.0005 14.434 11.0005 14.434L15.6525 19.2251C15.857 19.4335 16.136 19.5483 16.4264 19.5483C16.5676 19.5472 16.7069 19.5181 16.837 19.4627C16.9671 19.4073 17.0851 19.3266 17.1835 19.2251L18.8204 17.5452"
      stroke="currentColor"
      strokeWidth="1.5"
    ></path>
  </svg>
);

const searchIcon = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.5 17.5L13.875 13.875"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="w-[195px] bg-[#fdfcfc] flex flex-col justify-between pb-5">
      {/* Top Section */}
      <div>
        {/* Header */}
        <div className="flex items-center gap-1 px-3 pt-5 pb-3">
          {/* Logo Placeholder */}
          <div className="w-[22px] h-[22px] bg-gray-200 rounded" />
          <span className="font-semibold text-xl">Klue</span>
          <button className="ml-auto p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-gray-600"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <button className="p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-gray-600"
            >
              <circle cx="12" cy="12" r="1" />
              <circle cx="19" cy="12" r="1" />
              <circle cx="5" cy="12" r="1" />
            </svg>
          </button>
        </div>
        {/* Search */}
        <div className="px-3 mb-2">
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#464646]">
              {searchIcon}
            </span>
            <input
              type="text"
              placeholder="Search"
              className="w-full h-10 pl-10 pr-10 rounded-lg border border-neutral-200 text-sm font-semibold text-[#464646] placeholder:text-[#464646] focus:outline-none"
            />
          </div>
        </div>
        {/* Nav List */}
        <ul className="mt-1">
          {navItems.map((item) => {
            const active = pathname === item.href;
            const classes = active
              ? 'bg-[#f2f3ff] text-[#3751ff]'
              : 'text-[#464646] hover:bg-gray-100';
            return (
              <li key={item.label}>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-2 py-2 rounded-lg mx-2 ${classes}`}
                  >
                    {item.icon}
                    <span className="text-sm font-semibold">{item.label}</span>
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className={`flex items-center gap-2 px-2 py-2 rounded-lg mx-2 ${classes}`}
                  >
                    {item.icon}
                    <span className="text-sm font-semibold">{item.label}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      {/* Bottom Section */}
      <div className="px-3 space-y-3">
        {/* Help */}
        <Link href="#" className="flex items-center gap-2 px-2 py-2 rounded-lg mx-2 text-[#464646] hover:bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          <span className="text-sm font-semibold flex-1">Help</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 text-gray-600"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </Link>
        {/* Profile */}
        <div className="flex items-center gap-4 px-3">
          <div className="relative">
            <img
              src="http://localhost:3845/assets/2ee2ee847e46e89ca6469f6cdc104f1d8e9a99a4.png"
              alt="avatar"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="absolute right-0 top-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-white" />
          </div>
          <div className="leading-tight">
            <p className="text-[#011627] font-semibold text-sm">Jesse Korzan</p>
            <p className="text-xs text-[#717171] font-medium">Sign Out</p>
          </div>
        </div>
      </div>
    </nav>
  );
} 