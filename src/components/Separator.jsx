import '../styles/separator.css';

export default function Marquee({ title }) {
    return (
        <div className="separator-marquee-container">
            <div className="separator-marquee">
                <span>
                    {title} {title} {title} {title} {title} {title} {title} {title} {title} 
                </span>
                <span>
                    {title} {title} {title} {title} {title} {title} {title} {title} {title} 
                </span>
            </div>
        </div>
    );
}
