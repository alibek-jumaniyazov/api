
const Input = React.forwardRef(({type , placeholder}, ref) => (
        <div className="inputs">
            <input ref={ref} className="inputCompanent" type={type} placeholder={placeholder}/>
        </div>
    )
);

export default  Input;