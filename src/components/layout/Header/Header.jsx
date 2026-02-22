import "./Header.css";

const Header = () => {
  return (
    <header className="h-16 bg-white text-gray-900 border-b border-gray-300 flex items-center px-6">
      <div className="flex-1 font-semibold text-lg">
        EMS Admin
      </div>

      <div className="flex items-center gap-4">
        <span>My Profile</span>
      </div>
    </header>
  );
};

export default Header;
