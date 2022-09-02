interface ILocation{
    locationCountry:string,
    locationCity:string,
}

export interface IPlace {
    description:string;
    imgUrl:string;
    location:ILocation;
    slug:string;
    rating: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    duration:number;
}


export interface IFavorite {
    slug:string;
    name:string
}

