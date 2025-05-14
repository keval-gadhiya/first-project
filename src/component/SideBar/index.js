
import Button from '@mui/material/Button';
import "./side-bar.css"

const SideBar = () => {
    return (
        <>
            <div className="sidebar">
                <ul>
                    <li>
                        <Button className='w-100'>
                            <span className='icon'></span>
                            Text
                            <span className='arrow'></span>
                        </Button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default SideBar;