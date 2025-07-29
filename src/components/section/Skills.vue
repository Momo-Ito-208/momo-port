<template>
  <section id="skills" class="skills contents">
    <h2>Skills</h2>
    <article>
      <table>
        <caption>
          業務経験
        </caption>
        <tbody>
          <tr>
            <th>PHPを使った<br>Webアプリケーション開発教育</th>
            <td>
              <span>PHP</span>
              <span>MySQL</span>
              <span>Larabel</span>
              <div class="only-sp">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>jQuery</span>
                <span>SQL</span>
                <span>Git</span>
              </div>
            </td>
            <td rowspan="2" class="only-pc">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>jQuery</span>
              <span>SQL</span>
              <span>Git</span>
            </td>
          </tr>
          <tr>
            <th>Javaを使った<br>Webアプリケーション開発教育</th>
            <td>
              <span>Java</span>
              <span>Oracle DB</span>
              <span>SpringBoot</span>
              <div class="only-sp">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>jQuery</span>
                <span>SQL</span>
                <span>Git</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <table>
        <caption>
          最近の自己学習
        </caption>
        <tbody>
          <tr>
            <th>ネイティブアプリ開発</th>
            <td rowspan="2" class="only-pc">
              <span>TypeScript</span>
            </td>
            <td>
              <span class="only-sp">TypeScript</span>
              <span>React Native</span>
              <span>Expo</span>
              <span>expo-sqlite</span>
              <span>React Native Papers</span>
            </td>
          </tr>
          <tr>
            <th>ポートフォリオサイトの作成</th>
            <td>
              <span class="only-sp">TypeScript</span>
              <span>Vue.js</span>
              <span>SCSS</span>
            </td>
          </tr>
        </tbody>
      </table>
      そのほかの技術については<a href="https://stackshare.io/ItoMomo/mystack" target="_blank" rel="noopener">こちら</a>をご覧ください。
    </article>
  </section>
</template>

<style lang="scss" scoped>
table {
  table-layout: fixed;
  border-collapse: collapse;
  border: 2px solid rgb(200,200,200);
  letter-spacing: 1px;
  font-size: 0.8rem;
  margin-bottom: 1rem;
}

td, th {
  border: 1px solid rgb(200,200,200);
  padding: 10px 20px;
  text-align: center;
}
th {
  background-color: rgb(234, 234, 234);
  width: 300px;
  color: var(--vt-c-indigo);
}
td {
  width: 500px;
  padding: 1rem 2rem;
}

caption {
  padding: 10px;
  font-size: large;
  text-align: left;
  line-height: 2rem;
  text-decoration: underline;
}

span {
  display: inline-block;
  border-radius: 5px;
  background-color: rgb(234, 234, 234);
  margin: 5px;
  padding: 0 10px;
  height: 1.5rem;
  text-align: center;
  color: var(--vt-c-indigo);
}

.only-sp {
  display: none;
}

@media (max-width: 640px) {
  table {
    width: 100%;
  }

  td, th{
    display: block;
    width: 100%;
  }

  span {
    display: block;
  }

  .only-pc {
    display: none;
  }

  .only-sp {
    display: block;
  }
}

</style>