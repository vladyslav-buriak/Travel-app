const locName = [
    { location: "Paris" },
    { location: "Bora Bora" },
    { location: "Maui" },
    { location: "Tahiti" },
    { location: "Brazil" },
    { location: "Norway" },
]


const Filters = () => {
    return (
        <div>
            {locName.map(f => <button>{f.location}</button>)}
        </div>
    );
}


export default Filters