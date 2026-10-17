import { useState, useEffect } from 'react';

type CategoryType = {
    id: string;
}

export function CategoriasPopulares(props: CategoryType) {
    const [imgCategory, setImgCategory] = useState<string>('');
    const [categoryName, setcategoryName] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchCategoryData = async () => {
            try {
                const response = await fetch(`https://6ad14c18addc5b5cb142f2d6.mockapi.io/example/StyleNowMockApi/${props.id}`);
                const data = await response.json();
                
                setImgCategory(data.imgCategory);
                setcategoryName(data.categoryName);

            } catch (error) {
                console.error('Categoría no encontrada');
            } finally {
                setLoading(false);
            }
        };

        fetchCategoryData();
    }, [props.id]);

    return (
        <div id={props.id} className="element">
            {loading ? (<div className="loading">Cargando...</div>) : (<img src={imgCategory} alt={categoryName} className="imgCategory" />)}
            <div>
                <h3>{categoryName}</h3>
            </div>
        </div>
    );
}

