import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductGrid from '../components/products/ProductGrid'
import { getProducts } from '../services/catalogApi'

const preparationSteps = [
  { title: 'Pažljivo biramo sastojke', text: 'Kvalitetni sastojci temelj su dobrog domaćeg kolača.', image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=900&q=85' },
  { title: 'Pripremamo tijesto', text: 'Tijesto i smjese pripremamo pažljivo, prema receptu.', image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484b2?auto=format&fit=crop&w=900&q=85' },
  { title: 'Dodajemo nadjev', text: 'Okusi i nadjevi koji kolaču daju domaći karakter.', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=85' },
  { title: 'Oblikujemo i ukrašavamo', text: 'Svaki detalj uređujemo s pažnjom.', image: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=900&q=85' },
  { title: 'Pečemo do savršenstva', text: 'Pratimo pripremu i završne detalje.', image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=900&q=85' },
  { title: 'Svježe pripremljeno', text: 'Gotov proizvod spreman je za preuzimanje ili dogovorenu dostavu.', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85' },
]

export default function HomePage({ products: fallbackProducts, onAdd }) {
  const [products, setProducts] = useState(fallbackProducts || [])

  useEffect(() => {
    let active = true
    getProducts()
      .then((data) => { if (active && Array.isArray(data) && data.length) setProducts(data) })
      .catch(() => {})
    return () => { active = false }
  }, [])

  const isMeal = (product) => /ručak|jelo|juha|gulaš|sarma|piletina|varivo|obrok|riba|rižot/i.test(`${product.name || ''} ${product.category || ''} ${product.description || ''}`)
  const cakes = products.filter((product) => !isMeal(product))
  const meals = products.filter(isMeal)

  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">DOMAĆE • SVJEŽE • S PAŽNJOM PRIPREMLJENO</p>
          <h1>Okusi doma,<br /><em>kao nekad.</em></h1>
          <p>Domaći kolači i prava kuhana jela, pripremljeni s pažnjom i ljubavlju prema domaćoj kuhinji.</p>
          <div className="hero-actions">
            <Link className="button primary" to="/ponuda">Pogledaj ponudu</Link>
            <a className="button secondary" href="#proces">Pogledaj proces pripreme</a>
          </div>
        </div>
      </section>

      <section className="promise" aria-label="Naša obećanja">
        <div><strong>♥</strong><span>Domaći okusi i pažljivo odabrani sastojci</span></div>
        <div><strong>✿</strong><span>Kolači i jela pripremljeni s pažnjom</span></div>
        <div><strong>⌂</strong><span>Dostava prema dogovoru</span></div>
      </section>

      <section className="section" id="ponuda">
        <div className="section-heading">
          <div><p className="eyebrow">IZ NAŠE KUHINJE</p><h2>Domaći kolači</h2></div>
          <p>Tradicionalni okusi, pažljiva priprema i ponuda koja se mijenja ovisno o sezoni.</p>
        </div>
        {cakes.length ? <ProductGrid products={cakes} onAdd={onAdd} /> : <div className="photo-feature-grid">
          <article className="photo-feature"><img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85" alt="Torta s čokoladom i ukrasima" /><h3>Torte za posebne trenutke</h3><p>Izrada prema dogovoru i željama kupca.</p></article>
          <article className="photo-feature"><img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=85" alt="Svježe pečeni domaći proizvodi" /><h3>Tradicionalni recepti</h3><p>Omiljeni okusi i mirisi iz domaće kuhinje.</p></article>
          <article className="photo-feature"><img src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=900&q=85" alt="Mali kolači spremni za posluživanje" /><h3>Kolači za svaku prigodu</h3><p>Za obiteljska okupljanja, blagdane i proslave.</p></article>
        </div>}
      </section>

      <section className="meal-band">
        <div className="meal-copy"><p className="eyebrow">SVAKI DAN NEŠTO FINO</p><h2>Prava domaća gotova jela</h2><p>Ne industrijski pripremljena hrana, nego kuhana jela s poznatim sastojcima, jasnim opisom i mogućnošću naručivanja unaprijed.</p><Link className="button primary" to="/ponuda">Pogledaj ponudu</Link></div>
        <img src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85" alt="Šareno, svježe pripremljeno jelo" loading="lazy" />
      </section>

      {meals.length > 0 && <section className="section"><div className="section-heading"><div><p className="eyebrow">KUHANO S PAŽNJOM</p><h2>Gotova jela</h2></div><p>Odaberite obrok za sebe ili naručite za člana obitelji.</p></div><ProductGrid products={meals} onAdd={onAdd} /></section>}

      <section className="section process-section" id="proces">
        <div className="section-heading"><div><p className="eyebrow">OD SASTOJAKA DO STOLA</p><h2>Kako nastaju naši kolači</h2></div><p>Želimo prikazati cijeli put pripreme, od sastojaka do gotovog proizvoda. Fotografije procesa u konačnoj ponudi trebaju prikazivati stvarnu pripremu.</p></div>
        <div className="process-grid">{preparationSteps.map((step, index) => <article className="process-card" key={step.title}><div className="process-image"><img src={step.image} alt={step.title} loading="lazy" /><span>{String(index + 1).padStart(2, '0')}</span></div><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
      </section>

      <section className="custom section">
        <div><p className="eyebrow">TVOJA IDEJA</p><h2>Torta po želji</h2><p>Pošalji nam fotografiju, opiši što želiš i reci za koliko osoba treba torta. Pregledat ćemo upit i javiti konačnu cijenu.</p></div>
        <div className="custom-list"><span>01</span><p>Fotografija ili primjer</p><span>02</span><p>Broj osoba i okus</p><span>03</span><p>Ukras i tekst na torti</p><span>04</span><p>Datum i napomena</p><Link className="button primary" to="/torta-po-zelji">Pošalji upit</Link></div>
      </section>
    </main>
  )
}
