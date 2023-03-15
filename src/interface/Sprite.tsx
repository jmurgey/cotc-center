/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const Sprite = ({character: { name, sprite }}: {character: { name: string, sprite: string }}) => {
    return (
        <div>
            <img 
            css={css`
                max-height: 59px;
                max-width: 59px;
            `}
            src={sprite} alt={`${name} sprite`} />
        </div>
    );
}

export default Sprite;