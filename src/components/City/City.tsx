
export const City = ({ city }) => {

    const { name, country, country_flag } = city;

    return (
        <div>
            <div className="card bg-base-100 lg:w-96 shadow-sm">
                <figure>
                    <img
                        src={country_flag}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Country : {country}</p>
                </div>
            </div>
        </div>
    )
}
