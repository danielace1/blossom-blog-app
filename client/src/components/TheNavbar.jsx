import { useState } from "react";

const TheNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      <div className="flex items-center gap-3 text-2xl font-bold">
        <img src="/logo.png" alt="blossom blog" className="size-12" />
        <span>Blossom Blog</span>
      </div>

      {/* mobile nav */}
      <div className="md:hidden">
        <div className="cursor-pointer">{open ? "X" : "-"}</div>
      </div>

      {/* desktop nav */}
      <div className="hidden md:flex"></div>
    </div>
  );
};

export default TheNavbar;
