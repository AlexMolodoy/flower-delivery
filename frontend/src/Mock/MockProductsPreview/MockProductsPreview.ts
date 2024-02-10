import { TProduct } from '../../types.ts'

import product1L from '../../assets/Product_1_image.png'
import product2L from '../../assets/Product2_L_image.png'
import product2S from '../../assets/Product2_L_image.png'

const photos = [
    { id: 1, photos: [product1L, product1L, product1L, product1L, product1L] },
    { id: 2, photos: [product2L, product2S, product2S, product2S, product2S] },
    { id: 3, photos: [product1L, product1L, product1L, product1L, product1L] },
    { id: 4, photos: [product2L, product2S, product2S, product2S, product2S] },
    { id: 5, photos: [product1L, product1L, product1L, product1L, product1L] },
    { id: 6, photos: [product2L, product2S, product2S, product2S, product2S] },
    { id: 7, photos: [product1L, product1L, product1L, product1L, product1L] },
    { id: 8, photos: [product2L, product2S, product2S, product2S, product2S] },
]

export const ProductsData: TProduct[] = [
    {
        id: '1',
        title: 'HUGS & KISSES',
        price: '100$',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.',
        imagePath: [product1L, product1L, product1L, product1L, product1L],
    },
    {
        id: '2',
        title: 'HUGS & KISSES3',
        price: '300$',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.',
        imagePath: [product2L, product2S, product2S, product2S, product2S],
    },
    {
        id: '3',
        title: 'HUGS & KISSES3',
        price: '300$',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.',
        imagePath: [product1L, product1L, product1L, product1L, product1L],
    },
    {
        id: '4',
        title: 'HUGS & KISSES4',
        price: '400$',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.',
        imagePath: [product2L, product2S, product2S, product2S, product2S],
    },
    {
        id: '5',
        title: 'HUGS & KISSES5',
        price: '500$',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.',
        imagePath: [product1L, product1L, product1L, product1L, product1L],
    },
    {
        id: '6',
        title: 'HUGS & KISSES6',
        price: '600$',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.',
        imagePath: [product2L, product2S, product2S, product2S, product2S],
    },
    {
        id: '7',
        title: 'HUGS & KISSES7',
        price: '700$',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.',
        imagePath: [product1L, product1L, product1L, product1L, product1L],
    },
    {
        id: '8',
        title: 'HUGS & KISSES 8',
        price: '800$',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.',
        imagePath: [product2L, product2S, product2S, product2S, product2S],
    },
]
