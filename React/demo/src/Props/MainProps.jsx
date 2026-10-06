// props : it's property 
// props : it;s one compoenet to another compoennet data pass 
// props : read only 
// props : class and function

import React from 'react'
import ClassProps from './ClassProps'
import FuncProps from './FuncProps'

function MainProps() {
    return (
        <div>
            {/* <h1 className='bg-info'>Main propers</h1> */}
            <div className="container">
                <h1 className='bg-info'>Class props Componenet</h1>
                <div className="row">
                    <ClassProps title="car 1" desc="hello this car 1" img="https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg" />
                    <ClassProps title="car 2" desc="hello this car 2" img="https://cdn.pixabay.com/photo/2020/05/19/10/05/opel-5190050_1280.jpg" />
                    <ClassProps title="car 3" desc="hello this car 3" img="https://cdn.pixabay.com/photo/2023/07/19/12/16/car-8136751_1280.jpg" />
                    <ClassProps title="car 4" desc="hello this car 4" img="https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg" />
                </div>
            </div>
            <div className="container">
                <h1>Function Props Compoennt</h1>
                <div className="row">
                    <FuncProps title="nature 1" desc="natura data" img="https://cdn.pixabay.com/photo/2022/04/15/07/58/sunset-7133867_1280.jpg" />
                    <FuncProps title="nature 1" desc="natura data" img="https://cdn.pixabay.com/photo/2022/11/05/19/56/bachalpsee-7572681_1280.jpg" />
                    <FuncProps title="nature 1" desc="natura data" img="https://cdn.pixabay.com/photo/2021/08/01/17/31/path-6514885_1280.jpg" />
                    <FuncProps title="nature 1" desc="natura data" img="https://cdn.pixabay.com/photo/2022/04/15/07/58/sunset-7133867_1280.jpg" />
                </div>
            </div>
        </div>
    )
}

export default MainProps
