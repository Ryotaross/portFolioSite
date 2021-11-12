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
      <MainName>Social</MainName>
      <MainText>アカウントです。</MainText>
      <Flex>
        <Month>1月</Month>
        <div>
        <MainText>プログラミング開始</MainText>
        <MainText>プログラミング開始</MainText>
        </div>
      </Flex>
      <Flex>
        <Month>1月</Month>
        <div>
        <MainText>プログラミング開始</MainText>
        <MainText>プログラミング開始</MainText>
        </div>
      </Flex>
    </Main>
  );
}

export default HistoryMain;
