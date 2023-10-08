export interface CurrencyValue {
  name: string;
  symbol: string;
}

interface NativeNameValue {
  official: string;
  common: string;
}

export interface CountryGeneral {
  cca3: string;
  name: {
    common: string;
  }
  population: number;
  region: string;
  capital: string;
  flags: {
    svg: string;
  }
}

export interface CountryDetail extends CountryGeneral {
  name: {
    common: string;
    native: string
  }
  subregion: string;
  topLevelDomain: string;
  currencies: string[];
  languages: string;
  borders: string[];
}

export interface CountryDetailResponse extends CountryGeneral {
  name: {
    common: string;
    nativeName: Record<string, NativeNameValue>;
  }
  subregion: string;
  tld: string[];
  currencies: Record<string, CurrencyValue>;
  languages: Record<string, string>;
  borders: string[];
}