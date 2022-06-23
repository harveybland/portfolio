import './ProductList.scss';
import Product from '../product/Product';
import { products } from '../../data';

const ProductList = () => {
  return (
    <div className='pl'>
      <div className='pl-texts'>
        <h1 className='pl-title'>Create & Inspire. It's Harvey </h1>
        <div className='pl-desc'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde cumque
          obcaecati qui veniam similique, mollitia nam est possimus libero
          doloremque asperiores magnam. Culpa repudiandae incidunt perspiciatis
          autem nesciunt veniam ab.
        </div>
      </div>
      <div className='pl-list'>
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
