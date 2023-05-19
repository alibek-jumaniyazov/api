export default function Search({getSearch}) {

    function requestSaerch(e){
        getSearch(e)
    }

    return (
        <>
            <input type="text" onChange={(e) => requestSaerch(e.target.value)} />
            <button onClick={() => requestSaerch()}>Search</button>
        </>
    )
}