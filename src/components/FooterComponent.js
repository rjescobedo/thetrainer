import React from 'react';

function Footer(props) {
    return (
        <footer className="site-footer bg-light">
            <div className="container">
                <div className="row text-center">
                    <div className="col">
                        <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com" target="_blank">
                            <i className="fa fa-facebook"></i>
                        </a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="https://www.twitter.com" target="_blank">
                            <i className="fa fa-twitter"></i>
                        </a>{' '}
                        <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/raul-escobedo-8aa7a522/" target="_blank">
                            <i className="fa fa-linkedin"></i>
                        </a>{' '}
                        <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com" target="_blank">
                            <i className="fa fa-instagram"></i>
                        </a>{' '}
                        <a className="btn btn-social-icon btn-github" href="https://github.com/rjescobedo/thetrainer.git" target="_blank">
                            <i className="fa fa-github"></i>
                        </a>{' '}
                    </div>
                </div>
                <div className="row text-center pt-4">
                    <div className="col">
                        <span class="text-muted">&copy; 2021 The Trainer, Inc.</span>
                    </div>
                </div>
            </div>
        </footer>
        
    );
}

export default Footer;