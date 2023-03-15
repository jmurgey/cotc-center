/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import BattleUI from './interface/Battle';

function App() {
  return (
    <div css={
      css`
        display: flex;
      `
    }>
      <BattleUI />
    </div>
  );
}

export default App;
