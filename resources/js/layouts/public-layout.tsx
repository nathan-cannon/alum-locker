import { ReactNode } from 'react'
import PublicHeader from '@/components/public/public-header'

interface PublicLayoutProps {
    children: ReactNode
}

export default function PublicLayout({ children }: PublicLayoutProps) {
    return (
        <div className="min-h-screen bg-white">
            <PublicHeader />

            <main>
                {children}
            </main>
        </div>
    )
}
