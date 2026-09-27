import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronLeft, ChevronRight, Coffee, Menu as MenuIcon, UtensilsCrossed, Wine, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import momo from "@/assets/menu-food-1.jpg";
import tikka from "@/assets/menu-food-2.jpg";
import drink from "@/assets/menu-food-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CIRO Menus — Menus made to be remembered" },
      { name: "description", content: "Discover thoughtfully designed restaurant menus, from elegant dining to café and drinks menus. Explore menu styles and sample work by CIRO Menus." },
      { property: "og:title", content: "CIRO Menus — Menus made to be remembered" },
      { property: "og:description", content: "Beautifully considered menus for restaurants, cafés and bars. Explore menu styles and sample work." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Category = "All menus" | "Restaurant" | "Café" | "Drinks";
const filters: Category[] = ["All menus", "Restaurant", "Café", "Drinks"];

const menus = [
  { id: 1, title: "The Dining Edit", category: "Restaurant" as Category, style: "ELEGANT · EDITORIAL", image: momo, number: "01", description: "A considered, image-led menu for restaurants that make every meal an occasion.", items: ["Signature momo", "Seasonal small plates", "Chef's specials"] },
  { id: 2, title: "The Everyday Table", category: "Café" as Category, style: "WARM · INVITING", image: tikka, number: "02", description: "Warm typography and clear sections make the everyday favorites feel special.", items: ["All-day favorites", "Freshly baked", "Coffee & more"] },
  { id: 3, title: "After Hours", category: "Drinks" as Category, style: "BOLD · MODERN", image: drink, number: "03", description: "A drinks menu with a little more personality, made for the first sip and the last.", items: ["House cocktails", "Zero-proof drinks", "Something sparkling"] },
];

const partnerMarks = [
  { icon: "✳", name: "YOUR RESTAURANT", sub: "LOGO HERE" },
  { icon: "✦", name: "YOUR CAFÉ", sub: "LOGO HERE" },
  { icon: "◈", name: "YOUR BISTRO", sub: "LOGO HERE" },
  { icon: "❋", name: "YOUR BAR", sub: "LOGO HERE" },
  { icon: "✳", name: "YOUR KITCHEN", sub: "LOGO HERE" },
];

function Index() {
  const [filter, setFilter] = useState<Category>("All menus");
  const [selected, setSelected] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const visible = menus.filter((menu) => filter === "All menus" || menu.category === filter);
  const active = menus.find((menu) => menu.id === selected);

  useEffect(() => {
    if (selected === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
      if (event.key === "ArrowRight") setSelected((current) => current === null ? null : current % menus.length + 1);
      if (event.key === "ArrowLeft") setSelected((current) => current === null ? null : (current + menus.length - 2) % menus.length + 1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [selected]);

  return (
    <main>
      <section id="home" className="site-hero relative flex min-h-[660px] flex-col text-paper md:min-h-[740px]">
        <div className="hero-bottom-fade pointer-events-none absolute inset-x-0 bottom-0 h-48" />
        <header className="relative z-10 border-b border-paper/15">
          <div className="mx-auto flex h-[78px] max-w-[1440px] items-center justify-between gap-6 px-6 md:px-12 lg:px-16">
            <a href="#home" className="flex items-center gap-3" aria-label="CIRO Menus home">
              <span className="flex size-9 items-center justify-center rounded-[5px] bg-flame text-ink"><UtensilsCrossed size={19} strokeWidth={2.2} /></span>
              <span className="font-sans text-[23px] font-extrabold tracking-normal">CIRO<span className="text-flame">.</span><span className="ml-2 align-middle text-[10px] font-semibold uppercase tracking-[.22em] text-paper/70">Menus</span></span>
            </a>
            <nav className="hidden items-center gap-9 text-[13px] font-medium text-paper/75 md:flex" aria-label="Main navigation">
              <a className="text-paper transition-colors hover:text-flame" href="#home">Home</a>
              <a className="transition-colors hover:text-flame" href="#styles">Menu styles</a>
              <a className="transition-colors hover:text-flame" href="#work">Our work</a>
              <a className="transition-colors hover:text-flame" href="#about">About</a>
            </nav>
            <Button variant="flame" size="nav" className="hidden md:inline-flex" asChild><a href="#work">Explore menus <ArrowUpRight /></a></Button>
            <Button variant="heroGhost" size="icon" className="md:hidden" aria-label={mobileOpen ? "Close menu" : "Open menu"} onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X /> : <MenuIcon />}</Button>
          </div>
          {mobileOpen && <nav className="flex flex-col gap-1 border-t border-paper/15 bg-ink px-6 py-4 text-sm md:hidden" aria-label="Mobile navigation">{[["Home", "#home"], ["Menu styles", "#styles"], ["Our work", "#work"], ["About", "#about"]].map(([label, href]) => <a key={label} className="py-2" href={href} onClick={() => setMobileOpen(false)}>{label}</a>)}</nav>}
        </header>

        <div className="relative z-[1] mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center px-6 pb-24 pt-20 md:px-12 lg:px-16">
          <div className="max-w-[730px]">
            <p className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[.26em] text-flame"><span className="h-px w-8 bg-flame" /> THE ART OF THE MENU</p>
            <h1 className="font-display text-[64px] font-semibold leading-[.91] md:text-[94px] lg:text-[112px]">Menus made<br />to be <em className="font-normal text-flame">remembered.</em></h1>
            <p className="mt-8 max-w-[460px] text-[15px] leading-7 text-paper/75 md:text-[17px]">The first taste of your restaurant starts on the page. We create menus that look as good as the food feels.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button variant="flame" size="hero" asChild><a href="#work">View our menus <ArrowRight /></a></Button>
              <Button variant="heroGhost" size="hero" asChild><a href="#styles">Explore styles <ArrowDown /></a></Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-6 z-[1] text-[10px] font-semibold uppercase tracking-[.2em] text-paper/50 md:left-12 lg:left-16">DESIGNED FOR THE TABLE · MADE FOR THE MOMENT</div>
        <div className="absolute bottom-6 right-6 z-[1] hidden items-center gap-2 text-[10px] font-semibold uppercase tracking-[.2em] text-paper/50 md:flex lg:right-16">SCROLL TO EXPLORE <ArrowDown size={13} /></div>
      </section>

      <section className="overflow-hidden bg-ink py-8 text-paper" aria-label="Restaurant logo placeholders">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
          <p className="mb-6 text-center text-[10px] font-bold uppercase tracking-[.24em] text-paper/45">A PLACE FOR THE RESTAURANTS WE WORK WITH</p>
          <div className="marquee-mask overflow-hidden">
            <div className="marquee-track flex items-center" aria-label="Restaurant logo slots">
              {[...partnerMarks, ...partnerMarks].map((mark, index) => <div key={index} className="flex w-[220px] shrink-0 items-center justify-center gap-3 border-r border-paper/10 px-6 text-paper/75 md:w-[280px]">
                <span className="font-display text-[34px] leading-none text-flame/80">{mark.icon}</span>
                <span className="flex flex-col text-[12px] font-bold tracking-[.1em] leading-tight">{mark.name}<span className="mt-1 text-[9px] font-medium tracking-[.2em] text-paper/55">{mark.sub}</span></span>
              </div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="styles" className="scroll-mt-4 border-b border-line/70 py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
          <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-end">
            <div><p className="mb-4 text-[11px] font-bold uppercase tracking-[.24em] text-flame">01 / THE POSSIBILITIES</p><h2 className="max-w-[570px] font-display text-[53px] font-semibold leading-[.95] md:text-[73px]">A menu for every<br /><em className="font-normal">kind of table.</em></h2></div>
            <p className="max-w-[430px] text-[15px] leading-7 text-soft-ink md:justify-self-end">From long, leisurely dinners to a quick coffee on the go, each menu is shaped around the way your guests experience your place.</p>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-[4px] border border-line bg-line md:grid-cols-3">
            <div className="bg-background p-8 md:p-10"><UtensilsCrossed className="mb-8 text-flame" size={27} strokeWidth={1.6} /><span className="block text-[10px] font-bold uppercase tracking-[.22em] text-soft-ink">01 — RESTAURANT</span><h3 className="mt-3 font-display text-[36px] font-semibold leading-none">Dining menus</h3><p className="mt-4 text-[14px] leading-6 text-soft-ink">For the dishes people come back for, and the ones they can't wait to discover.</p></div>
            <div className="bg-background p-8 md:p-10"><Coffee className="mb-8 text-flame" size={27} strokeWidth={1.6} /><span className="block text-[10px] font-bold uppercase tracking-[.22em] text-soft-ink">02 — CAFÉ</span><h3 className="mt-3 font-display text-[36px] font-semibold leading-none">Café menus</h3><p className="mt-4 text-[14px] leading-6 text-soft-ink">Easy to browse, lovely to look at, and full of everyday charm.</p></div>
            <div className="bg-background p-8 md:p-10"><Wine className="mb-8 text-flame" size={27} strokeWidth={1.6} /><span className="block text-[10px] font-bold uppercase tracking-[.22em] text-soft-ink">03 — BAR & DRINKS</span><h3 className="mt-3 font-display text-[36px] font-semibold leading-none">Drinks menus</h3><p className="mt-4 text-[14px] leading-6 text-soft-ink">For signature pours, evening rituals, and everything in between.</p></div>
          </div>
        </div>
      </section>

      <section id="work" className="scroll-mt-4 py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div><p className="mb-4 text-[11px] font-bold uppercase tracking-[.24em] text-flame">02 / OUR MENU COLLECTION</p><h2 className="font-display text-[53px] font-semibold leading-[.95] md:text-[73px]">A little taste of<br /><em className="font-normal">what's possible.</em></h2></div>
            <p className="max-w-[315px] text-[14px] leading-6 text-soft-ink">Sample menu concepts. Your restaurant's finished menu will be made your own.</p>
          </div>
          <div className="mt-12 flex flex-wrap gap-2 border-b border-line pb-4" role="group" aria-label="Filter menu examples">
            {filters.map((option) => <Button key={option} variant={filter === option ? "filterActive" : "filter"} size="filter" onClick={() => setFilter(option)} aria-pressed={filter === option}>{option}</Button>)}
          </div>
          <div className="mt-8 grid gap-7 md:grid-cols-3">
            {visible.map((menu) => <article key={menu.id} className="menu-card group overflow-hidden rounded-[5px] border border-line bg-card">
              <div className="relative h-[370px] overflow-hidden bg-ink sm:h-[430px] md:h-[360px] lg:h-[440px]">
                <img className="menu-card-image h-full w-full object-cover" src={menu.image} alt={`${menu.title} sample menu photography`} loading="lazy" width={768} height={1024} />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-ink/15" />
                <span className="absolute left-6 top-6 rounded-[3px] border border-paper/35 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[.16em] text-paper">{menu.category}</span>
                <div className="absolute bottom-6 left-6 right-6 text-paper"><span className="text-[10px] font-bold uppercase tracking-[.22em] text-flame">{menu.style}</span><h3 className="mt-2 font-display text-[42px] font-semibold leading-none">{menu.title}</h3></div>
              </div>
              <div className="flex items-center justify-between gap-4 px-6 py-5"><span className="text-[11px] font-bold uppercase tracking-[.18em] text-soft-ink">MENU CONCEPT {menu.number}</span><Button variant="textArrow" size="text" onClick={() => setSelected(menu.id)} aria-label={`Preview ${menu.title}`}>Preview menu <ArrowUpRight /></Button></div>
            </article>)}
          </div>
        </div>
      </section>

      <section id="about" className="bg-ink py-20 text-paper md:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-6 md:grid-cols-[1fr_1fr] md:items-end md:px-12 lg:px-16">
          <div><p className="mb-5 text-[11px] font-bold uppercase tracking-[.24em] text-flame">MORE THAN A LIST OF DISHES</p><h2 className="font-display text-[53px] font-semibold leading-[.98] md:text-[76px]">Make the first<br />impression <em className="font-normal text-flame">delicious.</em></h2></div>
          <div className="md:justify-self-end"><p className="max-w-[430px] text-[15px] leading-7 text-paper/65">A good menu tells your story before the first plate arrives. CIRO Menus pairs clear design with a little personality, so every detail feels like your restaurant.</p><Button variant="heroGhost" size="hero" className="mt-7" asChild><a href="#work">See the collection <ArrowUpRight /></a></Button></div>
        </div>
      </section>
      <footer className="bg-ink text-paper"><div className="mx-auto flex max-w-[1440px] flex-col gap-4 border-t border-paper/15 px-6 py-7 text-[11px] text-paper/45 md:flex-row md:items-center md:justify-between md:px-12 lg:px-16"><span className="text-[18px] font-extrabold text-paper">CIRO<span className="text-flame">.</span><span className="ml-2 text-[10px] font-medium uppercase tracking-[.2em] text-paper/50">Menus</span></span><span>MENUS WITH A LITTLE MORE TO SAY.</span><a href="#home" className="transition-colors hover:text-flame">BACK TO TOP ↑</a></div></footer>

      {active && <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/85 p-4 backdrop-blur-sm" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelected(null); }}>
        <div role="dialog" aria-modal="true" aria-label={`${active.title} menu preview`} className="relative grid max-h-[min(92vh,850px)] w-full max-w-[920px] overflow-y-auto rounded-[5px] bg-card shadow-2xl md:grid-cols-[.85fr_1fr]">
          <Button variant="modalClose" size="icon" className="absolute right-4 top-4 z-10" onClick={() => setSelected(null)} aria-label="Close preview"><X /></Button>
          <div className="relative min-h-[270px] overflow-hidden md:min-h-[540px]"><img src={active.image} alt={`${active.title} food photography`} className="absolute inset-0 h-full w-full object-cover" width={768} height={1024} /><div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" /><span className="absolute bottom-6 left-7 text-[11px] font-semibold uppercase tracking-[.22em] text-paper">SAMPLE MENU · {active.number}</span></div>
          <div className="flex flex-col p-7 md:p-12"><span className="text-[11px] font-bold uppercase tracking-[.22em] text-flame">{active.category} / {active.style}</span><h2 className="mt-6 font-display text-[53px] font-semibold leading-[.95] md:text-[66px]">{active.title}</h2><p className="mt-6 max-w-[350px] text-[15px] leading-7 text-soft-ink">{active.description}</p><div className="mt-10 border-t border-line pt-5"><p className="text-[10px] font-bold uppercase tracking-[.2em] text-soft-ink">A TASTE OF THE LAYOUT</p><ul className="mt-5 space-y-4">{active.items.map((item) => <li key={item} className="flex items-center justify-between border-b border-line/70 pb-3 font-display text-[24px]"><span>{item}</span><Check className="text-flame" size={16} /></li>)}</ul></div><div className="mt-auto flex items-center justify-between pt-9"><Button variant="filter" size="icon" onClick={() => setSelected((active.id + menus.length - 2) % menus.length + 1)} aria-label="Previous menu"><ChevronLeft /></Button><span className="text-[11px] font-semibold tracking-[.15em] text-soft-ink">0{active.id} / 0{menus.length}</span><Button variant="filter" size="icon" onClick={() => setSelected(active.id % menus.length + 1)} aria-label="Next menu"><ChevronRight /></Button></div></div>
        </div>
      </div>}
    </main>
  );
}