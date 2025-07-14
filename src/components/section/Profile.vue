<script setup lang="ts">
import ArrangeItem from '../common/ArrangeItem.vue'
</script>

<template>
  <section id="profile" class="profile contents">
    <h2>Profile</h2>
    <div class="profile__inner">
      <article>
        <ArrangeItem>
          <template #icon>
            <font-awesome-icon :icon="['fas', 'baby']" style="height: 50; width: 50;"/>
          </template>
          <template #heading>1988〜</template>
          東京都杉並区に生まれる。<br>
          一番最初に語った夢は「サーカスの玉乗り」で、保育園の園庭で日々ボールに乗る練習に明け暮れていた。
          幼少期はぼんやりしたタイプの子どもだったが、当時からモノづくりへの興味があり、小学校では図画工作クラブに所属していた。
        </ArrangeItem>
        <ArrangeItem>
          <template #icon>
            <font-awesome-icon :icon="['fas', 'face-grin-stars']" style="height: 43; width: 43;"/>
          </template>
          <template #heading>2003〜</template>
          幼馴染が教えてくれた "農業高校" に興味を持ち入学、食品科学に出会う。<br>
          情報処理の授業でHTML・CSSと触れる機会があり、面白さから自宅でも色々やってみる。
          また、演劇部に入部したことで何かが目覚め、たくさん喋るようになる。<br>
        </ArrangeItem>
        <ArrangeItem>
          <template #icon>
            <font-awesome-icon :icon="['fad', 'cow']" style="height: 50; width: 50;"/>
          </template>
          <template #heading>2006〜</template>
          高校時代にやんわり教員に憧れ、部活顧問の勧めもあって北海道の大学に通うことに。<br>
          農業体験イベントの企画・運営に参加したり、接客業のアルバイト勤務をする中で、周囲の活動をサポートし円滑にことが運ぶように尽力する面白さや自分なりの適性を見つける。
        </ArrangeItem>
        <ArrangeItem>
          <template #icon>
            <font-awesome-icon :icon="['fas', 'children']" style="height: 50; width: 50;"/>
          </template>
          <template #heading>2010〜</template>
          高校理科と高校農業の教員免許を取得して卒業するものの、覚悟が決まらずに迷った結果、学童保育の道に進んでみる。<br>
          最初は指導的な場面が苦手であったが、子どもたちとの関わりの中で成長させてもらい、メリハリのある対応を身につけた。
          また、子どもたちに向けて企画した謎解きイベントは大盛況で、毎年の恒例行事として定着する。
        </ArrangeItem>
        <ArrangeItem>
          <template #icon>
            <font-awesome-icon :icon="['fas', 'palette']"  style="height: 43; width: 43;"/>
          </template>
          <template #heading>2014〜</template>
          やはり、モノづくりへの挑戦を諦めきれず、通信制の美大に通ってみることにする。
          とある授業の中でプログラミングにガッツリ触れることになり、担当講師から「伊藤さんって、プログラミングやってた？」と聞かれたことから、自身にも適性があるのではと満更でも無い気持ちに。
        </ArrangeItem>
        <ArrangeItem>
          <template #icon>
            <font-awesome-icon :icon="['fas', 'square-binary']" style="height: 50; width: 50;"/>
          </template>
          <template #heading>2018〜</template>
          ついに、IT企業への転職し、未経験ながらWebアプリケーション開発の技術を身につけ、その面白さを改めて感じる。<br>
          教育を学んできた経験と、持ち前のホスピタリティを買われ2年目からは教育部門に所属。その後退職までの6年間で、自社と他社合わせて述べ240名以上の研修を担当。
          教育事業の立ち上げは、自分の中でも貴重な経験で学ぶことが多かった。
        </ArrangeItem>
        <ArrangeItem>
          <template #icon>
            <font-awesome-icon :icon="['fas', 'battery-three-quarters']" style="height: 50; width: 50;"/>
          </template>
          <template #heading>2024〜現在</template>
          プレイングマネージャーを期待され、自分のキャパシティを超える仕事を抱え込んでしまい心身を疲弊。一度自分の働き方や、やりたいことを見つめ直すため、充電期間をとることを決意。<br>
          やはり主軸は開発に置いていたいと再認識し、改めて自身の能力・スキルを最大限発揮できる環境を探す期間に入っている。
        </ArrangeItem>
      </article>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@media (min-width: 1024px) {
  .profile__inner {
    display: flex;
    justify-content: center;
  }
  article {
    max-width: 40em;
  }
}
</style>