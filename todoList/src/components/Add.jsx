export default function Add({nameRef, todos ,requestLogin}) {

    return (
        <>
            <input type="text" ref={nameRef} value={todos} />
            <button onClick={() => requestLogin()}>add</button>
        </>
    )
}