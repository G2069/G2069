import React, { forwardRef } from "react"

const OverlayZh = forwardRef(({ scroll }, ref) => (
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
        <h1>简介</h1>
        欢迎来到G-2069元宇宙, 在这里, 古代英雄被克隆并被召唤
        在这里战斗。玩家将能够拥有培养架以种植种子以
        获得$GE用来制作或升级英雄和武器。 工人将提供给玩家帮助耕作或收集
        资源工厂。英雄和武器将需要参与
        在PvE和PvP中。除了上述方法外,玩家还可以选择参与其中 在赌博系统中的奖励。
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>G-heroes</h1>
        每个赛季将会有12个G-英雄并拥有不同的主题。在第一赛季，G-英雄的元素是启发与三国英雄的特征。
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>代币</h1>
        $G102将会作为G-2069的主要代币并在币安链发行。
        此外，它将起到通缩的象征作用，这是我们的目标
        通过从代币回购和燃烧超时减少其总供应
        令牌收集从铸造NFTs。$G102将用于in的功能
        游戏购买、铸造NFTs、押注、管理和投注。
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>边玩边赚</h1>
        ...
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>下注 </h1>
        投注功能将为玩家提供一个参与的媒介 G-2069不需要亲身体验，玩家也可以选择
        在价格池中投入$G102，并与其他玩家进入PvP模式 元宇宙
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>NFT </h1>
        四种类型的nft包括英雄、武器、土地和工人 农业或Gatcha
        !每个英雄都有自己的特征，阶级， 稀有和能力。升级你的武器站在更高的机会
        赢得比赛。在同一时间内扩大土地以获得更多奖励 时期。
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>Roadmap</h1>
        <div className="timeline">
          <div className="container right">
            <div className="content">
              <p>Q1 2022</p>
              <li>官方网站上线</li>
              <li>游戏预告片发布</li>
              <li>预售</li>
              <li>合同审核</li>
            </div>
          </div>
          <div className="container right">
            <div className="content">
              <p>Q2 2022</p>
              <li>IDO</li>
              <li>Land and NFT sale</li>
              <li>Alpha and beta test</li>
              <li>Farm和PVE模式的发布</li>
              <li>质押开放</li>
            </div>
          </div>
          <div className="container right">
            <div className="content">
              <p>Q3 2022</p>
              <li>End of Beta Testing</li>
              <li>PVP模式</li>
              <li>押注系统</li>
              <li>推出IOS和安卓应用程式</li>
              <li>拓展与公关公司和网红的合作</li>
            </div>
          </div>
          <div className="container right">
            <div className="content">
              <p>Q4 2022</p>
              <li>赛季排位</li>
              <li>推出新的G-英雄</li>
              <li>推出组队PvP模式</li>
              <li>开发AR和VR玩法</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
))

export default OverlayZh
