import React from "react";

function Newsletter() {
  return (
    <div className="mt-[50px]">
      <div className="page-width">
        <div className="rounded p-[30px] bg-[#E8D5C4]">
          <div className="mb-3">
            <h2 className="text-center">Розсилка</h2>
            <p className="text-center">
             Підпишись на нашу розсилку і отримай 10% на перше замовлення!
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex gap-2 ">
              <input
                className="border border-divider rounded"
                type="text"
                placeholder="Емейл"
              />
              <button className="button">Підписатися</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;

export const layout = {
  areaId: "content",
  sortOrder: 50,
};
