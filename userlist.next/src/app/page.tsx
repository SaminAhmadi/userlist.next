import 'app/page.scss';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="home-container flex-column-center">
      <div className="">
        <h1>Welcome to our Homepage</h1>
        <p>to get you started, click on the button below</p>
      </div>
      <button className="poppins-medium">
        <Link href="/userlist">navigate to user lists</Link>
      </button>
    </div>
  );
}
