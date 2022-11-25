import './Contact.scss';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_46x836u',
        'template_yqrgur2',
        formRef.current,
        'stusP_Nq081JUaNOy'
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className='c'>
      <div className='c-bg'></div>
      <div className='c-wrapper'>
        <div className='c-left'>
          <h1 className='c-title'>Lets discuss your project</h1>
          <div className='c-info'>
            <div className='c-info-item'>
              <span class='material-symbols-outlined'>call</span>
              07957 445590
            </div>
            <div className='c-info-item'>
              <span class='material-symbols-outlined'>mail</span>
              hrbland43@gmail.com
            </div>
            <div className='c-info-item'>
              <span class='material-symbols-outlined'>home</span>
              43 Alma Avenue, Foulridge, BB8 7NS
            </div>
          </div>
        </div>
        <div className='c-right'>
          {done ? (
            'Thank you, we will be in touch.'
          ) : (
            <div>
              <p className='c-desc'>
                <strong>What's your story?</strong> Get in touch.
              </p>
              <form ref={formRef} onSubmit={handleSubmit}>
                <input type='text' placeholder='Name' name='user_name' />
                <input type='text' placeholder='Subject' name='user_subject' />
                <input type='text' placeholder='Email' name='user_email' />
                <textarea
                  name='message'
                  placeholder='Message'
                  rows='5'
                ></textarea>
                <button>Submit</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
