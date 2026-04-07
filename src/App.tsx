import {
  BookOpen,
  Users,
  Globe,
  Shield,
  AlertTriangle,
  CheckCircle,
  FileText,
  Monitor,
  Lightbulb,
  Target,
  ChevronRight,
  ArrowUp,
  ThumbsUp,
  Sparkles,
  MessageCircle,
  Heart,
  Clock,
  UserX,
  Eye,
  MessageSquare,
  AlertCircle,
  TrendingDown,
  EyeOff,
  Moon,
  Info,
  Smartphone,
  Zap,
  Folder,
  Image,
} from 'lucide-react';
import { useEffect, useState } from 'react';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }} />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                <BookOpen className="h-16 w-16 md:h-20 md:w-20" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              TECNOLOGIA DIGITAL DA INFORMAÇÃO
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-4">
              Aplicações práticas para Conselheiros de Embaixadores do Rei
            </p>
            <div className="text-sm md:text-base text-blue-200 space-y-1">
              <p>Ministrante: Me. Fabrício Oliveira</p>
              <p>Primeira Igreja Batista - Feira de Santana</p>
              <p>10 de abril de 2026</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ApresentacaoSection />
        <ComoUsarSection />
        <OQueESection />
        <RealidadeSection />
        <BeneficiosRiscosSection />
        <SinaisAlertaSection />
        <ComoAjudaSection />
        <FerramentasSection />
        <ExemplosSection />
        <BoasPraticasSection />
        <PlanoAcaoSection />
        <ConclusaoSection />
        <ReferenciasSection />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white mt-20 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400">
            © 2026 Embaixadores do Rei - Primeira Igreja Batista de Feira de Santana
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-50"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}

function ApresentacaoSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 p-3 rounded-lg">
              <BookOpen className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">1. Apresentação</h2>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-md mb-6">
            <p className="text-slate-700 leading-relaxed">
              Prezados Conselheiros de Embaixadores do Rei, é com grande alegria e senso de propósito que
              apresentamos esta apostila. Vivemos em uma era de transformações digitais sem precedentes, e
              nossos meninos, os Embaixadores do Rei, estão imersos nesse universo desde muito cedo.
            </p>
          </div>

          <p className="text-slate-700 mb-4 leading-relaxed text-lg">
            Como líderes e mentores, nosso chamado é desenvolver o caráter cristão desses meninos, guiando-os
            em Missões, Mordomia, Evangelização, Recreação e Acampamentos. Para cumprir essa missão de forma
            eficaz no século XXI, precisamos compreender e, mais importante, saber como utilizar as ferramentas
            digitais a nosso favor.
          </p>
        </div>

        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <img
              src="https://images.pexels.com/photos/8422149/pexels-photo-8422149.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Crianças aprendendo com tecnologia"
              className="w-full h-96 object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg hidden md:block">
            <p className="font-bold text-2xl">2026</p>
            <p className="text-sm">Era Digital</p>
          </div>
        </div>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-slate-700 mb-6 leading-relaxed text-lg">
          Esta apostila foi elaborada para ser um guia prático, acolhedor e inspirador. Nosso objetivo não é
          transformá-los em especialistas em tecnologia, mas capacitá-los a fazer um uso sábio, equilibrado e,
          acima de tudo, cristão das ferramentas digitais. Veremos como a Tecnologia Digital da Informação
          pode otimizar seu tempo, fortalecer a comunicação, enriquecer o ensino bíblico e promover um
          discipulado relevante para a geração atual.
        </p>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-600 p-8 rounded-r-xl shadow-md">
          <div className="flex items-start gap-4">
            <CheckCircle className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
            <p className="text-slate-700 italic leading-relaxed text-lg">
              Que este material seja uma bênção em seu ministério, ajudando-o a conectar os princípios eternos
              da Palavra de Deus com a realidade dinâmica do mundo digital de nossos Embaixadores do Rei.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComoUsarSection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-green-100 p-3 rounded-lg">
            <FileText className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">2. Como Usar Esta Apostila</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div className="order-2 md:order-1">
            <p className="text-slate-700 mb-8 leading-relaxed text-lg">
              Esta apostila foi pensada para ser sua companheira antes, durante e depois da nossa formação. Ela é
              um recurso prático para o seu dia a dia como Conselheiro.
            </p>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-l-4 border-blue-500">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                    <ChevronRight className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-700 mb-2 text-lg">Durante a Formação</h3>
                    <p className="text-slate-600">
                      Utilize-a para acompanhar os tópicos, fazer anotações e registrar suas primeiras impressões.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-l-4 border-green-500">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                    <ChevronRight className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-green-700 mb-2 text-lg">Após a Formação</h3>
                    <p className="text-slate-600">
                      Releia, reflita e explore os links e tutoriais sugeridos. O aprendizado real acontece na
                      prática.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-l-4 border-orange-500">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-2 rounded-lg flex-shrink-0">
                    <ChevronRight className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-orange-700 mb-2 text-lg">No Planejamento</h3>
                    <p className="text-slate-600">
                      Consulte-a sempre que precisar de ideias para organizar atividades, comunicar-se com os meninos
                      e pais, ou enriquecer seus encontros.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Criança estudando com tablet"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-100 to-amber-100 border-l-4 border-yellow-500 p-8 rounded-r-xl shadow-lg">
          <div className="flex items-start gap-4">
            <Lightbulb className="h-8 w-8 text-yellow-600 flex-shrink-0 mt-1" />
            <p className="text-slate-700 leading-relaxed text-lg font-medium">
              Não se preocupe em dominar tudo de uma vez. Marque as ideias que mais chamaram sua atenção, anote
              possíveis aplicações para sua embaixada e comece testando uma ou duas ferramentas por vez. O
              importante é dar o primeiro passo e experimentar o potencial que a tecnologia oferece ao seu
              ministério.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function OQueESection() {
  return (
    <section className="py-16 md:py-20">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-teal-100 p-3 rounded-lg">
          <Monitor className="h-8 w-8 text-teal-600" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
          3. O que é Tecnologia Digital da Informação
        </h2>
      </div>

      <div className="grid md:grid-cols-5 gap-8 items-center mb-12">
        <div className="md:col-span-3">
          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-teal-500 mb-6">
            <p className="text-slate-700 mb-6 leading-relaxed text-lg">
              Em termos simples, a <strong className="text-teal-600">Tecnologia Digital da Informação (TDI)</strong> refere-se ao conjunto
              de recursos tecnológicos (como computadores, smartphones, internet, softwares e aplicativos) que
              usamos para coletar, armazenar, processar, transmitir e gerenciar informações.
            </p>

            <p className="text-slate-700 leading-relaxed text-lg">
              A TDI não é apenas sobre computadores; é sobre como a informação flui e é utilizada em formato
              digital para nos ajudar a alcançar nossos objetivos no ministério.
            </p>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/8613310/pexels-photo-8613310.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Criança usando computador"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-800 mb-6">Para o Conselheiro, isso significa:</h3>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105">
          <div className="bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
            <Users className="h-8 w-8" />
          </div>
          <h3 className="font-bold text-xl mb-3">Comunicação Eficiente</h3>
          <p className="text-blue-50">
            Conectar-se com os meninos, pais e outros líderes de forma rápida e clara.
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105">
          <div className="bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
            <Target className="h-8 w-8" />
          </div>
          <h3 className="font-bold text-xl mb-3">Organização Otimizada</h3>
          <p className="text-green-50">
            Gerenciar tarefas, eventos e informações da Embaixada de maneira mais eficaz.
          </p>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105">
          <div className="bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
            <BookOpen className="h-8 w-8" />
          </div>
          <h3 className="font-bold text-xl mb-3">Ensino Engajador</h3>
          <p className="text-orange-50">
            Apresentar o conteúdo bíblico e missionário de formas mais interativas e atrativas para a
            geração atual.
          </p>
        </div>

        <div className="bg-gradient-to-br from-teal-500 to-teal-600 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105">
          <div className="bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
            <Globe className="h-8 w-8" />
          </div>
          <h3 className="font-bold text-xl mb-3">Discipulado Contínuo</h3>
          <p className="text-teal-50">
            Manter o contato e o acompanhamento dos meninos mesmo fora dos encontros presenciais.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-2xl shadow-xl">
        <div className="flex items-start gap-4">
          <div className="bg-white/20 p-3 rounded-lg flex-shrink-0">
            <Lightbulb className="h-8 w-8" />
          </div>
          <p className="italic leading-relaxed text-lg">
            "A TDI é uma ferramenta poderosa. Como toda ferramenta, seu valor está no uso que fazemos dela.
            Nosso objetivo é usá-la para a glória de Deus e para o crescimento do Reino."
          </p>
        </div>
      </div>
    </section>
  );
}

function RealidadeSection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-cyan-100 p-3 rounded-lg">
            <Globe className="h-8 w-8 text-cyan-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            4. A Realidade Digital das Crianças e Adolescentes
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/8613319/pexels-photo-8613319.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Crianças usando tablets"
              className="w-full h-96 object-cover"
            />
          </div>

          <div>
            <p className="text-slate-700 mb-6 leading-relaxed text-lg">
              O mundo dos nossos Embaixadores é intrinsecamente digital. Eles nasceram e cresceram em um ambiente
              onde a internet, os smartphones e os jogos online são tão naturais quanto brincar no quintal era
              para gerações anteriores.
            </p>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-cyan-500">
              <p className="text-slate-700 leading-relaxed font-medium">
                Ignorar essa realidade é ignorar uma parte fundamental de quem eles são e como interagem com o mundo.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">Dados de 2026</h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl w-24 h-24 flex items-center justify-center font-bold text-3xl mx-auto mb-4 shadow-xl">
                93%
              </div>
              <p className="text-slate-700 leading-relaxed">
                dos jovens brasileiros entre 9 e 17 anos são usuários ativos da internet
              </p>
              <p className="text-xs text-slate-500 mt-2">Fonte: TIC Kids Online Brasil 2025</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl w-24 h-24 flex items-center justify-center font-bold text-3xl mx-auto mb-4 shadow-xl">
                9h
              </div>
              <p className="text-slate-700 leading-relaxed">
                Eles passam, em média, mais de 9 horas por dia conectados a telas
              </p>
              <p className="text-xs text-slate-500 mt-2">Fonte: CNN Brasil 2025/2026</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl w-24 h-24 flex items-center justify-center font-bold text-3xl mx-auto mb-4 shadow-xl">
                85%
              </div>
              <p className="text-slate-700 leading-relaxed">
                possuem perfis em redes sociais, subindo para 91% na faixa de 13-14 anos
              </p>
              <p className="text-xs text-slate-500 mt-2">Atividades: jogos, vídeos, redes sociais</p>
            </div>
          </div>
        </div>

        <p className="text-slate-700 mb-8 leading-relaxed text-lg text-center">
          Para o Conselheiro, isso significa que o <strong>'pátio da igreja' se estendeu para o ambiente digital</strong>. Se
          queremos alcançar, discipular e influenciar esses meninos, precisamos entender onde eles estão,
          como se comunicam e quais são os desafios e oportunidades desse universo.
        </p>

        <div className="bg-gradient-to-r from-yellow-100 to-amber-100 border-l-4 border-yellow-500 p-8 rounded-r-xl shadow-lg">
          <div className="flex items-start gap-4">
            <AlertTriangle className="h-8 w-8 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <p className="font-bold text-slate-800 mb-2 text-lg">Atenção:</p>
              <p className="text-slate-700 leading-relaxed text-lg">
                Não se trata de 'digitalizar' o ministério por completo, mas de integrar a tecnologia de forma
                intencional e equilibrada, reconhecendo que ela é parte da vida dos meninos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BeneficiosRiscosSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-emerald-100 p-3 rounded-lg">
          <Shield className="h-8 w-8 text-emerald-600" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">5. Benefícios e Riscos do Mundo Digital</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <div className="rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1">
          <img
            src="https://images.pexels.com/photos/8613096/pexels-photo-8613096.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Criança aprendendo com tecnologia"
            className="w-full h-96 object-cover"
          />
        </div>

        <div className="order-1 md:order-2">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl shadow-xl border-l-4 border-emerald-500">
            <p className="text-slate-700 leading-relaxed text-lg font-medium">
              O mundo digital, como qualquer ferramenta poderosa, apresenta um lado de grandes oportunidades e
              outro de desafios significativos. Nosso papel como Conselheiros é discernir ambos, promovendo o uso
              benéfico e prevenindo os riscos.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-emerald-700 mb-6 flex items-center gap-2">
        <div className="bg-emerald-100 p-2 rounded-lg">
          <ThumbsUp className="h-6 w-6 text-emerald-600" />
        </div>
        5.1. Benefícios para o Ministério e para os Meninos
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="bg-gradient-to-br from-emerald-500 to-green-600 text-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105">
          <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
            <Target className="h-6 w-6" />
          </div>
          <h4 className="font-bold text-lg mb-3">Organização e Eficiência</h4>
          <p className="text-emerald-50 text-sm leading-relaxed">
            Ferramentas digitais podem otimizar o planejamento de atividades, a gestão de membros e a
            comunicação com pais e líderes, liberando mais tempo para o relacionamento e o discipulado.
          </p>
        </div>

        <div className="bg-gradient-to-br from-emerald-500 to-green-600 text-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105">
          <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
            <Sparkles className="h-6 w-6" />
          </div>
          <h4 className="font-bold text-lg mb-3">Aprendizado e Engajamento</h4>
          <p className="text-emerald-50 text-sm leading-relaxed">
            Recursos interativos, vídeos e jogos educativos podem tornar o ensino bíblico mais dinâmico e
            atraente para os meninos.
          </p>
        </div>

        <div className="bg-gradient-to-br from-emerald-500 to-green-600 text-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105">
          <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
            <Lightbulb className="h-6 w-6" />
          </div>
          <h4 className="font-bold text-lg mb-3">Criatividade e Expressão</h4>
          <p className="text-emerald-50 text-sm leading-relaxed">
            Plataformas digitais permitem que os Embaixadores desenvolvam habilidades criativas, produzindo
            conteúdo, editando vídeos ou criando apresentações.
          </p>
        </div>

        <div className="bg-gradient-to-br from-emerald-500 to-green-600 text-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105">
          <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
            <MessageCircle className="h-6 w-6" />
          </div>
          <h4 className="font-bold text-lg mb-3">Comunicação Ampliada</h4>
          <p className="text-emerald-50 text-sm leading-relaxed">
            Manter contato com os meninos e suas famílias durante a semana, enviando devocionais, lembretes
            e palavras de encorajamento.
          </p>
        </div>

        <div className="bg-gradient-to-br from-emerald-500 to-green-600 text-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105">
          <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
            <Globe className="h-6 w-6" />
          </div>
          <h4 className="font-bold text-lg mb-3">Evangelização e Missões</h4>
          <p className="text-emerald-50 text-sm leading-relaxed">
            Utilizar o ambiente digital para compartilhar a mensagem do Evangelho de forma criativa e
            alcançar outros jovens.
          </p>
        </div>

        <div className="bg-gradient-to-br from-emerald-500 to-green-600 text-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105">
          <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
            <Heart className="h-6 w-6" />
          </div>
          <h4 className="font-bold text-lg mb-3">Discipulado Contínuo</h4>
          <p className="text-emerald-50 text-sm leading-relaxed">
            Oferecer recursos para estudo bíblico pessoal e acompanhamento espiritual, mesmo à distância.
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-red-700 mb-6 flex items-center gap-2">
        <div className="bg-red-100 p-2 rounded-lg">
          <AlertTriangle className="h-6 w-6 text-red-600" />
        </div>
        5.2. Riscos e Desafios
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="bg-white border-2 border-red-200 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:border-red-400">
          <div className="bg-red-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
            <Clock className="h-6 w-6 text-red-600" />
          </div>
          <h4 className="font-bold text-red-800 text-lg mb-3">Excesso e Dependência</h4>
          <p className="text-slate-600 text-sm leading-relaxed">
            O uso descontrolado pode levar à dependência, afetando o sono, o desempenho escolar e as
            interações sociais presenciais.
          </p>
        </div>

        <div className="bg-white border-2 border-red-200 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:border-red-400">
          <div className="bg-red-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
            <UserX className="h-6 w-6 text-red-600" />
          </div>
          <h4 className="font-bold text-red-800 text-lg mb-3">Isolamento Social</h4>
          <p className="text-slate-600 text-sm leading-relaxed">
            Paradoxalmente, o excesso de conexão online pode levar ao isolamento no mundo real,
            prejudicando o desenvolvimento de habilidades sociais.
          </p>
        </div>

        <div className="bg-white border-2 border-red-200 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:border-red-400">
          <div className="bg-red-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
            <Eye className="h-6 w-6 text-red-600" />
          </div>
          <h4 className="font-bold text-red-800 text-lg mb-3">Conteúdos Impróprios</h4>
          <p className="text-slate-600 text-sm leading-relaxed">
            A exposição a material violento, sexualmente explícito ou ideologicamente prejudicial é uma
            preocupação constante.
          </p>
        </div>

        <div className="bg-white border-2 border-red-200 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:border-red-400">
          <div className="bg-red-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
            <MessageSquare className="h-6 w-6 text-red-600" />
          </div>
          <h4 className="font-bold text-red-800 text-lg mb-3">Cyberbullying</h4>
          <p className="text-slate-600 text-sm leading-relaxed">
            A agressão e o assédio online podem causar danos emocionais profundos, muitas vezes invisíveis
            aos pais e líderes.
          </p>
        </div>

        <div className="bg-white border-2 border-red-200 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:border-red-400">
          <div className="bg-red-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
            <Users className="h-6 w-6 text-red-600" />
          </div>
          <h4 className="font-bold text-red-800 text-lg mb-3">Contato com Estranhos</h4>
          <p className="text-slate-600 text-sm leading-relaxed">
            Predadores online e pessoas mal-intencionadas podem se aproveitar da ingenuidade dos meninos.
          </p>
        </div>

        <div className="bg-white border-2 border-red-200 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:border-red-400">
          <div className="bg-red-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
            <AlertCircle className="h-6 w-6 text-red-600" />
          </div>
          <h4 className="font-bold text-red-800 text-lg mb-3">Fake News e Desinformação</h4>
          <p className="text-slate-600 text-sm leading-relaxed">
            A proliferação de notícias falsas e informações distorcidas pode confundir e manipular.
          </p>
        </div>

        <div className="bg-white border-2 border-red-200 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:border-red-400">
          <div className="bg-red-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
            <BookOpen className="h-6 w-6 text-red-600" />
          </div>
          <h4 className="font-bold text-red-800 text-lg mb-3">Banalização do Sagrado</h4>
          <p className="text-slate-600 text-sm leading-relaxed">
            O uso inadequado de temas religiosos em contextos digitais pode levar à superficialidade ou ao
            desrespeito.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-600 p-8 rounded-r-2xl mb-8 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-blue-600 p-3 rounded-xl flex-shrink-0">
            <Info className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="font-bold text-slate-800 mb-2 text-lg">Atenção:</p>
            <p className="text-slate-700 leading-relaxed">
              O equilíbrio é a chave. Nosso objetivo não é proibir, mas orientar para um uso consciente e com
              propósito.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 text-white p-8 rounded-2xl shadow-2xl border-t-4 border-blue-400">
        <div className="flex items-start gap-4 mb-4">
          <div className="bg-white/10 p-3 rounded-xl flex-shrink-0">
            <BookOpen className="h-6 w-6 text-blue-300" />
          </div>
          <p className="font-bold text-xl text-blue-300">Princípio bíblico para o uso da tecnologia:</p>
        </div>
        <blockquote className="italic leading-relaxed text-lg border-l-4 border-blue-400 pl-6 mb-4 text-slate-100">
          "Finalmente, irmãos, tudo o que for verdadeiro, tudo o que for nobre, tudo o que for correto,
          tudo o que for puro, tudo o que for amável, tudo o que for de boa fama, se houver algo de
          excelente ou digno de louvor, pensem nessas coisas." (Filipenses 4:8)
        </blockquote>
        <p className="text-slate-300 leading-relaxed">
          Este versículo deve ser o nosso filtro e o filtro que ensinamos aos nossos Embaixadores para tudo
          o que consomem e produzem no ambiente digital.
        </p>
      </div>
    </section>
  );
}

function SinaisAlertaSection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
        <div className="order-2 md:order-1">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Criança preocupada com celular"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-amber-100 p-3 rounded-lg">
              <Eye className="h-8 w-8 text-amber-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              6. Riscos e Sinais de Alerta
            </h2>
          </div>

          <p className="text-slate-700 mb-6 leading-relaxed text-lg">
            Como Conselheiros, somos chamados a ser vigilantes e a cuidar dos meninos em todas as áreas de suas
            vidas, incluindo a digital. É fundamental reconhecer os sinais de que o uso da tecnologia pode
            estar se tornando problemático.
          </p>

          <p className="text-slate-700 mb-6 leading-relaxed">
            Os jogos online, como <strong>Roblox, Free Fire e Fortnite</strong>, são extremamente populares e
            podem ser ferramentas de socialização e diversão. No entanto, o uso excessivo ou inadequado pode
            levar a comportamentos preocupantes. Não se trata de demonizar os jogos, mas de observar o impacto
            que eles têm na vida do menino.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-500 p-8 rounded-r-2xl mb-12 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-amber-500 p-3 rounded-xl flex-shrink-0">
            <AlertTriangle className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="font-bold text-slate-800 mb-2 text-lg">Atenção:</p>
            <p className="text-slate-700 leading-relaxed">
              O problema raramente está na ferramenta em si, mas na forma, no tempo, no conteúdo e no impacto
              que ela gera na vida da criança e do adolescente.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-red-700 mb-8 flex items-center gap-2">
        <div className="bg-red-100 p-2 rounded-lg">
          <AlertTriangle className="h-6 w-6 text-red-600" />
        </div>
        6.1. Sinais de Alerta para o Conselheiro
      </h3>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="flex items-start bg-white p-6 rounded-2xl shadow-lg border-l-4 border-red-500 hover:shadow-xl transition-all">
          <div className="bg-red-100 p-3 rounded-xl mr-4 flex-shrink-0">
            <AlertTriangle className="h-6 w-6 text-red-600" />
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-2 text-lg">Mudanças de Comportamento</h4>
            <p className="text-slate-600 leading-relaxed">
              Irritabilidade, agressividade ou ansiedade quando o acesso à internet ou aos jogos é limitado
              ou interrompido.
            </p>
          </div>
        </div>

        <div className="flex items-start bg-white p-6 rounded-2xl shadow-lg border-l-4 border-red-500 hover:shadow-xl transition-all">
          <div className="bg-red-100 p-3 rounded-xl mr-4 flex-shrink-0">
            <UserX className="h-6 w-6 text-red-600" />
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-2 text-lg">Isolamento Social</h4>
            <p className="text-slate-600 leading-relaxed">
              Preferência constante por atividades online em detrimento de interações presenciais com
              amigos e família.
            </p>
          </div>
        </div>

        <div className="flex items-start bg-white p-6 rounded-2xl shadow-lg border-l-4 border-red-500 hover:shadow-xl transition-all">
          <div className="bg-red-100 p-3 rounded-xl mr-4 flex-shrink-0">
            <TrendingDown className="h-6 w-6 text-red-600" />
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-2 text-lg">Queda no Desempenho</h4>
            <p className="text-slate-600 leading-relaxed">
              Diminuição do interesse por estudos, hobbies anteriores ou atividades da embaixada.
            </p>
          </div>
        </div>

        <div className="flex items-start bg-white p-6 rounded-2xl shadow-lg border-l-4 border-red-500 hover:shadow-xl transition-all">
          <div className="bg-red-100 p-3 rounded-xl mr-4 flex-shrink-0">
            <EyeOff className="h-6 w-6 text-red-600" />
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-2 text-lg">Privacidade Excessiva</h4>
            <p className="text-slate-600 leading-relaxed">
              Esconder o que faz online, evitar que os pais ou líderes vejam a tela do dispositivo.
            </p>
          </div>
        </div>

        <div className="flex items-start bg-white p-6 rounded-2xl shadow-lg border-l-4 border-red-500 hover:shadow-xl transition-all">
          <div className="bg-red-100 p-3 rounded-xl mr-4 flex-shrink-0">
            <Moon className="h-6 w-6 text-red-600" />
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-2 text-lg">Alterações no Sono e Alimentação</h4>
            <p className="text-slate-600 leading-relaxed">
              Ficar acordado até tarde para jogar ou usar a internet, pular refeições.
            </p>
          </div>
        </div>

        <div className="flex items-start bg-white p-6 rounded-2xl shadow-lg border-l-4 border-red-500 hover:shadow-xl transition-all">
          <div className="bg-red-100 p-3 rounded-xl mr-4 flex-shrink-0">
            <Eye className="h-6 w-6 text-red-600" />
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-2 text-lg">Exposição a Conteúdo Inadequado</h4>
            <p className="text-slate-600 leading-relaxed">
              Linguagem vulgar, temas violentos ou sexualmente explícitos em conversas ou jogos.
            </p>
          </div>
        </div>

        <div className="flex items-start bg-white p-6 rounded-2xl shadow-lg border-l-4 border-red-500 hover:shadow-xl transition-all">
          <div className="bg-red-100 p-3 rounded-xl mr-4 flex-shrink-0">
            <Users className="h-6 w-6 text-red-600" />
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-2 text-lg">Interação com Desconhecidos</h4>
            <p className="text-slate-600 leading-relaxed">
              Conversas frequentes com pessoas que não conhece na vida real, compartilhando informações
              pessoais.
            </p>
          </div>
        </div>

        <div className="flex items-start bg-white p-6 rounded-2xl shadow-lg border-l-4 border-red-500 hover:shadow-xl transition-all">
          <div className="bg-red-100 p-3 rounded-xl mr-4 flex-shrink-0">
            <MessageSquare className="h-6 w-6 text-red-600" />
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-2 text-lg">Cyberbullying</h4>
            <p className="text-slate-600 leading-relaxed">
              Ser vítima ou praticar bullying online, seja em grupos de mensagens ou comentários em redes
              sociais.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-8 rounded-r-2xl shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-orange-500 p-3 rounded-xl flex-shrink-0">
            <MessageCircle className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="font-bold text-slate-800 mb-3 text-lg">Quando conversar com os pais:</p>
            <p className="text-slate-700 leading-relaxed">
              Se você observar um ou mais desses sinais de forma persistente, é crucial conversar com os pais
              ou responsáveis do Embaixador. Aborde o assunto com amor, preocupação e ofereça apoio, não
              julgamento. Lembre-os da importância do diálogo e do acompanhamento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComoAjudaSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Smartphone className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              7. Como a Tecnologia Pode Ajudar
            </h2>
          </div>

          <p className="text-slate-700 mb-6 leading-relaxed text-lg">
            A tecnologia, quando usada com sabedoria, pode ser uma poderosa aliada para o Conselheiro,
            otimizando o tempo e potencializando o impacto do ministério. Ela não substitui o relacionamento
            pessoal, mas o complementa e fortalece.
          </p>

          <p className="text-slate-700 leading-relaxed">
            Pense em quanto tempo você gasta com tarefas administrativas que poderiam ser simplificadas. Ou em
            como a comunicação com os meninos e seus pais poderia ser mais eficiente. A tecnologia oferece
            soluções para esses desafios, permitindo que você dedique mais energia ao que realmente importa: o
            discipulado e o desenvolvimento espiritual dos Embaixadores.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Conselheiro usando tecnologia"
            className="w-full h-96 object-cover"
          />
        </div>
      </div>

      <h3 className="text-2xl font-bold text-blue-700 mb-8 flex items-center gap-2">
        <div className="bg-blue-100 p-2 rounded-lg">
          <Zap className="h-6 w-6 text-blue-600" />
        </div>
        Ganhos práticos para o ministério:
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105">
          <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
            <Clock className="h-6 w-6" />
          </div>
          <h4 className="font-bold text-lg mb-3">Mais Tempo</h4>
          <p className="text-blue-50 text-sm leading-relaxed">
            Automatize tarefas repetitivas e libere horas para o relacionamento com os meninos.
          </p>
        </div>

        <div className="bg-gradient-to-br from-emerald-500 to-green-600 text-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105">
          <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
            <Folder className="h-6 w-6" />
          </div>
          <h4 className="font-bold text-lg mb-3">Melhor Organização</h4>
          <p className="text-emerald-50 text-sm leading-relaxed">
            Mantenha informações importantes acessíveis e atualizadas para toda a equipe.
          </p>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105">
          <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
            <MessageCircle className="h-6 w-6" />
          </div>
          <h4 className="font-bold text-lg mb-3">Comunicação Eficaz</h4>
          <p className="text-orange-50 text-sm leading-relaxed">
            Alcance pais e Embaixadores de forma rápida e direcionada.
          </p>
        </div>

        <div className="bg-gradient-to-br from-teal-500 to-cyan-600 text-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105">
          <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
            <Sparkles className="h-6 w-6" />
          </div>
          <h4 className="font-bold text-lg mb-3">Engajamento Aumentado</h4>
          <p className="text-teal-50 text-sm leading-relaxed">
            Torne os encontros mais dinâmicos e interativos, usando a linguagem que os meninos já
            entendem.
          </p>
        </div>

        <div className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105">
          <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
            <Heart className="h-6 w-6" />
          </div>
          <h4 className="font-bold text-lg mb-3">Discipulado Contínuo</h4>
          <p className="text-cyan-50 text-sm leading-relaxed">
            Estenda o ensino e o acompanhamento para além dos encontros semanais.
          </p>
        </div>

        <div className="bg-gradient-to-br from-lime-500 to-green-600 text-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105">
          <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
            <Image className="h-6 w-6" />
          </div>
          <h4 className="font-bold text-lg mb-3">Recursos Visuais</h4>
          <p className="text-lime-50 text-sm leading-relaxed">
            Crie materiais atraentes para divulgar eventos e ensinar a Palavra.
          </p>
        </div>
      </div>
    </section>
  );
}

function FerramentasSection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Ferramentas digitais"
            className="w-full h-96 object-cover"
          />
        </div>

        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-slate-100 p-3 rounded-lg">
              <Monitor className="h-8 w-8 text-slate-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              8. Ferramentas Práticas
            </h2>
          </div>

          <p className="text-slate-700 leading-relaxed text-lg">
            Nesta seção, exploraremos algumas ferramentas digitais que podem revolucionar a forma como você
            organiza, comunica e interage no ministério dos Embaixadores do Rei. Para cada uma, apresentaremos
            o que é, para que serve, como usar, exemplos práticos, dicas, cuidados e links de acesso e
            tutoriais.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl shadow-xl mb-8">
        <h4 className="font-bold text-slate-800 mb-6 text-2xl flex items-center gap-2">
          <div className="bg-slate-700 p-2 rounded-lg">
            <Target className="h-6 w-6 text-white" />
          </div>
          Ferramentas Detalhadas:
        </h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border-l-4 border-blue-500">
            <div className="flex items-start gap-3 mb-3">
              <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                <FileText className="h-5 w-5 text-blue-600" />
              </div>
              <h5 className="font-bold text-blue-700 text-lg">8.1. Google Docs</h5>
            </div>
            <p className="text-slate-600 mb-3 leading-relaxed">
              Processador de texto online para criar documentos, roteiros e material didático colaborativo.
            </p>
            <a
              href="https://docs.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
            >
              <Globe className="h-4 w-4" />
              docs.google.com
            </a>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border-l-4 border-green-500">
            <div className="flex items-start gap-3 mb-3">
              <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                <Target className="h-5 w-5 text-green-600" />
              </div>
              <h5 className="font-bold text-green-700 text-lg">8.2. Google Planilhas</h5>
            </div>
            <p className="text-slate-600 mb-3 leading-relaxed">
              Organizar listas, controlar presenças, gerenciar finanças e criar cronogramas.
            </p>
            <a
              href="https://sheets.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-600 font-medium hover:underline"
            >
              <Globe className="h-4 w-4" />
              sheets.google.com
            </a>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border-l-4 border-orange-500">
            <div className="flex items-start gap-3 mb-3">
              <div className="bg-orange-100 p-2 rounded-lg flex-shrink-0">
                <CheckCircle className="h-5 w-5 text-orange-600" />
              </div>
              <h5 className="font-bold text-orange-700 text-lg">8.3. Google Formulários</h5>
            </div>
            <p className="text-slate-600 mb-3 leading-relaxed">
              Criar pesquisas, coletar inscrições, fazer enquetes e receber feedback.
            </p>
            <a
              href="https://forms.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-orange-600 font-medium hover:underline"
            >
              <Globe className="h-4 w-4" />
              forms.google.com
            </a>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border-l-4 border-teal-500">
            <div className="flex items-start gap-3 mb-3">
              <div className="bg-teal-100 p-2 rounded-lg flex-shrink-0">
                <Image className="h-5 w-5 text-teal-600" />
              </div>
              <h5 className="font-bold text-teal-700 text-lg">8.4. Canva</h5>
            </div>
            <p className="text-slate-600 mb-3 leading-relaxed">
              Criar materiais visuais atraentes para divulgação, certificados e apresentações.
            </p>
            <a
              href="https://www.canva.com/pt_br/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-teal-600 font-medium hover:underline"
            >
              <Globe className="h-4 w-4" />
              canva.com
            </a>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border-l-4 border-cyan-500">
            <div className="flex items-start gap-3 mb-3">
              <div className="bg-cyan-100 p-2 rounded-lg flex-shrink-0">
                <Users className="h-5 w-5 text-cyan-600" />
              </div>
              <h5 className="font-bold text-cyan-700 text-lg">8.5. Mentimeter</h5>
            </div>
            <p className="text-slate-600 mb-3 leading-relaxed">
              Criar apresentações interativas, enquetes e nuvens de palavras ao vivo.
            </p>
            <a
              href="https://www.mentimeter.com/pt-BR"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cyan-600 font-medium hover:underline"
            >
              <Globe className="h-4 w-4" />
              mentimeter.com
            </a>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border-l-4 border-lime-500">
            <div className="flex items-start gap-3 mb-3">
              <div className="bg-lime-100 p-2 rounded-lg flex-shrink-0">
                <Lightbulb className="h-5 w-5 text-lime-600" />
              </div>
              <h5 className="font-bold text-lime-700 text-lg">8.6. Kahoot</h5>
            </div>
            <p className="text-slate-600 mb-3 leading-relaxed">
              Criar quizzes interativos e jogos de perguntas e respostas para revisão bíblica.
            </p>
            <a
              href="https://kahoot.com/pt-BR/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-lime-600 font-medium hover:underline"
            >
              <Globe className="h-4 w-4" />
              kahoot.com
            </a>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border-l-4 border-emerald-500">
            <div className="flex items-start gap-3 mb-3">
              <div className="bg-emerald-100 p-2 rounded-lg flex-shrink-0">
                <MessageCircle className="h-5 w-5 text-emerald-600" />
              </div>
              <h5 className="font-bold text-emerald-700 text-lg">8.7. WhatsApp</h5>
            </div>
            <p className="text-slate-600 mb-3 leading-relaxed">
              Comunicação rápida, grupos para pais, discipulado semanal e lembretes.
            </p>
            <a
              href="https://www.whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-600 font-medium hover:underline"
            >
              <Globe className="h-4 w-4" />
              whatsapp.com
            </a>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border-l-4 border-slate-500">
            <div className="flex items-start gap-3 mb-3">
              <div className="bg-slate-100 p-2 rounded-lg flex-shrink-0">
                <Shield className="h-5 w-5 text-slate-600" />
              </div>
              <h5 className="font-bold text-slate-700 text-lg">8.8. Google Family Link</h5>
            </div>
            <p className="text-slate-600 mb-3 leading-relaxed">
              Ferramenta de controle parental para orientar pais sobre segurança digital.
            </p>
            <a
              href="https://families.google.com/intl/pt-BR_ALL/familylink/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-600 font-medium hover:underline"
            >
              <Globe className="h-4 w-4" />
              families.google.com/familylink
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExemplosSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-teal-100 p-3 rounded-lg">
              <Lightbulb className="h-8 w-8 text-teal-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              9. Exemplos de Aplicação
            </h2>
          </div>

          <p className="text-slate-700 leading-relaxed text-lg">
            Vamos ver como essas ferramentas podem ser combinadas para criar experiências ricas e eficientes no
            seu ministério com os Embaixadores do Rei.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Planejamento de atividades"
            className="w-full h-96 object-cover"
          />
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-600 p-8 rounded-r-2xl mb-8 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Target className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-xl font-bold text-blue-800">
            9.1. Organizando um Acampamento com Ferramentas Digitais
          </h3>
        </div>
        <p className="text-sm text-slate-600 mb-4">
          <strong>Cenário:</strong> Sua embaixada planeja um acampamento de três dias.
        </p>
        <ul className="space-y-3 text-sm text-slate-700">
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Google Docs:</strong> Crie o roteiro detalhado do acampamento (programação, lista de
              materiais, divisão de equipes, contatos de emergência) e compartilhe com todos os
              Conselheiros para edição colaborativa.
            </span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Google Formulários:</strong> Elabore o formulário de inscrição online, coletando
              dados dos meninos, informações de contato dos pais, autorização e dados de saúde (alergias,
              medicamentos).
            </span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Google Planilhas:</strong> As respostas do formulário de inscrição são
              automaticamente compiladas em uma planilha, facilitando o controle de inscritos, pagamentos e
              necessidades especiais.
            </span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Canva:</strong> Crie um cartaz digital e um convite visualmente atraente para
              divulgar o acampamento nas redes sociais da igreja e no grupo de WhatsApp dos pais.
            </span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
            <span>
              <strong>WhatsApp:</strong> Crie um grupo temporário para os pais dos inscritos, enviando
              lembretes, lista de itens a levar e atualizações durante o acampamento.
            </span>
          </li>
        </ul>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-l-4 border-green-600 p-8 rounded-r-2xl mb-8 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-green-600 p-2 rounded-lg">
            <Lightbulb className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-xl font-bold text-green-800">9.2. Criando um Quiz Bíblico Interativo</h3>
        </div>
        <p className="text-sm text-slate-600 mb-4">
          <strong>Cenário:</strong> Você quer revisar a última série de estudos bíblicos de forma
          divertida.
        </p>
        <ul className="space-y-3 text-sm text-slate-700">
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Kahoot:</strong> Crie um quiz com perguntas sobre as lições aprendidas. Adicione
              imagens e defina um tempo para cada resposta.
            </span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Mentimeter (opcional):</strong> Antes do quiz, use o Mentimeter para fazer uma
              pergunta aberta: "Qual a principal lição que você aprendeu nesta série?". As respostas em
              nuvem de palavras podem servir de introdução.
            </span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Google Slides (opcional):</strong> Se quiser, incorpore o Kahoot em uma apresentação
              de slides para contextualizar o quiz.
            </span>
          </li>
        </ul>
      </div>

      <div className="bg-gradient-to-br from-orange-50 to-amber-50 border-l-4 border-orange-600 p-8 rounded-r-2xl mb-8 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-orange-600 p-2 rounded-lg">
            <Heart className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-xl font-bold text-orange-800">9.3. Enviando um Devocional Semanal</h3>
        </div>
        <p className="text-sm text-slate-600 mb-4">
          <strong>Cenário:</strong> Manter os meninos conectados com a Palavra durante a semana.
        </p>
        <ul className="space-y-3 text-sm text-slate-700">
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
            <span>
              <strong>WhatsApp:</strong> Grave um áudio curto (1-2 minutos) com uma reflexão sobre um
              versículo, ou crie uma imagem no Canva com o versículo e uma pergunta para reflexão.
            </span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Google Docs (opcional):</strong> Mantenha um documento com um banco de devocionais
              curtos que você pode adaptar e enviar.
            </span>
          </li>
        </ul>
      </div>

      <div className="bg-gradient-to-br from-teal-50 to-cyan-50 border-l-4 border-teal-600 p-8 rounded-r-2xl mb-8 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-teal-600 p-2 rounded-lg">
            <Users className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-xl font-bold text-teal-800">9.4. Comunicação Responsável com Pais</h3>
        </div>
        <p className="text-sm text-slate-600 mb-4">
          <strong>Cenário:</strong> Manter os pais informados e engajados.
        </p>
        <ul className="space-y-3 text-sm text-slate-700">
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
            <span>
              <strong>WhatsApp:</strong> Crie um grupo de pais (com regras claras) para avisos importantes,
              fotos das atividades (com autorização) e lembretes.
            </span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Google Formulários:</strong> Use para coletar feedback dos pais sobre as atividades
              ou sugestões para o ministério.
            </span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Canva:</strong> Crie comunicados visuais para eventos especiais, facilitando a
              leitura e a compreensão.
            </span>
          </li>
        </ul>
      </div>

      <div className="bg-gradient-to-r from-cyan-50 to-cyan-100 border-l-4 border-cyan-600 p-6 rounded-r-lg">
        <h3 className="text-xl font-bold text-cyan-800 mb-4">
          9.5. Planejamento e Acompanhamento de Metas
        </h3>
        <p className="text-sm text-slate-600 mb-4">
          <strong>Cenário:</strong> Acompanhar o progresso dos Embaixadores em suas etapas e
          especialidades.
        </p>
        <ul className="space-y-3 text-sm text-slate-700">
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-cyan-600 mr-2 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Google Planilhas:</strong> Crie uma planilha para cada Embaixador ou para a
              embaixada, registrando as especialidades concluídas, os versículos memorizados e as etapas
              alcançadas.
            </span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-cyan-600 mr-2 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Google Docs:</strong> Elabore os requisitos para cada especialidade em um documento
              compartilhado, facilitando o acesso dos Conselheiros.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}

function BoasPraticasSection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-green-50">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
        <div className="order-2 md:order-1">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/7551415/pexels-photo-7551415.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Uso equilibrado da tecnologia"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-green-100 p-3 rounded-lg">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              10. Boas Práticas
            </h2>
          </div>

          <p className="text-slate-700 leading-relaxed text-lg">
            A tecnologia é uma ferramenta, e como tal, seu valor reside no uso que fazemos dela. Para
            Conselheiros, pais e, principalmente, para os Embaixadores, é vital cultivar boas práticas que
            reflitam os valores cristãos.
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-blue-700 mb-8 flex items-center gap-2">
        <div className="bg-blue-100 p-2 rounded-lg">
          <Users className="h-6 w-6 text-blue-600" />
        </div>
        10.1. Orientações para Conselheiros
      </h3>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl shadow-lg border-l-4 border-blue-600">
          <h4 className="font-bold text-blue-800 mb-3 text-lg">Seja Exemplo</h4>
          <p className="text-slate-600 leading-relaxed">
            Seu uso da tecnologia deve refletir moderação, propósito e sabedoria.
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl shadow-lg border-l-4 border-green-600">
          <h4 className="font-bold text-green-800 mb-3 text-lg">Comunique-se com Clareza</h4>
          <p className="text-slate-600 leading-relaxed">
            Estabeleça regras claras para o uso de grupos de WhatsApp e outras plataformas.
          </p>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-2xl shadow-lg border-l-4 border-orange-600">
          <h4 className="font-bold text-orange-800 mb-3 text-lg">Monitore e Dialogue</h4>
          <p className="text-slate-600 leading-relaxed">
            Esteja atento aos sinais de alerta e converse abertamente com os meninos e seus pais sobre o
            uso da tecnologia.
          </p>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-2xl shadow-lg border-l-4 border-teal-600">
          <h4 className="font-bold text-teal-800 mb-3 text-lg">Invista em Conhecimento</h4>
          <p className="text-slate-600 leading-relaxed">
            Busque aprender sobre novas ferramentas e tendências para se manter relevante.
          </p>
        </div>

        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-2xl shadow-lg border-l-4 border-cyan-600 md:col-span-2">
          <h4 className="font-bold text-cyan-800 mb-3 text-lg">Priorize o Relacionamento</h4>
          <p className="text-slate-600 leading-relaxed">
            Lembre-se que a tecnologia é um meio, não um fim. O relacionamento pessoal e o discipulado são
            insubstituíveis.
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-green-700 mb-4">
        10.2. Orientações que Podem Ser Compartilhadas com Pais e Meninos
      </h3>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-200">
          <h4 className="font-bold text-slate-800 mb-2">Tempo de Tela Consciente</h4>
          <p className="text-sm text-slate-600">
            Estabeleçam limites de tempo para o uso de dispositivos, incentivando outras atividades.
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-200">
          <h4 className="font-bold text-slate-800 mb-2">Conteúdo com Propósito</h4>
          <p className="text-sm text-slate-600">
            Escolham juntos jogos, vídeos e aplicativos que sejam educativos, inspiradores ou que promovam
            valores positivos.
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-200">
          <h4 className="font-bold text-slate-800 mb-2">Privacidade e Segurança</h4>
          <p className="text-sm text-slate-600">
            Ensinem a não compartilhar informações pessoais com estranhos e a configurar as opções de
            privacidade.
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-200">
          <h4 className="font-bold text-slate-800 mb-2">Respeito Online</h4>
          <p className="text-sm text-slate-600">
            Promovam a gentileza e o respeito nas interações digitais, combatendo o cyberbullying.
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-200">
          <h4 className="font-bold text-slate-800 mb-2">Equilíbrio</h4>
          <p className="text-sm text-slate-600">
            Incentivem o tempo offline para atividades em família, ao ar livre e para o descanso.
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-200">
          <h4 className="font-bold text-slate-800 mb-2">Diálogo Aberto</h4>
          <p className="text-sm text-slate-600">
            Mantenham um canal de comunicação aberto sobre o que acontece no mundo digital, sem julgamentos.
          </p>
        </div>
      </div>

      <div className="bg-slate-100 p-6 rounded-lg">
        <h4 className="font-bold text-slate-800 mb-4">Checklist de Boas Práticas:</h4>
        <div className="space-y-2">
          <label className="flex items-center text-sm text-slate-700">
            <input type="checkbox" className="mr-3 h-5 w-5" />
            Defini limites de tempo de tela para mim e para os meninos.
          </label>
          <label className="flex items-center text-sm text-slate-700">
            <input type="checkbox" className="mr-3 h-5 w-5" />
            Verifico o conteúdo que os meninos consomem online.
          </label>
          <label className="flex items-center text-sm text-slate-700">
            <input type="checkbox" className="mr-3 h-5 w-5" />
            Converso abertamente sobre segurança e privacidade digital.
          </label>
          <label className="flex items-center text-sm text-slate-700">
            <input type="checkbox" className="mr-3 h-5 w-5" />
            Uso a tecnologia para edificar e não para distrair.
          </label>
          <label className="flex items-center text-sm text-slate-700">
            <input type="checkbox" className="mr-3 h-5 w-5" />
            Priorizo o relacionamento pessoal acima da interação digital.
          </label>
          <label className="flex items-center text-sm text-slate-700">
            <input type="checkbox" className="mr-3 h-5 w-5" />
            Sou um exemplo de uso equilibrado da tecnologia.
          </label>
        </div>
      </div>
    </section>
  );
}

function PlanoAcaoSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Target className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              11. Plano de Ação
            </h2>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-600 p-8 rounded-r-2xl shadow-lg mb-6">
            <p className="text-slate-700 leading-relaxed text-lg">
              Amado(a) Conselheiro(a), a jornada de integrar a tecnologia no ministério começa com pequenos
              passos. Não se sinta sobrecarregado(a) pela quantidade de informações. Escolha uma ou duas ações
              para começar e observe os resultados. Lembre-se que o objetivo é fortalecer seu trabalho e o
              discipulado dos Embaixadores do Rei.
            </p>
          </div>

          <p className="text-slate-700 leading-relaxed">
            Reflita sobre as perguntas abaixo e use o espaço para anotar suas primeiras ações. Que o Espírito
            Santo o(a) guie neste processo!
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Planejamento"
            className="w-full h-96 object-cover"
          />
        </div>
      </div>

      <h3 className="text-2xl font-bold text-blue-700 mb-4">11.1. Perguntas para Reflexão e Ação</h3>

      <div className="space-y-4 mb-8">
        <div className="bg-white p-5 rounded-lg shadow-sm border border-blue-200">
          <p className="font-semibold text-blue-800 mb-2">
            ➤ Qual ferramenta digital posso começar a usar este mês para otimizar meu tempo ou engajar os
            meninos?
          </p>
          <textarea
            className="w-full p-3 border border-slate-300 rounded-lg text-sm"
            rows={3}
            placeholder="Suas anotações..."
          />
        </div>

        <div className="bg-white p-5 rounded-lg shadow-sm border border-green-200">
          <p className="font-semibold text-green-800 mb-2">
            ➤ Como posso melhorar minha comunicação com os meninos e seus pais durante a semana, usando a
            tecnologia?
          </p>
          <textarea
            className="w-full p-3 border border-slate-300 rounded-lg text-sm"
            rows={3}
            placeholder="Suas anotações..."
          />
        </div>

        <div className="bg-white p-5 rounded-lg shadow-sm border border-orange-200">
          <p className="font-semibold text-orange-800 mb-2">
            ➤ O que preciso observar melhor no comportamento digital dos Embaixadores da minha Embaixada?
          </p>
          <textarea
            className="w-full p-3 border border-slate-300 rounded-lg text-sm"
            rows={3}
            placeholder="Suas anotações..."
          />
        </div>

        <div className="bg-white p-5 rounded-lg shadow-sm border border-teal-200">
          <p className="font-semibold text-teal-800 mb-2">
            ➤ Como posso incluir um momento digital com propósito (ex: quiz bíblico, devocional online) na
            programação da Embaixada?
          </p>
          <textarea
            className="w-full p-3 border border-slate-300 rounded-lg text-sm"
            rows={3}
            placeholder="Suas anotações..."
          />
        </div>

        <div className="bg-white p-5 rounded-lg shadow-sm border border-cyan-200">
          <p className="font-semibold text-cyan-800 mb-2">
            ➤ Como posso envolver melhor os pais nesse acompanhamento e orientação sobre o uso da
            tecnologia?
          </p>
          <textarea
            className="w-full p-3 border border-slate-300 rounded-lg text-sm"
            rows={3}
            placeholder="Suas anotações..."
          />
        </div>
      </div>

      <h3 className="text-2xl font-bold text-green-700 mb-4">11.2. Minhas Metas Práticas (Checklist)</h3>

      <div className="bg-slate-50 p-6 rounded-lg">
        <p className="text-slate-700 mb-4">
          Marque as ações que você se compromete a iniciar nos próximos 30 dias:
        </p>
        <div className="space-y-3">
          <label className="flex items-start text-sm text-slate-700">
            <input type="checkbox" className="mr-3 h-5 w-5 mt-0.5" />
            <span>Criar uma conta no Google (se ainda não tiver) para acessar as ferramentas.</span>
          </label>
          <label className="flex items-start text-sm text-slate-700">
            <input type="checkbox" className="mr-3 h-5 w-5 mt-0.5" />
            <span>Criar um documento no Google Docs para o planejamento da próxima reunião.</span>
          </label>
          <label className="flex items-start text-sm text-slate-700">
            <input type="checkbox" className="mr-3 h-5 w-5 mt-0.5" />
            <span>Criar uma planilha no Google Planilhas para controlar a presença dos meninos.</span>
          </label>
          <label className="flex items-start text-sm text-slate-700">
            <input type="checkbox" className="mr-3 h-5 w-5 mt-0.5" />
            <span>Criar um formulário no Google Formulários para inscrições de uma atividade.</span>
          </label>
          <label className="flex items-start text-sm text-slate-700">
            <input type="checkbox" className="mr-3 h-5 w-5 mt-0.5" />
            <span>Criar um convite ou cartaz simples no Canva para divulgar um evento.</span>
          </label>
          <label className="flex items-start text-sm text-slate-700">
            <input type="checkbox" className="mr-3 h-5 w-5 mt-0.5" />
            <span>Preparar uma pergunta interativa no Mentimeter para a próxima reunião.</span>
          </label>
          <label className="flex items-start text-sm text-slate-700">
            <input type="checkbox" className="mr-3 h-5 w-5 mt-0.5" />
            <span>Criar um quiz bíblico no Kahoot! para os Embaixadores.</span>
          </label>
          <label className="flex items-start text-sm text-slate-700">
            <input type="checkbox" className="mr-3 h-5 w-5 mt-0.5" />
            <span>Enviar um devocional curto (áudio ou imagem) no grupo de WhatsApp da Embaixada.</span>
          </label>
          <label className="flex items-start text-sm text-slate-700">
            <input type="checkbox" className="mr-3 h-5 w-5 mt-0.5" />
            <span>
              Conversar com os pais sobre a importância do controle parental e sugerir o Google Family
              Link.
            </span>
          </label>
          <label className="flex items-start text-sm text-slate-700">
            <input type="checkbox" className="mr-3 h-5 w-5 mt-0.5" />
            <span>
              Pesquisar mais sobre um dos riscos digitais (vício em jogos, cyberbullying) para entender
              melhor.
            </span>
          </label>
        </div>
      </div>

      <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mt-6">
        <p className="text-slate-700 leading-relaxed italic">
          Lembre-se: cada pequeno passo é um avanço. Conte com a graça de Deus e com o apoio da sua
          Convenção para implementar essas novas estratégias. Você é um instrumento valioso nas mãos do
          Senhor!
        </p>
      </div>
    </section>
  );
}

function ConclusaoSection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
        <div className="order-2 md:order-1">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/7551419/pexels-photo-7551419.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Conclusão"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Heart className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              12. Conclusão Final
            </h2>
          </div>

          <p className="text-slate-700 mb-6 leading-relaxed text-lg">
            Chegamos ao final desta jornada de aprendizado sobre a Tecnologia Digital da Informação e suas
            aplicações no ministério dos Embaixadores do Rei. Esperamos que este material tenha sido uma fonte
            de inspiração e capacitação para você, Conselheiro(a) dedicado(a).
          </p>

          <p className="text-slate-700 leading-relaxed">
            É fundamental reafirmar que, em meio a todas as inovações e ferramentas digitais, o coração do
            nosso ministério permanece inalterado: o amor a Deus, o amor ao próximo e o discipulado
            intencional. A tecnologia não substitui a oração fervorosa, a presença acolhedora, o relacionamento
            genuíno e o exemplo de vida cristã. Pelo contrário, ela serve como um amplificador, uma ponte e um
            facilitador para que esses valores eternos alcancem os corações dos nossos meninos de forma ainda
            mais eficaz.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white p-10 rounded-2xl mb-8 shadow-2xl">
        <p className="leading-relaxed mb-4">
          Que você seja um líder atento, equilibrado e atualizado, capaz de discernir os tempos e usar cada
          recurso disponível para a glória de Deus. Que a sabedoria divina o(a) capacite a guiar os
          Embaixadores do Rei não apenas nos caminhos da fé, mas também nos desafios e oportunidades do
          mundo digital, formando-os como crentes ativos, consagrados e intensamente evangelísticos e
          missionários.
        </p>
        <p className="leading-relaxed italic">
          Que o Senhor continue abençoando seu trabalho e frutificando cada semente lançada em solo fértil.
        </p>
      </div>

      <div className="bg-slate-700 text-white p-8 rounded-lg text-center">
        <p className="text-lg mb-2 font-semibold">Filipenses 4:8</p>
        <p className="italic leading-relaxed">
          "Tudo o que é verdadeiro, tudo o que é respeitável, tudo o que é justo, tudo o que é puro, tudo o
          que é amável, tudo o que é de boa fama, se alguma virtude há e se algum louvor existe, seja isso
          o que ocupe o vosso pensamento."
        </p>
      </div>
    </section>
  );
}

function ReferenciasSection() {
  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-slate-700 p-3 rounded-lg">
          <BookOpen className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
          13. Referências e Links Úteis
        </h2>
      </div>

      <p className="text-slate-700 mb-10 leading-relaxed text-lg">
        Para aprofundar seus conhecimentos e acessar as ferramentas mencionadas, utilize os links e recursos
        abaixo:
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border-l-4 border-blue-500">
          <div className="flex items-start gap-3 mb-3">
            <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
              <Globe className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">
              Cetic.br - Centro Regional de Estudos para o Desenvolvimento da Sociedade da Informação
            </h3>
          </div>
          <p className="text-slate-600 mb-4 leading-relaxed">
            Recurso para dados e pesquisas sobre o uso da internet no Brasil.
          </p>
          <a
            href="https://cetic.br"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
          >
            <Globe className="h-4 w-4" />
            Site Oficial: cetic.br
          </a>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border-l-4 border-green-500">
          <div className="flex items-start gap-3 mb-3">
            <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
              <Users className="h-5 w-5 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">
              TIC Kids Online Brasil - Pesquisa sobre o uso da internet por crianças e adolescentes
            </h3>
          </div>
          <p className="text-slate-600 mb-4 leading-relaxed">
            Fonte primária para estatísticas sobre o comportamento digital dos jovens.
          </p>
          <a
            href="https://cetic.br/pesquisa/tic-kids-online/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-green-600 font-medium hover:underline"
          >
            Acesse as pesquisas: cetic.br/pesquisa/tic-kids-online/
          </a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold text-slate-800 mb-2">
            NIC.br - Núcleo de Informação e Coordenação do Ponto BR
          </h3>
          <p className="text-sm text-slate-600 mb-2">
            Responsável pela infraestrutura da internet no Brasil e por iniciativas de segurança e educação.
          </p>
          <a
            href="https://nic.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm"
          >
            Site Oficial: nic.br
          </a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold text-slate-800 mb-2">
            CGI.br - Comitê Gestor da Internet no Brasil
          </h3>
          <p className="text-sm text-slate-600 mb-2">
            Estabelece diretrizes estratégicas para o uso e desenvolvimento da internet no Brasil.
          </p>
          <a
            href="https://cgi.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm"
          >
            Site Oficial: cgi.br
          </a>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
          <h3 className="text-lg font-bold text-blue-800 mb-4">Ferramentas Digitais</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-slate-800 mb-2">Google Workspace</h4>
              <a
                href="https://workspace.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm block mb-1"
              >
                workspace.google.com
              </a>
              <a
                href="https://support.google.com/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:underline text-xs block"
              >
                Tutoriais oficiais
              </a>
            </div>

            <div>
              <h4 className="font-semibold text-slate-800 mb-2">Canva</h4>
              <a
                href="https://www.canva.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm block mb-1"
              >
                www.canva.com
              </a>
              <a
                href="https://www.youtube.com/watch?v=jxWdkoWLKlg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:underline text-xs block"
              >
                Tutorial no YouTube
              </a>
            </div>

            <div>
              <h4 className="font-semibold text-slate-800 mb-2">Mentimeter</h4>
              <a
                href="https://www.mentimeter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm block mb-1"
              >
                www.mentimeter.com
              </a>
              <a
                href="https://www.youtube.com/watch?v=BZsg6gGjZ_Y"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:underline text-xs block"
              >
                Tutorial no YouTube
              </a>
            </div>

            <div>
              <h4 className="font-semibold text-slate-800 mb-2">Kahoot!</h4>
              <a
                href="https://kahoot.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm block mb-1"
              >
                kahoot.com
              </a>
              <a
                href="https://www.youtube.com/watch?v=Powh5R6zQ24"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:underline text-xs block"
              >
                Tutorial no YouTube
              </a>
            </div>

            <div>
              <h4 className="font-semibold text-slate-800 mb-2">WhatsApp</h4>
              <a
                href="https://www.whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm block mb-1"
              >
                www.whatsapp.com
              </a>
              <a
                href="https://faq.whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:underline text-xs block"
              >
                FAQ oficial
              </a>
            </div>

            <div>
              <h4 className="font-semibold text-slate-800 mb-2">Google Family Link</h4>
              <a
                href="https://families.google.com/familylink/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm block mb-1"
              >
                families.google.com/familylink
              </a>
              <a
                href="https://www.youtube.com/watch?v=PwEsqPTjffA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:underline text-xs block"
              >
                Tutorial no YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
