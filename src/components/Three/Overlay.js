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
        and battle here. Players aim to farm, summon, enhance, battle, and build
        their teams to conquer the metaverse. The G-2069 Metaverse is built by a
        player-owned economy where players can truly own and trade the resources
        and NFTs they earned through the gameplay and their contributions to the
        ecosystem.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>G-heroes</h1>
        There are 12 unique G-Heroes that players can summon in each season with
        varying equipment and appearances. Equipment will enhance the stats of
        G-Heroes, they will also have different values, skills, and stats.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>Token</h1>
        $GS is the primary token to the game and resides in BSC blockchain. It
        will serves as a deflationary token which its total supply will be
        decreased overtime thru burning from token buyback and token collected
        from minting NFTs. $GS will serve the function for payment, minting
        NFTs, staking, and governance.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>Gameplay</h1>
        Multiple gameplay will be available in G-2069 metaverse. From farming, ,
        gathering resources, completing quests, unlocking in-depth storylines,
        killing bosses, betting to PvP. Every contribution to the G-2069
        metaverse will be rewarded respectively.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>Decentralization</h1>
        G-2069 will gradually evolve into a decentralised organisation as
        ownership of $G102 is dispersed. As $G102 is distributed among players
        and stakeholders, ownership of the developer team and partnerships
        becomes less concentrated over time. The Dev Team will be able to vote
        on the allocation of Play to Earn and Staking rewards. This will keep
        hostile actors from disrupting the ecosystem during its crucial early
        stages of development.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>NFT </h1>
        Four types of NFTs including heroes, equipments, racks and workers can
        be obtained from minting or Gacha box! Each heroes have their own stats,
        rarity, and abilities. Upgrade your equipments to stand higher chances
        in winning in matches. Expand racks to yield more rewards !
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
