import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <div>
        <div className='topNav'>
          <nav>
            <ul>
              <li>
                <Link
                  href='/'
                  passHref
                  legacyBehavior>
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link
                  href='/events'
                  passHref
                  legacyBehavior>
                  <a>Events</a>
                </Link>
              </li>
              <li>
                <Link
                  href='/about-us'
                  passHref
                  legacyBehavior>
                  <a>About Us</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className='title'>Book Memorable Vacation Experiences with Us</p>
      </div>
    </header>
  );
};
