type category = {
    categoryName: string;
}


export function CategoriasPopulares (props:category) {
    return (
        <>
            <div className="element">
                <div className="img-placeholder"></div>
                <div>
                    <h3>{props.categoryName}</h3>
                </div>
            </div>
        </>
    )
}