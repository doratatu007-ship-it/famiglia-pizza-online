import { Link } from "@tanstack/react-router";
import { Menu, Phone, Pizza, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

const nav = [
  ["Início", "/", undefined], ["Cardápio", "/cardapio", undefined], ["Reservas", "/reservas", undefined],
  ["Sobre", "/", "sobre"], ["Avaliações", "/", "avaliacoes"], ["Galeria", "/", "galeria"], ["Contato", "/", "contato"],
] as const;

export function Brand() {
  return <Link to="/" className="flex items-center gap-3" aria-label="Famiglia da Pizza — início"><span className="brand-mark"><Pizza aria-hidden="true" /></span><span className="leading-none"><strong className="font-display text-xl font-semibold text-foreground">Famiglia</strong><small className="mt-1 block text-[10px] font-bold uppercase tracking-[.22em] text-primary">da Pizza</small></span></Link>;
}

export function SiteHeader() {
  const [open,setOpen]=useState(false);
  const close=()=>setOpen(false);
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-md">
    <div className="site-container flex h-20 items-center justify-between"><Brand />
      <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegação principal">{nav.map(([label,to,hash])=><Link key={label} to={to} {...(hash ? { hash } : {})} className="nav-link">{label}</Link>)}</nav>
      <div className="hidden lg:block"><Button asChild variant="gold"><Link to="/cardapio">Ver Cardápio</Link></Button></div>
      <Button variant="ghost" size="icon" className="lg:hidden" aria-label={open?"Fechar menu":"Abrir menu"} aria-expanded={open} onClick={()=>setOpen(v=>!v)}>{open?<X/>:<Menu/>}</Button>
    </div>
    <div className={`mobile-menu lg:hidden ${open?"mobile-menu-open":""}`}><nav className="site-container grid gap-1 pb-5" aria-label="Navegação móvel">{nav.map(([label,to,hash])=><Link onClick={close} key={label} to={to} {...(hash ? { hash } : {})} className="rounded-md px-4 py-3 font-semibold text-foreground hover:bg-secondary">{label}</Link>)}</nav></div>
  </header>;
}

export function SiteFooter(){return <footer className="bg-ink pb-24 pt-16 text-cream lg:pb-10"><div className="site-container grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]"><div><div className="font-display text-3xl">Famiglia da Pizza</div><p className="mt-3 text-cream/70">Pizza, família e bons momentos.</p></div><div><h3 className="eyebrow text-gold">Navegue</h3><div className="mt-4 grid grid-cols-2 gap-3 text-sm">{nav.map(([label,to,hash])=><Link key={label} to={to} {...(hash ? { hash } : {})} className="text-cream/75 hover:text-cream">{label}</Link>)}</div></div><div><h3 className="eyebrow text-gold">Visite</h3><p className="mt-4 text-sm leading-6 text-cream/75">Av. Alcindo Cacela, 408 – Umarizal<br/>Belém – PA</p><a className="mt-3 inline-block font-semibold text-cream" href="tel:+559132362014">(91) 3236-2014</a></div></div><div className="site-container mt-12 border-t border-cream/15 pt-6 text-xs text-cream/50">Desde 2016, pizzas artesanais em Belém.</div></footer>}

export function MobileBar(){return <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px border-t border-border bg-border p-2 pb-[calc(.5rem+env(safe-area-inset-bottom))] lg:hidden"><Button asChild size="lg" variant="gold"><Link to="/cardapio"><Pizza/>Cardápio</Link></Button><Button asChild size="lg" variant="dark"><a href="tel:+559132362014"><Phone/>Ligar</a></Button></div>}

export function SiteShell({children}:{children:ReactNode}){return <><SiteHeader/><main>{children}</main><SiteFooter/><MobileBar/></>}
