import { View } from "react-native";
import { Profile } from "./component/header";
import History from "./component/history";


function App() {
  return (
    <View>
      <Profile />
      <History
        job="フロントエンドエンジニア"
        skill="HTML/CSS/JavaScript/React"
        info="職場での実績としては、リーダー経験あり。UI/UXの改善。APIとの通信のパフォーマンス改善に努めた"
      />
      <History
        job="将棋プレイヤー"
        skill="戦法/定跡/読み"
        info="将棋の大会に出場経験あり。最高位はアマチュア四段。"
      />
      {/* 大学の経歴*/}
      <History
        job="東京工業大学"
        skill="情報工学/数学/英語"
        info="大学では情報工学を専攻。数学と英語も得意。"
      />
    </View>
  );
}



export default App;