import { useParams } from "react-router-dom";

export default function Location() {
    const { id } = useParams();

    return (
        <div>
            Location: {id}
        </div>
    )
}