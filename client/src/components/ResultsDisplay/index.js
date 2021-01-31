import React, { Fragment } from 'react';

const ResultsDisplay = props => {

    return (
        <Fragment>
            <h3>You have {props.time} left</h3>
            <table>
                <tr>
                    <th>Question</th>
                    <th>Result</th>
                </tr>

                {props.res.map((res, j) => {
                    return (
                        <tr>
                            <td>{j + 1}</td>
                            <td>{res ? <span>&#9989;</span> : <span>&#10060;</span>}</td>
                        </tr>

                    )
                })}
            </table>
            <h3>Your rating is {props.rate}%</h3>
        </Fragment>
    );
}
export default ResultsDisplay;