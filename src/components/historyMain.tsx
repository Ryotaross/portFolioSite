import React from 'react';
import '../App.css';
import { Main } from './contents';
import { MainName } from './contents';
import { MainText } from './contents';
import { Flex } from './contents';
import { Month } from './contents';

function HistoryMain() {
  return (
    <Main>
      <MainName>Biography</MainName>
      <MainText>これまでやってきたことを書いていきます。</MainText>
      <Flex>
        <div>
        <Month>2015年3月
        </Month>
        </div>
        <div>
          <MainText>福岡県立春日高等学校卒業</MainText>
          <MainText>
            高校時代は野球部で、ポジションはキャッチャーでした。最後の夏の大会は５回戦敗退でした。
            理系選択で、野球と勉強両方頑張ってました。
          </MainText>
        </div>
      </Flex>
      <Flex>
        <div>
        <Month>2015年4月<br/>
              〜<br />
              2017年3月
        </Month>
        </div>
        <div>
          <MainText>福岡県立春日高等学校卒業</MainText>
          <MainText>
            高校時代は野球部で、ポジションはキャッチャーでした。最後の夏の大会は５回戦敗退でした。
            理系選択で、野球と勉強両方頑張ってました。
          </MainText>
        </div>
      </Flex>
    </Main>
  );
}

export default HistoryMain;
