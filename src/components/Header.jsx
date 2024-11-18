import React from "react";

const Header = ({ search }) => {
  return (
    <div className="flex flex-col items-center text-center text-white w-2/3">
      <h1 className="lg:text-9xl md:text-8xl text-3xl font-extrabold ">JOMOVIE</h1>
      <h5 className=" lg:text-xl text-sm mb-4 max-w-2xl">
        Temukan Beragam Detail Film Terkini dan Terlengkap! Nikmati Akses Yang
        Diambil dari Database TDM! Jelajahi Informasi Film yang Mengagumkan
        Sekarang!
      </h5>

    </div>
  );
};

export default Header;
