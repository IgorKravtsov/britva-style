import React from 'react';
import Container from '../container/container';
import cn from "classnames";

import markMap from './img/map_mark.svg';
import styles from './header.module.scss';

export interface HeaderProps {

}

const Header:React.FC<HeaderProps> = () => {
    const [scroll, setScroll] = React.useState(0);

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scroll]);

    return (
        <header className={cn(styles.header, {
            [styles.header__scrolled]: scroll > 10,
        })}>
            <Container>
                <div className={styles.wrapper}>
                    <img 
                        src={process.env.PUBLIC_URL + '/img/Logo.svg'} 
                        alt="logo"
                        className={styles.logo}
                    />
                    <nav>
                        <ul className={styles.nav__ul}>
                            <li>About Us</li>
                            <li>Our masters</li>
                            <li>Portfolio</li>
                            <li>Testimonials</li>
                            <li>Contacts</li>
                        </ul>
                    </nav>
                    <div className={styles.header__map_position}>
                        <span>302 W 50th St, NY, NY 10019</span>
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="36" height="36" rx="18" fill="#FF6E40"/>
                            <path d="M23.907 13.48C23.8429 13.2399 23.7128 12.984 23.6165 12.76C22.4647 9.99202 19.9481 9.00002 17.9161 9.00002C15.1958 9.00002 12.1998 10.8241 11.7998 14.5839V15.352C11.7998 15.3841 11.8109 15.672 11.8265 15.8161C12.0508 17.6079 13.4647 19.5122 14.5206 21.304C15.6566 23.2238 16.8355 25.1123 18.0033 27C18.7235 25.7681 19.441 24.52 20.1448 23.32C20.3366 22.9679 20.5592 22.6159 20.7512 22.2798C20.8792 22.056 21.1237 21.8322 21.2354 21.6239C22.3714 19.5441 24.1999 17.4481 24.1999 15.384V14.5361C24.1999 14.3123 23.9226 13.5283 23.907 13.48ZM17.9659 17.3361C17.1663 17.3361 16.291 16.9363 15.859 15.8321C15.7947 15.6563 15.7999 15.3041 15.7999 15.2718V14.7758C15.7999 13.3682 16.9951 12.728 18.0349 12.728C19.3149 12.728 20.305 13.7522 20.305 15.0323C20.305 16.3123 19.246 17.3361 17.9659 17.3361Z" fill="#3B322D"/>
                        </svg>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header;