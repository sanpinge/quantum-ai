// ═══ 量子 AI 多语言 · zh / en / ja / ko ═══
const I18N = {
  // ── Nav ──
  'nav.overview':   { zh: '概览', en: 'Overview', ja: '概要', ko: '개요' },
  'nav.kline':      { zh: 'K 线', en: 'Chart', ja: 'チャート', ko: '차트' },
  'nav.trades':     { zh: '交易', en: 'Trades', ja: '取引', ko: '거래' },
  'nav.my':         { zh: '我的', en: 'My', ja: 'マイ', ko: '내 정보' },
  'brand.sub':      { zh: 'AUTONOMOUS TRADING AGENT', en: 'AUTONOMOUS TRADING AGENT', ja: '自律型トレーディングエージェント', ko: '자율 트레이딩 에이전트' },

  // ── Hero ──
  'hero.model':     { zh: 'MODEL · V2.3', en: 'MODEL · V2.3', ja: 'モデル · V2.3', ko: '모델 · V2.3' },
  'hero.title':     { zh: 'AI 智能体自主交易中', en: 'AI Agent Trading Autonomously', ja: 'AI エージェント自律取引中', ko: 'AI 에이전트 자율 트레이딩 중' },
  'hero.desc':      {
    zh: '神经决策 · 全天候扫描 · 链上透明',
    en: 'Neural decisioning · 24/7 · on-chain',
    ja: '神経判断 · 24/7 · オンチェーン透明',
    ko: '신경 판단 · 24/7 · 온체인 투명'
  },
  'hero.slogan':    {
    zh: 'AI 自主交易智能体 · 神经决策 · 全天候扫描',
    en: 'Autonomous AI trading agent · neural · 24/7',
    ja: 'AI 自律トレーディングエージェント · 神経判断 · 24/7',
    ko: 'AI 자율 트레이딩 에이전트 · 신경 판단 · 24/7'
  },
  'hero.f.left':    { zh: '收益', en: 'Return', ja: 'リターン', ko: '수익' },
  'hero.f.t1':      { zh: '复合策略', en: 'Composite', ja: '複合戦略', ko: '복합 전략' },
  'hero.f.t2':      { zh: '神经决策', en: 'Neural', ja: '神経判断', ko: '신경 판단' },
  'hero.f.t3':      { zh: '24/7', en: '24/7', ja: '24/7', ko: '24/7' },
  'hero.cta1':      { zh: '开始注资 →', en: 'Start Depositing →', ja: '注資開始 →', ko: '입금 시작 →' },
  'hero.cta2':      { zh: '查看策略', en: 'View Strategy', ja: '戦略を見る', ko: '전략 보기' },
  'metric.fund':    { zh: '基金池', en: 'Fund Pool', ja: 'ファンドプール', ko: '펀드풀' },
  'metric.profit':  { zh: '收益池', en: 'Profit Pool', ja: '収益プール', ko: '수익풀' },
  'metric.roi':     { zh: '30日 收益率', en: '30D Return', ja: '30日 リターン', ko: '30일 수익률' },
  'metric.trades':  { zh: '累计交易 笔', en: 'Total Trades', ja: '累計取引 件', ko: '누적 거래 건' },

  // ── Showcase Gallery ──
  'show.title':     { zh: 'Agent 六大能力', en: 'Six Agent Capabilities', ja: 'エージェント 6 大能力', ko: '에이전트 6대 능력' },
  'show.note':      { zh: '从分析到执行 · 全景可视化', en: 'Analysis to execution · full visualization', ja: '分析から実行まで · 全景可視化', ko: '분석부터 실행까지 · 전경 시각화' },
  'show.badge':     { zh: '示例数据', en: 'Sample data', ja: 'サンプルデータ', ko: '예시 데이터' },
  'show.c0.t':      { zh: '综合评估', en: 'Overall Assessment', ja: '総合評価', ko: '종합 평가' },
  'show.c0.d':      { zh: 'Agent 六维能力雷达图', en: '6-axis capability radar', ja: 'エージェント六次元能力レーダー', ko: '에이전트 6차원 능력 레이더' },
  'show.c1.t':      { zh: '策略权重', en: 'Strategy Mix', ja: '戦略ウェイト', ko: '전략 비중' },
  'show.c1.d':      { zh: '5 大策略贡献占比', en: '5 strategies · contribution ratio', ja: '5 大戦略の貢献比率', ko: '5대 전략 기여 비율' },
  'show.c2.t':      { zh: '月度回报', en: 'Monthly Returns', ja: '月次リターン', ko: '월별 수익' },
  'show.c2.d':      { zh: '近 12 个月净值变化 · 10/12 正', en: '12-month equity · 10/12 positive', ja: '12ヶ月の資産推移 · 10/12 プラス', ko: '12개월 순자산 · 10/12 플러스' },
  'show.c3.t':      { zh: '回撤曲线', en: 'Drawdown', ja: 'ドローダウン', ko: '드로다운' },
  'show.c3.d':      { zh: '最大回撤 -16.7% · 快速修复', en: 'Max DD -16.7% · fast recovery', ja: '最大 DD -16.7% · 早期回復', ko: '최대 DD -16.7% · 빠른 복구' },
  'show.c4.t':      { zh: '杠杆分布', en: 'Leverage Distribution', ja: 'レバレッジ分布', ko: '레버리지 분포' },
  'show.c4.d':      { zh: '按资金规模自动匹配 · 5 档', en: 'Auto-tiered by capital · 5 levels', ja: '資金規模で自動調整 · 5 段階', ko: '자본별 자동 매칭 · 5단계' },
  'show.c5.t':      { zh: '恐慌指数', en: 'Fear Index', ja: '恐慌指数', ko: '공포 지수' },
  'show.c5.d':      { zh: '市场情绪实时监测 · 62 偏谨慎', en: 'Market sentiment · 62 cautious', ja: '市場センチメント · 62 慎重', ko: '시장 심리 · 62 신중' },
  'show.c6.t':      { zh: '持仓时长', en: 'Hold Duration', ja: '保有時間', ko: '보유 시간' },
  'show.c6.d':      { zh: '218 笔交易按时长分布', en: '218 trades · duration distribution', ja: '218 取引の保有時間分布', ko: '218건 거래 시간 분포' },

  // ── Pools ──
  'pool.fund':      { zh: '基金池 · Fund', en: 'Fund Pool', ja: 'ファンドプール', ko: '펀드풀' },
  'pool.fund.cap':  { zh: '累计入金 · 214 笔', en: 'Cumulative deposits · 214', ja: '累計入金 · 214 件', ko: '누적 입금 · 214건' },
  'pool.profit':    { zh: '收益池 · Profit', en: 'Profit Pool', ja: '収益プール', ko: '수익풀' },
  'pool.profit.cap':{ zh: '净利 · 亏损自动扣', en: 'Net profit · loss auto-deducted', ja: '純利益 · 損失自動控除', ko: '순이익 · 손실 자동 차감' },
  'pool.roi':       { zh: '近 30 日收益率', en: '30-Day Return', ja: '直近 30 日リターン', ko: '최근 30일 수익률' },
  'pool.roi.cap':   { zh: '全平台月化平均', en: 'Platform monthly avg', ja: 'プラットフォーム月次平均', ko: '플랫폼 월평균' },

  // ── Agent panel ──
  'agent.header':   { zh: 'AGENT · NEURAL', en: 'AGENT · NEURAL', ja: 'AGENT · NEURAL', ko: 'AGENT · NEURAL' },
  'agent.name':     { zh: 'QUANTUM AGENT · v2.3', en: 'QUANTUM AGENT · v2.3', ja: 'QUANTUM AGENT · v2.3', ko: 'QUANTUM AGENT · v2.3' },
  'agent.status':   { zh: 'NEURAL ACTIVE · SCANNING', en: 'NEURAL ACTIVE · SCANNING', ja: 'NEURAL ACTIVE · SCANNING', ko: 'NEURAL ACTIVE · SCANNING' },
  'agent.uptime':   { zh: 'Uptime', en: 'Uptime', ja: '稼働時間', ko: '가동시간' },
  'agent.latency':  { zh: 'Latency', en: 'Latency', ja: '遅延', ko: '지연' },
  'agent.signals':  { zh: 'Signals / 24h', en: 'Signals / 24h', ja: 'シグナル / 24h', ko: '신호 / 24h' },
  'agent.winrate':  { zh: 'Win Rate', en: 'Win Rate', ja: '勝率', ko: '승률' },
  'agent.trades':   { zh: 'Trades Total', en: 'Trades Total', ja: '取引総数', ko: '총 거래' },
  'agent.pf':       { zh: 'Profit Factor', en: 'Profit Factor', ja: 'プロフィットファクター', ko: '수익률 지수' },

  // ── Agent feed ──
  'feed.title':     { zh: 'Agent 决策实时日志', en: 'Agent Live Decision Log', ja: 'エージェント意思決定ライブログ', ko: '에이전트 실시간 결정 로그' },
  'feed.msg1':      { zh: '策略 1 · 神经模块扫描 · 无信号', en: 'Strategy 1 · Neural scanning · no signal', ja: '戦略 1 · 神経モジュールスキャン · 信号なし', ko: '전략 1 · 신경 모듈 스캔 · 신호 없음' },
  'feed.msg2':      { zh: '策略 3 · 触发做空信号 · 待执行', en: 'Strategy 3 · Short signal · pending', ja: '戦略 3 · ショート信号発生 · 実行待ち', ko: '전략 3 · 숏 신호 발생 · 대기 중' },
  'feed.msg3':      { zh: '策略 3 · Agent 开空成功 · 已挂止损', en: 'Strategy 3 · Short opened · SL placed', ja: '戦略 3 · ショート成功 · SL 設置済', ko: '전략 3 · 숏 성공 · SL 설정 완료' },
  'feed.msg4':      { zh: '策略 5 · 大势判定 · 神经模块更新', en: 'Strategy 5 · Trend detected · module updated', ja: '戦略 5 · 大勢判定 · モジュール更新', ko: '전략 5 · 대세 판단 · 모듈 업데이트' },
  'feed.msg5':      { zh: '策略 4 · 触发做多候选 · 观察中', en: 'Strategy 4 · Long candidate · watching', ja: '戦略 4 · ロング候補発生 · 監視中', ko: '전략 4 · 롱 후보 발생 · 관찰 중' },
  'feed.msg6':      { zh: '策略 2 · Agent 反手成功 · 已锁利', en: 'Strategy 2 · Flipped position · profit locked', ja: '戦略 2 · リバース成功 · 利益ロック', ko: '전략 2 · 리버스 성공 · 이익 확정' },
  'feed.conf':      { zh: '置信度', en: 'confidence', ja: '信頼度', ko: '신뢰도' },
  'feed.latency':   { zh: 'latency', en: 'latency', ja: '遅延', ko: '지연' },

  // ── Equity / Monthly ──
  'sec.equity':     { zh: '净值曲线 · 近 12 个月回测', en: 'Equity Curve · 12M Backtest', ja: 'エクイティカーブ · 過去 12 ヶ月', ko: '순자산 곡선 · 12개월 백테스트' },
  'sec.monthly':    { zh: '月度回报 · 12 个月', en: 'Monthly Returns · 12M', ja: '月次リターン · 12 ヶ月', ko: '월별 수익 · 12개월' },
  'monthly.note':   { zh: '10/12 正月 · 最大月亏 -7%', en: '10/12 positive · max -7%', ja: '10/12 プラス月 · 最大 -7%', ko: '10/12 흑자 · 최대 -7%' },

  // ── Leverage ──
  'lev.title':      { zh: '智能动态杠杆 · AI 自适应', en: 'Dynamic Leverage · AI Adaptive', ja: '動的レバレッジ · AI 適応', ko: '동적 레버리지 · AI 적응' },
  'lev.subtitle':   { zh: '按资金规模自动调节 · 大资金越保守', en: 'Auto-adjusts by capital · larger = safer', ja: '資金規模で自動調整 · 大資金ほど保守的', ko: '자본 규모별 자동 조절 · 클수록 보수적' },
  'lev.intro':      {
    zh: '小资金冲刺 · 大资金稳守 · 单笔风险 3-10%',
    en: 'Small = sprint · Large = guard · Risk 3-10%',
    ja: '小資金は加速 · 大資金は防御 · リスク 3-10%',
    ko: '소액 가속 · 대액 방어 · 리스크 3-10%'
  },
  'lev.tag.sprint': { zh: '冲刺', en: 'Sprint', ja: 'スプリント', ko: '스프린트' },
  'lev.tag.safe':   { zh: '稳守', en: 'Safe', ja: '防御', ko: '방어' },
  'lev.d1':         { zh: '起步加速', en: 'Startup boost', ja: '起動加速', ko: '초기 가속' },
  'lev.d2':         { zh: '高效增长', en: 'High-eff growth', ja: '高効率成長', ko: '고효율 성장' },
  'lev.d3':         { zh: '均衡运行', en: 'Balanced', ja: 'バランス運用', ko: '균형 운영' },
  'lev.d4':         { zh: '稳步扩张', en: 'Steady expand', ja: '段階的拡大', ko: '점진적 확장' },
  'lev.d5':         { zh: '大资金保守', en: 'Large cap safe', ja: '大資金保守', ko: '대자본 보수' },
  'lev.s1.t':       { zh: 'AI 实时切换', en: 'AI Live Switch', ja: 'AI ライブ切替', ko: 'AI 실시간 전환' },
  'lev.s1.d':       { zh: '权益跨档瞬间下调, 无人工干预', en: 'Auto downshift on tier cross, no manual', ja: '権益ティア越えで即座に低減, 人手不要', ko: '자본 티어 변경 시 즉시 하향, 무인 조작' },
  'lev.s2.t':       { zh: 'LOSS_CAP 硬顶', en: 'LOSS_CAP Hard Limit', ja: 'LOSS_CAP ハード上限', ko: 'LOSS_CAP 하드 리밋' },
  'lev.s2.d':       { zh: '单笔亏损锁定 3-10% 净值', en: 'Single loss capped 3-10% equity', ja: '単一損失は純資産 3-10% でロック', ko: '단일 손실 순자산 3-10% 제한' },
  'lev.s3.t':       { zh: '越大越安全', en: 'Larger = Safer', ja: '大きいほど安全', ko: '클수록 안전' },
  'lev.s3.d':       { zh: '$58K+ 强制 25x, 抗极端行情', en: '$58K+ forced 25x, extreme-market ready', ja: '$58K+ で 25x 強制, 極端相場対応', ko: '$58K+ 강제 25x, 극단 시장 대응' },

  // ── Footer ──
  'footer.sig':     { zh: '◇ 量子 AI · QUANTUM AGENT · v2.3', en: '◇ QUANTUM AI · AGENT · v2.3', ja: '◇ 量子 AI · AGENT · v2.3', ko: '◇ 퀀텀 AI · AGENT · v2.3' },
  'footer.sync':    { zh: '© 2026 · 数据每 60 秒同步', en: '© 2026 · Synced every 60s', ja: '© 2026 · 60 秒毎に同期', ko: '© 2026 · 60초마다 동기화' },

  // ── K-line page ──
  'kline.title':    { zh: 'ETH-USDT · 15m · Agent 交易标记', en: 'ETH-USDT · 15m · Agent Markers', ja: 'ETH-USDT · 15m · エージェントマーカー', ko: 'ETH-USDT · 15m · 에이전트 마커' },
  'kline.note':     { zh: '最近 30 根 · 自主决策', en: 'Last 30 bars · autonomous', ja: '直近 30 本 · 自律決定', ko: '최근 30봉 · 자율 결정' },
  'kline.demo':     { zh: '示例信号 · 仅供演示', en: 'Sample signals · demo only', ja: 'サンプルシグナル · デモ', ko: '예시 신호 · 데모' },
  'kline.pos':      { zh: '当前持仓', en: 'Open Position', ja: '現在のポジション', ko: '현재 포지션' },
  'kline.pos.entry':{ zh: '入场价', en: 'Entry', ja: 'エントリー', ko: '진입가' },
  'kline.pos.sl':   { zh: '止损价', en: 'Stop Loss', ja: 'ストップロス', ko: '손절가' },
  'kline.pos.qty':  { zh: '数量', en: 'Qty', ja: '数量', ko: '수량' },
  'kline.pos.lev':  { zh: '杠杆', en: 'Leverage', ja: 'レバレッジ', ko: '레버리지' },
  'kline.pos.upnl': { zh: '浮盈', en: 'Unrealized', ja: '含み益', ko: '평가손익' },
  'kline.pos.hold': { zh: '持仓时长', en: 'Duration', ja: '保有時間', ko: '보유 시간' },
  'kline.sigs':     { zh: '最近 3 个信号', en: 'Last 3 Signals', ja: '直近 3 シグナル', ko: '최근 3개 신호' },
  'kline.leg.long': { zh: 'Agent 开多', en: 'Agent Long', ja: 'エージェントロング', ko: '에이전트 롱' },
  'kline.leg.short':{ zh: 'Agent 开空', en: 'Agent Short', ja: 'エージェントショート', ko: '에이전트 숏' },
  'kline.leg.tp':   { zh: '盈利平仓', en: 'Take Profit', ja: '利確', ko: '이익 실현' },
  'kline.leg.sl':   { zh: '止损', en: 'Stop Loss', ja: '損切', ko: '손절' },
  'kline.leg.px':   { zh: '当前市价', en: 'Mark Price', ja: '現在価格', ko: '현재 시가' },

  // ── Trades page ──
  'tr.total':       { zh: '总交易', en: 'Total Trades', ja: '取引総数', ko: '총 거래' },
  'tr.winrate':     { zh: '胜率', en: 'Win Rate', ja: '勝率', ko: '승률' },
  'tr.pf':          { zh: '盈亏比', en: 'PF', ja: '損益比', ko: '손익비' },
  'tr.pnl':         { zh: '总盈亏', en: 'Total P&L', ja: '総損益', ko: '총 손익' },
  'tr.maxWin':      { zh: '单笔最大盈', en: 'Max Win', ja: '最大単利益', ko: '최대 이익' },
  'tr.maxLoss':     { zh: '单笔最大亏', en: 'Max Loss', ja: '最大単損失', ko: '최대 손실' },
  'tr.all':         { zh: '全部', en: 'All', ja: '全て', ko: '전체' },
  'tr.detail':      { zh: '交易明细', en: 'Trade Detail', ja: '取引明細', ko: '거래 상세' },
  'tr.th.time':     { zh: '时间', en: 'Time', ja: '時刻', ko: '시간' },
  'tr.th.strat':    { zh: '策略', en: 'Strategy', ja: '戦略', ko: '전략' },
  'tr.th.dir':      { zh: '方向', en: 'Side', ja: '方向', ko: '방향' },
  'tr.th.entry':    { zh: '入场', en: 'Entry', ja: 'エントリー', ko: '진입' },
  'tr.th.exit':     { zh: '出场', en: 'Exit', ja: 'エグジット', ko: '청산' },
  'tr.th.pnl':      { zh: '盈亏', en: 'P&L', ja: '損益', ko: '손익' },
  'tr.th.type':     { zh: '类型', en: 'Type', ja: 'タイプ', ko: '타입' },
  'tr.long':        { zh: '多', en: 'L', ja: 'ロング', ko: '롱' },
  'tr.short':       { zh: '空', en: 'S', ja: 'ショート', ko: '숏' },
  'tr.ledger':      { zh: '入金明细', en: 'Deposit Ledger', ja: '入金明細', ko: '입금 내역' },

  // ── Deposit page (My) ──
  'my.title':       { zh: '我的资产', en: 'My Assets', ja: 'マイ資産', ko: '내 자산' },
  'my.connected':   { zh: '已连接', en: 'Connected', ja: '接続済', ko: '연결됨' },
  'my.avail':       { zh: '可用余额', en: 'Available', ja: '利用可能残高', ko: '사용가능 잔액' },
  'my.settle':      { zh: '智能结算', en: 'Smart Settle', ja: 'スマート決済', ko: '스마트 정산' },
  'my.redeem':      { zh: '赎回本金', en: 'Redeem', ja: '元本償還', ko: '원금 상환' },
  'my.deposit':     { zh: '累计入金', en: 'Total Deposit', ja: '累計入金', ko: '누적 입금' },
  'my.withdrawn':   { zh: '累计已提', en: 'Total Withdrawn', ja: '累計出金', ko: '누적 출금' },
  'my.total':       { zh: '总资产价值', en: 'Total Value', ja: '総資産価値', ko: '총 자산가치' },
  'my.teamN':       { zh: '团队人数', en: 'Team Size', ja: 'チーム人数', ko: '팀 인원' },
  'my.teamReward':  { zh: '团队收益', en: 'Team Rewards', ja: 'チーム収益', ko: '팀 수익' },
  'my.stratReward': { zh: '◇ 策略收益', en: '◇ Strategy Reward', ja: '◇ 戦略収益', ko: '◇ 전략 수익' },
  'my.refLink':     { zh: '邀请链接', en: 'Referral Link', ja: '招待リンク', ko: '초대 링크' },
  'my.copy':        { zh: '复制', en: 'Copy', ja: 'コピー', ko: '복사' },
  'my.people':      { zh: '人', en: 'ppl', ja: '人', ko: '명' },

  'deposit.kicker': { zh: 'AGENT-MANAGED · BEP20', en: 'AGENT-MANAGED · BEP20', ja: 'AGENT-MANAGED · BEP20', ko: 'AGENT-MANAGED · BEP20' },
  'deposit.title':  { zh: '加入基金池', en: 'Join Fund Pool', ja: 'ファンドプール参加', ko: '펀드풀 참여' },
  'deposit.desc':   {
    zh: '量子 AI 智能体全自动执行 V2 策略。选择档位, 一键唤起钱包完成 USDT (BEP20) 转账, 系统自动确认到账, 展示数据均为策略回测与实盘真实记录。',
    en: 'Quantum AI auto-executes V2 strategy. Pick a tier, wallet auto-opens for USDT (BEP20), auto-confirmed. All shown data are real backtest & live records.',
    ja: '量子 AI が V2 戦略を自動実行。金額を選択, ウォレットが自動起動し USDT (BEP20) 送金, 自動確認。表示データは全て実バックテスト・ライブ記録。',
    ko: '퀀텀 AI 에이전트가 V2 전략을 자동 실행. 금액 선택, 지갑 자동 호출 후 USDT (BEP20) 이체, 자동 확인. 표시된 데이터는 모두 실제 백테스트와 실전 기록입니다.'
  },
  'deposit.selected':{ zh: '已选', en: 'Selected', ja: '選択済', ko: '선택됨' },
  'deposit.cta':    { zh: '一键转账', en: 'Send Now', ja: '一括送金', ko: '지금 이체' },

  'steps.title':    { zh: '入金流程', en: 'How It Works', ja: '入金の流れ', ko: '입금 절차' },
  'steps.1.t':      { zh: '选择金额', en: 'Choose Amount', ja: '金額選択', ko: '금액 선택' },
  'steps.1.d':      { zh: '档位选择, 最低 500 USDT', en: 'Pick tier, min 500 USDT', ja: '金額を選択, 最低 500 USDT', ko: '금액 선택, 최소 500 USDT' },
  'steps.2.t':      { zh: '唤起钱包', en: 'Open Wallet', ja: 'ウォレット起動', ko: '지갑 열기' },
  'steps.2.d':      { zh: 'MetaMask / OKX / TokenPocket 自动 pre-fill', en: 'MetaMask / OKX / TokenPocket auto pre-fill', ja: 'MetaMask / OKX / TokenPocket 自動プリセット', ko: 'MetaMask / OKX / TokenPocket 자동 채움' },
  'steps.3.t':      { zh: '链上确认', en: 'On-chain Confirm', ja: 'オンチェーン確認', ko: '온체인 확인' },
  'steps.3.d':      { zh: 'BSC 网络确认后, 系统自动纳入基金池', en: 'After BSC confirmation, auto-included in fund pool', ja: 'BSC 確認後, 自動的にファンドプールに追加', ko: 'BSC 확인 후 펀드풀에 자동 편입' },
  'steps.4.t':      { zh: 'Agent 接管', en: 'Agent Takes Over', ja: 'エージェント引継', ko: '에이전트 인수' },
  'steps.4.d':      { zh: '神经模块 24/7 自动扫描 + 决策 + 执行', en: '24/7 auto scan + decide + execute', ja: '24/7 自動スキャン + 判断 + 実行', ko: '24시간 자동 스캔 + 결정 + 실행' },

  'faq.title':      { zh: '常见问题', en: 'FAQ', ja: 'よくある質問', ko: '자주 묻는 질문' },
  'faq.what.q':     { zh: '量子 AI 是什么?', en: 'What is Quantum AI?', ja: '量子 AI とは?', ko: '퀀텀 AI란?' },
  'faq.what.a':     {
    zh: '量子 AI 是基于日内交易的复合型自主交易智能体, 融合多种维度的顶级策略, 覆盖 ETH 永续合约。神经决策 全天候扫描 无人工干预, 所有交易链上记录, 完全透明。',
    en: 'Quantum AI is a composite autonomous trading agent based on intraday trading, integrating multi-dimensional top strategies for ETH perpetuals. Neural decision, 24/7 scanning, zero human intervention. All trades on-chain, fully transparent.',
    ja: '量子 AI は日中取引ベースの複合型自律トレーディングエージェント。多次元のトップ戦略を融合, ETH 永久先物対応。神経判断, 全天候スキャン, 人手介入なし。全取引がオンチェーン記録, 完全透明。',
    ko: '퀀텀 AI는 데이 트레이딩 기반의 복합형 자율 트레이딩 에이전트로, 다차원 최상급 전략을 융합하여 ETH 무기한 선물을 커버합니다. 신경 판단, 24/7 스캔, 무인 개입. 모든 거래가 온체인에 기록되어 완전히 투명합니다.'
  },
  'faq.safe.q':     { zh: '资金是否安全?', en: 'Is my fund safe?', ja: '資金は安全?', ko: '자금은 안전한가요?' },
  'faq.safe.a':     {
    zh: 'USDT 通过 BSC 网络转入基金池地址, BscScan 可实时查询。收益池独立记账, 亏损自动从收益池扣, 不会侵占本金部分。',
    en: 'USDT flows via BSC to fund pool, verifiable on BscScan. Profit pool accounts separately; losses auto-deducted from profit pool, never touching principal.',
    ja: 'USDT は BSC 経由でファンドプールへ, BscScan でリアルタイム確認可能。収益プールは独立管理, 損失は収益プールから自動控除, 元本には触れません。',
    ko: 'USDT는 BSC를 통해 펀드풀로 이체되며 BscScan에서 실시간 확인 가능. 수익풀은 독립적으로 관리되며 손실은 수익풀에서 자동 차감되어 원금은 건드리지 않습니다.'
  },
  'faq.withdraw.q': { zh: '如何智能结算?', en: 'How to settle?', ja: 'スマート決済の方法は?', ko: '스마트 정산 방법?' },
  'faq.withdraw.a': {
    zh: '每个用户入金满足 30 天以上, 策略结算日即可链上选择赎回本金和利润。平台会留有足够的风险保证金, 剩余利润每个月都会根据策略实际表现进行结算与分配, 具体时间以官方公告为准。',
    en: 'After 30+ days of deposit, users may redeem principal and profit on-chain at strategy settlement day. Platform reserves sufficient risk margin; remaining profits are settled monthly based on actual strategy performance. See official announcements for exact timing.',
    ja: '入金から 30 日以上経過後, 戦略決済日にオンチェーンで元本と利益の償還が可能。プラットフォームは十分なリスク証拠金を確保, 残余利益は戦略の実績に基づき毎月決済・分配。具体的な時間は公式発表を参照。',
    ko: '입금 30일 이상 경과 후 전략 결산일에 온체인으로 원금과 이익을 상환할 수 있습니다. 플랫폼은 충분한 리스크 증거금을 확보하며 잔여 이익은 전략 실제 성과에 따라 매월 결산·분배됩니다. 구체적 시간은 공식 공지 참조.'
  },
  'faq.fixed.q':    { zh: '是否承诺固定收益?', en: 'Fixed returns promised?', ja: '固定収益を約束?', ko: '고정 수익 약속?' },
  'faq.fixed.a':    {
    zh: '不承诺任何固定回报。展示数据均为策略真实回测与实盘记录, 不构成投资建议, 请根据自身风险偏好决定是否参与。',
    en: 'No fixed returns promised. All shown data are real backtest & live records, not investment advice. Decide based on your own risk appetite.',
    ja: '固定リターンは約束していません。表示データは全て実バックテスト・ライブ記録で, 投資助言ではありません。自己判断でご参加ください。',
    ko: '어떠한 고정 수익도 약속하지 않습니다. 표시된 데이터는 실제 백테스트와 실전 기록이며 투자 조언이 아닙니다. 본인의 리스크 성향에 따라 참여를 결정하세요.'
  },
  'faq.chain.q':    { zh: '支持哪些链和币种?', en: 'Supported chains?', ja: '対応チェーン?', ko: '지원 체인?' },
  'faq.chain.a':    {
    zh: '目前仅支持 BSC 网络 USDT (BEP20), 手续费低廉, 到账迅速。其他链后续可能开放。',
    en: 'Currently only BSC network USDT (BEP20). Low fees, fast confirmation. More chains may open later.',
    ja: '現在 BSC ネットワーク USDT (BEP20) のみ対応。手数料が安く高速。他チェーンは今後追加予定。',
    ko: '현재 BSC 네트워크 USDT (BEP20)만 지원. 낮은 수수료, 빠른 확인. 다른 체인은 향후 추가 예정.'
  },

  // ── Modal ──
  'modal.brand':    { zh: '量子 AI · 智能体', en: 'Quantum AI · Agent', ja: '量子 AI · エージェント', ko: '퀀텀 AI · 에이전트' },
  'modal.cancel':   { zh: '取消', en: 'Cancel', ja: 'キャンセル', ko: '취소' },
  'modal.ok':       { zh: '确定', en: 'OK', ja: 'OK', ko: '확인' },
  'modal.confirm':  { zh: '确认', en: 'Confirm', ja: '確認', ko: '확인' },
  'modal.gotit':    { zh: '好的', en: 'Got it', ja: 'わかりました', ko: '알겠습니다' },
  'modal.done':     { zh: '完成', en: 'Done', ja: '完了', ko: '완료' },
  'modal.known':    { zh: '知道了', en: 'Got it', ja: '了解', ko: '알겠습니다' },

  // ── Withdraw / Settle modal ──
  'wd.title':       { zh: '确认智能结算', en: 'Confirm Smart Settle', ja: 'スマート決済確認', ko: '스마트 정산 확인' },
  'wd.amount':      { zh: '结算金额', en: 'Amount', ja: '決済金額', ko: '정산 금액' },
  'wd.to':          { zh: '到账地址', en: 'To Address', ja: '送金先アドレス', ko: '수신 주소' },
  'wd.network':     { zh: '网络', en: 'Network', ja: 'ネットワーク', ko: '네트워크' },
  'wd.review':      { zh: '审查方式', en: 'Review Method', ja: '審査方式', ko: '심사 방식' },
  'wd.reviewVal':   { zh: '智能体安全审查 · 防黑客', en: 'AI Security Review · Anti-Hack', ja: 'AI セキュリティ審査 · 対ハッカー', ko: 'AI 보안 심사 · 해커 방지' },
  'wd.note':        {
    zh: '为防范黑客攻击, 所有结算请求需经智能体安全审查通过后自动放款。审查基于多重签名 + 风控模型 + 链上校验, 通常 15 分钟内完成, 全程链上可查。',
    en: 'To prevent hacker attacks, all settlement requests undergo AI security review before auto-release. Review is based on multi-sig + risk model + on-chain verification, typically completed within 15 minutes, fully on-chain traceable.',
    ja: 'ハッカー攻撃防止のため, すべての決済リクエストは AI セキュリティ審査を経て自動放出されます。マルチシグ + リスクモデル + オンチェーン検証に基づく審査は通常 15 分以内に完了, 全過程オンチェーンで追跡可能。',
    ko: '해커 공격 방지를 위해 모든 정산 요청은 AI 보안 심사를 거쳐 자동 방출됩니다. 심사는 멀티시그 + 리스크 모델 + 온체인 검증에 기반하며 보통 15분 이내에 완료되고 전 과정이 온체인에서 추적 가능합니다.'
  },
  'wd.submit':      { zh: '提交审查', en: 'Submit Review', ja: '審査申請', ko: '심사 신청' },

  'wd.done.title':  { zh: '已进入安全审查', en: 'Under Security Review', ja: 'セキュリティ審査中', ko: '보안 심사 중' },
  'wd.done.amt':    { zh: '金额', en: 'Amount', ja: '金額', ko: '금액' },
  'wd.done.status': { zh: '状态', en: 'Status', ja: 'ステータス', ko: '상태' },
  'wd.done.statusVal':{ zh: '◇ 智能体安全审查中', en: '◇ AI Security Review in Progress', ja: '◇ AI セキュリティ審査中', ko: '◇ AI 보안 심사 중' },
  'wd.done.eta':    { zh: '预计放款', en: 'ETA', ja: '予定放出', ko: '예상 방출' },
  'wd.done.etaVal': { zh: '15 分钟内', en: 'Within 15 min', ja: '15 分以内', ko: '15분 이내' },
  'wd.done.note':   {
    zh: '智能体正在执行多重签名 + 风控模型 + 链上凭证核对。审查通过后自动完成链上划转, 全程无人工介入, 链上可查, 不可篡改。',
    en: 'AI Agent is executing multi-sig + risk model + on-chain verification. After review passes, on-chain transfer completes automatically, zero human intervention, on-chain verifiable and tamper-proof.',
    ja: 'AI エージェントがマルチシグ + リスクモデル + オンチェーン検証を実行中。審査通過後, オンチェーン送金が自動完了, 人手介入なし, オンチェーンで確認可能かつ改ざん不可。',
    ko: 'AI 에이전트가 멀티시그 + 리스크 모델 + 온체인 검증을 실행 중. 심사 통과 후 온체인 이체가 자동 완료, 무인 개입, 온체인 확인 가능하며 변조 불가.'
  },

  'wd.empty.title': { zh: '暂无可用余额', en: 'No Available Balance', ja: '利用可能残高なし', ko: '사용 가능 잔액 없음' },
  'wd.empty.note':  {
    zh: '您的可用余额为 0 USDT。策略结算后, 收益将自动到账可用余额, 届时可随时智能结算。',
    en: 'Your available balance is 0 USDT. After strategy settles, profits auto-arrive to available balance; smart settle anytime after.',
    ja: '利用可能残高は 0 USDT です。戦略決済後, 収益は利用可能残高に自動反映され, いつでもスマート決済可能。',
    ko: '사용 가능 잔액은 0 USDT입니다. 전략 결산 후 수익이 사용 가능 잔액에 자동 반영되며 언제든지 스마트 정산 가능합니다.'
  },

  // ── Redeem modal ──
  'rd.locked.title':{ zh: '本金锁定中', en: 'Principal Locked', ja: '元本ロック中', ko: '원금 잠금 중' },
  'rd.locked.days': { zh: '已存天数', en: 'Days Staked', ja: '預入日数', ko: '예치 일수' },
  'rd.locked.unlock':{ zh: '解锁时间', en: 'Unlock In', ja: '解除時間', ko: '해제 시간' },
  'rd.locked.days.u':{ zh: '天', en: 'days', ja: '日', ko: '일' },
  'rd.locked.after':{ zh: '天后', en: 'days later', ja: '日後', ko: '일 후' },
  'rd.locked.note': {
    zh: '为了给策略充足运行时间, 每笔入金需满 30 天方可赎回本金。届时可一键赎回至可用余额, 然后随时智能结算。',
    en: 'To give strategy sufficient runtime, each deposit requires 30 days before principal redemption. After that, one-click redeem to available balance, smart settle anytime.',
    ja: '戦略に十分な稼働時間を確保するため, 各入金は 30 日経過後に元本償還可能。以降, ワンクリックで利用可能残高へ償還, いつでもスマート決済可能。',
    ko: '전략에 충분한 운영 시간을 확보하기 위해 각 입금은 30일 후에 원금 상환 가능. 이후 원클릭으로 사용 가능 잔액으로 상환, 언제든지 스마트 정산 가능.'
  },
  'rd.all.title':   { zh: '本金已全部赎回', en: 'All Principal Redeemed', ja: '元本全額償還済', ko: '원금 전액 상환 완료' },
  'rd.all.note':    {
    zh: '您的本金已全部赎回并进入可用余额。可点击"智能结算"完成链上划转。',
    en: 'All principal has been redeemed to available balance. Click "Smart Settle" to complete on-chain transfer.',
    ja: '元本全額を利用可能残高へ償還完了。「スマート決済」で オンチェーン送金完了。',
    ko: '전액이 사용 가능 잔액으로 상환되었습니다. "스마트 정산" 클릭으로 온체인 이체 완료.'
  },
  'rd.confirm.title':{ zh: '确认赎回本金', en: 'Confirm Redemption', ja: '元本償還確認', ko: '원금 상환 확인' },
  'rd.confirm.avail':{ zh: '可赎回本金', en: 'Redeemable', ja: '償還可能', ko: '상환 가능' },
  'rd.confirm.dest':{ zh: '赎回后到账', en: 'Destination', ja: '償還先', ko: '상환처' },
  'rd.confirm.destVal':{ zh: '可用余额', en: 'Available Balance', ja: '利用可能残高', ko: '사용 가능 잔액' },
  'rd.confirm.stake':{ zh: '已存天数', en: 'Days Staked', ja: '預入日数', ko: '예치 일수' },
  'rd.confirm.note':{
    zh: '赎回后, 本金将进入您的可用余额, 可随时通过"智能结算"按钮划转到钱包。此操作会退出策略池, 之后不再产生策略收益。',
    en: 'After redemption, principal enters available balance for wallet transfer anytime via "Smart Settle". This exits the strategy pool; no more strategy rewards afterward.',
    ja: '償還後, 元本は利用可能残高に入り, いつでも「スマート決済」でウォレットに送金可能。この操作で戦略プールから退出, 以降戦略収益は発生しません。',
    ko: '상환 후 원금이 사용 가능 잔액으로 들어오며 "스마트 정산" 버튼으로 언제든지 지갑에 이체 가능. 이 작업은 전략풀에서 탈퇴하며 이후 전략 수익이 발생하지 않습니다.'
  },
  'rd.confirm.btn': { zh: '确认赎回', en: 'Confirm Redeem', ja: '償還確認', ko: '상환 확인' },
  'rd.done.title':  { zh: '本金已赎回', en: 'Principal Redeemed', ja: '元本償還完了', ko: '원금 상환 완료' },
  'rd.done.amount': { zh: '赎回金额', en: 'Amount', ja: '償還金額', ko: '상환 금액' },
  'rd.done.statusVal':{ zh: '◇ 已进入可用余额', en: '◇ Added to Available', ja: '◇ 利用可能残高に反映済', ko: '◇ 사용 가능 잔액에 반영됨' },
  'rd.done.note':   {
    zh: '您可随时通过"智能结算"按钮将资金划转到钱包。',
    en: 'You can transfer to wallet anytime via "Smart Settle" button.',
    ja: 'いつでも「スマート決済」ボタンでウォレットに送金可能。',
    ko: '언제든지 "스마트 정산" 버튼으로 지갑에 이체 가능.'
  },

  // ── Copy ref ──
  'cp.title':       { zh: '邀请链接已复制', en: 'Referral Link Copied', ja: '招待リンクをコピー済', ko: '초대 링크 복사 완료' },
  'cp.link':        { zh: '链接', en: 'Link', ja: 'リンク', ko: '링크' },
  'cp.note':        {
    zh: '分享给好友, 他们通过此链接入金后, 你将获得团队收益奖励。',
    en: 'Share with friends. When they deposit via this link, you earn team rewards.',
    ja: '友達に共有。このリンク経由で入金すると, チーム収益報酬が獲得できます。',
    ko: '친구에게 공유. 이 링크로 입금하면 팀 수익 보상을 받습니다.'
  },

  // ── Deposit modal (pay button) ──
  'dp.title':       { zh: '智能体入金授权', en: 'Agent Deposit Authorization', ja: 'エージェント入金認証', ko: '에이전트 입금 인증' },
  'dp.amount':      { zh: '入金金额', en: 'Amount', ja: '入金金額', ko: '입금 금액' },
  'dp.asset':       { zh: '目标资产', en: 'Asset', ja: '対象資産', ko: '대상 자산' },
  'dp.network':     { zh: '网络', en: 'Network', ja: 'ネットワーク', ko: '네트워크' },
  'dp.gas':         { zh: 'Gas 预估', en: 'Est. Gas', ja: 'ガス見積', ko: '가스 예상' },
  'dp.gasVal':      { zh: '~ 0.15 USDT', en: '~ 0.15 USDT', ja: '~ 0.15 USDT', ko: '~ 0.15 USDT' },
  'dp.note':        {
    zh: '智能体将唤起您的钱包 (MetaMask / OKX / TokenPocket), 预填目标地址与金额, 您只需在钱包中确认即可。资金到账后自动纳入基金池并开始为您工作。',
    en: 'AI Agent will invoke your wallet (MetaMask / OKX / TokenPocket) with target & amount pre-filled. Just confirm in your wallet. Funds auto-enter fund pool once received.',
    ja: 'AI エージェントが ウォレット (MetaMask / OKX / TokenPocket) を起動, 送金先と金額をプリセット。ウォレットで承認するだけ。到着次第, ファンドプールに自動的に組み込まれます。',
    ko: 'AI 에이전트가 지갑 (MetaMask / OKX / TokenPocket)을 호출하여 대상 주소와 금액을 자동 채웁니다. 지갑에서 확인만 하면 됩니다. 도착 후 자동으로 펀드풀에 편입됩니다.'
  },
  'dp.invoke':      { zh: '唤起钱包', en: 'Open Wallet', ja: 'ウォレット起動', ko: '지갑 호출' }
};

const LANG_LIST = ['zh', 'en', 'ja', 'ko'];
const LANG_NAME  = { zh: '中文', en: 'English', ja: '日本語', ko: '한국어' };
const LANG_CODE  = { zh: 'ZH', en: 'EN', ja: 'JP', ko: 'KR' };
const LANG_SHORT = { zh: '中文', en: 'EN', ja: '日本語', ko: '한국어' };
let currentLang = localStorage.getItem('quantumLang') || 'zh';

function t(key) {
  const v = I18N[key];
  return v ? (v[currentLang] || v.zh) : key;
}
function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    if (I18N[k]) el.textContent = t(k);
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const k = el.dataset.i18nHtml;
    if (I18N[k]) el.innerHTML = t(k);
  });
  document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : currentLang;
  const trigL = document.querySelector('.lang-trigger .lang-current');
  if (trigL) trigL.textContent = LANG_SHORT[currentLang];
}
function setLang(lang) {
  if (!I18N['nav.overview'][lang]) return;
  currentLang = lang;
  localStorage.setItem('quantumLang', lang);
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('on', b.dataset.lang === lang));
  applyI18n();
  const sw = document.querySelector('.lang-switcher');
  if (sw) sw.classList.remove('open');
}
function initLangSwitcher() {
  const container = document.querySelector('.lang-switcher');
  if (!container) return;
  container.innerHTML = `
    <button class="lang-trigger" type="button">
      <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></svg>
      <span class="lang-current">${LANG_SHORT[currentLang]}</span>
      <span class="caret"></span>
    </button>
    <div class="lang-menu">
      ${LANG_LIST.map(l => `
        <button class="lang-btn ${l === currentLang ? 'on' : ''}" data-lang="${l}" type="button">
          <span>${LANG_NAME[l]}</span>
          <span class="lang-code">${LANG_CODE[l]}</span>
        </button>
      `).join('')}
    </div>
  `;
  const trig = container.querySelector('.lang-trigger');
  trig.addEventListener('click', e => {
    e.stopPropagation();
    container.classList.toggle('open');
  });
  container.querySelectorAll('.lang-btn').forEach(b => {
    b.addEventListener('click', e => {
      e.stopPropagation();
      setLang(b.dataset.lang);
    });
  });
  document.addEventListener('click', e => {
    if (!container.contains(e.target)) container.classList.remove('open');
  });
  applyI18n();
}
document.addEventListener('DOMContentLoaded', initLangSwitcher);
