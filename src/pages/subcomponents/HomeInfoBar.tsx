
type InfoBar = {
    infoH3: string;
    infoP: string;
}

export function HomeInfoBar(props: InfoBar) {
    return (
        <>
            <div className="element">
                <div className="img-placeholder"></div>
                <div>
                    <h3>{props.infoH3}</h3>
                    <p>{props.infoP}</p>
                </div>
            </div>
        </>
    )
} 