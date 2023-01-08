import React from 'react';
import './Homepage.css';

const Homepage = ({onRouteChange, startGame}) => {
  return (
    <div className='outer-div'>
      <div className='top'>
        <h4>TRAIN YOUR POKEMONS</h4>
        <h4 className='h4-red'>BATTLE GYM LEADERS</h4>
      </div>
      <div className='main-div'>
        <div className='left'>
          <div className='left-bg'>
            <div className='inside-left-bg'>
              <img src="https://cdn-icons-png.flaticon.com/512/189/189001.png" alt="snorlax" className='left-img'/>
              <img src="https://cdn-icons-png.flaticon.com/512/189/189015.png" alt="pokeball" className='homepage-icon'/>
              <p>catch pokemon</p>
              <img src="https://cdn-icons-png.flaticon.com/512/188/188921.png" alt="pokeball" className='homepage-icon gotcha'/>
            </div>
          </div>
        </div>

        <div className='middle'>
          <div className='middle-bg'>
            <div className='middle-badge'>
              <div className='middle-bg-inside'>
                <div className='badge-bg badge-1'>
                  <img className='homepage-icon badge-icon' 
                  src="https://archives.bulbagarden.net/media/upload/thumb/9/9b/Rain_Badge.png/100px-Rain_Badge.png" alt="badge1"/>
                </div>
                <div className='badge-bg badge-2'>
                  <img className='homepage-icon badge-icon' 
                  src="https://archives.bulbagarden.net/media/upload/thumb/1/12/Volcano_Badge.png/100px-Volcano_Badge.png" alt="badge2"/>
                </div>
                <div className='badge-bg badge-3'>
                  <img className='homepage-icon badge-icon' 
                  src="https://archives.bulbagarden.net/media/upload/thumb/6/6b/Marsh_Badge.png/1200px-Marsh_Badge.png" 
                  alt="badge3"/>
                </div>
              </div>
              <h4>collect badges</h4>
            </div>
            <div className='start'>
              <img className='triangle animate__animated animate__infinite animate__headShake' src="https://cdn-icons-png.flaticon.com/512/556/556701.png" alt="start"/>
              <div>
                <h2 
                  className='start-button'
                  onClick={() => {
                    onRouteChange('create-user');
                    startGame();
                  }}
                  >START</h2>
                <p>CATCH EM ALL</p>
              </div>
            </div>

            <div className='buddies'>
              <div className='pokemon-square squirtle-ps'>
                <div className='inside-square squirtle-is'>
                  <div className='round'>
                    <img className='buddy-icon animate__animated animate__tada animate__infinite' src="https://cdn-icons-png.flaticon.com/512/188/188988.png"/>
                  </div>
                </div>
              </div>
              <div className='pokemon-square charmander-ps'>
                <div className='inside-square charmander-is'>
                  <div className='round'>
                    <img className='buddy-icon animate__animated animate__tada animate__infinite' src="https://cdn-icons-png.flaticon.com/512/188/188990.png"/>
                  </div>
                </div>
              </div>
              <div className='pokemon-square bulb-ps'>
                <div className='inside-square bulb-is'>
                  <div className='round'>
                    <img className='buddy-icon animate__animated animate__tada animate__infinite' src="https://cdn-icons-png.flaticon.com/512/188/188989.png"/>
                  </div>
                </div>
              </div>
            </div>

            <h5>PICK YOUR #1 BUDDY</h5>
          </div>

        </div>

        <div className='right'>
          <div className='pokemon-banner'>
            <img 
              className='homepage-icon' 
              src="https://cdn-icons-png.flaticon.com/512/287/287221.png"
              alt="pokeball" 
              />
            <h2 className='banner-battle'>BATTLE</h2>
          </div>
          <div className='gym-leaders'>
            <div className='bg-square-gl elesa'>
              <div className='inner-square-gl'>
                <div className='gl-round'>
                  <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/462e9dfc-080f-4390-9a60-e970414b9c2e/dcxtxg3-3c14b01f-b8ad-43a5-9db1-f379e0b0ffc3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ2MmU5ZGZjLTA4MGYtNDM5MC05YTYwLWU5NzA0MTRiOWMyZVwvZGN4dHhnMy0zYzE0YjAxZi1iOGFkLTQzYTUtOWRiMS1mMzc5ZTBiMGZmYzMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.oJ4Kt9P6KLXev5Z7MGcfcF9ScCPK_Tp61T1-N3OqkQ0" 
                  alt="gym-leader" className='gl-avatar'/>
                </div>
                <div className='name-label-div'>
                  <p>ELESA</p>
                </div>
              </div>
            </div>
            <div className='bg-square-gl lance'>
              <div className='inner-square-gl'>
                <div className='gl-round'>
                  <img 
                    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/462e9dfc-080f-4390-9a60-e970414b9c2e/dcy36x3-276a5f1a-a209-4beb-8923-c069733f79d8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ2MmU5ZGZjLTA4MGYtNDM5MC05YTYwLWU5NzA0MTRiOWMyZVwvZGN5MzZ4My0yNzZhNWYxYS1hMjA5LTRiZWItODkyMy1jMDY5NzMzZjc5ZDgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.LxV5-Rhv0VLfe280-KsJKpd-5ZogTBPxcq_Z8GEGco8"
                    alt="gym-leader" 
                    className='gl-avatar'/>
                </div>
                <div className='name-label-div'>
                  <p>LANCE</p>
                </div>
              </div>
            </div>
            <div className='bg-square-gl clair'>
              <div className='inner-square-gl'>
                <div className='gl-round'>
                  <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/462e9dfc-080f-4390-9a60-e970414b9c2e/dcxsg61-aded7564-68e8-411f-9bc1-dd1905f53852.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ2MmU5ZGZjLTA4MGYtNDM5MC05YTYwLWU5NzA0MTRiOWMyZVwvZGN4c2c2MS1hZGVkNzU2NC02OGU4LTQxMWYtOWJjMS1kZDE5MDVmNTM4NTIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.k0c10OWNGhaYdzjkup5f6-uMGOMSwhRFqr8ZoROVvb8" 
                    alt="gym-leader" 
                    className='gl-avatar'/>
                </div>
                <div className='name-label-div'>
                  <p>CLAIR</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Homepage;