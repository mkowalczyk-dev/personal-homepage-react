import {
    TileWrapper,
    TileTitle,
    TileImage,
    TileContainer,
    TileJob,
    TileName,
} from "./styled.js";

const Tile = () => {

    return (
        <TileWrapper>
            <TileContainer>
                <TileTitle>My skillset includes:</TileTitle>
                <TileName>Michał Kowalczyk</TileName>
                <TileJob>
                    <li>React</li>
                    <li>React</li>
                    <li>React</li>
                </TileJob>
            </TileContainer>
        </TileWrapper>
    )
};

export default Tile;