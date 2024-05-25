import React from "react";
import "./MainBanner.scss";
const { buildUrl } = require('@evershop/evershop/src/lib/router/buildUrl');


function MainBanner() {
  return (
    <div className="main-banner-home flex items-center">
      <div className="page-width grid grid-cols-2 md:grid-cols-2 gap-2">
        <div className="text-center md:text-left  px-2 ">
          <h2 className="h1 ">Відкрий Новий Сезон Спорту!

          </h2>
          <p>Зустрічай нову колекцію спортивного одягу – стиль, комфорт та якість для кожного тренування. Поринь у світ спорту з новими моделями, створеними для перемог.

            Почни свою історію успіху вже сьогодні! </p>
          <p></p>
          <a className="button button-primary" href="#feature-categories">
            Дивитися товари
          </a>
        </div>
        <div />
      </div>
    </div>
  );
}

export default MainBanner;

export const layout = {
  areaId: "content",
  sortOrder: 1,
};
