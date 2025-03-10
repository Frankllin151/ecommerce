import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;


    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="flex">
        {/* Sidebar */}
        <div className="w-64 h-screen bg-gray-800 text-white fixed">
            <div className="p-4">
                <Link href="/">
                    <ApplicationLogo className="h-10 w-auto mx-auto text-white" />
                </Link>
            </div>

            <nav className="mt-5 gap-1 flex flex-col ">
                <NavLink href={route("dashboard")} active={route().current("dashboard")}>
                   Inicio
                </NavLink>
                <NavLink href={route("profile.edit")} active={route().current("profile.edit")}>
                    Perfil
                </NavLink>
         
                <NavLink href={route("todoproduto")} active={route().current("todoproduto")}>
                   Todos os Produtos
                </NavLink>
                <NavLink href={route("media")} active={route().current("media")}>
                Media
                </NavLink>

            </nav>
        </div>

        {/* Conteúdo Principal */}
        <div className="flex-1 min-h-screen ml-64 bg-gray-100">
            {/* Barra de Navegação */}
            <nav className="border-b bg-white p-4 flex justify-between items-center shadow-md">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="sm:hidden text-gray-700 p-2 rounded-md"
                >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>

                <Dropdown>
                    <Dropdown.Trigger>
                        <span className="inline-flex rounded-md">
                            <button className="flex items-center text-gray-700 px-3 py-2 rounded-md">
                                {user.name}
                                <svg className="ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </span>
                    </Dropdown.Trigger>
                    <Dropdown.Content>
                        <Dropdown.Link href={route("profile.edit")}>Perfil</Dropdown.Link>
                        <Dropdown.Link href={route("logout")} method="post" as="button">Sair</Dropdown.Link>
                    </Dropdown.Content>
                </Dropdown>
            </nav>

            {/* Conteúdo Dinâmico */}
            <main className="p-6">{children}</main>
        </div>
    </div>
    );
}
