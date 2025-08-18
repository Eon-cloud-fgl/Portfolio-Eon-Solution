import '../styles/home.css';

function MainVideo(){
    return (
        <div className="main-image">
            <video autoPlay loop muted playsInline>
                <source src="5921369-hd_1920_1080_30fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}


export default function Home(){
    return (
        <>
            <MainVideo/>
        </>
    )
}