import { Header } from './Header'
import { Sidebar } from './Sidebar'
import { Body } from './Body'
import { Footer } from './Footer'



export function MainLayout() {
    return (
        <>
            <Header />
            <div className="app-layout">
                <Body />
                <Sidebar />
            </div>
            <Footer />


        </>
    )
}


