export default function Box({ item, requestDelet, setModal }) {
    return (
        <div className="boxxx" key={item.id}>
            <h4>{item.title}</h4>
            <button onClick={() => requestDelet(item.id)}>Delet</button>
            <button onClick={() => setModal({
                open: true,
                data: item
            })}>Update</button>
        </div>
    )
}