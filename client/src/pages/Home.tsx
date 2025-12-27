import { motion } from "framer-motion";
import { 
  Wrench, 
  Cpu, 
  Settings, 
  Gauge, 
  Phone, 
  MapPin, 
  Instagram,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { ServiceCard } from "@/components/ServiceCard";
// import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";

export default function Home() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Abstract Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background z-10" />
          {/* Using a mechanic/garage oriented abstract image */}
          {/* mechanic working on car engine bay dark moody */}
          <img 
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2832&auto=format&fit=crop" 
            alt="BMW Workshop Background" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="container relative z-20 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-gray-300">Hal-hazırda xidmət aktivdir</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold mb-6 tracking-tight leading-none">
              BMW <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-primary to-blue-400">USTASI</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 font-light">
              Avtomobiliniz üçün peşəkar diaqnostika, təmir və texniki xidmət. 
              <br className="hidden md:block" />
              Keyfiyyət və dəqiqlik bizim işimizdir.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 w-full"
                  onClick={scrollToContact}
                >
                  Əlaqə saxlayın
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="h-14 px-8 text-lg bg-white/5 border-white/10 hover:bg-white/10 hover:text-white w-full"
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Xidmətlər
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative bg-secondary/30">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <motion.div 
                className="absolute -inset-4 bg-primary/20 rounded-2xl blur-xl"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div 
                className="relative  rounded-2xl overflow-hidden border border-white/10 bg-card"
                whileHover={{ scale: 1.02 }}
              >
                {/* professional mechanic portrait dark */} 
                <img 
                  src="/photo_5357485902764118034_w.jpg"
                  alt="Anar Şükürzadə - BMW Master" 
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <motion.div 
                  className="absolute bottom-6 left-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-white">Anar Şükürzadə</h3>
                  <p className="text-primary font-medium">Professional BMW Ustası</p>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                BMW avtomobilləri üzrə <span className="text-primary">Ekspert</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-400">
                <p>
                  Uzun illərdir ki, BMW markalı avtomobillərin təmiri və diaqnostikası ilə məşğulam. 
                  Fəaliyyətim dövründə yüzlərlə avtomobilin problemini dəqiqliklə aşkarlayıb, 
                  peşəkar həllini təmin etmişəm.
                </p>
                <p>
                  Mənim yanaşmam fərqlidir – hər bir avtomobilə öz avtomobilim kimi yanaşıram. 
                  Səbəbi tapılmayan nasazlıqlar, xroniki problemlər və mürəkkəb diaqnostik hallar 
                  mənim ixtisasımdır.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  {[
                    "Dəqiq diaqnostika",
                    "Zəmanətli iş",
                    "Orijinal ehtiyat hissələri",
                    "Səmimi məsləhət"
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + idx * 0.1 }}
                    >
                      <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, delay: idx * 0.1, repeat: Infinity }}>
                        <CheckCircle2 className="text-primary w-6 h-6" />
                      </motion.div>
                      <span className="font-medium text-white">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Görülən İşlər</h2>
          <p className="text-gray-400 text-lg">
            Avtomobilinizin uzunömürlü olması üçün lazım olan bütün texniki xidmətlər
          </p>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <ServiceCard 
            index={0}
            icon={Wrench}
            title="Texniki Baxım"
            items={[
              "Mühərrik yağının dəyişimi",
              "Sürətlər qutusu yağı",
              "Bütün maye sistemlərin yoxlanışı",
              "Dövri texniki baxış"
            ]}
          />
          <ServiceCard 
            index={1}
            icon={Cpu}
            title="Mühərrik & Elektronika"
            items={[
              "Kompüter diaqnostikası",
              "Şamların dəyişimi",
              "Farsunka təmizlənməsi",
              "MAF sensor və Bobin yoxlanışı"
            ]}
          />
          <ServiceCard 
            index={2}
            icon={Settings}
            title="Xadavoy & Mexanika"
            items={[
              "Asqı sisteminin təmiri",
              "Səs və titrəmələrin ləğvi",
              "Əyləc sisteminin bərpası",
              "Çətin problemlərin diaqnozu"
            ]}
          />
          <ServiceCard 
            index={3}
            icon={Gauge}
            title="Tuning & Məsləhət"
            items={[
              "Performans artımı məsləhətləri",
              "Sport hava filtrləri",
              "Avtomobil alışı zamanı yoxlama",
              "Ehtiyat hissəsi seçimi"
            ]}
          />
        </motion.div>

        <motion.div 
          className="mt-12 p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center gap-3 text-yellow-500 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <p className="text-sm font-medium">Qeyd: Mühərrik yığımı (Kapital remont) xaric, digər bütün işlər görülür.</p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-t from-black via-secondary/20 to-background border-t border-white/5">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Əlaqə</h2>
              <p className="text-gray-400 text-lg mb-12">
                Suallarınız var? Zəng edin və ya mesaj yazın. 
                Sizə kömək etməkdən məmnun olaram.
              </p>

              <div className="space-y-8">
                <motion.a 
                  href="tel:+994552111271" 
                  className="flex items-center gap-6 group"
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <motion.div 
                    className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Phone className="w-8 h-8 text-white group-hover:text-primary transition-colors" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1 font-medium tracking-wide">TELEFON</p>
                    <p className="text-2xl font-display font-bold text-white group-hover:text-primary transition-colors">
                      +994 55 211 12 71
                    </p>
                  </div>
                </motion.a>

                <motion.div 
                  className="flex items-center gap-6 group"
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <motion.div 
                    className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <MapPin className="w-8 h-8 text-white group-hover:text-primary transition-colors" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1 font-medium tracking-wide">ÜNVAN</p>
                    <p className="text-xl font-bold text-white">
                      Bakı Şəhəri Əhmədli metrosunun yaxınlığı,
                      <br />
                      Avto Təmir Mərkəzi
                    </p>
                  </div>
                </motion.div>

                <motion.a 
                  href="https://wa.me/994552111271" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold h-14 rounded-xl shadow-lg shadow-green-900/20 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-6 h-6 mr-3 brightness-0 invert" />
                  WhatsApp ilə Yazın
                </motion.a>
              </div>

              <div className="mt-12 flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-gray-400">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* <div className="relative">
              <ContactForm />
            </div> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 bg-black/50">
        <div className="container px-4 mx-auto text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} <a className="text-inherit hover:text-blue-500 transition-colors" href="https://galaxytechnology.az" target="_blank" rel="noopener noreferrer">Galaxy Technology</a>. Bütün hüquqlar qorunur.</p>
          <div className="mt-2 text-xs opacity-50">
            Professional BMW Service Center
          </div>
        </div>
      </footer>
    </div>
  );
}
