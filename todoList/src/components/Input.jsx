import React, { forwardRef } from "react";

const Input = forwardRef(({ type, placeholder }, ref) => (
    <div className="inputs">
        <input ref={ref} className="inputCompanent" type={type} placeholder={placeholder} />
    </div>
)
);

export default Input