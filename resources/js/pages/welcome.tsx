import PublicLayout from '@/layouts/public-layout'
import HeroSection from '@/components/public/home-promo';
import Example from '@/components/public/home-collection-list';

export default function Welcome() {
    return (
        <PublicLayout>
            <HeroSection />
            <Example />
        </PublicLayout>
    )
}
