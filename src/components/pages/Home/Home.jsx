import React from 'react';
import Gallery from '../Gallery/Gallery';
import Banner from '../Banner/Banner';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import OurSponsers from '../OurSponsers/OurSponsers';
import UpcomeingProducct from '../UpcomeingProduct/UpcomeingProducct';
import useTitle from '../../hooks/useTitle';

const Home = () => {
    useTitle("")
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <UpcomeingProducct></UpcomeingProducct>
            <OurSponsers></OurSponsers>
        </div>
    );
};

export default Home;
