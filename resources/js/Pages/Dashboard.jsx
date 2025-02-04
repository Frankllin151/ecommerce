import RevenueStats from '@/Components/RevenueStats';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
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
          
        </AuthenticatedLayout>
    );
}
