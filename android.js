/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  ListView,
  View,
} = React;

var mosaic_data = [[
    {
      "src": "http://myntra.myntassets.com/image/style/properties/858349/Nike-Men-Sports-Shoes_1_e2448f6a3e289a46e70639b64cf8c344.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/image/style/properties/654422/Nike-Unisex-Red-Classic-Turf-Backpack_1_22f8fac15f04c395b2b9b21b681df2c6.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/image/style/properties/858398/Nike-Men-Sports-Shoes_1_79e81a7adb6cb890e53ec8d64a4fc8d8.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/images/style/style_search_image/Nike-Men-Tshirts_d271173afcd217dc13d8593593bd8f7d_images_180_240.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/assets/images/857337/2015/9/7/11441611518837-Nike-Green--Brown-Camouflage-Print-Jacket-6791441611518308-1.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    }
],
[
    {
      "src": "http://myntra.myntassets.com/image/style/properties/858349/Nike-Men-Sports-Shoes_1_e2448f6a3e289a46e70639b64cf8c344.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/image/style/properties/654422/Nike-Unisex-Red-Classic-Turf-Backpack_1_22f8fac15f04c395b2b9b21b681df2c6.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/image/style/properties/858398/Nike-Men-Sports-Shoes_1_79e81a7adb6cb890e53ec8d64a4fc8d8.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/images/style/style_search_image/Nike-Men-Tshirts_d271173afcd217dc13d8593593bd8f7d_images_180_240.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/assets/images/857337/2015/9/7/11441611518837-Nike-Green--Brown-Camouflage-Print-Jacket-6791441611518308-1.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    }
],
[
    {
      "src": "http://myntra.myntassets.com/image/style/properties/858349/Nike-Men-Sports-Shoes_1_e2448f6a3e289a46e70639b64cf8c344.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/image/style/properties/654422/Nike-Unisex-Red-Classic-Turf-Backpack_1_22f8fac15f04c395b2b9b21b681df2c6.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/image/style/properties/858398/Nike-Men-Sports-Shoes_1_79e81a7adb6cb890e53ec8d64a4fc8d8.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/images/style/style_search_image/Nike-Men-Tshirts_d271173afcd217dc13d8593593bd8f7d_images_180_240.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/assets/images/857337/2015/9/7/11441611518837-Nike-Green--Brown-Camouflage-Print-Jacket-6791441611518308-1.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    }
],
[
    {
      "src": "http://myntra.myntassets.com/image/style/properties/858349/Nike-Men-Sports-Shoes_1_e2448f6a3e289a46e70639b64cf8c344.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/image/style/properties/654422/Nike-Unisex-Red-Classic-Turf-Backpack_1_22f8fac15f04c395b2b9b21b681df2c6.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/image/style/properties/858398/Nike-Men-Sports-Shoes_1_79e81a7adb6cb890e53ec8d64a4fc8d8.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/images/style/style_search_image/Nike-Men-Tshirts_d271173afcd217dc13d8593593bd8f7d_images_180_240.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/assets/images/857337/2015/9/7/11441611518837-Nike-Green--Brown-Camouflage-Print-Jacket-6791441611518308-1.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    }
],
[
    {
      "src": "http://myntra.myntassets.com/image/style/properties/858349/Nike-Men-Sports-Shoes_1_e2448f6a3e289a46e70639b64cf8c344.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/image/style/properties/654422/Nike-Unisex-Red-Classic-Turf-Backpack_1_22f8fac15f04c395b2b9b21b681df2c6.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/image/style/properties/858398/Nike-Men-Sports-Shoes_1_79e81a7adb6cb890e53ec8d64a4fc8d8.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/images/style/style_search_image/Nike-Men-Tshirts_d271173afcd217dc13d8593593bd8f7d_images_180_240.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/assets/images/857337/2015/9/7/11441611518837-Nike-Green--Brown-Camouflage-Print-Jacket-6791441611518308-1.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    }
],
[
    {
      "src": "http://myntra.myntassets.com/image/style/properties/858349/Nike-Men-Sports-Shoes_1_e2448f6a3e289a46e70639b64cf8c344.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/image/style/properties/654422/Nike-Unisex-Red-Classic-Turf-Backpack_1_22f8fac15f04c395b2b9b21b681df2c6.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/image/style/properties/858398/Nike-Men-Sports-Shoes_1_79e81a7adb6cb890e53ec8d64a4fc8d8.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/images/style/style_search_image/Nike-Men-Tshirts_d271173afcd217dc13d8593593bd8f7d_images_180_240.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/assets/images/857337/2015/9/7/11441611518837-Nike-Green--Brown-Camouflage-Print-Jacket-6791441611518308-1.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    }
],
[
    {
      "src": "http://myntra.myntassets.com/image/style/properties/858349/Nike-Men-Sports-Shoes_1_e2448f6a3e289a46e70639b64cf8c344.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/image/style/properties/654422/Nike-Unisex-Red-Classic-Turf-Backpack_1_22f8fac15f04c395b2b9b21b681df2c6.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/image/style/properties/858398/Nike-Men-Sports-Shoes_1_79e81a7adb6cb890e53ec8d64a4fc8d8.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/images/style/style_search_image/Nike-Men-Tshirts_d271173afcd217dc13d8593593bd8f7d_images_180_240.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/assets/images/857337/2015/9/7/11441611518837-Nike-Green--Brown-Camouflage-Print-Jacket-6791441611518308-1.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    }
],
[
    {
      "src": "http://myntra.myntassets.com/image/style/properties/858349/Nike-Men-Sports-Shoes_1_e2448f6a3e289a46e70639b64cf8c344.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/image/style/properties/654422/Nike-Unisex-Red-Classic-Turf-Backpack_1_22f8fac15f04c395b2b9b21b681df2c6.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/image/style/properties/858398/Nike-Men-Sports-Shoes_1_79e81a7adb6cb890e53ec8d64a4fc8d8.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/images/style/style_search_image/Nike-Men-Tshirts_d271173afcd217dc13d8593593bd8f7d_images_180_240.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/assets/images/857337/2015/9/7/11441611518837-Nike-Green--Brown-Camouflage-Print-Jacket-6791441611518308-1.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    }
],
[
    {
      "src": "http://myntra.myntassets.com/image/style/properties/858349/Nike-Men-Sports-Shoes_1_e2448f6a3e289a46e70639b64cf8c344.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/image/style/properties/654422/Nike-Unisex-Red-Classic-Turf-Backpack_1_22f8fac15f04c395b2b9b21b681df2c6.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/image/style/properties/858398/Nike-Men-Sports-Shoes_1_79e81a7adb6cb890e53ec8d64a4fc8d8.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/images/style/style_search_image/Nike-Men-Tshirts_d271173afcd217dc13d8593593bd8f7d_images_180_240.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/assets/images/857337/2015/9/7/11441611518837-Nike-Green--Brown-Camouflage-Print-Jacket-6791441611518308-1.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    }
],
[
    {
      "src": "http://myntra.myntassets.com/image/style/properties/858349/Nike-Men-Sports-Shoes_1_e2448f6a3e289a46e70639b64cf8c344.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/image/style/properties/654422/Nike-Unisex-Red-Classic-Turf-Backpack_1_22f8fac15f04c395b2b9b21b681df2c6.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/image/style/properties/858398/Nike-Men-Sports-Shoes_1_79e81a7adb6cb890e53ec8d64a4fc8d8.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/images/style/style_search_image/Nike-Men-Tshirts_d271173afcd217dc13d8593593bd8f7d_images_180_240.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/assets/images/857337/2015/9/7/11441611518837-Nike-Green--Brown-Camouflage-Print-Jacket-6791441611518308-1.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    }
],
[
    {
      "src": "http://myntra.myntassets.com/image/style/properties/858349/Nike-Men-Sports-Shoes_1_e2448f6a3e289a46e70639b64cf8c344.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/image/style/properties/654422/Nike-Unisex-Red-Classic-Turf-Backpack_1_22f8fac15f04c395b2b9b21b681df2c6.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/image/style/properties/858398/Nike-Men-Sports-Shoes_1_79e81a7adb6cb890e53ec8d64a4fc8d8.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/images/style/style_search_image/Nike-Men-Tshirts_d271173afcd217dc13d8593593bd8f7d_images_180_240.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/assets/images/857337/2015/9/7/11441611518837-Nike-Green--Brown-Camouflage-Print-Jacket-6791441611518308-1.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    }
],
[
    {
      "src": "http://myntra.myntassets.com/image/style/properties/858349/Nike-Men-Sports-Shoes_1_e2448f6a3e289a46e70639b64cf8c344.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/image/style/properties/654422/Nike-Unisex-Red-Classic-Turf-Backpack_1_22f8fac15f04c395b2b9b21b681df2c6.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/image/style/properties/858398/Nike-Men-Sports-Shoes_1_79e81a7adb6cb890e53ec8d64a4fc8d8.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/images/style/style_search_image/Nike-Men-Tshirts_d271173afcd217dc13d8593593bd8f7d_images_180_240.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/assets/images/857337/2015/9/7/11441611518837-Nike-Green--Brown-Camouflage-Print-Jacket-6791441611518308-1.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    }
],
[
    {
      "src": "http://myntra.myntassets.com/image/style/properties/858349/Nike-Men-Sports-Shoes_1_e2448f6a3e289a46e70639b64cf8c344.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/image/style/properties/654422/Nike-Unisex-Red-Classic-Turf-Backpack_1_22f8fac15f04c395b2b9b21b681df2c6.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/image/style/properties/858398/Nike-Men-Sports-Shoes_1_79e81a7adb6cb890e53ec8d64a4fc8d8.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/images/style/style_search_image/Nike-Men-Tshirts_d271173afcd217dc13d8593593bd8f7d_images_180_240.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/assets/images/857337/2015/9/7/11441611518837-Nike-Green--Brown-Camouflage-Print-Jacket-6791441611518308-1.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    }
],
[
    {
      "src": "http://myntra.myntassets.com/image/style/properties/858349/Nike-Men-Sports-Shoes_1_e2448f6a3e289a46e70639b64cf8c344.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/image/style/properties/654422/Nike-Unisex-Red-Classic-Turf-Backpack_1_22f8fac15f04c395b2b9b21b681df2c6.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/image/style/properties/858398/Nike-Men-Sports-Shoes_1_79e81a7adb6cb890e53ec8d64a4fc8d8.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/images/style/style_search_image/Nike-Men-Tshirts_d271173afcd217dc13d8593593bd8f7d_images_180_240.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/assets/images/857337/2015/9/7/11441611518837-Nike-Green--Brown-Camouflage-Print-Jacket-6791441611518308-1.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    }
],
[
    {
      "src": "http://myntra.myntassets.com/image/style/properties/858349/Nike-Men-Sports-Shoes_1_e2448f6a3e289a46e70639b64cf8c344.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/image/style/properties/654422/Nike-Unisex-Red-Classic-Turf-Backpack_1_22f8fac15f04c395b2b9b21b681df2c6.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/image/style/properties/858398/Nike-Men-Sports-Shoes_1_79e81a7adb6cb890e53ec8d64a4fc8d8.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/images/style/style_search_image/Nike-Men-Tshirts_d271173afcd217dc13d8593593bd8f7d_images_180_240.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/assets/images/857337/2015/9/7/11441611518837-Nike-Green--Brown-Camouflage-Print-Jacket-6791441611518308-1.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    }
],
[
    {
      "src": "http://myntra.myntassets.com/image/style/properties/858349/Nike-Men-Sports-Shoes_1_e2448f6a3e289a46e70639b64cf8c344.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/image/style/properties/654422/Nike-Unisex-Red-Classic-Turf-Backpack_1_22f8fac15f04c395b2b9b21b681df2c6.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/image/style/properties/858398/Nike-Men-Sports-Shoes_1_79e81a7adb6cb890e53ec8d64a4fc8d8.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/images/style/style_search_image/Nike-Men-Tshirts_d271173afcd217dc13d8593593bd8f7d_images_180_240.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/assets/images/857337/2015/9/7/11441611518837-Nike-Green--Brown-Camouflage-Print-Jacket-6791441611518308-1.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    }
],
[
    {
      "src": "http://myntra.myntassets.com/image/style/properties/858349/Nike-Men-Sports-Shoes_1_e2448f6a3e289a46e70639b64cf8c344.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/image/style/properties/654422/Nike-Unisex-Red-Classic-Turf-Backpack_1_22f8fac15f04c395b2b9b21b681df2c6.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/image/style/properties/858398/Nike-Men-Sports-Shoes_1_79e81a7adb6cb890e53ec8d64a4fc8d8.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/images/style/style_search_image/Nike-Men-Tshirts_d271173afcd217dc13d8593593bd8f7d_images_180_240.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/assets/images/857337/2015/9/7/11441611518837-Nike-Green--Brown-Camouflage-Print-Jacket-6791441611518308-1.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    }
],
[
    {
      "src": "http://myntra.myntassets.com/image/style/properties/858349/Nike-Men-Sports-Shoes_1_e2448f6a3e289a46e70639b64cf8c344.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/image/style/properties/654422/Nike-Unisex-Red-Classic-Turf-Backpack_1_22f8fac15f04c395b2b9b21b681df2c6.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/image/style/properties/858398/Nike-Men-Sports-Shoes_1_79e81a7adb6cb890e53ec8d64a4fc8d8.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/images/style/style_search_image/Nike-Men-Tshirts_d271173afcd217dc13d8593593bd8f7d_images_180_240.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/assets/images/857337/2015/9/7/11441611518837-Nike-Green--Brown-Camouflage-Print-Jacket-6791441611518308-1.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    }
],
[
    {
      "src": "http://myntra.myntassets.com/image/style/properties/858349/Nike-Men-Sports-Shoes_1_e2448f6a3e289a46e70639b64cf8c344.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/image/style/properties/654422/Nike-Unisex-Red-Classic-Turf-Backpack_1_22f8fac15f04c395b2b9b21b681df2c6.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/image/style/properties/858398/Nike-Men-Sports-Shoes_1_79e81a7adb6cb890e53ec8d64a4fc8d8.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/images/style/style_search_image/Nike-Men-Tshirts_d271173afcd217dc13d8593593bd8f7d_images_180_240.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/assets/images/857337/2015/9/7/11441611518837-Nike-Green--Brown-Camouflage-Print-Jacket-6791441611518308-1.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    }
],
[
    {
      "src": "http://myntra.myntassets.com/image/style/properties/858349/Nike-Men-Sports-Shoes_1_e2448f6a3e289a46e70639b64cf8c344.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/image/style/properties/654422/Nike-Unisex-Red-Classic-Turf-Backpack_1_22f8fac15f04c395b2b9b21b681df2c6.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/image/style/properties/858398/Nike-Men-Sports-Shoes_1_79e81a7adb6cb890e53ec8d64a4fc8d8.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/images/style/style_search_image/Nike-Men-Tshirts_d271173afcd217dc13d8593593bd8f7d_images_180_240.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/assets/images/857337/2015/9/7/11441611518837-Nike-Green--Brown-Camouflage-Print-Jacket-6791441611518308-1.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    }
],
[
    {
      "src": "http://myntra.myntassets.com/image/style/properties/858349/Nike-Men-Sports-Shoes_1_e2448f6a3e289a46e70639b64cf8c344.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/image/style/properties/654422/Nike-Unisex-Red-Classic-Turf-Backpack_1_22f8fac15f04c395b2b9b21b681df2c6.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/image/style/properties/858398/Nike-Men-Sports-Shoes_1_79e81a7adb6cb890e53ec8d64a4fc8d8.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/images/style/style_search_image/Nike-Men-Tshirts_d271173afcd217dc13d8593593bd8f7d_images_180_240.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/assets/images/857337/2015/9/7/11441611518837-Nike-Green--Brown-Camouflage-Print-Jacket-6791441611518308-1.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    }
],
[
    {
      "src": "http://myntra.myntassets.com/image/style/properties/858349/Nike-Men-Sports-Shoes_1_e2448f6a3e289a46e70639b64cf8c344.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/image/style/properties/654422/Nike-Unisex-Red-Classic-Turf-Backpack_1_22f8fac15f04c395b2b9b21b681df2c6.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/image/style/properties/858398/Nike-Men-Sports-Shoes_1_79e81a7adb6cb890e53ec8d64a4fc8d8.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/images/style/style_search_image/Nike-Men-Tshirts_d271173afcd217dc13d8593593bd8f7d_images_180_240.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/assets/images/857337/2015/9/7/11441611518837-Nike-Green--Brown-Camouflage-Print-Jacket-6791441611518308-1.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    }
],
[
    {
      "src": "http://myntra.myntassets.com/image/style/properties/858349/Nike-Men-Sports-Shoes_1_e2448f6a3e289a46e70639b64cf8c344.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/image/style/properties/654422/Nike-Unisex-Red-Classic-Turf-Backpack_1_22f8fac15f04c395b2b9b21b681df2c6.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/image/style/properties/858398/Nike-Men-Sports-Shoes_1_79e81a7adb6cb890e53ec8d64a4fc8d8.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/images/style/style_search_image/Nike-Men-Tshirts_d271173afcd217dc13d8593593bd8f7d_images_180_240.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/assets/images/857337/2015/9/7/11441611518837-Nike-Green--Brown-Camouflage-Print-Jacket-6791441611518308-1.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    }
],
[
    {
      "src": "http://myntra.myntassets.com/image/style/properties/858349/Nike-Men-Sports-Shoes_1_e2448f6a3e289a46e70639b64cf8c344.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/image/style/properties/654422/Nike-Unisex-Red-Classic-Turf-Backpack_1_22f8fac15f04c395b2b9b21b681df2c6.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/image/style/properties/858398/Nike-Men-Sports-Shoes_1_79e81a7adb6cb890e53ec8d64a4fc8d8.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/images/style/style_search_image/Nike-Men-Tshirts_d271173afcd217dc13d8593593bd8f7d_images_180_240.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    },
    {
      "src": "http://myntra.myntassets.com/assets/images/857337/2015/9/7/11441611518837-Nike-Green--Brown-Camouflage-Print-Jacket-6791441611518308-1.jpg",
      "width": 800,
      "height": 430,
      "provider": "MYNT_ASSETS"
    }
]];

var first = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }).cloneWithRows(mosaic_data)
    };
  },

  render: function() {
    // return this.renderMosiac();
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderMosiac}
        style={styles.listView}
      />)
  },

  renderMosiac: function(){
    return (
      <View style={styles.container}>
        <Image source={{uri: mosaic_data[0][0].src}}
                style={styles.primaryImage}/>

          <View style={styles.inner_container}>
              <Image source={{uri: mosaic_data[0][1].src}}
                      style={styles.thumbnailTop}/>
              <Image source={{uri: mosaic_data[0][2].src}}
                      style={styles.thumbnailBottom}/>
          </View>
          <View style={styles.inner_container}>
              <Image source={{uri: mosaic_data[0][3].src}}
                      style={styles.thumbnailTop}/>
              <Image source={{uri: mosaic_data[0][4].src}}
                      style={styles.thumbnailBottom}/>
          </View>

      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FC00',
    height:450
  },
  primaryImage:{
    height:400,
    flex:2,
    margin:10
  },
  inner_container:{
    height:400,
    flexDirection:'column',
    flex: 1,
    marginRight:10,
    marginTop:10
  },
  inner_container2:{
    height:400,
    backgroundColor: '#0000ff',
    flexDirection:'column',
    flex: 1,
    margin:10,
    borderRadius:10
  },
  thumbnailTop: {
    flex:1,
    height: 200,
    borderWidth: 5,
    borderColor: '000000',
    marginBottom:10
  },
  thumbnailBottom: {
    flex:1,
    height: 200,
    borderRadius: 5,
    borderColor: '000000'
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('first', () => first);
