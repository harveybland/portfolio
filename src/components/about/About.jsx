import './About.scss';
import Me from '../../img/me.jpg';

const About = () => {
  return (
    <div className='a'>
      <div className='a-left'>
        <div className='a-card bg'></div>
        <div className='a-card'>
          <img src={Me} alt='' className='a-img' />
        </div>
      </div>
      <div className='a-right'>
        <div className='a-title'>About Me</div>
        <p className='a-sub'>
          It is a long established factt that a reader will be
        </p>
        <p className='i-desc'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Reprehenderit ad temporibus eos rerum, inventore voluptas! Ab numquam
          aliquam alias repudiandae voluptatibus cupiditate quidem, ex rem
          architecto quia asperiores porro beatae!
        </p>
        {/* <div className='a-award'>
          <img src={Me} alt='' className='a-award-img' />
          <div className='a-award-texts'>
            <h4 className='a-award-title'>International Design</h4>
            <p className='a-award-desc'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatem laudantium eaque consectetur eveniet fuga, unde nisi
              repellendus quia est error, iusto nostrum laboriosam impedit,
              inventore eligendi! Quam dolore cum fuga!
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
