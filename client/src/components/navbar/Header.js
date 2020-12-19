import React from 'react';

function Header() {
	return (
		<header>
			<nav className="navbar navbar-light">
				<a className="navbar-brand mb-0" href="#home">
					Quiz Site
				</a>
				<div className="ml-auto nav-icons-col d-block d-sm-none">
					<a href="#login">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 496 512"
							width="36"
							height="36">
							<path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z" />
						</svg>
					</a>
					<a href="#make">
						<svg
							aria-hidden="true"
							focusable="false"
							data-prefix="fas"
							data-icon="plus-circle"
							className="svg-inline--fa fa-plus-circle fa-w-16"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512">
							<path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path>
						</svg>
					</a>
				</div>
				<ul className="nav justify-content-end d-none d-sm-flex">
					<li className="nav-item">
						<a className="nav-link" href="#categories">
							Categories
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#make">
							Make
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#login">
							Login
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#signup">
							Signup
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/test">
							Run Test
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
