export const countryList = [{
  id: 0,
  name: 'Abu Dhabi'
}, {
  id: 1,
  name: 'Dubai'
}, {
  id: 2,
  name: 'Sharjah & Ajman'
}, {
  id: 3,
  name: 'Fujairah'
}, {
  id: 4,
  name: 'Ras Al Khaimah'
}, {
  id: 5,
  name: 'Umm Al Quwain'
}];

export default function List() {
  const listItems = countryList.map(country =>
    
    <li className="w-full md:w-50 my-2 md:pl-2" key={country.id}>
        <a className="flex justify-center items-center w-full no-underline rounded-md p-4" href="/">{country.name}</a>
    </li>

  );
  return listItems;
}