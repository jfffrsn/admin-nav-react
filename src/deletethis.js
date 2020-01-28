import React from "react";

const deletethis = () => {
  const navList = [
    {
      id: 1,
      text: "Home",
      path: "/home",
      icon: "HomeIcon"
    },
    {
      id: 2,
      text: "Presentations",
      path: "/presentations",
      icon: "PresentationIcon"
    },
    {
      id: 3,
      text: "Collections",
      path: "/collections",
      icon: "CollectionIcon"
    },
    {
      id: 4,
      text: "Courses",
      path: "/courses",
      icon: "CourseIcon"
    }
  ];
  const navItems = navList.map(item => (
    <li key={item.id}>
      {item.text}
      {item.path}
      {item.icon}
    </li>
  ));

  return <div>{navItems}</div>;
};

export default deletethis;
