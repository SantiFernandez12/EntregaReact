import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Prendas Shop</h3>
            <div>
                <button>Remeras</button>
                <button>Buzos</button>
                <button>Camperas</button>
                <button>Pantalones</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar