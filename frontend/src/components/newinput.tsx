import { Search } from "lucide-react";

export default function SearchInput() {
  return (
    <div className="bg-[#2F3A4D] p-2 rounded-lg flex items-center w-full max-w-full mx-auto">
      <Search className="text-gray-400 mr-2" />
      <input
        type="text"
        placeholder="Search by username or first name..."
        className="bg-transparent text-gray-300 placeholder-gray-400 focus:outline-none w-full"
      />
    </div>
  );
}
