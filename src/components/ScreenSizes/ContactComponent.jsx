
import windowSize from './windowSize';
import Contact from '../Contact'
import ContactMobile from '../ContactMobile';
const ContactComponent = () => {
  const [width] = windowSize();

  
  const breakpoint = 768; // Example breakpoint

  return (
    <div>
      {width > breakpoint ? <Contact /> : <ContactMobile />}
    </div>
  );
};


export default ContactComponent
