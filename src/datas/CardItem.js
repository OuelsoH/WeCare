import React, {useState, useEffect} from 'react'
import Pagination from '../components/Pagination'
import card from '../assets/card.jpg'
import kid from '../assets/kid.jpg'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/4.jpg'
import Card from '../components/Card'
import '../styles/Card.css'

export const cardList = [ 
    {
        cover: img2,
        name: 'Orphelinat Saint-Etienne',
        address : 'Bonamoussadi, maison du plombier',
        contact : '+237 67898078',
        place: 'Douala',
        profiles: kid
    },
    {
        cover: img3,
        name: 'Orphelinat Dieu-done',
        address : 'PK13, Pharmacie Goodness',
        contact : '+237 66788078',
        place: 'Douala',
        profiles: img1
    },
    {
        cover: img1,
        name: 'Orphelinat Gracias',
        address : 'Damas, cathedrale de la lumiere',
        contact : '+237 67898078',
        place: 'Yaounde',
        profiles: card
    },
    {
        cover: img2,
        name: 'Orphelinat Saint-Etienne',
        address : 'Bonamoussadi, maison du plombier',
        contact : '+237 67898078',
        place: 'Douala',
        profiles: kid
    },
    {
        cover: img2,
        name: 'Orphelinat Saint-Etienne',
        address : 'Bonamoussadi, maison du plombier',
        contact : '+237 67898078',
        place: 'Douala',
        profiles: kid
    },
    {
        cover: img2,
        name: 'Orphelinat Saint-Etienne',
        address : 'Bonamoussadi, maison du plombier',
        contact : '+237 67898078',
        place: 'Douala',
        profiles: kid
    },
    {
        cover: img2,
        name: 'Orphelinat Saint-Etienne',
        address : 'Bonamoussadi, maison du plombier',
        contact : '+237 67898078',
        place: 'Douala',
        profiles: kid
    },
    {
        cover: img2,
        name: 'Orphelinat Saint-Etienne',
        address : 'Bonamoussadi, maison du plombier',
        contact : '+237 67898078',
        place: 'Douala',
        profiles: kid
    },
    {
        cover: img2,
        name: 'Orphelinat Saint-Etienne',
        address : 'Bonamoussadi, maison du plombier',
        contact : '+237 67898078',
        place: 'Douala',
        profiles: kid
    },
    {
        cover: img1,
        name: 'Orphelinat Gracias',
        address : 'Damas, cathedrale de la lumiere',
        contact : '+237 67898078',
        place: 'Yaounde',
        profiles: card
    },
    {
        cover: img2,
        name: 'Orphelinat Saint-Etienne',
        address : 'Bonamoussadi, maison du plombier',
        contact : '+237 67898078',
        place: 'Douala',
        profiles: kid
    },
    {
        cover: img2,
        name: 'Orphelinat Saint-Etienne',
        address : 'Bonamoussadi, maison du plombier',
        contact : '+237 67898078',
        place: 'Douala',
        profiles: kid
    },
    {
        cover: img2,
        name: 'Orphelinat Saint-Etienne',
        address : 'Bonamoussadi, maison du plombier',
        contact : '+237 67898078',
        place: 'Douala',
        profiles: kid
    },
    {
        cover: img3,
        name: 'Orphelinat Dieu-done',
        address : 'PK13, Pharmacie Goodness',
        contact : '+237 66788078',
        place: 'Douala',
        profiles: img1
    },
    {
        cover: img3,
        name: 'Orphelinat Dieu-done',
        address : 'PK13, Pharmacie Goodness',
        contact : '+237 66788078',
        place: 'Douala',
        profiles: img1
    },
    {
        cover: img3,
        name: 'Orphelinat Dieu-done',
        address : 'PK13, Pharmacie Goodness',
        contact : '+237 66788078',
        place: 'Douala',
        profiles: img1
    },
    {
        cover: img3,
        name: 'Orphelinat Dieu-done',
        address : 'PK13, Pharmacie Goodness',
        contact : '+237 66788078',
        place: 'Douala',
        profiles: img1
    },
    {
        cover: kid,
        name: 'Orphelinat main dans la main',
        address : 'Bonamoussadi, Rondpoint maetur',
        contact : '+237 61598078',
        place: 'Yaounde',
        profiles: img2
    },
    {
        cover: img1,
        name: 'Orphelinat Gracias',
        address : 'Damas, cathedrale de la lumiere',
        contact : '+237 67898078',
        place: 'Yaounde',
        profiles: card
    },
    
]

const CardItem = () => {
    
//   const cards = cardList
  const [cardsAxios, setCardsAxios] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(6);

  useEffect(() => {
      const fetchCard = async () => {
        console.log('useEffect')
        try{
        setLoading(true);
          const res = await fetch('http://localhost:3001/api/user')
          const response =await res.json()
          setCardsAxios(response.users)
    
        }catch(err){
            console.log(err)
        }finally{
             setLoading(false);
        }
         
      }
      fetchCard();
  }, []);

  
      console.log(cardsAxios)

  //Get currents cards
  const indexofLastCard = currentPage * cardsPerPage;
  const indexofFirstCard = indexofLastCard - cardsPerPage;
  const currentCards = cardsAxios.slice(indexofFirstCard, indexofLastCard);


  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
 
  return (
    <div className='content'>
        <div className='head'>
            <label>
                <p className='label-text'>
                Trier
                </p>
                <select name='trie'>
                    <option>Option 1</option>
                    <option>Option 2</option>
                </select>
            </label>
            <label>
                <p className='label-text'>
                    Nom
                </p>
                <input type='text' />
            </label>
            <label>
                <p className='label-text'>
                Ville
                </p>
                <select name='trie'>
                    <option>Option 1</option>
                    <option>Option 2</option>
                </select>
            </label>
            <label>
                <p className='label-text'>
                Region
                </p>
                <select name='trie'>
                    <option>Option 1</option>
                    <option>Option 2</option>
                </select>
            </label>
            <button className='button h-button'>Rechercher</button>
        </div>
        <div className='card'>
            {currentCards.map((profile, index) => (
                <Card data={profile} id={index} loading={loading} />
            ))}
            {/* <Card cardsAxios={currentCards} loading={loading} /> */}
        </div>
        <Pagination cardsPerPage={cardsPerPage} totalCards={cardsAxios.length} paginate={paginate}  />
    </div>
  )
}

export default CardItem