import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Footer from './Components/footer';
import Form from './Components/form'
import style from './contactpage.module.scss';

function ContactPage() {
  return (
    <div className="App">
      <Header title="Whirl Creek Farm" />
      <Navbar />
      <div className={style.flexContainer}>
        <div className={style.explainer}><h2 className={style.h2}>Contact Us</h2><div className={style.flexContainer} ><p>Phone:</p><p>555-393-6855</p></div><div className={style.flexContainer}><p>Email:</p><p>myemail.stevers@gmail.com</p></div><div className={style.flexContainer}><p>Address:</p><p>5555, Perth line 55<br /> R. R. 2  </p> <p> MyTown Ontario<br />N0K 1J0
        </p></div></div>
        <Form /></div>
        <Footer />
    </div >
  );
}
export default ContactPage;
