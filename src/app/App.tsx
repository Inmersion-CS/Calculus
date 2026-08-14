import { HashRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import { siteConfig } from './siteConfig';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <div className="header-inner">
          <Link className="brand" to="/" aria-label="Calculus home">
            <span className="brand-mark" aria-hidden="true">∫</span>
            <span>{siteConfig.name}</span>
          </Link>
          <nav aria-label="Primary navigation" className="primary-nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/roadmap">Roadmap</NavLink>
            <NavLink to="/contribute">Contribute</NavLink>
          </nav>
        </div>
      </header>
      <main id="main-content" className="page-shell">{children}</main>
      <footer className="site-footer">
        <span>Open-source learning software by Inmersion-CS.</span>
        <a href={siteConfig.repositoryUrl}>GitHub repository</a>
      </footer>
    </div>
  );
}

function HomePage() {
  return (
    <Layout>
      <section className="hero" aria-labelledby="hero-title">
        <div>
          <p className="eyebrow">Foundation v0.1 · Open source</p>
          <h1 id="hero-title">{siteConfig.name}</h1>
          <p className="hero-lead">{siteConfig.shortPurpose}</p>
          <p className="hero-copy">{siteConfig.longPurpose}</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/roadmap">View roadmap</Link>
            <a className="button button-secondary" href={siteConfig.repositoryUrl}>Open repository</a>
          </div>
        </div>
        <div className="math-card" aria-label="Calculus concept preview">
          <span className="math-card-label">Explore change</span>
          <strong>f′(x)</strong>
          <span>limits → rates → accumulation</span>
        </div>
      </section>

      <section className="content-section" aria-labelledby="future-heading">
        <p className="section-kicker">Direction</p>
        <h2 id="future-heading">What this project will become</h2>
        <p>
          Calculus will grow into an interactive learning environment that connects explanations,
          visual reasoning, deliberate practice, and a free mathematical laboratory.
        </p>
        <div className="roadmap-grid">
          {siteConfig.roadmap.map((item, index) => (
            <article className="roadmap-card" key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{item}</h3>
              <p>Planned for a later subject-specific development cycle.</p>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}

function RoadmapPage() {
  return (
    <Layout>
      <section className="narrow-page">
        <p className="eyebrow">Project direction</p>
        <h1>Roadmap</h1>
        <p>The foundation is being built first. Course-specific learning tools follow in later releases.</p>
        <ol className="roadmap-list">
          {siteConfig.roadmap.map((item) => <li key={item}>{item}</li>)}
        </ol>
      </section>
    </Layout>
  );
}

function ContributePage() {
  return (
    <Layout>
      <section className="narrow-page">
        <p className="eyebrow">Open source</p>
        <h1>Contribute</h1>
        <p>
          Contributions are welcome. Read the repository contribution guide before opening a pull request.
        </p>
        <a className="button button-primary" href={`${siteConfig.repositoryUrl}/blob/main/CONTRIBUTING.md`}>
          Read contribution guide
        </a>
      </section>
    </Layout>
  );
}

function NotFoundPage() {
  return (
    <Layout>
      <section className="narrow-page">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p>The page you requested does not exist.</p>
        <Link className="button button-primary" to="/">Return home</Link>
      </section>
    </Layout>
  );
}

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/roadmap" element={<RoadmapPage />} />
        <Route path="/contribute" element={<ContributePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
}
