import React, { useState, MouseEvent } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const HomeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-full w-full"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.5 1.5 0 012.122 0l8.954 8.955M2.25 12l8.954 8.955a1.5 1.5 0 002.122 0l8.954-8.955M2.25 12h19.5" /></svg>;
const ChatHistoryIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-full w-full"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193l-3.722.247c-.527.035-1.002-.187-1.334-.572l-1.932-2.318a2.25 2.25 0 00-3.238 0l-1.932 2.318c-.332.385-.807.607-1.334.572l-3.722-.247A2.122 2.122 0 013 14.894v-4.286c0-.97.616-1.813 1.5-2.097" /></svg>;
const MemosIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-full w-full"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>;
const JournalIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-full w-full"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>;
const AtlasIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-full w-full"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21V3M4.28 9.747a9.005 9.005 0 0115.44 0M1.5 12a9.005 9.005 0 011.082-4.512m18.836 0A9.005 9.005 0 0122.5 12" /></svg>;
const IdeaBoxIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-full w-full"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-1.125a6.01 6.01 0 001.5-1.125M12 18.75a6.01 6.01 0 00-3-1.625m3 1.625a6.01 6.01 0 01-3-1.625M12 18.75v-5.25m0 0a6.01 6.01 0 01-1.5-1.125a6.01 6.01 0 01-1.5-1.125M12 3.75a6.01 6.01 0 013 1.625m-3-1.625a6.01 6.01 0 00-3 1.625M12 3.75v1.5m-3 6v-1.5m6 1.5v-1.5m-6 3.75v-1.5m6 1.5v-1.5m-3 3.75v-1.5" /></svg>;
const LogoutIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-full w-full"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" /></svg>;
const MenuIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-full w-full"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>;

const menuItems = [
  { icon: <HomeIcon />, label: 'Home', path: '/home' },
  { icon: <ChatHistoryIcon />, label: 'Chat History', path: '#' },
  { icon: <MemosIcon />, label: 'Favorited Memos', path: '#' },
  { icon: <JournalIcon />, label: 'My Life - Journal', path: '#' },
  { icon: <AtlasIcon />, label: 'My Atlas of Emotions', path: '#' },
  { icon: <IdeaBoxIcon />, label: 'Idea Box', path: '#' },
  { icon: <IdeaBoxIcon />, label: 'Checkin History', path: '/checkin-history' },
  { icon: <IdeaBoxIcon />, label: 'My Self', path: '/my-self' },
];

const SideBar: React.FC = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDrawer = () => setDrawerOpen(prev => !prev);

  const handleLogout = (e: MouseEvent) => {
    e.preventDefault();
    setDrawerOpen(false);
    navigate('/');
  };

  const handleNavigate = (path: string) => {
    if (path !== '#') {
      navigate(path);
      setDrawerOpen(false);
    }
  };

  const baseMenuItemClasses = "flex w-full cursor-pointer items-center gap-4 rounded-xl p-3 text-lg font-medium text-white transition-colors";
  const activeMenuItemClasses = "border-2 border-white bg-white/10 font-bold";
  const hoverMenuItemClasses = "hover:bg-white/20";

  return (
    <>
      <button
        onClick={toggleDrawer}
        className="fixed top-4 left-4 z-20 rounded-full bg-black/20 p-2 text-white backdrop-blur-sm md:hidden"
        aria-label="Abrir menu"
      >
        <div className="h-7 w-7"><MenuIcon /></div>
      </button>

      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={toggleDrawer}
          role="dialog"
          aria-modal="true"
        >
          <div className="absolute inset-0 bg-black/40 transition-opacity"></div>
          
          <aside
            className={`absolute inset-y-0 left-0 flex h-full w-72 flex-col bg-gradient-to-b from-[#8d53ff] to-[#5ddee6] p-4 shadow-xl transition-transform duration-300 ease-in-out ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-8 flex items-center gap-4">
              <button onClick={toggleDrawer} className="text-white">
                <div className="h-8 w-8"><MenuIcon /></div>
              </button>
              <span className="text-xl font-semibold text-white">Menu</span>
            </div>

            <ul className="flex flex-1 flex-col gap-2">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <li
                    key={item.label}
                    onClick={() => handleNavigate(item.path)}
                    className={`${baseMenuItemClasses} ${isActive ? activeMenuItemClasses : ''} ${hoverMenuItemClasses}`}
                  >
                    <div className="h-6 w-6 flex-shrink-0">{item.icon}</div>
                    <span>{item.label}</span>
                  </li>
                );
              })}
              <li className="my-4 cursor-pointer rounded-lg border-2 border-dashed border-white/80 p-3 text-center text-lg font-semibold text-white hover:border-white hover:bg-white/10">
                Surprise Me
              </li>
            </ul>
            
            <div className="space-y-4">
               <div onClick={handleLogout} title="Logout" className={`${baseMenuItemClasses} ${hoverMenuItemClasses}`}>
                  <div className="h-6 w-6 flex-shrink-0"><LogoutIcon /></div>
                  <span>Logout</span>
                </div>
              <div className="text-center">
                 <img src="/logo_happy_kids.png" alt="Logo" className="mx-auto h-20 w-20 object-contain rounded-full border-4 border-white bg-white shadow-md"/>
              </div>
            </div>
          </aside>
        </div>
      )}

      <nav className="hidden h-screen w-24 flex-shrink-0 flex-col items-center justify-between bg-gradient-to-b from-[#8d53ff] to-[#5ddee6] p-4 shadow-lg md:flex">
        <div className="flex flex-col items-center gap-8">
          <button onClick={toggleDrawer} className="text-white" aria-label="Abrir menu expandido">
            <div className="h-8 w-8"><MenuIcon /></div>
          </button>
          
          <ul className="flex flex-col items-center gap-6">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li
                  key={item.label}
                  title={item.label}
                  onClick={() => handleNavigate(item.path)}
                  className={`cursor-pointer rounded-lg p-3 transition-colors ${isActive ? 'bg-white/30' : ''} hover:bg-white/20`}
                >
                  <div className="h-7 w-7 text-white">{item.icon}</div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-col items-center gap-8">
          <div onClick={handleLogout} title="Logout" className="cursor-pointer rounded-lg p-3 text-white transition-colors hover:bg-white/20">
            <div className="h-7 w-7"><LogoutIcon /></div>
          </div>
          <img src="/logo_happy_kids.png" alt="Logo" className="h-12 w-12 object-contain rounded-full border-2 border-white bg-white" />
        </div>
      </nav>
    </>
  );
};

export default SideBar;