/* eslint-disable react/no-danger */
import React, {useRef, useState} from 'react';
import './General.scss';
import { _ } from '@evershop/evershop/src/lib/locale/translate';

export default function General({action}) {

  const formRef = useRef(null)
  const [isSuccess, setIsSuccess] = useState(false)

  const onSubmit = async (e) => {
   e.preventDefault()
    const result = await fetch(action, {
      method: 'POST',
      body: JSON.stringify({
        customer_name: event.target.customer_name.value,
        customer_email: event.target.customer_email.value,
        comment: event.target.comment.value
      }),
      headers: {
        "Content-type": 'application/json'
      }
    })

    if(result) {
      formRef.current.reset()
      setIsSuccess(true)
    }
  }
  return (
    <div className="page-width contact-page ">
      <div className="mb-1 md:mb-2 contact-form">
        <div className="text-left ">
          <h1>Наипсати нам:</h1>

          <form onSubmit={onSubmit} method={'POST'} ref={formRef}>
            <label htmlFor="name">ФІО:</label>
            <input type={'text'} name={'customer_name'}  id={'name'} placeholder={'Козак Іван'} />
            <label htmlFor="name">Емейл:</label>
            <input type={'text'} name={'customer_email'} id={'email'} placeholder={'email@gmail.com'} />
            <label htmlFor="comment">Коментар:</label>
            <textarea  id={'comment'} name={'comment'} placeholder={'Коментар'} />
            <button type={'submit'}>відправити</button>
            {isSuccess && (
              <div className={'text-primary mt-2'}>Ваша заявка успішно відправленнна</div>
            )}
          </form>
        </div>
      </div>

      <div className="mb-1 md:mb-2">
        <div className="text-left contact-form">
          <h2>Наша адреса:</h2>

          <p>Україна, Чернігівська область, с. Обмачів</p>
          <h2>Телефон:</h2>

          <p>+380671829065</p>
        </div>
      </div>
    </div>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 1
};


export const query = `
  query {
    action: url(routeId: "addCustomerRequest"),
  }
`;
