import {
    TilePortfolioWrapper,
    TilePortfolioTitle,
    TilePortfolioContainer,
    TilePortfolioList,
    TilePortfolioListItem,
} from "./styled.js";

const TilePortfolio = () => {

    return (
        <TilePortfolioWrapper>
            <TilePortfolioContainer>
                <TilePortfolioTitle>My-VR-CV</TilePortfolioTitle>
                <TilePortfolioList>
                    <TilePortfolioListItem>
                        In this project I'd like to show a little more about my past experiences - education, work history etc.
                    </TilePortfolioListItem>
                    <TilePortfolioListItem>Demo:</TilePortfolioListItem>
                    <TilePortfolioListItem>Repo:</TilePortfolioListItem>
                </TilePortfolioList>
            </TilePortfolioContainer>
            <TilePortfolioContainer>
                <TilePortfolioTitle>Kuchnia-u-Kowala</TilePortfolioTitle>
                <TilePortfolioList>
                    <TilePortfolioListItem>
                        Using this simple app you can make your list of products to buy without the need to search for what products you need for those meals
                    </TilePortfolioListItem>
                    <TilePortfolioListItem>Demo:</TilePortfolioListItem>
                    <TilePortfolioListItem>Repo:</TilePortfolioListItem>
                </TilePortfolioList>
            </TilePortfolioContainer>
        </TilePortfolioWrapper>
    )
};

export default TilePortfolio;