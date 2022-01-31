import Navigation from '../components/navigation'


function Layout({children}){
    return <div>
    <Navigation/>
    <main>{children} </main>
    <footer>created at = 10:00</footer>

    </div>
}
export default Layout