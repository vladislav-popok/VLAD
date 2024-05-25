/* eslint-disable react/no-danger */
import React from 'react';
import './General.scss';
import { _ } from '@evershop/evershop/src/lib/locale/translate';

export default function General() {

  return (
    <div className="page-width">
      <div className="mb-1 md:mb-2">
        <div className="text-left ">
          <h1>Contact us</h1>

          <form>
            <label htmlFor="name">ФІО:</label>
            <input type={'text'}  id={'name'} placeholder={'Козак Іван'} />
            <label htmlFor="name">Емейл:</label>
            <input type={'text'}  id={'email'} placeholder={'email@gmail.com'} />
            <label htmlFor="comment">Коментар:</label>
            <textarea  id={'comment'} placeholder={'Коментар'} />

          </form>
        </div>
      </div>
    </div>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 1
};
