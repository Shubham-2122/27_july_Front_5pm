import React from 'react'

function APageHead({ title }) {
    return (
        <div>
            <div className="page-title">
                <div className="heading">
                    <div className="container">
                        <div className="row d-flex justify-content-center text-center">
                            <div className="col-lg-8">
                                <h1 className="heading-title">{title}</h1>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default APageHead