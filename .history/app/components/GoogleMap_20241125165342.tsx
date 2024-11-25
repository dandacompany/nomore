import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker, Circle } from "@react-google-maps/api";

interface Store {
	name: string;
	lat: number;
	lng: number;
}

interface GoogleMapProps {
	selectedStore: Store;
	stores: Store[];
}

// Google Maps 관련 타입 정의
type GoogleMapIcon = {
	url: string;
	scaledSize: google.maps.Size;
};

const MapComponent: React.FC<GoogleMapProps> = ({ selectedStore, stores }) => {
	const mapStyles = {
		height: "100%",
		width: "100%",
	};

	const defaultCenter = {
		lat: 37.5665,
		lng: 126.978, // Seoul coordinates
	};

	const [markerIcon, setMarkerIcon] = useState<GoogleMapIcon | null>(null);

	useEffect(() => {
		if (typeof window !== "undefined" && window.google) {
			setMarkerIcon({
				url: "/logos/main_logo.png",
				scaledSize: new window.google.maps.Size(40, 40),
			});
		}
	}, []);

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
				{stores.map((store) => (
					<Marker
						key={store.name}
						position={{ lat: store.lat, lng: store.lng }}
						icon={markerIcon}
					/>
				))}
				{selectedStore && (
					<Circle
						center={{ lat: selectedStore.lat, lng: selectedStore.lng }}
						radius={100}
						options={{
							strokeColor: "#FF0000",
							strokeOpacity: 0.8,
							strokeWeight: 2,
							fillColor: "#FF0000",
							fillOpacity: 0.35,
						}}
					/>
				)}
			</GoogleMap>
		</LoadScript>
	);
};

export default MapComponent;
