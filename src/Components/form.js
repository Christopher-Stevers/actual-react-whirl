import style from './form.module.scss'
import emailjs from "emailjs-com"
function Form() {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_oqnbbzb', 'template_ck4xn7l', e.target, 'user_2alctVHDRyRs2gc1ntQhw')
          .then((result) => {
              alert("Your Message has been sent.");
          }, (error) => {
          });
      }
    return (
            <form id="contact-form" className={style.form} onSubmit={sendEmail}>
                
            <div className={style.flexInput}>
                <label htmlFor="user-name">Name:</label><input type="text" name="user_name" id="user_name">
               </input></div> <input className={style.input} type="hidden" name="contact_number" ></input>
               <div className={style.flexInput}><div className={style.input}></div></div>
            <div id={style.email} className={style.flexInput}>
                <label htmlFor="from_email">Email:</label>
                <input type="email" name="from_email" id="user_email" required/>
            </div>
            <input type="hidden" name="contact_number" /> 

            <div className={style.message} >
                <label className={style.innerMessage} htmlFor="message">Message</label><br></br>
                <textarea className={style.textArea} name="message" id="message" required></textarea></div>
            <input id="send" type="submit"  value="Send" className={style.send}></input>

        </form>
    );
}
export default Form;
