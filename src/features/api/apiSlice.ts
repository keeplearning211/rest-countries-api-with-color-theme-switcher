import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CountryDetail, CountryGeneral, CountryDetailResponse } from '../../type';

export const apiSlice = createApi({
  reducerPath: 'countriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1' }),
  endpoints: (builder) => ({
    getAllCountries: builder.query<CountryGeneral[], void>({
      query: () => 'all?fields=cca3,name,population,region,capital,flags',
    }),
    getCountryByCode: builder.query<CountryDetail | null, string>({
      query: (code) => `alpha/${code}?fields=flags,name,population,region,subregion,tld,capital,currencies,languages,borders`,
      transformResponse: (responseData: CountryDetailResponse) => {
        try {
          const country = parseCountryDetailResponse(responseData)
          console.log("🚀 ~ file: apiSlice.ts:29 ~ country:", country)
          return country
        } catch (error) {
          console.log("🚀 ~ file: apiSlice.ts:33 ~ error:", error)
          return null
        }
      }
    }),
  }),
});

export const { useGetAllCountriesQuery, useGetCountryByCodeQuery } = apiSlice

function parseCountryDetailResponse(responseData: CountryDetailResponse): CountryDetail {
  // Extract the first native name
  const nativeNameKey = Object.keys(responseData.name.nativeName)[0];
  const nativeName = responseData.name.nativeName[nativeNameKey].official;

  // Convert the currencies and languages records into arrays
  const currencies = Object.values(responseData.currencies).map(currency => currency.name);
  const languages = Object.values(responseData.languages).join(', ');

  // Construct the CountryDetail object
  const countryDetail: CountryDetail = {
    ...responseData, // Spread the properties of responseData
    name: {
      common: responseData.name.common,
      native: nativeName,
    },
    topLevelDomain: responseData.tld.join(', '),
    currencies: currencies,
    languages: languages,
  };

  return countryDetail;
}