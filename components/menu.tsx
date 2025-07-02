"use client"
import "../styles/menu.css"

export default function Menu() {
    return (
        <div className="mobile-main-menu">

            <div className="menu-main-container">
                <div className="menu"></div>
                <div style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}>
                    <h2>Menú Smash Point</h2>

                    <h3>Hamburguesas</h3>
                    <p>Incluye papas. Pan, queso cheddar, carne smash, salsa especial de la casa, tocineta y cebolla caramelizada.</p>
                    <ul>
                        <li>Sencilla – $22.000</li>
                        <li>Doble (todos los ingredientes x2) – $28.000</li>
                        <li>Triple (todos los ingredientes x3) – $32.000</li>
                    </ul>

                    <h3>Adicionales</h3>
                    <ul>
                        <li>Papas On Point (cheddar y tocineta) – $6.000</li>
                        <li>Extra Cheddar – $3.000</li>
                        <li>Extra Tocineta – $4.000</li>
                    </ul>

                    <h3>Bebidas</h3>
                    <ul>
                        <li>Coca-Cola – $4.000</li>
                        <li>Coca-Cola Zero – $4.000</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
