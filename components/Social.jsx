// import Link from "next/link";

// import {FaGithub, FaLinkedinIn, FaYoutube, FaTwitter} from 'react-icons/fa';

// const socials = [
//     {icon: <FaGithub />, path: "https://github.com/devesh813"},
//     {icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/devesh-borkar-23ab3621a/"},
//     {icon: <FaYoutube />, path: ""},
//     {icon: <FaTwitter />, path: "https://x.com/borkar_devesh"},

// ];

// const Social = ({containerStyles,iconStyles}) => {
//     return (
//         <div className={containerStyles}>
//             {socials.map((item, index) => {
//                 return (
//                     <Link key={index} href={item.path} className={iconStyles}>
//                         {item.icon}
//                     </Link>
//                 );
//             })}
//         </div>
//     );
// };

// export default Social;

import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
// import LeetCodeIcon from './LeetCodeIcon'; // Adjust the path as needed

const socials = [
  { icon: <FaGithub />, path: "https://github.com/devesh813" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/devesh-borkar-23ab3621a/" },
//   { icon: <LeetCodeIcon />, path: "https://leetcode.com/devesh813" }, // Replace with your LeetCode profile URL
  { icon: <FaTwitter />, path: "https://x.com/borkar_devesh" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
