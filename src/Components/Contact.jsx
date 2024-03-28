import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import SuccesMail from './SuccesMail';


function Contact() {
	const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('react_portfolio', 'template_react_portfolio', form.current, {
        publicKey: 'xiQcRPgg-RfCqkF7p',
      })
      .then(
        () => {

		 showSuccess()
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  const showSuccess = () =>{
	document.getElementById('successModal').classList.add("d-block");
  }


  return (
    <React.Fragment>
        <section id="contact" className="bg-body-secondary pt-5 pb-5">

			<div className="container">

				<h1 className="section-title">Keep in Touch</h1>
				<p className="section-description">Are you ready to start your project? Give us call or drop us a line.</p>

				<div className="row pb-1">

					<div className="col-sm-4 text-center contact-item">

						<a className="icon" href="http://goo.gl/maps/0m7WQ" target="_blank"><i className="fa fa-map-marker fa-fw"></i></a>
						<h2>Our Location</h2>
						<p>635 Madison Ave, NY , 10173</p>

					</div>

					<div className="col-sm-4 text-center contact-item">

						<a className="icon" href="mailto:mail@example.com"><i className="fa fa-envelope"></i></a>
						<h2>Send a mail</h2>
						<p>mail@example.com</p>

					</div>

					<div className="col-sm-4 text-center contact-item mb-4">

						<a className="icon" href="#link"><i className="fab fa-twitter fa-fw"></i></a>
						<h2>Call us</h2>
						<p>+01 234-56789</p>

					</div>

					<h1 className="subsection-title">Drop us a line</h1>
					<p className="subsection-description">Drop us a line and we will contact you as soon as possible.</p>
				</div>

				<div className="row pt-0">



					<form ref={form} onSubmit={sendEmail} id="contact-form" className="col-sm-6 col-sm-offset-3 mx-auto">

						<div className="form-group">
						  <label className="control-label" htmlFor="contact-name">Name</label>
						  <div className="controls">

							<input id="contact-name" required name="user_name" placeholder="Your name" className="form-control requiredField label_better" type="text" data-error-empty="Please enter your name"/>
							<i className="fa fa-user text-primary"></i>

						  </div>
						</div>

						<div className="form-group">
						  <label className="control-label" htmlFor="contact-mail">Email</label>
						  <div className=" controls">
							<input id="contact-mail" required name="user_email" placeholder="Your email" className="form-control requiredField label_better" type="email" data-error-empty="Please enter your email" data-error-invalid="Invalid email address"/>
							<i className="fa fa-envelope text-primary"></i>

						  </div>
						</div>

						<div className="form-group">
						  <label className="control-label" htmlFor="contact-message">Message</label>
							<div className="controls">
								<textarea id="contact-message" required name="message"  placeholder="Your message" className="form-control requiredField label_better" rows="6" data-error-empty="Please enter your message"></textarea>
								<i className="fa fa-comment text-primary"></i>

							</div>
						</div>
						<div className="d-grid">

  							<button className="btn btn-outline-primary mt-3 p-2 fs-3" type="submit">

								Send Mail</button>

						</div>



					</form>


				</div>

				{/* Modal Component */}
				<SuccesMail />


			</div>

</section>

    </React.Fragment>
  )
}

export default Contact