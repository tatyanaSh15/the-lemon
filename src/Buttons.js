function Buttons({filteredMeal}){

    

    return(<div className="container">
                <button className="filter" onClick={() => window.location.reload()}>Our menu</button>
                <button className="filter" onClick={() => filteredMeal("salad")}>Salad</button>
                <button className="filter" onClick={() => filteredMeal("dessert")}>Dessert</button>
                <button className="filter" onClick={() => filteredMeal("beverage")}>Beverage</button>

            </div>
    )
}

export default Buttons;