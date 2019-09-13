import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

export default function Header() {
  return (
    <header>
      <nav>
        <ul className="nav">
          <li>
            <Link prefetch passHref href="/">
              <a style={linkStyle}>Home</a>
            </Link>
          </li>
          <li>
            <Link prefetch passHref href="/list">
              <a style={linkStyle}>Catégorie</a>
            </Link>
          </li>
          <li>
            <Link prefetch passHref href="/whishlist">
              <a style={linkStyle}>whishlist</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
