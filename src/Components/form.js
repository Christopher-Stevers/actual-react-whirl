import style from './form.module.scss'
import emailjs from "emailjs-com"
function Form() {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_oqnbbzb', 'template_ck4xn7l', e.target, 'user_2alctVHDRyRs2gc1ntQhw')
          .then((result) => {
              alert("Your Message has been sent.");
          }, (error) => {
              console.log(error.text);
          });
      }
    return (<div className={style.flexChild}>
            <form id="contact-form" className={style.form} onSubmit={sendEmail}>
                <h1 className={style.header}>Email Us</h1>
            <div className={style.flexInput}>
                <label>Name:</label><input type="text" name="user_name" id="user_name">
               </input></div> <input type="hidden" name="contact_number"></input>
            <div className={style.flexInput}>
                <label>Email:</label>
                <input type="email" name="from_email" id="user_email"/>
            </div>
            <div className={style.flexInput}><input type="hidden" name="contact_number" /> </div>

            <div className={style.message} >
                <label className={style.innerMessage} >Message</label><br></br>
                <textarea className={style.textArea} name="message" id="message"></textarea></div>
            <input id="send" type="submit"  value="Send" className={style.send}></input>

        </form>
    </div>
    );
}
export default Form;
