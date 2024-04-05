import React from 'react'
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import emailjs from '@emailjs/browser';
import SuccesMail from './SuccesMail';


function Contact() {

	// Dark light logics
	const themeType = useSelector((state) => state.counter.value)
	let bgType, textType;
	themeType == "ligth" ? bgType = " bg-body-secondary" : bgType = "bg-dark"
	themeType == "ligth" ? textType = "" : textType = "text-bg-dark"
	// End dark light logics

	// UseRef for EmailJS
	const form = useRef();

	// Set datas from the form and assign states
	const [formData, setFormData] = useState({
		user_name: '',
		user_email: '',
		message: ''
	})

	// Set the errors with an empty object
	const [errors, setErrors] = useState({})

	// Function onChange to set formData
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData, [name]: value
		})
	}

	// Function to send the email
	const sendEmail = (e) => {
		e.preventDefault();

		////// Validation logics
		// Empty validation error object
		const validationErrors = {}
		// Missing name
		if (!formData.user_name.trim()) {
			validationErrors.username = "Name is required"

		}

		// Wrong or missing email
		if (!formData.user_email.trim()) {
			validationErrors.email = "E-mail is required"
		} else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(formData.user_email)) {
			validationErrors.email = "E-mail is not valid"

		}
		// Missing message
		if (!formData.message.trim()) {
			validationErrors.message = "Message is required"
		}

		// SetErrors
		setErrors(validationErrors)

		// If no errors (Object keys length == 0) proceed on sending via emailJS
		if (Object.keys(validationErrors).length === 0) {

			// START EMAILJS SETTINGS
			// Below parameters to be changed with your after setting account
			// https://www.emailjs.com/
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
		}
	}
	// END EMAILJS SETTINGS

	// Show a success pop up via <SuccesMail /> component
	const showSuccess = () => {
		document.getElementById('successModal').classList.add("d-block");
	}

	return (
		<React.Fragment>
			<section id="contact" className={"pt-5 pb-5 " + bgType + " " + textType}>

				<div className="container">

					<h1 className="section-title">Keep in Touch</h1>
					<p className="section-description">Are you ready to start your project? Give us call or drop us a line.</p>

					<div className="row pb-1">

						<div className="col-sm-4 text-center contact-item">

							<a className="icon" href="http://goo.gl/maps/0m7WQ" target="_blank"><i className="fa fa-map-marker fa-fw text-primary"></i></a>
							<h2>Our Location</h2>
							<p>123 Your City, ST, 12345</p>

						</div>

						<div className="col-sm-4 text-center contact-item">

							<a className="icon" href="mailto:mail@example.com"><i className="fa fa-envelope text-primary"></i></a>
							<h2>Send a mail</h2>
							<p>mail@example.com</p>

						</div>

						<div className="col-sm-4 text-center contact-item mb-4">

							<a className="icon" href="#link"><i className="fa fa-phone fa-fw text-primary"></i></a>
							<h2>Call us</h2>
							<p>+01 234-56789</p>

						</div>

						<h1 className="subsection-title">Drop us a line</h1>
						<p className="subsection-description mb-0">Drop us a line and we will contact you as soon as possible.</p>
					</div>

					<div className="row pt-0 pb-4">
						{/* Contact form */}
						<form ref={form} onSubmit={sendEmail} id="contact-form" className="col-sm-6 col-sm-offset-3 mx-auto pb-4">

							<div className="form-group">
								<label className="control-label" htmlFor="contact-name">Name</label>

								<div className="controls">

									<input id="contact-name" name="user_name" onChange={handleChange} placeholder="Your name" className="form-control requiredField label_better" type="text" data-error-empty="Please enter your name" />
									<i className="fa fa-user text-primary"></i>
									{errors.username && <span className='mail_errors text-primary'>{errors.username}</span>}

								</div>

							</div>

							<div className="form-group">
								<label className="control-label" htmlFor="contact-mail">Email</label>
								<div className=" controls">
									<input id="contact-mail" name="user_email" onChange={handleChange} placeholder="Your email" className="form-control requiredField label_better" />
									<i className="fa fa-envelope text-primary"></i>
									{errors.email && <span className='mail_errors text-primary'>{errors.email}</span>}
								</div>
							</div>

							<div className="form-group">
								<label className="control-label" htmlFor="contact-message">Message</label>
								<div className="controls">
									<textarea id="contact-message" name="message" onChange={handleChange} placeholder="Your message" className="form-control requiredField label_better" rows="6"></textarea>
									<i className="fa fa-comment text-primary"></i>
									{errors.message && <span className='mail_errors text-primary'>{errors.message}</span>}
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