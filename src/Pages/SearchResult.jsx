import { Fragment, useMemo } from 'react';
import { useLocation } from "react-router-dom";
import Header from '../Components/Header';
import { useQuery } from "@tanstack/react-query";
import CountryData from '../Data/CountryData';
import CountryCard from '../Components/CountryCard';
import Loading from '../Utilities/Loading';
import "./SearchResult.css";
import Error from '../Utilities/Error';

export default function SearchResult() {
    const location = useLocation();
    const getParam = new URLSearchParams(location.search);
    const getData = getParam.get("s");

    const { data: searchedCountry, isLoading, error } = useQuery({
        queryKey: useMemo(() => ["search-country", getData], [getData]),
        queryFn: async () => await CountryData(`https://restcountries.com/v3.1/name/${getData}`),
        staleTime: 5000,
        cacheTime: 1000 * 60 * 5
    });

    return (
        <Fragment>
            <Header />
            <div className="result-wrap">
                <div className="indicator">Result for "{getData}"</div>
                <div className="result-content">
                    {isLoading && <Loading />}
                    {!searchedCountry || searchedCountry.length === 0 && `No Result for ${getData}`}
                    {!error ? <CountryCard data={searchedCountry} dataKey="searched-country" /> : 
                        <Error message={error.message}/>
                    }
                </div>
            </div>
        </Fragment>
    )
}
