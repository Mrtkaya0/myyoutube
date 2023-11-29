import axios from "axios"


// istek ile göndermmemiz gerekenKimliğimiz 
const options = {
  params:{geo: 'TR', lang: 'tr'
 },
    headers: {
      'X-RapidAPI-Key': '00788b38a8msh5c061cd9019e583p196158jsnf511a125b622',
      'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
    },
  };

//   todo base url tanımla
// bütün isteklerin(baseurl) başlangıcı olan urli tanımlama

axios.defaults.baseURL = 'https://yt-api.p.rapidapi.com';


// apiye verdiğimiz url için sitek atıp verileri döndüren fonksiyon


export const getData = async (url) => {
    try{
      const response = await axios.get(url, options);
      return response
    }catch (err) {
        console.log('verileri Çekerken hata oluştu',err)
    }
    
};

// getData('/home');
// getData('/FEED');
// getData('/category');