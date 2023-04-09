'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import HaikuDisplay from '../components/HaikuDisplay';
import axios from 'axios';

const Home: React.FC = () => {
  const [theme, setTheme] = useState('');
  const [haiku, setHaiku] = useState('');

  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.value);
  };

  const generateHaiku = async () => {
    if (theme) {
      const res = await axios({
        url: 'http://localhost:3000/api/haiku',
        method: 'post',
        data: {
          theme,
        },
      });
      setHaiku(res.data.haiku);
    } else {
      alert('Please enter a theme.');
    }
  };

  return (
    <div className="container mx-auto px-4">
      <Header />
      <main className="text-center mt-8">
        <input
          className="border-2 border-indigo-500 rounded-md p-2 text-black"
          type="text"
          value={theme}
          onChange={handleThemeChange}
          placeholder="Enter a theme"
        />
        <button
          className="bg-indigo-500 text-white px-4 py-2 rounded-md ml-4"
          onClick={generateHaiku}
        >
          Generate Haiku
        </button>
      </main>
      <HaikuDisplay haiku={haiku} />
    </div>
  );
};

export default Home;
