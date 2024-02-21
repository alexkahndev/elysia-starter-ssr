import * as Icon from "react-bootstrap-icons";
import { useEffect } from "react";

const Sidebar = () => {
  useEffect(() => {
    const route = window.location.pathname;
    const links = document.querySelectorAll(".Sidebar__Menu a");
    links.forEach((link) => {
      if (link.getAttribute("href") === route) {
        link.classList.add("Active");
      }
    });
  }, []);

  return (
    <aside className="Sidebar">
      <nav>
        <section className="Sidebar_Brand">
          <a href="/services">
            <img src="/assets/icon.svg" alt="logo" />
          </a>
        </section>
        <section className="Sidebar__Menu">
          <aside>
            <a href="/services">
              <Icon.Kanban />
            </a>
            <a href="/history">
              <Icon.Hourglass />
            </a>
            <a href="/dashboard">
              <Icon.PieChart />
            </a>
            <a href="/print-report">
              <Icon.Layers />
            </a>
            <a href="/faqs">
              <Icon.FileEarmarkText />
            </a>
          </aside>
          <aside>
            <a href="/support">
              <Icon.QuestionCircle />
            </a>
            <a href="/settings">
              <Icon.Gear />
            </a>
          </aside>
        </section>
      </nav>
    </aside>
  );
};

export default Sidebar;
