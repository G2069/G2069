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
        欢迎来到G-2069元宇宙, 古老的英雄将被召唤并战斗。召唤师可以进行种植,
        召唤和强化G-英雄,
        建立自己的团队并战斗以征服元世界。G-2069元宇宙是由玩家拥有的经济构建而成,
        在这里玩家可以真正拥有和交易通过游戏玩法和对生态系统的贡献所获得的资源和NFT。
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>G-英雄</h1>
        每个赛季将会推出12个独特的G-英雄,
        每个赛季推出的G-英雄将会有不同的外观以及装备,
        并且在发行以后的赛季将会只能通过市场交易获得。G-英雄将会有不同的属性和技能,
        特定的武器也能增强G-英雄的属性。
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>代币</h1>
        $GS是G-2069元宇宙的原生BEP-20币安智能链代币, 随着时间的推移,
        我们将通过回购代币和从铸造NFT收集的代币来减少其总供应。$GS可被用于平台治理投票,
        质押, 铸造NFT和下注。
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>游戏</h1>
        G-2069元宇宙拥有多样化的游戏模式。从种植, 收集素材, 完成任务,
        解锁游戏剧情, 刷BOSS, 下注到PvP。所有对G-2069元宇宙的贡献都会获得奖励。
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>去中心化 </h1>
        随着时间的推移, G-2069的所有权将随着$G102分配逐渐演变为去中心化的组织。
        当$G102的拥有权变得不那么集中, 开发团队和合作伙伴的拥有权也会递减。
        为了避免在早期发展阶段被恶意行为破坏生态系统的发展,
        开发团队将能以Play-to-Earn奖励和质押的分配份额投票。
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>NFT </h1>
        玩家可以通过铸造或购买盲盒集齐四种类型的NFT包括英雄, 装备,
        培养架和机器人! 每个G-英雄都有自己的外观, 稀有度,
        属性和技能。通过升级您的装备能提高您赢下比赛的胜率, 并增加获得的奖励。
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>路线图</h1>
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
              <li>NFT销售</li>
              <li>内测与公测</li>
              <li>种植和PVE模式的发布</li>
              <li>质押上线</li>
            </div>
          </div>
          <div className="container right">
            <div className="content">
              <p>Q3 2022</p>
              <li>结束公测</li>
              <li>PVP模式</li>
              <li>押注系统</li>
              <li>推出IOS和安卓应用程式</li>
              <li>拓展与公关公司和网红的合作</li>
            </div>
          </div>
          <div className="container right">
            <div className="content">
              <p>Q4 2022</p>
              <li>巅峰赛</li>
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
