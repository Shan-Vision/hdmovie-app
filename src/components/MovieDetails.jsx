import { useParams } from "react-router-dom";

const MovieDetails = () => {
    const params = useParams();
    console.log(params);
    return (
        <div>Hello form MovieDetails</div>
    )
}

export default MovieDetails;