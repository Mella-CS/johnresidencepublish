(function(){
    var script = {
 "mouseWheelEnabled": true,
 "definitions": [{
 "gyroscopeEnabled": true,
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_acceleration"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_E2971283_E9F1_C950_41C8_5EF3FA240BE0_camera",
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_F4474396_EA12_CF70_41CB_E2783285F07E",
 "initialPosition": {
  "yaw": -172.66,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_F70262D1_EA12_CEF0_41AA_DA3A48E3465E",
 "initialPosition": {
  "yaw": 111.9,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 82.39,
   "backwardYaw": -62.93,
   "distance": 1,
   "panorama": "this.panorama_E2A54EA9_E9F2_7953_41E2_048321CB35DC",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 92.31,
   "backwardYaw": -68.1,
   "distance": 1,
   "panorama": "this.panorama_E296FD22_E9F1_DB50_41E8_504AF3DDA565",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 31.16,
   "backwardYaw": -109.83,
   "distance": 1,
   "panorama": "this.panorama_E2971283_E9F1_C950_41C8_5EF3FA240BE0",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "id": "panorama_E22B9140_E9F2_4BD0_41B3_A234294B752C",
 "thumbnailUrl": "media/panorama_E22B9140_E9F2_4BD0_41B3_A234294B752C_t.jpg",
 "label": "entrance x din",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E22B9140_E9F2_4BD0_41B3_A234294B752C_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E22B9140_E9F2_4BD0_41B3_A234294B752C_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E22B9140_E9F2_4BD0_41B3_A234294B752C_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E22B9140_E9F2_4BD0_41B3_A234294B752C_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E22B9140_E9F2_4BD0_41B3_A234294B752C_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E22B9140_E9F2_4BD0_41B3_A234294B752C_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E22B9140_E9F2_4BD0_41B3_A234294B752C_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E22B9140_E9F2_4BD0_41B3_A234294B752C_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E22B9140_E9F2_4BD0_41B3_A234294B752C_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_E22B9140_E9F2_4BD0_41B3_A234294B752C_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E22B9140_E9F2_4BD0_41B3_A234294B752C_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E22B9140_E9F2_4BD0_41B3_A234294B752C_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E22B9140_E9F2_4BD0_41B3_A234294B752C_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E22B9140_E9F2_4BD0_41B3_A234294B752C_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E22B9140_E9F2_4BD0_41B3_A234294B752C_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_E22B9140_E9F2_4BD0_41B3_A234294B752C_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E22B9140_E9F2_4BD0_41B3_A234294B752C_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E22B9140_E9F2_4BD0_41B3_A234294B752C_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E22B9140_E9F2_4BD0_41B3_A234294B752C_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_F9F5310D_EA36_4B50_41E2_C2CF4AEBFEBB",
  "this.overlay_FE5E8E4F_EA36_79D0_41D0_BA6142898AED",
  "this.overlay_FE4DBF37_EA36_77B0_41B4_DE0161CB567C"
 ]
},
{
 "items": [
  {
   "media": "this.panorama_E296FD22_E9F1_DB50_41E8_504AF3DDA565",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "camera": "this.panorama_E296FD22_E9F1_DB50_41E8_504AF3DDA565_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_E2A54EA9_E9F2_7953_41E2_048321CB35DC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "camera": "this.panorama_E2A54EA9_E9F2_7953_41E2_048321CB35DC_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_E22B9140_E9F2_4BD0_41B3_A234294B752C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "camera": "this.panorama_E22B9140_E9F2_4BD0_41B3_A234294B752C_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_E2968961_E9F2_5BD0_41EC_172CA70D52AD",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "camera": "this.panorama_E2968961_E9F2_5BD0_41EC_172CA70D52AD_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_E2918625_E9F2_4950_41EB_1CC00719CC0B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "camera": "this.panorama_E2918625_E9F2_4950_41EB_1CC00719CC0B_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_E2971283_E9F1_C950_41C8_5EF3FA240BE0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "camera": "this.panorama_E2971283_E9F1_C950_41C8_5EF3FA240BE0_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_E2AC6764_E9F1_F7D0_41E4_33B2CE782BDD",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 0)",
   "camera": "this.panorama_E2AC6764_E9F1_F7D0_41E4_33B2CE782BDD_camera",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_F7D45320_EA12_CF50_41DC_7DE5D3133820",
 "initialPosition": {
  "yaw": 31.16,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 }
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E2918625_E9F2_4950_41EB_1CC00719CC0B",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 85.86,
   "backwardYaw": -57.68,
   "distance": 1,
   "panorama": "this.panorama_E296FD22_E9F1_DB50_41E8_504AF3DDA565",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -62.93,
   "backwardYaw": 82.39,
   "distance": 1,
   "panorama": "this.panorama_E22B9140_E9F2_4BD0_41B3_A234294B752C",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "id": "panorama_E2A54EA9_E9F2_7953_41E2_048321CB35DC",
 "thumbnailUrl": "media/panorama_E2A54EA9_E9F2_7953_41E2_048321CB35DC_t.jpg",
 "label": "entrance 2",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E2A54EA9_E9F2_7953_41E2_048321CB35DC_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2A54EA9_E9F2_7953_41E2_048321CB35DC_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2A54EA9_E9F2_7953_41E2_048321CB35DC_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E2A54EA9_E9F2_7953_41E2_048321CB35DC_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2A54EA9_E9F2_7953_41E2_048321CB35DC_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2A54EA9_E9F2_7953_41E2_048321CB35DC_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E2A54EA9_E9F2_7953_41E2_048321CB35DC_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2A54EA9_E9F2_7953_41E2_048321CB35DC_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2A54EA9_E9F2_7953_41E2_048321CB35DC_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_E2A54EA9_E9F2_7953_41E2_048321CB35DC_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2A54EA9_E9F2_7953_41E2_048321CB35DC_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2A54EA9_E9F2_7953_41E2_048321CB35DC_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E2A54EA9_E9F2_7953_41E2_048321CB35DC_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2A54EA9_E9F2_7953_41E2_048321CB35DC_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2A54EA9_E9F2_7953_41E2_048321CB35DC_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_E2A54EA9_E9F2_7953_41E2_048321CB35DC_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2A54EA9_E9F2_7953_41E2_048321CB35DC_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2A54EA9_E9F2_7953_41E2_048321CB35DC_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E2A54EA9_E9F2_7953_41E2_048321CB35DC_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_F8A82143_EA36_4BD1_41C0_AC7F9CC39223",
  "this.overlay_F922AB80_EA36_FF50_41A2_2D3FB27EE6FA",
  "this.overlay_F9C24FE7_EA36_F6D0_41E4_61C861090B63"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_F72122AF_EA12_C950_41CB_D140EAFD8243",
 "initialPosition": {
  "yaw": -170.58,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_F7F33300_EA12_CF50_41D5_40BFB541383A",
 "initialPosition": {
  "yaw": -100.74,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_F478E383_EA12_CF51_41B7_1DD8A43ACD80",
 "initialPosition": {
  "yaw": -127.66,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 }
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_FBA81A9F_EA72_5970_41D2_B1C2C7FF0905.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_FBA81A9F_EA72_5970_41D2_B1C2C7FF0905.ogg"
 },
 "class": "MediaAudio",
 "id": "audio_FBA81A9F_EA72_5970_41D2_B1C2C7FF0905",
 "data": {
  "label": "abassel"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -57.68,
   "backwardYaw": 85.86,
   "distance": 1,
   "panorama": "this.panorama_E2A54EA9_E9F2_7953_41E2_048321CB35DC",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -68.1,
   "backwardYaw": 92.31,
   "distance": 1,
   "panorama": "this.panorama_E22B9140_E9F2_4BD0_41B3_A234294B752C",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 0.37,
   "backwardYaw": -1.64,
   "distance": 1,
   "panorama": "this.panorama_E2AC6764_E9F1_F7D0_41E4_33B2CE782BDD",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "id": "panorama_E296FD22_E9F1_DB50_41E8_504AF3DDA565",
 "thumbnailUrl": "media/panorama_E296FD22_E9F1_DB50_41E8_504AF3DDA565_t.jpg",
 "label": "entrance",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E296FD22_E9F1_DB50_41E8_504AF3DDA565_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E296FD22_E9F1_DB50_41E8_504AF3DDA565_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E296FD22_E9F1_DB50_41E8_504AF3DDA565_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E296FD22_E9F1_DB50_41E8_504AF3DDA565_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E296FD22_E9F1_DB50_41E8_504AF3DDA565_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E296FD22_E9F1_DB50_41E8_504AF3DDA565_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E296FD22_E9F1_DB50_41E8_504AF3DDA565_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E296FD22_E9F1_DB50_41E8_504AF3DDA565_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E296FD22_E9F1_DB50_41E8_504AF3DDA565_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_E296FD22_E9F1_DB50_41E8_504AF3DDA565_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E296FD22_E9F1_DB50_41E8_504AF3DDA565_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E296FD22_E9F1_DB50_41E8_504AF3DDA565_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E296FD22_E9F1_DB50_41E8_504AF3DDA565_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E296FD22_E9F1_DB50_41E8_504AF3DDA565_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E296FD22_E9F1_DB50_41E8_504AF3DDA565_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_E296FD22_E9F1_DB50_41E8_504AF3DDA565_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E296FD22_E9F1_DB50_41E8_504AF3DDA565_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E296FD22_E9F1_DB50_41E8_504AF3DDA565_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E296FD22_E9F1_DB50_41E8_504AF3DDA565_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_FBF93654_EA76_C9F0_41B1_5309A1678E0A",
  "this.overlay_F877B072_EA36_C9B0_41D0_300BAB31D90A",
  "this.overlay_F941B78A_EA36_B750_41E2_22EACBD4C399"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_F4664374_EA12_CFB0_41C0_46A1C134183A",
 "initialPosition": {
  "yaw": -148.84,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_F71202E1_EA12_CED0_41E2_CAE5C66CE987",
 "initialPosition": {
  "yaw": 70.17,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_F7850353_EA12_CFF0_41E3_EF740A5CAE17",
 "initialPosition": {
  "yaw": 178.36,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_F74F5280_EA12_C94F_41E0_48D65A4DFCC0",
 "initialPosition": {
  "yaw": 122.32,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_F7B55344_EA12_CFD0_41E2_BA5DAC0F3182",
 "initialPosition": {
  "yaw": -87.69,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 7.34,
   "backwardYaw": -59.95,
   "distance": 1,
   "panorama": "this.panorama_E2971283_E9F1_C950_41C8_5EF3FA240BE0",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 9.42,
   "backwardYaw": -148.84,
   "distance": 1,
   "panorama": "this.panorama_E2918625_E9F2_4950_41EB_1CC00719CC0B",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "id": "panorama_E2968961_E9F2_5BD0_41EC_172CA70D52AD",
 "thumbnailUrl": "media/panorama_E2968961_E9F2_5BD0_41EC_172CA70D52AD_t.jpg",
 "label": "kitchen",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E2968961_E9F2_5BD0_41EC_172CA70D52AD_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2968961_E9F2_5BD0_41EC_172CA70D52AD_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2968961_E9F2_5BD0_41EC_172CA70D52AD_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E2968961_E9F2_5BD0_41EC_172CA70D52AD_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2968961_E9F2_5BD0_41EC_172CA70D52AD_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2968961_E9F2_5BD0_41EC_172CA70D52AD_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E2968961_E9F2_5BD0_41EC_172CA70D52AD_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2968961_E9F2_5BD0_41EC_172CA70D52AD_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2968961_E9F2_5BD0_41EC_172CA70D52AD_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_E2968961_E9F2_5BD0_41EC_172CA70D52AD_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2968961_E9F2_5BD0_41EC_172CA70D52AD_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2968961_E9F2_5BD0_41EC_172CA70D52AD_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E2968961_E9F2_5BD0_41EC_172CA70D52AD_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2968961_E9F2_5BD0_41EC_172CA70D52AD_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2968961_E9F2_5BD0_41EC_172CA70D52AD_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_E2968961_E9F2_5BD0_41EC_172CA70D52AD_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2968961_E9F2_5BD0_41EC_172CA70D52AD_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2968961_E9F2_5BD0_41EC_172CA70D52AD_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E2968961_E9F2_5BD0_41EC_172CA70D52AD_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_FF55B2DE_EA0E_4EF0_41D0_BE89165A90A5",
  "this.overlay_FFDFB1F8_EA0E_4AB0_41EB_47879A16B156"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": -1.64,
   "backwardYaw": 0.37,
   "distance": 1,
   "panorama": "this.panorama_E296FD22_E9F1_DB50_41E8_504AF3DDA565",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E22B9140_E9F2_4BD0_41B3_A234294B752C",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 52.34,
   "backwardYaw": 79.26,
   "distance": 1,
   "panorama": "this.panorama_E2971283_E9F1_C950_41C8_5EF3FA240BE0",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "id": "panorama_E2AC6764_E9F1_F7D0_41E4_33B2CE782BDD",
 "thumbnailUrl": "media/panorama_E2AC6764_E9F1_F7D0_41E4_33B2CE782BDD_t.jpg",
 "label": "living room",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E2AC6764_E9F1_F7D0_41E4_33B2CE782BDD_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2AC6764_E9F1_F7D0_41E4_33B2CE782BDD_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2AC6764_E9F1_F7D0_41E4_33B2CE782BDD_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E2AC6764_E9F1_F7D0_41E4_33B2CE782BDD_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2AC6764_E9F1_F7D0_41E4_33B2CE782BDD_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2AC6764_E9F1_F7D0_41E4_33B2CE782BDD_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E2AC6764_E9F1_F7D0_41E4_33B2CE782BDD_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2AC6764_E9F1_F7D0_41E4_33B2CE782BDD_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2AC6764_E9F1_F7D0_41E4_33B2CE782BDD_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_E2AC6764_E9F1_F7D0_41E4_33B2CE782BDD_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2AC6764_E9F1_F7D0_41E4_33B2CE782BDD_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2AC6764_E9F1_F7D0_41E4_33B2CE782BDD_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E2AC6764_E9F1_F7D0_41E4_33B2CE782BDD_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2AC6764_E9F1_F7D0_41E4_33B2CE782BDD_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2AC6764_E9F1_F7D0_41E4_33B2CE782BDD_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_E2AC6764_E9F1_F7D0_41E4_33B2CE782BDD_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2AC6764_E9F1_F7D0_41E4_33B2CE782BDD_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2AC6764_E9F1_F7D0_41E4_33B2CE782BDD_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E2AC6764_E9F1_F7D0_41E4_33B2CE782BDD_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_FF21A0C9_EA16_CAD0_41ED_17C17374FF2F",
  "this.overlay_FF3502F0_EA16_CEB0_41BC_128B6CD514BC",
  "this.overlay_FC32AFD4_EA16_76F0_41EC_F1BA41FC6999"
 ]
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E22B9140_E9F2_4BD0_41B3_A234294B752C",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 43.95,
   "backwardYaw": -55.79,
   "distance": 1,
   "panorama": "this.panorama_E2971283_E9F1_C950_41C8_5EF3FA240BE0",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -148.84,
   "backwardYaw": 9.42,
   "distance": 1,
   "panorama": "this.panorama_E2968961_E9F2_5BD0_41EC_172CA70D52AD",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "id": "panorama_E2918625_E9F2_4950_41EB_1CC00719CC0B",
 "thumbnailUrl": "media/panorama_E2918625_E9F2_4950_41EB_1CC00719CC0B_t.jpg",
 "label": "kitchen x dining",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E2918625_E9F2_4950_41EB_1CC00719CC0B_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2918625_E9F2_4950_41EB_1CC00719CC0B_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2918625_E9F2_4950_41EB_1CC00719CC0B_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E2918625_E9F2_4950_41EB_1CC00719CC0B_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2918625_E9F2_4950_41EB_1CC00719CC0B_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2918625_E9F2_4950_41EB_1CC00719CC0B_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E2918625_E9F2_4950_41EB_1CC00719CC0B_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2918625_E9F2_4950_41EB_1CC00719CC0B_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2918625_E9F2_4950_41EB_1CC00719CC0B_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_E2918625_E9F2_4950_41EB_1CC00719CC0B_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2918625_E9F2_4950_41EB_1CC00719CC0B_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2918625_E9F2_4950_41EB_1CC00719CC0B_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E2918625_E9F2_4950_41EB_1CC00719CC0B_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2918625_E9F2_4950_41EB_1CC00719CC0B_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2918625_E9F2_4950_41EB_1CC00719CC0B_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_E2918625_E9F2_4950_41EB_1CC00719CC0B_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2918625_E9F2_4950_41EB_1CC00719CC0B_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2918625_E9F2_4950_41EB_1CC00719CC0B_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E2918625_E9F2_4950_41EB_1CC00719CC0B_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_FE18DBFC_EA0F_FEB0_41E8_66D4808C0CCE",
  "this.overlay_FE897CDD_EA0E_5AF0_41DD_1440A5258962",
  "this.overlay_FF2A44FC_EA0E_4AB0_41E5_BC758F85C530"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_F73242C1_EA12_CED1_41E2_7CDA27708A89",
 "initialPosition": {
  "yaw": 117.07,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_F7C5A30F_EA12_CF50_41E8_C28AA3D02FE0",
 "initialPosition": {
  "yaw": 120.05,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_E2AC6764_E9F1_F7D0_41E4_33B2CE782BDD_camera",
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 }
},
{
 "items": [
  {
   "media": "this.panorama_E296FD22_E9F1_DB50_41E8_504AF3DDA565",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "camera": "this.panorama_E296FD22_E9F1_DB50_41E8_504AF3DDA565_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_E2A54EA9_E9F2_7953_41E2_048321CB35DC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "camera": "this.panorama_E2A54EA9_E9F2_7953_41E2_048321CB35DC_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_E22B9140_E9F2_4BD0_41B3_A234294B752C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "camera": "this.panorama_E22B9140_E9F2_4BD0_41B3_A234294B752C_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_E2968961_E9F2_5BD0_41EC_172CA70D52AD",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "camera": "this.panorama_E2968961_E9F2_5BD0_41EC_172CA70D52AD_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_E2918625_E9F2_4950_41EB_1CC00719CC0B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "camera": "this.panorama_E2918625_E9F2_4950_41EB_1CC00719CC0B_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_E2971283_E9F1_C950_41C8_5EF3FA240BE0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "camera": "this.panorama_E2971283_E9F1_C950_41C8_5EF3FA240BE0_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_E2AC6764_E9F1_F7D0_41E4_33B2CE782BDD",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 0)",
   "camera": "this.panorama_E2AC6764_E9F1_F7D0_41E4_33B2CE782BDD_camera",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "displayOriginPosition": {
  "hfov": 165,
  "yaw": 0,
  "stereographicFactor": 1,
  "pitch": -90,
  "class": "RotationalCameraDisplayPosition"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_E296FD22_E9F1_DB50_41E8_504AF3DDA565_camera",
 "displayMovements": [
  {
   "easing": "linear",
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement"
  },
  {
   "targetPitch": 0,
   "easing": "cubic_in_out",
   "targetStereographicFactor": 0,
   "duration": 3000,
   "class": "TargetRotationalCameraDisplayMovement"
  }
 ],
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_E2968961_E9F2_5BD0_41EC_172CA70D52AD_camera",
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_F7E342F0_EA12_CEB0_41C8_1C8AA89448CD",
 "initialPosition": {
  "yaw": -179.63,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_E2918625_E9F2_4950_41EB_1CC00719CC0B_camera",
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_F797F363_EA12_CFD0_41D8_BEFA7815DE28",
 "initialPosition": {
  "yaw": -136.05,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_E22B9140_E9F2_4BD0_41B3_A234294B752C_camera",
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -55.79,
   "backwardYaw": 43.95,
   "distance": 1,
   "panorama": "this.panorama_E2918625_E9F2_4950_41EB_1CC00719CC0B",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -109.83,
   "backwardYaw": 31.16,
   "distance": 1,
   "panorama": "this.panorama_E22B9140_E9F2_4BD0_41B3_A234294B752C",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 79.26,
   "backwardYaw": 52.34,
   "distance": 1,
   "panorama": "this.panorama_E2AC6764_E9F1_F7D0_41E4_33B2CE782BDD",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -59.95,
   "backwardYaw": 7.34,
   "distance": 1,
   "panorama": "this.panorama_E2968961_E9F2_5BD0_41EC_172CA70D52AD",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "id": "panorama_E2971283_E9F1_C950_41C8_5EF3FA240BE0",
 "thumbnailUrl": "media/panorama_E2971283_E9F1_C950_41C8_5EF3FA240BE0_t.jpg",
 "label": "dining room",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E2971283_E9F1_C950_41C8_5EF3FA240BE0_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2971283_E9F1_C950_41C8_5EF3FA240BE0_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2971283_E9F1_C950_41C8_5EF3FA240BE0_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E2971283_E9F1_C950_41C8_5EF3FA240BE0_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2971283_E9F1_C950_41C8_5EF3FA240BE0_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2971283_E9F1_C950_41C8_5EF3FA240BE0_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E2971283_E9F1_C950_41C8_5EF3FA240BE0_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2971283_E9F1_C950_41C8_5EF3FA240BE0_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2971283_E9F1_C950_41C8_5EF3FA240BE0_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_E2971283_E9F1_C950_41C8_5EF3FA240BE0_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2971283_E9F1_C950_41C8_5EF3FA240BE0_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2971283_E9F1_C950_41C8_5EF3FA240BE0_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E2971283_E9F1_C950_41C8_5EF3FA240BE0_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2971283_E9F1_C950_41C8_5EF3FA240BE0_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2971283_E9F1_C950_41C8_5EF3FA240BE0_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_E2971283_E9F1_C950_41C8_5EF3FA240BE0_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E2971283_E9F1_C950_41C8_5EF3FA240BE0_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E2971283_E9F1_C950_41C8_5EF3FA240BE0_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E2971283_E9F1_C950_41C8_5EF3FA240BE0_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_FF72F83D_EA12_79B0_41E4_38BDEE7EAE59",
  "this.overlay_FFE7E2FE_EA13_CEB0_41E6_52D3EE719BC4",
  "this.overlay_FFC47C7E_EA13_D9B0_41AD_4C186D63644C",
  "this.overlay_FFDDEE1D_EA13_D970_41D9_2D80D97F6205"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_F740E28F_EA12_C950_41EA_6D0E214978E2",
 "initialPosition": {
  "yaw": -97.61,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_F751E29F_EA12_C970_41DF_800F32C267C0",
 "initialPosition": {
  "yaw": 124.21,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_E2A54EA9_E9F2_7953_41E2_048321CB35DC_camera",
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_F7A6B334_EA12_CFB0_41CC_4952A3C21C53",
 "initialPosition": {
  "yaw": -94.14,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 }
},
{
 "progressBarBorderColor": "#0066FF",
 "data": {
  "name": "Main Viewer"
 },
 "minWidth": 100,
 "id": "MainViewer",
 "left": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 0.5,
 "toolTipFontSize": 13,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 7,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "height": "100%",
 "toolTipShadowColor": "#333333",
 "paddingRight": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "progressLeft": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "top": 0,
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "class": "ViewerArea",
 "minHeight": 50,
 "paddingTop": 0,
 "toolTipBorderRadius": 3,
 "playbackBarLeft": 0,
 "paddingLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingBottom": 0,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "transitionDuration": 500,
 "playbackBarHeadHeight": 15
},
{
 "propagateClick": true,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_22BB12F4_3075_D173_4184_EC3BC4955417",
 "left": 70,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "width": 550,
 "children": [
  "this.Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
  "this.Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
  "this.Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "shadow": false,
 "top": 34,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": 98,
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "visible": false,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "overflow": "visible",
 "data": {
  "name": "--STICKER"
 }
},
{
 "transparencyActive": true,
 "propagateClick": true,
 "minWidth": 1,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "horizontalAlign": "center",
 "right": "1.27%",
 "width": 58,
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "bottom": "2.51%",
 "maxWidth": 58,
 "mode": "push",
 "height": 58,
 "maxHeight": 58,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "IconButton",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "data": {
  "name": "IconButton VR"
 }
},
{
 "propagateClick": true,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "right": "0%",
 "width": 115.05,
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "top": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": 641,
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "data": {
  "name": "-- SETTINGS"
 }
},
{
 "propagateClick": false,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
 "left": "0%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "width": 330,
 "children": [
  "this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
  "this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "shadow": false,
 "top": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": "100%",
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "visible": false,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "data": {
  "name": "--- LEFT PANEL 4 (Community)"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "creationPolicy": "inAdvance",
 "shadow": false,
 "top": "0%",
 "bottom": "0%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "scrollBarMargin": 2,
 "gap": 10,
 "paddingRight": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0.6,
 "paddingTop": 0,
 "borderRadius": 0,
 "visible": false,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "data": {
  "name": "--INFO photo"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "creationPolicy": "inAdvance",
 "shadow": false,
 "top": "0%",
 "bottom": "0%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "scrollBarMargin": 2,
 "gap": 10,
 "paddingRight": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0.6,
 "paddingTop": 0,
 "borderRadius": 0,
 "visible": false,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "data": {
  "name": "--PANORAMA LIST"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "creationPolicy": "inAdvance",
 "shadow": false,
 "top": "0%",
 "bottom": "0%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "scrollBarMargin": 2,
 "gap": 10,
 "paddingRight": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0.6,
 "paddingTop": 0,
 "borderRadius": 0,
 "visible": false,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "data": {
  "name": "--LOCATION"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "creationPolicy": "inAdvance",
 "shadow": false,
 "top": "0%",
 "bottom": "0%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "scrollBarMargin": 2,
 "gap": 10,
 "paddingRight": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0.6,
 "paddingTop": 0,
 "borderRadius": 0,
 "visible": false,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "data": {
  "name": "--FLOORPLAN"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "creationPolicy": "inAdvance",
 "shadow": false,
 "top": "0%",
 "bottom": "0%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "scrollBarMargin": 2,
 "gap": 10,
 "paddingRight": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0.6,
 "paddingTop": 0,
 "borderRadius": 0,
 "visible": false,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "data": {
  "name": "--PHOTOALBUM"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9",
 "left": "0%",
 "propagateClick": true,
 "scrollBarColor": "#04A3E1",
 "horizontalAlign": "left",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
  "this.Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "creationPolicy": "inAdvance",
 "shadow": false,
 "top": "0%",
 "bottom": "0%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "scrollBarMargin": 2,
 "gap": 10,
 "paddingRight": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0.6,
 "paddingTop": 0,
 "borderRadius": 0,
 "visible": false,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "data": {
  "name": "--REALTOR"
 }
},
{
 "propagateClick": true,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_50E57579_424B_1CC1_41C7_2A7D7DE232E6",
 "left": "0%",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container7538"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_50F91F27_424B_0C40_41C3_4AC948480017",
  "this.Container_546964AC_4259_1C47_41B4_89BC8EEE450A"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "verticalAlign": "top",
 "width": "5.247%",
 "bottom": "3.14%",
 "contentOpaque": false,
 "height": "43.457%",
 "scrollBarMargin": 2,
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll"
},
{
 "propagateClick": true,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_58B883FD_4396_7C5F_41B3_61F626F14414",
 "left": "7.24%",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container4248"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_4DF6648C_43C9_009F_41B4_06D470FF1669",
  "this.Container_4D37021E_43C9_03B8_41CC_28E8F98A7511"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "verticalAlign": "top",
 "width": "76.357%",
 "bottom": "3.04%",
 "contentOpaque": false,
 "height": "76.859%",
 "scrollBarMargin": 2,
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll"
},
{
 "transparencyActive": true,
 "propagateClick": true,
 "minWidth": 1,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "horizontalAlign": "center",
 "width": 58,
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "maxWidth": 58,
 "mode": "toggle",
 "height": 58,
 "maxHeight": 58,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "IconButton",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "data": {
  "name": "IconButton FULLSCREEN"
 }
},
{
 "transparencyActive": true,
 "propagateClick": true,
 "minWidth": 1,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "horizontalAlign": "center",
 "width": 58,
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "maxWidth": 58,
 "mode": "toggle",
 "height": 58,
 "maxHeight": 58,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "IconButton",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "data": {
  "name": "IconButton MUTE"
 }
},
{
 "transparencyActive": true,
 "propagateClick": true,
 "minWidth": 1,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "horizontalAlign": "center",
 "width": 58,
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "maxWidth": 58,
 "mode": "toggle",
 "height": 58,
 "maxHeight": 58,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "IconButton",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "data": {
  "name": "IconButton HS "
 }
},
{
 "transparencyActive": true,
 "propagateClick": true,
 "minWidth": 1,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "horizontalAlign": "center",
 "width": 58,
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "maxWidth": 58,
 "mode": "toggle",
 "height": 58,
 "maxHeight": 58,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "IconButton",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "data": {
  "name": "IconButton GYRO"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E2971283_E9F1_C950_41C8_5EF3FA240BE0, this.camera_F71202E1_EA12_CED0_41E2_CAE5C66CE987); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.18,
   "image": "this.AnimatedImageResource_F69C7FEF_EA11_D6D0_41D5_3BA5AB02FFC5",
   "pitch": -24.8,
   "yaw": 31.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F9F5310D_EA36_4B50_41E2_C2CF4AEBFEBB",
 "maps": [
  {
   "hfov": 2.18,
   "yaw": 31.16,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E22B9140_E9F2_4BD0_41B3_A234294B752C_1_HS_0_0_0_map.gif",
      "width": 72,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.8,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E296FD22_E9F1_DB50_41E8_504AF3DDA565, this.camera_F70262D1_EA12_CEF0_41AA_DA3A48E3465E); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.33,
   "image": "this.AnimatedImageResource_F69C1FF0_EA11_D6B0_41E7_3944A99217B7",
   "pitch": -13.24,
   "yaw": 92.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FE5E8E4F_EA36_79D0_41D0_BA6142898AED",
 "maps": [
  {
   "hfov": 2.33,
   "yaw": 92.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E22B9140_E9F2_4BD0_41B3_A234294B752C_1_HS_1_0_0_map.gif",
      "width": 72,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.24,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E2A54EA9_E9F2_7953_41E2_048321CB35DC, this.camera_F73242C1_EA12_CED1_41E2_7CDA27708A89); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.16,
   "image": "this.AnimatedImageResource_F693CFF1_EA11_D6B0_41E2_D6B939DA5D3B",
   "pitch": -25.74,
   "yaw": 82.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FE4DBF37_EA36_77B0_41B4_DE0161CB567C",
 "maps": [
  {
   "hfov": 2.16,
   "yaw": 82.39,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E22B9140_E9F2_4BD0_41B3_A234294B752C_1_HS_2_0_0_map.gif",
      "width": 72,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.74,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E296FD22_E9F1_DB50_41E8_504AF3DDA565, this.camera_F74F5280_EA12_C94F_41E0_48D65A4DFCC0); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.2,
   "image": "this.AnimatedImageResource_F69D7FED_EA11_D6D0_41C4_F59832B1010C",
   "pitch": -23.41,
   "yaw": 85.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F8A82143_EA36_4BD1_41C0_AC7F9CC39223",
 "maps": [
  {
   "hfov": 2.2,
   "yaw": 85.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E2A54EA9_E9F2_7953_41E2_048321CB35DC_1_HS_0_0_0_map.gif",
      "width": 72,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.41,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.34,
   "image": "this.AnimatedImageResource_F69D1FEE_EA11_D6D0_41D7_F49EA14D877E",
   "pitch": -12.67,
   "yaw": -50.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F922AB80_EA36_FF50_41A2_2D3FB27EE6FA",
 "maps": [
  {
   "hfov": 2.34,
   "yaw": -50.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E2A54EA9_E9F2_7953_41E2_048321CB35DC_1_HS_1_0_0_map.gif",
      "width": 72,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.67,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E22B9140_E9F2_4BD0_41B3_A234294B752C, this.camera_F740E28F_EA12_C950_41EA_6D0E214978E2); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.19,
   "image": "this.AnimatedImageResource_F69CBFEE_EA11_D6D0_416B_714ABB341C9E",
   "pitch": -23.86,
   "yaw": -62.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F9C24FE7_EA36_F6D0_41E4_61C861090B63",
 "maps": [
  {
   "hfov": 2.19,
   "yaw": -62.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E2A54EA9_E9F2_7953_41E2_048321CB35DC_1_HS_2_0_0_map.gif",
      "width": 72,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.86,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E2AC6764_E9F1_F7D0_41E4_33B2CE782BDD, this.camera_F7850353_EA12_CFF0_41E3_EF740A5CAE17); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.37,
   "image": "this.AnimatedImageResource_F69EDFEB_EA11_D6D0_41E5_8475592472C1",
   "pitch": -7.84,
   "yaw": 0.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FBF93654_EA76_C9F0_41B1_5309A1678E0A",
 "maps": [
  {
   "hfov": 2.37,
   "yaw": 0.37,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E296FD22_E9F1_DB50_41E8_504AF3DDA565_1_HS_0_0_0_map.gif",
      "width": 72,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.84,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E2A54EA9_E9F2_7953_41E2_048321CB35DC, this.camera_F7A6B334_EA12_CFB0_41CC_4952A3C21C53); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.31,
   "image": "this.AnimatedImageResource_FDCC16CB_EA31_B6D0_41AB_1DA29D543CF8",
   "pitch": -15.05,
   "yaw": -57.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F877B072_EA36_C9B0_41D0_300BAB31D90A",
 "maps": [
  {
   "hfov": 2.31,
   "yaw": -57.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E296FD22_E9F1_DB50_41E8_504AF3DDA565_0_HS_1_0_0_map.gif",
      "width": 72,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.05,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E22B9140_E9F2_4BD0_41B3_A234294B752C, this.camera_F7B55344_EA12_CFD0_41E2_BA5DAC0F3182); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.37,
   "image": "this.AnimatedImageResource_FDCBC6CB_EA31_B6D0_41C9_922E8B271143",
   "pitch": -9.2,
   "yaw": -68.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F941B78A_EA36_B750_41E2_22EACBD4C399",
 "maps": [
  {
   "hfov": 2.37,
   "yaw": -68.1,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E296FD22_E9F1_DB50_41E8_504AF3DDA565_0_HS_2_0_0_map.gif",
      "width": 72,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.2,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E2918625_E9F2_4950_41EB_1CC00719CC0B, this.camera_F7D45320_EA12_CF50_41DC_7DE5D3133820); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.2,
   "image": "this.AnimatedImageResource_F6936FF2_EA11_D6B0_41E0_FAE7D9F96F30",
   "pitch": -23.16,
   "yaw": 9.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FF55B2DE_EA0E_4EF0_41D0_BE89165A90A5",
 "maps": [
  {
   "hfov": 2.2,
   "yaw": 9.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E2968961_E9F2_5BD0_41EC_172CA70D52AD_1_HS_0_0_0_map.gif",
      "width": 72,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.16,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E2971283_E9F1_C950_41C8_5EF3FA240BE0, this.camera_F7C5A30F_EA12_CF50_41E8_C28AA3D02FE0); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.34,
   "image": "this.AnimatedImageResource_F6932FF2_EA11_D6B0_41DA_17F6B27A7149",
   "pitch": -12.31,
   "yaw": 7.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FFDFB1F8_EA0E_4AB0_41EB_47879A16B156",
 "maps": [
  {
   "hfov": 2.34,
   "yaw": 7.34,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E2968961_E9F2_5BD0_41EC_172CA70D52AD_1_HS_1_0_0_map.gif",
      "width": 72,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.31,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E2971283_E9F1_C950_41C8_5EF3FA240BE0, this.camera_F7F33300_EA12_CF50_41D5_40BFB541383A); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.35,
   "image": "this.AnimatedImageResource_F690BFF8_EA11_D6B0_41D0_489B2AC1F521",
   "pitch": -10.7,
   "yaw": 52.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FF21A0C9_EA16_CAD0_41ED_17C17374FF2F",
 "maps": [
  {
   "hfov": 2.35,
   "yaw": 52.34,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E2AC6764_E9F1_F7D0_41E4_33B2CE782BDD_1_HS_0_0_0_map.gif",
      "width": 72,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.7,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E296FD22_E9F1_DB50_41E8_504AF3DDA565, this.camera_F7E342F0_EA12_CEB0_41C8_1C8AA89448CD); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.34,
   "image": "this.AnimatedImageResource_F6905FF9_EA11_D6B0_41A3_B6078AD45B68",
   "pitch": -12.85,
   "yaw": -1.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FF3502F0_EA16_CEB0_41BC_128B6CD514BC",
 "maps": [
  {
   "hfov": 2.34,
   "yaw": -1.64,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E2AC6764_E9F1_F7D0_41E4_33B2CE782BDD_1_HS_1_0_0_map.gif",
      "width": 72,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.85,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.37,
   "image": "this.AnimatedImageResource_F6901FF9_EA11_D6B0_41DB_4E66E59E611B",
   "pitch": -7.69,
   "yaw": 55.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FC32AFD4_EA16_76F0_41EC_F1BA41FC6999",
 "maps": [
  {
   "hfov": 2.37,
   "yaw": 55.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E2AC6764_E9F1_F7D0_41E4_33B2CE782BDD_1_HS_2_0_0_map.gif",
      "width": 72,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.69,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E2971283_E9F1_C950_41C8_5EF3FA240BE0, this.camera_F751E29F_EA12_C970_41DF_800F32C267C0); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.22,
   "image": "this.AnimatedImageResource_F692DFF3_EA11_D6B0_41A9_894FF4CC419E",
   "pitch": -21.81,
   "yaw": 43.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FE18DBFC_EA0F_FEB0_41E8_66D4808C0CCE",
 "maps": [
  {
   "hfov": 2.22,
   "yaw": 43.95,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E2918625_E9F2_4950_41EB_1CC00719CC0B_1_HS_0_0_0_map.gif",
      "width": 72,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.81,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.17,
   "image": "this.AnimatedImageResource_F6929FF4_EA11_D6B0_41E6_8409A267B366",
   "pitch": -25.06,
   "yaw": 73.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FE897CDD_EA0E_5AF0_41DD_1440A5258962",
 "maps": [
  {
   "hfov": 2.17,
   "yaw": 73.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E2918625_E9F2_4950_41EB_1CC00719CC0B_1_HS_1_0_0_map.gif",
      "width": 72,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.06,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E2968961_E9F2_5BD0_41EC_172CA70D52AD, this.camera_F72122AF_EA12_C950_41CB_D140EAFD8243); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.19,
   "image": "this.AnimatedImageResource_F6922FF4_EA11_D6B0_41A3_6496148EC05E",
   "pitch": -23.67,
   "yaw": -148.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FF2A44FC_EA0E_4AB0_41E5_BC758F85C530",
 "maps": [
  {
   "hfov": 2.19,
   "yaw": -148.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E2918625_E9F2_4950_41EB_1CC00719CC0B_1_HS_2_0_0_map.gif",
      "width": 72,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.67,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E2918625_E9F2_4950_41EB_1CC00719CC0B, this.camera_F797F363_EA12_CFD0_41D8_BEFA7815DE28); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.28,
   "image": "this.AnimatedImageResource_F691FFF5_EA11_D6B0_41E1_3BCFAF0343AD",
   "pitch": -18.15,
   "yaw": -55.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FF72F83D_EA12_79B0_41E4_38BDEE7EAE59",
 "maps": [
  {
   "hfov": 2.28,
   "yaw": -55.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E2971283_E9F1_C950_41C8_5EF3FA240BE0_1_HS_0_0_0_map.gif",
      "width": 72,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.15,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E2AC6764_E9F1_F7D0_41E4_33B2CE782BDD, this.camera_F478E383_EA12_CF51_41B7_1DD8A43ACD80); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.36,
   "image": "this.AnimatedImageResource_F6919FF6_EA11_D6B0_41DA_6F91DAEEB6FC",
   "pitch": -10.46,
   "yaw": 79.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FFE7E2FE_EA13_CEB0_41E6_52D3EE719BC4",
 "maps": [
  {
   "hfov": 2.36,
   "yaw": 79.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E2971283_E9F1_C950_41C8_5EF3FA240BE0_1_HS_1_0_0_map.gif",
      "width": 72,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.46,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E22B9140_E9F2_4BD0_41B3_A234294B752C, this.camera_F4664374_EA12_CFB0_41C0_46A1C134183A); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.18,
   "image": "this.AnimatedImageResource_F6915FF6_EA11_D6B0_419D_571D23A1F8ED",
   "pitch": -24.54,
   "yaw": -109.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FFC47C7E_EA13_D9B0_41AD_4C186D63644C",
 "maps": [
  {
   "hfov": 2.18,
   "yaw": -109.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E2971283_E9F1_C950_41C8_5EF3FA240BE0_1_HS_2_0_0_map.gif",
      "width": 72,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.54,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E2968961_E9F2_5BD0_41EC_172CA70D52AD, this.camera_F4474396_EA12_CF70_41CB_E2783285F07E); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.36,
   "image": "this.AnimatedImageResource_F690EFF7_EA11_D6B0_41B3_5F6ACF3C5D25",
   "pitch": -9.46,
   "yaw": -59.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FFDDEE1D_EA13_D970_41D9_2D80D97F6205",
 "maps": [
  {
   "hfov": 2.36,
   "yaw": -59.95,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E2971283_E9F1_C950_41C8_5EF3FA240BE0_1_HS_3_0_0_map.gif",
      "width": 72,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.46,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
 "left": "0.18%",
 "width": 314,
 "scrollBarColor": "#000000",
 "data": {
  "name": "white block"
 },
 "shadowColor": "#000000",
 "children": [
  "this.Image_4EE5F6BF_41A0_81CB_41B1_1DE1A6565D38"
 ],
 "layout": "absolute",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "horizontalAlign": "left",
 "top": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadowHorizontalLength": 0,
 "height": 42,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowBlurRadius": 7,
 "gap": 10,
 "paddingRight": 0,
 "shadowOpacity": 0.3,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "shadowSpread": 1,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "propagateClick": true
},
{
 "backgroundColorRatios": [
  0.01
 ],
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
 "left": 0,
 "width": 314,
 "scrollBarColor": "#000000",
 "data": {
  "name": "blue block"
 },
 "shadowColor": "#000000",
 "children": [
  "this.Image_4ED9537E_41A1_874A_41C1_08E8B3C9B069",
  "this.Image_588A0363_41A0_877B_41C3_5D919767CB3D",
  "this.Image_5963ECFE_41A7_814A_41B1_28ADA8FA79F2",
  "this.Image_59FD31E7_41A1_837B_41CA_5FDA1A844094",
  "this.Image_5B84D225_41A1_80FE_4182_5744BD082173",
  "this.Image_5BF1307D_41E0_814E_41C3_7BE679482BFB"
 ],
 "layout": "absolute",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "bottom": 1,
 "contentOpaque": false,
 "shadowHorizontalLength": 0,
 "height": 53,
 "verticalAlign": "top",
 "backgroundColor": [
  "#5CA1DE"
 ],
 "scrollBarMargin": 2,
 "shadowBlurRadius": 7,
 "gap": 10,
 "paddingRight": 0,
 "shadowOpacity": 0.3,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "shadowSpread": 1,
 "borderRadius": 0,
 "visible": false,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "propagateClick": true
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "propagateClick": true,
 "data": {
  "name": "text 1"
 },
 "minWidth": 1,
 "id": "Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
 "left": 10,
 "horizontalAlign": "left",
 "fontColor": "#000000",
 "width": 391,
 "borderSize": 0,
 "text": "LOREM IPSUM",
 "shadow": false,
 "verticalAlign": "top",
 "top": 0,
 "height": 75,
 "fontSize": 61,
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Label",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "visible": false,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "fontWeight": "bold"
},
{
 "propagateClick": true,
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "right": "0%",
 "width": 110,
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "verticalAlign": "middle",
 "top": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 110,
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "overflow": "visible",
 "data": {
  "name": "button menu sup"
 }
},
{
 "propagateClick": true,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set"
 },
 "horizontalAlign": "center",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.Image_4D3870DF_4257_15C2_41C3_D3DCF8869E88",
  "this.Image_5244FDC1_4259_0FC1_416D_239F8C833A78"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "verticalAlign": "top",
 "width": "91.304%",
 "bottom": "0%",
 "contentOpaque": false,
 "height": "85.959%",
 "scrollBarMargin": 2,
 "gap": 3,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "visible": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll"
},
{
 "propagateClick": true,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
 "left": "0%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "width": 66,
 "children": [
  "this.Container_21F34780_3014_BF93_41A2_9BF700588BEC",
  "this.IconButton_223F0171_3014_B375_41C1_61063C3D73B3"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "top": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": "100%",
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "data": {
  "name": "- COLLAPSE"
 }
},
{
 "propagateClick": false,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "right": 0,
 "width": 330,
 "children": [
  "this.Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
  "this.IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882",
  "this.HTMLText_4E82D1A1_41A0_83F6_41C1_8F0D3A250167"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "top": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": "100%",
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "overflow": "visible",
 "data": {
  "name": "- EXPANDED"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "horizontalAlign": "left",
 "top": "10%",
 "bottom": "10%",
 "contentOpaque": false,
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "gap": 10,
 "paddingRight": 0,
 "shadowOpacity": 0.3,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "shadowSpread": 1,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "propagateClick": false
},
{
 "propagateClick": false,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "verticalAlign": "top",
 "top": "10%",
 "bottom": "80%",
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "gap": 10,
 "paddingRight": 20,
 "paddingTop": 20,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "overflow": "visible",
 "data": {
  "name": "Container X global"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "layout": "absolute",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "horizontalAlign": "center",
 "top": "10%",
 "bottom": "10%",
 "contentOpaque": false,
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "gap": 10,
 "paddingRight": 0,
 "shadowOpacity": 0.3,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "shadowSpread": 1,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "overflow": "visible",
 "shadowVerticalLength": 0,
 "propagateClick": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "horizontalAlign": "left",
 "top": "10%",
 "bottom": "10%",
 "contentOpaque": false,
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "gap": 10,
 "paddingRight": 0,
 "shadowOpacity": 0.3,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "shadowSpread": 1,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "propagateClick": true
},
{
 "propagateClick": true,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "verticalAlign": "top",
 "top": "10%",
 "bottom": "80%",
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "gap": 10,
 "paddingRight": 20,
 "paddingTop": 20,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "overflow": "visible",
 "data": {
  "name": "Container X global"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "layout": "absolute",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "horizontalAlign": "center",
 "top": "10%",
 "bottom": "10%",
 "contentOpaque": false,
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "gap": 10,
 "paddingRight": 0,
 "shadowOpacity": 0.3,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "shadowSpread": 1,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "overflow": "visible",
 "shadowVerticalLength": 0,
 "propagateClick": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "layout": "vertical",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "horizontalAlign": "center",
 "top": "10%",
 "bottom": "10%",
 "contentOpaque": false,
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "gap": 10,
 "paddingRight": 0,
 "shadowOpacity": 0.3,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "shadowSpread": 1,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "overflow": "visible",
 "shadowVerticalLength": 0,
 "propagateClick": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
 "left": "15%",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
  "this.Container_1E19D23C_57F1_802D_41B0_92437DF80B82"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "horizontalAlign": "left",
 "top": "10%",
 "bottom": "10%",
 "contentOpaque": false,
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "gap": 10,
 "paddingRight": 0,
 "shadowOpacity": 0.3,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "shadowSpread": 1,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "propagateClick": false
},
{
 "propagateClick": false,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C",
 "left": "15%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "verticalAlign": "top",
 "top": "10%",
 "bottom": "80%",
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "gap": 10,
 "paddingRight": 20,
 "paddingTop": 20,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "overflow": "visible",
 "data": {
  "name": "Container X global"
 }
},
{
 "propagateClick": true,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_50F91F27_424B_0C40_41C3_4AC948480017",
 "left": "0%",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container8437"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.IconButton_2B90E40F_3593_B9CB_41B4_408768336038"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "verticalAlign": "top",
 "width": "100%",
 "bottom": "0%",
 "contentOpaque": false,
 "height": "21.928%",
 "scrollBarMargin": 2,
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll"
},
{
 "propagateClick": false,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_546964AC_4259_1C47_41B4_89BC8EEE450A",
 "left": "0%",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container9886"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Image_4D3C7CFD_4392_045F_41BD_B71D1DBE1518",
  "this.Image_4D2F7E58_4392_07A5_41C0_C535119A8467",
  "this.IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "verticalAlign": "top",
 "width": "71.91%",
 "bottom": "23.39%",
 "contentOpaque": false,
 "height": "48.2%",
 "scrollBarMargin": 2,
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "visible": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll"
},
{
 "propagateClick": false,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_4DF6648C_43C9_009F_41B4_06D470FF1669",
 "left": "0%",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container3396"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Image_5617B085_43AE_1CAE_41CC_8FF53A5EBA65"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "verticalAlign": "top",
 "top": "0%",
 "width": "66.351%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": "100%",
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "overflow": "scroll"
},
{
 "propagateClick": true,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_4D37021E_43C9_03B8_41CC_28E8F98A7511",
 "left": "0%",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container3434"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Image_58A0CA8B_4392_0CBA_41A3_BAE15310237F"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "verticalAlign": "top",
 "top": "0%",
 "width": "77.883%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": "98.501%",
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "visible": false,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "overflow": "scroll"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F69C7FEF_EA11_D6D0_41D5_3BA5AB02FFC5",
 "levels": [
  {
   "url": "media/panorama_E22B9140_E9F2_4BD0_41B3_A234294B752C_1_HS_0_0.png",
   "width": 1080,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F69C1FF0_EA11_D6B0_41E7_3944A99217B7",
 "levels": [
  {
   "url": "media/panorama_E22B9140_E9F2_4BD0_41B3_A234294B752C_1_HS_1_0.png",
   "width": 1080,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F693CFF1_EA11_D6B0_41E2_D6B939DA5D3B",
 "levels": [
  {
   "url": "media/panorama_E22B9140_E9F2_4BD0_41B3_A234294B752C_1_HS_2_0.png",
   "width": 1080,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F69D7FED_EA11_D6D0_41C4_F59832B1010C",
 "levels": [
  {
   "url": "media/panorama_E2A54EA9_E9F2_7953_41E2_048321CB35DC_1_HS_0_0.png",
   "width": 1080,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F69D1FEE_EA11_D6D0_41D7_F49EA14D877E",
 "levels": [
  {
   "url": "media/panorama_E2A54EA9_E9F2_7953_41E2_048321CB35DC_1_HS_1_0.png",
   "width": 1080,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F69CBFEE_EA11_D6D0_416B_714ABB341C9E",
 "levels": [
  {
   "url": "media/panorama_E2A54EA9_E9F2_7953_41E2_048321CB35DC_1_HS_2_0.png",
   "width": 1080,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F69EDFEB_EA11_D6D0_41E5_8475592472C1",
 "levels": [
  {
   "url": "media/panorama_E296FD22_E9F1_DB50_41E8_504AF3DDA565_1_HS_0_0.png",
   "width": 1080,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_FDCC16CB_EA31_B6D0_41AB_1DA29D543CF8",
 "levels": [
  {
   "url": "media/panorama_E296FD22_E9F1_DB50_41E8_504AF3DDA565_0_HS_1_0.png",
   "width": 1080,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_FDCBC6CB_EA31_B6D0_41C9_922E8B271143",
 "levels": [
  {
   "url": "media/panorama_E296FD22_E9F1_DB50_41E8_504AF3DDA565_0_HS_2_0.png",
   "width": 1080,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F6936FF2_EA11_D6B0_41E0_FAE7D9F96F30",
 "levels": [
  {
   "url": "media/panorama_E2968961_E9F2_5BD0_41EC_172CA70D52AD_1_HS_0_0.png",
   "width": 1080,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F6932FF2_EA11_D6B0_41DA_17F6B27A7149",
 "levels": [
  {
   "url": "media/panorama_E2968961_E9F2_5BD0_41EC_172CA70D52AD_1_HS_1_0.png",
   "width": 1080,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F690BFF8_EA11_D6B0_41D0_489B2AC1F521",
 "levels": [
  {
   "url": "media/panorama_E2AC6764_E9F1_F7D0_41E4_33B2CE782BDD_1_HS_0_0.png",
   "width": 1080,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F6905FF9_EA11_D6B0_41A3_B6078AD45B68",
 "levels": [
  {
   "url": "media/panorama_E2AC6764_E9F1_F7D0_41E4_33B2CE782BDD_1_HS_1_0.png",
   "width": 1080,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F6901FF9_EA11_D6B0_41DB_4E66E59E611B",
 "levels": [
  {
   "url": "media/panorama_E2AC6764_E9F1_F7D0_41E4_33B2CE782BDD_1_HS_2_0.png",
   "width": 1080,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F692DFF3_EA11_D6B0_41A9_894FF4CC419E",
 "levels": [
  {
   "url": "media/panorama_E2918625_E9F2_4950_41EB_1CC00719CC0B_1_HS_0_0.png",
   "width": 1080,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F6929FF4_EA11_D6B0_41E6_8409A267B366",
 "levels": [
  {
   "url": "media/panorama_E2918625_E9F2_4950_41EB_1CC00719CC0B_1_HS_1_0.png",
   "width": 1080,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F6922FF4_EA11_D6B0_41A3_6496148EC05E",
 "levels": [
  {
   "url": "media/panorama_E2918625_E9F2_4950_41EB_1CC00719CC0B_1_HS_2_0.png",
   "width": 1080,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F691FFF5_EA11_D6B0_41E1_3BCFAF0343AD",
 "levels": [
  {
   "url": "media/panorama_E2971283_E9F1_C950_41C8_5EF3FA240BE0_1_HS_0_0.png",
   "width": 1080,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F6919FF6_EA11_D6B0_41DA_6F91DAEEB6FC",
 "levels": [
  {
   "url": "media/panorama_E2971283_E9F1_C950_41C8_5EF3FA240BE0_1_HS_1_0.png",
   "width": 1080,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F6915FF6_EA11_D6B0_419D_571D23A1F8ED",
 "levels": [
  {
   "url": "media/panorama_E2971283_E9F1_C950_41C8_5EF3FA240BE0_1_HS_2_0.png",
   "width": 1080,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_F690EFF7_EA11_D6B0_41B3_5F6ACF3C5D25",
 "levels": [
  {
   "url": "media/panorama_E2971283_E9F1_C950_41C8_5EF3FA240BE0_1_HS_3_0.png",
   "width": 1080,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "propagateClick": false,
 "minWidth": 1,
 "id": "Image_4EE5F6BF_41A0_81CB_41B1_1DE1A6565D38",
 "left": "0%",
 "horizontalAlign": "center",
 "width": "100%",
 "borderSize": 0,
 "url": "skin/Image_4EE5F6BF_41A0_81CB_41B1_1DE1A6565D38.png",
 "shadow": false,
 "verticalAlign": "middle",
 "bottom": "8.75%",
 "maxWidth": 635,
 "height": "67.391%",
 "maxHeight": 59,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Image",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "scaleMode": "fit_inside",
 "visible": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "data": {
  "name": "ministry of revenue"
 }
},
{
 "propagateClick": false,
 "minWidth": 1,
 "id": "Image_4ED9537E_41A1_874A_41C1_08E8B3C9B069",
 "left": "0%",
 "horizontalAlign": "center",
 "width": "32.903%",
 "borderSize": 0,
 "url": "skin/Image_4ED9537E_41A1_874A_41C1_08E8B3C9B069.png",
 "shadow": false,
 "verticalAlign": "middle",
 "top": "19.43%",
 "maxWidth": 167,
 "height": "60.377%",
 "maxHeight": 59,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Image",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "scaleMode": "fit_inside",
 "borderRadius": 0,
 "visible": false,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Image5496"
 }
},
{
 "propagateClick": false,
 "minWidth": 1,
 "id": "Image_588A0363_41A0_877B_41C3_5D919767CB3D",
 "left": "0%",
 "horizontalAlign": "center",
 "width": "79.355%",
 "borderSize": 0,
 "url": "skin/Image_588A0363_41A0_877B_41C3_5D919767CB3D.png",
 "shadow": false,
 "verticalAlign": "middle",
 "top": "0%",
 "maxWidth": 469,
 "height": "98.113%",
 "maxHeight": 59,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Image",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "scaleMode": "fit_inside",
 "borderRadius": 0,
 "visible": false,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Image11167"
 }
},
{
 "propagateClick": false,
 "minWidth": 1,
 "id": "Image_5963ECFE_41A7_814A_41B1_28ADA8FA79F2",
 "left": "0%",
 "horizontalAlign": "center",
 "width": "100%",
 "borderSize": 0,
 "url": "skin/Image_5963ECFE_41A7_814A_41B1_28ADA8FA79F2.png",
 "shadow": false,
 "verticalAlign": "middle",
 "top": "0%",
 "maxWidth": 880,
 "height": "94.34%",
 "maxHeight": 59,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Image",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "scaleMode": "fit_inside",
 "borderRadius": 0,
 "visible": false,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Image11246"
 }
},
{
 "propagateClick": false,
 "minWidth": 1,
 "id": "Image_59FD31E7_41A1_837B_41CA_5FDA1A844094",
 "left": "0%",
 "horizontalAlign": "center",
 "width": "46.774%",
 "borderSize": 0,
 "url": "skin/Image_59FD31E7_41A1_837B_41CA_5FDA1A844094.png",
 "shadow": false,
 "verticalAlign": "middle",
 "top": "20.75%",
 "maxWidth": 321,
 "height": "47.17%",
 "maxHeight": 59,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Image",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "scaleMode": "fit_inside",
 "borderRadius": 0,
 "visible": false,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Image11319"
 }
},
{
 "propagateClick": false,
 "minWidth": 1,
 "id": "Image_5B84D225_41A1_80FE_4182_5744BD082173",
 "left": "0%",
 "horizontalAlign": "center",
 "width": "50.645%",
 "borderSize": 0,
 "url": "skin/Image_5B84D225_41A1_80FE_4182_5744BD082173.png",
 "shadow": false,
 "verticalAlign": "middle",
 "top": "16.98%",
 "maxWidth": 395,
 "height": "49.057%",
 "maxHeight": 59,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Image",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "scaleMode": "fit_inside",
 "borderRadius": 0,
 "visible": false,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Image11499"
 }
},
{
 "propagateClick": false,
 "minWidth": 1,
 "id": "Image_5BF1307D_41E0_814E_41C3_7BE679482BFB",
 "left": "0%",
 "horizontalAlign": "center",
 "width": "53.226%",
 "borderSize": 0,
 "url": "skin/Image_5BF1307D_41E0_814E_41C3_7BE679482BFB.png",
 "shadow": false,
 "verticalAlign": "middle",
 "top": "11.32%",
 "maxWidth": 396,
 "height": "62.264%",
 "maxHeight": 59,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Image",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "scaleMode": "fit_inside",
 "borderRadius": 0,
 "visible": false,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Image11621"
 }
},
{
 "transparencyActive": true,
 "propagateClick": true,
 "minWidth": 1,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "horizontalAlign": "center",
 "width": 60,
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "maxWidth": 60,
 "mode": "toggle",
 "height": 60,
 "maxHeight": 60,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "IconButton",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "data": {
  "name": "image button menu"
 }
},
{
 "propagateClick": true,
 "minWidth": 1,
 "id": "Image_4D3870DF_4257_15C2_41C3_D3DCF8869E88",
 "horizontalAlign": "center",
 "width": "45.71%",
 "borderSize": 0,
 "url": "skin/Image_4D3870DF_4257_15C2_41C3_D3DCF8869E88.png",
 "shadow": false,
 "verticalAlign": "middle",
 "maxWidth": 58,
 "height": "10.163%",
 "maxHeight": 58,
 "click": "this.openLink('http://https://www.instagram.com/mellacreatives/', '_blank')",
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Image",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "scaleMode": "fit_inside",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "data": {
  "name": "Image5138"
 }
},
{
 "propagateClick": false,
 "minWidth": 1,
 "id": "Image_5244FDC1_4259_0FC1_416D_239F8C833A78",
 "horizontalAlign": "center",
 "width": "100%",
 "borderSize": 0,
 "url": "skin/Image_5244FDC1_4259_0FC1_416D_239F8C833A78.png",
 "shadow": false,
 "verticalAlign": "middle",
 "maxWidth": 58,
 "height": "8.167%",
 "maxHeight": 58,
 "click": "this.openLink('http://https://www.linkedin.com/company/mella-creative-studio/', '_blank')",
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Image",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "scaleMode": "fit_inside",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "data": {
  "name": "Image4905"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_21F34780_3014_BF93_41A2_9BF700588BEC",
 "left": "0%",
 "propagateClick": true,
 "width": 36,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "top",
 "top": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#000000"
 ],
 "height": "100%",
 "gap": 10,
 "paddingRight": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0.4,
 "paddingTop": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "data": {
  "name": "Container black"
 }
},
{
 "transparencyActive": true,
 "propagateClick": true,
 "minWidth": 1,
 "id": "IconButton_223F0171_3014_B375_41C1_61063C3D73B3",
 "left": 10,
 "horizontalAlign": "center",
 "width": 50,
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "middle",
 "top": "40%",
 "iconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3.png",
 "bottom": "40%",
 "maxWidth": 80,
 "mode": "push",
 "maxHeight": 80,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, false, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, true, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3_rollover.png",
 "paddingRight": 0,
 "class": "IconButton",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "data": {
  "name": "IconButton arrow"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
 "left": "0%",
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_0B85764A_2D07_4D95_41A5_3AC872515A8C"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "top",
 "top": "0%",
 "width": "90%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "gap": 10,
 "paddingRight": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "scroll"
},
{
 "transparencyActive": true,
 "propagateClick": true,
 "minWidth": 1,
 "id": "IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882",
 "horizontalAlign": "center",
 "right": 9,
 "width": 50,
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "middle",
 "top": "40%",
 "iconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882.png",
 "bottom": "40%",
 "maxWidth": 50,
 "mode": "push",
 "maxHeight": 50,
 "click": "this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882_rollover.png",
 "paddingRight": 0,
 "class": "IconButton",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "data": {
  "name": "IconButton collapse"
 }
},
{
 "propagateClick": false,
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "HTMLText_4E82D1A1_41A0_83F6_41C1_8F0D3A250167",
 "scrollBarColor": "#000000",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "top": "5.97%",
 "width": "30.303%",
 "scrollBarMargin": 2,
 "height": "5.236%",
 "paddingRight": 10,
 "paddingTop": 10,
 "class": "HTMLText",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:1.05vmin;\"><BR STYLE=\"letter-spacing:0vmin;color:#000000;font-size:1.05vmin;font-family:'Segoe UI';\"/></p></div>",
 "data": {
  "name": "HTMLText5367"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "width": "85%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#000000"
 ],
 "height": "100%",
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "vertical",
 "scrollBarWidth": 10,
 "minWidth": 460,
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "propagateClick": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "top",
 "width": "50%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "gap": 0,
 "paddingRight": 50,
 "paddingTop": 20,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "paddingBottom": 20,
 "borderRadius": 0,
 "paddingLeft": 50,
 "overflow": "visible"
},
{
 "transparencyActive": false,
 "propagateClick": false,
 "minWidth": 50,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "middle",
 "width": "25%",
 "maxWidth": 60,
 "mode": "push",
 "height": "75%",
 "maxHeight": 60,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "IconButton",
 "minHeight": 50,
 "backgroundOpacity": 0,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "data": {
  "name": "X"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "top",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 140,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll"
},
{
 "itemThumbnailWidth": 220,
 "minWidth": 1,
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "scrollBarColor": "#04A3E1",
 "horizontalAlign": "center",
 "itemLabelFontStyle": "italic",
 "scrollBarOpacity": 0.5,
 "itemLabelHorizontalAlign": "center",
 "itemMode": "normal",
 "scrollBarVisible": "rollOver",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemMaxHeight": 1000,
 "itemThumbnailOpacity": 1,
 "width": "100%",
 "itemLabelFontFamily": "Oswald",
 "shadow": false,
 "verticalAlign": "middle",
 "itemBorderRadius": 0,
 "itemPaddingRight": 3,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "height": "92%",
 "itemPaddingLeft": 3,
 "itemMaxWidth": 1000,
 "selectedItemLabelFontColor": "#04A3E1",
 "itemLabelPosition": "bottom",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemHorizontalAlign": "center",
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemOpacity": 1,
 "itemBackgroundOpacity": 0,
 "paddingRight": 70,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "backgroundOpacity": 0,
 "itemThumbnailBorderRadius": 0,
 "itemBackgroundColor": [],
 "itemPaddingTop": 3,
 "itemBackgroundColorRatios": [],
 "propagateClick": true,
 "itemWidth": 220,
 "selectedItemThumbnailShadow": true,
 "itemMinHeight": 50,
 "borderSize": 0,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "rollOverItemLabelFontColor": "#04A3E1",
 "rollOverItemThumbnailShadow": true,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "bottom": -0.2,
 "itemLabelFontSize": 16,
 "itemMinWidth": 50,
 "scrollBarMargin": 2,
 "itemVerticalAlign": "top",
 "itemLabelFontColor": "#666666",
 "itemThumbnailScaleMode": "fit_outside",
 "itemHeight": 160,
 "gap": 26,
 "itemThumbnailHeight": 125,
 "itemBackgroundColorDirection": "vertical",
 "paddingTop": 10,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "class": "ThumbnailGrid",
 "minHeight": 1,
 "itemLabelGap": 7,
 "itemThumbnailShadow": false,
 "itemPaddingBottom": 3,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "paddingBottom": 70,
 "scrollBarWidth": 10,
 "paddingLeft": 70,
 "data": {
  "name": "ThumbnailList"
 },
 "borderRadius": 5
},
{
 "backgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "propagateClick": true,
 "width": "100%",
 "borderSize": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "backgroundColorDirection": "vertical",
 "scrollEnabled": true,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "insetBorder": false,
 "height": "100%",
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "WebFrame",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "data": {
  "name": "WebFrame"
 }
},
{
 "transparencyActive": false,
 "propagateClick": true,
 "minWidth": 50,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "middle",
 "width": "25%",
 "maxWidth": 60,
 "mode": "push",
 "height": "75%",
 "maxHeight": 60,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "IconButton",
 "minHeight": 50,
 "backgroundOpacity": 0,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "data": {
  "name": "X"
 }
},
{
 "progressBarBorderColor": "#0066FF",
 "data": {
  "name": "Floor Plan"
 },
 "minWidth": 1,
 "id": "MapViewer",
 "left": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "height": "99.975%",
 "toolTipShadowColor": "#333333",
 "paddingRight": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "propagateClick": true,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "top": 0,
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "class": "ViewerArea",
 "minHeight": 1,
 "paddingTop": 0,
 "toolTipBorderRadius": 3,
 "playbackBarLeft": 0,
 "paddingLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingBottom": 0,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "transitionDuration": 500,
 "playbackBarHeadHeight": 15
},
{
 "propagateClick": true,
 "layout": "absolute",
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "minWidth": 1,
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "verticalAlign": "top",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 140,
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container photo"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "top",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "visible"
},
{
 "backgroundColorRatios": [
  0
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "width": "55%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#000000"
 ],
 "height": "100%",
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "vertical",
 "scrollBarWidth": 10,
 "minWidth": 460,
 "id": "Container_1E19D23C_57F1_802D_41B0_92437DF80B82",
 "propagateClick": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "children": [
  "this.Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
  "this.Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
  "this.Container_1E18523C_57F1_802D_41B1_88C86CD9A273"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "top",
 "width": "45%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "gap": 0,
 "paddingRight": 60,
 "paddingTop": 20,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "paddingBottom": 20,
 "borderRadius": 0,
 "paddingLeft": 60,
 "overflow": "visible"
},
{
 "transparencyActive": false,
 "propagateClick": false,
 "minWidth": 50,
 "id": "IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF",
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF.jpg",
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "middle",
 "width": "25%",
 "maxWidth": 60,
 "mode": "push",
 "height": "75%",
 "maxHeight": 60,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_rollover.jpg",
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "IconButton",
 "minHeight": 50,
 "backgroundOpacity": 0,
 "pressedIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_pressed.jpg",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "data": {
  "name": "X"
 }
},
{
 "transparencyActive": true,
 "propagateClick": true,
 "minWidth": 1,
 "id": "IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
 "left": "7.87%",
 "horizontalAlign": "center",
 "width": 71,
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038.png",
 "bottom": "1.5%",
 "maxWidth": 101,
 "mode": "toggle",
 "height": 61,
 "maxHeight": 101,
 "click": "if(!this.Container_546964AC_4259_1C47_41B4_89BC8EEE450A.get('visible')){ this.setComponentVisibility(this.Container_546964AC_4259_1C47_41B4_89BC8EEE450A, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_546964AC_4259_1C47_41B4_89BC8EEE450A, false, 0, null, null, false) }",
 "rollOverIconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038_rollover.png",
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "IconButton",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "data": {
  "name": "IconButton Info"
 }
},
{
 "propagateClick": false,
 "minWidth": 1,
 "id": "Image_4D3C7CFD_4392_045F_41BD_B71D1DBE1518",
 "horizontalAlign": "center",
 "right": "3.13%",
 "width": "60.938%",
 "borderSize": 0,
 "url": "skin/Image_4D3C7CFD_4392_045F_41BD_B71D1DBE1518.png",
 "shadow": false,
 "verticalAlign": "middle",
 "top": "3.5%",
 "maxWidth": 84,
 "height": "42.529%",
 "maxHeight": 84,
 "click": "this.openLink('http://mella@mella-cs.com', '_blank')",
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Image",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "scaleMode": "fit_inside",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "data": {
  "name": "Image2783"
 }
},
{
 "paddingLeft": 0,
 "propagateClick": false,
 "minWidth": 1,
 "id": "Image_4D2F7E58_4392_07A5_41C0_C535119A8467",
 "horizontalAlign": "center",
 "right": "4.69%",
 "width": "57.813%",
 "borderSize": 0,
 "url": "skin/Image_4D2F7E58_4392_07A5_41C0_C535119A8467.png",
 "shadow": false,
 "verticalAlign": "middle",
 "bottom": "30.53%",
 "maxWidth": 84,
 "height": "28.5%",
 "maxHeight": 84,
 "click": "this.openLink('http://mella-cs.com', '_blank')",
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Image",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "data": {
  "name": "Image2877"
 }
},
{
 "transparencyActive": false,
 "propagateClick": false,
 "minWidth": 1,
 "id": "IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
 "horizontalAlign": "center",
 "right": "0%",
 "width": 44,
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F.png",
 "bottom": "4.5%",
 "maxWidth": 101,
 "mode": "push",
 "height": 44,
 "maxHeight": 101,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false); this.openLink('http://https://maps.google.com/maps?q=8.998697,38.747010&ll=8.998697,38.747010&z=16', '_blank')",
 "rollOverIconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F_rollover.png",
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "IconButton",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "data": {
  "name": "IconButton Location"
 }
},
{
 "propagateClick": true,
 "minWidth": 1,
 "id": "Image_5617B085_43AE_1CAE_41CC_8FF53A5EBA65",
 "left": "0%",
 "horizontalAlign": "center",
 "width": "6.786%",
 "borderSize": 0,
 "url": "skin/Image_5617B085_43AE_1CAE_41CC_8FF53A5EBA65.png",
 "shadow": false,
 "verticalAlign": "middle",
 "bottom": "1.63%",
 "maxWidth": 1202,
 "height": "5.865%",
 "maxHeight": 998,
 "click": "if(!this.Container_4D37021E_43C9_03B8_41CC_28E8F98A7511.get('visible')){ this.setComponentVisibility(this.Container_4D37021E_43C9_03B8_41CC_28E8F98A7511, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_4D37021E_43C9_03B8_41CC_28E8F98A7511, false, 0, null, null, false) }",
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Image",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "data": {
  "name": "Image3661"
 }
},
{
 "propagateClick": false,
 "minWidth": 1,
 "id": "Image_58A0CA8B_4392_0CBA_41A3_BAE15310237F",
 "left": "0%",
 "horizontalAlign": "center",
 "width": "100%",
 "borderSize": 0,
 "url": "skin/Image_58A0CA8B_4392_0CBA_41A3_BAE15310237F.png",
 "shadow": false,
 "verticalAlign": "middle",
 "top": "0%",
 "maxWidth": 1012,
 "height": "100%",
 "maxHeight": 1185,
 "click": "this.setComponentVisibility(this.Container_4D37021E_43C9_03B8_41CC_28E8F98A7511, false, 0, null, null, false)",
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Image",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "scaleMode": "fit_inside",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Image4301"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_0B85764A_2D07_4D95_41A5_3AC872515A8C",
 "left": "0%",
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- Buttons set"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19",
  "this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
  "this.Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
  "this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
  "this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
  "this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
  "this.Container_1758A215_31FA_0014_41B6_9A4A5384548B",
  "this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
  "this.Container_168D8311_3106_01EC_41B0_F2D40886AB88"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "top": "0%",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "height": "100%",
 "gap": 10,
 "paddingRight": 40,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0.7,
 "paddingTop": 40,
 "paddingLeft": 40,
 "paddingBottom": 40,
 "borderRadius": 0,
 "overflow": "scroll"
},
{
 "propagateClick": false,
 "minWidth": 1,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "horizontalAlign": "center",
 "width": "100%",
 "borderSize": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "shadow": false,
 "verticalAlign": "middle",
 "top": "0%",
 "maxWidth": 2000,
 "height": "100%",
 "maxHeight": 1000,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Image",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "scaleMode": "fit_outside",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Image"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "top",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 60,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "paddingRight": 0,
 "paddingTop": 20,
 "class": "Container",
 "minHeight": 0,
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "vertical",
 "scrollBarWidth": 10,
 "minWidth": 100,
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "propagateClick": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "top",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Container",
 "minHeight": 520,
 "backgroundOpacity": 0.3,
 "paddingBottom": 30,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "propagateClick": false,
 "width": 370,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 40,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "data": {
  "name": "Container space"
 }
},
{
 "transparencyActive": false,
 "propagateClick": true,
 "minWidth": 50,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "horizontalAlign": "right",
 "right": 20,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "top",
 "top": 20,
 "width": "100%",
 "maxWidth": 60,
 "mode": "push",
 "height": "36.14%",
 "maxHeight": 60,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "IconButton",
 "minHeight": 50,
 "backgroundOpacity": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "data": {
  "name": "IconButton X"
 }
},
{
 "transparencyActive": false,
 "propagateClick": true,
 "minWidth": 50,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "horizontalAlign": "right",
 "right": 20,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "top",
 "top": 20,
 "width": "100%",
 "maxWidth": 60,
 "mode": "push",
 "height": "36.14%",
 "maxHeight": 60,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "IconButton",
 "minHeight": 50,
 "backgroundOpacity": 0,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "data": {
  "name": "IconButton X"
 }
},
{
 "progressBarBorderColor": "#0066FF",
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "minWidth": 1,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "height": "100%",
 "toolTipShadowColor": "#333333",
 "paddingRight": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "propagateClick": true,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "top": "0%",
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "class": "ViewerArea",
 "minHeight": 1,
 "paddingTop": 0,
 "toolTipBorderRadius": 3,
 "playbackBarLeft": 0,
 "paddingLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingBottom": 0,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "transitionDuration": 500,
 "playbackBarHeadHeight": 15
},
{
 "transparencyActive": false,
 "propagateClick": true,
 "minWidth": 50,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "middle",
 "top": "20%",
 "width": "14.22%",
 "bottom": "20%",
 "maxWidth": 60,
 "mode": "push",
 "maxHeight": 60,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "paddingRight": 0,
 "class": "IconButton",
 "minHeight": 50,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "data": {
  "name": "IconButton <"
 }
},
{
 "transparencyActive": false,
 "propagateClick": true,
 "minWidth": 50,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "horizontalAlign": "center",
 "right": 10,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "middle",
 "top": "20%",
 "width": "14.22%",
 "bottom": "20%",
 "maxWidth": 60,
 "mode": "push",
 "maxHeight": 60,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "paddingRight": 0,
 "class": "IconButton",
 "minHeight": 50,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "data": {
  "name": "IconButton >"
 }
},
{
 "transparencyActive": false,
 "propagateClick": true,
 "minWidth": 50,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "horizontalAlign": "right",
 "right": 20,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "top",
 "top": 20,
 "width": "10%",
 "maxWidth": 60,
 "mode": "push",
 "height": "10%",
 "maxHeight": 60,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "IconButton",
 "minHeight": 50,
 "backgroundOpacity": 0,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "data": {
  "name": "IconButton X"
 }
},
{
 "propagateClick": false,
 "minWidth": 1,
 "id": "Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1",
 "left": "0%",
 "horizontalAlign": "center",
 "width": "100%",
 "borderSize": 0,
 "url": "skin/Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1.jpg",
 "shadow": false,
 "verticalAlign": "bottom",
 "top": "0%",
 "maxWidth": 2000,
 "height": "100%",
 "maxHeight": 1000,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Image",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "scaleMode": "fit_outside",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Image40635"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "top",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "5%",
 "gap": 0,
 "paddingRight": 0,
 "paddingTop": 20,
 "class": "Container",
 "minHeight": 0,
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "vertical",
 "scrollBarWidth": 10,
 "minWidth": 100,
 "id": "Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
 "propagateClick": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "children": [
  "this.HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
  "this.Container_1E18623C_57F1_802D_41D5_C4D10C61A206"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "top",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Container",
 "minHeight": 520,
 "backgroundOpacity": 0.3,
 "paddingBottom": 30,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_1E18523C_57F1_802D_41B1_88C86CD9A273",
 "propagateClick": false,
 "width": 370,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 40,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "data": {
  "name": "Container space"
 }
},
{
 "propagateClick": true,
 "minWidth": 40,
 "id": "Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19",
 "left": "0%",
 "horizontalAlign": "left",
 "width": "100%",
 "borderSize": 0,
 "url": "skin/Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19.png",
 "shadow": false,
 "verticalAlign": "top",
 "top": "0%",
 "maxWidth": 1095,
 "height": "25%",
 "maxHeight": 1095,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Image",
 "minHeight": 30,
 "backgroundOpacity": 0,
 "scaleMode": "fit_inside",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Image Company"
 }
},
{
 "propagateClick": true,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Level 1"
 },
 "horizontalAlign": "left",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
  "this.Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
  "this.Container_106C4A62_2D09_C594_41C0_0D00619DF541",
  "this.Button_0A054365_2D09_CB9F_4145_8C365B373D19",
  "this.Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
  "this.Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
  "this.Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
  "this.Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
  "this.Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
  "this.Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
  "this.Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
  "this.Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
  "this.Container_207ECEAD_3035_51EC_41A3_EE49910C654D"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "top": "26%",
 "width": "100%",
 "bottom": "26%",
 "contentOpaque": false,
 "verticalAlign": "middle",
 "scrollBarMargin": 2,
 "gap": 0,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "overflow": "scroll"
},
{
 "propagateClick": true,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
 "left": "0%",
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container footer"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
  "this.HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
  "this.Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
  "this.Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "verticalAlign": "bottom",
 "width": "100%",
 "bottom": "0%",
 "contentOpaque": false,
 "height": 130,
 "scrollBarMargin": 2,
 "gap": 5,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "overflow": "scroll"
},
{
 "propagateClick": true,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
 "left": "0%",
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Level 2-1"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
  "this.Container_2A2DB53B_310E_001C_41BA_0206228E495C",
  "this.Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
  "this.Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
  "this.Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
  "this.Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
  "this.Button_2A2C053B_310E_001C_41A2_583DE489828C",
  "this.Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
  "this.Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
  "this.Button_15EF2665_3106_0035_41AE_9BACA1A48D02",
  "this.Button_15F5A318_3106_001C_41C5_9AA2EF2184CF",
  "this.Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
  "this.Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "shadow": false,
 "top": "25%",
 "width": "100%",
 "bottom": "25%",
 "contentOpaque": false,
 "verticalAlign": "middle",
 "scrollBarMargin": 2,
 "gap": 0,
 "paddingRight": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "visible": false,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "overflow": "scroll"
},
{
 "propagateClick": true,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
 "left": "0%",
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Level 2-2"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
  "this.Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
  "this.Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
  "this.Button_15A10DDC_31FA_0014_4185_021C898E177D",
  "this.Button_15A13DDC_31FA_0014_41C5_41AE80876834",
  "this.Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
  "this.Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
  "this.Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
  "this.Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
  "this.Button_159EEDDC_31FA_0014_41B6_22A86B2D2FEB",
  "this.Button_159E9DDC_31FA_0015_41B6_CB1D433C7673",
  "this.Button_159E8DDD_31FA_0014_41C5_F18F441AF371",
  "this.Button_159EBDDD_31FA_0014_41C8_935504B30727"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "shadow": false,
 "top": "25%",
 "width": "100%",
 "bottom": "25%",
 "contentOpaque": false,
 "verticalAlign": "middle",
 "scrollBarMargin": 2,
 "gap": 0,
 "paddingRight": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "visible": false,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "overflow": "scroll"
},
{
 "propagateClick": true,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
 "left": "0%",
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Level 2-3"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
  "this.Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
  "this.Container_17578D7D_31FA_0015_41BE_353D3005648A",
  "this.Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
  "this.Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
  "this.Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
  "this.Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
  "this.Button_17566D7D_31FA_0015_41AD_98D7C60C694F",
  "this.Button_17561D7D_31FA_0015_41B5_BD72FAC26B8B",
  "this.Button_17560D7D_31FA_0015_41C4_7F0EC7540CC2",
  "this.Button_17562D7D_31FA_0015_41A3_96B282B30DBA",
  "this.Button_1756DD7D_31FA_0015_41A5_988B67FCF8B7",
  "this.Button_1756FD7D_31FA_0015_41C7_DA2AAC2AAAEC"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "shadow": false,
 "top": "25%",
 "width": "100%",
 "bottom": "25%",
 "contentOpaque": false,
 "verticalAlign": "middle",
 "scrollBarMargin": 2,
 "gap": 0,
 "paddingRight": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "visible": false,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "overflow": "scroll"
},
{
 "propagateClick": true,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_1758A215_31FA_0014_41B6_9A4A5384548B",
 "left": "0%",
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Level 2-4"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Button_175A5214_31FA_0014_4198_930DF49BADD9",
  "this.Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
  "this.Container_1759B215_31FA_0014_41C0_84C99CBD5517",
  "this.Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
  "this.Button_17598215_31FA_0014_41AC_1166AB319171",
  "this.Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
  "this.Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
  "this.Button_17593215_31FA_0014_41C0_42BAFB0080F0",
  "this.Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
  "this.Button_17590215_31FA_0014_41C1_2B2D012DCC76",
  "this.Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
  "this.Button_17596215_31FA_0014_41C6_A42670770708",
  "this.Button_1758B215_31FA_0014_41BC_C4EAC2A9544B"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "shadow": false,
 "top": "25%",
 "width": "100%",
 "bottom": "25%",
 "contentOpaque": false,
 "verticalAlign": "middle",
 "scrollBarMargin": 2,
 "gap": 0,
 "paddingRight": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "visible": false,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "overflow": "scroll"
},
{
 "propagateClick": true,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
 "left": "0%",
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Level 2-5"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
  "this.Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
  "this.Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
  "this.Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
  "this.Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
  "this.Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
  "this.Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
  "this.Button_17EB32B7_3106_0014_41C8_467BF6AECBE8",
  "this.Button_17EB42B7_3106_0014_41B0_CE70CBDDF438",
  "this.Button_17EB52B7_3106_0014_419C_439E593AEC43",
  "this.Button_17EB62B7_3106_0014_41C5_43B38271B353",
  "this.Button_17EB72B7_3106_0014_41B9_61857077BF4A",
  "this.Button_17EB92B7_3106_0014_41B2_34A3E3F63779"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "shadow": false,
 "top": "25%",
 "width": "100%",
 "bottom": "25%",
 "contentOpaque": false,
 "verticalAlign": "middle",
 "scrollBarMargin": 2,
 "gap": 0,
 "paddingRight": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "visible": false,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "overflow": "scroll"
},
{
 "propagateClick": true,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_168D8311_3106_01EC_41B0_F2D40886AB88",
 "left": "0%",
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Level 2-6"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Button_168CA310_3106_01EC_41C7_72CE0522951A",
  "this.Container_168C8310_3106_01EC_4187_B16F315A4A23",
  "this.Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
  "this.Button_168D6310_3106_01EC_41B8_A0B6BE627547",
  "this.Button_168D5310_3106_01EC_41B5_96D9387401B8",
  "this.Button_168D3310_3106_01EC_41AC_5D524E4677A5",
  "this.Button_168D2310_3106_01EC_41B8_9D7D1B2B55FA",
  "this.Button_168D0310_3106_01EC_41A1_FA8FC42E6FF3",
  "this.Button_168DE310_3106_01EC_4192_6A9F468A0ADE",
  "this.Button_168DD310_3106_01EC_4190_7815FA70349E",
  "this.Button_168DB310_3106_01EC_41B2_3511AA5E40E1",
  "this.Button_168DA310_3106_01EC_41BE_DF88732C2A28",
  "this.Button_168D9311_3106_01EC_41A8_3BD8769525D6"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "shadow": false,
 "top": "25%",
 "width": "100%",
 "bottom": "25%",
 "contentOpaque": false,
 "verticalAlign": "middle",
 "scrollBarMargin": 2,
 "gap": 0,
 "paddingRight": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "visible": false,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "overflow": "scroll"
},
{
 "propagateClick": false,
 "minWidth": 1,
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "width": "100%",
 "scrollBarMargin": 2,
 "height": "100%",
 "paddingRight": 10,
 "paddingTop": 0,
 "class": "HTMLText",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 20,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.38vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.82vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.82vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.41vh;font-family:'Oswald';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.05vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.05vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.41vh;font-family:'Oswald';\"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.68vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.41vh;font-family:'Oswald';\"><B><I>LOREM IPSUM:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.83vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText"
 }
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "propagateClick": false,
 "width": 180,
 "data": {
  "name": "Button"
 },
 "horizontalAlign": "center",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "pressedBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 1,
 "borderColor": "#000000",
 "height": 50,
 "mode": "push",
 "fontSize": "2.39vh",
 "label": "LOREM IPSUM",
 "backgroundColor": [
  "#04A3E1"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0.7,
 "paddingBottom": 0,
 "borderRadius": 50,
 "paddingLeft": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "bold"
},
{
 "propagateClick": false,
 "minWidth": 1,
 "id": "HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "width": "100%",
 "scrollBarMargin": 2,
 "height": "46%",
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "HTMLText",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.38vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.82vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.82vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText18899"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_1E18623C_57F1_802D_41D5_C4D10C61A206",
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- content"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Image_1E18723C_57F1_802D_41C5_8325536874A5",
  "this.HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "top",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "75%",
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "top",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button Tour Info"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 50,
 "fontSize": 18,
 "label": "RECEPTION >",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B, true, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_106C4A62_2D09_C594_41C0_0D00619DF541",
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "top",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_0A054365_2D09_CB9F_4145_8C365B373D19",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button Panorama List"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 50,
 "fontSize": 18,
 "label": "ROOMS >",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 23,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B, true, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "top",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button Location"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "pressedLabel": "Inserdt Text",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 50,
 "fontSize": 18,
 "label": "AMENITIES >",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, true, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "top",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button Floorplan"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 50,
 "fontSize": 18,
 "label": "SPORTS AREA >",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_1758A215_31FA_0014_41B6_9A4A5384548B, true, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "top",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button Photoalbum"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 50,
 "fontSize": 18,
 "label": "SWIMMING POOL >",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE, true, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "top",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button Contact"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 50,
 "fontSize": 18,
 "label": "RESTAURANTS >",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_168D8311_3106_01EC_41B0_F2D40886AB88, true, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_207ECEAD_3035_51EC_41A3_EE49910C654D",
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "top",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
 "propagateClick": true,
 "width": 40,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 2,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "visible",
 "data": {
  "name": "blue line"
 }
},
{
 "propagateClick": true,
 "minWidth": 1,
 "id": "HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "width": "100%",
 "scrollBarMargin": 2,
 "height": 78,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "HTMLText",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "visible": false,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText47602"
 }
},
{
 "propagateClick": false,
 "layout": "horizontal",
 "children": [
  "this.IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
  "this.IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5"
 ],
 "minWidth": 1,
 "id": "Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container Icons 1"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "verticalAlign": "bottom",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 56,
 "gap": 7,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "overflow": "visible"
},
{
 "propagateClick": false,
 "layout": "horizontal",
 "children": [
  "this.IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
  "this.IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
  "this.IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
  "this.IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F"
 ],
 "minWidth": 1,
 "id": "Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6",
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container Icons 2"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "verticalAlign": "top",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 44,
 "gap": 7,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "overflow": "visible"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 30,
 "minWidth": 1,
 "id": "Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button <BACK"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "iconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B.png",
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 30,
 "backgroundColorDirection": "vertical",
 "rollOverFontFamily": "Oswald",
 "shadow": false,
 "verticalAlign": "middle",
 "rollOverBackgroundOpacity": 0.8,
 "borderColor": "#000000",
 "mode": "push",
 "rollOverFontSize": 18,
 "height": 50,
 "fontSize": 18,
 "label": "BACK",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "rollOverIconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B_rollover.png",
 "click": "this.setComponentVisibility(this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_2A2DB53B_310E_001C_41BA_0206228E495C",
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "top",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0.5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll"
},
{
 "propagateClick": true,
 "layout": "absolute",
 "minWidth": 1,
 "id": "Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
 "scrollBarColor": "#000000",
 "data": {
  "name": "line separator"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "verticalAlign": "top",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 8,
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "overflow": "scroll"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
 "pressedBackgroundOpacity": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 1"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Main Entrance",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 15,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverShadow": false,
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "rollOverShadowBlurRadius": 18,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 2"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Lobby",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 23,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 3"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "pressedLabel": "Reception",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Reception",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_2A2C053B_310E_001C_41A2_583DE489828C",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 4"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Meeting Area 1",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 5"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Meeting Area 2",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 6"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Bar",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_15EF2665_3106_0035_41AE_9BACA1A48D02",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 7"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Chill Out",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_15F5A318_3106_001C_41C5_9AA2EF2184CF",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 8"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Terrace",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 9"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Garden",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "visible": false,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 10"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "visible": false,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 30,
 "minWidth": 1,
 "id": "Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button <BACK"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "iconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1.png",
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 30,
 "backgroundColorDirection": "vertical",
 "rollOverFontFamily": "Oswald",
 "shadow": false,
 "verticalAlign": "middle",
 "rollOverBackgroundOpacity": 0.8,
 "borderColor": "#000000",
 "mode": "push",
 "rollOverFontSize": 18,
 "height": 50,
 "fontSize": 18,
 "label": "BACK",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "rollOverIconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1_rollover.png",
 "click": "this.setComponentVisibility(this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "top",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0.5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll"
},
{
 "propagateClick": true,
 "layout": "absolute",
 "minWidth": 1,
 "id": "Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
 "scrollBarColor": "#000000",
 "data": {
  "name": "line separator"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "verticalAlign": "top",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 8,
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "overflow": "scroll"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_15A10DDC_31FA_0014_4185_021C898E177D",
 "pressedBackgroundOpacity": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 1"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 15,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverShadow": false,
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "rollOverShadowBlurRadius": 18,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_15A13DDC_31FA_0014_41C5_41AE80876834",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 2"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 23,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 3"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "pressedLabel": "Lorem Ipsum",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 4"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 5"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 6"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_159EEDDC_31FA_0014_41B6_22A86B2D2FEB",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 7"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_159E9DDC_31FA_0015_41B6_CB1D433C7673",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 8"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_159E8DDD_31FA_0014_41C5_F18F441AF371",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 9"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_159EBDDD_31FA_0014_41C8_935504B30727",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 10"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 30,
 "minWidth": 1,
 "id": "Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button <BACK"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "iconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B.png",
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 30,
 "backgroundColorDirection": "vertical",
 "rollOverFontFamily": "Oswald",
 "shadow": false,
 "verticalAlign": "middle",
 "rollOverBackgroundOpacity": 0.8,
 "borderColor": "#000000",
 "mode": "push",
 "rollOverFontSize": 18,
 "height": 50,
 "fontSize": 18,
 "label": "BACK",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "rollOverIconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B_rollover.png",
 "click": "this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "top",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0.5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll"
},
{
 "propagateClick": true,
 "layout": "absolute",
 "minWidth": 1,
 "id": "Container_17578D7D_31FA_0015_41BE_353D3005648A",
 "scrollBarColor": "#000000",
 "data": {
  "name": "line separator"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "verticalAlign": "top",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 8,
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "overflow": "scroll"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
 "pressedBackgroundOpacity": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 1"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 15,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverShadow": false,
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "rollOverShadowBlurRadius": 18,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 2"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 23,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 3"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "pressedLabel": "Lorem Ipsum",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 4"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_17566D7D_31FA_0015_41AD_98D7C60C694F",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 5"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_17561D7D_31FA_0015_41B5_BD72FAC26B8B",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 6"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_17560D7D_31FA_0015_41C4_7F0EC7540CC2",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 7"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_17562D7D_31FA_0015_41A3_96B282B30DBA",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 8"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_1756DD7D_31FA_0015_41A5_988B67FCF8B7",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 9"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_1756FD7D_31FA_0015_41C7_DA2AAC2AAAEC",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 10"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 30,
 "minWidth": 1,
 "id": "Button_175A5214_31FA_0014_4198_930DF49BADD9",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button <BACK"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "iconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9.png",
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 30,
 "backgroundColorDirection": "vertical",
 "rollOverFontFamily": "Oswald",
 "shadow": false,
 "verticalAlign": "middle",
 "rollOverBackgroundOpacity": 0.8,
 "borderColor": "#000000",
 "mode": "push",
 "rollOverFontSize": 18,
 "height": 50,
 "fontSize": 18,
 "label": "BACK",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "rollOverIconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9_rollover.png",
 "click": "this.setComponentVisibility(this.Container_1758A215_31FA_0014_41B6_9A4A5384548B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "top",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0.5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll"
},
{
 "propagateClick": true,
 "layout": "absolute",
 "minWidth": 1,
 "id": "Container_1759B215_31FA_0014_41C0_84C99CBD5517",
 "scrollBarColor": "#000000",
 "data": {
  "name": "line separator"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "verticalAlign": "top",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 8,
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "overflow": "scroll"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
 "pressedBackgroundOpacity": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 1"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 15,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverShadow": false,
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "rollOverShadowBlurRadius": 18,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_17598215_31FA_0014_41AC_1166AB319171",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 2"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 23,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 3"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "pressedLabel": "Lorem Ipsum",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 4"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_17593215_31FA_0014_41C0_42BAFB0080F0",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 5"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 6"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_17590215_31FA_0014_41C1_2B2D012DCC76",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 7"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 8"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_17596215_31FA_0014_41C6_A42670770708",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 9"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_1758B215_31FA_0014_41BC_C4EAC2A9544B",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 10"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 30,
 "minWidth": 1,
 "id": "Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button <BACK"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "iconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C.png",
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 30,
 "backgroundColorDirection": "vertical",
 "rollOverFontFamily": "Oswald",
 "shadow": false,
 "verticalAlign": "middle",
 "rollOverBackgroundOpacity": 0.8,
 "borderColor": "#000000",
 "mode": "push",
 "rollOverFontSize": 18,
 "height": 50,
 "fontSize": 18,
 "label": "BACK",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "rollOverIconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C_rollover.png",
 "click": "this.setComponentVisibility(this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "top",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0.5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll"
},
{
 "propagateClick": true,
 "layout": "absolute",
 "minWidth": 1,
 "id": "Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
 "scrollBarColor": "#000000",
 "data": {
  "name": "line separator"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "verticalAlign": "top",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 8,
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "overflow": "scroll"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
 "pressedBackgroundOpacity": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 1"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 15,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverShadow": false,
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "rollOverShadowBlurRadius": 18,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 2"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 23,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 3"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "pressedLabel": "Lorem Ipsum",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 4"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_17EB32B7_3106_0014_41C8_467BF6AECBE8",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 5"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_17EB42B7_3106_0014_41B0_CE70CBDDF438",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 6"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_17EB52B7_3106_0014_419C_439E593AEC43",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 7"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_17EB62B7_3106_0014_41C5_43B38271B353",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 8"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_17EB72B7_3106_0014_41B9_61857077BF4A",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 9"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_17EB92B7_3106_0014_41B2_34A3E3F63779",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 10"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 30,
 "minWidth": 1,
 "id": "Button_168CA310_3106_01EC_41C7_72CE0522951A",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button <BACK"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "iconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A.png",
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 30,
 "backgroundColorDirection": "vertical",
 "rollOverFontFamily": "Oswald",
 "shadow": false,
 "verticalAlign": "middle",
 "rollOverBackgroundOpacity": 0.8,
 "borderColor": "#000000",
 "mode": "push",
 "rollOverFontSize": 18,
 "height": 50,
 "fontSize": 18,
 "label": "BACK",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "rollOverIconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A_rollover.png",
 "click": "this.setComponentVisibility(this.Container_168D8311_3106_01EC_41B0_F2D40886AB88, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "id": "Container_168C8310_3106_01EC_4187_B16F315A4A23",
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "top",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0.5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll"
},
{
 "propagateClick": true,
 "layout": "absolute",
 "minWidth": 1,
 "id": "Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
 "scrollBarColor": "#000000",
 "data": {
  "name": "line separator"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "verticalAlign": "top",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 8,
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Container",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "overflow": "scroll"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_168D6310_3106_01EC_41B8_A0B6BE627547",
 "pressedBackgroundOpacity": 1,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 1"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 15,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverShadow": false,
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "rollOverShadowBlurRadius": 18,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_168D5310_3106_01EC_41B5_96D9387401B8",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 2"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 23,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_168D3310_3106_01EC_41AC_5D524E4677A5",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 3"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "pressedLabel": "Lorem Ipsum",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_168D2310_3106_01EC_41B8_9D7D1B2B55FA",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 4"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_168D0310_3106_01EC_41A1_FA8FC42E6FF3",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 5"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_168DE310_3106_01EC_4192_6A9F468A0ADE",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 6"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_168DD310_3106_01EC_4190_7815FA70349E",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 7"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_168DB310_3106_01EC_41B2_3511AA5E40E1",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 8"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_168DA310_3106_01EC_41BE_DF88732C2A28",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 9"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "minWidth": 1,
 "id": "Button_168D9311_3106_01EC_41A8_3BD8769525D6",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 10"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "verticalAlign": "middle",
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingRight": 0,
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "class": "Button",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "propagateClick": false,
 "minWidth": 1,
 "horizontalAlign": "left",
 "id": "Image_1E18723C_57F1_802D_41C5_8325536874A5",
 "width": "25%",
 "borderSize": 0,
 "url": "skin/Image_1E18723C_57F1_802D_41C5_8325536874A5.jpg",
 "shadow": false,
 "verticalAlign": "top",
 "maxWidth": 200,
 "height": "100%",
 "maxHeight": 200,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Image",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "scaleMode": "fit_inside",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "data": {
  "name": "agent photo"
 }
},
{
 "propagateClick": false,
 "minWidth": 1,
 "id": "HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC",
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "width": "75%",
 "scrollBarMargin": 2,
 "height": "100%",
 "paddingRight": 10,
 "paddingTop": 0,
 "class": "HTMLText",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.41vh;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.41vh;font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.68vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.68vh;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.68vh;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.68vh;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.05vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.05vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "data": {
  "name": "HTMLText19460"
 }
},
{
 "transparencyActive": false,
 "propagateClick": false,
 "minWidth": 1,
 "id": "IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
 "horizontalAlign": "center",
 "width": 44,
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83.png",
 "maxWidth": 101,
 "mode": "push",
 "height": 44,
 "maxHeight": 101,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83_rollover.png",
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "IconButton",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "data": {
  "name": "IconButton Thumblist"
 }
},
{
 "transparencyActive": false,
 "propagateClick": false,
 "minWidth": 1,
 "id": "IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5",
 "horizontalAlign": "center",
 "width": 44,
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5.png",
 "maxWidth": 101,
 "mode": "push",
 "height": 44,
 "maxHeight": 101,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5_rollover.png",
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "IconButton",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "data": {
  "name": "IconButton Photoalbum"
 }
},
{
 "transparencyActive": true,
 "propagateClick": false,
 "minWidth": 1,
 "id": "IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
 "horizontalAlign": "center",
 "width": 44,
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15.png",
 "maxWidth": 101,
 "mode": "push",
 "height": 44,
 "maxHeight": 101,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15_rollover.png",
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "IconButton",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "data": {
  "name": "IconButton Floorplan"
 }
},
{
 "transparencyActive": false,
 "propagateClick": false,
 "minWidth": 1,
 "id": "IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
 "horizontalAlign": "center",
 "width": 44,
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7.png",
 "maxWidth": 101,
 "mode": "push",
 "height": 44,
 "maxHeight": 101,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false)",
 "rollOverIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_rollover.png",
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "IconButton",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_pressed.png",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "data": {
  "name": "IconButton Realtor"
 }
},
{
 "transparencyActive": false,
 "propagateClick": false,
 "minWidth": 1,
 "id": "IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
 "horizontalAlign": "center",
 "width": 44,
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF.png",
 "maxWidth": 101,
 "mode": "push",
 "height": 44,
 "maxHeight": 101,
 "rollOverIconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF_rollover.png",
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "IconButton",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "data": {
  "name": "IconButton Video"
 }
},
{
 "transparencyActive": false,
 "propagateClick": false,
 "minWidth": 1,
 "id": "IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F",
 "horizontalAlign": "center",
 "width": 50,
 "borderSize": 0,
 "shadow": false,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F.png",
 "maxWidth": 101,
 "mode": "push",
 "height": 50,
 "maxHeight": 101,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "IconButton",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F_pressed.png",
 "visible": false,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "data": {
  "name": "IconButton --"
 }
}],
 "start": "this.playAudioList([this.audio_FBA81A9F_EA72_5970_41D2_B1C2C7FF0905]); this.init(); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "layout": "absolute",
 "scrollBarWidth": 10,
 "minWidth": 20,
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player468"
 },
 "horizontalAlign": "left",
 "backgroundPreloadEnabled": true,
 "scrollBarOpacity": 0.5,
 "children": [
  "this.MainViewer",
  "this.Container_22BB12F4_3075_D173_4184_EC3BC4955417",
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9",
  "this.Container_50E57579_424B_1CC1_41C7_2A7D7DE232E6",
  "this.Container_58B883FD_4396_7C5F_41B3_61F626F14414"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "desktopMipmappingEnabled": false,
 "shadow": false,
 "scripts": {
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "existsKey": function(key){  return key in window; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "unregisterKey": function(key){  delete window[key]; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "registerKey": function(key, value){  window[key] = value; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "verticalAlign": "top",
 "defaultVRPointer": "laser",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": "100%",
 "downloadEnabled": false,
 "gap": 10,
 "paddingRight": 0,
 "paddingTop": 0,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "class": "Player",
 "minHeight": 20,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "width": "100%",
 "overflow": "visible"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
