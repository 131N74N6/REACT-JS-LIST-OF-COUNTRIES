import { Fragment } from 'react';
import "./Error.css";

export default function Error({message}) {
    return (
        <Fragment>
            <div className="error-msg">{message}</div>
        </Fragment>
    )
}
