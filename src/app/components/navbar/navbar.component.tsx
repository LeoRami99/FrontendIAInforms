'use client'
import Link from "next/link"
import './style.css'
import { usePathname} from 'next/navigation'
// obtener el param donde se encuentra la url
export default function navbar({...props}){
    const pathname = usePathname()
    // use next router for get path
    return(
        // Creation for navbar component with tailwindcss
        <nav className="flex items-center justify-between flex-wrap navbar-background p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">IA Inform</span>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
            </div>
            <div>
                {
                    pathname === '/generate' ? (
                        <Link href="/">
                            Inicio
                        </Link>
                    ) : (
                        <Link href="/generate">
                            Generar
                        </Link>
                    )
                }        
                {/* <Link href="/generate">
                    Generar
                </Link> */}
                {/* <a href="#"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white">
                Acerca de
                </a> */}
            </div>
            </div>
        </nav>
    )
}