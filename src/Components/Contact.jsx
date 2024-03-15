import React from 'react'

function Contact() {
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



					<form id="contact-form" className="col-sm-6 col-sm-offset-3 mx-auto" action="contact.php" method="post" novalidate>

						<div className="form-group">
						  <label className="control-label" for="contact-name">Name</label>
						  <div className="controls">
							<input id="contact-name" name="contactName" placeholder="Your name" className="form-control requiredField label_better" type="text" data-error-empty="Please enter your name"/>
							<i className="fa fa-user"></i>
						  </div>
						</div>

						<div className="form-group">
						  <label className="control-label" for="contact-mail">Email</label>
						  <div className=" controls">
							<input id="contact-mail" name="email" placeholder="Your email" className="form-control requiredField label_better" type="email" data-error-empty="Please enter your email" data-error-invalid="Invalid email address"/>
							<i className="fa fa-envelope"></i>
						  </div>
						</div>

						<div className="form-group">
						  <label className="control-label" for="contact-message">Message</label>
							<div className="controls">
								<textarea id="contact-message" name="comments"  placeholder="Your message" className="form-control requiredField label_better" rows="6" data-error-empty="Please enter your message"></textarea>
								<i className="fa fa-comment"></i>
							</div>
						</div>

						<p><button name="submit" type="submit" className="btn btn-qubico btn-block" data-error-message="Error!" data-sending-message="Sending..." data-ok-message="Message Sent"><i className="fa fa-location-arrow"></i>Send Message</button></p>
						<input type="hidden" name="submitted" id="submitted" value="true" />

					</form>

				</div>

			</div>

</section>

    </React.Fragment>
  )
}

export default Contact