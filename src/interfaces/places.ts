// Generated by https://quicktype.io

export interface PlacesResponse {
    type:        string;
    query:       string[];
    features:    Feature[];
    attribution: string;
}

export interface Feature {
    id:         string;
    type:       string;
    place_type: string[];
    relevance:  number;
    properties: Properties;
    text:       string;
    place_name: string;
    bbox?:      number[];
    center:     number[];
    geometry:   Geometry;
    context:    Context[];
}

export interface Context {
    id:          string;
    short_code?: ShortCode;
    wikidata?:   string;
    text:        string;
}

export enum ShortCode {
    Ar = "ar",
    ArB = "AR-B",
}

export interface Geometry {
    type:        string;
    coordinates: number[];
}

export interface Properties {
    wikidata?:            string;
    accuracy?:            string;
    "override:postcode"?: string;
}
