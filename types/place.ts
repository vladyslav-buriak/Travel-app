interface ILocation{
    locationCountry:string,
    locationCity:string,
}

export interface IPlace {
    description:string;
    imgUrl:string;
    location:ILocation;
    slug:string;
}