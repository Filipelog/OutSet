import { useState } from 'react';
// Importe os ícones que precisa do lucide-react
import {
  PanelLeft,
  LayoutGrid,
  Sun,
  Moon,
  BookOpen,
  Folder,
  Library,
  Calendar,
  Users,
  Globe
} from 'lucide-react';

import logoImg from '../assets/iconOutset.png';
import avatarImg from '../assets/avatar.jpeg';
import './sidebar.css';

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleSidebar = () => setIsCollapsed(prev => !prev);

  const toggleTheme = () => {
    setIsDark(prev => {
      const nextTheme = !prev;
      document.body.classList.toggle('dark', nextTheme);
      return nextTheme;
    });
  };

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-inner">
        <div className="brand">
          <span className="brand-icon">
            <img src={logoImg} alt="Logo OutSet" />
          </span>
          <span className="brand-name">OutSet</span>
        </div>

        <button
          type="button"
          className="collapse-btn"
          id="collapseBtn"
          aria-label="toggle sidebar"
          onClick={toggleSidebar}
        >
          {/* Use o componente diretamente */}
          <PanelLeft className="icon" />
        </button>

        <hr className="divider" />

        <div className="profile">
          <span className="avatar">
            <img src={avatarImg} alt="Avatar" />
          </span>
          <span className="profile-text label">
            <span className="profile-name">Filipe Oliveira</span> <br />
            <span className="profile-role">Developer</span>
          </span>
        </div>

        <ul
          className="nav"
          style={{ '--active-row': activeIndex } as React.CSSProperties}
        >
          <li className="indicator" aria-hidden="true"></li>

          <li>
            <button
              type="button"
              className={`nav-item ${activeIndex === 0 ? 'active' : ''}`}
              onClick={() => setActiveIndex(0)}
            >
              <LayoutGrid className="icon" />
              <span className="label">Painel</span>
            </button>
          </li>

          <li>
            <button
              type="button"
              className={`nav-item ${activeIndex === 1 ? 'active' : ''}`}
              onClick={() => setActiveIndex(1)}
            >
              <BookOpen className="icon" />
              <span className="label">Técnicas de estudo</span>
            </button>
          </li>

          <li>
            <button
              type="button"
              className={`nav-item ${activeIndex === 2 ? 'active' : ''}`}
              onClick={() => setActiveIndex(2)}
            >
              <Folder className="icon" />
              <span className="label">Matérias</span>
            </button>
          </li>

          <li>
            <button
              type="button"
              className={`nav-item ${activeIndex === 3 ? 'active' : ''}`}
              onClick={() => setActiveIndex(3)}
            >
              <Library className="icon" />
              <span className="label">Biblioteca</span>
            </button>
          </li>

          <li>
            <button
              type="button"
              className={`nav-item ${activeIndex === 4 ? 'active' : ''}`}
              onClick={() => setActiveIndex(4)}
            >
              <Calendar className="icon" />
              <span className="label">Calendário</span>
            </button>
          </li>

          <li>
            <button
              type="button"
              className={`nav-item ${activeIndex === 5 ? 'active' : ''}`}
              onClick={() => setActiveIndex(5)}
            >
              <Users className="icon" />
              <span className="label">Grupos</span>
            </button>
          </li>

          <li>
            <button
              type="button"
              className={`nav-item ${activeIndex === 6 ? 'active' : ''}`}
              onClick={() => setActiveIndex(6)}
            >
              <Globe className="icon" />
              <span className="label">Comunidade</span>
            </button>
          </li>
        </ul>

      <hr className='divider'/>

        <button
          type="button"
          className="theme-btn"
          id="themeBtn"
          aria-label="Toggle dark mode"
          aria-pressed={isDark}
          onClick={toggleTheme}
        >
          {isDark ? <Sun className="icon" /> : <Moon className="icon" />}
          <span className="theme-label label">Dark mode</span>
          <span className={`switch ${isDark ? 'on' : ''}`}>
            <span></span>
          </span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;