export default function GuaranteeComponent({ icon, head, body }) {
    return (
        <div>
            <img src={ icon } alt="" />
            <h3>{ head }</h3>
            <p>{ body }</p>
        </div>
    )
};
