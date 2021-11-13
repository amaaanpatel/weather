export default function SearchCities() {

    return (
        <div className="dearch details">
            <div className="row px-3"> <input type="text" name="location" placeholder="Another location" className="mb-5" />
                <div className="fa fa-search mb-5 mr-0 text-center"></div>
            </div>
            <div className="mr-5">
                <p className="light-text suggestion">Birmingham</p>
                <p className="light-text suggestion">Manchester</p>
                <p className="light-text suggestion">New York</p>
                <p className="light-text suggestion">California</p>
            </div>
            <div className="line my-5"></div>
        </div>
    )
}