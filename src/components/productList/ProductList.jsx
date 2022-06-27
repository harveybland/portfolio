import './ProductList.scss';
import Product from '../product/Product';
import { products } from '../../data';
import { productsTwo } from '../../data';

const ProductList = () => {
  return (
    <div>
      <div className='pl'>
        <div className='pl-texts'>
          <h1 className='pl-title'>Websites I've worked on</h1>
          <div className='pl-desc'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
            cumque obcaecati qui veniam similique, mollitia nam est possimus
            libero doloremque asperiores magnam. Culpa repudiandae incidunt
            perspiciatis autem nesciunt veniam ab.
          </div>
        </div>
        <div className='pl-list'>
          {products.map((item) => (
            <Product key={item.id} img={item.img} link={item.link} />
          ))}
        </div>
      </div>

      <div className='pl'>
        <div className='pl-texts'>
          <h1 className='pl-title'>Personal Projects</h1>
          <div className='pl-desc'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
            cumque obcaecati qui veniam similique, mollitia nam est possimus
            libero doloremque asperiores magnam. Culpa repudiandae incidunt
            perspiciatis autem nesciunt veniam ab.
          </div>
        </div>
        <div className='pl-list'>
          {productsTwo.map((item) => (
            <Product key={item.id} img={item.img} link={item.link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
