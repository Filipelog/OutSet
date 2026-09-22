import { useState, useEffect } from 'react';
import logoImg from '../assets/logo.svg';
import avatarImg from '../assets/avatar.svg';


declare const lucide: { createIcons: () => void } | undefined;

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Inicializa os ícones do Lucide após a renderização do componente
  useEffect(() => {
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
      lucide.createIcons();
    }
  }, [isCollapsed, isDark, activeIndex]);

  const toggleSidebar = () => {
    setIsCollapsed(prev => !prev);
  };

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
          id="colapseBtn"
          aria-label="toggle sidebar"
          onClick={toggleSidebar}
        >
          <i data-lucide="panel-left"></i>
        </button>

        <hr className="divider" />

        <div className="profile">
          <span className="avatar">
            <img src={avatarImg} alt="Avatar" />
          </span>
          <span className="profile-text label">
            <span className="profile-name">Filipe Oliveira</span>
            <span className="profile-role">Developer</span>
          </span>
        </div>

        <ul
          className="nav"
          style={{ '--active-row': activeIndex } as React.CSSProperties}
        >
          <li className="indicator" aria-hidden="true"></li>
          
          {/* Item do menu (Dashboard) */}
          <li>
            <button
              type="button"
              data-tip="Dashboard"
              className={`nav-item ${activeIndex === 0 ? 'active' : ''}`}
              onClick={() => setActiveIndex(0)}
            >
              <i data-lucide="layout-grid"></i>
              <span className="label">Dashboard</span>
            </button>
          </li>

          {/* Adicione outros <li> aqui se necessário */}
        </ul>

        <button
          type="button"
          className="theme-btn"
          id="themeBtn"
          data-tip="Dark mode"
          aria-label="Toggle dark mode"
          aria-pressed={isDark}
          onClick={toggleTheme}
        >
          <i data-lucide={isDark ? 'sun' : 'moon'}></i>
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