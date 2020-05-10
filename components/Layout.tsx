import * as React from 'react';
// @ts-ignore
import Link from 'next/link';
// @ts-ignore
import Head from 'next/head';

type Props = {
    title?: string;
};

const Layout: React.FunctionComponent<Props> = ({ children, title = 'This is the default title' }) => (
    <>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
            />
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        </Head>
        <header>
            <nav>
                <div className="nav-wrapper container">
                    <a href="#" className="brand-logo">
                        Logo
                    </a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/posts/new">
                                <a>Create Post</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        <main>{children}</main>
        <footer className="page-footer">
            <div className="container">
                <h5 className="white-text">Links</h5>
                <ul>
                    <li>
                        <a className="grey-text text-lighten-3" href="#!">
                            Link 1
                        </a>
                    </li>
                </ul>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    © 2014 Copyright Text
                    <a className="grey-text text-lighten-4 right" href="#!">
                        More Links
                    </a>
                </div>
            </div>
        </footer>
    </>
);

export default Layout;
