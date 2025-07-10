import React, { useState, MouseEvent } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const menuItems = [
  {
    label: 'Home',
    route: '/home',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-8 w-8">
        <path d="M3 11.5V20a1 1 0 001 1h5.5V15h5v6H20a1 1 0 001-1v-8.5a1 1 0 00-.293-.707l-7-7a1 1 0 00-1.414 0l-7 7A1 1 0 003 11.5z" />
      </svg>
    ),
  },
  {
    label: 'Chat History',
    route: '/chat-history',
    icon: <img src="/menu-icons/icon_chat_history.svg" alt="Chat History" className="h-8 w-8 object-contain" />,
  },
  {
    label: 'Favorited Memos',
    route: '/mymemos',
    icon: <img src="/menu-icons/icon_memos.svg" alt="Favorited Memos" className="h-8 w-8 object-contain" />,
  },
  {
    label: 'My Life - Journal',
    route: '/journal',
    icon: <img src="/menu-icons/icon_my_life_journal.svg" alt="My Life - Journal" className="h-8 w-8 object-contain" />,
  },
  {
    label: 'My Atlas of Emotions',
    route: '/atlas',
    icon: <img src="/menu-icons/icon_atlas_emotions.svg" alt="My Atlas of Emotions" className="h-8 w-8 object-contain" />,
  },
  {
    label: 'Idea Box',
    route: '/viewform',
    icon: <img src="/menu-icons/icon_idea_box.svg" alt="Idea Box" className="h-8 w-8 object-contain" />,
  },
];

const LogoutIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-full w-full"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" /></svg>
);
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-full w-full"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
);

const SideBar: React.FC = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();

  const toggleDrawer = () => setDrawerOpen(prev => !prev);

  const handleLogout = (e: MouseEvent) => {
    e.preventDefault();
    setDrawerOpen(false);
    logout();
    navigate('/');
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
        title="Abrir menu"
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
              <button onClick={toggleDrawer} className="text-white" title="Fechar menu">
                <div className="h-8 w-8"><MenuIcon /></div>
              </button>
              <span className="text-xl font-semibold text-white">Menu</span>
            </div>

            <ul className="flex flex-1 flex-col gap-2">
              {menuItems.map((item) => (
                <li
                  key={item.label}
                  className={`${baseMenuItemClasses} ${location.pathname === item.route ? activeMenuItemClasses : ''} ${hoverMenuItemClasses}`}
                  onClick={() => { setDrawerOpen(false); navigate(item.route); }}
                  title={item.label}
                >
                  <div className="h-8 w-8 flex-shrink-0 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span>{item.label}</span>
                </li>
              ))}
              <li
                className="my-4 cursor-pointer rounded-lg border-2 border-dashed border-white/80 p-3 text-center text-lg font-semibold text-white hover:border-white hover:bg-white/10"
                onClick={() => { setDrawerOpen(false); navigate('/surprise-me'); }}
              >
                Surprise Me
              </li>
            </ul>
            
            <div className="space-y-4">
               <div onClick={handleLogout} title="Logout" className={`${baseMenuItemClasses} ${hoverMenuItemClasses}`}> 
                  <div className="h-6 w-6 flex-shrink-0"><LogoutIcon /></div>
                  <span>Logout</span>
                </div>
              <div className="text-center">
                 <img src="/logo_happy_kids.png" alt="Logo" className="mx-auto h-20 w-20 aspect-square rounded-full border-4 border-white bg-white shadow-md object-contain" />
              </div>
            </div>
          </aside>
        </div>
      )}

      <nav className="hidden h-screen w-24 flex-shrink-0 flex-col items-center justify-between bg-gradient-to-b from-[#8d53ff] to-[#5ddee6] p-4 shadow-lg md:flex">
        <div className="flex flex-col items-center gap-8">
          <button onClick={toggleDrawer} className="text-white" aria-label="Abrir menu expandido" title="Abrir menu expandido">
            <div className="h-8 w-8"><MenuIcon /></div>
          </button>
          
          <ul className="flex flex-col items-center gap-6">
            {menuItems.map((item) => (
              <li
                key={item.label}
                title={item.label}
                className={`cursor-pointer rounded-lg p-3 transition-colors ${location.pathname === item.route ? 'bg-white/30' : ''} hover:bg-white/20`}
                onClick={() => navigate(item.route)}
              >
                <div className="h-8 w-8 flex items-center justify-center">
                  {item.icon}
                </div>
              </li>
            ))}
          </ul>
          {/* Logout logo após o menu principal */}
          <div className="mt-6">
            <div onClick={handleLogout} title="Logout" className="cursor-pointer rounded-lg p-3 text-white transition-colors hover:bg-white/20">
              <div className="h-7 w-7"><LogoutIcon /></div>
            </div>
          </div>
        </div>
        <img src="/logo_happy_kids.png" alt="Logo" className="h-12 w-12 aspect-square rounded-full border-2 border-white bg-white object-contain" />
      </nav>
    </>
  );
};

export default SideBar;