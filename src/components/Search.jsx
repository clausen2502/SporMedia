import React from 'react'
import Banner from '../assets/Banner2.png'
import { IoSearchOutline } from "react-icons/io5";

const tags = [
  { id: 1, name: "Allt" },
  { id: 2, name: "Íþróttalið" },
  { id: 3, name: "Fyrirtæki" }
];

function Search({ selectedTag }) {              // <-- add prop
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div className='flex justify-center mt-10 flex-col px-[70] md:px-[200px]'>
      <img src={Banner} alt="Banner" className='rounded-2xl' />
      <div className="bg-white shadow-lg p-3 rounded-lg mt-[-20px] mx-[25%] flex items-center">
        <IoSearchOutline className="text-[20px] text-gray-400"/>
        <input type="text" placeholder='Leita...' className="outline-none ml-2"/>
      </div>

      <div className='flex gap-10 justify-center mt-5'>
        {tags.map((item, index) => (
          <ul
            key={item.id}
            onClick={() => {                       // <-- notify parent
              setActiveIndex(index);
              selectedTag && selectedTag(item.name);
            }}
            className={`${index == activeIndex
              ? 'bg-[var(--color--brown)] text-white' : ''} p-1 pb-2 rounded-sm md:rounded-full cursor-pointer md:px-4
              hover:scale-110 transition-all duration-100 ease-in-out`}
          >
            <li>{item.name}</li>
          </ul>
        ))}
      </div>
    </div>
  )
}

export default Search
