import React from 'react';
import bgm_img from '../assets/world-map/12232.jpg'

const Home = () => {
    return (
        <div
      style={{
        // background: '#99CCFF',
        // background: 'linear-gradient(90deg, rgba(235,237,237,1) 0%, rgba(212,232,232,1) 100%)',
        display: 'flex',
        // justifyContent: 'Left',
        // alignItems: 'Left',
        height: '100vh'
      }}
    >
      <div 
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        backgroundImage: `url(${bgm_img})`,
        borderRadius: 10,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginTop: 50,
        marginLeft: 100,
        marginRight: 100,
        marginBottom: 100,
        }}>
        <div
        style={{
          marginTop: 50,
          borderRight: 'none',
          marginLeft: 50,
          marginBottom: 50,
          backgroundColor: '#FFFFFF',
          borderRadius: 10
        }}>
          {/* <h3
          style={{
            color: '#4abbc3',
            paddingLeft: 50,
            paddingTop: 40,
            fontSize: 30,
          }}>Welcome to Vaccine Clinic</h3> */}
          <p
          style={{
            color: '#0080FF',
            paddingLeft: 50,
            paddingRight: 10,
            paddingTop: 20,
            fontSize: 45,
            fontWeight: 'bold',
          }}>Let's learn about countries!
          </p>
          <p
          style={{
            color: '#000000',
            paddingLeft: 50,
            paddingRight: 10,
            paddingTop: 5,
            fontSize: 20,
            alignItems: 'justify'
          }}>The world is a book, and those who do not travel read only a page.
          </p>
            <p
            style={{
                color: '#000000',
                paddingLeft: 400,
                paddingRight: 10,
                paddingTop: 5,
                fontSize: 20,
                fontWeight: 'bold',
                // alignItems: 'justify'
            }}>~ Saint Augustine
            </p>
          <a href="/search">
            <button type="button" style={{
              backgroundColor: '#0080FF',
              color: 'white',
              marginLeft: 50,
              marginTop: 20,
              marginBottom: 20,
              fontSize: 20,
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 10,
              paddingBottom: 10,
              border: 'none',
              borderRadius: 10,
              }}>Search Countries</button>
          </a>
        </div>
        <div
        style={{
          marginRight: 20
        }}>
        {/* <img src={vaccine} alt="vaccine" style={{ width: '70%', height: '70%' }} /> */}
        </div>
      </div>

    </div>
    );
    };

export default Home;