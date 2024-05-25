import React from 'react';
import PropTypes from 'prop-types';
import { Form } from '@components/common/form/Form';
import { Field } from '@components/common/form/Field';
import StartIcon from '@heroicons/react/solid/esm/StarIcon';
import { _ } from '@evershop/evershop/src/lib/locale/translate';

export default function ReviewForm({ action, product }) {
  const [error, setError] = React.useState(null);
  const [rating, setRating] = React.useState(0);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const onSuccess = (response) => {
    if (!response.error) {
      setIsSubmitted(true);
    } else {
      setError(response.error.message);
    }
  };

  const rate = (score) => {
    setRating(score);
  };

  return (
    <div className="product-comment-form">
      {isSubmitted && (
        <div className="success text-success">
          Ваш відгук Успішно відправлено
        </div>
      )}
      {!isSubmitted && (
        <>
          <h3>Ваш відгук:</h3>
          {error && <div className="error text-critical">{error}</div>}
          <Form
            id="comment-form"
            action={action}
            method="POST"
            onSuccess={onSuccess}
            isJSON
            btnText="Відправити відгук"
          >
            <label htmlFor="rating">Ваша Оцінка</label>
            <div className="rating__stars">
              {[...Array(5)].map((e, i) => (
                <a
                  className=""
                  href="#"
                  onClick={(element) => {
                    element.preventDefault();
                    rate(i + 1);
                  }}
                >
                  <StartIcon
                    width={20}
                    height={20}
                    fill={rating > i ? '#ff5501' : '#989898'}
                  />
                </a>
              ))}
            </div>
            <Field
              type="hidden"
              name="rating"
              value={rating}
              validationRules={['required']}
            />
            <Field
              name="customer_name"
              label="Ваше Імя"
              type="text"
              validationRules={['notEmpty']}
            />
            <Field
              name="comment"
              label="Ваш Коментар"
              type="textarea"
              validationRules={['notEmpty']}
            />
            <Field type="hidden" name="product_id" value={product.productId} />
          </Form>
        </>
      )}
    </div>
  );
}

ReviewForm.propTypes = {
  action: PropTypes.string.isRequired,
  product: PropTypes.shape({
    productId: PropTypes.number.isRequired
  }).isRequired
};

export const layout = {
  areaId: 'productPageMiddleLeft',
  sortOrder: 50
};

export const query = `
  query {
    action: url(routeId: "addReview"),
    product: product(id: getContextValue("productId")) {
      productId
    }
  }
`;
