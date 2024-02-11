import * as Icon from 'react-bootstrap-icons';
import { useEffect } from 'react';

const Sidebar = () => {
  useEffect(() => {
    const route = window.location.pathname;
    const links = document.querySelectorAll('.Sidebar__Menu a');
    links.forEach((link) => {
      if (link.getAttribute('href') === route) {
        link.classList.add('Active');
      }
    });
  }, []);

  return (
    <nav className="Sidebar">
      <div className="Sidebar__Content">
        <div className="Sidebar__Brand">
          <a href="/services">
            <img src="/assets/icon.svg" alt="logo" />
          </a>
        </div>
        <div className="Sidebar__Menu">
          <ul>
            <li>
              <a href="/services">
                <Icon.Kanban />
              </a>
            </li>
            <li>
              <a href="/history">
                <Icon.Hourglass />
              </a>
            </li>
            <li>
              <a href="/dashboard">
                <Icon.PieChart />
              </a>
            </li>
            <li>
              <a href="/print-report">
                <Icon.Layers />
              </a>
            </li>
            <li>
              <a href="/faqs">
                <Icon.FileEarmarkText />
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/support">
                <Icon.QuestionCircle />
              </a>
            </li>
            <li>
              <a href="/settings">
                <Icon.Gear />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
