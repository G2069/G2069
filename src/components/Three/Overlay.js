import React, { forwardRef } from "react"

const Overlay = forwardRef(({ scroll }, ref) => (
  <div
    ref={ref}
    onScroll={e => {
      scroll.current =
        e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
    }}
    className="scroll"
  >
    <div style={{ height: "400vh" }}>
      <div className="dot">
        <h1>G-2069</h1>
        <h1>Intro</h1>
        Welcome to G-2069 metaverse where ancient heroes are found to be cloned
        to battle here. Players will be able to own lands to farm and trade
        harvested crops for materials to craft or upgrade heroes and weapons.
        Workers will be available to players to help in land farming or collect
        resources in factories. Heroes and weapons will be required to particate
        in PvE and PvP. Asides from methods above, players can choose to engage
        in the betting system for rewards.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>G-heroes</h1>
        12 unique heroes in each season will be available to be collected. Each
        season comes with a different theme. In first season, G-heroes are
        inspired by the heroic characteristics of three kingdom dynasty's heroes
        and will to conquer the world, align to mission of G-2069, to save the
        G-2069 metaverse!
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>Token</h1>
        $G102 is the primary token to the game and resides in BSC blockchain.
        Moreover, it will serves as a deflationary token which we aim to
        decrease its total supply overtime thru burning from token buyback and
        token collected from minting NFTs. $G102 will serve the function for in
        game purchase, minting NFTs, staking, governance, and betting.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>Load your wallet</h1>
        In G-2069 metaverse, we are set up for the purpose to load up your
        wallet through play-to-earn mechanism. Players will be rewarded by
        participating in farming, PvE/PvP and betting.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>Go big or go home! </h1>
        Betting feature will provides a medium for players to participate in
        G-2069 without having hands-on playing while players can also choose
        stake $G102 in the price pool and enter PvP with other players in the
        metaverse.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>NFT </h1>
        Four types of NFTs including heroes, weapons, lands and workers from
        farming or Gatcha! Each heroes have their own affinities, classes,
        rarity, and abilities. Upgrade your weapons to stand higher chances in
        winning in matches. Expand lands to yield more rewards in a same time
        period.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>Roadmap</h1>
        <div className="timeline">
          <div className="container right">
            <div className="content">
              <p>Q1 2022</p>
              <li>Launch of official website</li>
              <li>Release of game trailer</li>
              <li>Presale</li>
              <li>Contract Auditing</li>
            </div>
          </div>
          <div className="container right">
            <div className="content">
              <p>Q2 2022</p>
              <li>IDO</li>
              <li>Land and NFT sale</li>
              <li>Alpha and beta test</li>
              <li>Release of Farm and PVE mode</li>
              <li>Staking</li>
            </div>
          </div>
          <div className="container right">
            <div className="content">
              <p>Q3 2022</p>
              <li>End of Beta Testing</li>
              <li>Release of PVP mode</li>
              <li>Release of Betting system</li>
              <li>Launch of mobile app</li>
              <li>
                Extend collaboration and partnership with PR companies and
                influencers
              </li>
            </div>
          </div>
          <div className="container right">
            <div className="content">
              <p>Q4 2022</p>
              <li>Seasonal ranking</li>
              <li>New Season Character</li>
              <li>Launch team PVP mode</li>
              <li>Development of AR and VR</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
))

export default Overlay
