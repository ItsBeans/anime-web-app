import Link from 'next/link';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link href="/">Anibeans</Link>
      </div>
      <nav className="nav">

        <Link href="/search"> search</Link>
        
        <Link href="/signin">sign in</Link>
      </nav> 
    </header>
  );
};

export default Header;
