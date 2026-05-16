import React from 'react';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold">Welcome to Rent-a-Car</h1>
      <p className="text-lg">Rent your dream car today!</p>
      <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Rent Now</button>
    </div>
  );
}

export default Home;