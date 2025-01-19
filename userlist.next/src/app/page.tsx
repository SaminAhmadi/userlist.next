// Main
import 'app/page.scss';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="home-container home-container--flex-column-center">
      <div className="home-container__bg">
        <div className="home-container__content home-container__content--flex-column-center">
          <h1 className="poppins-bold">Welcome to our Homepage</h1>
          <p className="poppins-light">to get you started, click on the button below</p>
        </div>
      </div>
      <button className="poppins-medium">
        <Link href="/userlist">navigate to user lists</Link>
      </button>
    </div>
  );
}
