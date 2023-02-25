// Importing images
import profilePic from './Images/Andrew_Portrait.jpeg'
import bannerBg2 from './Images/233023_cv_Background-2-01.svg'
import bannerBg1 from './Images/230223_cv_Background_04-01.svg'

// header component
function Header(){
    return (
    <div className="banner-container">
        <div className='banner-content'>
            <div className="circle">
                <img className='circle-img' src={profilePic}></img>
            </div>
            <div className='bannerTxt'>
                <p className='no-wrap heading bold noBlur text-margin0 darkgreytext'>Andrew Dang</p>
                <p className='bold noBlur text-margin0 redtext'>Aspiring Web Developer</p>
                <p className='bold noBlur text-margin0 bluetext'>Designer</p>
                <p className='bold noBlur text-margin0 yellowtext'>Artist</p>
                <div className='svg-container'>
                    <a href="https://github.com/AndrewCDang" target="_blank">
                        <div className='svg-item'>
                            <svg className='svg-logo' id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
                            <path d="M399.98,0C179.1,0-.05,183.63-.05,410.11-.05,591.31,114.56,745.04,273.54,799.27c19.97,3.79,26.43-8.92,26.43-19.72v-76.35c-111.27,24.81-134.44-48.39-134.44-48.39-18.2-47.4-44.44-60.01-44.44-60.01-36.3-25.46,2.77-24.91,2.77-24.91,40.17,2.87,61.3,42.28,61.3,42.28,35.67,62.68,93.57,44.57,116.41,34.07,3.57-26.49,13.93-44.6,25.4-54.82-88.84-10.42-182.24-45.59-182.24-202.7,0-44.8,15.63-81.37,41.2-110.08-4.13-10.36-17.83-52.08,3.9-108.54,0,0,33.6-11,110.04,42.04,31.9-9.09,66.1-13.64,100.11-13.81,34,.17,68.24,4.72,100.21,13.81,76.37-53.04,109.91-42.04,109.91-42.04,21.77,56.49,8.07,98.22,3.93,108.54,25.67,28.71,41.17,65.31,41.17,110.08,0,157.52-93.57,192.21-182.64,202.36,14.33,12.71,27.43,37.66,27.43,75.94v112.54c0,10.9,6.4,23.72,26.7,19.69,158.84-54.31,273.32-208,273.32-389.13C800,183.63,620.89,0,399.98,0Z"/>
                            </svg>
                        </div>
                    </a>
                    <a href='https://www.linkedin.com/in/andrew-dang-91b4bb173/' target="_blank">
                        <div>
                            <svg className='svg-logo' id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
                                <path d="M186.22,257.37H25.62c-7.13,0-12.9,5.78-12.9,12.9V786.21c0,7.13,5.78,12.9,12.9,12.9H186.22c7.13,0,12.9-5.78,12.9-12.9V270.27c0-7.13-5.78-12.9-12.9-12.9Z"/>
                                <path d="M105.98,.88C47.54,.88,0,48.37,0,106.74s47.54,105.9,105.98,105.9,105.89-47.51,105.89-105.9c0-58.37-47.5-105.86-105.89-105.86Z"/>
                                <path d="M594.72,244.54c-64.5,0-112.19,27.73-141.11,59.24v-33.51c0-7.13-5.78-12.9-12.9-12.9h-153.8c-7.13,0-12.9,5.78-12.9,12.9V786.21c0,7.13,5.78,12.9,12.9,12.9h160.25c7.13,0,12.9-5.78,12.9-12.9v-255.27c0-86.02,23.37-119.53,83.33-119.53,65.31,0,70.5,53.72,70.5,123.96v250.85c0,7.13,5.78,12.9,12.9,12.9h160.31c7.13,0,12.9-5.78,12.9-12.9V503.21c0-127.91-24.39-258.67-205.28-258.67Z"/>
                            </svg>
                        </div>
                    </a>
                </div>
                <div className='bannerBg'></div>
            </div>
        </div>
        <img className='banner-bg-image-1' src={bannerBg1} ></img>
        <img className='banner-bg-image-2' src={bannerBg2} ></img>
    </div>
    );
}
// Calling header component
export default Header;