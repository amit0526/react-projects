import React from 'react'

const HeroText = () => {
  return (
    <div className="h-full  flex flex-col justify-between w-1/3  ">
      <div className="p-6">
        <h3 className=" mb-7 text-6xl font-medium italic">
          Prospective <br />
          <span>customer</span>
          <br /> segmentation
        </h3>
        <p className="w-[90%]text-lg font-medium text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
          inventore voluptatem eos laborum ab eligendi iste exercitationem optio
          soluta nesciunt.
        </p>
      </div>
    </div>
  );
}

export default HeroText