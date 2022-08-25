import './App.css';
import { useState } from 'react';
import { getData } from './data.js';
import Character from './Character';
import image from './malakbt-lichking-wotlk-02.jpg';

function App() {
  const char = getData();
  const select = (obj, param) => {
    let t = param ? obj[param] : obj;
    return t[Math.floor(Math.random() * t.length)];
  };
  const [final, setFinal] = useState();
  const randomize = () => {
    let c = {
      faction: '',
      race: '',
      sex: '',
      class: '',
    };
    c.faction = select(char.faction);
    c.race = select(char.race, c.faction);
    c.sex = select(['Male', 'Female']);
    c.class = select(char.class, c.race);
    setFinal(c.sex + ' ' + c.race + ' ' + c.class);
  };

  return (
    <section className='flex flex-col items-center xl:justify-center justify-end md:my-50 bg-[#000D24] min-h-screen '>
      <div className='image-wrapper absolute lg:inset-0 top-0 bottom-[50%] left-0 right-0'>
        <img
          src={image}
          alt='Lich King'
          className='bg-cover bg-no-repeat bg-center w-full h-full'
        ></img>
      </div>
      <div className='container mb-0 md:mg-20 lg:mb-0 grid grid-rows-2 grid-cols-1 align-middle justify-items-center px-4 py-3 z-50'>
        <div className='flex flex-col items-center justify-center '>
          <h1 className='my-4 text-2xl text-center font-bold text-stone-100'>
            Click button to generate class!
          </h1>
          <button
            onClick={randomize}
            className='h-10 mb-10 px-6 font-bold rounded-md bg-[#C3EBEE] text-[#000D24]'
          >
            Click me
          </button>
        </div>

        <div className='content-wrapper h-612 min-auto w-500 flex flex-col items-center justify-start px-4 py-3'>
          <Character final={final} />
        </div>
      </div>
    </section>
  );
}

export default App;
