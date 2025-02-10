import PeriodoPedido from '@/Components/PeriodoPedido';
import RevenueStats from '@/Components/RevenueStats';
import TicketMedioGasto from '@/Components/TicketMedioGasto';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    const clientes = [
        { id: 1, nome: "João Silva", email: "joao@email.com", total: "R$ 2.500,00", pedidos: 5, ticket: "R$ 500,00", desconto: "✅ 10% OFF", descontoClasse: "text-green-600" },
        { id: 2, nome: "Maria Souza", email: "maria@email.com", total: "R$ 1.800,00", pedidos: 3, ticket: "R$ 600,00", desconto: "❌ Nenhum", descontoClasse: "text-red-600" },
        { id: 3, nome: "Pedro Lima", email: "pedro@email.com", total: "R$ 3.200,00", pedidos: 8, ticket: "R$ 400,00", desconto: "✅ 15% OFF", descontoClasse: "text-green-600" },
        { id: 4, nome: "Ana Mendes", email: "ana@email.com", total: "R$ 1.200,00", pedidos: 2, ticket: "R$ 600,00", desconto: "❌ Nenhum", descontoClasse: "text-red-600" },
        { id: 5, nome: "Carlos Dias", email: "carlos@email.com", total: "R$ 4.500,00", pedidos: 9, ticket: "R$ 500,00", desconto: "✅ 20% OFF", descontoClasse: "text-green-600" }
      ];
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Painel Admin" />
             <div className="px-3 py-3 overflow-hidden bg-white shadow-sm sm:rounded-lg">
             You're logged in!
             </div>
             <RevenueStats current={15000} previous={12000} thirdMonth={11000} />
          <PeriodoPedido/>
          <TicketMedioGasto totalperdido={clientes}/>
        </AuthenticatedLayout>
    );
}
