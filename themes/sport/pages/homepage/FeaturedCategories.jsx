import React from "react";
import './FeatureCategories.scss'


function FeaturedCategories() {

  const categoryTurismUrl = '/tourism'
  const categoryStangaUrl = '/weight'
  const categoryClothesUrl = '/clothes'
  return (
    <div className="page-width feature-categories">
      <div className="mb-2 mt-3">
        <h2 className="text-center" id={'feature-categories'}>Популярні Категорії</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="relative col-span-1 row-span-2 men-cat">
          <a
              className=" underline top-[20px] left-[20px] bg-white px-2"
              href={categoryClothesUrl}>
            <img src="/clothes.webp" alt="Shop men"/>
            <span className={'absolute'}>Спортивний одяг</span>
          </a>
        </div>
        <div className="relative col-span-1 row-span-1 women-cat">
          <a
              className="underline top-[20px] left-[20px] bg-white px-2"
              href={categoryStangaUrl}>
            <img src="/shtanga_i_ganteli.jpg" alt="Shop women"/>
            <span className={'absolute'}>Штанги та гантелі</span>
          </a>
        </div>
        <div className="relative col-span-1 row-span-1 kid-cat">
          <a
              className="underline top-[20px] left-[20px] bg-white px-2"
              href={categoryTurismUrl}>
            <img src="/turism.avif" alt="Shop kids"/>
            <span className={'absolute'}>Туризм</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCategories;

export const layout = {
  areaId: "content",
  sortOrder: 5,
};
