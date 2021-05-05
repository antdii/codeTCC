import React, { useEffect } from "react"

const Area = ({
    name,
    id,
    rows,
    placeholder,
    isFocused,
    resize
    }) => {

    const ref = React.createRef();

    useEffect(() => {
        isFocused && ref.current.focus()
    });

    return (<textarea className="bg-white tracking-wide rounded-md mt-1 px-4 py-2 border focus:border-brand focus:shadow-outline-sm focus:outline-none"
        ref={ref}
        name={name}
        id={id}
        placeholder={placeholder}
        rows={rows}
        resize={resize}
    />)
}

export default Area