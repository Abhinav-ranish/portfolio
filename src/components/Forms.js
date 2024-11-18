import './CSS/Form.css';

const Forms = () => {
    return (
        <div className="form-container">
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfaYlX2y81IMcvGGaXCftAdiUpCrZd4TWdLXXJWwnTDn2zLQQ/viewform?embedded=true"
                width="900"
                height="1480"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="ASU Form"
                className="form-iframe"
            >
                Loading…
            </iframe>
        </div>
    );
};

export default Forms;
