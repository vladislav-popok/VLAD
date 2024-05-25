import React from "react";

function FreeShippingBar() {
  return (
    <div className="page-width">
      <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x border-divider border my-3">
        <div className="p-2 border-divider">
          <h2>Безкоштовна доствка</h2>
          <p>Отримай безкоштовну доставку при замовленні від 1200 Грн.</p>
        </div>
        <div className="p-2 border-divider">
          <h2>Найкращі ціни</h2>
          <p>Ми пропонуємо найкращі ціни на спорт товари на ринку</p>
        </div>
        <div className="p-2 border-divider">
          <h2>Чудовий сервіс</h2>
          <p>Ми підтримуємо наший клєнтів 24/7.</p>
        </div>
      </div>
    </div>
  );
}

export default FreeShippingBar;

export const layout = {
  areaId: "content",
  sortOrder: 2,
};
