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
            <Link href="/">
              <a style={linkStyle}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/list">
              <a style={linkStyle}>Catégorie</a>
            </Link>
          </li>
          <li>
            <Link href="/whishlist">
              <a style={linkStyle}>whishlist</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
