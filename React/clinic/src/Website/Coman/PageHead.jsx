import React from 'react'

function PageHead({title,list}) {
  return (
    <div>
        <div className="page-title">
                    <div className="heading">
                        <div className="container">
                            <div className="row d-flex justify-content-center text-center">
                                <div className="col-lg-8">
                                    <h1 className="heading-title">{title}</h1>
                                    <p className="mb-0">
                                        Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo
                                        odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum
                                        debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat
                                        ipsum dolorem.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav className="breadcrumbs">
                        <div className="container">
                            <ol>
                                <li><a href="index.html">Home</a></li>
                                <li className="current">{list}</li>
                            </ol>
                        </div>
                    </nav>
                </div>
    </div>
  )
}

export default PageHead