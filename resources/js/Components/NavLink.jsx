import { Link } from '@inertiajs/react';

export default function NavLink({
    active = false,
    className = '',
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                ' px-3 py-4   leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'bg-indigo-400 px-3 py-4  text-white focus:border-indigo-700'
                    : 'border-transparent text-white hover:border-gray-300 hover:bg-indigo-400 m-1 focus:border-gray-300 focus:text-gray-700') +
                className
            }
        >
            {children}
        </Link>
    );
}
