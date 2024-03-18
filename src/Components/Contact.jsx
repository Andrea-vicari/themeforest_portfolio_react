import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
	const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_krggjnj', 'template_g56sqe5', form.current, {
        publicKey: 'xiQcRPgg-RfCqkF7p',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <React.Fragment>
        <section id="contact" className="bg-body-secondary pt-5 pb-5">

			<div className="container">

				<h1 className="section-title">Keep in Touch</h1>
				<p className="section-description">Are you ready to start your project? Give us call or drop us a line.</p>

				<div className="row">

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

					<div className="col-sm-4 text-center contact-item">

						<a className="icon" href="#link"><i className="fab fa-twitter fa-fw"></i></a>
						<h2>Call us</h2>
						<p>+01 234-56789</p>

					</div>

				</div>

				<h1 className="subsection-title">Drop us a line</h1>
				<p className="subsection-description">Drop us a line and we will contact you as soon as possible.</p>

				<div className="row">



				<form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
				</div>

			</div>

</section>

    </React.Fragment>
  )
}

export default Contact