"use client";

function page() {
    return (
        <div className=' w-full min-h-screen'>
            <Quote />
        </div>
    )
}
export default page


import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Footer from '@/components/Footer';
import Header from './components/Header';

interface Location {
    lat: number;
    lng: number;
}

function Quote() {
    const [scrollY, setScrollY] = useState(0);
    const [nearestLocation, setNearestLocation] = useState<Location | null>(null);
    const [isMapsLoaded, setIsMapsLoaded] = useState(false); // State to track if Google Maps API has loaded

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const rotation = scrollY * 0.1;

    const locations: Location[] = [
        { lat: 35.503120, lng: -97.565740 },
        { lat: 35.552740, lng: -97.626120 },
        { lat: 35.636810, lng: -97.565740 }
    ];

    const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

    const handleFindNearestClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const userLat = position.coords.latitude;
                const userLng = position.coords.longitude;

                let minDistance = Infinity;
                let nearest: Location | null = null;
                locations.forEach(location => {
                    const distance = Math.sqrt(Math.pow(location.lat - userLat, 2) + Math.pow(location.lng - userLng, 2));
                    if (distance < minDistance) {
                        minDistance = distance;
                        nearest = location;
                    }
                });

                setNearestLocation(nearest);

                if (nearest) {
                    const nearestLocation: Location = nearest;
                    const directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${nearestLocation.lat},${nearestLocation.lng}`;

                    window.open(directionsUrl, '_blank');
                }

            }, error => {
                console.error(error);
            });
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    };

    const mapStyles = [
        {
            "featureType": "all",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#f2f2f2"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#686868"
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#f2f2f2"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 45
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "lightness": "-22"
                },
                {
                    "visibility": "on"
                },
                {
                    "color": "#b4b4b4"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "saturation": "-51"
                },
                {
                    "lightness": "11"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text",
            "stylers": [
                {
                    "saturation": "3"
                },
                {
                    "lightness": "-56"
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "lightness": "-52"
                },
                {
                    "color": "#9094a0"
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "weight": "6.13"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "weight": "1.24"
                },
                {
                    "saturation": "-100"
                },
                {
                    "lightness": "-10"
                },
                {
                    "gamma": "0.94"
                },
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#b4b4b4"
                },
                {
                    "weight": "5.40"
                },
                {
                    "lightness": "7"
                }
            ]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "simplified"
                },
                {
                    "color": "#231f1f"
                }
            ]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "visibility": "simplified"
                },
                {
                    "color": "#595151"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "lightness": "-16"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#d7d7d7"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.text",
            "stylers": [
                {
                    "color": "#282626"
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "saturation": "-41"
                },
                {
                    "lightness": "-41"
                },
                {
                    "color": "#2a4592"
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "weight": "1.10"
                },
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "lightness": "-16"
                },
                {
                    "weight": "0.72"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "lightness": "-37"
                },
                {
                    "color": "#2a4592"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "off"
                },
                {
                    "color": "#eeed6a"
                }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "off"
                },
                {
                    "color": "#0a0808"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#b7e4f4"
                },
                {
                    "visibility": "on"
                }
            ]
        }
    ]

    return (
        <>
            <Header />
            <div className='w-full flex min-h-screen flex-col items-center md:pt-20 pt-10 md:px-20 px-10 bg-[#FFDB97] relative overflow-x-clip'>
                <h1 className='text-7xl font-extrabold shadow-outline text-white'>Our Stores</h1>
                <div className="group py-5 cursor-pointer mb-10" onClick={handleFindNearestClick}>
                    <span className="text-2xl font-extralight text-black">
                        Grab a bite from the nearest store now
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </span>
                </div>

                <div className=' flex flex-col justify-center w-full md:mb-20 items-center'>
                    <LoadScript
                        googleMapsApiKey={googleMapsApiKey}
                        onLoad={() => setIsMapsLoaded(true)} // Set isMapsLoaded to true when the script has loaded
                    >
                        <GoogleMap
                            mapContainerStyle={{ width: '100%', height: '900px' }}
                            zoom={10}
                            center={{ lat: 35.503120, lng: -97.565740 }}
                            options={{ styles: mapStyles }}
                        >
                            {isMapsLoaded && locations.map((location, index) => (
                                <Marker
                                    key={index}
                                    position={location}
                                    icon={{
                                        url: '/custom_marker.png',
                                        scaledSize: new window.google.maps.Size(45, 45) // This will not throw an error now
                                    }}
                                    onClick={() => {
                                        console.log(location);
                                    }}
                                />
                            ))}
                        </GoogleMap>
                    </LoadScript>

                    <img src='./bite1.png' alt='hemp' className='absolute hidden md:block top-6 -left-28 h-3/6' style={{ transform: `rotate(${rotation}deg)` }} />
                    <img src='./bite2.png' alt='hemp' className='absolute bottom-0 hidden md:block -right-20 h-2/6' style={{ transform: `rotate(${-rotation}deg)` }} />
                </div>

            </div>
            <Footer />
        </>
    );
}



