import * as Icon from "./Icons";

export const Sidebar = ({ onPageChange }: {onPageChange: (newPage: string) => void}) => {
  const handlePageClick = (newPage: string) => {
    onPageChange(newPage);
    const buttons = document.querySelectorAll('.Sidebar button');
    buttons?.forEach((button) => button.classList.remove('Active'));
    document.getElementById(newPage)?.classList.add('Active');
  };

  return (
    <aside className="Sidebar">
      <nav>
        <header>
          <button onClick={() => handlePageClick("services")}>
            <img src="/assets/icon.svg" alt="logo" />
          </button>
        </header>
        <main>
          <span>
            <button onClick={() => handlePageClick("services")} id="services">
              <Icon.Kanban />
            </button>
            <label>Service</label>
          </span>
          <span>
            <button onClick={() => handlePageClick("history")} id="history">
              <Icon.HourGlass />
            </button>
            <label>History</label>
          </span>
          <span>
            <button onClick={() => handlePageClick("dashboard")} id="dashboard">
              <Icon.PieChart />
            </button>
            <label>Dashboard</label>
          </span>
          <span>
            <button onClick={() => handlePageClick("faqs")} id="faqs">
              <Icon.FileEarmarkText />
            </button>
            <label>FAQs</label>
          </span>
          <span>
            <button onClick={() => handlePageClick("print-report")} id="print-report">
              <Icon.Layers />
            </button>
            <label>Print Report</label>
          </span>
          <span>
            <button onClick={() => handlePageClick("support")} id="support">
              <Icon.QuestionCircle />
            </button>
            <label>Support</label>
          </span>
          <span>
            <button onClick={() => handlePageClick("settings")} id="settings">
              <Icon.Gear />
            </button>
            <label>Service</label>
          </span>
        </main>
      </nav>
    </aside>
  );
};
