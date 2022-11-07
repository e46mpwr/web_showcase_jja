// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io

export function init(Constants) {
    Constants.AvatarNames = [
        "newwhite"
    ];

    Constants.UserBehaviorDirectory = "behaviors/default";
    Constants.UserBehaviorModules = [
        "lights.js", "urlLink.js", "video.js"
    ];

    const frameColor = 0x888888;
    Constants.UseRapier = true;

    Constants.DefaultCards = [
        {
            card: {
                name: "entrance",
                type: "object",
                // same position and orientation as in openPortal.js
                translation: [-12, -0.4, -10.2],
                rotation: [0, -Math.PI / 2, 0],
                spawn: "default",
            }
        },
        {
            card: {
                // This is the gallery building
                name:"world model",
                type: "3d",
                // Replace the filename and dataLocation to change the building model.
                fileName: "/artgallery_042122.glb.zip",
                dataLocation: "./assets/artgallery_042122.glb.zip",
                singleSided: true,
                shadow: true,
                layers: ["walk"],
                translation:[0, -1.7, 0],
                dataScale:[1,1,1],
                placeholder: true,
                placeholderSize: [400, 0.1, 400],
                placeholderColor: 0x808080,
                placeholderOffset: [0, 0, 0],
            }
        },
        {
            card: {
                // This is the sky background.
                name: "light",
                layers: ["light"],
                type: "lighting",
                behaviorModules: ["Light"],
                // Replace the fileName and datalocation to change the background.
                fileName: "/aboveClouds.jpg",
                dataLocation: "./assets/aboveClouds.jpg",
                dataType: "jpg",
            }
        },

        // Card locationson walls are identified as 1-7 starting directly left where you enter
        // then going clockwise around the room.
        {
            card: {
                // Location 1 - Directly left of where you enter
                name: "Croquet image card",
                translation: [-5, 0.6, -16.75],
                rotation: [0, 0, 0],
                scale: [4, 4, 4],
            }
        },
        {
            card: {
                // Location 2 - Far left of where you enter
                name: "Croquet image card",
                translation: [5.3, 0.6, -16.75],
                rotation: [0, 0, 0],
                scale: [4, 4, 4],
            }
        },
        {
            card: {
                // Location 3 - Directly across where you enter
                name: "Company Logo",
                translation: [12, 0.70, -10.24],
                scale: [4, 4, 4],
                rotation: [0, -Math.PI / 2, 0],
                type: "2d",
                textureType: "image",                
                // Change the image with the image you want to show
                textureLocation: "./myfiles/CompanyLogo.jpg",
                fullBright: true,
                frameColor: 0xcccccc,
                color: 0xbbbbbb,
                cornerRadius: 0.05,
                depth: 0.05,
                shadow: true,
            }
        },
        {
            card: {
                // Location 4 - Middle spot across where you enter
                name: "Company Brief",
                translation: [12, 0.6, 0.35],
                rotation: [0, -Math.PI / 2, 0],
                scale: [4, 4, 4],
                type: "2d",
                layers: ["pointer"],
                behaviorModules: ["PDFView"],
                color: 8947848,
                depth: 0.05,
                frameColor: 16777215,
                fullBright: true,
                modelType: "pdf",
                // Replace the filename with the PDF you want to show
                pdfLocation: "./myfiles/CompanyBrief.pdf",
                shadow: true,
                singleSided: true,

            }
        },
        {
            card: {
                // Location 5 - Far right spot across where you enter
                name: "Company Video",
                translation: [12, 0.60, 10.76],
                rotation: [0, -Math.PI / 2, 0],
                scale: [4, 4, 4],
                fullBright: true,
                type: "2d",
                textureWidth: 1280,
                textureHeight: 720,
                muted: false,
                textureType: "video",
                // Change the image with the image you want to show
                textureLocation: "./myfiles/CustomerVideo.mp4",
                // Change the link below to link to your website
                behaviorModules: ["VideoPlayer"],
                layers: ["pointer"],
                loop: true,
            }
        },

        {
            card: {
                // Video control stop
                name: "Video control stop",
                translation: [12, -0.9,10.16],
                rotation: [0, -Math.PI / 2, 0],
                scale: [0.5, 0.5, 0.5],
                fullBright: true,
                type: "2d",
                muted: false,
                textureType: "image",
                textureLocation: "./assets/video_stop.png",
                // Change the link below to link to your website
                behaviorModules: [],
                layers: ["pointer"],
                loop: true,
            }
        },

        {
            card: {
                // Video control play
                name: "Video control play",
                translation: [12, -0.9, 10.76],
                rotation: [0, -Math.PI / 2, 0],
                scale: [0.5, 0.5, 0.5],
                fullBright: true,
                type: "2d",
                muted: false,
                textureType: "image",
                textureLocation: "./assets/video_play.png",
                // Change the link below to link to your website
                behaviorModules: [],
                layers: ["pointer"],
                loop: true,
            }
        },

        {
            card: {
                // Video control pause
                name: "Video control pause",
                translation: [12, -0.9, 11.36],
                rotation: [0, -Math.PI / 2, 0],
                scale: [0.5, 0.5, 0.5],
                fullBright: true,
                type: "2d",
                muted: false,
                textureType: "image",
                textureLocation: "./assets/video_pause.png",
                // Change the link below to link to your website
                behaviorModules: [],
                layers: ["pointer"],
                loop: true,
            }
        },

        {
            card: {
                // Location 6 - Farthest spot on the right wall from where you enter
                name: "Customer Logos",
                translation: [5.3, 0.60, 17],
                rotation: [0, Math.PI, 0],
                scale: [4, 4, 4],
                type: "2d",
                textureType: "image",
                // Change the image with the image you want to show
                textureLocation: "./myfiles/CustomerLogos.png",
                // Change the link below to link to your website
                fullBright: true,
                frameColor: 0xcccccc,
                color: 0xbbbbbb,
                cornerRadius: 0.05,
                depth: 0.05,
                shadow: true,
            }
        },
        {
            card: {
                // Location 7 - Directly right on the wall where you enter
                name: "Call To Action",
                translation: [-5, 0.6, 17],
                behaviorModules: ["URLLink"],
                rotation: [0, Math.PI, 0],
                scale: [4, 4, 4],
                type: "2d",
                textureType: "image",
                // Change the image with the image you want to show
                textureLocation: "./myfiles/CallToAction.png",
                // Change the link below to link to your website
                cardURL: "https://www.jjaventuresearch.com/#popup-start1",
                cardHilite: 0xffffaa,
                behaviorModules: ["URLLink"],
                fullBright: true,
                frameColor: 0xcccccc,
                color: 0xbbbbbb,
                cornerRadius: 0.05,
                depth: 0.05,
                shadow: true,
            }
        },
    ];
}
