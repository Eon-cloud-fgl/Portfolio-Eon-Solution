import '../styles/separator.css';

export default function Marquee({ title }) {
    return (
        <div className="news-marquee">
            <div className="marquee-track">
                {[...Array(4)].map((_, i) => (
                    <span key={i}>{title}</span>
                ))}
            </div>
        </div>
    );
}
