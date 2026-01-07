import {
    TileWrapper,
    TileTitle,
    TileContainer,
    TileList,
    TileListItem,
    TileBreak
} from "./styled.js";

const Tile = ({ firstPage }) => {

    return (
        <TileWrapper>
            <TileContainer>
                {firstPage === true ? (
                    <>
                        <TileTitle>🥷🏻 My skillset includes:</TileTitle>
                        <TileBreak/>
                        <TileList>
                            <TileListItem>Html</TileListItem>
                            <TileListItem>Css</TileListItem>
                            <TileListItem>JavaScript</TileListItem>
                            <TileListItem>GitHub</TileListItem>
                            <TileListItem>JSX</TileListItem>
                            <TileListItem>React</TileListItem>
                            <TileListItem>React Router</TileListItem>
                            <TileListItem>Hooks</TileListItem>
                            <TileListItem>Styled Components</TileListItem>
                            <TileListItem>Api</TileListItem>
                            <TileListItem>Axios</TileListItem>
                            <TileListItem>Build</TileListItem>
                            <TileListItem>Redux</TileListItem>
                            <TileListItem>Redux Saga</TileListItem>
                            <TileListItem>Redux Toolkit</TileListItem>
                            <TileListItem>Redux LocalStorage</TileListItem>
                            <TileListItem>npm</TileListItem>
                            <TileListItem>json</TileListItem>
                            <TileListItem>Scrum</TileListItem>
                            <TileListItem>Team Work</TileListItem>
                            <TileListItem>Pull requests</TileListItem>
                            <TileListItem>Review in GitHub</TileListItem>
                        </TileList>
                    </>
                ) : (
                    <>
                        <TileTitle>💡📗What I want to learn next:</TileTitle>
                        <TileBreak/>
                        <TileList>
                            <TileListItem>typeScript</TileListItem>
                            <TileListItem>AI</TileListItem>
                            <TileListItem>SQL</TileListItem>
                            <TileListItem>More about npm</TileListItem>
                            <TileListItem>More about json</TileListItem>
                            <TileListItem>More about team work</TileListItem>
                            <TileListItem>More about Scrum</TileListItem>
                            <TileListItem>More about Pull requests</TileListItem>
                        </TileList>
                    </>)}
            </TileContainer>
        </TileWrapper>
    )
};

export default Tile;