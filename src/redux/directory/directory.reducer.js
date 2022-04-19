const INITIAL_STATE = {
    sections: [{
        title: 'hats',
        imageUrl: 'https://media0.giphy.com/media/TcZso45jTpRni/giphy.gif',
        id: 1,
        linkUrl: 'shop/hats'
    },
    {
        title: 'jackets',
        imageUrl: 'https://c.tenor.com/AyufOpuA8KUAAAAC/macklemore-thrift-shop.gif',
        id: 2,
        linkUrl: 'shop/jackets'
    },
    {
        title: 'sneakers',
        imageUrl: 'https://media.tenor.com/images/cfe96c0e5fb437a1f594255bd68e6145/tenor.gif',
        id: 3,
        linkUrl: 'shop/sneakers'
    },
    {
        title: 'womens',
        imageUrl: 'https://media2.giphy.com/media/LmN8OYiY4m0X85K0Zz/giphy.gif',
        size: 'large',
        id: 4,
        linkUrl: 'shop/womens'
    },
    {
        title: ' mens ',
        imageUrl: 'https://purewows3.imgix.net/images/articles/2016_01/sex_myth_shoes1.gif?auto=format,compress&cs=strip',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
    }]
}


const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
}
export default directoryReducer