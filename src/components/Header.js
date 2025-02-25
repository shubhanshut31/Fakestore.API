import { useState } from "react";

const Header = ({ cartCount, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <header className="p-4 flex justify-between bg-gray-900 text-white">
      <h1 className="text-xl font-bold">My Store</h1>
      <input
        type="text"
        placeholder="Search categories..."
        className="p-2 text-black"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="relative">
        🛒 <span className="absolute top-0 right-0 bg-red-500 text-white px-2 rounded-full">{cartCount}</span>
      </div>
    </header>
  );
};

export default Header;
