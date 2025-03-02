import React from 'react';
import { AiFillHeart } from 'react-icons/ai';

interface CopyrightProps {
  year: number;
  author: string;
}

const Copyright: React.FC<CopyrightProps> = ({ year, author }) => {
  return (
    <p className="pt-8 text-center text-xs font-light text-slate-500">
      Copyright by Snowdrop {year}. Created with{' '}
      <AiFillHeart className="inline-block align-text-top" /> by{' '}
      <a
        href="https://github.com/PawelNiedzwiecki"
        target="_blank"
        rel="noreferrer"
      >
        {author}
      </a>
    </p>
  );
};

export default Copyright;
