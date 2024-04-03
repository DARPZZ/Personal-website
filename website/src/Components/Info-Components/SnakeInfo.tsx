import { scrollToTop } from "../Scroll";
function SnakeInfo() {
    scrollToTop()
    return (
        <div className='con'>
        <div className='things-learned'>
            <h1>Things that i have learned in this project</h1>
                <div>
                    <h2>SDLC</h2>
                    <h2>Makeing grid</h2>
                    <h2>Crud support</h2>
                    <h2>User interface</h2>
                    <h2>Database connection</h2>
                    <h2>Draw shapes on canvas</h2>
                    <h2>Makeing software that you can easily maintain</h2>
                    <h2>Handle new requirements half way through the project</h2>
                </div>
                <div className='pciture'>
                <iframe width="1000" height="650"
                    src="https://www.youtube.com/embed/dIuudb07AI0?autoplay=1&mute=1">      
                    </iframe>
                </div>
        </div>
       </div>
    );
}

export default SnakeInfo;