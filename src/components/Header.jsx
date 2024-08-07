import React from "react";

const Header = ({ search }) => {
  return (
    <div className="flex flex-col items-center text-center py-28 lg:px-0 px-5 text-white bg-gradient-to-t from-transparent via-sky-900 to-black">
      <h1 className="lg:text-9xl md:text-8xl text-5xl font-extrabold ">JOMOVIE</h1>
      <h5 className="lg:text-xl  mb-4 max-w-2xl">
        Temukan Beragam Detail Film Terkini dan Terlengkap! Nikmati Akses Yang
        Diambil dari Database TDM! Jelajahi Informasi Film yang Mengagumkan
        Sekarang!
      </h5>
      <input
        placeholder="Judul Film yang ingin dicari ..."
        className="w-full max-w-md p-2 rounded-md text-black outline-none focus:ring-2 focus:ring-blue-300"
        onChange={({ target }) => search(target.value)}
      />
    </div>
  );
};

export default Header;
