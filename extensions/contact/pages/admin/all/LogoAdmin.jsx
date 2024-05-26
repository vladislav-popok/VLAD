import React from "react";

function Logo() {
  return (
    <div className={'logo-new'}>
      <a href="/themes/sport/public">
        <img src="/logo.svg" style={{width: "100px"}} alt="eve" />
      </a>
    </div>
  );
}

export default Logo;

export const layout = {
  areaId: "header",
  sortOrder: 5,
};
