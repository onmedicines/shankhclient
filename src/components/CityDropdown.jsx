import { useState, useEffect, useRef } from "react";

// Create a new Dropdown component
const CityDropdown = ({ value, onChange, cities, label, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

  // Filter cities based on search term
  const filteredCities = cities.filter((city) => city.city.toLowerCase().startsWith(searchTerm.toLowerCase()) || city.code.toLowerCase().startsWith(searchTerm.toLowerCase()));

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle city selection
  const handleCitySelect = (city) => {
    setSearchTerm(city.city);
    onChange(city.code);
    setIsOpen(false);
  };

  return (
    <div className="space-y-2" ref={dropdownRef}>
      <label className="block text-blue-900 font-medium">{label}</label>
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          className="w-full p-2 border border-blue-200 rounded focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
        />

        {/* Dropdown Menu */}
        {isOpen && searchTerm && (
          <div className="absolute z-50 w-full mt-1 bg-white border border-blue-200 rounded-md shadow-lg max-h-60 overflow-auto">
            {filteredCities.length > 0 ? (
              filteredCities.map((city) => (
                <div key={city.code} className="p-2 hover:bg-orange-50 cursor-pointer" onClick={() => handleCitySelect(city)}>
                  <div className="font-medium text-blue-900">{city.city}</div>
                  <div className="text-sm text-blue-600">{city.code}</div>
                </div>
              ))
            ) : (
              <div className="p-2 text-gray-500">No cities found</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CityDropdown;
