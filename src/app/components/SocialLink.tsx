import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

interface Link {
  id: number;
  child: React.ReactNode;
  href: string;
  style?: string;
  download?: boolean;
}

const SocialLinks: React.FC = () => {
  const links: Link[] = [
    {
      id: 1,
      child: (
        <>
          <p className='pl-3 pr-2'>LinkedIn</p> <FaLinkedin size={18}  />
        </>
      ),
      href: 'https://www.linkedin.com/in/khushi-marothi/',
      style: 'rounded-tr-md ',
    },
    {
      id: 2,
      child: (
        <>
          <p className='pl-3'> Github </p> <FaGithub size={18} />
        </>
      ),
      href: 'https://github.com/khushimarothi',
    },
    {
      id: 3,
      child: (
        <>
         <p className='pl-3'> Mail </p> <HiOutlineMail size={18} />
        </>
      ),
      href: 'mailto:khushimarothi16@gmail.com',
    },
    {
      id: 4,
      child: (
        <>
          <p className='pl-3'> Resume </p> <BsFillPersonLinesFill size={18} />
        </>
      ),
      href: 'https://drive.google.com/file/d/1ToRLhqnQRbpXoNR7FSKk12kS8oQTZkm1/view?usp=sharing',
      style: 'rounded-br-md',
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed z-30">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex flex-row justify-center items-center w-28 h-10 px-2 py-4 ml-[-80px] text-sm  hover:ml-[-10px] hover:rounded-md duration-300 bg-gradient-to-r from-gray-800 to-gray-700" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
