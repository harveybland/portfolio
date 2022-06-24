import './Intro.scss';
import Me from '../../img/me.jpg';

const Intro = () => {
  return (
    <div className='i'>
      <div className='i-left'>
        <div className='i-left-wrapper'>
          <h2 className='i-intro'>Hello, my name is</h2>
          <h1 className='i-name'>Harvey</h1>
          <div className='i-title'>
            <div className='i-title-wrapper'>
              <div className='i-title-item'>Web Developer</div>
              <div className='i-title-item'>Ui/UX designer</div>
              <div className='i-title-item'>Html developer</div>
              <div className='i-title-item'>Gamer</div>
              <div className='i-title-item'>Content creator</div>
            </div>
          </div>
          <p className='i-desc'>
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
        </div>
      </div>
      <div className='i-right'>
        <div className='i-bg'></div>
        <img src={Me} alt='' className='i-img' />
      </div>
    </div>
  );
};

export default Intro;
