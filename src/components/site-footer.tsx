import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell compact-footer">
        <Link className="footer-mark" href="/" scroll>LZ<span>.</span></Link>
        <nav aria-label="Footer navigation">
          <Link href="/projects" scroll>Projects</Link>
          <Link href="/beyond-code" scroll>Beyond Code</Link>
          <Link href="/contact" scroll>Contact</Link>
        </nav>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Lana Zgonjanin</span>
        </div>
      </div>
    </footer>
  );
}
