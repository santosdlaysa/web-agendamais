import {
  BellRing,
  LayoutDashboard,
  BarChart3,
  Users,
  PersonStanding,
  Briefcase,
  ShoppingBag,
  Calendar,
  MessageSquare,
  TrendingUp,
  Scissors,
  Stethoscope,
  UserCheck,
  ArrowRight
} from 'lucide-react';
import { Header, Footer, DifferentialCard, FeatureCard, UseCaseCard } from '../components';

export function Home() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Header />

      {/* Hero Section */}
      <section id="visao-geral" className="relative py-20 md:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Sistema em Produção
            </span>

            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="block text-white">AgendaMais</span>
              <span className="block bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Transforme seu Negócio
              </span>
            </h2>

            <p className="text-lg md:text-xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
              Sistema completo de agendamento para profissionais liberais, clínicas e estabelecimentos.
            </p>

            <p className="text-base md:text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Gerencie clientes, equipes e horários com <span className="text-emerald-400 font-semibold">lembretes automáticos</span> que <span className="text-blue-400 font-semibold">reduzem faltas</span> e aumentam sua produtividade.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <a
                href="#funcionalidades"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              >
                <span className="flex items-center justify-center gap-2">
                  Ver Funcionalidades
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a
                href="#contato"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-xl border-2 border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-xl"
              >
                Solicitar Demonstração
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">50%</div>
                <div className="text-sm text-gray-400">Menos Faltas</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">24/7</div>
                <div className="text-sm text-gray-400">Acesso Total</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">100%</div>
                <div className="text-sm text-gray-400">Automatizado</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Differentiators Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-darkbg mb-12">Principais Diferenciais</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <DifferentialCard
              icon={BellRing}
              title="Lembretes Automáticos"
              description="Notificações via WhatsApp/SMS para reduzir drasticamente os no-shows."
              iconColor="text-accent"
            />
            <DifferentialCard
              icon={LayoutDashboard}
              title="Interface Moderna"
              description="Design intuitivo e totalmente responsivo para uma navegação fluida em qualquer dispositivo."
              iconColor="text-primary"
            />
            <DifferentialCard
              icon={BarChart3}
              title="Relatórios Financeiros"
              description="Análise detalhada de receitas, performance e taxa de sucesso dos lembretes."
              iconColor="text-secondary"
            />
            <DifferentialCard
              icon={Users}
              title="Multi-Profissional"
              description="Suporte completo para múltiplos profissionais, agendas e serviços."
              iconColor="text-yellow-600"
            />
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section id="funcionalidades" className="py-16 md:py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-darkbg mb-4">Funcionalidades Principais</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tudo o que você precisa para gerenciar sua agenda em um só lugar, com foco em automação e dados.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={PersonStanding}
              title="Gerenciamento de Clientes"
              items={[
                'Cadastro completo com contato',
                'Histórico de agendamentos',
                'Busca e filtros avançados'
              ]}
              borderColor="border-primary/50"
            />
            <FeatureCard
              icon={Briefcase}
              title="Gerenciamento de Profissionais"
              items={[
                'Cadastro com especialidades',
                'Configuração individual de horários',
                'Dashboard personalizado'
              ]}
              borderColor="border-primary/50"
            />
            <FeatureCard
              icon={ShoppingBag}
              title="Catálogo de Serviços"
              items={[
                'Cadastro com preço e duração',
                'Categorização por tipo',
                'Controle de disponibilidade'
              ]}
              borderColor="border-primary/50"
            />
            <FeatureCard
              icon={Calendar}
              title="Sistema de Agendamentos"
              items={[
                'Interface visual intuitiva',
                'Verificação automática de conflitos',
                'Status do agendamento (concluído, cancelado)'
              ]}
              borderColor="border-accent/50"
            />
            <FeatureCard
              icon={MessageSquare}
              title="Lembretes Automáticos (WhatsApp)"
              items={[
                'Integração com WhatsApp e SMS',
                'Configuração flexível por profissional',
                'Mensagens customizadas'
              ]}
              borderColor="border-accent/50"
            />
            <FeatureCard
              icon={TrendingUp}
              title="Relatórios Financeiros"
              items={[
                'Métricas em tempo real',
                'Receita total e por período',
                'Análise de performance profissional'
              ]}
              borderColor="border-accent/50"
            />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-darkbg mb-12">Quem se Beneficia do AgendaMais?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <UseCaseCard
              icon={Scissors}
              title="Salões de Beleza & Barbearias"
              description="Gestão de múltiplos serviços e profissionais (cabeleireiros, manicures). Reduza no-shows com lembretes."
              borderColor="border-pink-400"
              iconColor="text-pink-500"
            />
            <UseCaseCard
              icon={Stethoscope}
              title="Clínicas Médicas & Consultórios"
              description="Agenda de especialistas, controle de consultas e retornos. Lembretes de consultas essenciais."
              borderColor="border-cyan-400"
              iconColor="text-cyan-500"
            />
            <UseCaseCard
              icon={UserCheck}
              title="Profissionais Liberais"
              description="Agenda pessoal, controle de clientes e serviços. Automação para foco total no atendimento."
              borderColor="border-yellow-400"
              iconColor="text-yellow-600"
            />
          </div>
        </div>
      </section>

      {/* Roadmap & Conclusion CTA */}
      <section id="contato" className="py-16 md:py-24 bg-darkbg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-6">Pronto para Otimizar Sua Agenda?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            O AgendaMais é a solução completa para reduzir faltas, organizar sua equipe e impulsionar suas receitas através de automação inteligente e relatórios detalhados.
          </p>

          <div className="bg-darkbg/50 border border-primary/30 p-6 rounded-xl inline-block mb-10">
            <p className="font-bold text-lg mb-2 text-primary">Próximos Passos (Roadmap)</p>
            <p className="text-sm text-gray-400">
              Em breve: App Mobile, Integração com Pagamentos (PIX/Cartão) e Sincronização com Google Calendar.
            </p>
          </div>

          <div className="flex justify-center">
            <a href="#" className="px-10 py-4 bg-accent text-white font-bold text-xl rounded-xl shadow-2xl hover:bg-green-700 transition duration-300 transform hover:scale-105">
              Fale Conosco e Comece Agora!
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
