import './someInfo.css';



export default function SomeInfo() {
    return(
        <div className='someInfoContainer'>
            <h1>Some random Info</h1>
            <div className='boxesContainer'>
                <div className='boxContainer'>
                    <div className='infoBox'></div>
                    <p className='boxText'>this is some subtext under illustration or image</p>
                </div>
                <div className='boxContainer'>
                    <div className='infoBox'></div>
                    <p className='boxText'>this is some subtext under illustration or image</p>
                </div>
                <div className='boxContainer'>
                    <div className='infoBox'></div>
                    <p className='boxText'>this is some subtext under illustration or image</p>
                </div>
                <div className='boxContainer'>
                    <div className='infoBox'></div>
                    <p className='boxText'>this is some subtext under illustration or image</p>
                </div>
            </div>
        </div>
    )
}