const Tabs = ({ activeTab, setActiveTab }) => (
  <div className="tabs">
    {["overview", "assignments", "grades"].map(tab => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={activeTab === tab ? "active" : ""}
      >
        {tab.charAt(0).toUpperCase() + tab.slice(1)}
      </button>
    ))}
  </div>
);

export default Tabs;
