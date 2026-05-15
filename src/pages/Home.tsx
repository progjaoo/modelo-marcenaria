import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, ChevronRight, PenTool, Ruler, Clock, MessageSquare, Wrench } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import logoPath from "@assets/Gemini_Generated_Image_dmfdc1dmfdc1dmfd_1778026686333.png";

const WHATSAPP_NUMBER = "5511999999999";
const WHATSAPP_DISPLAY = "+55 11 99999-9999";
const WHATSAPP_DEFAULT_MESSAGE = "Olá! Vim pelo site e gostaria de solicitar um orçamento de marcenaria sob medida.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`;

function Logo() {
  return (
    <img src={logoPath} alt="Trindade Engenharia e Serviços" className="h-10 w-10 rounded-full object-cover" />
  );
}

function LogoLight() {
  return (
    <img src={logoPath} alt="Trindade Engenharia e Serviços" className="h-10 w-10 rounded-full object-cover" />
  );
}

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá, meu nome é ${formData.name}.\nEmail: ${formData.email}\nTelefone: ${formData.phone}\nMensagem: ${formData.message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar com a Trindade Engenharia e Serviços pelo WhatsApp"
        className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#402b30]/30 transition-all hover:-translate-y-1 hover:bg-[#1ebe5d] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/35 md:bottom-8 md:right-8 md:h-16 md:w-16"
      >
        <FaWhatsapp className="h-8 w-8 md:h-9 md:w-9" aria-hidden="true" />
      </a>

      {/* 1. Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md py-4 shadow-sm border-b border-[#faddb4]" : "bg-transparent py-6"}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Logo />
          <nav className="hidden lg:flex items-center gap-8 font-medium text-sm text-[#402b30]">
            <button onClick={() => handleNav("inicio")} className="hover:text-[#DA4F23] transition-colors">Início</button>
            <button onClick={() => handleNav("sobre")} className="hover:text-[#DA4F23] transition-colors">Sobre</button>
            <button onClick={() => handleNav("diferenciais")} className="hover:text-[#DA4F23] transition-colors">Diferenciais</button>
            <button onClick={() => handleNav("servicos")} className="hover:text-[#DA4F23] transition-colors">Serviços</button>
            <button onClick={() => handleNav("portfolio")} className="hover:text-[#DA4F23] transition-colors">Portfólio</button>
            <button onClick={() => handleNav("depoimentos")} className="hover:text-[#DA4F23] transition-colors">Depoimentos</button>
            <Button onClick={() => handleNav("contato")} className="bg-[#DA4F23] hover:bg-[#DA4F23]/90 text-white rounded-none ml-4">
              Fale Conosco
            </Button>
          </nav>
          {/* Mobile menu button could go here */}
        </div>
      </header>

      {/* 2. Hero */}
      <section id="inicio" className="relative min-h-screen flex items-center pt-24 pb-12">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#402b30]/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#402b30] via-transparent to-transparent z-10" />
          <img src="/images/hero.png" alt="Luxury bespoke kitchen" className="w-full h-full object-cover" />
        </div>
        
        <div className="container mx-auto px-6 relative z-20 text-[#faddb4]">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-[#DA4F23]"></div>
              <span className="uppercase tracking-[0.2em] text-sm font-semibold text-[#f4c790]">Estúdio de Marcenaria</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.1] mb-8 text-white">
              Marcenaria sob medida para projetos que exigem excelência.
            </h1>
            <p className="text-xl md:text-2xl font-light text-[#faddb4]/90 mb-12 max-w-2xl leading-relaxed">
              A Trindade Engenharia e Serviços transforma projetos autorais em ambientes funcionais, sofisticados e incansavelmente bem executados.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button onClick={() => handleNav("contato")} size="lg" className="bg-[#DA4F23] hover:bg-[#DA4F23]/90 text-white rounded-none text-lg px-10 h-16 transition-all hover:translate-y-[-2px]">
                Solicitar Orçamento
              </Button>
              <Button onClick={() => handleNav("portfolio")} variant="outline" size="lg" className="rounded-none border-[#faddb4] text-[#faddb4] hover:bg-[#faddb4] hover:text-[#402b30] text-lg px-10 h-16 bg-transparent transition-all">
                Ver Portfólio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Strategic positioning */}
      <section id="sobre" className="py-32 bg-[#402b30] text-[#faddb4]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeIn}>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-[#DA4F23]"></div>
                <span className="uppercase tracking-[0.2em] text-sm font-semibold text-[#f4c790]">Sobre Nós</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">Uma parceria de execução para arquitetos.</h2>
              <div className="space-y-6 text-lg font-light text-[#faddb4]/80">
                <p>Compreendemos que um projeto arquitetônico é uma visão que precisa ser materializada com precisão absoluta. Somos o parceiro de confiança de grandes escritórios para transformar desenhos em realidade tátil e impecável.</p>
                <p>Não somos apenas marceneiros; somos engenheiros do detalhe. Do alinhamento dos veios da madeira até o rigor milimétrico das ferragens, cada etapa é tratada com obsessão pela qualidade.</p>
                <ul className="space-y-4 mt-8 pt-8 border-t border-[#faddb4]/20">
                  <li className="flex items-center gap-4">
                    <CheckCircle2 className="text-[#DA4F23] w-6 h-6 shrink-0" />
                    <span>Leitura fiel do projeto e especificações</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <CheckCircle2 className="text-[#DA4F23] w-6 h-6 shrink-0" />
                    <span>Acabamento de altíssimo padrão</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <CheckCircle2 className="text-[#DA4F23] w-6 h-6 shrink-0" />
                    <span>Suporte ponta a ponta, do orçamento à instalação</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6 relative"
            >
              <div className="absolute inset-0 bg-[#DA4F23] translate-x-6 translate-y-6 z-0"></div>
              <img src="/images/service-kitchen.png" alt="Detail" className="w-full aspect-[4/5] object-cover z-10 shadow-xl" />
              <img src="/images/portfolio-1.png" alt="Detail" className="w-full aspect-[4/5] object-cover mt-12 z-10 shadow-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Por que escolher */}
      <section id="diferenciais" className="py-32 bg-[#faddb4] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeIn} className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#402b30]">Por que escolher a Trindade</h2>
            <p className="text-lg text-[#402b30]/80">Nossa reputação é construída sobre pilares inegociáveis de qualidade, respeito ao cliente e rigor técnico.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: PenTool, title: "Execução Sob Medida", desc: "Cada peça é única, fabricada com as dimensões e materiais exatos do projeto." },
              { icon: Ruler, title: "Acabamento Premium", desc: "Utilizamos as melhores ferragens e lâminas do mercado para um toque refinado." },
              { icon: MessageSquare, title: "Parceria com Arquitetos", desc: "Falamos a mesma língua. Respeitamos a estética e a intenção original do autor." },
              { icon: Clock, title: "Compromisso com Prazo", desc: "Cronogramas realistas e seguidos à risca para não atrasar sua obra." },
              { icon: CheckCircle2, title: "Atendimento Consultivo", desc: "Apoiamos nas decisões técnicas de viabilidade antes mesmo da fabricação." },
              { icon: Wrench, title: "Instalação Cuidadosa", desc: "Equipe própria, limpa e meticulosa para a montagem final no ambiente." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#fff4e6] p-10 border border-[#f4c790]/50 hover:border-[#DA4F23] transition-colors group"
              >
                <item.icon className="w-10 h-10 text-[#DA4F23] mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-serif font-bold text-[#402b30] mb-4">{item.title}</h3>
                <p className="text-[#402b30]/70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Services section */}
      <section id="servicos" className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-[#DA4F23]"></div>
                <span className="uppercase tracking-[0.2em] text-sm font-semibold text-[#DA4F23]">O que fazemos</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#402b30]">Nossas Especialidades</h2>
            </div>
            <p className="text-[#402b30]/70 max-w-md text-right hidden md:block">
              Dominamos diversas escalas e tipologias da marcenaria de alto padrão.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: "Móveis Planejados Residenciais", img: "/images/hero.png" },
              { title: "Marcenaria Corporativa", img: "/images/service-corp.png" },
              { title: "Cozinhas Planejadas", img: "/images/service-kitchen.png" },
              { title: "Closets e Dormitórios", img: "/images/service-closet.png" },
              { title: "Painéis e Home Offices", img: "/images/portfolio-1.png" },
              { title: "Execução para Arquitetos", img: "/images/portfolio-2.png" }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-[4/3] mb-6 bg-[#402b30]">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-[#402b30]/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#402b30] flex items-center justify-between">
                  {service.title}
                  <ChevronRight className="text-[#DA4F23] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Portfolio section */}
      <section id="portfolio" className="py-32 bg-[#402b30] text-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#faddb4]">Portfólio Selecionado</h2>
            <p className="text-lg text-[#faddb4]/70 max-w-2xl mx-auto">Uma amostra do nosso rigor técnico em diferentes ambientes e propostas.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div {...fadeIn} className="relative aspect-[4/3] group overflow-hidden md:col-span-2 lg:col-span-1">
              <img src="/images/portfolio-1.png" alt="Project 1" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-10">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-[#DA4F23] font-bold mb-3 uppercase tracking-[0.15em] text-xs">Residencial • Salas</p>
                  <h3 className="text-3xl font-serif text-[#faddb4]">Painéis em Lâmina Natural e Cobre</h3>
                </div>
              </div>
            </motion.div>
            
            <motion.div {...fadeIn} className="relative aspect-[4/3] group overflow-hidden">
              <img src="/images/portfolio-2.png" alt="Project 2" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-10">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-[#DA4F23] font-bold mb-3 uppercase tracking-[0.15em] text-xs">Residencial • Cozinhas</p>
                  <h3 className="text-3xl font-serif text-[#faddb4]">Cozinha Provençal Contemporânea</h3>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="relative aspect-[4/3] group overflow-hidden">
              {/* Fallback to service images for additional portfolio items if missing specific ones */}
              <img src="/images/service-corp.png" alt="Project 3" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-10">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-[#DA4F23] font-bold mb-3 uppercase tracking-[0.15em] text-xs">Corporativo • Salas de Reunião</p>
                  <h3 className="text-3xl font-serif text-[#faddb4]">Mesa Diretoria e Painéis Acústicos</h3>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="relative aspect-[4/3] group overflow-hidden">
              <img src="/images/service-closet.png" alt="Project 4" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-10">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-[#DA4F23] font-bold mb-3 uppercase tracking-[0.15em] text-xs">Residencial • Dormitórios</p>
                  <h3 className="text-3xl font-serif text-[#faddb4]">Closet Walk-in com Iluminação Embutida</h3>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. Architects section */}
      <section className="py-32 bg-[#faddb4]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <img src="/images/hero.png" alt="Architects" className="w-full aspect-square object-cover shadow-2xl" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-[#402b30] leading-tight">Uma marcenaria parceira para arquitetos exigentes.</h2>
              <div className="space-y-6 text-lg text-[#402b30]/80 leading-relaxed">
                <p>Sabemos que o sucesso do seu projeto depende da execução perfeita do que foi planejado. A Trindade entende a importância de executar projetos exatamente de acordo com as especificações, respeitando estética, medidas, materiais e a experiência final do cliente.</p>
                <p>Nossa equipe técnica atua como uma extensão do seu escritório, oferecendo soluções construtivas inteligentes sem comprometer o design.</p>
                <div className="pt-8 mt-8 border-t border-[#402b30]/20">
                  <Button onClick={() => handleNav("contato")} className="bg-[#402b30] hover:bg-[#2a1c1f] text-[#faddb4] rounded-none h-14 px-8 text-lg w-full sm:w-auto">
                    Seja um Arquiteto Parceiro
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section id="depoimentos" className="py-32 bg-background relative">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-[#DA4F23]"></div>
              <span className="uppercase tracking-[0.2em] text-sm font-semibold text-[#DA4F23]">Reconhecimento</span>
              <div className="h-[1px] w-8 bg-[#DA4F23]"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-[#402b30]">O que dizem nossos clientes</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "A Trindade foi fundamental na execução do nosso projeto mais exigente. Prazo cumprido, acabamento impecável e um cuidado absurdo com os detalhes.",
                author: "Arq. Mariana Lopes",
                role: "Studio Casa Forma"
              },
              {
                text: "Parceiros de confiança. Entendem o projeto como se fosse deles e sempre trazem soluções inteligentes para desafios complexos de execução.",
                author: "Arq. Rafael Mendes",
                role: "RM Arquitetura"
              },
              {
                text: "O closet ficou exatamente como sonhamos. Detalhe e cuidado em cada peça, desde a medição até a limpeza pós-instalação.",
                author: "Cliente Residencial",
                role: "São Paulo, SP"
              }
            ].map((test, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }} className="bg-white p-10 border border-[#faddb4] shadow-sm relative">
                <div className="absolute top-8 right-8 text-[#faddb4] opacity-50 text-6xl font-serif leading-none">"</div>
                <p className="text-lg text-[#402b30] mb-10 italic relative z-10 leading-relaxed pt-4">"{test.text}"</p>
                <div>
                  <p className="font-bold text-[#402b30]">{test.author}</p>
                  <p className="text-sm text-[#DA4F23] mt-1">{test.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Contact Form / Footer Area */}
      <section id="contato" className="py-0 flex flex-col md:flex-row bg-[#402b30]">
        <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center text-[#faddb4]">
          <motion.div {...fadeIn} className="max-w-xl mx-auto w-full">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Vamos materializar seu projeto.</h2>
            <p className="text-lg font-light mb-16 text-[#faddb4]/70">Preencha o formulário e nossa equipe entrará em contato para agendar uma reunião consultiva ou analisar seu projeto executivo.</p>
            
            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-[#DA4F23]/20 flex items-center justify-center shrink-0">
                  <MessageSquare className="text-[#DA4F23] w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold uppercase tracking-[0.1em] text-xs text-[#DA4F23] mb-2">WhatsApp</p>
                  <p className="text-2xl font-serif">{WHATSAPP_DISPLAY}</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-[#DA4F23]/20 flex items-center justify-center shrink-0">
                  <PenTool className="text-[#DA4F23] w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold uppercase tracking-[0.1em] text-xs text-[#DA4F23] mb-2">E-mail</p>
                  <p className="text-xl font-light">contato@trindadeengenharia.com.br</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-[#DA4F23]/20 flex items-center justify-center shrink-0">
                  <Clock className="text-[#DA4F23] w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold uppercase tracking-[0.1em] text-xs text-[#DA4F23] mb-2">Endereço</p>
                  <p className="text-xl font-light">Rua Exemplo, 123 — São Paulo, SP</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 bg-[#faddb4] p-12 md:p-24 flex flex-col justify-center relative">
          <motion.div {...fadeIn} className="max-w-xl mx-auto w-full relative z-10">
            <div className="bg-white p-10 md:p-12 shadow-2xl">
              <h3 className="text-2xl font-serif font-bold text-[#402b30] mb-8">Envie uma mensagem</h3>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold tracking-wide text-[#402b30] mb-2 uppercase">Nome</label>
                  <Input 
                    required 
                    value={formData.name} 
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="rounded-none border-b-2 border-t-0 border-l-0 border-r-0 border-[#402b30]/20 bg-transparent px-0 py-3 text-lg focus-visible:ring-0 focus-visible:border-[#DA4F23] placeholder:text-[#402b30]/30" 
                    placeholder="Seu nome ou escritório"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold tracking-wide text-[#402b30] mb-2 uppercase">E-mail</label>
                  <Input 
                    type="email" 
                    required 
                    value={formData.email} 
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="rounded-none border-b-2 border-t-0 border-l-0 border-r-0 border-[#402b30]/20 bg-transparent px-0 py-3 text-lg focus-visible:ring-0 focus-visible:border-[#DA4F23] placeholder:text-[#402b30]/30" 
                    placeholder="contato@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold tracking-wide text-[#402b30] mb-2 uppercase">Telefone / WhatsApp</label>
                  <Input 
                    type="tel" 
                    required 
                    value={formData.phone} 
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    className="rounded-none border-b-2 border-t-0 border-l-0 border-r-0 border-[#402b30]/20 bg-transparent px-0 py-3 text-lg focus-visible:ring-0 focus-visible:border-[#DA4F23] placeholder:text-[#402b30]/30" 
                    placeholder="(11) 90000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold tracking-wide text-[#402b30] mb-2 uppercase">Mensagem</label>
                  <Textarea 
                    required 
                    rows={4}
                    value={formData.message} 
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    className="rounded-none border-b-2 border-t-0 border-l-0 border-r-0 border-[#402b30]/20 bg-transparent px-0 py-3 text-lg focus-visible:ring-0 focus-visible:border-[#DA4F23] resize-none placeholder:text-[#402b30]/30" 
                    placeholder="Detalhes do seu projeto..."
                  />
                </div>
                <Button type="submit" className="w-full bg-[#DA4F23] hover:bg-[#DA4F23]/90 text-white rounded-none h-16 text-lg mt-4 uppercase tracking-widest font-bold">
                  Iniciar Conversa
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 10. Footer */}
      <footer className="bg-[#2a1c1f] text-[#faddb4]/60 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="mb-6"><LogoLight /></div>
              <p className="text-sm leading-relaxed max-w-sm">
                A Trindade Engenharia e Serviços é o estúdio de marcenaria de alto padrão escolhido por arquitetos que não abrem mão da perfeição na execução de seus projetos.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Navegação</h4>
              <ul className="space-y-3 text-sm">
                <li><button onClick={() => handleNav("sobre")} className="hover:text-white transition-colors">Sobre Nós</button></li>
                <li><button onClick={() => handleNav("servicos")} className="hover:text-white transition-colors">Serviços</button></li>
                <li><button onClick={() => handleNav("portfolio")} className="hover:text-white transition-colors">Portfólio</button></li>
                <li><button onClick={() => handleNav("contato")} className="hover:text-white transition-colors">Contato</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Siga-nos</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition-colors block">Instagram <span className="text-[#DA4F23]">@trindadeengenharia</span></a></li>
                <li><a href="#" className="hover:text-white transition-colors block">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-[#faddb4]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>© 2024 Trindade Engenharia e Serviços. Todos os direitos reservados.</p>
            <p>São Paulo, SP — Brasil</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
