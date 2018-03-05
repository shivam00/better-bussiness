import React, {Component} from 'react';
// import { Grid } from 'react-bootstrap';
import img15 from '../../assets/images/15-img.jpg';
import img16 from '../../assets/images/16-img.jpg';
import img17 from '../../assets/images/17-img.jpg';
import img18 from '../../assets/images/18-img.jpg';
import img19 from '../../assets/images/19-img.jpg';
import img20 from '../../assets/images/20-img.jpg';
import img21 from '../../assets/images/21-img.jpg';
class Footer extends Component {
	render() {
		return (
<footer id="footer" className="haslayout">
			<div className="plugin-instagram">
				<div className="container-fluid">
					<div className="row">
						<h4>Follow Me On Instagram</h4>
						<div id="instagram-gallery" className="instagram-gallery">
							<div className="item"><a href="#"><img src={img15} alt="image description"></img></a></div>
							<div className="item"><a href="#"><img src={img16} alt="image description"></img></a></div>
							<div className="item"><a href="#"><img src={img17} alt="image description"></img></a></div>
							<div className="item"><a href="#"><img src={img18} alt="image description"></img></a></div>
							<div className="item"><a href="#"><img src={img19} alt="image description"></img></a></div>
							<div className="item"><a href="#"><img src={img20} alt="image description"></img></a></div>
							<div className="item"><a href="#"><img src={img21} alt="image description"></img></a></div>
						</div>
					</div>
				</div>
			</div>
			<div className="threecolumns">
				<div className="container">
					<div className="row">
						<div className="collg-4 col-md-4 col-sm-4 col-xs-6 box-width">
							<div className="box">
								<h5>About Us</h5>
								<div className="description">
									<p>On the other hand, we denounce with righteous nation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble and pain.</p>
								</div>
								<ul className="social-icon">
									<li><a href="#"><i className="fa fa-facebook"></i></a></li>
									<li><a href="#"><i className="fa fa-twitter"></i></a></li>
									<li><a href="#"><i className="fa fa-instagram"></i></a></li>
									<li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
									<li><a href="#"><i className="fa fa-dribbble"></i></a></li>
									<li><a href="#"><i className="fa fa-tumblr"></i></a></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-4 col-xs-6 box-width">
							<div className="box">
								<h5>Instagram</h5>
								<div className="instagram">
									<div className="item"><a href="#"><img src={img15} alt="image description"></img></a></div>
									<div className="item"><a href="#"><img src={img16} alt="image description"></img></a></div>
									<div className="item"><a href="#"><img src={img17} alt="image description"></img></a></div>
									<div className="item"><a href="#"><img src={img18} alt="image description"></img></a></div>
									<div className="item"><a href="#"><img src={img19} alt="image description"></img></a></div>
									<div className="item"><a href="#"><img src={img20} alt="image description"></img></a></div>
									<div className="item"><a href="#"><img src={img21} alt="image description"></img></a></div>
									<div className="item"><a href="#"><img src={img15} alt="image description"></img></a></div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-4 col-xs-6 box-width">
							<div className="box">
								<h5>NewsLetter</h5>
								<div className="description">
									<p>On the other hand, we denounce with righteous nation and dislike men .</p>
								</div>
								<form className="form-newsletter">
									<fieldset>
										<div className="form-group"><input type="text" name="name" className="form-control" placeholder="Your Name"/></div>
										<div className="form-group"><input type="email" name="email" className="form-control" placeholder="Email Address"/></div>
										<div className="form-group"><button type="submit">Subscribed Newsletter</button></div>
									</fieldset>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="copyright">
				<div className="container">
					<p>Copyright &copy; 2015 - All Rights Reserved.</p>
				</div>
			</div>
		</footer>
        );
	}
}

export default Footer;
