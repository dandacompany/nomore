import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

interface Store {
	name: string;
	lat: number;
	lng: number;
}

interface GoogleMapProps {
	selectedStore: Store;
}

const MapComponent: React.FC<GoogleMapProps> = ({ selectedStore }) => {
	const mapStyles = {
		height: "100%",
		width: "100%",
	};

	const defaultCenter = {
		lat: 37.5665,
		lng: 126.978, // Seoul coordinates
	};

	const markerIcon = {
		url: "/logos/main_logo.png",
		scaledSize: new window.google.maps.Size(40, 40), // 마커 크기를 줄임
	};

	return (
		<LoadScript
			googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || ""}
		>
			<GoogleMap
				mapContainerStyle={mapStyles}
				zoom={13}
				center={
					selectedStore
						? { lat: selectedStore.lat, lng: selectedStore.lng }
						: defaultCenter
				}
			>
				{selectedStore && (
					<Marker
						position={{ lat: selectedStore.lat, lng: selectedStore.lng }}
						icon={markerIcon}
					/>
				)}
			</GoogleMap>
		</LoadScript>
	);
};

export default MapComponent;
