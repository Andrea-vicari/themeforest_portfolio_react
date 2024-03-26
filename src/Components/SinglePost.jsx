import React from 'react'
import placeHolder from "./images/placeholder-600x200.jpg"

function SinglePost() {
  return (
        <>
		<header id="home" className="color-bg light-typo padding-top-bottom">

			<div className="container">

				<h1 className="page-title">Following the Train</h1>

				<p className="page-subtitle">Travelling the world on a train. A photo trip...</p>

			</div>

		</header>
		<article className="post single-post">

			<div className="container scrollimation fade-up">

				<div className="row">

					<div className="col-sm-10 col-sm-offset-1">

						<div className="post-media">

							<div className="post-slider flexslider">

								<ul className="slides">
									<li>
										<img className="img-responsive" src={placeHolder} alt=""/>
									</li>
									<li>
										<img className="img-responsive" src={placeHolder} alt=""/>
									</li>
								</ul>

							</div>

						</div>

						<div className="post-content">

							<h2 className="text-center">Chapter 1</h2>

							<p>No one rejects, dislikes, or <a href="#link">avoids pleasure itself</a>, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>

							<p>But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</p>

							<p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.</p>

							<div className="row">
								<div className="col-sm-6 col-sm-offset-6">
									<blockquote className="blockquote-reverse">
										<p>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it?</p>
									</blockquote>
								</div>
							</div>

							<h2 className="text-center">Chapter 2</h2>

							<p>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.</p>

							<p>But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted.</p>

							<p>The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</p>

							<p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.</p>

						</div>

						<footer className="post-footer">

							<div className="post-meta clearfix">

								<p className="post-date">March 25, 2014</p>

								<p className="post-share">
									Share:

									<span className="social-media">
										<span className="facebook"></span>
										<span className="twitter" data-via="qthemes"></span>
										<span className="plusone"></span>
										<span className="pinterest"></span>
									</span>
								</p>

							</div>

							<nav className="posts-nav clearfix">
								<ul>
									<li className="prev-post">
										<a href="anatomy.html">Previous Post</a>
										<p>Anatomy of a Photograph</p>
									</li>
									<li className="next-post">
										<a href="travelling-music-video.html">Next Post</a>
										<p>Travelling - Music Video</p>
									</li>
								</ul>

								<a className="all-posts" href="blog.html" data-toggle="tooltip" title="Back to Blog"><i className="fa fa-th-list"></i></a>

							</nav>

						</footer>

					</div>

				</div>

			</div>



		</article>
        </>
  )
}

export default SinglePost