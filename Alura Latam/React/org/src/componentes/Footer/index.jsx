import "./Footer.css"

const Footer=()=>{
    return <footer className="footer" style={{backgroundImage:"url(/img/footer.png)"}}>
        <div className="redes">
            <a href="https://www.facebook.com/profile.php?id=100008289640877">
                <img src="/img/facebook.png" alt="Facebook" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100008289640877">
                <img src="/img/twitter.png" alt="Twitter" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100008289640877">
                <img src="/img/instagram.png" alt="Instagram" />
            </a>
        </div>
        <img src="/img/Logo.png" alt="Org" />
        <strong>Desarrollado por Abel Carrillo Gutierrez</strong>
    </footer>
}
export default Footer