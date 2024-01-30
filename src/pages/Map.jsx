import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
    width: '90vw',
    height: '90vh',
};
const center = {
    lng: -93.3519936, // default latitude
    lat: 44.9236363, // default longitude
};

const Map = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyAkDq9H9vxquKtdgjyLMNA3zaulshm-l20',
        libraries,
    });

    if (loadError) {
        return <div>Error loading maps</div>;
    }

    if (!isLoaded) {
        return <div>Loading maps</div>;
    }

    return (
        <>
            <h2>MORC Trails</h2>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={10}
                center={center}
            >
                <Marker position={center} />
            </GoogleMap>
        </>
    )
}

export default Map;
