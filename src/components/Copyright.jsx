import '../styles/Copyright.css';

export default function Copyright() {
    return (
        <footer className="copyright-container">
            <div className="copyright-content">
                <p>&copy;/{new Date().getFullYear()}</p>
            </div>
        </footer>
    );
}
