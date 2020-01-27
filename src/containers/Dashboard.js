import React from "react";
import theme from "../theme/AdminTheme";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>

      <section>
        <p>sssssssss</p>
        <p>ddddddd</p>
        <p>xxxxxxxxxxxxxdd</p>
        <p>dcdcdcdcdd</p>
        <p>
          <span style={{ fontFamily: theme.fonts.body }}>
            {theme.fonts.body} this is just for testing
          </span>
        </p>
      </section>
    </div>
  );
};

export default Dashboard;
