// import React from 'react';
// import { Box } from '@mui/material';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// // IMPORTANT: Leaflet absolutely requires this CSS to display the map correctly!
// import 'leaflet/dist/leaflet.css';

// export default function MapSection() {
//   // Coordinates for the center of the map (e.g., New York/Delaware area)
//   const mapCenter = [40.7128, -74.0060];

//   return (
//     // The Box wrapper controls the map's height and keeps it behind your dropdown menus
//     <Box sx={{ width: '100%', height: '400px', position: 'relative', zIndex: 1 }}>
      
//       <MapContainer 
//         center={mapCenter} 
//         zoom={10} 
//         style={{ width: '100%', height: '100%' }}
//         scrollWheelZoom={false}
//       >
//         {/* This TileLayer loads the actual visual map from OpenStreetMap */}
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />
        
//         {/* Example Marker 1 */}
//         <Marker position={[40.7128, -74.0060]}>
//           <Popup>Project Location 1</Popup>
//         </Marker>

//         {/* Example Marker 2 */}
//         <Marker position={[40.7300, -73.9900]}>
//           <Popup>Project Location 2</Popup>
//         </Marker>

//       </MapContainer>
//     </Box>
//   );
// }