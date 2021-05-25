import {getKidsList} from '../tmdbRequests';

export const MenuItems = 
        [
    {
        title: 'Home',
        url: '',
        link: 'link-style'
    },
    {
        title: 'TV Shows',
        url: '',
        link: 'link-style'
    },
    {
        title: 'Movies',
        url: '',
        link: 'link-style'
    },
    {
        title: 'New & Popular',
        url: '',
        link: 'link-style'
    },
    {
        title: 'Kids',
        url: {getKidsList},
        link: 'link-style'
    },
    {
        title: 'Report Bugs',
        url: 'https://github.com/JessicaCodes',
        link: 'link-style'
    },
   

    
        // <label htmlFor="search">Search Getflix</label>
        // <input type="text" value={props.inputValue} onChange={}/>
        // // url: '#',
        // // link: 'link-style'
    ,
    
]

    