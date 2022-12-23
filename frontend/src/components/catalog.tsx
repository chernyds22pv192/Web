import '../css/catalog.css';
import { Card } from './card';
import React from 'react';
import { getMangas } from '../api/MangaApi';
import MangaData from '../models/Manga';

export function Catalog() {
    const [manga, setManga] = React.useState<[MangaData]>()
    React.useEffect(()=>{
        getMangas(setManga)
    },[])
    return <>
        <main>

            <div className="catalog">

                <div className="title">
                    Каталог
                </div>

                <div className="content row">

                    {manga?.map(data => <Card{...data} key={data.id} />) }

                </div>

            </div>

        </main>
    </>;
}